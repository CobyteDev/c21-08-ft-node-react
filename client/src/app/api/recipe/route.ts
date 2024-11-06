import { NextRequest, NextResponse } from "next/server"
import { CohereClient } from "cohere-ai"
import { currentStock } from "@/mocks/db.mock"
import { getPrompt } from "./promp"

const cohere = new CohereClient({ token: process.env.COHERE_API_KEY })

async function chatWithCohere(userPrompt: string) {
  const res = await cohere.chat({
    model: "command-r-plus",
    message: userPrompt,
  })

  return res
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const recipeQuery = searchParams.get("recipequery")
    if (!recipeQuery) throw new Error("query empty")

    const prompt = getPrompt(currentStock, recipeQuery)
    const response = await chatWithCohere(prompt)
    console.log("response.text: ", response.text)

    const regex = /\[([\s\S]*?)\]/g
    const matches = response.text.match(regex)
    if (!matches)
      throw new Error(`there was an error trying to parse the response`)
    const arrays = matches.map((m) => JSON.parse(m))

    const payload = {
      recipe: recipeQuery,
      allIngredients: arrays[0],
      owned: arrays[1],
      instructions: arrays[2],
    }
    // const matches = Array.from(response.text.matchAll(regex), (match) =>
    //   match[1].split(/\s*,\s*/),
    // )
    return NextResponse.json(payload, { status: 200 })
  } catch (err) {
    return NextResponse.json(`there was an error: ${err}`)
  }
}

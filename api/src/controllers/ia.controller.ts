import { Request, Response } from "express";
// import { ProductService } from "../services/product.service";
import { UserException } from "../exceptions/UserException";
import { CohereClient } from "cohere-ai";
import { getPrompt } from "../utils/prompt";
import { productRepository } from "../repositories/product.repository";
import { ILike, In } from "typeorm";

// interface RecipeQuery {
//   recipequery?: string;
// }

const cohere = new CohereClient({ token: process.env.COHERE_API_KEY });

async function chatWithCohere(userPrompt: string) {
  const res = await cohere.chat({
    model: "command-r-plus",
    message: userPrompt,
  });

  return res;
}

export class IaController {
  //private productServices = new ProductService();

  async recipe(req: Request, res: Response): Promise<any> {
    try {
      const recipeQuery = req.query.recipequery;

      console.log("Recipe Quert recipeQuery", recipeQuery);

      const products = await productRepository.find();

      const productNames = products.map((product) => product.name);
      console.log("Proruct Names", productNames);

      const prompt = getPrompt(products, recipeQuery as string);

      const response = await chatWithCohere(prompt);

      const regex = /\[([\s\S]*?)\]/g;
      const matches = response.text.match(regex);
      if (!matches)
        throw new Error(`there was an error trying to parse the response`);
      const arrays = matches.map((m) => JSON.parse(m));

      const allIngredients = arrays[0];
      const owned = await productRepository.find({
        where: {
          name: In(allIngredients),
        },
      });

      const payload = {
        recipe: recipeQuery,
        allIngredients: allIngredients,
        owned: owned.map((p) => p),
        instructions: arrays[2],
      };

      console.log(payload);

      return res.status(200).json(payload);
    } catch (error) {
      if (error instanceof UserException) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

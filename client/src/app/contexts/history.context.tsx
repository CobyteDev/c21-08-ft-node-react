"use client"

import { createContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ChildrenProviderProps } from "../types/ChildrenProviderProps.type"

export const HistoryCtx = createContext<string[]>([])

export const HistoryCtxProvider = ({ children }: ChildrenProviderProps) => {
  const [history, setHistory] = useState<string[]>([])
  const pathname = usePathname()

  useEffect(() => {
    setHistory((prev) => [...prev, pathname])
  }, [pathname])

  return <HistoryCtx.Provider value={history}>{children}</HistoryCtx.Provider>
}

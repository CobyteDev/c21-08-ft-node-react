"use client"
import React, { PropsWithChildren } from "react"
import Sidebar from "./Sidebar"

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}

export default AdminLayout

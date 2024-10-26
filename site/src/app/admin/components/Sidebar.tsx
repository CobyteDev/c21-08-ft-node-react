import Link from "next/link"

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-800 p-4 text-white">
      <h2 className="mb-4 text-lg font-bold">Panel de Administración</h2>
      <nav>
        <ul>
          <li>
            <Link href="/admin" className="block py-2 hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/orders" className="block py-2 hover:bg-gray-700">
              Gestión de Pedidos
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              className="block py-2 hover:bg-gray-700"
            >
              Gestión de Productos
            </Link>
          </li>
          <li>
            <Link
              href="/admin/categories"
              className="block py-2 hover:bg-gray-700"
            >
              Gestión de Categorías
            </Link>
          </li>
          <li>
            <Link
              href="/admin/promotions"
              className="block py-2 hover:bg-gray-700"
            >
              Gestión de Promociones
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

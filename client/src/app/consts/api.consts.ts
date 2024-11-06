export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3170"
export const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_BASE_URL || "http://localhost:3000"
export const PROMOTION_ENDPOINT = `${API_BASE_URL}/promotion`
export const PRODUCTS_BASE_ENDPOINT = `${API_BASE_URL}/product/category`
export const PRODUCT_BASE_ENDPOINT = `${API_BASE_URL}/product`

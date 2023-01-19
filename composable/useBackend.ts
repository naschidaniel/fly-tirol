import { ref } from 'vue'
import type { Ref } from 'vue'
import { useData } from './useData'
import type { Product } from '@/types/Product'

export const products: Ref<Product[]> = ref([] as Product[])
export function useBackend() {
  const { backend } = useData()

  async function initShopBackend() {
    const request: RequestInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(`${backend}/api/shop/products`, request).then(
      (response) => {
        const data = response.json()
        return data
      }
    )
    products.value = response.data
  }

  function updateCart(body: String) {
    console.log(body)
    return undefined
  }

  function getProduct(category: string, slug: string): Product {
    const product: Product =
      products.value.find(
        (s) => s.category?.toLowerCase() === category && s.slug === slug
      ) ?? ({} as Product)
    return product
  }

  return {
    getProduct,
    updateCart,
    initShopBackend,
  }
}

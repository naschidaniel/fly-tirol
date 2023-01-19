import { ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { useData } from './useData'
import { useFormat } from './useFormat'
import type { Product } from '@/types/Product'

export const products: Ref<Product[]> = ref([] as Product[])
export function useBackend() {
  const { backend } = useData()
  const { formatPrice } = useFormat()

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

import { ref } from 'vue'
import type { Ref } from 'vue'
import { useData } from './useData'
import type { Product } from '@/types/Product'
import type { Cart } from '@/types/Cart'

export const products: Ref<Product[]> = ref([] as Product[])
const cartId: Ref<string | null> = ref(null)
const cart: Ref<Cart | undefined> = ref(undefined)

export function useBackend() {
  const { backend, isFlyTirol } = useData()

  const cartItemsLength = computed(() => cart.value?.cart_items?.length || 0)
  const isCartItems = computed(
    () =>
      cart.value?.cart_items?.length !== undefined &&
      cart.value?.cart_items?.length >= 1,
  )
  async function initShopBackend() {
    if (!process.client || !isFlyTirol) return
    await useFetch<Product[]>(`${backend}/shop/api/products`, {
      onResponse({ response }) {
        products.value = response._data?.data
      },
    })
  }

  async function initCart() {
    if (!process.client || !isFlyTirol) return
    const _cartId = localStorage.getItem('cartId')
    if (_cartId === null) {
      console.log('Cart ID is null')
    }
    const url =
      _cartId !== null
        ? `${backend}/shop/api/cart/${_cartId}`
        : `${backend}/shop/api/cart`
    await useFetch(url, {
      onResponse({ response, options }) {
        if (!response.ok) {
          console.error(
            `Response was not okay. The ${_cartId} has been removed from localStorage`,
          )
          localStorage.removeItem('cartId')
          cartId.value = null
        }
        try {
          cart.value = response._data.data
          cartId.value = response._data.data.id
          localStorage.setItem('cartId', response._data.data.id)
          console.info(`The Cart ${_cartId} was loaded from local storrage`)
        } catch {
          console.error(
            `Failed to init the Cart. The ${_cartId} has been removed from localStorage`,
          )
          localStorage.removeItem('cartId')
          cartId.value = null
        }
        options.query = options.query || {}
        options.query.t = new Date()
      },
    })
  }

  async function updateCart(body: string): Promise<void> {
    await useFetch(`${backend}/shop/api/cart/${cartId.value}`, {
      method: 'POST',
      body,
      onResponse({ response }) {
        cart.value = response._data.data
        cartId.value = response._data.data.id
        localStorage.setItem('cartId', response._data.data.id)
        navigateTo('/buchen')
      },
    })
  }

  function getProduct(category: string, slug: string): Product {
    const product: Product =
      products.value.find(
        (s) => s.category?.toLowerCase() === category && s.slug === slug,
      ) ?? ({} as Product)
    return product
  }

  async function updateProduct(
    pk: string | undefined,
    quantity: string,
  ): Promise<void> {
    const request: RequestInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity }),
    }
    await fetch(`${backend}/shop/api/cartitem/${pk}`, request)
    await initCart()
  }

  async function deleteProduct(pk: string | undefined): Promise<void> {
    await useFetch(`${backend}/shop/api/cartitem/${pk}`, {
      method: 'DELETE',
    })
    await initCart()
  }

  async function deleteCart(pk: string | undefined): Promise<void> {
    await useFetch(`${backend}/shop/api/cart/${pk}`, { method: 'DELETE' })
    localStorage.removeItem('cartId')
    await initCart()
  }

  return {
    cart,
    deleteProduct,
    deleteCart,
    updateProduct,
    cartItemsLength,
    isCartItems,
    getProduct,
    updateCart,
    initCart,
    initShopBackend,
  }
}

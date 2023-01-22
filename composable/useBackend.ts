import { ref } from 'vue'
import type { Ref } from 'vue'
import { useData } from './useData'
import type { Product } from '@/types/Product'
import type { Cart } from '@/types/Cart'

export const products: Ref<Product[]> = ref([] as Product[])
const cartId: Ref<string | null> = ref(null)
const cart: Ref<Cart | undefined> = ref(undefined)

export function useBackend() {
  const { backend } = useData()

  const cartItemsLength = computed(() => cart.value?.cart_items?.length || 0)
  const isCartItems = computed(
    () =>
      cart.value?.cart_items?.length !== undefined &&
      cart.value?.cart_items?.length >= 1
  )
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

  async function initCart(): Promise<Cart | undefined> {
    if (!process.client) return
    const _cartId = localStorage.getItem('cartId')
    const url =
      _cartId !== null
        ? `${backend}/api/shop/cart/${_cartId}`
        : `${backend}/api/shop/cart`
    const request: RequestInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await fetch(url, request).then((response) =>
        response.json()
      )
      updateCartId(response.data.id as string)
      cart.value = response.data
      return response.data as Cart
    } catch {
      console.error(
        `Failed to init the Cart. The ${cartId.value} has been removed from localStorage`
      )
      localStorage.removeItem('cartId')
      cartId.value = null
    }
  }

  function updateCartId(newCartId: string): void {
    cartId.value = newCartId
    localStorage.setItem('cartId', newCartId)
  }

  async function updateCart(body: string): Promise<Cart> {
    const request: RequestInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    }
    const response = await fetch(
      `${backend}/api/shop/cart/${cartId.value}`,
      request
    ).then((response) => {
      const data = response.json()
      return data
    })
    cart.value = response.data
    updateCartId(response.data.id as string)
    navigateTo('/buchen')
    return response
  }

  function getProduct(category: string, slug: string): Product {
    const product: Product =
      products.value.find(
        (s) => s.category?.toLowerCase() === category && s.slug === slug
      ) ?? ({} as Product)
    return product
  }

  async function updateProduct(
    pk: string | undefined,
    quantity: string
  ): Promise<void> {
    const request: RequestInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity }),
    }
    await fetch(`${backend}/api/shop/cartitem/${pk}`, request)
    await initCart()
  }

  async function deleteProduct(pk: string | undefined): Promise<void> {
    const request: RequestInit = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    await fetch(`${backend}/api/shop/cartitem/${pk}`, request)
    await initCart()
  }

  async function deleteCart(pk: string | undefined): Promise<void> {
    const request: RequestInit = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    await fetch(`${backend}/api/shop/cart/${pk}`, request)
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

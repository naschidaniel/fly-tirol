import { ref } from 'vue'
import type { Ref } from 'vue'
import { useData } from './useData'
import type { Product } from '@/types/shop/models/Product'
import type { Cart } from '@/types/shop/models/Cart'
import type { Alert } from '@/types/shop/models/Alert'
import type { User } from '@/types/shop/models/User'

export const products: Ref<Product[]> = ref([] as Product[])
const cartId: Ref<string | null> = ref(null)
const cart: Ref<Cart | undefined> = ref(undefined)
const user: Ref<User | undefined> = ref(undefined);
const alert: Ref<Alert | undefined> = ref(undefined)
const isShowAlert: Ref<Boolean> = ref(false)

export function useBackend() {
  const { backend, isHydrogen } = useData()

  const cartItemsLength = computed(
    () => cart.value?.get_cart_items?.length || 0,
  )
  const isCartItems = computed(
    () =>
      cart.value?.get_cart_items?.length !== undefined &&
      cart.value?.get_cart_items?.length >= 1,
  )
  async function initShopBackend() {
    if (!process.client || isHydrogen) return
    await useFetch<Product[]>(`${backend}/shop/api/products`, {
      onResponse({ response }) {
        products.value = response._data?.data
        updateAlert(response._data?.alert)
      },
      onResponseError({ response }) {
        updateAlert(response._data?.alert)
      },
    })
  }

  function updateAlert(value: Alert | undefined) {
    if (value === undefined) {
      console.log('The alert is undefined')
      return
    }
    alert.value = value
    isShowAlert.value = value.type === 'error'
    if (value.type === 'error') {
      console.error(value.message)
    } else if (value.type === 'warning') {
      console.warn(value.message)
    } else {
      console.log(value.message)
    }
  }

  async function initCart() {
    if (!process.client || isHydrogen) return
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
          updateAlert(response._data.alert)
          cartId.value = response._data.data.id
          localStorage.setItem('cartId', response._data.data.id)
          console.info(`The Cart ${_cartId} was loaded from local storrage`)
        } catch {
          updateAlert({
            message: `Failed to init the Cart. The ${_cartId} has been removed from localStorage`,
            type: 'error',
          })
          localStorage.removeItem('cartId')
          cartId.value = null
        }
        options.query = options.query || {}
        options.query.t = new Date()
      },
      onResponseError({ response }) {
        updateAlert(response._data?.alert)
      },
    })
  }

  async function getCsrfToken(): Promise<any> {
    if (!process.client || isHydrogen) return
    await useFetch(`${backend}/shop/api/getcsrf/`, {
      method: 'GET',
      onResponse() {
        updateAlert({
          message: 'The csrf token has been set correct',
          type: 'success',
        })
      },
      onResponseError() {
        updateAlert({
          message: 'Failed set the csrf token',
          type: 'error',
        })
      },
    })
  }

  async function whoami(): Promise<any> {
    if (!process.client || isHydrogen) return
    await useFetch(`${backend}/shop/api/user/whoami/`, {
      method: 'GET',
      onResponse({ response }) {
        user.value = response._data.data
        updateAlert(response._data.alert)
      },
      onResponseError({ response }) {
        updateAlert(response._data?.alert)
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
        updateAlert(response._data.alert)
        localStorage.setItem('cartId', response._data.data.id)
        navigateTo('/buchen')
      },
      onResponseError({ response }) {
        updateAlert(response._data?.alert)
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
    await useFetch(`${backend}/shop/api/cartitem/${pk}`, {
      method: 'POST',
      body: JSON.stringify({ quantity }),
      onResponse({ response }) {
        updateAlert(response._data.alert)
      },
      onResponseError({ response }) {
        updateAlert(response._data?.alert)
      },
    })
    await initCart()
  }

  async function deleteProduct(pk: string | undefined): Promise<void> {
    await useFetch(`${backend}/shop/api/cartitem/${pk}`, {
      method: 'DELETE',
      onResponse({ response }) {
        updateAlert(response._data.alert)
      },
      onResponseError({ response }) {
        updateAlert(response._data?.alert)
      },
    })
    await initCart()
  }

  async function deleteCart(pk: string | undefined): Promise<void> {
    await useFetch(`${backend}/shop/api/cart/${pk}`, {
      method: 'DELETE',
      onResponse({ response }) {
        updateAlert(response._data.alert)
      },
      onResponseError({ response }) {
        updateAlert(response._data?.alert)
      },
    })
    localStorage.removeItem('cartId')
    await initCart()
  }

  return {
    alert,
    user,
    isShowAlert,
    cart,
    deleteProduct,
    deleteCart,
    updateProduct,
    getCsrfToken,
    whoami,
    cartItemsLength,
    isCartItems,
    getProduct,
    updateCart,
    initCart,
    initShopBackend,
  }
}

import { ref } from 'vue'
import type { Ref } from 'vue'
import { useData } from './useData'
import { useCalender } from './useCalender'
import type { Product } from '@/types/shop/models/Product'
import type { Cart } from '@/types/shop/models/Cart'
import type { Alert } from '@/types/shop/models/Alert'
import type { User } from '@/types/shop/models/User'

export const products: Ref<Product[]> = ref([] as Product[])
const cartId: Ref<string | null> = ref(null)
const cart: Ref<Cart | undefined> = ref(undefined)
const user: Ref<User | undefined> = ref(undefined)
const alert: Ref<Alert | undefined> = ref(undefined)
const isShowAlert: Ref<boolean> = ref(false)
const product: Ref<Product> = ref({} as Product)

export function useBackend() {
  const { backend, isHydrogen, isGh2di } = useData()
  const { selectedDateString } = useCalender()

  const cartItemsLength = computed(
    () => cart.value?.get_cart_items?.length || 0,
  )
  const isCartItems = computed(
    () =>
      cart.value?.get_cart_items?.length !== undefined
      && cart.value?.get_cart_items?.length >= 1,
  )
  async function initShopBackend(category: string) {
    if (!import.meta.client || isHydrogen || isGh2di) return
    await useFetch(`${backend}/shop/api/products?categories=${category}`, {
      onResponse({ response }) {
        products.value = response._data?.data.products
        updateAlert(response._data?.alert)
      },
      onResponseError({ response }) {
        updateAlert(response._data?.alert)
      },
    })
  }

  async function initProduct(category: string, slug: string) {
    if (!import.meta.client || isHydrogen || isGh2di) return
    await useFetch(`${backend}/shop/api/product?category=${category}&slug=${slug}`, {
      onResponse({ response }) {
        product.value = response._data?.data
        selectedDateString.value = response._data?.data.variants[0].options[0].value
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
      console.error(`${value.type} – ${value.message} - ${value.url}`)
    }
    else if (value.type === 'warning') {
      console.warn(`${value.type} – ${value.message} - ${value.url}`)
    }
    else {
      console.log(`${value.type} – ${value.message} - ${value.url}`)
    }
  }

  async function initCart() {
    if (!import.meta.client || isHydrogen || isGh2di) return
    const _cartId = localStorage.getItem('cartId')
    if (_cartId === null) {
      console.log('Cart ID is null')
    }
    const url
      = _cartId !== null
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
        }
        catch {
          updateAlert({
            message: `Failed to init the Cart. The ${_cartId} has been removed from localStorage`,
            type: 'error',
            url: '',
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
    if (!import.meta.client || isHydrogen || isGh2di) return
    const url = `${backend}/shop/api/getcsrf/`
    await useFetch(url, {
      method: 'GET',
      onResponse() {
        updateAlert({
          message: 'The csrf token has been set correct',
          type: 'success',
          url: url,
        })
      },
      onResponseError() {
        updateAlert({
          message: 'Failed set the csrf token',
          type: 'error',
          url: url,
        })
      },
    })
  }

  async function whoami(): Promise<any> {
    if (!import.meta.client || isHydrogen || isGh2di) return
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
    const csrftoken = getCookie('csrftoken')
    await useFetch(`${backend}/shop/api/cart/${cartId.value}`, {
      method: 'POST',
      body,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken as string,
      },
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

  async function postRegistrationForm(body: object): Promise<void> {
    const csrftoken = getCookie('csrftoken')
    await useFetch(`${backend}/shop/api/contact/registration`, {
      method: 'POST',
      body,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken as string,
      },
      onResponse({ response }) {
        updateAlert(response._data.alert)
      },
      onResponseError({ response }) {
        updateAlert(response._data?.alert)
      },
    })
  }

  function getProduct(category: string, slug: string): Product {
    const product: Product
      = products.value.find(
        s => s.category?.toLowerCase() === category && s.slug === slug,
      ) ?? ({} as Product)
    return product
  }

  function getCookie(name: string) {
    let cookieValue = undefined
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]?.trim()
        if (cookie?.substring(0, name.length + 1) === name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
          break
        }
      }
    }
    return cookieValue
  }

  async function updateProduct(
    pk: string | undefined,
    quantity: string,
  ): Promise<void> {
    const csrftoken = getCookie('csrftoken')
    await useFetch(`${backend}/shop/api/cartitem/${pk}`, {
      method: 'POST',
      body: JSON.stringify({ quantity }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken as string,
      },
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
    const csrftoken = getCookie('csrftoken')
    await useFetch(`${backend}/shop/api/cartitem/${pk}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken as string,
      },
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
    const csrftoken = getCookie('csrftoken')
    await useFetch(`${backend}/shop/api/contactform/${pk}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken as string,
      },
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
    postRegistrationForm,
    isCartItems,
    getProduct,
    updateCart,
    initCart,
    initShopBackend,
    initProduct,
    product,
  }
}

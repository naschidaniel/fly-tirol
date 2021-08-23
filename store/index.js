import media from '~/static/media.json'

export const state = () => ({
  advancedTrainings: [],
  basicTrainings: [],
  isOpen: false,
  media,
  saftyTrainings: [],
  tandemflights: [],
  travels: [],
  products: [],
  checkout: {},
  cookieAgreement: false,
  shippingAddress: {
    address1: '',
    address2: '',
    city: '',
    company: null,
    country: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    province: '',
    zip: '',
  },
})

export const mutations = {
  toggleDropdown(state) {
    state.isOpen = !state.isOpen
  },
  setCookieAgreement(state, value) {
    state.cookieAgreement = value
  },
  setProducts(state, products) {
    state.products = products
  },
  setCollections(state, collections) {
    const advancedTrainings = collections.filter(
      (c) => c.title === 'Fortbildung'
    )[0]?.products
    const basicTrainings = collections.filter(
      (c) => c.title === 'Ausbildung'
    )[0]?.products
    const saftyTrainings = collections.filter(
      (c) => c.title === 'Sicherheitstrainings'
    )[0]?.products
    const tandemflights = collections.filter(
      (c) => c.title === 'Tandemflüge'
    )[0]?.products
    const travels = collections.filter((c) => c.title === 'Reisen')[0]?.products
    state.advancedTrainings = advancedTrainings
    state.basicTrainings = basicTrainings
    state.saftyTrainings = saftyTrainings
    state.tandemflights = tandemflights
    state.travels = travels
  },
  setCheckout(state, change) {
    if (state.cookieAgreement) {
      this.$cookies.set('FlyTirol-checkoutId', change.id, {
        path: '/',
        maxAge: 24 * 7 * 1,
        sameSite: true,
      })
    }
    state.checkout = change
  },
  setAddress1(state, change) {
    state.shippingAddress.address1 = change
  },
  setAddress2(state, change) {
    state.shippingAddress.address2 = change
  },
  setCity(state, change) {
    state.shippingAddress.city = change
  },
  setCountry(state, change) {
    state.shippingAddress.country = change
  },
  setEmail(state, change) {
    state.shippingAddress.email = change
  },
  setFirstName(state, change) {
    state.shippingAddress.firstName = change
  },
  setLastName(state, change) {
    state.shippingAddress.lastName = change
  },
  setPhone(state, change) {
    state.shippingAddress.phone = change
  },
  setZip(state, change) {
    state.shippingAddress.zip = change
  },
}

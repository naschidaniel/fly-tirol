export const state = () => ({
  advancedTrainings: [],
  basicTrainings: [],
  saftyTrainings: [],
  tandemflights: [],
  travels: [],
  products: [],
  checkout: {},
})

export const mutations = {
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
}

import media from '~/static/media.json'

export const state = () => ({
  isOpen: false,
  media,
  tandemflights: [],
  products: [],
})

export const mutations = {
  toggleDropdown(state) {
    state.isOpen = !state.isOpen
  },
  setProducts(state, products) {
    state.products = products
  },
  setCollections(state, collections) {
    const tandemflights = collections.filter(
      (c) => c.title === 'Tandemflüge'
    )[0]?.products
    state.tandemflights = tandemflights
  },
}

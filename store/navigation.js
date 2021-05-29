export const state = () => ({
  isOpen: false,
})

export const mutations = {
  toggleDropdown(state) {
    state.isOpen = !state.isOpen
  },
}

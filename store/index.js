export const state = () => ({
  windowWidth: 'lg',
})

export const mutations = {
  setWindowWidth(state, change) {
    state.windowWidth = change
  },
}

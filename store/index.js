import media from '~/static/media.json'

export const state = () => ({
  isOpen: false,
  media,
  windowWidth: 'lg',
})

export const mutations = {
  setWindowWidth(state, change) {
    state.windowWidth = change
  },
  toggleDropdown(state) {
    state.isOpen = !state.isOpen
  },
}

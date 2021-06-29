import media from '~/static/media.json'

export const state = () => ({
  isOpen: false,
  media,
})

export const mutations = {
  toggleDropdown(state) {
    state.isOpen = !state.isOpen
  },
}

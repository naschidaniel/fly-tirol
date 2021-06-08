import media from '~/static/media.json'

export const state = () => ({
  media,
  windowWidth: 'lg',
})

export const mutations = {
  setWindowWidth(state, change) {
    state.windowWidth = change
  },
}

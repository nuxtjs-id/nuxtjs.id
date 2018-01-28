export const strict = false

export const state = () => ({
  isMobile: false,
  loading: {
    top: '32px',
    left: '135px'
  }
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}

export const strict = false

export const state = () => ({
  isMobile: false,
  scrollTop: 0,
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

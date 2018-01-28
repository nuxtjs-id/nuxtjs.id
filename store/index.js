export const strict = false

export const state = () => ({
  isMobile: false
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}

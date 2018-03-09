export const strict = false

export const state = () => ({
  splash: true,
  isMobile: false,
  scrollTop: 0,
  loading: {
    top: '32px',
    left: '135px'
  },
  Apis: {
    menu: 'https://docs.api.nuxtjs.org/menu',
    api_docs: 'https://docs.api.nuxtjs.org/en/api'
  },
  Docs: {
    menus: null
  }
})

export const mutations = {
  setSplash (state, status) {
    state.splash = status
  },
  setMenu (state, menus) {
    state.Docs.menus = menus
  }
}

export const actions = {
  // async nuxtServerInit ({ state, commit }, { app, isDev, req, redirect }) {
  //   if (process.server) {
  //     try {
  //       const menus = await app.$axios.$get(state.Apis.api_docs + '/configuration-env')
  //       commit('setMenu', JSON.stringify(menus))
  //     } catch (e) {
  //       console.error('Error on [nuxtServerInit] action, please run the docs server.') // eslint-disable-line no-console
  //     }
  //   }
  // },
  async Req ({ dispatch, commit, state }, params) {
    try {
      const menus = await this.$axios.$get(state.Apis.menu + '/id')
        .then((response) => {
          commit('setMenu', response)
          commit('setSplash', false)
        })
        .catch(e => {
          console.error('Error on [Axios]')
        })
      return menus
    } catch (e) {
      console.error('Error on [Req] action, please run the docs server.') // eslint-disable-line no-console
    }
  }
}

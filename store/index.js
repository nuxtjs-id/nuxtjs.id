export const strict = false

export const state = () => ({
  splash: true,
  isOnline: true,
  isMobile: false,
  scrollTop: 0,
  loading: {
    top: '32px',
    left: '135px'
  },
  Apis: {
    base: 'https://nuxtjs.org',
    menu: 'https://docs.api.nuxtjs.org/menu',
    api_docs: 'https://docs.api.nuxtjs.org/id'
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
    let _self = this
    switch (params.act) {
      case 'getContent':
        let resContent
        try {
          await _self.$axios.$get(state.Apis.api_docs + params.slug)
            .then((response) => {
              resContent = response
            })
            .catch(e => {
              resContent = null
              console.error('Error on [Axios]')
            })
        } catch (e) {
          resContent = null
          console.error('Error on [Req] action, please run the docs server.') // eslint-disable-line no-console
        }
        return resContent
      case 'getMenus':
        try {
          await _self.$axios.$get(state.Apis.menu + '/en')
            .then((response) => {
              commit('setMenu', response)
              let menus = []
              generateMenu('api')
              generateMenu('examples')
              generateMenu('faq')
              generateMenu('guide')
              function generateMenu (key) {
                for (let i = 0; i < response[key].length; i++) {
                  for (let j = 0; j < response[key][i].links.length; j++) {
                    let keywords = ''
                    if (response[key][i].links[j].contents) {
                      for (let k = 0; k < response[key][i].links[j].contents.length; k++) {
                        let keys = response[key][i].links[j].contents[k].to
                        keywords += keys
                      }
                    }
                    response[key][i].links[j].sub = response[key][i].title
                    response[key][i].links[j].sub_sub = key
                    response[key][i].links[j].contents = keywords
                    menus.push(response[key][i].links[j])
                  }
                }
              }
            })
            .catch(e => {
              console.error('Error on [Axios]')
            })
        } catch (e) {
          console.error('Error on [Req] action, please run the docs server.') // eslint-disable-line no-console
        }
        break
      default:
        break
    }
  }
}

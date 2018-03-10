<template>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-layout column>
        <v-flex offset pa-3>
          <h1 class="nuxtid-header mb-2">
            NuxtJs <sub>Indonesia</sub>
          </h1>
          <p class="pa-3 nuxtid-desc text-xs-right">Halo, <strong>Nuxter</strong><br>Pelajari secara <strong class="f-n mr-1">mudah</strong> <strong class="f-b">NuxtJs</strong> disini</p>
          <div class="btn-open-right r5" @click="OpenRight = true">
            GABUNG SEKARANG
          </div>
        </v-flex>
        <v-slide-y-reverse-transition>
        <v-flex xs12 class="search-result"
          v-show="!$store.state.isMobile || ($store.state.isMobile && ShowContent.active)"
        >
          <div class="nuxtid-result-view"
            :class="{'pa-1': $store.state.isMobile, 'pa-3': !$store.state.isMobile}"
            v-show="ShowContent.active"
          >
            <div class="elevation-2 pa-2 white r5">
              <div class="nuxtid-result-view-title c-pointer" @click="ShowContent.active = false"><v-icon class="fs-20 mr-2">arrow_back</v-icon></div>
              <div class="nuxtid-result-view-head">{{ ShowContent.title }}</div>
              <div class="nuxtid-result-view-content" v-html="ShowContent.content"></div>
              <div class="nuxtid-result-view-title c-pointer" @click="ShowContent.active = false" v-if="$store.state.isMobile"><v-icon class="fs-20 mr-2">arrow_back</v-icon> Back</div>
            </div>
          </div>
        </v-flex>
        </v-slide-y-reverse-transition>
        <v-flex
          offset
          class="m"
          :class="{'px-3': !$store.state.isMobile, 'px-1': $store.state.isMobile, 'fh': AlgoliaQuery !== '' && !ShowContent.active}">
          <div class="p-relative">

            <v-slide-y-reverse-transition>
            <div
              class="nuxtid-algolia-init elevation-1 white"  
              v-show="AlgoliaQuery === '' && !ShowContent.active"
            >
              Mulai jelajahi <strong>NuxtJs</strong>
            </div>
            </v-slide-y-reverse-transition>

            <ais-index
              :search-store="searchStore"
              >
              <v-slide-y-reverse-transition>
              <ais-results
                class="mb-2"
                v-show="AlgoliaQuery !== '' && !ShowContent.active"
              >
                <template slot-scope="{ result }">
                  <div
                    class="nuxtid-algolia-list elevation-1"
                    @click="toggleShowContent(result.name, result.to, result.sub, result.sub_sub)"
                    v-if="result.sub_sub !== 'examples'"
                  >
                    <strong>{{ result.sub_sub }}</strong>: {{ result.name }}
                    <span>{{ result.sub }}</span>
                  </div>
                  <a
                    class="nuxtid-algolia-list elevation-1"
                    :href="$store.state.Apis.base + '/' + result.sub_sub + result.to"
                    target="_blank"
                    v-else
                  >
                    <strong>{{ result.sub_sub }}</strong>: {{ result.name }}
                    <span>{{ result.sub }}</span>
                  </a>
                </template>
              </ais-results>
              </v-slide-y-reverse-transition>
              <ais-input
                placeholder="contoh: nuxt"
                class="nuxtid elevation-1"
              >
              </ais-input>
              <a href="https://www.algolia.com" target="_blank" rel="noopener">
                <img src="/img/icons/powered-by-algolia.svg" class="powered-by-algolia" alt="Algolia Search">
              </a>
              <span class="clear-input" @click="searchStore.query = ''"></span>
            </ais-index>

          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 md1 py-4 v-show="!$store.state.isMobile">
      <div class="v-divider-v"></div>
    </v-flex>
    <v-slide-y-reverse-transition>
    <v-flex xs12 md5 class="right-view open" v-if="!$store.state.isMobile || ($store.state.isMobile && OpenRight)">
      <v-layout row wrap>
        <v-flex xs12 pa-3 class="top-right">
          <span class="close-right-view" @click="OpenRight = false">x</span>
          <nuxt-link class="d-block mt-2 py-4 pl-0 pr-4" :to="{name: 'class'}">
            <span class="fs-18 mr-2">kelas</span> <strong class="fs-22 red--text mr-2">Gratis</strong>
            <strong style="font-size:22px;" class="red--text">NuxtJs</strong>
          </nuxt-link>
          <blockquote class="fs-16 fls-2"><strong>Mulailah belajar</strong> sesuatu yang bermanfaat sejak dulu<br>karena hari ini masih saja seperti kemarin!</blockquote>
        </v-flex>
        <v-flex xs12 pa-3>
          <div class="pa-2">
            <div class="pa-2 f-b">Gabung Komunitas</div>
            <v-divider></v-divider>
            <div class="text-xs-right pt-4">
              <nuxt-link :to="{name: 'accounts'}" title="Gabung komunitas NuxtJs Indonesia" class="d-block px-2 my-2 red--text fs-12 fls-2 float-l">
                <v-icon class="red--text mr-2 fs-20">person_pin</v-icon> <span class="f-b fls-5">! DAFTAR</span>
              </nuxt-link>
              <a class="ic-community mx-2 r shadow-max" href="https://t.me/nuxtjsid" target="_blank" rel="noopener"><img :src="require('~/assets/img/ic-telegram.png')" class="full-width" alt="NuxtJs Indonesia on Telegram"></a>
              <a class="ic-community mx-2 r shadow-max" href="https://nuxtjs-id.slack.com/" target="_blank" rel="noopener"><img :src="require('~/assets/img/ic-slack.png')" alt="NuxtJs Indonesia on Slack" class="full-width"></a>
            </div>
          </div>
          <div class="pa-2">
            <div class="pa-2 f-b">Referensi</div>
            <v-divider></v-divider>
            <div class="text-xs-right py-3 pl-4">
              <a class="d-block px-2 my-2 green--text fs-12 fls-2" :class="{'float-l': !$store.state.isMobile}" href="https://nuxtjs.org" target="_blank" rel="noopener">
                <v-icon class="green--text mr-2 fs-16">launch</v-icon> <span><span class="f-b">NuxtJs</span> Docs</span> <strong class="ml-2">&sdot; Bahasa Indonesia</strong>
              </a>
              <a class="d-block px-2 my-2 green--text fs-12 fls-2" href="https://nuxtjs.org" target="_blank" rel="noopener">
                <v-icon class="green--text mr-2 fs-16">launch</v-icon> <span><span class="f-b">NuxtJs.org</span></span>
              </a>
              <a class="d-block px-2 my-2 green--text fs-12 fls-2" href="https://vuejs.org" target="_blank" rel="noopener">
                <v-icon class="green--text mr-2 fs-16">launch</v-icon> <span><span class="f-b">VueJs.org</span></span>
              </a>
              <a class="d-block px-2 my-2 green--text fs-12 fls-2" href="https://vuetifyjs.com" target="_blank" rel="noopener">
                <v-icon class="green--text mr-2 fs-16">launch</v-icon> <span><span class="f-b">VuetifyJs.com</span></span>
              </a>
            </div>
          </div>
          <div class="pa-2">
            <div class="pa-2 f-b">Dukungan</div>
            <v-divider></v-divider>
            <div class="text-xs-left py-3 pl-4">
              <a class="d-block px-2 my-2 green--text fs-12 fls-2" href="mailto:nuxt.id@gmail.com">
                <v-icon class="green--text mr-2 fs-16">mail_outline</v-icon> <span><span class="f-b">nuxt.id@gmail.com</span></span>
              </a>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    </v-slide-y-reverse-transition>
  </v-layout>
</template>

<script>
import { createFromAlgoliaCredentials } from 'vue-instantsearch'
const searchStore = createFromAlgoliaCredentials(
  'RUBLDJBYZN',
  'edfc7e38b8b2115e190c1073834c1324'
)
searchStore.indexName = 'main'

export default {
  data () {
    return {
      searchStore,
      AlgoliaQuery: '',
      ShowContent: {
        active: false,
        cid: '',
        title: '',
        content: ''
      },
      OpenRight: false
    }
  },
  mounted () {
    let _self = this
    _self.AlgoliaQuery = ''
  },
  methods: {
    toggleShowContent (title, slug, sub, sub_sub) {
      let _self = this
      _self.$store.dispatch('Req', { act: 'getContent', slug: '/' + sub_sub + slug })
        .then((res) => {
          _self.ShowContent.title = res.attrs.title
          _self.ShowContent.content = res.body
          _self.ShowContent.active = true
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  watch: {
    'searchStore.query' (q) {
      let _self = this
      _self.AlgoliaQuery = q
      _self.ShowContent.active = false
    },
    'AlgoliaQuery' () {
      let _self = this
      if (_self.$store.state.isMobile) {
        window.scrollTo(0, parseInt(document.body.scrollHeight) - (parseInt(document.body.scrollHeight) - 133))
      } else {
        window.scrollTo(0, parseInt(document.body.scrollHeight) - (parseInt(document.body.scrollHeight)))
      }
    },
    'ShowContent.active' (v) {
      let _self = this
      if (!v) {
        if (_self.$store.state.isMobile) {
          window.scrollTo(0, parseInt(document.body.scrollHeight) - (parseInt(document.body.scrollHeight) - 133))
        } else {
          window.scrollTo(0, parseInt(document.body.scrollHeight) - (parseInt(document.body.scrollHeight)))
        }
      }
    }
  }
}
</script>
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
        <v-fade-transition>
        <v-flex xs12 class="search-result"
          v-show="!$store.state.isMobile || ($store.state.isMobile && ShowContent.active)"
        >
          <div class="nuxtid-result-view"
            :class="{'pa-1': $store.state.isMobile, 'pa-3': !$store.state.isMobile}"
            v-show="ShowContent.active"
          >
            <div class=" elevation-2 pa-2 white r5">
              <div class="nuxtid-result-view-title c-pointer" @click="ShowContent.active = false"><v-icon class="fs-20 mr-2">arrow_back</v-icon> {{ ShowContent.title }}</div>
              <div class="nuxtid-result-view-content" v-html="ShowContent.content"></div>
              <div class="nuxtid-result-view-title c-pointer" @click="ShowContent.active = false" v-if="$store.state.isMobile"><v-icon class="fs-20 mr-2">arrow_back</v-icon> Back</div>
            </div>
          </div>
        </v-flex>
        </v-fade-transition>
        <v-flex offset class="m" :class="{'px-3': !$store.state.isMobile, 'px-1': $store.state.isMobile}">
          <div class="p-relative">

            <div
              class="nuxtid-algolia-init elevation-1 white"  
              v-show="AlgoliaQuery === '' && !ShowContent.active"
            >
              Mulai jelajahi <strong>NuxtJs</strong>
            </div>

            <ais-index
              :search-store="searchStore"
              >
              <ais-results
                class="mb-2"
                v-show="AlgoliaQuery !== '' && !ShowContent.active"
              >
                <template slot-scope="{ result }">
                  <div
                    class="nuxtid-algolia-list elevation-1"
                    @click="toggleShowContent(result.title)"
                  >
                    {{ result.title }}
                  </div>
                </template>
              </ais-results>
              <ais-input
                placeholder="contoh: nuxt"
                class="nuxtid elevation-1"
                :autofocus="true"
              >
              </ais-input>
              <a href="https://www.algolia.com" target="_blank" rel="noopener">
                <img src="/img/icons/powered-by-algolia.svg" class="powered-by-algolia" alt="Algolia Search">
              </a>
            </ais-index>

          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 md1 py-4 v-show="!$store.state.isMobile">
      <div class="v-divider-v"></div>
    </v-flex>
    <v-fade-transition>
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
              <a class="ic-community mx-2 r shadow-max" href="https://t.me/nuxtjsid" target="_blank" rel="noopener"><img src="data:img/png;base64,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" class="full-width" alt="NuxtJs Indonesia on Telegram"></a>
              <a class="ic-community mx-2 r shadow-max" href="https://nuxtjs-id.slack.com/" target="_blank" rel="noopener"><img src="data:img/png;base64,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" alt="NuxtJs Indonesia on Slack" class="full-width"></a>
            </div>
          </div>
          <div class="pa-2">
            <div class="pa-2 f-b">Referensi</div>
            <v-divider></v-divider>
            <div class="text-xs-right py-3 pl-4">
              <a class="d-block px-2 my-2 green--text fs-12 fls-2 float-l" href="https://nuxtjs.org" target="_blank" rel="noopener">
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
    </v-fade-transition>
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
    toggleShowContent (cid) {
      let _self = this
      _self.ShowContent.title = cid
      _self.ShowContent.content = '<p>Sed ut perspiciatis unde omnis iste natusLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natusLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natusLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>'
      _self.ShowContent.active = true
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
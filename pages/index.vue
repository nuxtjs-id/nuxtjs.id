<template>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-layout column>
        <v-flex offset pa-3>
          <h1 class="nuxtid-header mb-2">
            NuxtJs <sub>Indonesia</sub>
          </h1>
          <p class="pa-3 nuxtid-desc text-xs-right">Pelajari secara <strong class="f-n mr-1">mudah</strong> <strong class="f-b">NuxtJs</strong> disini</p>
        </v-flex>
        <v-flex xs12></v-flex>
        <v-flex offset :class="{'px-3': !$store.state.isMobile, 'px-1': $store.state.isMobile}">
          <div class="p-relative">

            <div
              class="nuxtid-algolia-init elevation-1"  
              v-show="AlgoliaQuery === ''"
            >
              Halo, kamu bisa menjelajahi <strong>NuxtJs</strong> disini.
            </div>
            <ais-index
              :search-store="searchStore"
              >
              <ais-results
                class="mb-2"
                v-show="AlgoliaQuery !== ''"
              >
                <template slot-scope="{ result }">
                  <div class="nuxtid-algolia-list elevation-1">
                    {{ result.title }}
                  </div>
                </template>
              </ais-results>
              <ais-input
                placeholder="contoh: nuxt"
                class="nuxtid elevation-3"
                :autofocus="true"
              >
              </ais-input>
              <a href="https://www.algolia.com" target="_blank">
                <img src="/img/icons/powered-by-algolia.svg" class="powered-by-algolia">
              </a>
            </ais-index>

          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 md1 py-4 v-if="!$store.state.isMobile">
      <div class="v-divider-v"></div>
    </v-flex>
    <v-flex xs12 md5 v-if="!$store.state.isMobile">
      <v-layout row wrap>
        <v-flex xs12 pa-3>
          <nuxt-link class="d-block mt-4 pa-4" :to="{name: 'class'}">
            <span class="fs-18 mr-1">kelas</span> <strong class="fs-22 red--text mr-2">Gratis</strong>
            <strong style="font-size:22px;" class="green--text">NuxtJs</strong>
          </nuxt-link>
          <blockquote class="fs-16 fls-2"><strong>Mulailah belajar</strong> sesuatu yang bermanfaat sejak dulu<br>karena hari ini masih saja seperti kemarin!</blockquote>
        </v-flex>
        <v-flex xs12 pa-3>
          <div class="pa-2">
            <div class="pa-2 f-b">Gabung Komunitas</div>
            <v-divider></v-divider>
            <div class="text-xs-right pt-4">
              <a class="ic-community mx-2 r shadow-max" href="https://t.me/nuxtjsid" target="_blank"><img src="/img/icons/ic-telegram.png" class="full-width"></a>
              <a class="ic-community mx-2 r shadow-max" href="https://nuxtjs-id.slack.com/" target="_blank"><img src="/img/icons/ic-slack.png" class="full-width"></a>
            </div>
          </div>
          <div class="pa-2">
            <div class="pa-2 f-b">Referensi</div>
            <v-divider></v-divider>
            <div class="text-xs-right py-3 pl-4">
              <a class="d-block px-2 my-2 green--text fs-12 fls-2 float-l" href="https://nuxtjs.org" target="_blank">
                <v-icon class="green--text mr-2 fs-16">launch</v-icon> <span><span class="f-b">NuxtJs</span> Docs</span> <strong class="ml-2">&sdot; Bahasa Indonesia</strong>
              </a>
              <a class="d-block px-2 my-2 green--text fs-12 fls-2" href="https://nuxtjs.org" target="_blank">
                <v-icon class="green--text mr-2 fs-16">launch</v-icon> <span><span class="f-b">NuxtJs.org</span></span>
              </a>
              <a class="d-block px-2 my-2 green--text fs-12 fls-2" href="https://vuejs.org" target="_blank">
                <v-icon class="green--text mr-2 fs-16">launch</v-icon> <span><span class="f-b">VueJs.org</span></span>
              </a>
              <a class="d-block px-2 my-2 green--text fs-12 fls-2" href="https://vuetifyjs.com" target="_blank">
                <v-icon class="green--text mr-2 fs-16">launch</v-icon> <span><span class="f-b">VuetifyJs.com</span></span>
              </a>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
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
      AlgoliaQuery: ''
    }
  },
  mounted () {
    let _self = this
    _self.AlgoliaQuery = ''
  },
  watch: {
    'searchStore.query' (q) {
      let _self = this
      _self.AlgoliaQuery = q
    }
  }
}
</script>
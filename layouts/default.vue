<template>
  <v-app light class="nuxtid-no-main" v-resize="onResize">
    <v-navigation-drawer
      :mini-variant="true"
      :clipped="false"
      v-model="drawer"
      fixed
      app
      disable-route-watcher
      hide-overlay
      class="nuxtid-no-bg shadow-max z-max"
    >
      <v-list>
        <v-list-tile
          router
          class="mb-4"
          :to="{name: 'index'}"
        >
          <v-list-tile-action class="pa-2">
            <img src="/img/icons/logo-nuxtid.png" class="max-width r shadow-max">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>NuxtJs.id</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          router
          class="my-2"
          :to="{name: item.to}"
          :key="i"
          v-for="(item, i) in items"
          replace
          exact
        >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="true" class="elevation-0 nuxtid-no-bg">
      <v-toolbar-side-icon @click="drawer = !drawer" :class="{'ml-100': drawer === true }"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title" class="green--text"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="full-bg-cover" style="background-image: url(/img/indonesia-map.png)">
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        title: 'nuxtjs.id',
        items: [
          { icon: 'school', title: 'Kelas NuxtJs', to: 'class' },
          { icon: 'people_outline', title: 'Account', to: 'account' },
          { icon: 'card_travel', title: 'Jobs', to: 'jobs' },
          { icon: 'info_outline', title: 'Info', to: 'info' }
        ]
      }
    },
    created () {
      console.log('')
      console.log('---------------------------------------------------------------------------------------------------------------')
      console.log('%c:: Love Code ? Let\'s join us!!! Send your best Portofolio to "nuxt@nuxtjs.id" ::', 'color: red; font-size:14px;font-weight:bold;')
      console.log('---------------------------------------------------------------------------------------------------------------')
      console.log('')
    },
    mounted () {
      this.onResize()
      this.drawer = true
    },
    methods: {
      onResize () {
        let _self = this
        _self.$store.state.isMobile = window.innerWidth < 769
      }
    }
  }
</script>

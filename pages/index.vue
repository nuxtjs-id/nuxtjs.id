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
          <div style="position:relative;">
            <div class="nuxtid-chat-list shadow-max">
              Halo, kamu bisa menanyakan seputar <strong>NuxtJs</strong> disini.
            </div>
            <input
              type="text"
              placeholder="NuxtJs ?"
              class="nuxtid shadow-max"
              autofocus
            >
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
          <blockquote class="fs-16"><strong>Mulailah belajar</strong> sesuatu yang bermanfaat sejak dulu<br>karena hari ini masih saja seperti kemarin!</blockquote>
        </v-flex>
        <v-flex xs12 pa-3>
          <div class="pa-2">
            <div class="pa-2 f-b">Gabung Komunitas</div>
            <v-divider></v-divider>
            <div class="text-xs-right py-4">
              <a class="d-block pa-2 green--text float-l" href="https://nuxtjs.org" target="_blank">
                <v-icon class="green--text mr-2 fs-20">launch</v-icon> <span><span class="f-b">NuxtJs</span> Official Docs</span> <strong class="ml-2">Bahasa Indonesia</strong>
              </a>
              <a class="ic-community mx-2 r shadow-max" href="https://t.me/nuxtjsid"><img src="/img/icons/ic-telegram.png" class="full-width"></a>
              <a class="ic-community mx-2 r shadow-max" href="https://nuxtjs-id.slack.com/" target="_blank"><img src="/img/icons/ic-slack.png" class="full-width"></a>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

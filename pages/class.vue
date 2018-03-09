<template>
  <v-layout row wrap align-center py-4>
    <v-flex xs12 py-4 class="text-xs-center">
      <v-layout row wrap justify-center py-4>
        <v-flex xs12>
          <div class="fs-30 fls-6 f-s">Kelas <strong>NuxtJs</strong></div>
          <v-divider class="line-md-center mt-4 mb-3"></v-divider>
        </v-flex>
        <v-flex xs12 md3 pa-4>
          <v-card class="shadow-max pt-2 nuxtid-class basic">
            <img :src="require('~/assets/img/ic-class-basic.png')" class="mt-4" style="width:100px;" alt="Kelas Belajar Tingkat Dasar - NuxtJs Indonesia">
            <v-card-title class="mb-2 fls-7">
              <v-spacer></v-spacer><div class="mb-4 f-b">DASAR</div><v-spacer></v-spacer>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md3 pa-4>
          <v-card class="shadow-max pt-2 nuxtid-class intermediate">
            <img :src="require('~/assets/img/ic-class-intermediate.png')" class="mt-4" style="width:100px;" alt="Kelas Belajar Tingkat Menengah - NuxtJs Indonesia">
            <v-card-title class="mb-2 fls-7">
              <v-spacer></v-spacer><div class="mb-4 f-b">MENENGAH</div><v-spacer></v-spacer>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md3 pa-4>
          <v-card class="shadow-max pt-2 nuxtid-class expert">
            <img :src="require('~/assets/img/ic-class-expert.png')" class="mt-4" style="width:100px;" alt="Kelas Belajar Tingkat Mahir - NuxtJs Indonesia">
            <v-card-title class="mb-2 fls-7">
              <v-spacer></v-spacer><div class="mb-4 f-b">MAHIR</div><v-spacer></v-spacer>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs10 md7 class="fls-2 fs-16">
          <v-divider class="line-md-center mt-4 mb-3"></v-divider>
          <div class="py-3">
            <p class="line-height-3 text-xs-justify grey--text text--darken-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

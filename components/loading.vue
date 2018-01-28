<template>
  <div class="nuxt-progress" :style="{
    'width': percent+'px',
    'height': height,
    'top': $store.state.loading.top,
    'left': $store.state.loading.left,
    'background-color': canSuccess? color : failedColor,
    'opacity': show ? 1 : 0
  }">
    <div class="loader"></div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'nuxt-loading',
  data () {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '1px',
      color: '#999',
      failedColor: 'red'
    }
  },
  methods: {
    start () {
      this.show = true
      this.canSuccess = true
      if (this._timer) {
        clearInterval(this._timer)
        this.percent = 0
      }
      this._cut = 10000 / Math.floor(this.duration)
      this._timer = setInterval(() => {
        this.increase(this._cut * Math.random())
        if (this.percent > 45) {
          this.finish()
        }
      }, 100)
      return this
    },
    set (num) {
      this.show = true
      this.canSuccess = true
      this.percent = Math.floor(num)
      return this
    },
    get () {
      return Math.floor(this.percent)
    },
    increase (num) {
      this.percent = this.percent + Math.floor(num)
      return this
    },
    decrease (num) {
      this.percent = this.percent - Math.floor(num)
      return this
    },
    finish () {
      this.percent = 50
      this.hide()
      return this
    },
    pause () {
      clearInterval(this._timer)
      return this
    },
    hide () {
      clearInterval(this._timer)
      this._timer = null
      setTimeout(() => {
        this.show = false
        Vue.nextTick(() => {
          setTimeout(() => {
            this.percent = 0
          }, 200)
        })
      }, 500)
      return this
    },
    fail () {
      this.canSuccess = false
      return this
    }
  }
}
</script>

<style>
.nuxt-progress {
  position: fixed;
  right: 0px;
  height: 1px;
  width: 0%;
  transition: width 0.3s, opacity 0.4s;
  opacity: 1;
  background-color: rgb(255, 0, 0);
  z-index: 999999;
}
.nuxt-progress > .loader {
  position:absolute;
  top:-7px;
  right:-20px;
  width:15px;
  height:15px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 50%;
  border-top: 2px solid rgb(255, 0, 0);
  border-bottom: 2px solid rgb(255, 0, 0);
  -webkit-animation: spin .5s linear infinite;
  animation: spin .5s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

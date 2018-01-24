<template>
    <div class="">
      <div class="header">
        <div class="title hidden hidden-left" v-infocus="'showElement'">
          <span class="name">{{anArray[0].name}}</span>
          <h2 class="hidden hidden-up headline" v-infocus="'showElement-slow'">
            {{anArray[1].description}}
            <br>
            San Francisco, CA
            <br>
          </h2>
          <div v-bind:class="{notactive: isActive}">
            <input id="name" v-model="anArray[0].name" v-on="name = anArray[0].name" placeholder="Name">
            <br>
            <input id="description" v-model="anArray[1].description" v-on="description = anArray[1].description" placeholder="Description">
            <br>
            <button v-on:click="changeProp()">Confirm</button>
          </div> 
          <button style='background:black; color:white; border:none;' v-on:click="toggle()">{{edit}}</button>
        </div> 
      </div>
      <div class="spacer"></div>
      
      <img class="hidden hidden-right squiggle" v-infocus="'showElement-slow'" src="../assets/squiggle.svg">

      <projects/>
      <contact/>
    </div>
</template>

<style>
  .notactive{
    display:none;
  }
</style>

<script>
import Vue from 'vue'
import firebase from 'firebase'
import VueFire from 'vuefire'

let config = {
  apiKey: 'AIzaSyBufg5IBGg1m8Z8Hew3kBf-KOSHK35VZfU',
  authDomain: 'elledeboer-7dddc.firebaseapp.com',
  databaseURL: 'https://elledeboer-7dddc.firebaseio.com',
  storageBucket: 'elledeboer-7dddc.appspot.com',
  messagingSenderId: '60590756705'
}

Vue.use(VueFire)

let app = firebase.initializeApp(config)
let db = app.database()
// let data = db.ref('info')

export default {
  name: 'Main',
  data () {
    return {
      name: '',
      description: '',
      isActive: true,
      a: 'a',
      edit: 'edit'
    }
  },
  firebase: {
    anArray: {
      source: db.ref('info'),
      readyCallback: function () { console.log('hi') }
    }
  },
  created: function () {
  },
  mounted: function () {
    // return this.addItem()
  },
  methods: {
    addItem () {
      console.log(firebase.anArray)
    },
    scrollMeTo (refName) {
      var element = this.$refs[refName]
      var top = element.offsetTop
      window.scrollTo(0, top)
    },
    changeProp: function () {
      let updates = [
        {'name': this.name},
        {'description': this.description}
      ]
      db.ref('info').set(updates)
      this.toggle()
    },
    toggle: function () {
      if (this.isActive) {
        this.edit = 'close'
        this.isActive = false
      } else {
        this.isActive = true
        this.edit = 'edit'
      }
    }
  },
  directives: {
    infocus: {
      isLiteral: true,
      inserted: (el, binding, vnode) => {
        let f = () => {
          let rect = el.getBoundingClientRect()
          let inView = (
            rect.width > 0 &&
            rect.height > 0 &&
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight - 50 || document.documentElement.clientHeight)
          )
          if (inView) {
            el.classList.add(binding.value)
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
        f()
      }
    }
  }
}
</script>
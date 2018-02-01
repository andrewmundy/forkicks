<template>
    <div class="">
      <div class="header">
        <div class="title hidden hidden-left" v-infocus="'showElement'">
          <span class="name">{{anObject.name}}</span>
          <h2 class="hidden hidden-up headline" v-infocus="'showElement-slow'">
            {{anObject.name_description}}
            <br>
            San Francisco, CA
            <br>
          </h2>

        <!-- EDIT -->
          <div id="edit" v-bind:class="edit ? '' : 'closed'">
            <input 
              id="name" 
              v-model="anObject.name" 
              v-on="name = anObject.name" 
              placeholder="Name"
            >
            <br>
            <input 
              id="description" 
              v-model="anObject.name_description" 
              v-on="name_description = anObject.name_description" 
              placeholder="Description"
            >
            <br>
            <input type="submit" value="confirm" v-on:click="changeProp('name','name_description')">
          </div> 
          {{imageArray}}
          {{imagesRef('marin')}}
        </div> 

    <!-- LOGIN -->
      <div style="text-align:left;margin:1rem;">
      {{isLogged()}}
        <button style="border:none;background:rgba(255,255,255,0.8);border-radius:10px;margin:0.2rem;" v-bind:class="isLoggedIn ? '' : 'closed' " v-on:click="editScreen()">📝</button>
        <button style="border:none;background:rgba(255,255,255,0.8);border-radius:10px;margin:0.2rem;" v-on:click="toggle()">👤</button>
        <div v-bind:class="{closed: closed}">

        <!-- LOGIN -->
          <login 
            v-bind="{isLoggedIn,toggle}"
          />
        </div>
      </div>
      </div>
      <div class="spacer"></div>
      
      <img class="hidden hidden-right squiggle" v-infocus="'showElement-slow'" src="../assets/squiggle.svg">


      <!-- EDIT -->
      <div id="edit" v-bind:class="edit ? '' : 'closed'">
        <input 
            id="title1" 
            v-model="anObject.title1" 
            v-on="title1 = anObject.title1" 
            placeholder="Title 1"
        >
        <br>
        <input 
            id="title1_description" 
            v-model="anObject.title1_description" 
            v-on="title1_description = anObject.title1_description" 
            placeholder="Description"
        >
        <br>
        <input type="submit" value="confirm" v-on:click="changeProp('title1', 'title1_description')">
      </div> 

        <h1 class="genre-titles">
          {{anObject.title1}}
        </h1>
        <h2 class="genre-quote hidden hidden-left" v-infocus="'showElement'">
          {{anObject.title1_description}}
        </h2>

      <img style="width:200px" id="marin"/>
      <projects/>
      <contact v-bind="{contact, contact_description, changeProp, anObject, edit}" />
    </div>
</template>

<style>
  .closed{
    display:none;
  }
  #edit{
    text-align: left;
    padding: 0rem 1rem;
  }
  input{
    background:white;
    color:black;
    text-align: left;
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
let storage = firebase.storage()
// let storageRef = storage.ref()
// let imageRef = storage.ref('images/marin.jpg').getDownloadURL()

export default {
  name: 'Main',
  data () {
    return {
      title1: '',
      title1_description: '',
      name: '',
      name_description: '',
      closed: true,
      a: 'a',
      login: 'login',
      img: '',
      isLoggedIn: false,
      edit: false,
      imageArray: [],
      contact: '',
      contact_description: ''
    }
  },
  firebase: {
    anObject: {
      source: db.ref('info'),
      asObject: true,
      readyCallback: function () { console.log('anObjectCallback') }
    }
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
    editScreen () {
      if (this.edit) {
        this.edit = false
      } else {
        this.edit = true
      }
    },
    assignImg () {
    },
    isLogged () {
      firebase.auth().currentUser ? this.isLoggedIn = true : this.isLoggedIn = false
      console.log(this.isLoggedIn)
    },
    scrollMeTo (refName) {
      let element = this.$refs[refName]
      let top = element.offsetTop
      window.scrollTo(0, top)
    },
    changeProp (x, y) {
      let updates = {}
      updates[x] = this[x]
      updates[y] = this[y]
      console.log(updates)
      db.ref('info').update(updates)
      this.toggle()
    },
    imagesRef (file) {
      console.log(storage.ref('images'))
      storage.ref('images/' + file + '.jpg').getDownloadURL().then(function (url) {
        let img = document.getElementById(file)
        img.src = url
      }).catch(function (error) {
        console.log('oops ' + error)
      })
    },
    change () {
    },
    toggle () {
      if (this.edit) {
        this.edit = false
      } else if (firebase.auth().currentUser) {
        this.edit = true
      }
      if (this.closed) {
        this.login = 'close'
        this.closed = false
      } else {
        this.closed = true
        this.login = 'login'
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
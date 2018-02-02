<template>
    <div class="">
      <div class="header">
        <div class="title hidden hidden-left" v-infocus="'showElement'">
          <span class="name">{{anObject.name}}</span>
          <h2 class="hidden hidden-up headline" v-infocus="'showElement-slow'">
            {{anObject.name_description}}
            <br>
            {{anObject.location}}
            <br>
          </h2>
        </div> 
      </div>

      <div class="admin_panel">
        <button v-bind:class="edit ? 'closed' : ''" v-on:click="toggle('edit')">📝</button>
        <edit 
          v-bind:class="edit ? '' : 'closed'"
          v-bind="{
            anObject,
            toggle,
            isLogged,
            isLoggedIn,
            changeProp,
            name,
            name_description,
            contact,
            contact_description,
            title1,
            title1_rescription,
            instagram,
            twitter,
            facebook,
            messageEmail,
            info,
            social,
            image,
            banner,
            location
          }"
        />
      </div>



      <div class="spacer"></div>
      
      <img class="hidden hidden-right squiggle" v-infocus="'showElement-slow'" src="../assets/squiggle.svg">

        <h1 class="genre-titles">
          {{anObject.title1}}
        </h1>
        <h2 class="genre-quote hidden hidden-left" v-infocus="'showElement'">
          {{anObject.title1_description}}
        </h2>

      <img style="width:200px" id="marin"/>
      <projects/>

      <contact 
        v-bind="{
          contact, 
          contact_description, 
          changeProp, 
          anObject, 
          edit}" 
        />
    </div>
</template>

<style>
  button{
    background:white;
    color:black;
    border-radius: 20px;
    border:none;
  }
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
      login_closed: true,
      a: 'a',
      login: 'login',
      img: '',
      isLoggedIn: false,
      edit: false,
      imageArray: [],
      contact: '',
      contact_description: '',
      header_data: false,
      instagram: '',
      twitter: '',
      facebook: '',
      info: true,
      social: true,
      image: false,
      banner: '',
      location: ''
    }
  },
  firebase: {
    anObject: {
      source: db.ref('info'),
      asObject: true
    }
  },
  created: function () {
  },
  mounted: function () {
    this.isLogged()
  },
  methods: {
    isLogged () {
      if (firebase.auth().currentUser) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    },
    scrollMeTo (refName) {
      let element = this.$refs[refName]
      let top = element.offsetTop
      window.scrollTo(0, top)
    },
    changeProp: function (...args) {
      let self = this
      let updates = {}

      if (firebase.auth().currentUser) {
        args.map(function (arg) {
          updates[arg] = self.anObject[arg]
        })
        console.log(updates)
        db.ref('info').update(updates)
      } else {
        self.banner = 'oops!'
      }
    },
    imagesRef (file) {
      // console.log(storage.ref('images'))
      storage.ref('images/' + file + '.jpg').getDownloadURL().then(function (url) {
        let img = document.getElementById(file)
        img.src = url
      }).catch(function (error) {
        console.log('oops ' + error)
      })
    },
    toggle (type) {
      if (this[type]) {
        this[type] = false
      } else if (!this[type]) {
        this[type] = true
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
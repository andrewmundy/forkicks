<template>
    <div class="main-view">
      <span v-html="importFont()"></span>
      <div class="header">
        <div 
          v-bind:style="renderStyle(
            {'background':'headerColor'},
            {'box-shadow':'headerSubColor'},
            {'font-family':'fontStyle'}
          )" 
          class="title hidden hidden-left" 
          v-fbInfocus="'showElement'"
        >
          <span class="name" v-bind:style="renderStyle({'color':'fontColor'})">{{fbInfo.name}}</span>
          <h2 class="headline" v-bind:style="renderStyle({'color':'fontColor'})">
            {{fbInfo.name_description}}
            <br>
            {{fbInfo.location}}
            <br>
          </h2>
          <!-- <img :src="images.imageUrl" width="150"> -->
        </div> 
      </div>
      <img class="icon settings" src="../assets/icons/cogs.svg" v-on:click="toggle('edit')">
      <div class="admin_panel">
        <transition name="slide-fade">
          <edit 
            v-if="edit"
            v-bind="{
              fontSort,
              fbInfo,
              toggle,
              passportTab,
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
              infoTab,
              messageEmail,
              fbInfo,
              socialTab,
              imageTab,
              banner,
              location,
              colorTab,
              headerColor,
              headerSubColor,
              colorWindow,
              shadow,
              fontColor,
              fontStyle,
              fontImport,
              importFont,
              fonts,
              displayNote,
              fbImages,
              images,
              previews
            }"
          />
        </transition>
      </div>



      <div class="spacer"></div>
      
      <img class="hidden hidden-right squiggle" v-fbInfocus="'showElement-slow'" src="../assets/squiggle.svg">
        <h1 class="genre-titles">
          {{fbInfo.title1}}
        </h1>
        <h2 class="genre-quote hidden hidden-left" v-fbInfocus="'showElement'">
          {{fbInfo.title1_description}}
        </h2>

      <projects/>

      <contact 
        v-bind="{
          contact, 
          contact_description, 
          changeProp, 
          fbInfo, 
          edit,
          toggle
          }" 
        />
    </div>
</template>

<style>
  button{
    background: rgba(0, 0, 0, 0.253);
    color: #ffffff4d;
    border-radius: 20px;
    border:none;
    padding:7px 10px;
    font-size: 0.8rem;
    font-weight: 600;
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
import VueResource from 'vue-resource'

let config = {
  apiKey: 'AIzaSyBfo5yIc3yb6GoSY6U0jQvXhb0ryLeGfEU',
  authDomain: 'forkicks-1.firebaseapp.com',
  databaseURL: 'https://forkicks-1.firebaseio.com',
  projectId: 'forkicks-1',
  storageBucket: 'forkicks-1.appspot.com',
  messagingSenderId: '329999762015'
}

Vue.use(VueFire)
Vue.use(VueResource)

let app = firebase.initializeApp(config)
let db = app.database()
let storage = firebase.storage()

export default {
  name: 'Main',
  data () {
    return {
      fonts: [],
      title1: '',
      title1_description: '',
      name: '',
      name_description: '',
      closed: true,
      login_closed: true,
      edit: false,
      a: 'a',
      login: 'login',
      img: '',
      isLoggedIn: false,
      imageArray: [],
      contact: '',
      contact_description: '',
      header_data: false,
      instagram: '',
      twitter: '',
      facebook: '',
      passportTab: false,
      fbInfo: false,
      socialTab: false,
      imageTab: true,
      colorTab: false,
      banner: '',
      location: '',
      headerColor: '',
      headerSubcolor: '',
      colorWindow: false,
      shadow: '',
      fontColor: '',
      fontStyle: '',
      fontSort: '',
      fontData: '',
      displayNote: '',
      images: [],
      headerImage: '',
      previews: {}
    }
  },
  firebase: {
    fbInfo: {
      source: db.ref('info'),
      asObject: true
    },
    fbImages: {
      source: db.ref('images'),
      asObject: true
    },
    k: {
      source: db.ref('k'),
      asObject: true
    }
  },
  created: function () {
  },
  mounted: function () {
    this.fetchData()
    this.isLogged()
  },
  methods: {
    createNote: function (message) {
      this.displayNote = message
      let self = this

      setTimeout(function () {
        self.displayNote = ''
        console.log('cleared')
      }, 1000)
    },
    fetchData: function () {
      let self = this
      // let sort = this.fontSort
      // let key = self.fbInfo.font
      let url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=trending&fields=items%2Ffamily&key=AIzaSyBfo5yIc3yb6GoSY6U0jQvXhb0ryLeGfEU`
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          let size = 10
          let items = data.items
          items.slice(0, size).map(function (font) {
            self.fonts.push(font.family)
          })
          console.log(self.fonts)
        })
        .catch(function (err) {
          console.log(err)
        })
    },

    importFont () {
      let self = this
      let imported = self.fbInfo.fontImport
      if (imported) {
        let url = `<style> @import url('//fonts.googleapis.com/css?family=${imported}')</style>`
        self.fbInfo.fontStyle = self.fbInfo.fontImport
        return url
      }
    },
    renderStyle (...args) {
      let style = {}
      let self = this
      args.map(function (arg) {
        let key = Object.keys(arg)[0]
        let value = Object.values(arg)[0]
        if (key === 'box-shadow') {
          style[key] = `${self.fbInfo.shadow} ${self.fbInfo[value]}`
        } else {
          style[key] = self.fbInfo[value]
        }
      })
      return style
    },
    isLogged () {
      let self = this
      if (!self.fbInfo.requireAuth) {
        this.isLoggedIn = true
      } else if (firebase.auth().currentUser) {
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
      let notes = ''
      if (!this.requireAuth) {
        args.map(function (arg) {
          updates[arg] = self.fbInfo[arg]
          notes = 'cool!'
        })
        db.ref('info').update(updates)
        console.log(updates)
      } else if (this.requireAuth) {
        if (firebase.auth().currentUser) {
          args.map(function (arg) {
            updates[arg] = self.fbInfo[arg]
          })
          db.ref('fbInfo').update(updates)
          console.log(updates)
        } else {
          console.log('oops')
        }
      }
      this.createNote(notes)
    },
    imagesRef (file) {
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
    fbInfocus: {
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
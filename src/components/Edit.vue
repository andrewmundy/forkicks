          <!-- <div v-bind:style="{display:none;}">
            <input v-model="name">
            <input v-model="description">
            <button v-on:click="changeName()">change</button>
          </div>  -->


<template>
    <div class="">
      <div class="header">
        <div class="title hidden hidden-left" v-infocus="'showElement'">
          <span class="name">{{data['0'].name}}</span>
          <h2 class="hidden hidden-up headline" v-infocus="'showElement-slow'">
            {{this.data['1'].description}}
            <br>
            San Francisco, CA 
            <br>
          </h2>
        </div> 
      </div>
      <button v-on:click="this.toggle()">📝</button>
    </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyBufg5IBGg1m8Z8Hew3kBf-KOSHK35VZfU',
  authDomain: 'elledeboer-7dddc.firebaseapp.com',
  databaseURL: 'https://elledeboer-7dddc.firebaseio.com',
  storageBucket: 'elledeboer-7dddc.appspot.com',
  messagingSenderId: '60590756705'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let data = db.ref('info')
// console.log(data.name)

export default {
  name: 'Main',
  data () {
    return {
      name: 'Lauren',
      description: 'Fashion Photographer',
      toggle: 0
    }
  },
  firebase: {
    data: data
  },
  methods: {
    scrollMeTo (refName) {
      var element = this.$refs[refName]
      var top = element.offsetTop
      window.scrollTo(0, top)
    },
    updateData: function () {
      this.$nextTick(function () {
        console.log(this.data['0']['.value']) // => 'updated'
      })
    },
    changeName: function () {
      let updates = [{'name': this.name}, {'description': this.description}]
      db.ref('info').set(updates)
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
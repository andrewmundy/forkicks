<template>
    <div class="">
      <div class="header">
        <div class="title hidden hidden-left" v-infocus="'showElement'">
          <img class="logo" alt="logo" src="../assets/Laurie.svg"> 
          <span class="name"> Elle Deboer <br> Photography</span>
        </div>
        <div class="headline"> 
          <span class="hidden hidden-left-fast" v-infocus="'showElement'">Weddings</span>
          <span class="hidden hidden-right" v-infocus="'showElement'">Events</span>
          <span class="hidden hidden-left" v-infocus="'showElement'">Your Mom</span>
        </div>
        <button class="schedule" @click="scrollMeTo('contact')">Contact</button>
        <div class="spacer"></div>
        <img class="profile-logo" src="../assets/lauren.jpg"> 
        <h2 class="hidden hidden-up genre-quote" v-infocus="'showElement-slow'">
          "I'll take pictures of just about anything y'all! 🤳"
        </h2>
      </div>
      
      <div class="spacer"></div>
      
      <img class="hidden hidden-right squiggle" v-infocus="'showElement-slow'" src="../assets/squiggle.svg">
      
      <!-- //////////
      /// PROJECT ///
      //////////////////////////////// -->
      <projects/>

      <div class="spacer"></div>

      <!-- //////////
      /// CONTACT ///
      //////////////////////////////// -->
      <contact/>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Main Page'
    }
  },
  methods: {
    scrollMeTo (refName) {
      var element = this.$refs[refName]
      var top = element.offsetTop
      window.scrollTo(0, top)
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
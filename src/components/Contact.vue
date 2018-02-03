<template>
    <section ref="contact" id="contact" class="contact">
        <div class="spacer"></div>


        <h2 class="hidden hidden-up" v-infocus="'showElement'">

          {{anObject.contact}}
          <p>
          {{anObject.contact_description}}
          </p>
        </h2>
        <!-- <div class="schedule-div">
          <a class="schedule" href="" onclick="Calendly.showPopupWidget('https://calendly.com/andrewmundy/60min');return false;">
            Take a Look at my Schedule
          </a>
          <p>
            <h1 class="hvr-bob">
              👆
            </h1>
          </p>
        </div> -->
        <message v-bind="{anObject}" />

        <!-- <div class="spacer"></div> -->
        <div class="socials">
          <a target="_blank" v-bind:href="'https://instagram.com/' + anObject.instagram" v-bind:class="anObject.instagram ? '':'closed'" alt="instagram">
            <img class="hidden hidden-up" v-infocus="'showElement-fast'" src="../assets/icons/instagram.svg"></a>
          <a target="_blank" v-bind:href="'https://twitter.com/' + anObject.twitter" v-bind:class="anObject.twitter ? '':'closed'" alt="twitter">
            <img class="hidden hidden-up" v-infocus="'showElement-fast'" src="../assets/icons/twitter.svg"></a>
          <a target="_blank" v-bind:href="'https://facebook.com/' + anObject.facebook" v-bind:class="anObject.facebook ? '':'closed'" alt="facebook">
            <img class="hidden hidden-up" v-infocus="'showElement'" src="../assets/icons/facebook.svg"></a>
        </div>

        <h5 class="copywrite">created with 🍹 by Andrew Mundy</h5>
        <a href="https://github.com/andrewmundy/elledeboer"></a>
      </section>
</template>

<script>
export default {
  name: 'Contact',
  props: [
    'contact',
    'contact_description',
    'changeProp',
    'anObject',
    'edit',
    'toggle'
  ],
  data () {
    return {
      contacted: this.contact,
      contact_descriptioned: this.contact_description
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

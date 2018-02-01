<template>
    <section ref="contact" id="contact" class="contact">
        <div class="spacer"></div>


        <h2 class="hidden hidden-up" v-infocus="'showElement'">

        <!-- EDIT -->
          <div id="edit" v-bind:class="edit ? '' : 'closed'">
            <input 
                id="contact" 
                v-model="anObject.contact" 
                v-on="contact = anObject.contact" 
                placeholder="contact"
            >
            <br>
            <input 
                id="contact_description" 
                v-model="anObject.contact_description" 
                v-on="contact_description = anObject.contact_description" 
                placeholder="Contact Description"
            >
            <br>
            <input type="submit" value="confirm" v-on:click="changeProp('contact', 'contact_description')">
          </div> 

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
        <message/>

        <!-- <div class="spacer"></div> -->
        <div class="socials">
          <a href="https://twitter.com/andrewmundy" alt="twitter"><img class="hidden hidden-up" v-infocus="'showElement-fast'" src="../assets/icons/twitter.svg"></a>
          <a href="https://twitter.com/andrewmundy" alt="twitter"><img class="hidden hidden-up" v-infocus="'showElement-fast'" src="../assets/icons/twitter.svg"></a>
          <a href="https://www.linkedin.com/in/andrew-mundy/" alt="linkedin"><img class="hidden hidden-up" v-infocus="'showElement'" src="../assets/icons/linkedin.svg"></a>
        </div>

        <h5 class="copywrite">created with 🍹 by Andrew Mundy</h5>
        <a href="https://github.com/andrewmundy/andrewmundy2"></a>
      </section>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Main Page'
    }
  },
  props: [
    'contact',
    'contact_description',
    'changeProp',
    'anObject',
    'edit'
  ],
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

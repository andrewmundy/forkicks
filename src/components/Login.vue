<template>
    <div class="login">
      <div v-bind:class="isLoggedIn ? 'closed' : '' ">
        <input type="text" v-model="email" placeholder="email">
          <br>
        <input type="password" v-model="password" placeholder="password">
          <br>
        <button v-on:click="signIn(), toggle('login_closed')">Sign In</button>
      </div>
      <button v-bind:class="isLoggedIn ? '' : 'closed' " v-on:click="signOut(), toggle('login_closed')">Sign Out</button>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
      name: 'login',
      props: [
        'isLoggedIn',
        'toggle',
        'isLogged',
        'banner'
      ],
      data: function () {
        return {
          email: '',
          password: '',
          childBanner: this.banner
        }
      },
      methods: {
        mounted: function () {
        },
        signIn: function (props) {
          let self = this
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            function (user) {
              self.isLogged()
              self.email = ''
              self.password = ''
              self.childBanner = `Welcome ${user.Ib.email}`
            },
            function (err) {
              alert('oops! ' + err.message)
            }
          )
        },
        signOut (props) {
          let self = this
          firebase.auth().signOut().then(function () {
            console.log('signedout')
            self.isLogged()
            self.email = ''
            self.password = ''
            self.childBanner = ''
          }, function (error) {
            console.log(error)
          })
        }
      }
    }
</script>

<style>
</style>
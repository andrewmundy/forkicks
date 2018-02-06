<template>
    <div class="login">
      <div v-bind:class="isLoggedIn ? 'closed' : '' ">
        <div class="banner">
          Welcome to the Admin Panel, please sign in.
          <p>
            👋
          </p>
        </div>
        <input type="text" v-model="email" placeholder="email">
          <br>
        <input type="password" v-model="password" placeholder="password">
        <p>
          <button v-on:click="signIn(), toggle('login_closed')">Sign In</button>
        </p>
      </div>
      <div class="logout">
      </div>
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
        }
      }
    }
</script>

<style>
.banner{
  font-size: 1rem;
  padding:10px 0px;
  font-weight: 500;
  width:180px;
  color:white;
  margin:auto;
}
</style>
<template>
    <div class="admin">
      {{isLogged()}}
      {{banner}}

    <span style="cursor:pointer;" v-on:click="toggle('edit')">❌</span>

    <!-- INFO -->
      <div v-bind:class="isLoggedIn ? '' : 'closed'">
        <span class="categories" v-on:click="toggle('info')">Info</span>

        <div v-bind:class="info ? '' : 'closed'">
        <p>
          <span>Header Name</span>
            <br>
          <input 
            id="name" 
            v-model="anObject.name" 
            v-on="childName = anObject.name" 
            placeholder="Name"
          >
        </p>
        <p>
          <span>Header Description</span>
            <br>
          <input 
            id="description" 
            v-model="anObject.name_description" 
            v-on="childName_description = anObject.name_description" 
            placeholder="Description"
          >
        </p>
        <p>
          <span>Location</span>
            <br>
          <input 
            id="location" 
            v-model="anObject.location" 
            v-on="location = anObject.location" 
            placeholder="location"
          >
        </p>
       <p>
          <span>First Title</span>
            <br>
          <input 
            id="title1" 
            v-model="anObject.title1" 
            v-on="title1 = anObject.title1" 
            placeholder="Title 1"
          >
       </p>
       <p>
        <span>First Description</span>
          <br>
        <input 
              id="title1_description" 
              v-model="anObject.title1_description" 
              v-on="title1_description = anObject.title1_description" 
              placeholder="Description"
          >
        </p>

    <!-- SOCIALS -->
        <p>
          <span>Contact Header</span>
            <br>
          <input 
              id="contact" 
              v-model="anObject.contact" 
              v-on="contact = anObject.contact" 
              placeholder="contact"
          >
          </p>
          <p>
          <span>Contact Description</span>
            <br>
          <input 
              id="contact_description" 
              v-model="anObject.contact_description" 
              v-on="contact_description = anObject.contact_description" 
              placeholder="Contact Description"
          >
        </p>
        </div>
      <br>
      <span class="categories" v-on:click="toggle('social')">Socials</span>
      <div v-bind:class="social ? '' : 'closed'">
        <p>
          <span>Instagram</span>
            <br>
          <input 
            id="instagram" 
            v-model="anObject.instagram" 
            v-on="instagram = anObject.instagram" 
            placeholder="instagram"
          >
        </p>
        <p>
          <span>Twitter</span>
            <br>
          <input 
            id="twitter" 
            v-model="anObject.twitter" 
            v-on="twitter = anObject.twitter" 
            placeholder="twitter"
          >
        </p>
        <p>
          <span>Facebook</span>
            <br>
          <input 
            id="facebook" 
            v-model="anObject.facebook" 
            v-on="facebook = anObject.facebook" 
            placeholder="facebook"
          >
        </p>
        <p>
          <span>Message Email</span>
            <br>
          <input 
            id="messageEmail" 
            v-model="anObject.messageEmail" 
            v-on="messageEmail = anObject.messageEmail" 
            placeholder="messageEmail"
          >
        </p>
      </div>
        <br>

      <!-- SUBMIT BUTTON -->
        <button 
          href="/"
          v-on:click="
          changeProp(
            'title1', 
            'title1_description', 
            'name', 
            'name_description',
            'instagram',
            'twitter',
            'facebook',
            'messageEmail',
            'contact',
            'contact_description',
            'banner',
            'location'
          )">
            Confirm
          </button>
        <span class="categories" v-on:click="toggle('image')">image</span>
        <div v-bind:class="image ? '' : 'closed'">
          <form>
            <!-- <input> -->
              <!-- <br> -->
            <button>upload</button>
          </form>
        </div>
      </div> 


    <!-- LOGIN -->
    <p></p>
        <div v-bind:class="login_closed ? 'closed' : ''">
          <login 
            v-bind="{
              isLoggedIn,
              toggle,
              isLogged,
              banner
            }"
          />
        </div>

    </div>
</template>

<script>
    // import firebase from 'firebase'

    export default {
      name: 'edit',
      props: [
        'anObject',
        'toggle',
        'isLogged',
        'isLoggedIn',
        'changeProp',
        'name',
        'name_description',
        'contact',
        'contact_description',
        'title1',
        'title1_description',
        'info',
        'social',
        'image'
      ],
      data: function () {
        return {
          childName: this.name,
          childName_description: this.name_description,
          banner: ''
        }
      },
      methods: {
        mounted: function () {
        }
      }
    }
</script>

<style lang="scss">
  .admin_panel{
    z-index: 100;
    position: fixed;
    right:0;
    top:0;
    .categories{
      font-weight: 800;
      text-decoration: underline;
      cursor: pointer;
      padding-top: 1rem;
      display: block;
    }
    input{
      background:rgba(255, 255, 255, 0.281);
      color:white;
      border:none;
      padding:0.3rem;
      margin:0.2rem 0px;
      border-radius: 3px;
    }
    .admin{
      text-align: left;
      span{
        color:white;
      }
      padding:1rem;
      height: 100vh;
      background:rgb(17, 17, 20);
          overflow-y: scroll;
    }
  }
</style>
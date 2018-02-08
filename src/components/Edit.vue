<template>
    <div class="admin">
      {{isLogged()}}
      {{banner}}
      <div class="edit-control">
        <img v-show="isLoggedIn" title="logout" alt="logout" src="../assets/icons/power-off.svg" class="icon" v-on:click="signOut(), toggle('login_closed')">
        <img v-on:click="toggle('edit')" title="close-edit" alt="close-edit" class="icon" src="../assets/icons/close-out.svg">
      </div>
      <div class="info-panel" v-show="isLoggedIn">
      <!-- INFO -->
        <div class="header-info panel">
          <span class="categories" v-on:click="toggle('info')">
            <img alt="close" class="icon" src="../assets/icons/id.svg">
            <div v-if="info">
              <img alt="close" class="icon arrow" src="../assets/icons/arrow-right.svg">
            </div>
            <div v-else>
              <img alt="close" class="icon arrow" src="../assets/icons/arrow-left.svg">
            </div>
          </span>
          <transition name="fade">
            <div class="panel-contents" v-if="info">
              <div>
                <div>Header Name</div>
                <input 
                  id="name" 
                  v-model="anObject.name" 
                  v-on="childName = anObject.name" 
                  placeholder="Name"
                >
              </div>
              <div>
                <div>Header Description</div>
                <input 
                  id="description" 
                  v-model="anObject.name_description" 
                  v-on="childName_description = anObject.name_description" 
                  placeholder="Description"
                >
              </div>
              <div>
                <div>Location</div>
                <input 
                  id="location" 
                  v-model="anObject.location" 
                  v-on="location = anObject.location" 
                  placeholder="location"
                >
                <div>First Title</div>
                <input 
                  id="title1" 
                  v-model="anObject.title1" 
                  v-on="title1 = anObject.title1" 
                  placeholder="Title 1"
                >
              </div>
              <div>
              <div>First Description</div>
              <input 
                id="title1_description" 
                v-model="anObject.title1_description" 
                v-on="title1_description = anObject.title1_description" 
                placeholder="Description"
              >
              <div>Contact Header</div>
              <input 
                id="contact" 
                v-model="anObject.contact" 
                v-on="contact = anObject.contact" 
                placeholder="contact"
              >
            </div>
            <div>
              <div>Contact Description</div>
              <input 
                id="contact_description" 
                v-model="anObject.contact_description" 
                v-on="contact_description = anObject.contact_description" 
                placeholder="Contact Description"
              >
            </div>
          </div>
        </transition>
      </div>

    <!-- SOCIALS -->
    <div class="panel">
        <span class="categories" v-on:click="toggle('social')">
          <img alt="close" class="icon" src="../assets/icons/social.svg">
          <div v-if="social">
            <img alt="close" class="icon arrow" src="../assets/icons/arrow-right.svg">
          </div>
          <div v-else>
            <img alt="close" class="icon arrow" src="../assets/icons/arrow-left.svg">
          </div>
        </span>
      <transition name="fade">
        <div class="panel-contents" v-if="social">
          <div>
            <div>Instagram</div>
            <input 
              id="instagram" 
              v-model="anObject.instagram" 
              v-on="instagram = anObject.instagram" 
              placeholder="instagram"
            >
          </div>
          <div>
            <div>Twitter</div>
            <input 
              id="twitter" 
              v-model="anObject.twitter" 
              v-on="twitter = anObject.twitter" 
              placeholder="twitter"
            >
          </div>
          <div>
            <div>Facebook</div>
            <input 
              id="facebook" 
              v-model="anObject.facebook" 
              v-on="facebook = anObject.facebook" 
              placeholder="facebook"
            >
          </div>
          <div>
            <div>Message Email</div>
            <input 
              id="messageEmail" 
              v-model="anObject.messageEmail" 
              v-on="messageEmail = anObject.messageEmail" 
              placeholder="messageEmail"
            >
          </div>
        </div>
      </transition>
    </div>
  <!-- IMAGE -->
    <div class="panel">
      <span class="categories" v-on:click="toggle('image')">
        <img alt="close" class="icon" src="../assets/icons/camera.svg">
        <div v-if="image">
          <img alt="close" class="icon arrow" src="../assets/icons/arrow-right.svg">
        </div>
        <div v-else>
          <img alt="close" class="icon arrow" src="../assets/icons/arrow-left.svg">
        </div>
      </span>
      <transition name="fade">
      <div v-if="image">
        <button>upload</button>
      </div>
      </transition>
    </div>
  <!-- COLORS -->
    <div class="panel">
      <span class="categories" v-on:click="toggle('color')">
        <img alt="close" class="icon" src="../assets/icons/paint-white.svg">
        <div v-if="color">
          <img alt="close" class="icon arrow" src="../assets/icons/arrow-right.svg">
        </div>
        <div v-else>
          <img alt="close" class="icon arrow" src="../assets/icons/arrow-left.svg">
        </div>
      </span>
      <transition name="fade">
        <div class="panel-contents" v-if="color">
          <div class="panel-category">
            <span>Header Color</span>
            <colorpicker 
              class="stylepicker"
              colorInstance="headerColor"
              v-bind="{
                colorWindow,
                toggle,
                anObject
              }"
            />
            <input 
              id="header-color" 
              v-model="anObject.headerColor" 
              v-on="headerColor = anObject.headerColor"
              value="headerColor"
            >
          </div>

          <div class="panel-category">
            <span>Header SubColor</span>
            <colorpicker 
              class="stylepicker"
              colorInstance="headerSubColor"
              v-bind="{
                colorWindow,
                toggle,
                anObject
              }"
            />
            <input 
              id="header-subColor" 
              v-model="anObject.headerSubColor" 
              v-on="headerSubColor = anObject.headerSubColor" 
              placeholder=""
            >
          </div>

          <div class="panel-category">
            <span class="category-close">
              Header Shadow 
              <img alt="clear" title="clear" src="../assets/icons/exit.svg" class="icon" v-on:click="combineShadow('none')">
            </span>
            <div class="px">
              <span>x <input v-model="x"></span>
              <span>y <input v-model="y"></span>
              <span>blur <input v-model="blur"></span>
              {{combineShadow()}}
            </div>
          </div>

          <div class="panel-category">
            <span class="category-close">
              Font Color
            </span>
            <colorpicker 
              class="stylepicker"
              colorInstance="fontColor"
              v-bind="{
                colorWindow,
                toggle,
                anObject
              }"
            />
            <input 
              id="font-color" 
              v-model="anObject.fontColor" 
              v-on="fontColor = anObject.fontColor" 
              placeholder=""
            >
          </div>

          <div class="panel-category">
            <span class="category-close">
              Font Face
            </span>
            <fontpicker 
              class="stylepicker"
              fontInstance="fontStyle"
              v-bind="{
                colorWindow,
                toggle,
                anObject,
                fontImport,
                importFont
              }"
            />
            <input 
              style="visibility:hidden;"
              id="font-style" 
              v-model="anObject.fontStyle" 
              v-on="fontStyle = anObject.fontStyle" 
              placeholder=""
            >
          </div>

        </div>
      </transition>
    </div>
    <!-- SUBMIT BUTTON -->
    <div class="edit-control submit">
      <img
        alt="Submit Changes"
        title="Submit Changes" 
        class="icon arrow" 
        src="../assets/icons/check.svg"
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
          'location',
          'headerColor',
          'headerSubColor',
          'shadow',
          'fontColor',
          'fontStyle',
          'fontImport'
        )"
      >
      <img
        class="icon"
        title="Cancel Changes" 
        alt="Cancel Changes" 
        src="../assets/icons/exit-red.svg"
      >
    </div>
  </div> 

    <!-- LOGIN -->
      <div class="account" v-bind:class="login_closed ? 'closed' : ''">
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
    import firebase from 'firebase'

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
        'image',
        'color',
        'headerColor',
        'headerSubcolor',
        'colorWindow',
        'shadow',
        'fontColor',
        'fontStyle',
        'fontImport',
        'importFont'
      ],
      data: function () {
        return {
          childName: this.name,
          childName_description: this.name_description,
          banner: '',
          headerColorChild: this.headerColor,
          x: 0,
          y: 0,
          blur: 0
        }
      },
      methods: {
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
        },
        pickColor: function (color) {
          this.anObject.headerColor = color
        },
        combineShadow (x) {
          if (x) {
            this.x = 0
            this.y = 0
            this.blur = 0
            this.anObject.shadow = '0 0 0'
          }
          let localShadow = `${this.x}px ${this.y}px ${this.blur}px`
          this.anObject.shadow = localShadow
        },
        mounted: function () {
        }
      }
    }
</script>

<style lang="scss">
  .category-close{
    display: flex;
    justify-content: space-between;
    align-content: center;
    img{
    opacity: 0.4;
    padding:0 5px;
    width:12px;
    }
  }
  .edit-control{
    display:flex;
    justify-content: space-between;
    align-content: center;
    padding:0.8rem 0.2rem;
  }
  .submit{
    height: 75px;
    width:100px;
    margin:auto;
    justify-content: space-around;
  }
  .px{
    font-size: 0.8rem;
    margin: auto;
    input{
      width: 15px !important;
      padding:2px;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    transform: translateX(10px);
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .admin_panel{
    z-index: 100;
    position: fixed;
    right:0;
    top:0;
    .categories{
      font-weight: 800;
      cursor: pointer;
      display: block;
    }
    input{
      background:rgba(0, 0, 0, 0.25);
      color:white;
      font-weight: 600;
      font-size: 0.8rem;
      border:none;
      padding:0.3rem;
      margin:0.2rem 0px;
      border-radius: 3px;
    }
    .admin{
      span{
        color:rgba(255, 255, 255, 0.4);
      }
      height:100vh;
      overflow-y: auto;
      padding:1rem;
      min-width: 170px;
      background:#16141e;
      box-shadow: 0 0 30px black;
      .panel{
        background: rgba(255, 255, 255, 0.05);
        padding: 10px;
        border-radius: 10px;
        margin: 10px 0;
        div{
          text-align: left;
        }
        .panel-contents{
          display: flex;
          align-content: center;
          flex-direction: column;
          padding:10px 0px;
          color:rgba(255, 255, 255, 0.3);
          .panel-category{
            // border-bottom: 1px solid #ffffff2b;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            flex-wrap:wrap;
            .stylepicker{
              padding:5px 0px;
            }
            margin:10px 0px;
            span{
              margin-bottom:5px;
            }
          }
        }
        .categories{
          display: flex;
          justify-content: space-between;
          align-content: center;
        }
      }
    }
  }
  @media screen and (max-device-width: 1024px) {
      .admin_panel{
        margin: auto;
        input{
          width:80px;
          font-size:0.6rem;
        }
        .admin{
          width:100px;
          min-width: 100px;
          padding:5px;
          span{
            font-size: 0.7rem;
          }
          .panel{
            padding:6px;
          }
        }
      }
      .panel-category{
        span{
          font-size: 0.7rem;
        }
      }
    }
</style>
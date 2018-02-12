<template>
    <div>
      <div class="font-window">
        <ul id="fonts">
        <i style="font-size:0.5rem;">Here are some popular fonts.</i>
        <li @click="pickFont(fontInstance, 'roboto')">Roboto</li>
        <li @click="pickFont(fontInstance, 'arial')">Arial</li>
        <li @click="pickFont(fontInstance, 'georgia')">Gerogia</li>
        <li @click="pickFont(fontInstance, 'impact')">Impact</li>
        <li @click="pickFont(fontInstance, 'fantasy')">Papyrus(dont)</li>

        <i style="font-size:0.5rem;">Choose a Google Font</i>
        <button @click="whichFontSort('date')">Most Recent</button>
        <button @click="whichFontSort('trending')">Trending</button>
        <button @click="whichFontSort('popularity')">Popular</button>
        <li v-for="font in fonts" @click="pickFont(fontInstance, font)">
          {{font}}
        </li>
        </ul>
      </div>
      <div class="font-import">
        Import Google Font
        <i style="font-size:0.5rem;">or <a href="https://fonts.google.com/">find</a> a Google Font and type it below</i>
        <input 
          v-model="fbInfo.fontImport"
          v-on="fontImport = fbInfo.fontImport"
        >
        <button class="" @click="pickFont(fontInstance, fbInfo.fontImport)">import</button>
      </div>
    </div>
</template>

<style lang="scss">
    .font-import{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width:auto;
      button{
        background:rgba(255,255,255,0.2);
        border-radius: 4px;
        padding:4px;
        margin: 2px;
        cursor: pointer;
      }
      *{
        margin:5px 0px;
      }
      a{
        text-decoration: underline;
      }
      i{
        font-size:0.6rem;
      }
    }
    .font-window{
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: wrap;
      // flex-direction: column;
      width:150px;
      margin: 10px 0px;
      li{
        background:rgba(255,255,255,0.2)
      }
      *{
        // background:rgba(255,255,255,0.2);
        border-radius: 4px;
        padding:4px;
        margin: 2px;
        cursor: pointer;
      }
    }
    @media screen and (max-device-width: 1024px) {
      .stylepicker{
        width:100px;
        font-size: 0.6rem;
        .font-window{
          width:auto;
          // padding:5px;
          *{
            border-radius: 5px;
            margin: 6px 0px 6px 0px;
          }
        }
        .font-import{
          padding:5px;
        }
      }
    }
</style>

<script>
  export default {
    name: 'FontPicker',
    props: [
      'toggle',
      'fbInfo',
      'fontInstance',
      'fontColor',
      'fontStyle',
      'fontImport',
      'importFont',
      'fonts',
      'fontSort'
    ],
    data () {
      return {
        fontImport: ''
      }
    },
    methods: {
      whichFontSort (sort) {
        this.fontSort = sort
        console.log(this.fontSort)
      },
      createNode (element) {
        return document.createElement(element)
      },
      append (parent, el) {
        return parent.appendChild(el)
      },
      throwFonts () {
        // let ul = document.getElementById('fonts')
        // let self = this
        // this.fonts.map(function (font) {
        //   let li = self.createNode('li')
        //   li.innerHTML = font
        //   self.append(ul, li)
        // })
        // console.log(this.fonts, this.$refs['fonts'])
      },
      pickFont: function (rule, fontFamily) {
        let fontFamilyRule = rule
        let parsedFont = fontFamily.replace(/\b[a-z]/g, function (f) {
          return f.toUpperCase().split(' ').join('+')
        })
        this.fbInfo[fontFamilyRule] = parsedFont
        this.fbInfo.fontImport = fontFamily
      }
    },
    mounted: function () {
      // this.throwFonts()
    }
  }
</script>
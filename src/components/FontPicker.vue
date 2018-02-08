<template>
    <div>
      <div class="font-window">
        <div @click="pickFont(fontInstance, 'roboto')">Roboto</div>
        <div @click="pickFont(fontInstance, 'arial')">Arial</div>
        <div @click="pickFont(fontInstance, 'georgia')">Gerogia</div>
        <div @click="pickFont(fontInstance, 'impact')">Impact</div>
        <div @click="pickFont(fontInstance, 'fantasy')">Dont</div>
        <div @click="pickFont(fontInstance, 'wingdings')">Seriously, Dont</div>
      </div>
      <div class="font-import">
        <a href="https://fonts.google.com/">Import Google Font</a>
        <i style="font-size:0.5rem;">find a google font and type it below</i>
        <input 
          v-model="anObject.fontImport"
          v-on="fontImport = anObject.fontImport"
        >
        <button class="" @click="pickFont(fontInstance, anObject.fontImport)">import</button>
      </div>
    </div>
</template>

<style lang="scss">
    .font-import{
      display: flex;
      justify-content: center;
      flex-direction: column;
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
      *{
        background:rgba(255,255,255,0.2);
        border-radius: 4px;
        padding:4px;
        margin: 2px;
        cursor: pointer;
      }
    }
    @media screen and (max-device-width: 1024px) {
      .font-window{
        width:100px;
        *{
          width:24px;
          border-radius: 5px;
          margin:3px;
        }
      }
    }
</style>

<script>
  export default {
    name: 'FontPicker',
    props: [
      'toggle',
      'anObject',
      'fontInstance',
      'fontColor',
      'fontStyle',
      'fontImport',
      'importFont'
    ],
    data () {
      return {
        fontImport: ''
      }
    },
    methods: {
      pickFont: function (rule, fontFamily) {
        let fontFamilyRule = rule
        let parsedFont = fontFamily.replace(/\+/g, ' ')
        console.log('rule:' + rule + ' fontfamily:' + parsedFont)
        this.anObject[fontFamilyRule] = parsedFont
        this.anObject.fontImport = fontFamily
      },
      mounted: function () {
      }
    }
  }
</script>
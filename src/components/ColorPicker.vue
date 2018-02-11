<template>
    <div>
      <div class="color-window">
        <div v-on:click="pickColor(colorInstance, '#8F2D56')" style="background:#8F2D56"></div>
        <div v-on:click="pickColor(colorInstance, '#D81159')" style="background:#D81159"></div>
        <div v-on:click="pickColor(colorInstance, '#F5508C')" style="background:#F5508C"></div>
        <div v-on:click="pickColor(colorInstance, '#FFC145')" style="background:#FFBC42"></div>
        <div v-on:click="pickColor(colorInstance, '#FFF600')" style="background:#FFF600"></div>
        <div v-on:click="pickColor(colorInstance, '#B8E986')" style="background:#B8E986"></div>
        <div v-on:click="pickColor(colorInstance, '#08A045')" style="background:#7ED321"></div>
        <div v-on:click="pickColor(colorInstance, '#218380')" style="background:#50E393"></div>
        <div v-on:click="pickColor(colorInstance, '#50E3C2')" style="background:#50E3C2"></div>
        <div v-on:click="pickColor(colorInstance, '#73D2DE')" style="background:#50B3E3"></div>
        <div v-on:click="pickColor(colorInstance, '#4A90E2')" style="background:#4A90E2"></div>
        <div v-on:click="pickColor(colorInstance, '#4A51E2')" style="background:#4A51E2"></div>
        <div v-on:click="pickColor(colorInstance, '#9013FE')" style="background:#9013FE"></div>
        <div v-on:click="pickColor(colorInstance, '#BD10E0')" style="background:#BD10E0"></div>
        <div v-on:click="pickColor(colorInstance, '#000000')" style="background:#000000"></div>
        <div v-on:click="pickColor(colorInstance, '#4A4A4A')" style="background:#4A4A4A"></div>
        <div v-on:click="pickColor(colorInstance, '#9B9B9B')" style="background:#9B9B9B"></div>
        <div v-on:click="pickColor(colorInstance, '#FFFFFF')" style="background:#FFFFFF"></div>
        <div v-on:click="pickColor(colorInstance, 'none')" style="box-shadow: inset 0 0 0 1px white;"></div>
      </div>
    </div>
</template>

<style lang="scss">
    .color-window{
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: wrap;
      width:150px;
      *{
        width:25px;
        height:10px;
        border-radius: 4px;
        margin: 2px;
        cursor: pointer;
      }
    }
    @media screen and (max-device-width: 1024px) {
      .color-window{
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
    name: 'ColorPicker',
    props: [
      'toggle',
      'colorWindow',
      'fbInfo',
      'colorInstance',
      'shadow',
      'fontColor',
      'fontStyle'
    ],
    data () {
      return {
        childName: this.name,
        childName_description: this.name_description,
        banner: '',
        headerColorChild: this.headerColor
      }
    },
    methods: {
      pickColor: function (rule, color) {
        let colorRule = rule
        this.fbInfo[colorRule] = color
        // return {'v-style': color}
        console.log(rule, color)
      },
      mounted: function () {
      }
    }
  }
</script>
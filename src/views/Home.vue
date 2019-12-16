<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import {Component, Prop, Vue} from 'vue-property-decorator'

@Component({
  props: {
    propMessage: String
  },
  components:{
    HelloWorld
  }
})
export default class app extends Vue {
  // initial data//等同于data
  msg:string = '123'

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted() {
    // this.greet()
  }
  created(){
    this.show()
  }

  // computed
  get computedMsg() {
    console.log(this.msg)
    return 'computed ' + this.msg
  }

  // method
  greet() {
    alert('greeting: ' + this.msg)
  }
  show():void{
    console.log('----------')
  }
}
</script>
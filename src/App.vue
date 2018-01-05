<template>
  <div id="app">
    <b-container class="no_padding">
      <b-row>
        <b-col class="no_padding">
          <navbar></navbar>
        </b-col>
      </b-row>
      <transition name="example">
        <router-view></router-view>
      </transition>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  methods:{},
  computed:{}
}
</script>

<style lang="scss">

.example-enter, .example-leave-to{
  opacity:0;
}

.example-leave, .example-enter-to{
  opacity:0;
}

.example-enter-active, .example-leave-active{
  transition: opacity 500ms;
}

.no_padding{
  padding:0px;
}

.example-col{
  border:1px solid black;
  padding:0px;
}

.p-height{
  line-height:50px;
}

.form-container{
  border:1px solid black;
  margin-bottom:40px;
  padding:20px;
}

.content-container{
  margin-bottom:40px;
  padding:20px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
}

a:hover{
  color:#F39222;
  text-decoration:none;
}
</style>

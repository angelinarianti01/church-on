<template>
<nav class="navbar navbar-expand-lg navbar-dark" v-bind:class=" { 'navbarOpen': show }">
        <div class="col-3 navbar-brand">
          <!-- <a href="/"><img src="../assets/rosc.png" alt="ROSC Logo" class="logo"></a> -->
          <p href="/" class="logo">ChurchON</p>
        </div> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
            <ul class="navbar-nav mr-auto">    
                <li class="nav-item">                  
                  <a><router-link v-show="getPath() != '/department'" class="navbar-brand" to="/department">Department</router-link></a> 
                  <a><router-link v-show="getPath() == '/department'" class="navbar-brand selected" to="/department">Department</router-link></a>                    
                </li>
                <li class="nav-item">
                  <a><router-link v-show="getPath() != '/roster'" class="navbar-brand" to="/roster">Roster</router-link></a>
                  <a><router-link v-show="getPath() == '/roster'" class="navbar-brand selected" to="/roster">Roster</router-link></a>           
                </li>
                <li class="nav-item">
                  <a><router-link v-show="getPath() != '/service'" class="navbar-brand" to="/service">Service</router-link></a>
                  <a><router-link v-show="getPath() == '/service'" class="navbar-brand selected" to="/service">Service</router-link></a>        
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import route from '@/router'

export default {
  name: 'NavigationComponent',
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show
    },
    getPath() {
      console.log(route.currentRoute.value.fullPath)
      return route.currentRoute.value.fullPath;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


nav {
  background-color:black;
  border-bottom: #000000;
  border-width: 10px;
  padding: 0;
}
a {
  color: white;
  font-size: 1.13em;
  font-weight: 100;
}
a:hover {
  color: #ffdf6c;
  font-size: 1.13em;
  font-weight: 500;
  text-decoration: underline;  
}
.selected {
  color: #ffdf6c;
  font-size: 1.13em;
  font-weight: 500;
}

.logo {
  padding-top: 0.1em;
  font-size: 1.5em;
  font-style: italic;
}

</style>

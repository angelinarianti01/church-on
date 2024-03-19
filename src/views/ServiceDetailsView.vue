<template>
    <Nav></Nav>
    <div class="body">        
                   
        <h1>{{ selectedService.name }}</h1>  
    
        <Scheduler></Scheduler>
    </div>


    <div class="home">
    </div>
</template>
  
<script>
  // @ is an alias to /src
  import Nav from '@/components/Navigation.vue'
  import Scheduler from '@/components/Scheduler.vue'

  // import database
  import database from '@/db/db'

  
  export default {
    name: 'DepartmentView',
    created() {
        // Retrieve id
        let id = this.$route.params.id

        // Set selected service
        this.services.forEach((s) => {
            if (s.id == id) {
                this.selectedService = s
            }
        })       
    },
    components: {
        Nav,  
        Scheduler
    },
    data() {
        return {
            selectedService: {},
            services: database.eventServices, 
            
        }
    },    
    methods: {
    
    }
  }
</script>

<style scoped>

@font-face {
  font-family: 'NHaasGrotesk';
  src: url('../assets/font/NHaasGrotesk.ttf')
}
@font-face {
  font-family: 'NHaasGroteskMedium';  
  src: url('../assets/font/NHaasGroteskMedium.ttf')
}

@font-face {
  font-family: 'NHaasGroteskBold';  
  src: url('../assets/font/NHaasGroteskBold.ttf')
}

.body {
    background-color: rgb(248, 248, 248);
    min-height: 720px;
    padding: 4vw;
}


h1 {
    font-size: 2em;  
    font-family: NHaasGroteskMedium;      
    margin-top:2vw;
}
</style>
  
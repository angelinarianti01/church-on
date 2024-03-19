<template>
    <Nav></Nav>
    <div class="body">        
           
        <div class="row">
            <h1>{{ selectedDept.name }}</h1>  
        </div>   
        
        <br>
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <Table :selectedMinistry="selectedDept.name"></Table>
            </div>
            <div class="col-1"></div>
        </div>
        
    </div>


    <div class="home">
    </div>
</template>
  
<script>
  // @ is an alias to /src
  import Nav from '@/components/Navigation.vue'
  import Table from '@/components/Table.vue'  

  // Database
  import database from '../db/db'

  export default {
    name: 'DepartmentView',
    created() {
        // Get parameter
        let id = this.$route.params.id

        // Save user selection
        this.departments.forEach(d => {
            if (d.id == id) {
                this.selectedDept = d
            }
        })
        console.log(this.selectedDept)
    },
    components: {
        Nav,  
        Table
    },
    data() {
        return {
            // Department
            selectedDept: {},
            departments: database.departments,            
        }
    },    
    computed: {
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

@media only screen and (min-width: 640px) {
    .tabContainer {
        margin: 0vw 7vw;
    }
    li {
        font-size: 1.5vw;
    }

}

@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: portrait) {
    
    .tabContainer {
        margin: 0vw 2vw;
    }
    li {
        font-size: 3vw;
    }
}
  
@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: landscape) {
    
}
.body {
    background-color: rgb(248, 248, 248);
    min-height: 720px;
}

h1 {
    font-size: 2em;  
    font-family: NHaasGroteskMedium;      
    margin-top:2vw;
}

.selected {
    font-weight: 425;
    background-color: #ddd;
    padding: 0vw 1vw 0vw 1vw;
}

li {
    background-color: white;
    list-style:none;      
    font-weight: 500;
    padding: 1vw 0vw;      
    border-bottom: 1px solid hwb(63 73% 19%);
    border-radius: 10px;
    margin-bottom: 7px;
    color: rgb(98, 98, 98);  
}

</style>
  
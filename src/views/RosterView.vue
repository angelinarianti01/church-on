<template>
    <Nav></Nav>
    <div class="body"> 
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <h1 class="heading">Choose a department</h1> 
            </div>
            <div class="col-1"></div>
        </div>     
        
        <br>

        <div class="row">
            <div class="col-1"></div>
            <ul class="list-group col-10">
                <li v-for="d in departments" v-bind:key="d"><router-link :to="'/roster/'+d.id">{{ d.name }}</router-link></li>
            </ul>
            <div class="col-1"></div>
        </div>  

        <br>
        
        <div class="row">
            <div class="col-3 col-md-4"></div>
            <div class="col-6 col-md-4">
                <!-- Show Button -->
                <Button label="Add" v-show="formOpened==false" @click="formOpened=true"></Button>  

                <!-- Close button -->
                <Button label="Close" v-show="formOpened==true"  @click="formOpened=false"></Button>
            </div>
            <div class="col-3 col-md-4"></div>
        </div>

        <div class="row">    
            <div class="col-1"></div>
            <div class="form col-10" v-show="formOpened==true" >               
                <Form :field="addServiceForm" v-on:set-input-data="addService" ></Form>       
            </div>   
            <div class="col-1"></div>               
        </div> 
    </div>

</template>
  
<script>
  // @ is an alias to /src
  import Nav from '@/components/Navigation.vue'
  import Button from '@/components/Button.vue'
  import Form from '@/components/Form.vue'

  // import database
  import database from '@/db/db'
  
  export default {
    name: 'ServiceView',
    created() {
    },
    components: {
        Nav,
        Button,
        Form      
    },
    data() {
        return {  
            // Dept         
            departments: database.departments,

            // Form
            formOpened: false,
            addServiceForm: [
                {
                    identifier: 'name',
                    field: 'Name of service',
                    type: 'text',
                    placeholder: 'Enter name here',
                    warning: 'Please enter a proper name',
                },
                {
                    identifier: 'date',
                    field: 'Date of service',
                    type: 'text',
                    placeholder: 'dd/mm/yyyy',
                    warning: 'Please enter a proper date',
                }
            ]

        }
    },    
    methods: {       
        // Database
        getServices() {
            return this.services.map((m) => m.name)
        },
        addService(results) {
            let newId = this.services[this.services.length-1].id + 1
            results.id = newId
            this.services.push(results);

            // Hide form
            this.formOpened = false;
        },        
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
    .heading {
        font-size: 3vw;  
        font-family: NHaasGroteskMedium;   
        margin-top: 2vw;
    }  

   
}

@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: portrait) {
    .heading {
        font-size: 7vw;
        font-family: NHaasGroteskMedium;
        margin-top: 3vw         
    }
}
  
@media only screen and (min-width: 600px) and (max-width: 700px) and (orientation: landscape) {
    .heading {
        font-size: 5vw;
        font-family: NHaasGroteskMedium;
        margin-top: 3vw         
    }
}

.body {
    background-color: rgb(248, 248, 248);
    min-height: 720px;
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
  
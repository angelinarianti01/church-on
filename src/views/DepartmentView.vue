<template>
    <Nav></Nav>
    <div class="body">        
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <h1>Departments</h1> 
            </div>
            <div class="col-1"></div>
        </div>        
    
        <div class="cardsContainer row"> 
            <div v-for="d in departments" v-bind:key="d.id" class="cardContainer col-12 col-sm-4 col-md-3">
                <Card :name="d.name" :imgFile="d.img" :imgAlt="d.name + ' Team'" class="dCard" @click="openDepartment(d.id)"></Card>
            </div>  
        </div>  

        <br>

        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <!-- Show Button -->
                <Button label="Add" v-show="!form.includes('add-department')" @click="showForm('add-department')" ></Button>  

                <!-- Close button -->
                <Button label="Close" v-show="form.includes('add-department')"  @click="hideForm('add-department')" ></Button>
            </div>
            <div class="col-3"></div>
        </div>

        <div class="row">    
            <div class="col-1"></div>
            <div class="form col-10 col-md-10" v-show="form.includes('add-department')" >               
                <Form :field="addDepartmentForm" v-on:set-input-data="addDepartment" ></Form>       
            </div>   
            <div class="col-1"></div>               
        </div>  
    </div>


    <div class="home">
    </div>
</template>
  
<script>
  // @ is an alias to /src
  import router from '@/router'
  import Nav from '@/components/Navigation.vue'
  import Card from '@/components/Card.vue'
  import Button from '@/components/Button.vue'  
  import Form from '@/components/Form.vue'  

  // import database
  import database from '@/db/db'
  
  export default {
    name: 'MinistriesView',
    created() {
        console.log(database.departments)
    },
    data() {
        return {
            form: [''],
            addDepartmentForm: [
                {
                    identifier: 'name',
                    field: 'Name of Ministry',
                    type: 'text',
                    placeholder: 'Enter name here',
                    warning: 'Please enter a proper name',
                },
                {
                    identifier: 'img',
                    field: 'Image',
                    type: 'radio',
                    options: ['paw.jpg', 'usher.jpg'],
                }
            ],
            departments: database.departments,            
        }
    },
    components: {
        Nav,
        Card,
        Button,
        Form
    },
    methods: {
        showForm(formName) {
            this.form.push(formName); 
            console.log(database)                       
        },
        hideForm(formName) {
            if (this.form.includes(formName)) {
                let index = this.form.indexOf(formName)
                console.log(index)
                this.form.splice(index, 1);    
            }
        },
        addDepartment(input) {                        
            this.departments.push(input);

            // Hide form
            this.hideForm('add-ministry')
        },
        openDepartment(m) {        
            router.push('/department/' + m)
        }
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
}

h1 {
    font-size: 2em;  
    font-family: NHaasGroteskMedium;      
    margin-top:2vw;
}

.cardsContainer {
    padding-left: 7vw;
    padding-right: 7vw;    
}

.cardContainer {
    margin-top: 2vw;
}

.dCard{
    margin: auto;
    text-align: center;
    width: fit-content;    
    padding: 0;    
}

</style>
  
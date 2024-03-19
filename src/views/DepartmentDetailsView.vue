

<template>
    <Nav></Nav>
    <div class="body">        
           
        <div class="row">
            <h1>{{ selectedDept.name }}</h1>  
        </div>   
        
        <br>

        <TabsWrapper class="tabContainer">
            <Tab title="Details">
                <div class="row">                    
                    <div class="col-12">
                        <Form :field="ministryForm" v-on:set-input-data="saveMinistry" v-on:cancel="goBack"></Form>
                    </div>
                </div>   
            </Tab>

            <Tab title="Role" > 
                <div class="row" v-show="roleFormVisible">                    
                    <Form :field="addRoleForm" v-on:set-input-data="addRole" v-on:cancel="roleFormVisible = false"></Form>
                </div> 

                <div class="row">
                    <ul v-show="roleFormVisible==false" class="list-group col-12">
                        <li v-for="r in getRoles()" v-bind:key="r"> {{ r.name }}</li>
                    </ul>
                </div>
                
                <br>                

                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <Button label="Add" class="button" v-show="roleFormVisible==false" @click="showRoleForm()"></Button> 
                    </div>
                    <div class="col-3"></div>
                </div>  
                                                           
            </Tab>

            <Tab title="People" > 
                <div class="row" v-show="peopleFormVisible">                    
                    <Form :field="addPeopleForm" v-on:set-input-data="addPeople" v-on:cancel="this.peopleFormVisible = false"></Form>
                </div>  

                <div class="row">
                    <ul v-show="peopleFormVisible==false" class="list-group col-12">
                        <li v-for="p in getPeople()" v-bind:key="p"> {{ p.name }}</li>
                    </ul>
                </div>
                
                <br>

                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <Button label="Add" class="button" v-show="peopleFormVisible==false" @click="showPeopleForm()"></Button> 
                    </div>
                    <div class="col-3"></div>
                </div>                          
              
            </Tab>
        </TabsWrapper>
    </div>


    <div class="home">
    </div>
</template>
  
<script>
  // @ is an alias to /src
  import Nav from '@/components/Navigation.vue'
  import TabsWrapper from '@/components/TabsWrapper.vue'
  import Tab from '@/components/Tab.vue'
  import Button from '@/components/Button.vue'
  import Form from '@/components/Form.vue'

  // Database
  import database from '../db/db'
    import router from '@/router'

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
        TabsWrapper,
        Tab,
        Button,
        Form,
    },
    data() {
        return {
            // Department
            selectedDept: {},
            departments: database.departments,            
        
            // Role
            roles: database.roles,
            roleFormVisible: false,            
        
            // People
            people: database.people,
            peopleFormVisible: false,                        
                
            // Roster
            services: database.services, 
        }
    },    
    computed: {
        ministryForm() {
            return [
                {
                    identifier: 'name',
                    field: 'Name of Ministry',
                    type: 'text',
                    placeholder: 'Enter name here',
                    warning: 'Please enter a proper name',
                    value: this.selectedDept.name
                },
                {
                    identifier: 'imageFilename',
                    field: 'Image',
                    type: 'radio',
                    options: ['paw.jpg', 'usher.jpg'],
                    value: this.selectedDept.img
                }
            ]
        },
        addRoleForm(){
            return [
                {
                    identifier: 'name',
                    field: 'Name of role',
                    type: 'text',
                    placeholder: 'Enter specific name for role',
                },
            ]
        }, 
        addPeopleForm(){
            return [
                {
                    identifier: 'personName',
                    field: 'Name of person',
                    type: 'text',
                    placeholder: 'Enter full name',
                    warning: 'Please enter a proper name',
                },
                {
                    identifier: 'role',
                    field: 'Role',
                    type: 'radio',
                    options: this.roles.filter(r => r.department == this.selectedDept).map(r => r.name)
                },            
                {
                    identifier: 'age',
                    field: 'Age',
                    type: 'text',
                    placeholder: 'Enter age',
                },  
                {
                    identifier: 'phone',
                    field: 'Phone',
                    type: 'text',
                    placeholder: 'Enter phone number 04..'
                },  
            ];
        },

    },
    methods: {
        // Ministry        
        selectMinistry(ministry) {  
            let selected = this.$refs['m'+this.selectedDept.id][0]

            // Remove previous selection
            if (selected.classList.contains('selected')) {
                selected.classList.remove('selected')                
            }
                    
            // Save current selection
            this.selectedDept = ministry; 

            // Add class to selected
            this.$refs['m'+ministry.id][0].classList.add('selected');
        },
        addDept(results) {
            // Add to database            
            this.departments.push(results)   
        },

        // Roles
        getRoles() {
            return this.roles.filter((r) => r.deptId == this.selectedDept.id)
        },
        showRoleForm() {
            if (this.roleFormVisible) {
                this.roleFormVisible = false;
            }
            else {
                this.roleFormVisible = true;
            }
        },
        addRole(results) {
            // Add to database
            results.department = this.selectedDept.name;
            this.roles.push(results)

            // Hide form
            this.roleFormVisible = false;
        },

        // People
        getPeople() {      
            console.log(database.people)      
            return this.people.filter((p) => p.deptId == this.selectedDept.id)                       
        },
        showPeopleForm() {
           if (this.peopleFormVisible) {
            this.peopleFormVisible = false;
           }
           else {
            this.peopleFormVisible = true;
           }
        },
        addPeople(results) {            
            // Add to database
            results.department = this.selectedDept.name;
            this.people.push(results)

            console.log(this.people)

            // Hide form
            this.peopleFormVisible = false;
        },
        goBack() {
            // Go back to previous
            router.push('/department')
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
  
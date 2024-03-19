<template>
    <table class="table">
        <thead>
            <tr class="row">
                <th scope="col" rowspan="1" class="col-4">Service</th>
                <th scope="col" rowspan="1" class="col-3">Role</th>
                <th scope="col" rowspan="1" class="col-3">Person</th>
            </tr>
        </thead>
        <!-- For each row -->
        <tbody v-for="s in roster"  v-bind:key="s.serviceId">
            <!-- Unedited -->
            <tr class="row" v-show="editedRow!=s.serviceId" v-for="(ass, i) in s.assigned" v-bind:key="ass">
              <!-- Service column -->
                <!-- Show if first role -->
                <td class="col-4" v-show="i==0"><router-link :to="'/service/'+s.serviceId">{{ getService(s.serviceId) }}</router-link></td>
                <!-- Other roles -->
                <td class="col-4" v-show="i>0"></td>
              <!-- Role column -->
              <td scope="col" rowspan="1" class="col-3">
                {{ getRole(ass.roleId) }}
              </td>
              <!-- Person column -->
              <td scope="col" rowspan="1" class="col-3">
                {{ getPerson(ass.personId) }}
              </td>
              <!-- Button - only first row -->
              <Button class="col-2" v-show="i==0" label="Edit" @click="editRow(s.serviceId)" ></Button>  
            </tr>
            <tr></tr>

            <!-- Edited -->
            <tr class="row" v-show="editedRow==s.serviceId" v-for="(ass, i) in s.assigned" v-bind:key="ass">
              <!-- Service column -->
                <!-- Show if first role -->
                <td class="col-4" v-show="i==0"><a :href="'/service/'+s.serviceId">{{ getService(s.serviceId) }}</a></td>
                <!-- Other roles -->
                <td class="col-4" v-show="i>0"></td>
              <!-- Role column-->  
              <td class="col-3">
                {{ getRole(ass.roleId) }}
              </td>  
              <!-- Person column -->
              <td class="col-3">
                <select class="form-select" v-model="ass.personId">
                  <option v-for="p in getPeople()" v-bind:key="p.id" :value="p.id">{{ p.name }}</option>                
                  <option>Other</option>
                </select>                  
              </td>     
              <!-- Button - only first row -->            
              <Button class="col-2" v-show="i==0" label="Save" @click="saveRow()" ></Button>          
            </tr>
            
        </tbody>
</table>
</template>

<script>
import Button from './Button.vue';

import database from '@/db/db'

export default {
  name: 'TableComponent',
  props: {
    selectedMinistry: String,
  },
  components: {
    Button
  },
  created() {    
    this.deptId = this.$route.params.id

    // Populate roster 
    this.services.forEach((s) => {      
      
      // Populate assigned
      let aTemplate = []
      // Filter roles only for selected department
      this.roles.filter((r)=> r.deptId==this.deptId)
        .forEach((r) => { 

        // Assigned template              
        aTemplate.push({
          roleId: r.id,
          personId: ''
        })
      })

      // Push to roster
      this.roster.push({        
          serviceId: s.id,
          assigned : aTemplate    
      })
    })

    console.log(this.roster)
  },  
  data() {
    return {   
      deptId: 0,
      services: database.eventServices,
      roles: database.roles,
      people: database.people,
      editedRow: -1,
      roster: []      
    }
  },
  methods: {
    // Assign edited row
    editRow: function(rowId) {
      this.editedRow = rowId;
    },

    // Unassign edited row
    saveRow: function() {
      this.editedRow = -1; 
    },

    // Get service name
    getService(id) {  
      let s = this.services.filter((s) => s.id==id)[0]
      return `${s.name} (${s.date})`
    }, 

    // Get role name
    getRole(id) {
      let roleName = ''

      // Find role name
      this.roles.forEach( r => {
        if (r.id==id) {
          roleName = r.name
        }
      })

      return roleName      
    },

    // Get person name from id
    getPerson(id) {
      let name = ''

      // Find role name
      this.people.forEach( p => {
        if (p.id==id) {
          name = p.name
        }
      })

      return name      
    },

    // Get name of people
    getPeople() {    
      return this.people.filter((p)=> p.deptId==this.deptId)
    }
  }
}
</script>

<style scoped>

@media only screen and (min-width: 640px) {
  th {
    font-size: 1.3vw;
  }

  td {
    font-size: 1.2vw;
  }      
}
  
@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: portrait) {
  th {
    font-size: 3.5vw;
  }

  td {
    font-size: 3.5vw;
  }  
}
  
@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: landscape) {
    
}

th, td {
    background-color: white;
    list-style:none;      
    font-weight: 500;
    padding: 1vw 0vw;      
    border-bottom: 1px solid hwb(63 73% 19%);
    border-right: 1px solid hwb(63 73% 19%);
    border-left: 1px solid hwb(63 73% 19%);
    border-bottom-right-radius: 5px;
    margin-bottom: 7px;
    color: rgb(98, 98, 98);  
}

Button {
  margin: auto;
  max-height: fit-content;  
}

</style>
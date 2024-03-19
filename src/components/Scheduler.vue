<template>
  <div class="tableContainer">
    <!-- Dekstop view -->
    <table class="table table-responsive">
      <!-- Head classes -->  
        <thead>
            <tr>
                <th scope="col" colspan="1" rowspan="1">Time</th>
                <th scope="col" colspan="1">Event</th>
                <th scope="col" colspan="4" rowspan="1" >Department In Service</th>
            </tr>
        </thead>      
        <!-- For each row -->
        <tbody class="event-body" v-for="(e, i) in events" v-bind:key="e">
            <!-- Value row -->            
            <tr :ref="'row'+i" class="event-row" v-show="!editedRow.includes(i)">
                <td colspan="1" @click="selectRow(i)">{{ e.time }}</td>
                <td colspan="1"  @click="selectRow(i)">{{ e.description }}</td>
                <td colspan="1"  @click="selectRow(i)">{{ getDept(e.deptId) }}</td>
                <td colspan="1" @click="selectRow(i)">{{ getPic(e.picId) }}</td>
                <td colspan="1" @click="selectRow(i)">{{ e.notes }}</td>                                
            </tr>            

          <!-- Input row -->
            <tr class="event-row" v-show="editedRow.includes(i)">
                <td colspan="1">
                  <input type="text" class="form-control" v-model="e.time" placeholder="hh:mm">
                </td>
                <td colspan="1">
                  <input type="text" class="form-control" v-model="e.description">
                </td>
                <td colspan="1"> 
                  <select class="form-select" v-model="e.deptId">
                    <option v-for="d in departments" v-bind:key="d" :value="d.id">{{ d.name }}</option>                
                    <option>Other</option>
                  </select>
                </td>
                <td colspan="1">
                  <select id="disabledSelect" class="form-select" v-model="e.picId">
                    <option v-for="p in getDeptPeople(e.deptId)" v-bind:key="p" :value="p.id">{{ p.name }}</option>                
                    <option>Other</option>
                  </select>
                </td>
                <td colspan="1"><input type="text" class="form-control" v-model="e.notes"></td>
            </tr>   
            
            <!-- Buttons -->
            <tr class="buttons">
                <Button v-show="selectedRow==i" @click="editRow(i)" label="Edit"></Button>   
                <Button v-show="editedRow.includes(i)" @click="saveRow()" label="Save"></Button>
                <Button v-show="selectedRow==i" @click="deleteRow(i)" label="Delete"></Button>                
            </tr>
            <tr class="buttons" v-show="selectedRow==i">
              <Button @click="showDepartmentForm(i, e.time, e.description)" label="Add Department"></Button>
            </tr>
        </tbody>
        <br>
        <tbody>
          <tr class="row">
            <Button label="Add Event" @click="showEventForm()"></Button>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import Button from './Button.vue'

// import database
import database from '@/db/db'

export default {
  name: 'CardComponent',
  props: {
  },
  components: {
    Button,
  },
  created() {    
  },
  data() {
    return {         
      windowWidth: this.windowWidth,  // kek e g perlu

      // Rows
      selectedRow: -1,
      editedRow: [],
      inputRow: {
        id: 0,
        duration: 0,
        event: '',
        department: '',
        pic: '',
        notes: '',
      },   

      // Load db
      events: database.events,    
      departments: database.departments,
      people: database.people      
    }
  },
  methods: {
    // Get people from certain department
    getDeptPeople: function(id) {
      return this.people.filter((p) => p.deptId==id)
    }, 

    // Destructure event
    getDept(id) {  
      let dept = ''
      
      // Find person name
      this.departments.forEach(d => {
        if (d.id == id) {
          dept = d.name
        }
      })

      return dept
    },
    getPic(id) {  
      let name = ''
      
      // Find person name
      this.people.forEach(p => {
        if (p.id == id) {
          name = p.name
        }
      })

      return name
    },
    
    // Row selection
    selectRow: function(i) {              
        // Get row class list
        var refClass = Array.prototype.slice.call(this.$refs['row'+i][0].classList)
        // var refClass = document.getElementById('row'+row.id).className;

        if (refClass.includes('selected')) {
            // Set selected row to default
            this.selectedRow = -1;

            // Add class
            this.$refs['row'+i][0].classList.remove('selected');
        }
        else {
            // Unselect previous row
            if (this.selectedRow>=0) {
              this.$refs['row'+this.selectedRow][0].classList.remove('selected');
            }

            // Set selected row
            this.selectedRow = i;

            // Add class
            this.$refs['row'+i][0].classList.add('selected');
        }   
    },

    // Modify rows
    editRow: function(rowId) {      
      this.editedRow.push(rowId);
      
      // Unselect previous row
      if (this.selectedRow>=0) {
        this.$refs['row'+this.selectedRow][0].classList.remove('selected');
      }    

      // Default selected row
      this.selectedRow = -1;
    },
    saveRow: function(rowId) {
      this.editedRow.splice(rowId, 1)   
    },
    deleteRow: function(i) {
      // Desselect row
      this.selectedRow = -1
      this.editedRow.splice(i, 1) 
     
      // Delete from row
      this.events.splice(i, 1)
    }, 

    // Add an event -> show event form
    showEventForm: function() {
      // Create new event
      let e = {
        deptId: 0,
        picId: 0,
        time: '',
        description: '...',        
        notes: '',
      }
      this.events.push(e)

      // Assign as edited row based on last index
      this.editRow(this.events.length);
    },
    showDepartmentForm: function(index, time, desc) {   

      // Create new event
      let e = {
        deptId: -1,
        picId: -1,
        time: time,
        description: desc,        
        notes: '',
      }
      this.events.splice(index+1, 0, e)

      // Assign as edited row
      this.editRow(index+1);  
    },
  }  
}
</script>

<style scoped>

@media only screen and (min-width: 640px) {
    
}

@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: portrait) {
  .tableContainer {
    overflow-x: scroll;
  } 
  input, select, td {
    min-width: 100px;
  }  
}
  
@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: landscape) {
    
}

.event {
    cursor: pointer;
}
.selected {
    background-color: #f5f5f5;
    color: black;
}
</style>
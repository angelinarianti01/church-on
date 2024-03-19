<template>  
    <div class="row" v-for="f in field" v-bind:key="f.field">
      <!-- Label -->
      <div class="label col-4">
        <label :for="trim(f.field)">{{ f.field }}</label>      
      </div>
      <!-- Text input -->
      <div class="input col-8" v-show="f.type=='text'">
        <!-- Identifier contained in class to be sent back -->
        <input :class="'text-input ' + f.identifier" type="text" :placeholder="f.placeholder" :value="f.value">
      </div> 
      <!-- Radio button field -->
      <div class="input col-8" v-show="f.type=='radio'">
        <div v-for="o in f.options" v-bind:key="o" class="options">
          <input :class="'form-check-input radio-input ' + f.identifier" type="radio" :value="o" :name="f.identifier" :checked="f.value==o">
          <label :for="o">
            {{o}}
          </label>
        </div>
      </div>      
    </div>
    <div class="row">
      <Button label="Save" class="saveButton" @click="passInput()"></Button>    
      <Button label="Cancel" class="cancelButton" @click="cancel()"></Button>    
    </div>    
  
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'FormComponent',
  props: {
    field: Array,
  },
  components: {
    Button
  },
  created() {
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    trim: function(string){
        return string.trim();
    },
    passInput: function() {
      let results = {}
      let textInputs = document.getElementsByClassName('text-input')
      let radioInputs = document.getElementsByClassName('radio-input')

      for (var i = 0; i< textInputs.length; i++) {
        if (textInputs[i].value) {          
          let key = textInputs[i].className.split(' ').pop()
          let value = textInputs[i].value

          // insert to results
          results[key] = value;     
        }
      }  
      
      for (var ii = 0; ii< radioInputs.length; ii++) {        
        // Get checked value        
        if (radioInputs[ii].checked) {
          // Get key
          let key = radioInputs[ii].className.split(' ').pop()
          
          // Get value
          let value = '';
          value = radioInputs[ii].value;

          // Insert to results
          results[key] = value;  
        }        
      }  

      console.log(results);
      this.$emit('set-input-data', results)
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>

@media only screen and (min-width: 768px) {
  .input, .label {
    font-size: 1.5vw;
  } 
}

@media only screen and (min-width: 320px) and(max-width: 768px) and (orientation: portrait) {
  .input, .label {
    font-size: 1vw;
  } 
}
  
@media only screen and (min-width: 320px) and (max-width: 768px) and (orientation: landscape) {
  .input, .label, button {
    font-size: 1vw;
  }  
}

.label, .input, button {
  border: 1.5px solid lightgray;
  outline: none;
  background: none;
  padding: 6px 0px;    
  margin-top: 5px;    
}

.label {
  background-color: hwb(63 73% 19%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 20px;
  font-weight: 400;
}

.input {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 20px;
}

.saveButton {
  max-width: fit-content;
  background-color:hwb(63 73% 19%);
  flex:auto
}

.cancelButton {
  max-width: fit-content;
  background-color: transparent;
  border: 2px solid lightgray;
  flex:auto
}

.text-input {
  text-align: center;
  border: none;
}

.text-input:focus {
  border: none;
  outline: none;  
}

.options {
    display: inline-block;
  }

</style>
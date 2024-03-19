<template>
    <div class="tabs">
        <ul class="tabs_header">
            <li 
            v-for="title in tabTitles" 
            :key="title"
            :class="{selected: title == selectedTitle}"
            @click="selectedTitle = title"
            >
                {{ title }}
            </li>
        </ul>
        <slot>
            
        </slot>
    </div>
</template>


<script>
import { ref, provide } from 'vue'
export default {
  name: 'TabWrapper',
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])

    provide('selectedTitle', selectedTitle)

    return {
        selectedTitle,
        tabTitles,
    }
  },
  data() {
    return {
      msg: '',
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (min-width: 640px) {
    .tabs_header li {
        min-width: 15vw;        
        font-size: 1.5vw;
    }
}

@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: portrait) {
    .tabs_header li {
        min-width: 35vw;    
        font-size: 3vw;
    }
}
  
@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: landscape) {
    
}

.tabs_header {
    margin-bottom:0px;
    border-bottom: 3px solid #ffdf6c;
    list-style: none;
    padding: 0;
    display: flex;    
    overflow: scroll;
}

.tabs_header li {
    text-align: center;
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #ddd;    
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    cursor: pointer;
}

.tabs_header li.selected {
    background-color: #ffdf6c;
    color: black;
    font-weight: 500;
}

</style>

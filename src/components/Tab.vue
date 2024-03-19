<template>
    <div class="tab-content" v-show="title == selectedTitle">
        <slot>

        </slot>
    </div>
</template>


<script>
import { inject } from 'vue'

export default {
  name: 'TabComponent',
  props: ['title'],
  setup() {
    const selectedTitle = inject('selectedTitle')

    return {
        selectedTitle,
    }
  },
  data() {
    return {
      msg: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (min-width: 640px) {
    
}

@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: portrait) {
    
}
  
@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: landscape) {
    
}

.tab-content {
    min-height: 400px;
    padding: 20px;
    border-radius: 5px;
    /* box-shadow: 0 3px 5px 5px rgba(0,0,0,0.2); */
    font-size: 2vw;
}

</style>

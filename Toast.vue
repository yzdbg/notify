<template>
  <div class="text-center ma-5">
    <v-snackbar
      v-model="state"
      :multi-line="true"
      :top="parameters.top"
      :bottom="parameters.bottom"
      :left="parameters.left"
      :right="parameters.right"
    >
      {{ parameters.message }}

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="parameters.color"
          text
          v-bind="attrs"
          @click="state = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import {events} from "./events"
export default {
  name: 'Toast',
  data(){
      return{
        state : false,
        parameters: { message: ''},
      }
  },
  mounted(){
    events.$on('add', this.display);
  },
  methods:{
    display(event){
      this.parameters= {
        message : event.message,
        top: event.top ? event.top : false,
        bottom: event.bottom ? event.bottom : false,
        left: event.left ? event.left : false,
        right: event.right ? event.right : false,
        color : event.warning ? "orange" : event.error ? "red" : "blue",
      }
      this.state = true
    },
    close(){
      this.snack.message = ''
      this.state = false
    },
  }
}
</script>


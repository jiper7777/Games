<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <button btn btn-primary @click="goToAdd">Add</button>

      </div>
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main';

  export default {
    data() {
      return {
        name: '',
        gamess: [{
          date: '',
          players: ['A', 'B', 'C', 'D'],
          results: [0, 0, 0, 0]
        }]
      }
    },
    methods: {
      goToAdd() {
        this.$router.push('/add');
      }
    }
  }
</script>


<style>
  .center {
    display: flex;
    justify-content: center;
  }
</style>



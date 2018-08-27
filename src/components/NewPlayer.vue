<template>
  <div v-if="visible">
    <input class="" type="text" id="playerName" placeholder="Type in player name">
    <input class="" type="number" id="results" placeholder="0" style="margin-left: 10px;">
    <button class="btn btn-danger" style="margin-left: 10px" @click="removePlayer">Remove</button>
  </div>

</template>

<script>
export default {
  props: ['index'],

  data() {
    return {
      visible: true,
    }
  },
  methods: {
    removePlayer() {
      this.visible = false;
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <div class="container" style="margin-top: 30px;">
      <button class="btn btn-secondary" style="margin-bottom:20px;" @click="goBack"><-- Go Back</button>
      <div class="form-group">
        <label for="gameName">Game</label>
        <input class="form-control" type="text" id="gameName" placeholder="Type in game name">
      </div>

      <div class="form-group">
        <label for="gameDate">Date</label>
        <input class="form-control" type="text" id="gameDate" placeholder="Game date">
      </div>

      <div id="playersContainer" style="margin-bottom: 10px;">
        <app-new-player v-for="(player, index) in players" style="margin-bottom: 20px; margin-top: 20px;"
                        :index="index"></app-new-player>
      </div>

      <button class="btn btn-primary" @click="addNewPlayer" style="margin-bottom: 10px;">Add new Player</button>

      <button type="submit" value="Submit" @click="addRecord()" class="form-control btn btn-success"
              style="margin-top: 10px; margin-bottom: 20px;">Submit
      </button>

    </div>
  </div>

</template>

<script>
  import axios from 'axios';
  import NewPlayer from './NewPlayer.vue';

  export default {
    data() {
      return {
        players: 1,

      }
    },
    components: {
      appNewPlayer: NewPlayer,
    },
    methods: {
      addRecord() {
        const newRecord = {
          gameName: '',
          date: '',
          players: [],
          results: []
        };

        newRecord.gameName = gameName.value;
        newRecord.date = gameDate.value;

        const numOfPlayers = playersContainer.childElementCount;

        for (let i = 0; i < numOfPlayers; i++) {
          newRecord.players[i] = playersContainer.children[i].children[0].value;
          newRecord.results[i] = playersContainer.children[i].children[1].value;
        }
        axios.post('http://localhost:3000/posts/', newRecord)
          .then(response => (console.log(response)))
          .catch(error => (console.log(error)));
      },
      addNewPlayer() {
        this.players = this.players + 1;
      },
      goBack() {
        this.$router.push('/');
      },
    }
  }

</script>

<style>
</style>

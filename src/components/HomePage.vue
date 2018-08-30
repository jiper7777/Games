<template>
  <div class="container" style="margin-top:20px;">
    <tr>
      <th style="width: 50px;">Index</th>
      <th>Date / Game</th>
      <th>Players</th>
      <th>Results</th>
      <th style="width: 120px;">Edit</th>
    </tr>

    <table
      v-for="(element, i) in games"
    >
      <tr>
        <td style="width: 50px;">
          {{i+1}}
        </td>
        <td>
          {{element.gameName}}
          <hr>
          {{element.date}}
        </td>

        <td>
          <ul>
            <li v-for="player in games[i].players">{{player}}</li>
          </ul>
        </td>

        <td>
          <ul>
            <li v-for="result in games[i].results">{{result}}</li>
          </ul>
        </td>
        <td style="width: 120px;">
          <button class="remove-button btn btn-danger" @click="removeRecord(element)">Remove</button>
        </td>
      </tr>
    </table>

    <button class="btn btn-secondary" style="margin-top: 20px; width: 250px;" @click="goToAdd">Add new game --></button>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        name: '',
        games: [
          {
            gameName: '',
            date: '',
            players: [''],
            results: ['']
          }]
        ,
        changedRecords: []
      }
    },
    methods: {
      goToAdd() {
        this.$router.push('/add');
      },
      removeRecord(element) {
        console.log(element.id);
        axios.delete('http://localhost:3000/posts/' + element.id);

        const timer = setTimeout(() => {
            axios.get('http://localhost:3000/posts')
              .then((response) => {
                this.games = response.data;
                clearTimeout(timer);
              })
              .catch((error) => console.log(error));
          }
          , 300);
      }
    },
    beforeCreate() {
      axios.get('http://localhost:3000/posts')
        .then(
          (response) => {
            this.games = response.data;
          }
        )
        .catch(error => (console.log(error)));
    }
  }

</script>

<style>
  th, td {
    width: 200px;
    text-align: center;
    border: solid black 1px;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  .remove-button {
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>


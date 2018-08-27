<template>
  <div>
    <button class="btn btn-success" @click="goToAdd">Add</button>

    <tr>
      <th>Date</th>
      <th>Players</th>
      <th>Results</th>
      <th>Edit</th>
    </tr>

    <table
      v-for="(element, i) in games"
    >
      <tr>
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
        <td>
          <button class="remove-button btn btn-danger">Remove</button>
        </td>
      </tr>
    </table>
  </div>

</template>

<script>
  import {eventBus} from '../main';

  export default {
    data() {
      return {
        name: '',
        games: [
          {
            gameName: 'Gra1',
            date: '20/02/2018',
            players: ['A', 'B', 'C', 'D'],
            results: [0, 0, 0, 0]
          },
          {
            gameName: 'Gra2',
            date: '22/02/2018',
            players: ['X', 'Y', 'C', 'D'],
            results: [1, 1, 1, 1]
          },
          {
            gameName: 'Gra3',
            date: '20/02/2018',
            players: ['AA', 'BB', 'CC', 'DD'],
            results: [2, 2, 2, 2]
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
  th, td {
    width: 250px;
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
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-items: center;*/
  }
</style>


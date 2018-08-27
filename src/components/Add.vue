<template>
  <div>
    <div>Add page</div>
    <button @click="addRecord">Add</button>
  </div>

</template>

<script>
import axios from 'axios';

  export default {
    methods: {
      addRecord() {

        axios.get('https://proj-e2450.firebaseio.com/', {

        })
          .then(response => {

            console.log('ok');
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });



// // Optionally the request above could also be done as
//         axios.get('/user', {
//           params: {
//             ID: 12345
//           }
//         })
//           .then(function (response) {
//             console.log(response);
//           })
//           .catch(function (error) {
//             console.log(error);
//           })
//           .then(function () {
//             // always executed
//           });
//
// // Want to use async/await? Add the `async` keyword to your outer function/method.
//         async function getUser() {
//           try {
//             const response = await axios.get('/user?ID=12345');
//             console.log(response);
//           } catch (error) {
//             console.error(error);
//           }
//         }







        // axios.post('https://proj-e2450.firebaseio.com/', {
        //   firstName: 'Fred',
        //   lastName: 'Flintstone'
        // })
        //   .then(function (response) {
        //     // console.log(response);
        //   })
        //   .catch(function (error) {
        //     // console.log(error);
        //   });


      }
    }
  }


</script>

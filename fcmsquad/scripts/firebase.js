const firebaseConfig = {
    apiKey: "AIzaSyBTImshucPeUBX5_dylfJF3MOI80Lw8lU4",
    authDomain: "fcmsquad-511df.firebaseapp.com",
    databaseURL: "https://fcmsquad-511df-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fcmsquad-511df",
    storageBucket: "fcmsquad-511df.appspot.com",
    messagingSenderId: "706398034193",
    appId: "1:706398034193:web:38cc682ea902e8246794b0",
    measurementId: "G-K2BEBLSF7Y"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  async function sendVisitCount(count) {
    return database.ref("fcmsquad_summary/").set({
        "visitCount": count
    });
  }
    async function getVisitCount() {
      return database.ref("fcmsquad_summary/").once("value").then((snapshot) => {
          if(snapshot.exists()) {
              return snapshot.val();
          }
      })
    }

    /*
    async function sendFormationCount(count) {
        return database.ref("fcmsquad_summary/").set({
            "visitCount": count
        });
      }
        async function getFormationCount() {
          return database.ref("fcmsquad_summary/").once("value").then((snapshot) => {
              if(snapshot.exists()) {
                  return snapshot.val();
              }
          })
        }
    */

    function getToday() {
        var today = new Date();
        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);
        return year + '-' + month  + '-' + day;
    }
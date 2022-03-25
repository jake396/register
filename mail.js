const firebaseConfig = {
    apiKey: "AIzaSyBsUd89yVV76RB5GMX-F9nD5u4t9XAlUKE",
    authDomain: "sih-hackathon-4aaa2.firebaseapp.com",
    databaseURL: "https://sih-hackathon-4aaa2-default-rtdb.firebaseio.com",
    projectId: "sih-hackathon-4aaa2",
    storageBucket: "sih-hackathon-4aaa2.appspot.com",
    messagingSenderId: "1034408671019",
    appId: "1:1034408671019:web:a3ffc81a34d5f98a3cb76e",
    measurementId: "G-25PERP992B"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference db
  var dacDB = firebase.database().ref("dac")
  document.getElementById("dacform").addEventListener("submit",submitForm);
  function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

  function submitForm(e){
      e.preventDefault();
      var name = getElementVal("name");
      var dob = getElementVal("dob");
      var gender = getElementVal("gender");
      var aadhno = getElementVal("aadhno");
      var ph = getElementVal("phone");
      var add = getElementVal("add");
      var lat = getElementVal("lat");
      var long = getElementVal("long");

      saveData(name,dob,gender,aadhno,ph,add,lat, long);

      //enable alert
      document.querySelector(".alert").style.display = "block";
      //remove
      setTimeout(() => {
          document.querySelector(".alert").style.display = "none";
          setTimeout(function(){
            window.location.href = 'displaydata.html';
         }, 1000);
      }, 3000);


      //resetting form
      document.getElementById("dacform").reset();
  }
  const saveData = (name,dob,gender,aadhno,ph,add,lat,long) => {
      var newdac = dacDB.push();
      
      newdac.set({
 
        dac:randomString(12, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
          name: name,
          dob : dob,
          gender : gender,
          aadhno : aadhno,
          ph : ph,
          add : add,
          lat : lat,
          long : long,



      });
  }

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

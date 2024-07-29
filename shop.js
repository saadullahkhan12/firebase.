
 
 






  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getFirestore ,
    collection,addDoc ,getDocs 
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAuJny3ekKmiF4zkglc3gbbiExIfx0U_Nw",
    authDomain: "fir-project-7078c.firebaseapp.com",
    projectId: "fir-project-7078c",
    storageBucket: "fir-project-7078c.appspot.com",
    messagingSenderId: "497911509151",
    appId: "1:497911509151:web:10f518b5c01a553a23b2aa",
    measurementId: "G-142SF3338K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  
  let mobcollection = collection(db,"mobiledetail")
 const div = document.getElementById("div")
  const mobile_company = document.getElementById("mobile_company")
  const model = document.getElementById("model")
  const image = document.getElementById("image")
  getdetailfromdb();
  const btn = document.getElementById("btn")
  btn.addEventListener("click", add)

  
  async function add(){

    try {
      const obj = {
        mobile_company: mobile_company.value ,
        model:model.value,
        image:image.value

      }
      const docRef = await addDoc(mobcollection, obj)
      

    }catch (e) {
      console.error("Error adding document: ", e);
    

    }

  }
  async function getdetailfromdb(){
    try {
      const querySnapshot = await getDocs(mobcollection);
      div.innerHTML+="";

querySnapshot.forEach((doc) => {
  console.log( "here",doc.id);
  console.log ( "where",doc.data());

  const {mobile_company,model,image} = doc.data();
  var element = `
  
<div  style="margin-top: 30px;">
  <img style="margin-left: 35%; border: 1px solid black ; box-shadow: 1px 1px 23px black;" id=${doc.id} src="${image}" >
  <h1 style="text-align: center; style="font-size: 800px;"" id=${doc.id} > ${mobile_company}</h1>
  <h1 style="text-align: center;" id=${doc.id}>${model}</h1>
   </div>
  `
  div.innerHTML+=element;

});

      
    } catch (error) {
      console.log(error);
      
    }
  }

















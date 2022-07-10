 const firebaseConfig = {
    apiKey: "AIzaSyD9aXCnTH13yhR2ROud4ouLt87h10LrZEs",
    authDomain: "python-3dffc.firebaseapp.com",
    databaseURL: "https://python-3dffc-default-rtdb.firebaseio.com",
    projectId: "python-3dffc",
    storageBucket: "python-3dffc.appspot.com",
    messagingSenderId: "3450541738",
    appId: "1:3450541738:web:43213cf52c7139f50fa2d3",
    measurementId: "G-NRBGN2D4BX"
  };
//for initialise firebase
firebase.initializeApp(firebaseConfig);

//reference
var contactFormDB = firebase.database().ref('enquiry_form');
document.getElementById('enquiry_form').addEventListener('submit',submitform);

function submitform(e)
{
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('email');
    var mobile = getElementVal('mobile');
    var address = getElementVal('address');
    
    saveMessages(name,email,mobile,address);
    //console.log(name,email,mobile,address);
}

const saveMessages = (name,email,mobile,address)=>{
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name : name,
        email : email,
        mobile : mobile,
        address : address,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
  
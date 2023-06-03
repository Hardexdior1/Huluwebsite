let loginDiv = document.querySelector(".loginDiv");
let menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  loginDiv.classList.toggle("show");
});

// const LiveSportMediaQuery = window.matchMedia('(max-width: 1023px)');
// if (LiveSportMediaQuery.matches) {
//   // Media query matches, do something here
//   console.log('Media query matches');
// } else {
//   // Media query does not match, do something else here
//   console.log('Media query does not match');
// }

let LiveSport = document.querySelector(".LiveSport");

let BreakingNews = document.querySelector(".BreakingNews");
BreakingNews.style.color = "#ffffff66";

let BiggestEvent = document.querySelector(".BiggestEvent");
BiggestEvent.style.color = "#ffffff66";
let BiggestEventMessages = document.querySelector(".BiggestEventMessages");
let BreakingMessages = document.querySelector(".BreakingMessages");
let texts = document.querySelector(".texts");

let LBB = document.querySelector(".LBB");

// if (window.innerWidth < 1023) {
// LBB.classList.toggle('LiveSportLBBBONESmallScreen');
// // LBB.classList.remove('LBB');
// console.log("lll");

// }

//     texts.style.maxWidth='500px'
//   BreakingMessages.style.maxWidth='500px'
LiveSport.addEventListener("click", () => {
  BreakingNews.style.color = "#ffffff66";
  BiggestEvent.style.color = "#ffffff66";
  LiveSport.style.color = "#fff";
  BiggestEvent.style.borderBottom = "none";
  BreakingNews.style.borderBottom = "none";
  LiveSport.style.borderBottom = "4px solid #fff";
  BreakingMessages.style.display = "none";
  texts.style.display = "initial";
  BiggestEventMessages.style.display = "none";
  LBB.classList.add("LBB");
  LBB.classList.remove("BreakingLBBTWO");

  LBB.classList.remove("BreakingLBBTHREE");
});

BreakingNews.addEventListener("click", () => {
  BreakingNews.style.borderBottom = "4px solid #fff";
  BreakingNews.style.color = "#ffffff";
  BiggestEvent.style.borderBottom = "none";
  BiggestEvent.style.color = "#ffffff66";
  LiveSport.style.color = "#ffffff66";
  LiveSport.style.borderBottom = "none";

  BreakingMessages.style.display = "initial";
  texts.style.display = "none";
  BiggestEventMessages.style.display = "none";
  LBB.classList.add("BreakingLBBTWO");
  LBB.classList.remove("LBB");

  LBB.classList.remove("BreakingLBBTHREE");
});

BiggestEvent.addEventListener("click", () => {
  BiggestEvent.style.borderBottom = "4px solid #fff";
  BiggestEvent.style.color = "#ffffff";
  BreakingNews.style.color = "#ffffff66";
  BreakingNews.style.borderBottom = "none";
  LiveSport.style.color = "#ffffff66";
  LiveSport.style.borderBottom = "none";
  BiggestEventMessages.style.display = "initial";

  BreakingMessages.style.display = "none";
  texts.style.display = "none";
  LBB.classList.remove("BreakingLBBTWO");
  LBB.classList.remove("BreakingLBBTWO");

  LBB.classList.add("BreakingLBBTHREE");
});
// let Breaking = document.querySelector(".Breaking");
// let Live = document.querySelector(".Live");
// let breakingNews = document.querySelector(".breakingNews");
// let liveSport = document.querySelector(".liveSport");
// let LBB = document.querySelector(".LBB");
// let LBBTWO = document.getElementById("LBBTWO");
// let Biggest = document.querySelector(".Biggest");
// let biggestEvent = document.querySelector(".biggestEvent");
// // let tvImg = document.querySelector(".tvImg");
// // let biggestEventImg2 = document.querySelector(".biggestEventImg2");
// // let BreakingNewsImg2 = document.querySelector(".BreakingNewsImg2");

// Biggest.style.color = "#ffffff66";
// Breaking.style.color = "#ffffff66";

// Live.addEventListener("click", () => {
//   Live.style.paddingBottom = "15px";
//   Live.style.borderBottom = "4px solid #fff";
//   Breaking.style.borderBottom = "none";
//   breakingNews.style.display = "none";
//   liveSport.style.display = "initial";
//   LBBTWO.style.backgroundColor = "blue";
//   Biggest.style.paddingBottom = "none";
//   Biggest.style.borderBottom = "none";
//   biggestEvent.style.display = "none";
//   BreakingNewsImg2.style.display = "none";
//   tvImg.style.display = "initial";
//   biggestEventImg2.style.display = "none";
//   Live.style.color = "#ffff";
//   Biggest.style.color = "#ffffff66";
//   Breaking.style.color = "#ffffff66";
// });

// Biggest.addEventListener("click", () => {
//   Biggest.style.paddingBottom = "15px";
//   Biggest.style.borderBottom = "4px solid #fff";
//   Live.style.borderBottom = "none";
//   liveSport.style.display = "none";
//   Breaking.style.borderBottom = "none";
//   breakingNews.style.display = "none";
//   biggestEvent.style.display = "initial";
//   LBBTWO.classList.add("bgOne");
//   LBBTWO.classList.remove("bgTwo");
//   biggestEventImg2.style.display = "initial";
//   BreakingNewsImg2.style.display = "none";
//   tvImg.style.display = "none";

//   Biggest.style.color = "#ffffff";
//   Live.style.color = "#ffffff66";
//   Breaking.style.color = "#ffffff66";
// });
// Breaking.addEventListener("click", () => {
//   Breaking.style.paddingBottom = "15px";
//   Breaking.style.borderBottom = "4px solid #fff";
//   breakingNews.style.display = "initial";
//   Live.style.borderBottom = "none";
//   liveSport.style.display = "none";
//   // LBBTWO.style.backgroundColor = "red";
//   Biggest.style.paddingBottom = "none";
//   Biggest.style.borderBottom = "none";
//   biggestEvent.style.display = "none";
//   LBBTWO.classList.remove("bgOne");
//   LBBTWO.classList.add("bgTwo");
//   BreakingNewsImg2.style.display = "initial";
//   tvImg.style.display = "none";
//   biggestEventImg2.style.display = "none";

//     Breaking.style.color = "#ffffff";
//   Live.style.color = "#ffffff66";
//   Biggest.style.color = "#ffffff66";
// });

// TOGGLE BUTTON STARTS HERE

let mostPoPuLarWrap1 = document.querySelector(".mostPoPuLarWrap1");
let mostPoPuLarWrap2 = document.querySelector(".mostPoPuLarWrap2");
let tableBody2 = document.querySelector(".tableBody2");
let tableBody1 = document.querySelector(".tableBody1");

// if   (window.innerWidth <539){
//   // mostPoPuLarWrap2.
// }
// mostPoPuLarWrap1.style.display="none"
function toggleButton() {
  const toggle = document.querySelector(".toggle");
  toggle.classList.toggle("toggle2");
  // const test = document.querySelector(".test");

  toggle.classList.toggle("active");
  // test.classList.toggle("test2");
  // mostPoPuLarWrap2.style.display='flex'
  // mostPoPuLarWrap1.style.display="none";

  mostPoPuLarWrap2.classList.toggle("mostPoPuLarWrap2Prevent");
  mostPoPuLarWrap1.classList.toggle("mostPoPuLarWrap1Prevent");

  tableBody2.classList.toggle("tableBody2Show");
  tableBody1.classList.toggle("tableBody2");
}

let formWrap = document.querySelector(".formWrap");
formWrap.classList.add("displayNone");

// formWrap. style.display='none'
let logIn = document.querySelector(".logIn");

logIn.addEventListener("click", () => {
  formWrap.classList.remove("displayNone");
  let removeIcon = document.querySelector("removeIcon");
  // formWrap.classList.add('displayNone')
});
removeIcon.addEventListener("click", () => {
  formWrap.classList.add("displayNone");
});

// FORM VALIDATION

let login = document.getElementById("login");


let Email = document.getElementById("Email");
let password = document.getElementById("password");

let showPass=document.querySelector('.showPass');
let hidePass=document.querySelector('.hidePass');

showPass.addEventListener('click',()=>{
password.type='text'
})

hidePass.addEventListener('click',()=>{
  password.type='password'
})
function handleForm() {
  
  if (
    password.value.length >= 5 && password.value.includes("@" || "$" || "%" || "#")) {
    // alert('ok')
    login.style.background='blue'
    console.log(password.value);
    
  }
  
  
  else if (password.value.length < 5 || password.value == password) {
    alert(
      "please make sure your password is more than 5 characters and include any sign like # % &"
    );
    login.style.background='red'

  } else {
  }

  // Check if the email is valid
  if (Email.value.length > 10 && Email.value.endsWith("@gmail.com")) {
    console.log(Email.value);
  } else {
    alert("invalid Email");
  }
}

login.addEventListener("click", () => {
  handleForm();
});

/// hoe to make password log to the console as a user starts typing in it
// this is html 🛒<input type="text" id="myInput">

// const inputField = document.getElementById("myInput");
// inputField.addEventListener("input", function() {
//   console.log(inputField.value);
// });



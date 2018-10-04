function changeDom() {
  let title = document.getElementsByClassName("bank");
  title[0].innerText = "Special Investigation On Execution Context";
  let title2 = document.getElementsByClassName("hed");
  title2[0].innerText =
    "New Discovery in Functional Programming - The Backpack";

  let ads = document.getElementsByClassName("css-rpp6l6 e12j3pa50");
  Array.from(ads).forEach(el => {
    el.style = "display: none";
  });

  let images = [
    "https://www.codesmith.io/images/headshots/olivia-leitner.png",
    "https://www.codesmith.io/images/headshots/Jacqueline-Chang.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLl9Dnz3zEKN1ADtkO2bTudHItoKltFGIaLCNL1FPw18VgOSO3",
    "https://avatars3.githubusercontent.com/u/24788582?s=460&v=4",
    "https://secure.meetupstatic.com/photos/member/2/1/6/1/highres_272948545.jpeg",
    "https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg",
    "https://s3.amazonaws.com/media-p.slid.es/uploads/willsentance/images/1174292/Will.png",
    "https://secure.meetupstatic.com/photos/event/c/3/a/2/600_472190082.jpeg",
    "https://www.codesmith.io/images/headshots/olivia-leitner.png",
    "https://www.codesmith.io/images/headshots/Jacqueline-Chang.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLl9Dnz3zEKN1ADtkO2bTudHItoKltFGIaLCNL1FPw18VgOSO3",
    "https://avatars3.githubusercontent.com/u/24788582?s=460&v=4",
    "https://secure.meetupstatic.com/photos/member/2/1/6/1/highres_272948545.jpeg",
    "https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg",
    "https://s3.amazonaws.com/media-p.slid.es/uploads/willsentance/images/1174292/Will.png",
    "https://secure.meetupstatic.com/photos/event/c/3/a/2/600_472190082.jpeg",
    "https://s3.amazonaws.com/media-p.slid.es/uploads/willsentance/images/1174292/Will.png"
  ];

  let minis = document.getElementsByTagName("img");
  Array.from(minis).forEach(function(el, index) {
    el.src = images[index];
  });
  let mainImage = document.getElementsByClassName("g-overlay");
  mainImage[0].src =
    "https://media.bizj.us/view/img/10197713/codesmithwillsentance*750xx2048-1154-0-0.jpg";
  let underneath = document.getElementsByClassName("g-underneath");
  underneath[0].src =
    "https://static.frontendmasters.com/assets/videos/promo/h43mdlt9aj/720.jpg";

  let lines = [
    "EXECUTION CONTEXT",
    "BACKPACK",
    "FETCH",
    "__proto__",
    ".THIS",
    "PROTOTYPE",
    "CLOSURE",
    "BAD BUNNY",
    "OZUNA",
    "CONST",
    "CLASS",
    "CONSTRUCTOR",
    "CALLBACKS",
    "RECURSION",
    "REACT",
    "OOP",
    "",
    "FASADE",
    "PEOPLE!",
    "MULTIPLYBY2",
    "BACKPACK",
    "FETCH",
    "__proto__",
    ".THIS",
    "PROTOTYPE",
    "CLOSURE",
    "BAD BUNNY",
    "OZUNA",
    "CONST",
    "CLASS",
    "CONSTRUCTOR",
    "CALLBACKS",
    "RECURSION",
    "REACT",
    "OOP",
    "RETURN",
    "SUBCLASSING",
    "PEOPLE!"
  ];

  let headlines = document.getElementsByClassName("css-1wjnrbv");

  for (let i = 0; i < headlines.length; i++) {
    if (lines[i] === undefined) {
      lines[(i -= 1)];
    }
    headlines[i].innerHTML = lines[i];
  }
}

let login = document.getElementsByClassName("css-1fhe54b e1uwo0ec0");
let subscribe = document.getElementsByClassName("css-1bnxwmn e1uwo0ec0");
login[0].style = "display:none";
subscribe[0].style = "display:none";

let header = document.getElementsByClassName("css-pbg2l9 e1uwo0ec1");
let btnPhil = document.createElement("button");
btnPhil.style =
  "border-radius:3px; cursor: pointer; font-family: nyt-franklin,helvetica,arial,sans-serif; transition: ease 0.6s; background-color: #6288a5; order: 1px solid #326891;color: #fff; font-weight: 700; letter-spacing: 0.05em; ine-height: 11px; padding: 8px 9px 6px; text-transform: uppercase; margin-right:2px;";

let btnWill = document.createElement("button");
btnWill.style =
  "border-radius:3px; cursor: pointer; font-family: nyt-franklin,helvetica,arial,sans-serif; transition: ease 0.6s; background-color: #6288a5; order: 1px solid #326891;color: #fff; font-weight: 700; letter-spacing: 0.05em; ine-height: 11px; padding: 8px 9px 6px; text-transform: uppercase;";
btnPhil.innerText = "Meat and Potatos";
btnWill.innerText = "Execution Context";
header[0].appendChild(btnPhil);
header[0].appendChild(btnWill);

let audio1 = document.createElement("audio");
audio1.setAttribute("src", "meatpotatoes.mp3");
let audio2 = document.createElement("audio");
audio2.setAttribute("src", "Executioncontext.mp3");

header[0].appendChild(audio1);
header[0].appendChild(audio2);

// let sndPhil = new Audio();
// sndPhil.src = "./meatpotatoes.mp3";
// let sndWill = new Audio();
// sndWill.src = "./Executioncontext.mp3";

btnPhil.addEventListener("click", function() {
  sndPhil.play();
});

btnWill.addEventListener("click", function() {
  sndWill.play();
});

changeDom();

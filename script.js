function changeDom() {
  let title = document.getElementsByClassName("balancedHeadline");
  title[0].innerText = "Special Investigation On Execution Context";

  let ads = document.getElementsByClassName("css-rpp6l6 e12j3pa50");
  Array.from(ads).forEach(el => {
    el.style = "display: none";
  });

  let images = [
    "https://www.codesmith.io/images/headshots/olivia-leitner.png",
    "https://www.codesmith.io/images/headshots/Jacqueline-Chang.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLl9Dnz3zEKN1ADtkO2bTudHItoKltFGIaLCNL1FPw18VgOSO3",
    "https://secure.meetupstatic.com/photos/member/2/1/6/1/highres_272948545.jpeg",
    "https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg",
    "https://s3.amazonaws.com/media-p.slid.es/uploads/willsentance/images/1174292/Will.png",
    "https://secure.meetupstatic.com/photos/event/c/3/a/2/600_472190082.jpeg",
    "https://www.codesmith.io/images/headshots/olivia-leitner.png",
    "https://www.codesmith.io/images/headshots/Jacqueline-Chang.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLl9Dnz3zEKN1ADtkO2bTudHItoKltFGIaLCNL1FPw18VgOSO3",
    "https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg",
    "https://secure.meetupstatic.com/photos/member/2/1/6/1/highres_272948545.jpeg",
    "https://avatars3.githubusercontent.com/u/24788582?s=460&v=4",
    "https://s3.amazonaws.com/media-p.slid.es/uploads/willsentance/images/1174292/Will.png",
    "https://secure.meetupstatic.com/photos/event/c/3/a/2/600_472190082.jpeg",
    "https://avatars3.githubusercontent.com/u/24788582?s=460&v=4"
  ];

  let minis = document.getElementsByTagName("img");
  Array.from(minis).forEach(function(el, index) {
    el.src = images[index];
  });

  let willTitlesArray = [
    "Five Questions with Will Sentance",
    "Q&A with Codesmith cofounder Will Sentance",
    "What are the best resources for learning Node.js",
    "The most effective technique for learning to code may surprise you",
    "The most effective technique for learning to code may surprise you",
    "How to write your own spellchecker and autocorrect algorithm in under 80 lines of code",
    "How to create your own video chat app in under 10 mins",
    "MBA or Coding Bootcamp? 4 Questions to Help You Decide",
    "How can you pair-program effectively?"
  ];
  let willStoriesArray = [
    "Another breakthrough in the world of javascript by Will Sentance today",
    "The two campuses in New York and Los Angeles are full of remarkable residents ",
    "Before Codesmith I started Icecomm - a realtime video platform for developers and worked as a software engineer at Gem - a bitcoin startup",
    "I’m Will. I run Codesmith, a software engineering and machine learning residency based in Los Angeles, New York and Oxford. I am originally from England and now live in New York.",
    "In teaching thousands of students in free classes and through the 12 week immersive program at Codesmith, we’ve seen the remarkable impact of pair-programming",
    "Pair-programming allows you to tackle the most demanding problems but without them becoming overwhelming.",
    "If you are not able to pair with someone, get yourself a rubber duck or a plush toy and talk through your code to it.",
    "The first 4 hour evening hackathon for Codesmith students (8 days into the program) is to build a chrome extension.",
    "Since then Icecomm has evolved to suite of SDKs for e-commerce, email, phone integration, but at its heart is still the ability to create a multiway video chat in under 10 mins.",
    "Spellcheckers and autocorrect can feel like magic. Even advanced engineers confess to not having a fully intuitive grasp of what goes on underneath the hood.",
    "You have your business school offer in the bag, you’ve attended the admitted students day, but then you hear a friend just spent 12 weeks learning to code and received a six figure offer. Do you stay the course and get your MBA, or switch gears and enroll in a coding school instead?"
  ];

  let staffArray = [
    "Jonathan Cespedes",
    "Jacqueline Chang",
    "David DeStefano",
    "Alesi Andreya Ladas",
    "Christopher Wong",
    "Olivia Leitner",
    "Andrew Thomas"
  ];

  if (window.location.href.indexOf("nytimes") != -1) {
    let mainPhoto = document.getElementsByClassName("css-1qj0wac eqveam61");
    let headlines = document.getElementsByClassName("css-8uvv5f esl82me2");
    let spanHeadlines = document.getElementsByClassName("balancedHeadline");
    let textBlurbs = document.getElementsByClassName("css-ba1f3o e1n8kpyg0");
    let bulletPoints = document.getElementsByClassName("css-1vwlksu e1n8kpyg1");
    let alternateBlurbs = document.getElementsByClassName(
      "css-7ydkii e1n8kpyg0"
    );
    let captions = document.getElementsByClassName("css-1blv1z4 e16zw86q1");
    let tinyTitles = document.getElementsByClassName("css-1r2f04i");
    let otherCaptions = document.getElementsByClassName(
      "css-1i96a1m e16zw86q1"
    );
    let articleAuthors = document.getElementsByClassName("css-omcqsq");

    for (let i = 0; i < spanHeadlines.length; i++) {
      spanHeadlines[i].innerHTML =
        willTitlesArray[Math.floor(Math.random() * 9)]; //changing content
    }
    for (let i = 0; i < bulletPoints.length; i++) {
      bulletPoints[i].innerHTML =
        willStoriesArray[Math.floor(Math.random() * 11)]; //changing content
    }

    for (let i = 0; i < headlines.length; i++) {
      headlines[i].innerHTML = willTitlesArray[Math.floor(Math.random() * 9)]; //changing content
    }

    for (let j = 0; j < textBlurbs.length; j++) {
      textBlurbs[j].innerHTML =
        willStoriesArray[Math.floor(Math.random() * 11)]; //changing content
    }

    for (let j = 0; j < alternateBlurbs.length; j++) {
      alternateBlurbs[j].innerHTML =
        willStoriesArray[Math.floor(Math.random() * 11)]; //changing content
    }

    for (let j = 0; j < captions.length; j++) {
      captions[j].innerHTML = "Will Sentance for The New York Times"; //changing content
    }

    for (let j = 0; j < tinyTitles.length; j++) {
      tinyTitles[j].innerHTML = willTitlesArray[Math.floor(Math.random() * 9)]; //changing content
    }
    for (let j = 0; j < otherCaptions.length; j++) {
      otherCaptions[j].innerHTML = "Phillip Troutman for The New York"; //changing content
    }
    for (let j = 0; j < articleAuthors.length; j++) {
      articleAuthors[j].innerHTML = staffArray[Math.floor(Math.random() * 7)]; //changing content
    }
    for (let j = 1; i <= 2; i++) {
      mainPhoto[j].innerHTML =
        "https://pbs.twimg.com/profile_images/902408678602563584/1W5kySzN_400x400.jpg";
    }
  }

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

///PHIL

let header = document.getElementsByClassName("css-pbg2l9 e1uwo0ec1");
let audio1 = document.createElement("audio");
let source = document.createElement("source");
source.setAttribute(
  "src",
  "https://doc-14-1k-docs.googleusercontent.com/docs/securesc/r9fvia3bh0akbnr11ks6k9te1fvjflvb/ren6jjr0qfe49nr9894imkf37j3vmoh0/1538676000000/14297195797318411239/14148043250191941842/1X77Q98FuGTth-HVT-VrM3rWz08IF6_ws?e=download"
);
audio1.appendChild(source);
header[0].appendChild(audio1);

let btnPhil = document.createElement("button");
btnPhil.style =
  "border-radius:3px; cursor: pointer; font-family: nyt-franklin,helvetica,arial,sans-serif; transition: ease 0.6s; background-color: #6288a5; order: 1px solid #326891;color: #fff; font-weight: 700; letter-spacing: 0.05em; ine-height: 11px; padding: 8px 9px 6px; text-transform: uppercase; margin-right:2px;";
("border-radius:3px; cursor: pointer; font-family: nyt-franklin,helvetica,arial,sans-serif; transition: ease 0.6s; background-color: #6288a5; order: 1px solid #326891;color: #fff; font-weight: 700; letter-spacing: 0.05em; ine-height: 11px; padding: 8px 9px 6px; text-transform: uppercase; margin-right:2px;");
btnPhil.innerText = "Meat and Potatos";
("Meat and Potatos");
header[0].appendChild(btnPhil);
btnPhil.addEventListener("click", function() {
  document.getElementsByTagName("audio")[0].play();
});

//WILL

let audio2 = document.createElement("audio");
let source2 = document.createElement("source");
source2.setAttribute(
  "src",
  "https://doc-04-1g-docs.googleusercontent.com/docs/securesc/r9fvia3bh0akbnr11ks6k9te1fvjflvb/f9dga6b16l2f4ptraepvvnt0lcf25d5c/1538676000000/14148043250191941842/14148043250191941842/1bsuuVPnMsXg7gMAXmHgpMoml04sPKYpv?e=download"
);
audio2.appendChild(source2);
header[0].appendChild(audio2);

let btnWill = document.createElement("button");
btnWill.style =
  "border-radius:3px; cursor: pointer; font-family: nyt-franklin,helvetica,arial,sans-serif; transition: ease 0.6s; background-color: #6288a5; order: 1px solid #326891;color: #fff; font-weight: 700; letter-spacing: 0.05em; ine-height: 11px; padding: 8px 9px 6px; text-transform: uppercase; margin-right:2px;";
("border-radius:3px; cursor: pointer; font-family: nyt-franklin,helvetica,arial,sans-serif; transition: ease 0.6s; background-color: #6288a5; order: 1px solid #326891;color: #fff; font-weight: 700; letter-spacing: 0.05em; ine-height: 11px; padding: 8px 9px 6px; text-transform: uppercase; margin-right:2px;");
btnWill.innerText = "Execution Context";
header[0].appendChild(btnWill);
btnWill.addEventListener("click", function() {
  document.getElementsByTagName("audio")[1].play();
});

// changeDom();

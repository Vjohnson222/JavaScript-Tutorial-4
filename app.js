const reviews = [
  {
    id: 1,
    name: "The Goal",
    job: "My Loft",
    img: "i.jpggggg",
    text: "I want to live in one of the most amazing lofts ever. The Loft is spacious and has the largest floor to ceiling window. The walls are brick and I'm not sure about the floor. This is simply because I do prefer carpet - but I don't want to take away from that industrial feeling. It's clean, warm and inviting for friends and family",
  },
  {
    id: 2,
    name: "Income",
    job: "Get a great paying job",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "This is key. Just Do it! And Get it done Quickly. As soon as you get this step completed, trust that the rest will become easier. Have Faith and trust in your ability to be hired and to be compensated well!. Put this to a timeline today and keep it moving. Also make this a lifelong habit. Whether you're being hired or running your own business"
    },
  {
    id: 3,
    name: "Credit",
    job: "Follow a structured path",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "What does it take to build credit. What is good credit. How long will it take. What do I need to do. What programs exist. What does this look like if it were placed on a calendar. All of this and more. Become obsessed with achieving this and watch it happen. Answer the above questions and make a POA on a calendar that you'll commit to. "
    },
    {
    id: 4,
    name: "FAITH",
    job: "Faith. You simply have to have Blind Faith",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "FAITH. Now faith is the substance of things hoped for, the evidence of things not seen. For by it the elders obtained a good report. Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear. Have Faith and know that the desires are way beyond your own!😊"
    },
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  item.text.textContent.style.color = "white";
}
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

const colors = ["grey", "black","blue", "grey", "black"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var img2 = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img2.onclick = function () {
  modal.style.display = "block";
  modalImg.style = "border-radius: 50%";

  modalImg.src = this.src;
};
span.onclick = function () {
  modal.style.display = "none";
};

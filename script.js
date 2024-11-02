const listContent = document.querySelectorAll(".hasChild-main");
const iconsClick = document.querySelectorAll(" .first");
const listItems = document.querySelectorAll(".hasChild > li");
const secondIcon = document.querySelectorAll(".second");
const subjContent = document.querySelectorAll(".hasContent");

let declareLoop = (iconBtn, contentContain) => {
  for (let i = 0; i < iconBtn.length; i++) {
    iconBtn[i].onclick = (e) => {
      if (
        parseInt(contentContain[i].style.height) !==
        contentContain[i].scrollHeight
      ) {
        contentContain[i].classList.add("activate");
        contentContain[i].classList.remove("noActivate");
        contentContain[i].style.height = contentContain[i].scrollHeight + "px";
      } else {
        contentContain[i].style.height = 0 + "px";
        contentContain[i].classList.toggle("noActivate");
        contentContain[i].classList.remove("activate");
      }

      for (let j = 0; j < contentContain.length; j++) {
        if (j != i) {
          contentContain[j].style.height = 0 + "px";
          contentContain[j].classList.toggle("noActivate");
          contentContain[j].classList.remove("activate");
        }
      }
    };
  }
};

declareLoop(iconsClick, listContent);
declareLoop(secondIcon, subjContent);

// BUG: Unneccessary Implementation
let removeContent = (className, listContent) => {
  document.addEventListener("click", function (e) {
    const isClickOutsideListContent = e.target.closest(className);
    // Check if any listContent element has a height greater than 0px
    const hasExpandedListContent = Array.from(listContent).some(
      (content) => parseInt(content.style.height) > 0
    );

    if (isClickOutsideListContent && hasExpandedListContent) {
      console.log(isClickOutsideListContent);
      // Collapse all listContent elements
      listContent.forEach((content) => {
        content.style.height = 0;
        content.style.overflow = "hidden";
        content.classList.add("noActivate");
        content.classList.remove("activate");
      });
    } else {
      console.log("Nothing occurs");
    }
  });
};

removeContent(".hasChild", listContent);
removeContent(".hasContent", subjContent);

let removeOnClickDom = (icon, className, content) => {
  document.addEventListener("click", function (e) {
    let targetElement = e.target.closest(icon);
    if (!targetElement) {
      for (let j = 0; j < content.length; j++) {
        content[j].style.height = 0 + "px";
        content[j].classList.toggle("noActivate");
        content[j].classList.remove("activate");
      }
    }
  });
};

removeOnClickDom(".first", ".hasChild", listContent);
removeOnClickDom(".second", ".hasContent", subjContent);

// Progress circular container

const progress_StatusContainer = document.querySelector(".progress-status");
const progressCircular = progress_StatusContainer.querySelector(
  ".progress-container"
);
const circleTextValue = progressCircular.querySelector(".textValue");
const barContent = progress_StatusContainer.querySelector(".barContent2");

let progress_start = 0;

const endValue = 75;
const speedValue = 50;

const countUp = () => {
  let valueRead = setInterval(() => {
    progress_start++;
    circleTextValue.textContent = `${progress_start}%`;
    barContent.style.setProperty("width", `${progress_start}%`);
    progressCircular.style.background = `conic-gradient(#000 ${
      progress_start * 3.6
    }deg, #d4d4d461 ${progress_start * 3.6}deg)`;
    if (progress_start == endValue) {
      clearInterval(valueRead);
    }
  }, speedValue);
};
countUp();

const plusBtn = document.querySelector(".plus-plus");

let notfiy = document.querySelector(".draw-Notifications");

function dropNotify() {
  if (!notfiy.classList.contains("release")) {
    notfiy.classList.add("release");
    notfiy.classList.remove("drop-out");
  } else {
    notfiy.classList.remove("release");
    notfiy.classList.add("drop-out");
  }
}

plusBtn.addEventListener("click", dropNotify);

// Click outside the dropped menu to close

let removeDisplayNotify = () => {
  // this is a function that will be called when we click on close btn in notification box
  notfiy.addEventListener("click", function (e) {
    let elTarget = e.target.closest(".alert-info");

    if (!elTarget) {
      notfiy.classList.add("drop-out");
      notfiy.classList.remove("release");
    }
  });
};

removeDisplayNotify();

// Get the info and update on notificaton

const teachers = [
  {
    name: "Mr. Michael Harden",
    course: "Petro. Eng",
    timeAvailable: "Available for 4 hours",
    imgSrc: "asset/teac07.png",

    verified: true,
    card: true,
    bar: false,

    classSection: false,
    statusCheck: true,
    cate: "Engineer",
  },
  {
    name: "Mrs. Kimberely Klein",
    course: "Human Anatomy",
    timeAvailable: "Availble for 3 hours",
    imgSrc: "asset/teac06.png",

    verified: true,
    card: false,
    bar: true,
    classSection: false,
    statusCheck: true,
    cate: "Science",
  },
  {
    name: "Mr. Shakespere Flein",
    course: "English Lang.",
    timeAvailable: "Availble for 2 hours",
    imgSrc: "asset/teac03.png",
    verified: true,
    card: true,
    classSection: true,
    statusCheck: false,
    cate: "Language",
  },
  {
    name: "Mr. Ike Yankey",
    course: "Software Eng.",
    timeAvailable: "Availble for 3 hours",
    imgSrc: "asset/ike.png",
    verified: false,
    card: false,
    bar: true,
    classSection: true,
    statusCheck: true,
    cate: "Programming",
  },

  {
    name: "Mr. Princeton Faz",
    course: "Social Science",
    timeAvailable: "Availble for 2 hours",
    imgSrc: "asset/teach101.png",
    card: true,
    bar: false,
    verified: true,
    classSection: false,
    statusCheck: false,
    cate: "Science",
  },
  {
    name: "Mrs. Evelyn Adjei",
    course: "English Lang.",
    timeAvailable: "Availble for 2 hours",
    imgSrc: "asset/teach102.png",
    card: true,
    bar: false,
    verified: true,
    classSection: true,
    statusCheck: true,
    cate: "Language",
  },
  {
    name: "Mr. Edmond Khan",
    course: "Elec Eng.",
    timeAvailable: "Availble for 3 hours",
    imgSrc: "asset/teach103.png",
    card: true,
    bar: false,
    verified: false,
    classSection: true,
    statusCheck: true,
    cate: "Engineer",
  },
  {
    name: "Mrs. Regina Millie",
    course: "Pharmacology",
    timeAvailable: "Availble for 4 hours",
    imgSrc: "asset/teac01.png",
    card: false,
    bar: true,
    verified: false,
    classSection: true,
    statusCheck: true,
    cate: "Science",
  },
  {
    name: "Mrs. Martins Lily",
    course: "Human Anatomy",
    timeAvailable: "Availble for 2 hours",
    imgSrc: "asset/martins.png",
    card: true,
    bar: false,
    verified: true,
    classSection: true,
    statusCheck: false,
    cate: "Science",
  },
  {
    name: "Mrs. Pineshe Carter",
    course: "Creativity Art",
    timeAvailable: "Availble for 2 hours",
    imgSrc: "asset/teac04.png",
    card: true,
    bar: true,
    verified: true,
    classSection: false,
    statusCheck: true,
    cate: "Design",
  },
  {
    name: "Mrs. Luna Shennel",
    course: "Spanish",
    timeAvailable: "Availble for 2 hours",
    imgSrc: "asset/teac05.png",
    card: true,
    bar: true,
    verified: true,
    classSection: true,
    statusCheck: false,
    cate: "Language",
  },
  {
    name: "Mrs. Cynthia Onniel",
    course: "Graphic Design",
    timeAvailable: "Availble for 2 hours",
    imgSrc: "asset/teac06.png",
    card: true,
    bar: true,
    verified: false,
    classSection: false,
    statusCheck: false,
    cate: "Design",
  },
  {
    name: "Mrs. Dennis Willie",
    course: "Graphic Design",
    timeAvailable: "Availble for 2 hours",
    imgSrc: "asset/teac08.png",
    card: false,
    bar: true,
    verified: false,
    classSection: true,
    statusCheck: true,
    cate: "Design",
  },
  {
    name: "Mr. Michael Gyan",
    course: "Java Developer",
    timeAvailable: "Availble for 2 hours",
    imgSrc: "asset/barImage02.png",
    card: true,
    bar: true,
    verified: true,
    classSection: true,
    statusCheck: true,
    cate: "Programming",
  },
  {
    name: "Mrs. Mildred Clinton",
    course: "Graphic Designer",
    timeAvailable: "Availble for 2 hours",
    imgSrc: "asset/barImage01.png",
    card: true,
    bar: true,
    verified: true,
    classSection: true,
    statusCheck: true,
    cate: "Design",
  },
];

let listCard = document.querySelector(".list-card");
let newCard = document.createElement("div");
newCard.className = "newCard-list";

teachers.forEach((teacher, index) => {
  /* Conditions to be satisfied */
  // On card => show the classSection and the statusCheck

  if (teacher.card) {
    let cardList = document.createElement("div");
    cardList.className = "card-list";
    let imageRound = document.createElement("div");
    imageRound.className = "image-round";
    let imageSet = document.createElement("img");

    imageSet.setAttribute("src", teacher.imgSrc);

    imageRound.appendChild(imageSet);

    let stateSpan = document.createElement("span");
    stateSpan.className = "state-status";

    if (teacher.statusCheck) {
      stateSpan.classList.add("online");
      stateSpan.classList.remove("offline");
    } else {
      stateSpan.classList.remove("online");
      stateSpan.classList.add("offline");
    }
    imageRound.appendChild(stateSpan);

    let nameTitleDiv = document.createElement("div");
    nameTitleDiv.className = "name-title";

    let nameP = document.createElement("p");
    nameP.textContent = teacher.name;

    let courseSpan = document.createElement("span");
    courseSpan.textContent = teacher.course;

    nameTitleDiv.appendChild(nameP);
    nameTitleDiv.appendChild(courseSpan);

    let availSpan = document.createElement("span");
    availSpan.className = "mini";
    availSpan.textContent = teacher.timeAvailable;

    let scheduleBtnContainer = document.createElement("div");
    scheduleBtnContainer.className = "schedule-btn-notify";
    let scheduleBtn = document.createElement("button");
    scheduleBtn.textContent = "Schedule";
    scheduleBtnContainer.appendChild(scheduleBtn);

    cardList.appendChild(imageRound);
    cardList.appendChild(nameTitleDiv);
    cardList.appendChild(availSpan);
    cardList.appendChild(scheduleBtnContainer);

    cardList.classList.add(teacher.cate, "hide");
    newCard.appendChild(cardList);
  }
});
listCard.appendChild(newCard);

const updateRandomTeacher = () => {
  const container1 = document.querySelector(".card1");
  const container2 = document.querySelector(".card2");

  /* Based on the condition that the random teachers are all in bars */
  let filteredTeachers = teachers.filter((teacher) => teacher.bar);

  // Generate randomIndex values
  let randomIndexId = randomIndex(filteredTeachers.length, 2);

  // Assign the random Id to generate a unique teacher
  let rTeacher1 = filteredTeachers[randomIndexId[0]];
  let rTeacher2 = filteredTeachers[randomIndexId[1]];

  // get the images and assign to the img container
  container1.querySelector("img").src = rTeacher1.imgSrc;
  container2.querySelector("img").src = rTeacher2.imgSrc;

  // Assign the names
  container1.querySelector(".name-verify span").textContent = rTeacher1.name;
  container2.querySelector(".name-verify span").textContent = rTeacher2.name;

  // The condition that if they are verified
  if (rTeacher1.verified) {
    container1.querySelector(".name-verify i").className = "bx bxs-badge-check";
  } else {
    container1
      .querySelector(".name-verify i")
      .classList.remove("bx", "bxs-badge-check");
  }

  if (rTeacher2.verified) {
    container2.querySelector(".name-verify i").className = "bx bxs-badge-check";
  } else {
    container2
      .querySelector(".name-verify i")
      .classList.remove("bx", "bxs-badge-check");
  }
  // Course names
  container1.querySelector(".course-title").textContent = rTeacher1.course;
  container2.querySelector(".course-title").textContent = rTeacher2.course;
};

function randomIndex(arrayLength, rangeValue) {
  let indexContainer = [];
  // continous loop to ensure that the values stays in the range of only 2
  while (indexContainer.length < rangeValue) {
    // create a random number whiles on the loop
    let randomIndexNumber = Math.floor(Math.random() * arrayLength);

    // check if the indexContainer does not have the randomIndexNumber
    if (!indexContainer.includes(randomIndexNumber)) {
      // Push the new indexnumber into the indexContainer
      indexContainer.push(randomIndexNumber);
    }
  }
  return indexContainer;
}

let rotateBtn = document.querySelector("i.refresh");
let rotateStart = 0;
function rotate() {
  let setIt = getComputedStyle(rotateBtn).getPropertyValue("--rotate");
  rotateBtn.style.setProperty("--rotate", `${(rotateStart += 360)}`);
}
rotateBtn.addEventListener("click", function () {
  updateRandomTeacher();
  rotate();
});

//get random images and content info for the bar content

const filter_array_drop = document.querySelector(".filter-array");
const filterBtn = document.querySelector(".filter-all-profile i");
const listArrayli = document.querySelectorAll(".filter-array li");
const filterTextContain = document.querySelector(".filter-profile-input");
// Onclick on the btn

filterBtn.addEventListener("click", function () {
  filter_array_drop.classList.toggle("displayOpacity");
});

filter_array_drop.addEventListener("click", (e) => {
  const targetClick = e.target.closest(".filter-array li");
  const textTarget = e.target.closest(".filter-array li a");
  if (targetClick) {
    filter_array_drop.classList.remove("displayOpacity");
    filterTextContain.textContent = textTarget.innerText;
  }
});

function filterContent(value) {
  const cards = document.querySelectorAll(".card-list");
  cards.forEach((card) => {
    if (value == "All") {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
  cards.forEach((card) => {
    if (card.classList.contains(value)) {
      card.classList.remove("hide");
    }
  });
}

window.onload = () => {
  filterContent("All");
  filterTextContain.innerText = "All";
};

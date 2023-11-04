let ulHeader = document.querySelector("ul.global-nav__primary-items");

let liViewPosts = document.createElement("li");
liViewPosts.classList.add("global-nav__primary-item");

let aViewPosts = document.createElement("a");

aViewPosts.setAttribute("target", "_blank");
aViewPosts.setAttribute(
  "href",
  "https://www.linkedin.com/my-items/saved-posts/"
);
aViewPosts.classList.add("app-aware-link", "global-nav__primary-link");

let divOuter = document.createElement("div");
divOuter.classList.add("ivm-image-view-model", "global-nav__icon-ivm");

let divInner = document.createElement("div");
divInner.classList.add("ivm-view-attr__img-wrapper", "display-flex");

let img = document.createElement("img");
img.setAttribute("src", chrome.runtime.getURL("images/save.png"));
img.setAttribute("id", "imgSaved");

divInner.appendChild(img);
divOuter.appendChild(divInner);
aViewPosts.appendChild(divOuter);

let spanViewPosts = document.createElement("span");
spanViewPosts.classList.add(
  "t-12",
  "break-words",
  "block",
  "t-black--light",
  "t-normalglobal-nav__primary-link-text"
);
spanViewPosts.innerHTML = "Saved";

aViewPosts.appendChild(spanViewPosts);
liViewPosts.appendChild(aViewPosts);
ulHeader.appendChild(liViewPosts);

// keyboard shortcut
document.addEventListener("keydown", handleKbd);

function handleKbd(event) {
  if (event.shiftKey && event.altKey && event.code == "KeyO") {
    aViewPosts.click();
  }
}

// Voice
let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.lang = "en-in";
speechRecognition.start();

speechRecognition.onresult = (event) => {
  let transcript = event.results[event.resultIndex][0].transcript;
  console.log("Event", event);
  if (transcript.trim().toLowerCase().includes("open post")) {
    aViewPosts.click();
  } else if (transcript.trim().toLowerCase().includes("open home")) {
    window.open(
      "https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&",
      "_blank"
    );
  } else if (transcript.trim().toLowerCase().includes("open my network")) {
    window.open("https://www.linkedin.com/mynetwork/", "_blank");
  } else if (transcript.trim().toLowerCase().includes("open jobs")) {
    window.open("https://www.linkedin.com/jobs/", "_blank");
  } else if (transcript.trim().toLowerCase().includes("open messaging")) {
    window.open("https://www.linkedin.com/messaging/", "_blank");
  } else if (transcript.trim().toLowerCase().includes("open notifications")) {
    window.open("https://www.linkedin.com/notifications/", "_blank");
  } else if (transcript.trim().toLowerCase().includes("open profile")) {
    window.open(
      "https://www.linkedin.com/in/abhishek-kumar-70765a177/",
      "_blank"
    );
  }
};

// let navTag = document.querySelector("nav");
// console.log("navTag", navTag);
// let ulTag = navTag.querySelector("ul");
// console.log("ulTag", ulTag);
// let liTag = document.querySelector("li");
// console.log("liTag", liTag);
// let aTag = liTag.querySelector("a");
// console.log("aTag", aTag);
// let href = aTag.href;
// console.log("href", href);

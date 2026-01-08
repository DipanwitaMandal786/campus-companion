const btn = document.getElementById("darkToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
function googleLogin() {
  alert("Google Login Successful!\n(Backend will be added later)");
  window.location.href = "index.html";
}
function registerEvent(e) {
  e.preventDefault();
  alert("🎉 You are successfully registered!");
}
function postMessage(e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const msg = document.getElementById("message").value;

  const list = document.getElementById("messages");
  const item = document.createElement("li");

  item.textContent = user + ": " + msg;
  list.appendChild(item);

  document.getElementById("username").value = "";
  document.getElementById("message").value = "";
}
function addTeam(e) {
  e.preventDefault();

  const name = document.getElementById("teamName").value;
  const skills = document.getElementById("skills").value;

  const list = document.getElementById("teamList");
  const item = document.createElement("li");

  item.textContent = name + " — Needs: " + skills;
  list.appendChild(item);

  document.getElementById("teamName").value = "";
  document.getElementById("skills").value = "";
}
function adminAction() {
  alert("Admin action performed!");
}
let queue = 5;

function joinQueue() {
  queue++;
  document.getElementById("queueCount").innerText =
    "People in queue: " + queue;
}

function subscribe() {
  alert("🎉 Fast Track Subscription Activated!");
}
function bookDoubt(e) {
  e.preventDefault();

  const teacher = document.getElementById("teacher").value;
  const slot = document.getElementById("slot").value;

  alert("✅ Doubt session booked with " + teacher + " at " + slot);
}
function askAI() {
  const q = document.getElementById("aiQuestion").value.toLowerCase();
  let answer = "Sorry, I don't understand yet.";

  if (q.includes("map")) {
    answer = "📍 You can find the campus map in the Map section.";
  } else if (q.includes("event")) {
    answer = "🎉 Check the Events page for upcoming events.";
  } else if (q.includes("doubt")) {
    answer = "📘 Book doubt sessions from the Doubt Session page.";
  } else if (q.includes("cafeteria")) {
    answer = "🍔 Cafeteria queue and subscriptions are available.";
  }

  document.getElementById("aiAnswer").innerText = answer;
}
// SHOW USER INFO IN NAVBAR
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const emailSpan = document.getElementById("userEmail");
    if (emailSpan) {
      emailSpan.innerText = user.email;
    }
  }
});

// LOGOUT FUNCTION
function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  });
}

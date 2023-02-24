function open_card() {
   document.getElementById('outside').className = 'open-card';
}

function close_card() {
   document.getElementById('outside').className = '';
}
const heartContainer = document.getElementById("hearts"); ///сердечка
const heartCount = 70;

for (let i = 0; i < heartCount; i++) {
   const heart = document.createElement("div");
   heart.className = "heart";
   heart.style.left = Math.random() * 120 + "%";
   heart.style.top = Math.random() * 100 + "%";
   heartContainer.appendChild(heart);
}
const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const musicBtn = document.getElementById("musicBtn");
const audio = document.getElementById("birthdayMusic");

surpriseBtn.addEventListener("click", () => {
  message.scrollIntoView({ behavior: "smooth", block: "start" });
  burstHearts();
});

function burstHearts(){
  for(let i=0;i<18;i++){
    const heart=document.createElement("span");
    heart.textContent=["♡","♥","✦","✧"][Math.floor(Math.random()*4)];
    heart.style.position="fixed";
    heart.style.left=(45+Math.random()*10)+"vw";
    heart.style.top="48vh";
    heart.style.zIndex="50";
    heart.style.pointerEvents="none";
    heart.style.color=["#8d5bc4","#b07ad5","#ffffff"][Math.floor(Math.random()*3)];
    heart.style.fontSize=(14+Math.random()*20)+"px";
    heart.style.transition="transform 1.4s ease, opacity 1.4s ease";
    document.body.appendChild(heart);
    requestAnimationFrame(()=>{
      heart.style.transform=`translate(${(Math.random()-.5)*300}px, ${-120-Math.random()*260}px) rotate(${Math.random()*180-90}deg)`;
      heart.style.opacity="0";
    });
    setTimeout(()=>heart.remove(),1500);
  }
}

musicBtn.addEventListener("click", async ()=>{
  if(!audio.querySelector("source")){
    alert("To add music, place a file named music.mp3 in the website folder and uncomment the music source line in index.html.");
    return;
  }
  try{
    if(audio.paused){
      await audio.play();
      musicBtn.textContent="❚❚";
      musicBtn.setAttribute("aria-label","Pause birthday music");
    }else{
      audio.pause();
      musicBtn.textContent="♫";
      musicBtn.setAttribute("aria-label","Play birthday music");
    }
  }catch(e){}
});

document.querySelectorAll(".photo-card input").forEach(input=>{
  input.addEventListener("change", ()=>{
    const file=input.files[0];
    if(!file) return;
    const card=input.closest(".photo-card");
    const img=card.querySelector("img");
    img.src=URL.createObjectURL(file);
    card.classList.add("has-photo");
  });
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById('surpriseBtn').addEventListener('click', () => {
    document.getElementById('birthdayMusic').play();
});

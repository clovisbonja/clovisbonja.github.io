(function setActiveLink(){
  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a=>{
    if(a.getAttribute("href") === file) a.classList.add("active");
  });
})();
// Fyll boksene med JS-innhold (tidligere inline i index.html)
(function fillBoxContent(){
  for(let i=1;i<=4;i++){
    const el = document.getElementById(`box-content-${i}`);
    if(el) el.textContent = `JS content for Box ${i}`;
  }
})();

// Hamburger toggle + close on link click + swap icon ☰/✕
(function setupHamburger(){
  const btn = document.querySelector(".menu-toggle");
  const list = document.querySelector(".nav-links");
  if(!btn || !list) return;

  const toggle = () => {
    list.classList.toggle("open");
    btn.textContent = list.classList.contains("open") ? "✕" : "☰";
  };

  btn.addEventListener("click", toggle);

  list.addEventListener("click", (e)=>{
    if(e.target.tagName.toLowerCase() === "a"){
      list.classList.remove("open");
      btn.textContent = "☰";
    }
  });
})();

// Solid background when scrolled
(function navbarOnScroll(){
  const navbar = document.querySelector(".navbar");
  if(!navbar) return;

  const update = () => {
    if(window.scrollY > 10) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  };

  update(); // initial state
  window.addEventListener("scroll", update, { passive:true });
})();
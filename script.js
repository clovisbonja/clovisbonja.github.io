// --------------------
// Marker riktig link i navbaren
// --------------------
(function setActiveLink(){
  // Finn navnet på filen som vises akkurat nå (f.eks. "index.html")
  const file = location.pathname.split("/").pop() || "index.html";

  // Gå gjennom alle lenker i menyen
  document.querySelectorAll(".nav-links a").forEach(a=>{
    // Hvis lenken peker til samme fil → legg til klassen "active"
    if(a.getAttribute("href") === file) a.classList.add("active");
  });
})(); // kjøres med en gang

// --------------------
// Fyll boksene med standardtekst (Box 1-4)
// --------------------
(function fillBoxContent(){
  // Løkke fra 1 til 4 (vi har 4 bokser)
  for(let i=1;i<=4;i++){
    // Finn boksen med riktig id (#box-content-1, #box-content-2 osv.)
    const el = document.getElementById(`box-content-${i}`);
    // Hvis boksen finnes → sett inn tekst
    if(el) el.textContent = `JS content for Box ${i}`;
  }
})(); // kjøres med en gang

// --------------------
// Hamburger meny (mobil): åpne/lukke meny
// --------------------
(function setupHamburger(){
  // Finn knappen (☰) og selve menyen
  const btn = document.querySelector(".menu-toggle");
  const list = document.querySelector(".nav-links");
  if(!btn || !list) return; // hvis vi ikke finner dem → stopp

  // Funksjon for å åpne/lukke menyen
  const toggle = () => {
    list.classList.toggle("open"); // åpne/lukke
    // Bytt symbol: "✕" når åpen, "☰" når lukket
    btn.textContent = list.classList.contains("open") ? "✕" : "☰";
  };

  // Når vi klikker på hamburger-knappen → kjør toggle()
  btn.addEventListener("click", toggle);

  // Når vi klikker på en lenke i menyen → lukk menyen igjen
  list.addEventListener("click", (e)=>{
    if(e.target.tagName.toLowerCase() === "a"){ // hvis det er en <a>-lenke
      list.classList.remove("open"); // lukk menyen
      btn.textContent = "☰"; // sett tilbake til hamburger
    }
  });
})(); // kjøres med en gang

// --------------------
// Navbar bakgrunn ved scrolling
// --------------------
(function navbarOnScroll(){
  // Finn navbar-elementet
  const navbar = document.querySelector(".navbar");
  if(!navbar) return;

  // Funksjon som sjekker scroll-posisjon
  const update = () => {
    if(window.scrollY > 10) navbar.classList.add("scrolled"); // legg til "scrolled" når vi har scrollet ned
    else navbar.classList.remove("scrolled"); // fjern når vi er på toppen
  };

  update(); // sjekk med en gang
  // Oppdater hver gang vi scroller
  window.addEventListener("scroll", update, { passive:true });
})(); // kjøres med en gang

// --------------------
// time.js → viser live klokke
// --------------------
function startClock() {
  const el = document.getElementById("box-content-1"); // finn boks 1
  if (!el) return;

  setInterval(() => {
    const now = new Date(); // hent nåtid
    // Formater til tid med timer:minutter:sekunder
    el.textContent = now.toLocaleTimeString("no-NO", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }, 1000); // oppdater hvert sekund
}

// Kjør funksjonen når HTML-en er ferdig lastet
window.addEventListener("DOMContentLoaded", startClock);

// --------------------
// date.js → viser live dato
// --------------------
function startDate() {
  const el = document.getElementById("box-content-2"); // finn boks 2
  if (!el) return;

  setInterval(() => {
    const now = new Date(); // hent dagens dato
    // Formater dato på norsk: ukedag + dag + måned + år
    let dateStr = now.toLocaleDateString("no-NO", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    });

    // Gjør første bokstav stor (f.eks. "Mandag" i stedet for "mandag")
    dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

    // Skriv datoen inn i boksen, med fet skrift
    el.innerHTML = `<strong>${dateStr}</strong>`;
  }, 1000); // oppdater hvert sekund
}

// Kjør funksjonen når HTML-en er ferdig lastet
window.addEventListener("DOMContentLoaded", startDate);
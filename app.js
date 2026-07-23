console.log("UI carregada");

// Dades falses per provar la UI
const mockLocalitzacions = [
  { id: 1, nom: "Magatzem Central", lat: 41.12, lon: 1.25 },
  { id: 2, nom: "Punt de Descàrrega Nord", lat: 41.18, lon: 1.30 },
  { id: 3, nom: "Base Operativa", lat: 41.10, lon: 1.20 }
];

const buscador = document.getElementById("buscador");
const resultats = document.getElementById("resultats");
const detall = document.getElementById("detall");

buscador.addEventListener("input", () => {
  const text = buscador.value.toLowerCase();
  resultats.innerHTML = "";

  if (text.length === 0) return;

  const filtrats = mockLocalitzacions.filter(loc =>
    loc.nom.toLowerCase().includes(text)
  );

  filtrats.forEach(loc => {
    const div = document.createElement("div");
    div.className = "resultat";
    div.textContent = loc.nom;
    div.onclick = () => mostrarDetall(loc);
    resultats.appendChild(div);
  });
});

function mostrarDetall(loc) {
  document.getElementById("detall-nom").textContent = loc.nom;
  document.getElementById("detall-lat").textContent = loc.lat;
  document.getElementById("detall-lon").textContent = loc.lon;

  detall.classList.remove("ocult");
}

document.getElementById("tancar-detall").onclick = () => {
  detall.classList.add("ocult");
};

// Liste des matières avec leur code secret
const codes = {
  "Maths": "PYTHAGORE",
  "Français": "MOLIERE",
  "Histoire": "REVOLUTION",
  "SVT": "CELLULE",
  "Physique-Chimie": "ATOMES",
  "Anglais": "SHAKESPEARE",
  "Espagnol": "HOLA",
  "Technologie": "ROBOT",
  "Arts plastiques": "PICASSO",
  "Musique": "BACH",
  "EPS": "SPORT"
};

const container = document.getElementById("matieres");

// Génère automatiquement un bloc par matière
Object.keys(codes).forEach(matiere => {
  const div = document.createElement("div");
  div.className = "matiere";

  div.innerHTML = `
    <label for="input-${matiere}">${matiere}</label>
    <input id="input-${matiere}" type="text" placeholder="Entrer le code pour ${matiere}" />
    <button id="btn-${matiere}" disabled>Valider ${matiere}</button>
    <div id="result-${matiere}" class="result">🎉 Code correct pour ${matiere} !</div>
  `;

  container.appendChild(div);

  const input = div.querySelector(`#input-${matiere}`);
  const button = div.querySelector(`#btn-${matiere}`);
  const result = div.querySelector(`#result-${matiere}`);

  // Vérifie le code à chaque frappe
  input.addEventListener("input", () => {
    const val = input.value.trim();
    const correct = val.toUpperCase() === codes[matiere].toUpperCase();

    button.disabled = !correct;
    button.classList.toggle("enabled", correct);
  });

  // Action du bouton
  button.addEventListener("click", () => {
    result.style.display = "block";
    result.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

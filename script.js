// Matières avec leur code secret et leur page associée
const codes = {
  "Maths": { code: "P", page: "maths.html" },
  "Français": { code: "MOLIERE", page: "francais.html" },
  "Histoire": { code: "REVOLUTION", page: "histoire.html" },
  "SVT": { code: "CELLULE", page: "svt.html" },
  "Physique-Chimie": { code: "ATOMES", page: "physique.html" },
  "Anglais": { code: "SHAKESPEARE", page: "anglais.html" },
  "Espagnol": { code: "HOLA", page: "espagnol.html" },
  "Technologie": { code: "ROBOT", page: "technologie.html" },
  "Arts plastiques": { code: "PICASSO", page: "arts.html" },
  "Musique": { code: "BACH", page: "musique.html" },
  "EPS": { code: "SPORT", page: "eps.html" }
};

const container = document.getElementById("matieres");

// Génère un bloc par matière
Object.keys(codes).forEach(matiere => {
  const div = document.createElement("div");
  div.className = "matiere";

  div.innerHTML = `
    <label for="input-${matiere}">${matiere}</label>
    <input id="input-${matiere}" type="text" placeholder="Entrer le code pour ${matiere}" />
    <button id="btn-${matiere}" disabled>Valider ${matiere}</button>
  `;

  container.appendChild(div);

  const input = div.querySelector(`#input-${matiere}`);
  const button = div.querySelector(`#btn-${matiere}`);

  // Vérifie le code
  input.addEventListener("input", () => {
    const val = input.value.trim();
    const correct = val.toUpperCase() === codes[matiere].code.toUpperCase();

    button.disabled = !correct;
    button.classList.toggle("enabled", correct);
  });

  // Action du bouton : redirection vers la page associée
  button.addEventListener("click", () => {
    window.location.href = codes[matiere].page;
  });
});


import './styles.scss';
import { vaccins } from './src/data';

console.log(vaccins); // A SUPPRIMER

const app = document.getElementById('app');

function render() {
  app.innerHTML = '';
  const titre = '<h1>Protégez vous du COVID-19, vaccinez-vous!</h1> ';
  const header = '<header><button class="btnvaccinPrix">Classer les vaccins par prix</button><button class="btnvaccinNonApprouve">Cacher les vaccins non approuvés</button></header>';
  let main = `<main"><h1>Catalogue des vaccins</h1>
    <div class="flex">`;

  for (let i = 0; i < vaccins.length; i++) {
    main += `
      
      <article class="vac">
            <img src="images/${vaccins[i].image}"/><br />
            <h2>${vaccins[i].nom}</h2>
            <p>
             Inventeurs : ${vaccins[i].inventeurs} <br />
             Lieux de production : ${vaccins[i].lieuxDeProduction} <br />
             Technologie : ${vaccins[i].technologie} <br />
             Quantité : ${vaccins[i].quantite} <br />
             Prix unitaire : ${vaccins[i].prixUnitaire} <br />
             Approuvé : <i id="${i}" class="${vaccins[i].approuve ? 'vacApprouver' : 'vacNonApprouver'}">${vaccins[i].approuve}</i> <br />      

            <label for="quantite">Quantité (minimum 1 vaccin):</label>
            <input type="number" id="quantite" name="quantite" min="1" >
            <input type="submit" value="réserver">
            </p>
      </article>`;
  }
  main += '</div></main>';
  app.innerHTML += titre + header + main;

  // Footer
  let footer = '<footer>';
  footer
    += '<h2>Résumer de la commande</h2><button>Passer la commande</button>';
  footer += '</footer>';
  app.innerHTML += footer;
}
render();

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btnvaccinNonApprouve')) {
    const visibleToCacher = document.querySelectorAll('.vacNonApprouver');
    for (const el of visibleToCacher) {
      el.parentNode.parentNode.style.display = 'none';
    }
  }
});

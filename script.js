import './styles.scss';
import { vaccins } from './src/data';

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
            <input type="number" id="quantite" class="inputQuantite" name="quantite" min="1" >
            <input type="submit" id="${i}" class="btnreserver" value="réserver">
            </p>
      </article>`;
  }
  main += '</div></main>';
  app.innerHTML += titre + header + main;

  // Footer
  let footer = '<footer>';
  footer
    += '<h2>Résumer de la commande</h2><button class="btnPasserCommande">Passer la commande</button> <br />';
  footer += '</footer>';
  app.innerHTML += footer;
}
render();

function ChangerTexteBouton() {
  document.querySelector('.btnvaccinNonApprouve').innerText = 'Afficher les vaccins non approuvés';
}

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btnvaccinNonApprouve')) {
    const visibleToCacher = document.querySelectorAll('.vacNonApprouver');
    for (const el of visibleToCacher) {
      el.parentNode.parentNode.style.visibility = 'hidden';
      ChangerTexteBouton();
    }
  }
  if (e.target.matches('.btnreserver')) {
    const { id } = e.target;
    const footer = document.querySelector('footer');
    const inputs = document.querySelectorAll('.inputQuantite');
    const nombreFinalVaccin = inputs[id].value;
    console.log(nombreFinalVaccin);
    footer.innerHTML += `Nom du vaccin : ${vaccins[id].nom} Quantité : ${nombreFinalVaccin} <br /> `;
    const btnReserver = document.querySelectorAll('.btnreserver');
    for (let i = 0; i < btnReserver.length; i++) {
      btnReserver[id].disabled = true;
    }
  }
  if (e.target.matches('.btnPasserCommande')) {
    app.innerHTML = '';
    app.innerHTML = 'La commande a bien été enregistrée... Merci de votre achat!';
  }
});

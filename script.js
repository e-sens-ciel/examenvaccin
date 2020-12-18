import './styles.scss';
import { vaccins } from './src/data';

console.log(vaccins); // A SUPPRIMER

const app = document.getElementById('app');

function render() {
  app.innerHTML = '';
  const titre = '<h1>TITRE DU SITE HHH</h1> ';
  const header = '<header><button class="vaccinPrix"></button><button class="vaccinNonApprouve"></button></header>';
  let main = `<main"><h1>Catalogue des vaccins</h1>
    <div class="flex">`;

  for (let i = 0; i < vaccins.length; i++) {
    main += `
      
      <article class="vac">
            <img src="images/${vaccins[i].image}"/><br />
            <h2>${vaccins[i].nom}</h2>
            <p>
             ${vaccins[i].inventeurs} <br />
             ${vaccins[i].lieuxDeProduction} <br />
             ${vaccins[i].technologie} <br />
             ${vaccins[i].quantite} <br />
             ${vaccins[i].prixUnitaire} <br />
             ${vaccins[i].approuve} <br />      
            </p>
      </article>`;
  }
  main += '</div></main>';
  app.innerHTML += titre + header + main;
}
render();

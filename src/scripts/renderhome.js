import request from 'superagent'
import countriesView from './templateViews/countriesView'

function renderHome() {
  const appContainer = document.querySelector('#app-container')

//const request = superagent;
//let statesTable = document.querySelector('.countries-container');

request
  .get('https://restcountries.eu/rest/v2/all')
  .then(function saveStatesInAVariable(data) {
    appContainer.innerHTML = countriesView(data.body);
  })
  .catch(function() {
    var elem = document.createElement('p')
    elem.innerHTML = 'Error al momento de obtener los datos'
    document.querySelector('.errors').appendChild(elem)
})
}
export default renderHome;

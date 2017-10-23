import request from 'superagent'
import countriesView from './templateViews/countriesView'
import errors from './errors'

function renderHome() {
  const appContainer = document.querySelector('#app-container')

  request
    .get('https://restcountries.eu/rest/v2/all')
    .then(function(data) {
      appContainer.innerHTML = countriesView(data.body);
    })
    .catch(errors)
}

export default renderHome;

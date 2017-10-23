import request from 'superagent'
import countriesView from './templateViews/countriesView'
import errors from './errors'
import setActive from './setactive'

function renderHome() {
  const appContainer = document.querySelector('#app-container')

  request
    .get('https://restcountries.eu/rest/v2/all')
    .then(function(data) {
      appContainer.innerHTML = countriesView(data.body);
      setActive('all');
    })
    .catch(errors)
}

export default renderHome;

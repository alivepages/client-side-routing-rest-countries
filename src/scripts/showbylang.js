import request from 'superagent'
import countriesView from './templateViews/countriesView'
import errors from './errors'
import setActive from './setactive'

function showByLang(lang) {
  const appContainer = document.querySelector('#app-container')

  request
    .get('https://restcountries.eu/rest/v2/lang/' + lang)
    .then(function(data) {
      appContainer.innerHTML = countriesView(data.body);
      setActive(lang);
    })
    .catch(errors)
}

export default showByLang;

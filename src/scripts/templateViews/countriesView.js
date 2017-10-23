const countriesView = function(data, pageTitle = 'Countries Data'){
  return `
      <h1>
        ${pageTitle} 
      </h1>
      <div class="errors"></div>
      <div class="countries-container">
        ${ _createCountry(data)}
      </div>
  `
}

const _createCountry = function(data) {
  let str = ''
  data.forEach(function createFriendCard(obj) {
    str += `
      <div class="country-card">
        <img class="country-flag" src="${obj.flag}" alt="flag">
        <h4 class="country-name">${obj.name}</h4>
        <p class="country-capital">${obj.capital}</p>
      </div>
    `
  })
  return str
}

export default countriesView

function errors() {
  var elem = document.createElement('p')
  elem.innerHTML = 'Error al momento de obtener los datos'
  document.querySelector('.errors').appendChild(elem)
}

export default errors;

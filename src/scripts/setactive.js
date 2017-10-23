function setActive(linkId) {
  var link = document.querySelector('#' + linkId)
  link.className = 'active';
}

export default setActive;

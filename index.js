
var nav = document.getElementsByClassName('nav')
var icon = document.getElementById('icon')
icon.addEventListener('click', toggleNav, false)

function toggleNav(e) {
  if(nav[0].classList.contains('navdown')){
    nav[0].classList.remove('navdown')
    icon.innerHTML = '&#9776'
  } else {
    nav[0].classList.add('navdown')
    icon.innerHTML = '&times'

  }
}


var projectCards = document.getElementsByClassName('projectcard')

for (var i = 0; i < projectCards.length; i++) {
  projectCards[i].addEventListener('click', openDescription, false)
}

function openDescription(e) {
  var projectDesc = this.querySelector('.projectdesc')

  if(projectDesc.classList.contains('closed')){
    projectDesc.classList.add('expanded')
    projectDesc.classList.remove('closed')
  }
  else {
    projectDesc.classList.add('closed')
    projectDesc.classList.remove('expanded')
  }
}


var nav = document.getElementsByClassName('nav')
var menu = document.getElementById('menu')
var navLinks = document.getElementsByClassName('navlinks')

console.log(menu)
menu.addEventListener('click', toggleNav, false)

function toggleNav(e) {
  console.log(navLinks)

 if(nav[0].classList.contains('navdown')){
    nav[0].classList.remove('navdown')
    menu.innerHTML = '&#9776'
    for (var i = 0; i<navLinks.length; i++) {
      navLinks[i].classList.remove('visible')
    }
  }else {
    nav[0].classList.add('navdown')
    menu.innerHTML = '&times'
    for (var i = 0; i<navLinks.length; i++) {
      navLinks[i].classList.add('visible')
    }
  }
}

// Have proejct cards always be open. 
// Have essentially this add/remove display none on menu items so nav bar is empty (apart from menu) when not down.
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

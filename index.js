
var nav = document.getElementsByClassName('nav')
document.getElementById('content').addEventListener('click', toggleNav, false)

function toggleNav(e) {
  console.log(e.target.id);

  if(e.target.id == 'arrow'){
    nav[0].classList.add('navdown')
  }
  else {
      nav[0].classList.remove('navdown')
    }

}



var projectCards = document.getElementsByClassName('projectcard')

for (var i = 0; i < projectCards.length; i++) {
  projectCards[i].addEventListener('click', openDescription, false)

}

function openDescription(e) {
  var listening = this
  var clicked = e.target.className
  var projectDesc = this.querySelector('.projectdesc')

  if(projectDesc.classList.contains('closed')){
    projectDesc.classList.add('expanded')
    projectDesc.classList.remove('closed')
    listening.querySelector('.more').innerHTML = ''
  }
  else {
    projectDesc.classList.add('closed')
    projectDesc.classList.remove('expanded')
    listening.querySelector('.more').innerHTML = 'More..'
  }
}

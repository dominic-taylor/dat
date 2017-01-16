var projectCards = document.getElementsByClassName('projectcard')

for (var i = 0; i < projectCards.length; i++) {
  projectCards[i].addEventListener('click', openDescription, false)

}

function openDescription(e) {
  var listening = this
  var clicked = e.target.className
  var projectDesc = this.querySelector('.projectdesc')
  console.log(listening + ' AND '+projectDesc);

  if(projectDesc.classList.contains('closed')){
    projectDesc.classList.add('expanded')
    projectDesc.classList.remove('closed')
    listening.querySelector('.more').innerHTML = 'Less'
  }
  else {
    projectDesc.classList.add('closed')
    projectDesc.classList.remove('expanded')
    listening.querySelector('.more').innerHTML = 'More..'
  }
}

var projectDetails = document.getElementsByClassName('more')

for (var i = 0; i < projectDetails.length; i++) {
  projectDetails[i].addEventListener('click', openDescription, false)

}

function openDescription(e) {
  var projectDesc = e.target.nextElementSibling

  if(projectDesc.classList.contains('closed')){
    projectDesc.classList.add('expanded')
    projectDesc.classList.remove('closed')
    e.target.innerHTML = 'Less'
  }
  else {
    projectDesc.classList.add('closed')
    projectDesc.classList.remove('expanded')
    e.target.innerHTML = 'More...'
  }
}

document.getElementById('navbutton').addEventListener('click', slideNav, false)
document.getElementById('nav').addEventListener('click', slideNav, false)

function slideNav() {
 var nav = document.getElementById('navbutton')
  var el = document.getElementById('nav')
  if(el.classList.contains('closed')){
    el.classList.add('expanded')
    el.classList.remove('closed')
    nav.innerHTML = 'X'
  }
  else {
    el.classList.add('closed')
    el.classList.remove('expanded')
    nav.innerHTML = '?'

  }
}

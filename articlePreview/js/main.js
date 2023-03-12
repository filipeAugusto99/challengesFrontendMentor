let share = document.querySelector('#share')
let hiddenShare = document.querySelector('.hidden-share')

share.onclick = function() {
  hiddenShare.style.display = 'flex';
}

window.addEventListener('click', function(event) {
  if(!share.contains(event.target) && !hiddenShare.contains(event.target)){
    hiddenShare.style.display = 'none';
  }
})
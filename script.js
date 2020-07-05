var animation = bodymovin.loadAnimation( {
  container: document.getElementById('animations'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'babyglimpse_load.json'
})

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
document.getElementById('open').addEventListener('click', function () {
  document.getElementById('envelope').classList.remove('close');
  document.getElementById('envelope').classList.add('open');
});

document.getElementById('reset').addEventListener('click', function () {
  document.getElementById('envelope').classList.remove('open');
  document.getElementById('envelope').classList.add('close');
});

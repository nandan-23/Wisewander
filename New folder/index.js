document.getElementById('expandableButton').addEventListener('click', function() {
  this.classList.add('expanded');
  this.classList.remove('initial');
  document.getElementById('buttonText').classList.add('hidden');
  document.getElementById('hiddenForm').classList.remove('hidden');
});


document.getElementById('closeBtn').addEventListener('click', function() {
  const elemToScrollTo = document.getElementById('container'); // id of the element you want to scroll to.
  elemToScrollTo.scrollIntoView({ behavior: 'smooth' }); // scroll smoothly to the element
});

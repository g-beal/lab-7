function init(){
  function event(){
    var entry = document.getElementById('entryinput').value;
    var output = document.getElementById('textoutput');
    output.innerHTML = entry;
    alert('Georgia Beal: ' + entry);
  }
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', event);
}
window.addEventListener('load', init);

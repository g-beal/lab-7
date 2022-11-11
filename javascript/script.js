function init(){
  function event(){
    var entry = document.getElementById('entryinput');
    var output = document.getElementById('textoutput');
    output.innerHTML = entry.value;
    alert('Georgia Beal: ' + entry.value);
  }
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', event);
}
window.addEventListener('load', init);

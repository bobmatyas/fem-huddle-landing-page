document.getElementById("email-input").addEventListener("focus", function(){
  document.getElementById("#email-label").style.display = 'none';
});

document.getElementById("#email").addEventListener("blur", function(){
  document.getElementById("#email-label").style.display = 'inline';
});
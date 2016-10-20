$(document).ready(function(){
  var height = parseInt(prompt("How tall are you? (inches)"));
  if (height <= 36) {
    $('#tooshort').show();
  } else if (height <= 62){
    $('#okay').show();
  } else {
    $('#tootall').show();
  }
});

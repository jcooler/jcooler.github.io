
$('#main').toggleClass(localStorage.toggled);

function darkLight() {
  /*DARK CLASS*/
  if (localStorage.toggled != 'dark-mode') {
    $('#main, p').toggleClass('dark-mode', true);
    localStorage.toggled = "dark-mode";
     
  } else {
    $('#main, p').toggleClass('dark-mode', false);
    localStorage.toggled = "";
  }
}

/*Add 'checked' property to input if background == dark*/
if ($('main').hasClass('dark-mode')) {
   $( '#checkBox' ).prop( "checked", true )
} else {
  $( '#checkBox' ).prop( "checked", false )
}


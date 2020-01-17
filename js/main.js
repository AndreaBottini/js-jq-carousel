// Partendo dai file html e css che vi allego, implementate la funzionalità slider.
// Se clicchiamo sulle icone next e prev andiamo avanti o indietro con le visualizzazioni. Il giro deve ripartire se siamo sull'ultima o la prima.
// I cerchietti devono cambiare colore contemporaneamente.


// preparo il documento per il controllo dello script e seleziono le classi necessarie
$(document).ready(
  function () {
    $('.next').click(
      function () {
        nextFoto();
      }
    );
    $('.prev').click(
      function () {
        prevFoto();
      }
    );
  }
);

// Creo le funzioni da inserire
function nextFoto() {
  // alert('nextFoto');
  var actualImage = $('img.active');
  // utilizzo .next per selezionare immagine successiva
  var imageSucc = actualImage.next();
  // console.log(imageSucc);
  // rimozione classe active
  if (actualImage.hasClass('last') == true) {
    actualImage.removeClass('active');
    $('img.first').addClass('active');
  } else {
    actualImage.removeClass('active');
    imageSucc.addClass('active');
  }
}
// imposto anche la parte Previous foto nella funzione
function prevFoto() {
  // alert('prevFoto');
  var actualImage = $('img.active');
  // utilizzo .next per selezionare immagine successiva
  var imagePrev = actualImage.prev();
  // console.log(imagePrev);
  // rimozione classe active
  if (actualImage.hasClass('first') == true) {
    actualImage.removeClass('active');
    $('img.last').addClass('active');
  } else {
    actualImage.removeClass('active');
    imagePrev.addClass('active');
  }
}

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
  console.log(imageSucc);

  // rimozione classe active
  actualImage.removeClass('active');

  console.log(actualImage);
}

function prevFoto() {
  // alert('prevFoto');
}

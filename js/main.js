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
  var actualImage = $('img.active');
  // utilizzo .next per selezionare immagine successiva
  var imageSucc = actualImage.next();
  // console.log(imageSucc);
  // gestione pallini immagini
  var activeSpot = $('i.active');
  var activeSpotSucc = activeSpot.next();
  //If per la gestine delle attività in avanti
  if (actualImage.hasClass('last') == true) {
    actualImage.removeClass('active');
    $('img.first').addClass('active');
    activeSpot.removeClass('active');
    $('i.first').addClass('active');
  } else {
    actualImage.removeClass('active');
    imageSucc.addClass('active');
    activeSpot.removeClass('active');
    activeSpotSucc.addClass('active');
  }
}
// imposto anche la parte Previous foto nella funzione
function prevFoto() {
  var actualImage = $('img.active');
  // utilizzo .prev per selezionare immagine precedente
  var imagePrev = actualImage.prev();
  // console.log(imagePrev);
  // gestione pallini immagini
  var activeSpot = $('i.active');
  var activeSpotPrev = activeSpot.prev();
  //If per la gestine delle attività all'indietro
  if (actualImage.hasClass('first') == true) {
    actualImage.removeClass('active');
    $('img.last').addClass('active');
    activeSpot.removeClass('active');
    $('i.last').addClass('active');
  } else {
    actualImage.removeClass('active');
    imagePrev.addClass('active');
    activeSpot.removeClass('active');
    activeSpotPrev.addClass('active');
  }
}

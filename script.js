// div around the other inputs and hide it 
// on select of input via focus (try this one first) or select or choose right event -trigger event
// show jquery hide/show


function showSubscribeForm() {
  $("#mce-EMAIL").focus(function() {
    $("#hideShowSubscription").css('display', 'block')
  });
};

showSubscribeForm();

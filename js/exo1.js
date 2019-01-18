$(document).ready(function(){

    // SUPPRIMER LES P UN A UN
$('p').click(function(){
    $(this).hide();
})

    // FAIRE REVENIR TOUS LES P SUPPRIMER
$( '.btn-success' ).click(function(){
//$('p').show('slow');
    $('p').slideDown();
});
    
    // SUPPRIMER TOUS LES P
$('.btn-danger').click(function(){ 
    
    var visibilite = $('p').is(':visible');
    
    if(visibilite){
//        $('p').hide('slow');
        $('p').slideUp();
    }
    
    else{$('#popup1').fadeIn();}  
    

});
    
    //MESSAGE POPUP
  $('.btn-warning').click(function(){
 
    $('#popup2').fadeIn(1200);

});
    // FERMETURE DU POPUP
$('#close').click(function(){
 
    $('#popup').fadeOut();

});
    
    //SUPPRIMER ET FAIRE REVENIR AVEC LE MEME BOUTON
$('.btn-primary').click(function(){
 
    $('p').toggle('slow');

});

    
})
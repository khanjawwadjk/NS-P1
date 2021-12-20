$(function(){
    let btnNode2 =$('#menuItems');
    btnNode2.click(function(){
        $('#card1').fadeToggle(2000, function(){
            alert('Done...');
        })
        $('#card1').fadeTo(2000,0.5)
    })
})
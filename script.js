/* funciones jquery*/
$(document).ready(function(){
    /*evento click*/
    $(".boton1").click(function(){
        $(".cuadro").animate({top:"500px"})
        $(".cuadro").animate({left:"1200px"})
        $(".cuadro").animate({top:"0px"})
        $(".cuadro").animate({left:"0px"})
    })
    /*efecto toggle*/
    $(".boton2").click(function(){
        $(".cuadro").toggle()
    })
})
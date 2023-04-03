$( "img.seta_avancar" ).click(proximoSlider);
$("img.seta_voltar").click(voltarSlider);

let atual = 0;
var slides = $(".imagem");

function exibirSlide(){
    $(slides[atual]).addClass("ativa");
    $(".imagem")[atual].scrollIntoView();
}

function ocultarSlide(){
    $(slides[atual]).removeClass("ativa");
}

function proximoSlider(){
    ocultarSlide();
    if(atual == $(slides).length-1){
        atual = 0;
    }else{
        atual++;
    }
    exibirSlide();
}

function voltarSlider(){
    ocultarSlide();
    if(atual == 0){
        atual = $(slides).length-1;
    }else{
        atual--;
    }
    exibirSlide();
}


function enviar()
{
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");

    if(nome.value == "")
    {
        nome.style = "border: 1px solid red; background: #fff99999"
        document.getElementById("TX1").innerHTML ="Preencha o nome";
    }else
    {
        nome.style = "border: 1px solid green; background: #EAEFC8"
        document.getElementById("TX1").innerHTML ="";
    }

    if(email.value == "")
    {
        email.style = "border: 1px solid red; background: #fff99999"
        document.getElementById("TX2").innerHTML ="Preencha o email";
    }else
    {
        email.style = "border: 1px solid green; background: #EAEFC8"
        document.getElementById("TX2").innerHTML ="";
    }

    var Armazena = document.getElementById("Armazena").value

    console.log("resultado", Armazena);

    var Resposta = Armazena / 5;
    console.log(parseFloat(Resposta) +' $');

    document.getElementById("Resposta").innerHTML='Seu saldo em dolar é de: ' + Resposta.toFixed(2) + ' $' ;

    document.getElementById("Resposta").style="  border: 1px solid blue;"
};

document.getElementById("LabelSelec1").addEventListener("change", function() 
{
    var LabelDisplay = document.getElementById
    ("QtdReal")
    if(this.value === "Sim")
    {
        LabelDisplay.style = "Display: flex; flex-direction: column; margin-top: 10px"
    }else if(this.value === "Não")
    {
        LabelDisplay.style = "display: none;"
    }

});



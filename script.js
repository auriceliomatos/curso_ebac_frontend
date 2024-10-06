document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    
    event.preventDefault();

    // valores dos campos A e B

    const campoA = parseFloat(document.getElementById("valorA").value);
    const campoB = parseFloat(document.getElementById("valorB").value);

    // exibir a mensagem

    const mensagem = document.querySelector(".mensagem");
    
    // Validação: B deve ser maior que A condição se

    if (campoB > campoA) {
        mensagem.textContent = `Formulário válido!   O valor "B"  é maior que  "A" = (${campoB}) > (${campoA}).`;
        mensagem.style.color= "green";
                
        }else {
        mensagem.textContent = `Formulário inválido!   O valor "B" deve ser maior que o "A" =  (${campoB}) < (${campoA}).`;
        mensagem.style.color = "red";
        
    }
});


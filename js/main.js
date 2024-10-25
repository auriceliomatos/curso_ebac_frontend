

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('form').validate({
    rules: {
        nome: {
            required: true,
        },
        email: {
            required: true
        },
        telefone: {
            required: true
    },
},
    messages: {
        nome:'por favar, insira o seu nome'
    },
    submitHandler: function (form) {
        alert("Parabéns !! Seu cadastro foi enviada para análise!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha o campos para prosseguir com cadastro!");
    }
    
})





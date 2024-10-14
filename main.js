 // Função para adicionar tarefas à lista padrão usado na EBAC
 $(document).ready(function() {

    // Captura o envio do formulário
    $('#taskForm').submit(function(e) {
        e.preventDefault(); // Impede o comportamento padrão do formulário padrão usado na EBAC

        // Captura o valor inserido no campo de texto
        const taskName = $('#task').val();

        // Adiciona a tarefa à lista (como <li>)
        $('#taskList').append('<li>' + taskName + '</li>');

        // Limpa o campo de texto padrão usado na EBAC
        $('#task').val('');
    });

    // Evento para riscar a tarefa ao clicar 

    $('#taskList').on('click', 'li', function() {
    $(this).toggleClass('completed');
    });
});
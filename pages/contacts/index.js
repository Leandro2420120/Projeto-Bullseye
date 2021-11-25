/**
 * contacts/index.js
 * 
 * Created by André Luferat → http://www.luferat.net/
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 * 
 * Controller da página 'contacts'.
 */

$(document).ready(runContacts);

function runContacts() {

    // Título da página
    setTitle('Faça Contato');

    // Detecta envio do formulário
    $('#contact').submit(sendForm);

}

function sendForm() {

    // Obtém e sanitiza os campos preenchidos
    var contact = {
        name: sanitizeString($('#contact-name').val()),
        email: sanitizeString($('#contact-email').val()),
        subject: sanitizeString($('#contact-subject').val()),
        message: sanitizeString($('#contact-message').val()),
        date: getSystemDate(),
        status: 'recebido'
    }

    // Não envia o form se algum capo esta vazio
    var empty = false;
    for (let key in contact) {
        if (contact[key] == '') {
            $(`#contact-${key}`).val('');
            empty = true;
        };
    }
    if (empty) return false;

    // Salva contato no banco de dados
    db.collection('contacts').add(contact)

        // Deu certo
        .then((docId) => {

            // Divide o nome em partes
            var names = contact.name.split(' ');

            // Gera mensagem com o primeiro nome
            var out = `
<h3>Olá, ${names[0]}!</h3>
<p>Seu contato foi enviado com sucesso.</p>
<p><em>Obrigado...</em></p>
`;

            // Envia mensagem para a view
            $('#feedback').html(out);

            // Oculta formulário
            $('#contact').hide(0, () => {

                // Exibe a mensagem
                $('#feedback').show(0);

                // Apagar campos do formulário
                for (let key in contact) {
                    $(`#contact-${key}`).val('');
                }
            });
        })

        // Deu errado
        .catch((error) => {
            console.error(`Ooops! Algo deu errado: ${error}`);
        });

    // Não faz mais nada
    return false;
}
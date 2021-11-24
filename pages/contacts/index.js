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

    var contact = {
        name: sanitizeString($('#contact-name').val()),
        email: sanitizeString($('#contact-email').val()),
        subject: sanitizeString($('#contact-subject').val()),
        message: sanitizeString($('#contact-message').val()),
        date: getSystemDate(),
        status: 'recebido'
    }

    console.log(contact);

    // Não faz mais nada
    return false;
}
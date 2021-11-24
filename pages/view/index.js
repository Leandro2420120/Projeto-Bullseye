/**
 * view/index.js
 * 
 * Created by André Luferat → http://www.luferat.net/
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 * 
 * Controller da página 'view'.
 */

$(document).ready(runView);

// Armazena a view do artigo
var artView = '';

function runView() {

    // Título da página
    setTitle('Artigo completo');

    // Obtém o Id do artigo
    var articleId = sanitizeString(location.search.replace('?', ''));

    // Obtém o documento do artigo
    db.collection('articles').doc(articleId).get()

        // Se deu certo...       
        .then((doc) => {

            // Se o artigo existe
            if (doc.exists) {

                // Armazena documento em 'art'
                var art = doc.data();

                console.log("--");

                // Título da página
                setTitle(art.title);

                // Converte data para Br
                var brDate = getBrDate(art.date);

                artView += `
<h2>${art.title}</h2>
<small class="author-date">Por ${art.author} em ${brDate}.</small>
<div class="content">${art.text}</div>
            `;

                // Se o artigo não existe
            } else {
                artView += `
<h2>Ooops!</h2>
<p>Artigo não encontrado.</p>
`;
            }

            // Exibe na view
            $('#artView').html(artView);
        })

        // Se deu errado...
        .catch((error) => {
            console.erro("Ooops! Algo deu errado:", error);
        });

}
/* Inicializa jQuery */
$(document).ready(runApp);

/* Aplicativo principal - Tratamento de eventos */
function runApp() {

    // Monitora cliques nas tags <a> do documento
    $('a').click(() => { console.log('ping')});

}

// Processa cliques nas tags <a> do documento
function routerLink() {

    console.log(href, target)

    // Conclui sem fazer nada
    return false;
}

// Carrega página à partir da rota
function loadPage(pagePath) {

    // Objeto '{}' com caminhos da página
    var page = {
        css: `pages/${pagePath}/index.css`,     // Caminho para CSS da página
        html: `pages/${pagePath}/index.html`,   // Caminho para HTMl da página
        js: `pages/${pagePath}/index.js`        // Caminho para JavaScript da página
    };

    // Carrega CSS da página em <style id="pageCSS"></style>
    $('#pageCSS').load(page.css, () => {

        // Carrega o HTML em <div id="pageHTML"></div> logo após o CSS
        $('#pageHTML').load(page.html, () => {

            // Carrega na memória e executa o JavaScript logo após o HTML
            $.getScript(page.js)

        });
    });

    return false;

}
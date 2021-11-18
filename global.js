/* Inicializa jQuery */
$(document).ready(runApp);

/* Aplicativo principal - Tratamento de eventos */
function runApp() {

    // Monitora cliques nas tags <a> do documento
    $('a').click(routerLink);

}

// Processa cliques nas tags <a> do documento
function routerLink() {

    // Obtém atributo 'href' do link clicado
    var href = $(this).attr('href');

    // Obtém atributo 'target' do link clicado
    var target = $(this).attr('target');

    // Se 'href' está vazio ou não existe (undefined), não faz nada
    if (!href || href === '') return false;

    // Trata os tipos de link
    if (
        href.substr(0, 7) === 'http://' ||  // Se é um link externo 'http' ou
        href.substr(0, 8) === 'https://' || // Se é um link externo 'https' ou
        target === '_blank' ||              // Se o 'target' é '_blank' ou
        href.substr(0, 1) === '#'           // Se é uma âncora
    ) return true;                          // Retorna o controla para o HTML

    // Se é uma rota, chama a função 'loadPage', passando a rota
    loadPage(href);

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
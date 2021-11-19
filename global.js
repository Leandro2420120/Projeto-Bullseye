/* Inicializa jQuery */
$(document).ready(runApp);

/* setup inicial do aplicativo */

var app = {
    name: 'Bullseye',                       // Nome do site
    slogan: 'No alvo da sua carreira!',    // Slogan do site
    sep: '~'                              // Separador do título
}

/* Aplicativo principal - Tratamento de eventos */
function runApp() {

    // Monitora cliques nas tags <a> do documento
    $('a').click(routerLink);

    // Título da página
    setTitle();

}

// Processa cliques nas tags <a> do documento
function routerLink() {

    console.log('clicou');

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

    // Dividir a rota em partes para obter variáveis
    var route = pagePath.split('?');

    // Objeto '{}' com caminhos da página
    var page = {
        css: `pages/${route[0]}/index.css`,     // Caminho para CSS da página
        html: `pages/${route[0]}/index.html`,   // Caminho para HTMl da página
        js: `pages/${route[0]}/index.js`,        // Caminho para JavaScript da página
    };

    // Carrega CSS da página em <style id="pageCSS"></style>
    $('#pageCSS').load(page.css, () => {

        // Carrega o HTML em <div id="pageHTML"></div> logo após o CSS
        $('#pageHTML').load(page.html, () => {

            // Carrega na memória e executa o JavaScript logo após o HTML
            $.getScript(page.js, () => {

                // Atualiza endereço da página
                window.history.replaceState('', '', pagePath);

            });
        });
    });

    return false;

}

// Processa o título da página. Tag <title>...</title>
function setTitle(pageTitle = '') {

    // Variável que armazena o título
    var title;

    // Se não definiu o título, usa o formato abaixo
    if (pageTitle == '') title = `${app.name} ${app.sep} ${app.slogan}`;

    // Se definiu o título, usa o formato abaixo
    else title = `${app.name} ${app.sep} ${pageTitle}`;

    // Reescreve  a tag <title>
    $('title').text(title);

}
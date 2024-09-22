function exibir() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <img src="${dado.img}">
                <p class="descricao-meta">${dado.descricao}</p>

            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
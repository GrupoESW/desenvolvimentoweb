function exibirReceitas() {
    var conteudoDemo = document.getElementById("conteudo-demo");
    conteudoDemo.innerHTML = ""; // Limpa o conteúdo anterior

    // Cria a lista de receitas
    var listaReceitas = document.createElement("ul");

    // Adiciona cada receita à lista
    var receitas = ["Bolo de chocolate", "Lasanha de frango", "Salada Caesar", "Pão de queijo", "Panquecas de banana"];
    receitas.forEach(function (receita) {
        var itemReceita = document.createElement("li");
        itemReceita.textContent = receita;
        listaReceitas.appendChild(itemReceita);
    });

    // Adiciona a lista de receitas ao conteúdo da demonstração
    conteudoDemo.appendChild(listaReceitas);
}
function exibirIngredientes() {
    var conteudoDemo = document.getElementById("conteudo-demo");
    conteudoDemo.innerHTML = ""; // Limpa o conteúdo anterior

    // Cria a lista de ingredientes
    var listaIngredientes = document.createElement("ul");

    // Define os ingredientes necessários para as receitas
    var ingredientes = [
        { nome: "Farinha de trigo", diasRestantes: 90 },
        { nome: "Ovos", diasRestantes: 30 },
        { nome: "Açúcar", diasRestantes: 60 },
        { nome: "Chocolate em pó", diasRestantes: 85 },
        { nome: "Polvilho doce", diasRestantes: 30 },
        { nome: "Queijo minas", diasRestantes: 5 },
        { nome: "Leite", diasRestantes: 20 },
        { nome: "Morango", diasRestantes: 2 },
        { nome: "Banana", diasRestantes: 3 },
        { nome: "Maçã", diasRestantes: 4 },
        { nome: "Uva", diasRestantes: 5 }
    ];

    // Adiciona os ingredientes à lista
    ingredientes.forEach(function (ingrediente) {
        var itemIngrediente = document.createElement("li");
        itemIngrediente.textContent = ingrediente.nome + " - Dias restantes: " + ingrediente.diasRestantes;
        listaIngredientes.appendChild(itemIngrediente);
    });

    // Adiciona a lista de ingredientes ao conteúdo da demonstração
    conteudoDemo.appendChild(listaIngredientes);
}


function exibirSugestaoRapida() {
    var conteudoDemo = document.getElementById("conteudo-demo");
    conteudoDemo.innerHTML = `
    <style>li { font-size: 15px;}</style>
    <h1>Essa é a receita mais indicada baseado no vencimento dos seus ingredientes:</h1>
      <h2>Salada de Frutas</h2>
      <h3>Ingredientes:</h3>
      <ul>
        <li>Uvas (a gosto)</li>
        <li>Maçãs (a gosto)</li>
        <li>Morangos (a gosto)</li>
        <li>Bananas (a gosto)</li>
      </ul>
      <h3>Modo de Preparo:</h3>
      <ol>
        <li>Lave bem as frutas.</li>
        <li>Descasque e corte as bananas em rodelas.</li>
        <li>Corte as maçãs em cubos.</li>
        <li>Corte os morangos ao meio ou em fatias.</li>
        <li>Retire as uvas do cacho.</li>
        <li>Misture todas as frutas em uma tigela.</li>
        <li>Leve à geladeira por alguns minutos para servir bem fresquinha.</li>
      </ol>
    <br><h4>Você também tem ingredientes para fazer:</h4>
    <ul>Bolo de chocolate</ul>
    <ul>Pão de queijo</ul>`;
  }

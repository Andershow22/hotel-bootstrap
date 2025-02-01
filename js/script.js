const url = "http://localhost:3000/clientes"

async function postar() {
    let inputs = document.getElementsByTagName("input") 
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
          nome: inputs[0].value,
          DataEntrada: inputs[1].value,
          Observacoes: inputs[2].value,
          email: inputs[3].value,
          DataSaida: inputs[4].value,
          ctgAdultos: inputs[5].value,
          ctgCriancas: inputs[6].value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
      
}
async function getJson() {
    const resposta = await fetch(url) // respota ta esperando o retorno de fetch
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.statusText}`);
    }
    let obj = await resposta.json() // dados espera a resposta(convertida em json)
    return obj;
}
async function preencheTabela() { // a função é assíncrona para que possa trabalhar com a promisse
  let clientes = await getJson(); // Aguarda a resolução da Promise

  let tabela = document.getElementsByTagName("table")[0]
  for(i=0; i<clientes.length;i++){
    tabela.innerHTML = tabela.innerHTML + `
    <td>${clientes[i].id}</td>
    <td>${clientes[i].nome}</td>
    <td>${clientes[i].DataEntrada}</td>
    <td>${clientes[i].Observacoes}</td>
    <td>${clientes[i].email}</td>
    <td>${clientes[i].DataSaida}</td>
    <td>${clientes[i].ctgAdultos}</td>
    <td>${clientes[i].ctgCriancas}</td>
    `
  }
}

let tabela = document.getElementsByTagName("table")[0].addEventListener('load', preencheTabela())
function teste() {
  let inputs = document.getElementsByTagName("input")
  console.log(inputs[1].value)
}




const cepSearch = document.getElementById('go');
const cep = document.getElementById('cep'); //usar a constante para selecionar um elemento que terá seu valor digitado no html não interfere no resultado, já que o que está sendo declarado como constante é o elemento que a variável irá selecionar (tag com a id cep)
// variáveis para preencher os campos input vazios com informações da fetch
const log = document.getElementById('logradouro');
const bairro = document.getElementById('bairro');
const city = document.getElementById('localidade');

cepSearch.addEventListener('click',(e)=>{ // ao clicar no botão cepSearch, será executada uma função curta - arrow function - capturando o evento (e)
    let search = cep.value.replace("-",""); //o .replace faz com que determinados caracteres definidos no primeiro parâmetro do () seja trocado pelo segundo parâmetro
    const options = { //objeto necessário para conseguir acessar API's, e seus valores devem sempre ser:
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options) //fetch é uma expressão ajax feita diretamente no javascript (sem uso de jquery) que faz uma busca na url informada
        .then(response=>{response.json() //.then analisa uma promise resultante da fetch informada, e realiza alguma ação caso a promise tenha um resultado positivo
            // para analisar um valor caso dê errado, usa-se .catch()
            .then(data=>{
                console.log(data)
                // as linhas abaixo inserem os valores vindos da fetch nos campos input
                log.value = data.logradouro;
                bairro.value = data.bairro;
                city.value = data.localidade;
            }) //o valor (data) faz com que sejam puxadas todas as informações presentes na API

        })
})
// Consulta de pokémon via pokéAPI
const pokeSearch = document.getElementById('go2');
const poke = document.getElementById('pokemon');
// variáveis para serem inseridas nos campos input com informações vindas da fetch
const pokeName = document.getElementById('name-poke');
const pokeId = document.getElementById('number-poke');
const pokeType = document.getElementById('type-poke');

pokeSearch.addEventListener('click',(e)=>{
    let search = poke.value;
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`, options) //fetch é uma expressão ajax feita diretamente no javascript (sem uso de jquery)
        .then(response=>{response.json()
            .then(data=>{
                console.log(data);
                // as linhas abaixo inserem os valores vindos da fetch nos campos input
                pokeName.value = data.species.name;
                pokeId.value = data.order;
            })
        })
})
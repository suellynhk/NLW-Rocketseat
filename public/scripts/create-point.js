

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then( (res) => { return res.json () } ) // pode ser escrito: then (res => res.jason ())
    .then( states => {
        
        for (const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]") 

    const ufValue = event.target.value

    const indexOfSelectedState= event.target.selectedIndex
    stateInput.value= event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/distritos?orderBy=nome`

    citySelect.innerHTML = `<option value>Selecione a Cidade</option>` //para zerar as informações do elemento antes de recomeçar (não acumula as cidades qndo seleciona outro estado)
    citySelect.disabled = true //desabilita novamente o campo até que outro estado seja selecionado
 
    fetch(url)
    .then( (res) => { return res.json () } ) // pode ser escrito: then (res => res.jason ())
    .then( cities => {
        
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>` /// value="${city.nome}" para armazenar o nome, se quisesse armazenar pelo id seria "${city.id}"
        }

        citySelect.disabled = false //apos todo o processo de escolha do estado, habilita o campo para escolher a cidade 
    })
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)


//ITENS DE COLETA
//pegar todos os <li> e colocar no itemsToCollect 
const itemsToCollect = document.querySelectorAll(".items-grid li")
//cria um loop para cada item do itemsToCollect, ele faz alfuma coisa 
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSectedItem)
 //o click será o evento que ele vai ficar "ouvindo" prestando atenção. Toda vez q o evento é disparado ele passa para dentro da função handleSectedItem
}


//variável com os itens selecionado (depois de todo o processo)
    const collectedItems = document.querySelector("input[name=items]")

//criar uma variável para os itens que forem selecionados:
    let selectedItems = []



function handleSectedItem(event) {
    const itemLi = event.target  //pega o target e coloca numa variável
    //adicionar ou remover uma class com javascript:toggle (classList.add/remove/toggle), o toggle se existe ele remove, se n existe ele add
    //para poder selecionar ou tirar algum item (mais ou menos um checkbox)
    //a class="selected" está configurada apenas no css, n está no html
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id  //pega o id e coloca dentro de uma variável- o dataset.id pega o id dos elementos
    console.log(`ITEM ID: `, itemId)

//verificar se existem itens selecionados, se sim pegar eles:
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId  //= atribui valor == compara valor/ será true or false
        return itemFound
    }) // vai comparar o item selecionado com todos os itens, vai rodar até achar um item igual e atribuir ao itemfound

//se o item já estiver selecionado, tirar da seleção: 
    if (alreadySelected >= 0) { //ele verifica se o index é maior ou = a 0 ou diferente de -1, significa q ele está clickado
        const filteredItems = selectedItems.filter (item => {
            const itemIsDifferent = item != itemId 
            return itemIsDifferent
        })

        selectedItems = filteredItems

    } else {
//se não estiver selecionado, adicionar à seleção:
    selectedItems.push(itemId)
    }

    console.log(`selectedItems: `, selectedItems)

//att o campo escondido com os itens selecionados:
    collectedItems.value = selectedItems

}
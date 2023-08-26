let con_banco = []

function inserirContato() {
	
    const contato = {
		name: document.getElementById ('txname').value,
		fone: document.getElementById ('txfone').value,
    }

	con_banco = getLocalStorage()
    console.log(con_banco)
    
    con_banco.push(contato) //iniciar
    
    setLocalStorage(con_banco) 

    updateTable()

}
//armazenagem
function getLocalStorage () {
    const armazem = JSON.parse(localStorage.getItem('con_banco'));
    return armazem ||[]
}

function setLocalStorage (con_banco) {
    localStorage.setItem('con_banco',JSON.stringify(con_banco));
}

//mexendo com a tabela
function updateTable() {
    const con_banco = getLocalStorage()
    con_banco.forEach(newRow)

}

function newRow(contato, site){
    const line = document.createElement('tr')
    line.innerHTML =    `
                        <td>${site}</td>
                        <td>${contato.name}</td>
                        <td>${contato.fone}</td>
                        <td><button data-site="${site}"onclick='limpa(this)'>Deletar</button></td>
                        `
    document.querySelector('#tbContacts>tbody').appendChild(line)
}

function limpa(button) {
    const con_banco = getLocalStorage()
    const site = button.getAttribute('data-site')
    con_banco.splice(site, 1)//vai remover a formula do array
    setLocalStorage(con_banco)
    updateTable()
    
}
updateTable()


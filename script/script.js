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

function newRow(contact, index){
    const line = document.createElement('tr')
    line.innerHTML =    `
                        <td>${index}</td>
                        <td>${contact.name}</td>
                        <td>${contact.fone}</td>
                        <td><button>Deletar</button></td>
                        `
    document.querySelector('#tbContacts>tbody').appendChild(line)
}

updateTable()


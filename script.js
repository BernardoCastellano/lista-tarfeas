function criarTarefa() {
    const titulo = document.getElementById('e-tarefa').value;
    const data = document.getElementById('e-data').value;
    const container = document.getElementById('tarefa');
    console.log(`${titulo} \n${data}`);

    if (titulo == '' || data == '') {
        alert('Preencha todos os campos!');
    } else {
        const tarefa = document.createElement('li');
        tarefa.classList.add('tarefa-objeto');
        
        const tituloElem = document.createElement('p');
        tituloElem.innerHTML = `<strong>Tarefa:</strong> ${titulo}`;
        
        const dataElem = document.createElement('p');
        dataElem.innerHTML = `<strong>Até:</strong> ${data}`;
        const fechar = document.createElement('span');
        fechar.textContent = 'X';
        fechar.classList.add('fechar');
        fechar.onclick = function () {
            container.removeChild(tarefa);
        };
        tarefa.onclick = function() {
            tarefa.style.textDecoration = 'line-through 3px';
            tarefa.style.backgroundColor = '#f86565'
        }


        tarefa.appendChild(tituloElem);
        tarefa.appendChild(dataElem);
        tarefa.appendChild(fechar);

        container.appendChild(tarefa);
    }   
}
document.getElementById('tarefa-btn').addEventListener('click', criarTarefa);   
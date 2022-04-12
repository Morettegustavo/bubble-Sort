let pessoas = [];
let alunosAprovados = [];

function aluno(arg) {
    let nome = document.getElementById('nome').value;
    let ra = document.getElementById('ra').value;
    let idade = document.getElementById('idade').value;
    let media = document.getElementById('media').value;
    let sexo = document.getElementById('sexo').value;
    let resultado = document.getElementById('resultado').value;
    let filtroSelect = document.getElementById('filtroSelect').value;
    let chamadaFuncao = arg;

    if (verificarForm(chamadaFuncao)) {
        limparForm();

        if(chamadaFuncao !== 0){
            let filtroSelect = document.getElementById('filtroSelect').value = 0;
            document.getElementById('salvo').style.display = 'block';
            setTimeout(function () {
                document.getElementById("salvo").style.display = "none";
            }, 3000);
            function hide() {
                document.getElementById("salvo").style.display = "none";
            }
            function Pessoa(_nome, _ra, _idade, _media, _sexo, _resultado) {
                this.nome = _nome;
                this.ra = _ra;
                this.idade = _idade;
                this.media = _media;
                this.sexo = _sexo;
                this.resultado = _resultado;
            }
    
            pessoas.push(new Pessoa(nome, ra, idade, media, sexo, resultado))
        }

        if (filtroSelect == '0') {
            document.getElementById('erro-filtro').style.display = 'block';
            setTimeout(function () {
                document.getElementById("erro-filtro").style.display = "none";
            }, 3000);
            function hide() {
                document.getElementById("erro-filtro").style.display = "none";
            }
        }else if(filtroSelect == '1'){
            bubblesort(pessoas, (elem1, elem2) => {
                if (elem1.nome === elem2.nome) {
                    return elem1.ra > elem2.ra;
                } else {
                    return elem1.nome > elem2.nome;
                }
            });
            
            function bubblesort(pessoas, fncompare) {
                let swapped;
                do {
                    swapped = false;
                    for (let i = 0; i < pessoas.length - 1; i++) {
                        if (fncompare(pessoas[i], pessoas[i + 1]) > 0) {
                            [pessoas[i], pessoas[i + 1]] = [pessoas[i + 1], pessoas[i]];
                            swapped = true;
                        }
                    }
                } while (swapped);
            }
        }else if(filtroSelect == '2'){
            bubblesort(pessoas, (elem1, elem2) => {
                if (elem1.ra === elem2.ra) {
                    
                    return elem2.nome > elem1.nome;
                } else {
                    return elem2.ra > elem1.ra;
                }
            });
            
            function bubblesort(pessoas, fncompare) {
                let swapped;
                do {
                    swapped = false;
                    for (let i = 0; i < pessoas.length - 1; i++) {
                        if (fncompare(pessoas[i], pessoas[i + 1]) > 0) {
                            [pessoas[i +1], pessoas[i]] = [pessoas[i], pessoas[i + 1]];
                            swapped = true;
                        }
                    }
                } while (swapped);
            }
        }else if(filtroSelect == '3'){
            bubblesort(pessoas, (elem1, elem2) => {
                if (elem1.nome === elem2.nome) {
                    return elem1.ra > elem2.ra;
                } else {
                    return elem1.nome > elem2.nome;
                }
            });
            
            function bubblesort(pessoas, fncompare) {
                let swapped;
                do {
                    swapped = false;
                    for (let i = 0; i < pessoas.length - 1; i++) {
                        if (fncompare(pessoas[i], pessoas[i + 1]) > 0) {
                            [pessoas[i], pessoas[i + 1]] = [pessoas[i + 1], pessoas[i]];
                            swapped = true;
                        }
                    }
                } while (swapped);

            }
        }

        if(filtroSelect == '3'){
            alunosAprovados = pessoas.filter(pessoas => pessoas.resultado === '2');
            ExibirResultados(alunosAprovados);
        }
        if(filtroSelect == '0' || filtroSelect == '1' || filtroSelect == '2'){
            ExibirResultados(pessoas);
        }
       
        function ExibirResultados(pessoas) {
            for (let i = 0; i < pessoas.length; i++) {
                if (i === 0) {
                    document.getElementById('conteudo-dinamico').innerText = "";
                }

                let tabela = document.getElementById('conteudo-dinamico');
                let tr = document.createElement('tr');
                tr.setAttribute('id', 'idTr-' + i);

                let thNome = document.createElement('th');
                thNome.setAttribute('id', 'th-Nome-' + i);

                let thRa = document.createElement('th');
                thRa.setAttribute('id', 'th-Ra-' + i);

                let thIdade = document.createElement('th');
                thIdade.setAttribute('id', 'th-Idade-' + i);

                let thMedia = document.createElement('th');
                thMedia.setAttribute('id', 'th-Media-' + i);

                let thSexo = document.createElement('th');
                thSexo.setAttribute('id', 'th-Sexo-' + i);

                let thResultado = document.createElement('th');
                thResultado.setAttribute('id', 'th-Resultado-' + i);

                tabela.appendChild(tr);
                tr.appendChild(thNome);
                tr.appendChild(thRa);
                tr.appendChild(thIdade);
                tr.appendChild(thMedia);
                tr.appendChild(thSexo);
                tr.appendChild(thResultado);



                document.getElementById('th-Nome-' + i).innerHTML = pessoas[i].nome;
                document.getElementById('th-Ra-' + i).innerHTML = pessoas[i].ra;
                document.getElementById('th-Idade-' + i).innerHTML = pessoas[i].idade;
                document.getElementById('th-Media-' + i).innerHTML = pessoas[i].media;
                if(pessoas[i].sexo == 2){
                    document.getElementById('th-Sexo-' + i).innerHTML = 'Masculino';
                }else if(pessoas[i].sexo == 3){
                    document.getElementById('th-Sexo-' + i).innerHTML = 'Feminino';
                }
                if(pessoas[i].resultado == 2){
                    document.getElementById('th-Resultado-' + i).innerHTML = 'Aprovado';
                }else if(pessoas[i].resultado == 3){
                    document.getElementById('th-Resultado-' + i).innerHTML = 'Reprovado';
                }
            }

        }

    }


    function verificarForm() {
        if(chamadaFuncao === 0){
            return true;
        }
        if (nome !== '' && ra !== '' && idade !== '' && media !== '' && sexo !== '1' && resultado !== '1') {
            document.getElementById('salvo').style.display = 'block';
            setTimeout(function () {
                document.getElementById("salvo").style.display = "none";
            }, 3000);
            function hide() {
                document.getElementById("salvo").style.display = "none";
            }
            return true;
        } else {
            document.getElementById('erro').style.display = 'block';

            setTimeout(function () {
                document.getElementById("erro").style.display = "none";
            }, 3000);
            function hide() {
                document.getElementById("erro").style.display = "none";
            }
            return false;
        }
    }

    function limparForm() {
        document.getElementById("nome").value = "";
        document.getElementById("ra").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("media").value = "";
        document.getElementById('sexo').value = '1';
        document.getElementById('resultado').value = '1';
        document.getElementById("nome").focus();
    }

    function filtroConteudo(pessoas) {
        let filtroSelect = document.getElementById('filtroSelect').value;
        if (filtroSelect == 0) {
            document.getElementById('erro-filtro').style.display = 'block';
    
            setTimeout(function () {
                document.getElementById("erro-filtro").style.display = "none";
            }, 3000);
            function hide() {
                document.getElementById("erro-filtro").style.display = "none";
            }
        }else if(filtroSelect == 1){
            bubblesort(pessoas, (elem1, elem2) => {
                if (elem1.nome === elem2.nome) {
                    return elem1.ra > elem2.ra;
                } else {
                    return elem1.nome > elem2.nome;
                }
            });
            
            function bubblesort(pessoas, fncompare) {
                let swapped;
                do {
                    swapped = false;
                    for (let i = 0; i < pessoas.length - 1; i++) {
                        if (fncompare(pessoas[i], pessoas[i + 1]) > 0) {
                            [pessoas[i], pessoas[i + 1]] = [pessoas[i + 1], pessoas[i]];
                            swapped = true;
                        }
                    }
                } while (swapped);
            }
            ExibirResultados(pessoas);
        }else if(filtroSelect == 2){
            console.log('2');
        }else if(filtroSelect == 3){
            console.log('3');
        }
    }

}



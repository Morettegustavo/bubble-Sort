
function showInputs(num){
    switch (num){
        case 1:
            var display = document.getElementById('div-cadastrar-alunos').style.display;
            if(display == "none")
                document.getElementById('div-cadastrar-alunos').style.display = 'block';
            else
                document.getElementById('div-cadastrar-alunos').style.display = 'none';
        break; 
    }
} 

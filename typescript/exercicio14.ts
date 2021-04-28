interface Ponderada {
    nota1:number;
    nota2:number;
    nota3:number;
    media: ( nota1:number, nota2:number, nota3:number ) => void;
}

let alunos :Ponderada = {
    nota1:0,
    nota2:0,
    nota3:0,
    media: ( nota1:number, nota2:number, nota3:number ) => {
        if(nota1 > nota2 && nota1 > nota3){
            let resultado: number = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10 
            if(resultado >= 6 && resultado <= 10){
                console.log('aluno aprovado! média:' + resultado.toFixed(1))
            }
            else if(resultado === 0){
                console.log('aguardando a inserção de valores!')
            }
            else{
                 console.log('aluno reprovado! média:' + resultado.toFixed(1))
            }
        }
        if(nota2 > nota1 && nota2 > nota3){
            let resultado: number = ((nota1 * 3) + (nota2 * 4) + (nota3 * 3)) / 10 
             if(resultado >= 6 && resultado <= 10){
                console.log('aluno aprovado! média:' + resultado.toFixed(1))
            }
            else if(resultado === 0){
                console.log('aguardando a inserção de valores!')
            }
            else{
                 console.log('aluno reprovado! média:' + resultado.toFixed(1))
            }
        }
        if(nota3 > nota2 && nota3 > nota1){
            let resultado: number = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4)) / 10
             if(resultado >= 6 && resultado <= 10){
                console.log('aluno aprovado! média:' + resultado.toFixed(1))
            }
            else if(resultado === 0){
                console.log('aguardando a inserção de valores!')
            }
            else{
                 console.log('aluno reprovado! média:' + resultado.toFixed(1))
            }
        }
    }
} 


alunos.nota1 = 9.5
alunos.nota2 = 5.5
alunos.nota3 = 3.5
alunos.media(alunos.nota1, alunos.nota2, alunos.nota3)

alunos.nota1 = 2.5
alunos.nota2 = 5.5
alunos.nota3 = 3.5
alunos.media(alunos.nota1, alunos.nota2, alunos.nota3)

alunos.nota1 = 4.5
alunos.nota2 = 5.5
alunos.nota3 = 6.5
alunos.media(alunos.nota1, alunos.nota2, alunos.nota3)
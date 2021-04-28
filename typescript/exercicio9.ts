

console.log("==================versao 1==============================")

function media(nota1 :number,nota2 :number,nota3 :number): void{
    
    let media = (nota1 + nota2 + nota3) / 3
    
    if(media >= 6 && media <= 10){
        console.log('aluno aprovado, média:' + media.toFixed(2))
    }else{
        console.log('aluno reprovado, média:' + media.toFixed(2))
    }
}
media(2,5,7)
media(9,5,7)


console.log("==================versao 1==============================")











console.log("==================versao 2==============================")


interface Media {
    nota1: number;
    nota2: number;
    nota3: number;
    total: (  nota1: number, nota2: number, nota3: number ) => void
}

let alunos :Media = {
    nota1: 0,
    nota2: 0,
    nota3: 0,
    total: ( nota1: number, nota2: number, nota3: number ) => {
        let media: number = (nota1 + nota2 + nota3) / 3
    
        if(media >= 6 && media <= 10){
            console.log(`aluno aprovado! média:${media}`)
        }else if(media === 0){
            console.log("esperando pela inserção das notas!")
        }
        else{
            console.log(`aluno reprovado! média:${media}`)
        }
    }
}

alunos.total(alunos.nota1,alunos.nota2,alunos.nota3)

alunos.nota1 = 4.5
alunos.nota2 = 8.5
alunos.nota3 = 9.5
alunos.total(alunos.nota1,alunos.nota2,alunos.nota3)

alunos.nota1 = 4.5
alunos.nota2 = 2.5
alunos.nota3 = 1.5
alunos.total(alunos.nota1,alunos.nota2,alunos.nota3)

alunos.nota1 = 6.5
alunos.nota2 = 7.5
alunos.nota3 = 5.5
alunos.total(alunos.nota1,alunos.nota2,alunos.nota3)

console.log("==================versao 2==============================")
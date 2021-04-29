class Nadador {
    idade :number
    
    
    constructor(idade :number) {
        this.idade = idade
    }
    
    
    
     classificacao() :void {
        let idade :number = this.idade
        
         if(idade >= 5 && idade <= 7){
            console.log('infantil A')
        }
         if(idade >= 8 && idade <= 10){
            console.log('infantil B')
        }
         if(idade >= 11 && idade <= 13){
            console.log('juvenil A')
        }
         if(idade >= 14 && idade <= 17){
            console.log('juvenil B')
        }
        if(idade >= 18){
            console.log('adulto')
        }
        if(idade < 4 || idade >= 60){
            console.log('opção inválida')
        }
    }
    
   
}



let atleta = new Nadador(0)
console.log(atleta)

atleta.idade = 9
atleta.classificacao()

atleta.idade = 5
atleta.classificacao()


atleta.idade = 19
atleta.classificacao()


atleta.idade = 12
atleta.classificacao()

atleta.idade = 2
atleta.classificacao()

class dadosHeroi{
	constructor(nome, idade, tipo, ataque){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }
   
    atacar(){
    let ataque = ""
    
    if (this.tipo === "mago") {ataque = "magia"}
 	else if (this.tipo === "guerreiro") {ataque = "espada"} 
 	else if (this.tipo === "monge") {ataque = "artes marciais"} 
 	else if (this.tipo === "ninja") {ataque = "shuriken"}
    
    console.log("o " + this.tipo + " atacou usando " + ataque)
       }  
}


let usuario = new dadosHeroi("Ana" , "11" , "ninja")
let usuario2 = new dadosHeroi("Gabi" , "23" , "monge")

usuario.atacar()
usuario2.atacar()

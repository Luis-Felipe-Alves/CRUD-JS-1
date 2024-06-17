let pessoas = [
    {
        nome: 'Luis',
        idade: 25,
        atributo: 'Bonito',
        id: 1
    },

    {
        nome: 'Murilo',
        idade: 22,
        atributo: 'Feio',
        id:2
    }
]

console.log(pessoas);

function adicionarPessoa(nome = 'Zé', idade = 0, atributo = 'Zézão', id=pessoas.length+1){

    pessoas.push({nome: nome, idade: idade, atributo: atributo, id: id})
    console.log(`${nome} foi adicioando(a)! Seu atributo é ${atributo}.`)
}

console.log('A primeira pessoa é ' + pessoas[0].nome);

adicionarPessoa('Renato', 12, 'abestado');
adicionarPessoa('Seu Muniz', 63, 'Bigodudo');
adicionarPessoa('Mané Lito', 52, 'Cu de cana');
adicionarPessoa('Chico Sola', 49, 'Escorado');
adicionarPessoa('Zé Rufino', 57, 'Pistoleiro');

for(let i=0; i < pessoas.length; i++){
    console.log( `${pessoas[i].nome} tem ${pessoas[i].idade} anos e é ${pessoas[i].atributo}.`)
    console.log(`O id de ${pessoas[i].nome} é ${pessoas[i].id}.`)
}

function mudarPessoa(i, nome, idade, atributo){

    if(i < pessoas.length){

        pessoas[i].nome = nome
        pessoas[i].idade = idade
        pessoas[i].atributo = atributo
        console.log(nome + ' mudou sua conta')

    } else {
        console.log(`O index ${i} não existe!`)
    }
}

mudarPessoa(0, 'Luizaum', 25, 'bonito');
mudarPessoa(3, 'Maria Keyla', 2, 'fina');
mudarPessoa(4, 'Robbson', 54, 'viciado');
mudarPessoa(6, 'Catolé', 30, 'trambiqueiro');
mudarPessoa(9, 'Telemarques', 30, 'trambiqueiro');

console.log(pessoas);

function deletaPessoas(i){
    console.log(`${pessoas[i].nome} foi deletado(a)!`)
    pessoas.splice(i,1);
}

deletaPessoas(4);

console.log('Separa!!!')
console.log(pessoas)


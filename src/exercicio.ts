const multiplicaNumeros = (a: number, b: number): number => a * b;

function saudacao (nome: string, idade: number) {
    console.log(`Óla meu nome é ${nome} e eu tenho ${idade} anos.`)
}

console.log(multiplicaNumeros(10, 3));
console.log(saudacao("Felipe", 19));
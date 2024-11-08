let estaChovendo: boolean = false;

estaChovendo = true;

let idade: number = 27;

let altura: number = 1.75;

const nacionalidade: string = "Brasileira";

const colegas: string[] = ["Lucas", "Fernanda"];
const tecnologias: Array<string> = ["HTML", "CSS", "JS"];
const notas: ReadonlyArray<number> = [7, 9, 5, 8];

const lista: [nome: string, estaEstudando: boolean, idade: number] = ["Gian", true, 27];

let idadeDaAna: number | string = 25;

/* No TypeScript, any permite que uma variável aceite qualquer tipo, desativando a verificação de tipos.
É útil em situações incertas, mas deve ser usado com cautela, pois diminui os benefícios da tipagem estática.
Uma alternativa mais segura é unknown, que exige verificação antes de usar o valor. */

let dadosDaApi: any; 
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = "string";

let curso = "Front-end";
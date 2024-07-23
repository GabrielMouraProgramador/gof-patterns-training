/*
 * Singleton Design Pattern:
 * 
 * O Singleton é um padrão de projeto que garante que uma classe tenha apenas uma única instância 
 * e fornece um ponto global de acesso a essa instância. 
 * 
 * Vantagens:
 * - Controle centralizado de recursos compartilhados.
 * - Evita a criação de múltiplas instâncias desnecessárias, reduzindo inconsistências e sobrecarga.
 * - Útil para gerenciadores de conexão de banco de dados, loggers, configurações de aplicativos, etc.
 * 
 * O que ele faz:
 * - Restringe a instância da classe a um único objeto.
 * - Fornece um método para obter essa instância única, geralmente implementado como um método estático.
 */


import { v4 as uuidv4 } from 'uuid';


export class MyClassSingleton{
    private static instance  : MyClassSingleton | null = null;
    private timeOfCreation   : string;
    private id               : string;
    private example          = 'internal content';

    private constructor (){
        const date = new Date();

        this.timeOfCreation = date.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        this.id = uuidv4();
    }

    public static getInstance(): MyClassSingleton{
        if( MyClassSingleton.instance === null){
            MyClassSingleton.instance = new MyClassSingleton();
        }
        return MyClassSingleton.instance 
    }
    getTimeCreation(): string{
        return this.timeOfCreation
    }
    showsData(){
       return {
        id: this.id,
        timeCreation:this.timeOfCreation
       }
    }
}

console.log('Criação Singleton Classico')
console.log()
console.log()


const example1 =  MyClassSingleton.getInstance()
const example2 =  MyClassSingleton.getInstance()


console.log(example1.showsData())
console.log(example2.showsData())

console.log(example1 == example2)

console.log()
console.log()

// Esta classe Singleton garante que todos os componentes do projeto usem a mesma instância da classe MyClassSingleton. 
// Você pode exportá-la e utilizá-la em qualquer lugar do projeto de forma simples.

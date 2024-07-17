
import { v4 as uuidv4 } from 'uuid';



// Definição da interface User
interface User {
    name: string;
    age: number;
}

// Array de usuários, inicialmente vazio
const users: User[] = [];

// Adiciona um usuário padrão ao array de usuários
users.push({
    name: 'user default',
    age: 20,
})


// ID UNICO
const id = uuidv4();


// Singleton usando módulos do JavaScript
// QUALQUER LUGAR QUE EU USAR ESSE MÓDULO SERÁ O MESMO (instância única)


export const MyDatabaseModule = {
    // Método para adicionar um usuário ao array de usuários
    add(user: User): void {
        users.push(user);
    },

    // Método para remover um usuário do array de usuários pelo índice
    remove(index: number): void {
        users.splice(index, 1);
    },

    // Método para exibir todos os usuários no array de usuários
    show(): void {
        for (const user of users) {
            console.log(user);
        }
    },
    showID(): void {
        console.log(id)
    },
};

console.log('Criação Singleton Module')
console.log()
console.log()


// Exemplos de uso do módulo MyDatabaseModule
const example1 = MyDatabaseModule;
const example2 = MyDatabaseModule;


//EXAMPLE 1

// example1.show();
// example2.show();


//EXAMPLE 2

example1.showID();
example2.showID();

console.log(example1 == example2)

console.log()
console.log()
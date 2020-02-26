---
author: Luiz de Paula
title: Dicas de Javascript
description: Algumas dicas úteis que encontrei ao longo do meu percurso com Javascript
date: '2020-02-26 05:19:08'
category: JS
---
Desde que comecei a estudar Javascript vim me deparando com útilidades que me salvaram tempo de desenvolvimento sejam em trabalhos complexos ou simples.

Neste post não estou trazendo nada de novo, apenas algumas dicas que podem ser úteis para iniciantes e/ou pessoas que precisam passar por um problema.

### Remover valores duplicados de um Array
ES6 trouxe a estrutura `Set` e o operador 'spread' `...`, que usaremos para criar um novo array com valores únicos.

```javascript
const arrayDuplicado = [1, 2, 3, 4, 1, 3]
const arrayUnico = [...new Set(arrayDuplicado)]

console.log(arrayUnico) // [1, 2, 3, 4]
```

Lembrando que esse código só é valido com o ES6 e com array de valores primitivos: `undefined`, `null`, `boolean`, `string` e `number`.

### Juntar objetos
Se você ainda não precisou passar por uma situação assim, é só uma questão de tempo.

Porem com o operador 'rest/spread' `...` esse problema fica muito simples de resolver.

```javascript
const person = { name: 'John Doe', age: 25 }
const address = { city: 'Londrina' }
const social = { facebook: 'https://facebook.com', instagram: 'https://instagram.com' }

// Aqui os objetos se juntam em apenas um
const summary = { ...person, ...address, ...social }

console.log(JSON.stringify(summary, null, '\t'))

/*
*{
*	"name": "John Doe",
*	"age": 25,
*	"city": "Londrina",
*	"facebook": "https://facebook.com",
*	"instagram": "https://instagram.com"
*}
*/
```
E se acontecer dos objetos terem chaves conflitantes? Então nesse caso o ultimo objeto terá prioridade.
```javascript
const person = { name: 'John Doe', age: 25, city: 'Londrina' }
const address = { city: 'São Paulo' }

const summary = { ...person, ...address }

console.log(JSON.stringify(summary, null, '\t'))

/*
*{
*	"name": "John Doe",
*	"age": 25,
*	"city": "São Paulo"
*}
*/
```

### Formatar JSON.stringify
Logo acima no exemplo de *juntar objetos* eu usei o método *stringify* com parametros que produziram um JSON formatado no console.

JSON.stringify recebe dois parametros opcionais: uma função `replacer` e um valor de `space`.

O valor `space` recebe um número de espaços que você deseja ou uma string(no caso `\t` que insere tabs).

```javascript
console.log(JSON.stringify({ numberOne: 1, numberTwo: 2 }, null, '\t'))
/*
*{
*	"numberOne": 1,
*	"numberTwo": 2
*}
*/
```
Desse jeito fica mais fácil de ler o JSON, certo?

### Logar variáveis em objetos
Minha maior ferramenta de *debug* é o `console.log()`, e sempre usei logando diretamente as variáveis, e no máximo separava por virgula pra ter um espaço entre elas.

Tudo isso mudou pra melhor quando vi num tutorial o instrutor *debuggando* com as variáveis em objetos.

```javascript
const array = [1, 2, 3, 4]
const text = 'lorem ipsum'
const user = { name: 'John Doe' }

console.log(array, text, user) 
// Isso aqui ficaria uma bagunça

console.log({ array, text, user })
// Todos juntinhos num objeto facilitando a leitura
// {array: Array(4), text: "lorem ipsum", user: {…}}
```



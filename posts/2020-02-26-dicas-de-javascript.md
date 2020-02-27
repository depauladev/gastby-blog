---
author: Luiz de Paula
title: Dicas de Javascript
description: Algumas dicas úteis que encontrei ao longo do meu percurso com Javascript
date: '2020-02-26 05:19:08'
category: JS
---
Desde que comecei a estudar Javascript me deparei com macetes que me salvaram tempo de desenvolvimento, sejam em trabalhos simples ou complexos.

Neste post não estou trazendo nada de novo, apenas algumas dicas que podem ser úteis para iniciantes e/ou pessoas que precisam transpor um problema.

### Remover valores duplicados de um Array
ES6 trouxe a estrutura `Set` e o operador 'spread' `...`, que usaremos para criar um novo array com valores únicos.

```javascript
const arrayDuplicado = [1, 2, 3, 4, 1, 3]
const arrayUnico = [...new Set(arrayDuplicado)]

console.log(arrayUnico) // [1, 2, 3, 4]
```

Lembrando que esse código só é valido com o ES6 e com array de valores primitivos: `undefined`, `null`, `boolean`, `string` e `number`.

### Juntar objetos
Se você ainda não precisou passar por uma situação assim é só uma questão de tempo.

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

Mas e se acontecer dos objetos terem chaves conflitantes? Então nesse caso o último objeto terá prioridade.

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
Logo acima, no exemplo de *juntar objetos*, usei o método *stringify* com parametros que produziram um *JSON* formatado no console.

JSON.stringify recebe dois parametros opcionais: uma função `replacer` e um valor de `space`.

O valor `space` recebe um número de espaços que você deseja ou uma *string* (no caso `\t` que insere tabs).

```javascript
console.log(JSON.stringify({ numberOne: 1, numberTwo: 2 }, null, '\t'))
/*
*{
*  "numberOne": 1,
*  "numberTwo": 2
*}
*/
```

Desse jeito fica mais fácil de ler o *JSON*, certo?

### Logar variáveis em objetos
Minha maior ferramenta de *debug* é o `console.log()`, sempre usei *logando* diretamente as variáveis e no máximo separava por virgulas pra ter um espaço entre elas.

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

### Mudar nome da variável no Destructuring
Algumas vezes precisamos mudar o nome da variável para não dar conflito ou para melhorar a semântica. Bom, isso é possível e fácil dando um *alias* a propriedade.

```javascript
const obj = { x: 1 }

// Destructuring padrão
const { x } = obj

// Destructuring com alias
const { x: nomeNovo } = obj
```

### Curto-circuito
Usando curto-circuito implica-se que o segundo argumento apenas será executado ou validado se o primeiro não satisfazer as condições da expressão.

Em termos *javascriptcos* isso se traduz quando o primeiro argumento de um operador AND `&&` é um valor *falsy*, todo o resto não importa pois já é garantido que a condição não passa. O operador `&&` é sempre a favor do *false*.

Já o operador OR `||` é sempre a favor do *true*, ou seja, quando o primeiro argumento é um valor *truthy* o restante é irrelevante para a condição.

Se você não sabe o que são valores *truthy* e *falsy* eu fiz um post sobre o assunto [aqui no blog, confere lá](/truthy-e-falsy-values/).

Bom, sabemos então que ambos os operadores irão percorrer os argumentos procurando o tipo dos quais são a favor. Guarde bem isso, é importante não só pra essa dica.

Podemos usar então para não tomar um *"Cannot read property 'xxx' of undefined."*

```javascript
const pessoa = {
  saudacao() {
    console.log('Olá!')
  }
}

// Chamando pessoa.saudacao()
pessoa.saudacao() // Olá!

/*
* Mas se pessoa é undefined, chamar esse método irá jogar um error
* "Cannot read property 'saudacao' of undefined."
* Para prevenir esse erro podemos usar o operador &&
*/
pessoa && pessoa.saudacao() // saudacao só irá ser chamado se pessoa existir.
```

Podemos usar, também, para retornar valores padrões.

```javascript
function getDadosExternos {
  let response = getDadosApi()
  
  return response || []
}
```
Desse modo evitamos manipular um *undefined* como se fosse um array.

### Conclusão
Nesse post deixei as dicas que mais me ajudam e fazem parte do meu dia-a-dia.
Javascript é uma linguagem versátil, há muito mais como essas. 

Bom código, espero ter ajudado!

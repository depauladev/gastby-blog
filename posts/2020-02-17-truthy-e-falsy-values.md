---
author: Luiz de Paula
title: Truthy e Falsy values no Javascript
description: Um comportamento peculiar se tratando de condicionais.
date: '2020-02-17 07:44:24'
category: JS
---
Javascript atribui um valor booleano automaticamente a todos os elementos da linguagem. Chamamos esses valores de *truthy* ou *falsy* dependendo de como o interpretador os trata.

## Valores Falsy

Por essência são valores que recebem false pelo processo de coersão (conversão de um valor de um tipo para outro) do mecanismo de tipagem do Javascript.

> “Um valor falsy é um valor que é considerado false quando encontrado no contexto condicional.” — Mozilla Developer Network

Javascript conta com um conjunto grande de valores *falsy*.

```javascript
let a = 0 // (Zero) Number
let b = NaN // (Not a Number) Number
let c = "" // (String vazia que tambem pode ser `` e '') String
let d = false // Boolean
let e = null // Object
let f = undefined // Undefined
let g = 0n // BigInt
```

### Equalidade estrita

Todos os valores *falsy* em comparação estrita `===` só serão iguais à eles mesmos.

```javascript
console.log(0 == false) // true
console.log(0 === false) // false
```

Porém a única exceção é o `NaN`, pois é o unico valor que não é igual a ele mesmo no Javascript.

```javascript
console.log(NaN == NaN) // false
console.log(NaN === NaN) // false
console.log(NaN == false) // false
console.log(typeof NaN) // Number
```

Sim, `NaN` é bizarro.

## Valores Truthy

Agora que já descobrimos quais são os valores *falsy* ficou mais fácil saber quais são *truthy*. Ou seja, tudo que não é *falsy* tem valor *true* no contexto condicional.

```javascript
let t = Infinity // Number
let u = "0" // String
let v = "false" // String
let x = function(){} // Function
let y = [] // Array
let z = {} // Object
```

## Conclusão

Valores *falsy* e *truthy* são o modo que Javascript encontrou de não crashar quando um valor não booleano é passado em uma condicional.

Agora que conhecemos como funciona podemos utilizar em nosso código pra criar funcionalidades interessantes. Um exemplo é a utilização de *valores default* no retorno de funções:

```javascript
const getDadosExternos = () => {
  let response = getDadosApi()
  
  return response || []
}
```

Desse modo evitamos de manipular um *undefined* como se fosse um array.

Também facilita como escrevemos condicionais, evitando testar por todos os valores:

```javascript
const response = getDadosApi()
if(response !== null && response !== undefined && response !== '') {} // Nope

if(response) {} // // Yep
```

Valores *truthy* e *falsy* facilitam muito a escrita porém é fácil cair em pegadinhas caso não use com o cuidado necessário. Cuidado e bom código!

## BONUS: O objeto Boolean

Um grande causador de confusões é o **Boolean object**, tratando-se dele é importante lembrar que qualquer object cujo valor não é *undefined* ou *null*, incluindo ele mesmo com valor *false*, é lido como *true* quando colocado em condicionais. Fica mais claro com um exemplo:

```javascript
x = new Boolean(false) // Boolean Object
if(x) {
  console.log('x é true')
}
// irá logar no console 'x é true'
```

Já esse comportamento não se aplica quando usamos o valor primitivo.

```javascript
x = false // Boolean Object
if(x) {
  console.log('x é true')
}
// Não ira logar no console
```

Pessoalmente nunca me deparei com um caso de uso do **Boolean object** porém fica a curiosidade aqui caso algum dia você tenha quebrado a cabeça com isso.

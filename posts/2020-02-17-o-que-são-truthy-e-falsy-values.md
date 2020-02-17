---
author: Luiz de Paula
title: O que são Truthy e Falsy values
description: Javascript possui um comportamento peculiar se tratando de condicionais
date: '2020-02-17 07:44:24'
category: JS
---
Javascript atribui um valor booleano automaticamente a todos os elementos da linguagem. Chamamos esses vaores de *truthy* ou *falsy* dependendo de como o interpretador os trata.

### O objeto Boolean

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

Pessoalmente nunca me deparei com um caso de uso do **Boolean object** porém fica a curiosidade aqui caso algum dia tenha quebrado a cabeça com isso.

### Valores Falsy

Por essência valores Falsy são valores que quando convertidos para boolean se tornam falsos.

> “A falsy value is a value that is considered false when encountered in a Boolean context.” — Mozilla Developer Network

Javascript conta com um conjunto grande de valores *falsy*.

```javascript
let a = 0; // (Zero) -> Number
let b = NaN // (Not a Number) -> Number
let c = "" // (String vazia) -> String
let d = false // -> Boolean
let e = null // -> Object
let f = undefined // -> Undefined
let g = 0n // -> BigInt
```



\### Valores Truthy

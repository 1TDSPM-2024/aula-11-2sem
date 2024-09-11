---
marp: true
---

# aula-11-2sem
Estilização com  SASS, utilizando Hooks. - Async-Await - APIs

## 1. O que é um componente em React e como criá-lo usando TypeScript?
Iris: É uma  biblioteca, npm install vite@latest 

Taís:ts + react é para fzr varias inter 

Falanguinha: Um componente React é um trecho reutilizável de elementos HTML dinâmicos

:Resposta: Um componente em React é uma função ou classe que retorna um elemento React (um pedaço de UI). No caso de TypeScript, geralmente usamos uma função que retorna JSX. Aqui está um exemplo básico:
```import React from 'react';
const MeuComponente = ()=> {
  return <h1>Olá, mundo!</h1>;
};

export default MeuComponente;```

---

## 2 Como passar props para um componente em React usando TypeScript?
Iris: extend herança 

Falanga: Podemos passar props por meio de interfaces e/ou tipos, cujos atributos (props) são passados no momento da criação do componente.

Taís: one way data flow, mae pra filha

GuiRomanholi: Da pra passar props tipados por meio de um arquivo.ts e ultilizalos no componente.

Resposta: Para passar props em TypeScript, você precisa definir apenas os tipos descrever as props e então tipar o seu componente.

---

## 3. O que é o useState e como utilizá-lo em um componente funcional com TypeScript?
Iris: É um hook, funções

Mikael: Mikael: useState é um Hook do React para utilizar uma variável de estado, ou seja, uma variável mutável onde seu conteúdo é renderizado mesmo se alterado;

Falanga: useState serve para armazenar ee alterar o valor atual de um elemento da página.

Resposta: useState é um Hook do React que permite adicionar estado a componentes funcionais. Com TypeScript, você pode especificar o tipo do estado.

---

## 4. Como utilizar o useEffect em um componente React com TypeScript para executar efeitos colaterais?

Mikael: o useEffect executa uma função sempre que aquilo definido como parâmetro se alterar;

Falanga: boa mikas! <3

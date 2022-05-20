# Teste FrontEnd Agrotis

Projeto front-end teste aplicado pela Agrotis.

## Visite a página

* [Teste FrontEnd](https://agrotis-teste-front-end.vercel.app/)

## Utilização

Para abrir o projeto no sua máquina local siga os seguintes passos:

1. Clone o repositório e o acesse com o comando:
```
git@github.com:luispolippo/Teste-Front-End.git
cd Teste-Front-End
```

2. Para instalar as dependências use o comando:
```
npm install
```

3. Para rodar o projeto execute: 
```
npm run dev
```

4. Acesse no navegador http://localhost:3000.

5. **Projeto rodando!**

## Utilização com Docker

Se você já tiver Docker instalado na sua maquina pode rodar o projeto diretamente por ele, basta seguir as orientações abaixo:

1. Clone o repositório e o acesse com o comando:
```
git@github.com:luispolippo/Teste-Front-End.git
cd Teste-Front-End
```

2. Rode o comando de build do Dockerfile:
```
docker build -t frontendapp:latest . 
```

3. Rode o comando para iniciar o container:
```
docker run -dit -p 8000:80 --name frontendapp frontendapp
```

4. Acesse o projeto no navegador usando o endereço: http://localhost:8000

## Testes

Para executar os testes siga os passos a seguir:

1. Clone o repositório e o acesse com o comando:
```
git@github.com:luispolippo/Teste-Front-End.git
cd Teste-Front-End
```

2. Para instalar as dependências use o comando:
```
npm install
```

3. Para rodar o teste execute:
```
npm test
```

## Stack utilizada

* React
* Typescript
* Material UI
* Jest
* React Testing Library
Na raiz do projeto vamos iniciar o npm:

```
npm init -y
```
E então, instalar as dependências para nossa API. Iremos utilizar o express e o mysql2:

```
npm install express mysql2
```
Vamos instalar também as nossa dependências de desenvolvimento. Por enquanto, sabemos que iremos utilizar a stack de testes vista anteriormente com mocha, chai e sinon:

```
npm install -D mocha chai sinon
```

---

## Criaremos essa estrutura

```

└── controllers
│   └── movieController.js
└── services
│   └── movieService.js
└── models
│   └── movieModel.js
└── tests
│   ├── controllers
│   │   └── movieController.test.js
│   ├── services
│   │   └── movieService.test.js
│   └── models
│       └── movieModel.test.js
└── index.js
```

Perceba que criamos um arquivo de teste para a entidade movie para cada camada do MSC. Assim, conseguiremos testar unitariamente cada uma.
Na raiz do projeto vamos iniciar o npm:


Por último, vamos adicionar o script de teste no package.json.
Habitualmente, podemos executar todos os testes contidos numa pasta utilizando o comando `mocha <suaPastaDeTestes> --recursive`, assim como podemos também definir um padrão de arquivos de teste, como `mocha .<suaPastaDeTestes>/**/*.test.js`, que executará todos os arquivos com final `test.js` dentro da sua pasta de testes.
Para esse dia, vamos utilizar um pequeno artifício com o intuito de facilitar a execução de testes específicos. Nesse caso, utilizaremos o comando `mocha ./tests/**/*$NAME*.test.js`:

```
...
  "scripts": {
    "test": "mocha ./tests/**/*$NAME*.test.js --exit"
  },
...

```
> O --exit força o encerramento do processo do mocha ao final dos testes
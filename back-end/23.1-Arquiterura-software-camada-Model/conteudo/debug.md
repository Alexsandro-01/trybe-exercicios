# Como configurar o debug.

 * criar diretório `.vscode` e adicionar à ele o arquivo lauch.json
 * Em seguida clicar em `add configurations`
 * E buscar no auto complete por `lauch via npm`
 * deve ficar parecido com isso:
 ```
  {
    "configurations": [
      {
        "name": "Launch via NPM",
        "request": "launch",
        "runtimeArgs": [
          "run-script",
          "start"
        ],
        "runtimeExecutable": "npm",
        "skipFiles": [
          "<node_internals>/**"
        ],
        "type": "node"
      }
    ]
  }
 ``` 
# Iniciando e configurando um projeto Node + TypeScript

Para criarmos um projeto Node + TypeScript, primeiramente devemos iniciar nosso projeto Node padrão como já fazemos. Vamos criar um diretório chamado express-typescript, entrar no diretório e iniciar nosso projeto Node.

~~~bash
mkdir express-typescript && cd express-typescript

npm init -y
~~~

O próximo passo é adicionar o suporte ao TypeScript ao nosso projeto, para isso vamos instalar o pacote npm do TypeScript como dependência de desenvolvimento do nosso projeto. Lembrando que em produção sempre iremos usar o código compilado de TypeScript para JavaScript, por isso utilizamos como dependência de desenvolvimento.

~~~bash
npm install -D typescript
~~~


Por que fazemos isso, ao invés de usarmos o pacote instalado globalmente em nossas máquinas ou como um executável npx?

Porque com isso conseguimos garantir que todas as pessoas que vão trabalhar nesse projeto estejam sempre executando uma mesma versão, evitando possíveis incompatibilidades, caso uma tenha uma versão diferente da outra.

Agora vamos criar nosso arquivo tsconfig.json com a seguinte configuração:

~~~JSON
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "rootDir": "./",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true
  }
}
~~~

Nosso próximo passo será instalar como dependência de desenvolvimento o pacote npm de declarações de tipos para os módulos padrões do Node.

~~~bash
npm install -D @types/node
~~~

Mas o que são declarações de tipos?

Arquivos que descrevem tipos de várias APIs JavaScript para o compilador TypeScript. Em seu projeto, você definirá seus próprios tipos, mas também precisará de tipos para módulos padrão do Node ou diferentes pacotes externos que usará, como o Express.

Esses arquivos são módulos que não possuem nenhuma implementação de código, mas servem como uma camada que descreve a implementação JavaScript por trás dele através de tipos.

Por último vamos instalar o `ts-node-dev`, que é um pacote de utilitários que vai nos ajudar a executar o servidor de desenvolvimento, escrito em `TypeScript`, diretamente no terminal, sem necessidade de compilarmos o código em `JavaScript`, além de reiniciar o servidor a cada alteração que fizermos, sem a necessidade de encerrarmos o processo e o iniciarmos novamente.

~~~bash
npm install -D ts-node-dev
~~~

É muito importante entendermos o porquê da instalação de cada um desses pacotes. Já nas nossas próximas configurações de projetos `Node` + `TypesCript`, podemos fazer todas as instalações em único comando:

~~~bash
npm install -D typescript @types/node ts-node-dev
~~~

# Instalando o Express e inicializando a aplicação

Vamos agora instalar as nossas dependências necessárias para iniciarmos nossa aplicação. Primeiro instalamos o pacote do Express:

~~~bash
npm install express
~~~

E posteriormente instalamos o pacote npm de declarações de tipos do Express:

~~~bash
npm install -D @types/express
~~~

Vamos instalar a lib http-status-codes que nos permite lidar com os status HTTP de uma forma mais simples.

~~~bash
npm install http-status-codes
~~~

Agora vamos criar a nossa aplicação Express. Para isso, crie um arquivo chamado index.ts na raiz do diretório do projeto, com o seguinte conteúdo:

~~~bash
touch index.ts
~~~

~~~JavaScript
// ./index.ts

import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
~~~

Até então não temos nada de novo, somente uma aplicação Express básica e com o código ainda com a sintaxe em JavaScript. Isso é possível porque, como vimos anteriormente, todo o código TypeScript é compatível com JavaScript.

Para termos certeza que esse código funciona, vamos criar alguns scripts no nosso package.json e rodar a aplicação:

~~~JSON
...
"scripts": {
    "start": "npm run build && node ./dist/index.js",
    "dev": "tsnd index.ts",
    "build": "tsc"
 },
...
~~~

### Scripts:

> start: executa o build da aplicação e depois roda o arquivo compilado dentro da pasta dist;

> dev: executa a aplicação em modo de desenvolvimento utilizando o ts-node-dev;

> build: executa a compilação do projeto utilizando o TSC.

Agora vamos executar a aplicação utilizando o script start:

~~~bash
npm start
~~~

Ao acessarmos no nosso navegador o caminho http://localhost:8000/ conseguimos ver a mensagem da nossa rota / : `Express + TypeScript`.
Vamos refatorar a nossa aplicação para que passe a utilizar os tipos:

~~~JavaScript
// ./index.ts

import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
~~~

Veja como nosso código ficou bem mais semântico com a utilização dos tipos, ou seja, conseguimos expressar muito melhor a nossa intenção em cada variável e/ou função do nosso script.

Para terminar nosso setup, vamos adicionar nosso middleware de erro. Qualquer tipo de erro que acontecer em tempo de execução cairá nesse middleware.

~~~JavaScript
// ./index.ts

import express, { NextFunction, Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
//
// const app = express();
//
// app.use(express.json());
//
// const PORT = 8000;
//
// app.get('/', (req: Request, res: Response) => {
//   res.status(StatusCodes.OK).send('Express + TypeScript')
// });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });
~~~

Sempre coloque ele após a declaração de outros middlewares, caso o contrário esse middleware não irá capturar os erros dos demais.

Além disso vamos instalar uma lib que faz o tratamento de erros disparar diretamente o middleware de erro sem a necessidade de colocar try/catch ao longo do seu código. Essa lib é a `express-async-errors`.

~~~bash
npm install express-async-errors
~~~

Para utilizá-la basta chamar o controller da forma abaixo.

~~~JavaScript
// ./index.ts

import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';

// ..
~~~

Para nosso setup ficar 100% vamos instalar mais duas libs que usaremos um pouco mais a frente. Elas nos ajudarão a disparar erros específicos para serem tratados no middleware de erro.

~~~bash
npm install restify-errors @types/restify-errors
~~~

Com o setup finalizado, vamos começar a implementar nosso `CRUD`.
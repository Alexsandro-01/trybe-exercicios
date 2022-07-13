# Passos para a criação de uma associação de tabelas usando o Sequelize

⚠️ Os comandos neste arquivo levam em consideração que as confirações básicas usando o Sequelize já foram feitas, você pode verificar [neste arquivo](https://gist.github.com/IagoPFerreira/b0f6cd1885d9c09fb0a33c96dd0ab8ff), como fazer essa configuração básica. ⚠️

1. Crie uma nova migration

~~~bash
npx sequelize migration:generate --name create-addresses
~~~

2. Altere a migration, caso seja necessário

~~~JavaScript
// migrations/XXXXXXXXXXXXX-create-address.js

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa a tabela da referência da associação ⚠️ Esse model faz referência ao nome da Tabela ⚠️
          model: 'Users',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Addresses');
  }
};
~~~

3. Executar a migration

~~~bash
npx sequelize db:migrate
~~~

> Caso queira reverter:

~~~bash
npx sequelize db:migrate:undo
~~~

> Caso seja necessária a modificação de alguma tabela, você pode rodar um comando para gerar uma nova migration é possível verificar como fazer isso no [arquivo de configuração do Sequelize](https://gist.github.com/IagoPFerreira/b0f6cd1885d9c09fb0a33c96dd0ab8ff), item 12.

4. Altere o model `User`:

~~~JavaScript
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  }, {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
  });

  // `User.associate = (models) => {}` é onde declaramos as associações daquele model. Neste caso estamos dizendo que cada `User` possui um `Address`.
  User.associate = (models) => {
    User.hasOne(models.Address,
      { 
        // `foreignKey` indica qual a coluna que será utilizada de referência na tabela Address, note que userId está escrito em camelCase, da mesma forma que na migration de Address, e não em snake_case, como na tabela.
        foreignKey: 'userId',
        // `as` indica como será o nome da chave onde as informações da tabela Addresses serão informadas
        as: 'addresses'
      });
  };

  return User;
};
~~~

> Existem 4 tipos de métodos de associações disponibilizados pelo sequelize:

- `hasOne` = Tem um
- `belongsTo` = pertencente a
- `hasMany` = Tem muitos
- `belongsToMany` = pertencente a muitos

5. Crie um arquivo chamado `address.js` dentro do diretório models:

~~~JavaScript
// models/address.js
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'Addresses',
    underscored: true,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
  };

  return Address;
};
~~~

6. Crie os seeder:

~~~bash
npx sequelize seed:generate --name users
npx sequelize seed:generate --name addresses
~~~

7. Adicionar as informações que serão colocadas no banco

~~~JavaScript
// seeders/XXXXXXXXXXXXX-user.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      fullName: 'Jackson',
      email: 'jackson@test.com',
      phone_num: '777777777',
    },
    {
      fullName: 'Mauro',
      email: 'mauro@test.com',
      phone_num: '987987999',
    },
    {
      fullName: 'Fred',
      email: 'fred@test.com',
      phone_num: '987698769',
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {})
};
~~~

~~~JavaScript
// seeders/XXXXXXXXXXXXX-addresses.js

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          city: 'Belo Horizonte',
          street: 'Rua Flórida',
          number: 1080,
          user_id: 1,
        },
        {
          city: 'São Paulo',
          street: 'Avenida Paulista',
          number: 1980,
          user_id: 2,
        },
        {
          city: 'Fortaleza',
          street: 'Rua das Enseadas',
          number: 95,
          user_id: 3,
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Andaluzita',
          number: 131,
          user_id: 4,
        },
        {
          city: 'Curitiba',
          street: 'Rua Fria',
          number: 101,
          user_id: 4,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};
~~~

8. Executar o seed

~~~bash
npx sequelize db:seed:all
~~~

> E para reverter:

~~~bash
npx sequelize db:seed:undo:all
~~~

---

## Usando a associação no código

> A grande diferença quando vamos fazer uma requisição que necessite da utilização de uma association com o Sequelize, é o campo `include`. Esse campo diz ao Sequelize quais serão as configurações da requisição. A propriedade `model` se refere a qual tabela será utilizada. Já a propriedade `as` deve ser igual à que declaramos no momento da criação da associação no respectivo model.

~~~JavaScript
const express = require('express');
const { Address, User } = require('./models');

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
        where: { id },
        include: [{ model: Address, as: 'addresses' }],
      });

    if (!user)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});
~~~

> Você pode verificar mais sobre o `include` na [documentação do Sequelize](https://sequelize.org/docs/v6/core-concepts/assocs/#defining-an-alias)

---
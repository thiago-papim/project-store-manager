# Store Manager

Feito por [Thiago Papim](https://www.linkedin.com/in/thiago-papim/)


## Sobre o Projeto 📝
 
Este projeto consiste no desenvolvimento de uma API RESTful de gerenciamento de vendas, com foco na criação, visualização, atualização e exclusão de produtos e vendas. A principal tecnologia utilizada é o banco de dados relacional MySQL para armazenar e gerenciar os dados.

<b>Interação com Banco de Dados MySQL:</b> <br>Utilizamos o MySQL como sistema de gerenciamento de banco de dados, demonstrando a capacidade de conectar, criar tabelas e executar consultas SQL.

<b>Arquitetura em Camadas:</b> <br> A API foi desenvolvida seguindo uma arquitetura em camadas para promover uma organização eficiente do código, separando as preocupações e facilitando a manutenção.

<b>Testes de API:</b> <br> Foi criado testes para os endpoints da API, assegurando que todas as funcionalidades estejam corretamente implementadas e funcionando conforme o esperado. Isso ajuda a manter a estabilidade do sistema.

## Ferramentas e Habilidades utilizadas ⚙️
- Node.js
- MySQL
- Express
- Docker
- Arquitetura de software MSC

 ## Como Executar o Projeto ✅
> 👀 Necessário ter o docker e o docker-compose instalados em sua máquina.
<details><summary><strong>Passo a passo</strong></summary><br/>

1. Clone o repositório
```
git clone git@github.com:thiago-papim/project-store-manager.git
```
2. Instalar dependências<br>
```
cd backend && npm install
```
3. Subir os containers<br>
Iremos subir 2 containers no total, sendo eles backend e database

>Ir para pasta raiz da aplicação

```
docker-compose up -d --build
```

Com isso estará funcionando.

</details>

 ## Endpoints 🔽
<h2>Produtos</h2>
<details><summary><strong>Rotas</strong></summary><br/>

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/produtos` | `GET` | Retornar todos os produtos |

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/produtos/:id` | `GET` | Retornar produto pelo ID |

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/produtos` | `POST` | Criar um produto |

O corpo da requisição tem que ter a seguinte estrutura:

```
{
  "name": "ProdutoName"
}
```

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem que ser um token com status 201.<br>
Exemplo de retorno:

```
{
  "id": 4,
  "name": "ProdutoX"
}
```

</details>
<details><summary><strong>Em caso de falha</strong></summary><br/>
Caso Name seja menor que 5 caracteres:

```
{
	"message": "\"name\" length must be at least 5 characters long"
}
```

Caso não tenha o campo name:

```
{
	"message": "\"name\" is required"
}
```

</details>

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/produtos` | `PUT` | Atualizar um produto |

O corpo da requisição tem que ter a seguinte estrutura:

```
{
  "name": "ProdutoName"
}
```

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem que ser um token com status 200.<br>
Exemplo de retorno:

```
{
  "id": 1,
  "name": "Martelo do Batman"
}
```

</details>
<details><summary><strong>Em caso de falha</strong></summary><br/>
Caso não tenha o campo name:

```
{
	"message": "\"name\" is required"
}
```

Caso name seja menor que 5 caracteres:

```
{
	"message": "\"name\" length must be at least 5 characters long"
}
```

Caso o produto não exista:

```
{
	"message": "Product not found"
}
```

</details>

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/produtos/search` | `PUT` |  Retorna todos os produtos no banco de dados contendo o valor da query q |

O query params da requisição deverá seguir o formato abaixo:

```
  http://localhost:PORT/products/search?q=Martelo
```

</details>

<h2>Vendas</h2>
<details><summary><strong>Rotas</strong></summary><br/>

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/sales` | `GET` | Retornar todas as vendas |

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/sales/:id` | `GET` | Retornar venda pelo ID |

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/sales` | `POST` | Criar uma venda |

O corpo da requisição tem que ter a seguinte estrutura:

> É possível cadastrar a venda de mais de um produto

```
[
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]
```

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem que ser um token com status 201.<br>
Exemplo de retorno:

```
{
  "id": 3,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
}
```

</details>
<details><summary><strong>Em caso de falha</strong></summary><br/>
Caso não tenha o campo productId:

```
{
	"message": "\"productId\" is required"
}
```

Caso não tenha o campo quantity:

```
{
	"message": "\"quantity\" is required"
}
```

Caso o campo quantity seja menor ou igual a 0:

```
{
	"message": "\"quantity\" must be greater than or equal to 1"
}
```

Caso o productId seja inexistente:

```
{
	"message": "Product not found"
}
```
</details>

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/sales/:id` | `DELETE` | Deletar venda pelo ID |

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O status retornado 201 e sem nenhuma resposta.

</details>
<details><summary><strong>Em caso de falha</strong></summary><br/>
Caso a venda não exista:

```
{
	"message": "Sale not found"
}
```

</details>

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/sales/:id` | `PUT` | Atualizar qunatidade de um produto em uma venda pelo ID |

O corpo da requisição tem que ter a seguinte estrutura:

```
{
  "quantity": 20
}
```

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem que ser um token com status 200.<br>
Exemplo de retorno:

```
{
  "date": "2023-05-06T03:14:28.000Z",
  "productId": 2,
  "quantity": 20,
  "saleId": 1
}
```

</details>
<details><summary><strong>Em caso de falha</strong></summary><br/>
Caso não tenha o campo quantity:

```
{
	"message": "\"quantity\" is required"
}
```

Caso o campo quantity tenha o valor igual ou menor:

```
{
	"message": "\"quantity\" must be greater than or equal to 1"
}
```

Caso a venda não exista:

```
{
	"message": "Sale not found"
}
```

</details>

</details>

 ## Testes 🔽

Para assegurar todas as funcionalidades foram implementados testes com 100% de cobertura
<details><summary><strong>Como executar os testes</strong></summary><br/>

```
cd backend && npm run test:mocha
```
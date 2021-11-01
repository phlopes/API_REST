
# Projeto API REST<br>
## Tecnologias utilizadas
`
Node.JS, Express, MongoDB.
`
## Objetivo do Projeto<br>
`
API criada com o proposito de receber dados de clientes e transportadores, bem como cadastro de ofertas de frete.
`
## Arquitetura<br>
`
API criada utilizando conceitos da arquitetura MSC, visando alta escabilidade da aplicação, fácil substituição 
da solução de database bem como a organização.
`
## Como rodar o Projeto<br>
1. Clone o repositório
  * `git clone git@github.com:phlopes/API_REST.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `API_REST`
 2. Instale as dependências e execulte o projeto
  * `npm install` 
  * `npm start` 

## Como rodar os Testes<br>
  * `npm start` 
  * `npm test` 

# ENDPOINTS 
## /shipper - Método POST <br>
Este endpoint é utilizado para cadastro de Expedidores / Clientes no banco de dados, necessário que seja enviado no body da requisição um .json conforme abaixo.<br>
```
{ 
  "name": "Nome Cliente",
  "doc": "00.000.000/0000-00", 
  "about": "sobre a empresa", 
  "site": "https://cliente.com.br" 
}
```
Todos os campos são obrigatórios, caso o body não contenha todas informações a API retorna um erro:
![image](https://user-images.githubusercontent.com/78616150/138966253-0ecc3dcc-0df5-4730-b1da-f4f4eb7bb8d2.png)

Caso esteja tudo correto o Expedidor / Cliente é cadastrado com sucesso:
![image](https://user-images.githubusercontent.com/78616150/138966193-c843f843-84b2-4048-95b2-c936a8e6224d.png)

## /shippers - Método GET <br>
Este endpoint lista todos os Expedidores / Clientes cadastrado no banco de dados.
![image](https://user-images.githubusercontent.com/78616150/138967233-2f8bbdb2-1209-4160-8f19-9c120e25e94e.png)

## /transporter - Método POST <br>
Este endpoint é utilizado para cadastro de Transportadores no banco de dados, necessário que seja enviado no body da requisição um .json conforme abaixo.<br>
```
{
  "name": "Transportadora",
  "doc": "00.000.000/0000-00",
  "about": "sobre a empresa",
  "site": "https://transportadora.com.br"
}
```
Todos os campos são obrigatórios, caso o body não contenha todas informações a API retorna um erro:
![image](https://user-images.githubusercontent.com/78616150/138966253-0ecc3dcc-0df5-4730-b1da-f4f4eb7bb8d2.png)

Caso esteja tudo correto o transportador é cadastrado com sucesso:
![image](https://user-images.githubusercontent.com/78616150/138967733-c42f468d-1ebb-4cca-bda3-de516807fc8d.png)

## /transporters - Método GET <br>
Este endpoint lista todos os transportadores cadastrado no banco de dados.
![image](https://user-images.githubusercontent.com/78616150/138967971-0862db74-bb9c-4372-8349-ff257963b719.png)

## /offer - Método POST <br>
Este endpoint é utilizado para cadastro de Ofertas de Frete no banco de dados, necessário que seja enviado no body da requisição um .json conforme abaixo.<br>
```
{
  "id_shipper": 1,
  "from": "Porto Alegre - RS",
  "to": "São Paulo - SP",
  "initial_value": 130.00,
  "amount": 300.00,
  "amount_type": "TON"
}
```
Todos os campos são obrigatórios, caso o body não contenha todas informações a API retorna um erro:
![image](https://user-images.githubusercontent.com/78616150/138968874-0e8a3524-c1d5-48bc-805b-7ff29bdaf5e1.png)

A chave id_shipper deve estar cadastrada no banco de dados (/shipper), utilize o endpoint (/shippers) para listar os Expedidores / Clientes cadastrados.
Caso o id_shipper não exista no banco, um erro é retornado:
![image](https://user-images.githubusercontent.com/78616150/138969220-19e2c317-69f0-4f29-9519-f657bf831cb8.png)

Caso o id_shipper exista no banco de dados, a oferta de frete é cadastrada com sucesso:
![image](https://user-images.githubusercontent.com/78616150/138969619-b0e60476-bfce-468a-9634-9195588c1c43.png)

## /offers - Método GET <br>
Este endpoint lista todas as ofertas de frete cadastrada no banco de dados.
![image](https://user-images.githubusercontent.com/78616150/138970208-ded0bd94-c4c1-4c93-985b-c388969fb191.png)

## /offertransport - Método POST <br>
Este endpoint é utilizado para que transportadoras ofereçam seus serviços para lista de fretes cadastrados em /offers, necessário que seja enviado no body da requisição um .json conforme abaixo.<br>
```
{
  "id_transporter": 12,
  "id_offer": 1,
  "value": 105.00,
  "amount": 230.00
}
```
Todos os campos são obrigatórios, caso o body não contenha todas informações a API retorna um erro:
![image](https://user-images.githubusercontent.com/78616150/138973771-5e069843-4447-4d3f-a8ad-fa0cfe8851ef.png)

A chave id_transporter deve estar cadastrada no banco de dados (/transporter), utilize o endpoint (/transporters) para listar as transportadoras cadastradas.
Caso o id_transporter não exista no banco, um erro é retornado:
![image](https://user-images.githubusercontent.com/78616150/138973909-cb88ec3a-8cdd-4e36-8556-a844e4a85ab2.png)

A chave id_offer deve estar cadastrada no banco de dados (/offer), utilize o endpoint (/offers) para listar todas as ofertas de frete cadastradas.
Caso o id_offer não exista no banco, um erro é retornado:
![image](https://user-images.githubusercontent.com/78616150/138974058-f645b90f-c412-4966-a8aa-049cdd5dca91.png)

Caso o id_transporter e id_offer exista no banco de dados, o serviço para frete é cadastrado com sucesso:
![image](https://user-images.githubusercontent.com/78616150/138974195-9aa753b1-ff8f-44b8-a31c-4820a8626cbe.png)

## /offertransports - Método GET <br>
Este endpoint lista todas as transportadoras que ofereceram o serviço para os fretes cadastrados em /offers. <br>
![image](https://user-images.githubusercontent.com/78616150/139078080-b8bd0237-bee5-44d3-b198-d8e254aaf7b4.png)

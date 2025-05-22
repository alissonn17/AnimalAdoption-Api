# Endpoints

## Animais

| Método | Rota                        | Descrição                           |
| ------ | --------------------------- | ----------------------------------- |
| GET    | `/api/animais`              | Lista todos os animais cadastrados  |
| GET    | `/api/animais/:id`          | Retorna um animal específico por ID |
| POST   | `/api/animais`              | Cria um novo animal                 |
| PUT    | `/api/animais/:id`          | Atualiza os dados de um animal      |
| DELETE | `/api/animais/:id`          | Remove um animal do sistema         |

## Voluntários

| Método | Rota                        | Descrição                             |
| ------ | --------------------------- | ------------------------------------- |
| GET    | `/api/voluntarios`          | Lista todos os voluntários            |
| GET    | `/api/voluntarios/:id`      | Retorna um voluntário específico      |
| POST   | `/api/voluntarios`          | Cadastra um novo voluntário           |
| PUT    | `/api/voluntarios/:id`      | Atualiza os dados de um voluntário    |
| DELETE | `/api/voluntarios/:id`      | Remove um voluntário                  |

## Adotantes

| Método | Rota                        | Descrição                             |
| ------ | --------------------------- | ------------------------------------- |
| GET    | `/api/adotantes`            | Lista todos os adotantes              |
| GET    | `/api/adotantes/:id`        | Retorna um adotante específico        |
| POST   | `/api/adotantes`            | Cadastra um novo adotante             |
| PUT    | `/api/adotantes/:id`        | Atualiza os dados de um adotante      |
| DELETE | `/api/adotantes/:id`        | Remove um adotante                    |

## Eventos de Adoção

| Método | Rota                        | Descrição                             |
| ------ | --------------------------- | ------------------------------------- |
| GET    | `/api/eventos`              | Lista todos os eventos                |
| GET    | `/api/eventos/:id`          | Retorna um evento específico          |
| POST   | `/api/eventos`              | Cadastra um novo evento               |
| PUT    | `/api/eventos/:id`          | Atualiza os dados de um evento        |
| DELETE | `/api/eventos/:id`          | Remove um evento                      |

## Processos de adoção

| Método | Rota                        | Descrição                             |
| ------ | --------------------------- | ------------------------------------- |
| GET    | `/api/adocoes`              | Lista todas as solicitações de adoção |
| GET    | `/api/adocoes/:id`          | Retorna uma solicitação específica    |
| POST   | `/api/adocoes`              | Cria uma nova solicitação de adoção   |
| PUT    | `/api/adocoes/:id/analisar` | Aprova ou reprova uma solicitação     |
| DELETE | `/api/adocoes/:id`          | Exclui uma solicitação de adoção      |
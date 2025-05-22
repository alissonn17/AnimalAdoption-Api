# Models

## Animal.js

**Campos**

```json
{
  "id": "Inteiro, chave primária",
  "nome": "String (obrigatório)",
  "especie": "String (obrigatório)",
  "raca": "String (opcional)",
  "idade": "Inteiro (opcional)",
  "porte": "Enum: pequeno | médio | grande",
  "sexo": "Enum: macho | fêmea",
  "descricao": "Texto (opcional)",
  "status": "Enum: disponível | em processo | adotado (padrão: disponível)",
  "foto_url": "String (opcional)",
  "data_chegada": "Data (padrão: data atual)"
} 
```
## Adotante.js

**Campos:**

```json
{
  "id": "Inteiro, chave primária",
  "cpf": "String (11) - obrigatório, único",
  "nomeCompleto": "String - obrigatório",
  "genero": "String - opcional",
  "telefone": "String - obrigatório",
  "endereco": "String - obrigatório",
  "email": "String - obrigatório, único, formato de e-mail válido",
  "created_at": "Data de criação",
  "updated_at": "Data de atualização"
}
```

---

## Voluntario.js

**Campos:**

```json
{
  "id": "Inteiro, chave primária",
  "nome": "String - obrigatório",
  "cpf": "String (11) - obrigatório, único",
  "genero": "String - opcional",
  "endereco": "String - opcional",
  "telefone": "String - opcional"
}
```

---

## Evento.js

**Campos:**

```json
{
  "id": "Inteiro, chave primária",
  "data": "Data - obrigatório",
  "nome": "String - obrigatório",
  "endereco": "String - obrigatório",
  "responsavel": "String - obrigatório"
}
```

---

## Abrigo.js

**Campos:**

```json
{
  "nome": "String - obrigatório",
  "endereco": "String - obrigatório",
  "capacidade": "Inteiro - obrigatório",
  "created_at": "Data de criação",
  "updated_at": "Data de atualização"
}
```

---

## Adocao.js

**Campos:**

```json
{
  "id": "Inteiro, chave primária",
  "nome_adotante": "String - obrigatório",
  "contato": "String - obrigatório",
  "animal_id": "Inteiro - obrigatório (chave estrangeira para Animal)",
  "mensagem": "Texto - opcional",
  "status": "Enum: pendente | aprovada | reprovada (padrão: pendente)",
  "data_retirada": "Data - opcional (caso aprovado)",
  "hora_retirada": "String - opcional (caso aprovado)",
  "local_retirada": "String - opcional (caso aprovado)",
  "justificativa": "Texto - opcional (caso reprovado)",
  "created_at": "Data de criação",
  "updated_at": "Data de atualização"
}
```
---
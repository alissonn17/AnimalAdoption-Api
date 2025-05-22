# Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/mathpestana/AnimalAdoption-Api
   cd api-adocao-animais
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASS=postgres
   DB_NAME=adocao_animais
   DB_PORT=5432
   NODE_ENV=development
   ```

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

5. Acesse em [http://localhost:3000](http://localhost:3000)

---
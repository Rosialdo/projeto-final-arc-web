# Projeto final de ARQUITETURA E TECNOLOGIAS DE SISTEMAS WEB da UFRR

O objetivo do projeto é  implementar a camada de WebSockets (Socket.io) ao projeto Leilão de
Centavos (Next.js). Projeto esse que estava sendo desenvolvido durante as aulas da disciplina.

Deveria ter sido implemento com Prisma, e um banco de dados online de preferencia. Não consegui fazer dessa forma, eu fiz com um projeto backend com `node.js` com esse banco sendo estatico mediante a um arquivo `.JSON`

## Como executar o projeto

tendo em vista que o projeto tem duas partes uma sendo o `backend` e outra o `frontend` temos que fazer alguns passos, siga as instrições abaixo para conseguir executar o sistema.

</br>

- Primeiramente clone o repositorio:
```
git clone https://github.com/Rosialdo/projeto-final-arc-web.git
````

- Após clonar o repositorio baixe as dependencias, tanto na pasta raiz `projeto-final-arc-web` quanto na pasta `backend`:
```
npm install
````

- Para executar da forma coreta execute primeiro o seguinte comando dentro na pasta `backend`:

```
npm run dev
````

- Isso fará com que o servidor inicie, agora execute o memo comando dentro da pasta raiz `projeto-final-arc-web`:

```
npm run dev
````

## Funções executadas do projeto

- [x] Usuário logado poderá realizar um lance de R$ 0,01 em qualquer leilão ativo;

- [x] O lance deve ser realizado por emissões e recebimentos de mensagens utilizando Socket.io;

- [x] Ao realizar um lance o valor do produto deve ser atualizado para todos os usuários que estejam tendo acesso aquela tela (tela principal do sistema). 

- [ ] O produto deve ter uma data e horário prévio definido quando cadastrado, que quando chegar nesta data o leilão desse produto começa automaticamente. 

- [ ] Login 

- [x] Cadastro de usuários

- [x] Tela para que o usuário adicione lances a sua conta (simulando compra de mais lances) - Parcialmente

- [x] O usuário ao se cadastrar começa com 10 lances de bônus em seu perfil

- [ ] Autenticação

- [ ] Utilizar o Prisma no projeto

## Video de demonstração:

- [Video de explicação e demonstração do projeto](https://youtu.be/Fo8kC8XVrMc)


## Referência

Para realizar o projeto eu tentei utilizar o modelo que estavamos fazendo durante as aulas mas senti muita dificuldade de dar proseguimento dessa forma, então para concluir a tarefa eu peguei como base o Trabalho do Guilherme Bernado um aluno que fez a disciplina durante o mesmo semestre segue abaixo o repositório dele com sua implementação: 

 - [Repositório do Gulherme Bernado](https://github.com/GuilhermeBn198/Leilao-centavos-SocketIO)

# INSF - Lista Negra

Prepare-se para mergulhar em um projeto que combina lógica de programação com um toque de drama! Em nossa aplicação de Lista Negra, você poderá adicionar, editar, listar e remover pessoas da sua lista pessoal de “não tão favoritos”.

Nosso **foco** é aprimorarmos nossas habilidades na implementação de um CRUD (Criação, Leitura, Atualização e Exclusão), além da passagem de parâmetros entre telas.

![](./background.jpeg)

## Estrutura de Tabelas
```sql
DROP DATABASE IF EXISTS insfdb;
CREATE DATABASE insfdb;

USE insfdb;

CREATE TABLE tb_usuario (
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nm_usuario VARCHAR(255) NOT NULL,
    ds_senha VARCHAR(64) NOT NULL
);

CREATE TABLE tb_lista_negra (
    id_lista_negra INT AUTO_INCREMENT PRIMARY KEY,
    nm_pessoa VARCHAR(100) NOT NULL,
    ds_motivo TEXT NOT NULL,
    dt_vinganca DATE NOT NULL,
    nr_nota_odio INT NOT NULL,
    bt_perdoado BOOLEAN NOT NULL,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);
```

## Variaveis de Ambiente do Backend

```
PORTA=5010

MYSQL_HOST='localhost'
MYSQL_USER='root'
MYSQL_PORT=3306
MYSQL_PWD='rootpassword'
MYSQL_DB='insfdb'
```

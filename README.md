### Postgres / PgAdmin:
```
sudo apt-get install postgresql postgresql-contrib

psql --version 

sudo -i -u postgres

passwd postgres

sudo service postgresql restart

```
## Alterar a senha master user:postgres
```
sudo su
cd /etc/postgresql/12/main# 
gedit pg_hba.conf
```
[Alterar arquivo pg_hb.conf conforme link](https://stackoverflow.com/questions/55038942/fatal-password-authentication-failed-for-user-postgres-postgresql-11-with-pg)
```
sudo service postgresql restart
```


## [Configuração e Instalação do pgAdmin4](https://startdb.com.br/2021/05/02/instalando-pgadmin4-no-linux/)


![Configuração PostgreSQL Binary Path no pgAdmin4](https://user-images.githubusercontent.com/33269557/157717428-d9c1e79c-8183-4147-80f4-a89d74b7ff22.png)


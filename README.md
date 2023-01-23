## Instalação Git - Linux:
``` 
sudo apt-get install git
```
## <br />

## Passo a Passo Organização Cursos Repositório:
1. Cria o repositório no GitHub
2. Abre o VSCode
3. Ctrl + J 
4. cd ../ até a unidade C:/
5. git clone "endereço do repositório"
6. Criar o arquivo README.md
7. git add .
8. git commit -m "Início do Versionamento. Criação do arquivo README.md"
9. git push -u origin master

###### Upload Branch
10. git branch "barbeariaAlura" ou git checkout -b "barbeariaAlura"
11. git checkout "barbeariaAlura"
12. copiar a pasta de arquivo para a pasta do projeto
13. git add barbeariaAlura
14. git commit -m "Iníciando projeto"
15. git push -u origin barbeariaAlura

###### Clone de uma branch específica do repositório 
16. git clone -b barbeariaAlura git@github.com:jokleber85/aluraFormacaoFrontEnd.git
</br>

#### Comandos:

* Delete branch local: git branch -d localBranchName
* Delete branch remota: git push origin --delete remoteBranchName
* Antes do commit exclui as alterações: git merge --abort
* Consultar arquivos editador após commit: git show --stat COMMIT_ID


## Instalação Programas pelo Terminal: 

### Comandos:
```
df -h (Exibir Sistema Arquivos)
du -sh * (Listar pastas com tamanho dos arquivos)
du -csh ./ (Listar arquivos ocultos com tamanho dos arquivos )
ls -lha (Exibir as permissões)
ls -laf (Exibir todos os arquivos, inclusive ocultos)
rm "pasta" (Excluir arquivo)
rm -rf * (Excluir permanentemente arquivos dentro pasta)
ssh usuario@192.168.1.150 (Acesso remoto outra máquina)

sudo apt-get update 
sudo apt-get upgrade (Atualizar Ubuntu)
sudo apt purge "nome aplicativo" (Desinstalar)
sudo apt-get clean (Limpar packs .deb obsoletos por diretório)
sudo apt autoremove --purge "nome aplicativo" (Desinstalar .debian)
sudo apt-get auto-remove (Limpeza packs obsoletos)
sudo apt-get autoclean (Limpeza packs .deb obsoletos)
sudo chmod -R 777 /home/yourProjectDirectoryName (permissão editar,salvar,deletar)

history (Exibir histórico comandos digitados no terminal)
apt list --installed (Listar packages instalados)
```

### PostMan:
```
sudo snap install postman
```

### NodeJs:
```
sudo apt install npm
sudo apt install curl # version 7.68.0-1ubuntu2.6
curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
sudo apt-get install nodejs
node --version
```

### GParted:
```
sudo apt-get install gparted
```

### DBeaver: [Download](https://dbeaver.io/download/)
```
sudo dpkg -i dbeaver-ce_21.2.2_amd64.deb
```

### Gimp:
```
sudo snap install gimp
```

### Serverless:
```
curl -o- -L https://slss.io/install | bash
```

### Docker: [Download](https://docs.docker.com/engine/install/ubuntu/)
```
curl -o- -L https://slss.io/install | bash
```





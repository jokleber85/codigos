## Instalação VsCode no Ubuntu:

* Abrir o terminal: crtl + alt + T
* Colar seguinte comando: wget -c https://az764295.vo.msecnd.net/stable/940b5f4bb5fa47866a54529ed759d95d09ee80be/code_1.52.0-1607640828_amd64.deb
* Executar sequinte comando: sudo dpkg -i ~/code_*.deb; sudo apt -f install -y
## <br />

## Configurar Git/VsCode:

Vs-Code -> Contas -> Entre com uma GitHub... -> Continue -> Abrir VsCode

- Digitar (Terminal VsCode): ssh-keygen -t ed25519 -C "jo.kleber85@gmail.com"
- Abrir o arquivo de destino (C:\Users\Oficina5/.ssh/id_ed25519.pub) e copiar a key gerada
- Acessar a opção de SSH keys no site github.com
- Colar a key que deve seguir a expressão: ssh-ed25519 "key gerada" jo.kleber85@gmail.com
- Good Work!!!
## <br />

## Plugins VsCode:

* Portuguese (Brazil) Language Pack for Visual Studio Code - Microsoft
* Angular Language Service - Angular
* Angular Extension Pack - Loiane Groner
  - Angular Snippets (Version 12) - John Papa
  - EditorConfig for VS Code - EditorConfig
  - Prettier - Code formatter - Prettier
  - TSLint - Microsoft
* Material Icon Theme - Philipp Kief
* GitHub Pull Requests and IssuesPreview - GitHub
## <br />

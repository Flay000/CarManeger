Projeto full stack
Ola, O projeto Consiste em uma aplicação que cadastra carros por meio de uma API interna.
*****ATENÇÃO*****
é necessário ter instalado:
npm i cors
npm i react
npm i axios
npm i react-dom
npm i express
npm i node
npm i prisma
npm i @prisma/client



Para rodar o projeto
No seu terminal, dentro do 
arquivo LoginCar execute:
docker-compose up

Depois, tambem dentro
de LoginCar, execute:
npm run dev

em outro terminal
muda de pasta
para cd .\front\front
e execute: npm start

Quando abrir a pagina de App,
logo depois a aplicação ira cair
com o erro "Network Error"
com isso, abre outro terminal e
dento da pasta loginCar
execute: npx prisma migrate dev car

feito isso, retorne no terminal com o servidor
em erro e em App.js comente qualquer coisa, tipo:
//alo , isso fara o server reiniciar com node
e a aplicação estara pronta.


Quaisquer duvida estou a disposição!

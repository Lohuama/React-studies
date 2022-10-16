const root = document.querySelector("#root");

const t1 = React.createElement("h1", {id: "Titulo Principal"}, "Hello World"); //criando os elementos
const t2 = React.createElement("h4", {id: "subtitulo"}, "Subtitulo"); //criando os elementos

const headline = React.createElement("div", null, t1, t2)

ReactDOM.render(headline , root); //renderizando ação
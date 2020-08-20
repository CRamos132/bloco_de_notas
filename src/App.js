import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/Notas";
class App extends Component {

  constructor(){
    super();
    
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  // criarNota(titulo, texto, categoria){
  //   const novaNota = {titulo, texto, categoria};
  //   const novoArrayNotas = [...this.state.notas,novaNota]
  //   const novoEstado = {
  //     notas:novoArrayNotas
  //   }
  //   this.setState(novoEstado)
  // }

  // deletarNota(index){
  //   let arrayNotas = this.state.notas;
  //   arrayNotas.splice(index,1);
  //   this.setState({notas:arrayNotas})
  // }

  // criarCategoria(categoria) {
  //   const novasCategorias = [...this.state.categorias, categoria]
  //   const novoEstado = {
  //     ...this.state,
  //     categorias: novasCategorias
  //   }
  //   this.setState(novoEstado)
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} criarNota={this.notas.adicionarNota.bind(this.notas)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias 
            categorias={this.categorias}
            criarCategoria={this.categorias.criarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas 
          apagarNota={this.notas.apagarNotas.bind(this.notas)}
          notas={this.notas}/>
        </main>
      </section>
    );
  }
}

export default App;

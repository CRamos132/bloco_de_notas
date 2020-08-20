export default class Categorias {

    constructor(){

        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func) {

        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(inscrito => inscrito !== func)
    }

    notificar(){

        this._inscritos.forEach(inscrito => inscrito(this.categorias));
    }

    criarCategoria(categoria){

        this.categorias.push(categoria);
        this.notificar();
    }
}
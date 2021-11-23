import Contato from "../modelo/Contato";
import { ADD_CONTATO } from "./contato-actions"

const estadoInicial = {
    contatos: []
}



export default (estado = estadoInicial, action) => {
    switch (action.type){
        case ADD_CONTATO:
            const contato = new Contato (new Date().toString(), action.dadosContato.nomeContato, action.dadosContato.nroContato)
            console.log(contato + ' nome : ' +  contato.nome + '  numero  ' +contato.numero);
            return {
                contatos: [contato, ...estado.contatos]
            }
        default:
            return estado
    }
}
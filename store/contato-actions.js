export const ADD_CONTATO = 'ADD_CONTATO'

export const addContato = (nomeContato, nroContato) => {
    return {
        type: ADD_CONTATO,
        dadosContato: {
            nomeContato: nomeContato,
            nroContato: nroContato
        }
    }
}
import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import * as contatoActions from '../store/contato-actions'
import Cores from '../constantes/Cores'
import { useDispatch } from 'react-redux'
import TiraFoto from '../componentes/TiraFoto'

const NovoContatoTela = (props) => {
    const [nomeContato, setNomeContato] = useState('')
    const [nroContato, setNroContato] = useState('')

    const dispatch = useDispatch()
    const nomeContatoAlterado = (nome) => {
        setNomeContato(nome)
    }
    const nroContatoAlterado = (nro) => {
        setNroContato(nro)
    }

  {/*}  const fotoTirada = (imagemURI) => {
        setNroContato(imagemURI)
    } */}

    const adicionarContato = () => {
        console.log('numero >' +  nroContato);
        const acao = contatoActions.addContato(nomeContato, nroContato)
        // store.dispatch(acao)
        dispatch(acao)
        setNomeContato('')
        setNroContato('')
        props.navigation.goBack()

    }
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.titulo}>Nome Contato</Text>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={nomeContatoAlterado}
                    value={nomeContato}
                />
                <Text style={styles.titulo}>Numero Contato</Text>
              <TextInput 
                    style={styles.textInput} 
                    onChangeText={nroContatoAlterado}
                    value={nroContato}
                />
                
                {/* <TiraFoto
                    onFotoTirada={fotoTirada}
                />  */}
                <Button 
                    title="Salvar Contato"
                    color={Cores.primary}
                    onPress={() => adicionarContato()}
                />
            </View>
        </ScrollView>
    )
}

export default NovoContatoTela

const styles = StyleSheet.create({
    form: {
        margin: 40
    },
    titulo: {
        fontSize: 18,
        marginBottom: 12
    },
    textInput: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        marginBottom: 12,
        paddingVertical: 8
    }
})

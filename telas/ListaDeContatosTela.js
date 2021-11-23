import React from 'react'
import { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ContatoItem from '../componentes/ContatoItem'

const ListaDeContatosTela = (props) => {
    const contatos = useSelector(estado => estado.contatos.contatos)
    return (
        <FlatList 
            data={contatos}
            keyExtractor={contato => contato.id}
            renderItem={contato => (
                <ContatoItem 
                    nomeContato={contato.item.nome}
                    numeroContato={contato.item.numero}
                    onSelect={() => props.navigation.navigate('DetalhesDoLugar', {
                        nomeContato: contato.item.nome, numeroContato: contato.item.numero
                    })}
                />
            )}
        />
    )
}

export default ListaDeContatosTela

const styles = StyleSheet.create({})

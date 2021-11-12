import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const ListaDeLugaresTela = (props) => {
    const lugares = useSelector(estado => estado.lugares.lugares)
    return (
        <FlatList 
            data={lugares}
            keyExtractor={lugar => lugar.id}
            renderItem={lugar => <Text>{JSON.stringify(lugar)}</Text>}
        />
    )
}

export default ListaDeLugaresTela

const styles = StyleSheet.create({})

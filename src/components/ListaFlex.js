import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'André', nota: 9.1 },
    { id: 3, nome: 'Ana', nota: 5.4 },
    { id: 4, nome: 'Bia', nota: 6.8 },
    { id: 5, nome: 'Claudia', nota: 7.6 },
    { id: 6, nome: 'Tadeu', nota: 9.9 },
    { id: 7, nome: 'Guilherme', nota: 10.0 },
    { id: 8, nome: 'Rafael', nota: 8.8 },
    { id: 9, nome: 'Juliana', nota: 9.3 },
    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'André', nota: 9.1 },
    { id: 13, nome: 'Ana', nota: 5.4 },
    { id: 14, nome: 'Bia', nota: 6.8 },
    { id: 15, nome: 'Claudia', nota: 7.6 },
    { id: 16, nome: 'Tadeu', nota: 9.9 },
    { id: 17, nome: 'Guilherme', nota: 10.0 },
    { id: 18, nome: 'Rafael', nota: 8.8 },
    { id: 19, nome: 'Juliana', nota: 9.3 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}

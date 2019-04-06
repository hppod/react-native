import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

//USANDO EXPORT SEM DEFAULT SOU OBRIGADO A DAR NOME A FUNÇÃO

export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text>
}
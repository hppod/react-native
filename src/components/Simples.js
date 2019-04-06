import React from 'react'
import { Text } from 'react-native'

//DOIS TIPOS DE COMPONENTE
//BASEADO EM CLASSE COMO O APP.JS
//BASEADO EM FUNÇÃO, COMO SIMPLES.JS

export default function (props) {
    return <Text>{props.texto}</Text>
}
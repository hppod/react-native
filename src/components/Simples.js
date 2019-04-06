import React from 'react'
import { Text } from 'react-native'

//DOIS TIPOS DE COMPONENTE
//BASEADO EM CLASSE COMO O APP.JS
//BASEADO EM FUNÇÃO, COMO SIMPLES.JS

//PROPS É PARA RECEBER PROPRIEDADES NO COMPONENTE. ACESSA AS PROPRIEDADES QUE SÃO PASSADAS. INTERPOLAÇÃO DENTRO DA TAG TEXT

// export default function (props) {
//     return <Text>{props.texto}</Text>
// }

//UTILIZANDO ARROW FUNCTION
export default props => [
    <Text key={1}>Arrow 1: {props.texto}</Text>,
    <Text key={2}>Arrow 2: {props.texto}</Text>
]
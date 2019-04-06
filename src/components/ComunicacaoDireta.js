import React from 'react'
import { View, Text } from 'react-native'

const fonte = {
    style: {
        fontSize: 30,
        marginTop: 50
    }
}

export const Filho = props =>
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome} </Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome} </Text>
        {/* {props.children} */}
        {React.Children.map(props.children,
            c => React.cloneElement(c, { ...props, ...c.props }))}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome} </Text>
        <Pai nome='André' sobrenome={props.sobrenome}>
            <Filho nome='Ana' />
            <Filho nome='Marcela' />
            <Filho nome='Claudia' />
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Rebeca' />
            <Filho nome='Renato' />
        </Pai>
    </View>
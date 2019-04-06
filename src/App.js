import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter } from './components/Multi'

//DOIS TIPOS DE COMPONENTE
//BASEADO EM CLASSE COMO O APP.JS
//BASEADO EM FUNÇÃO, COMO SIMPLES.JS

//EXPORT DEFAULT NÃO USA CHAVES NO IMPORT
//EXPORT SEM DEFAULT USA CHAVES NO IMPORT, COM VIRGULAS SE FOREM VARIOS IMPORTS

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>App!</Text>
        {/* IMPORTANDO COMPONENTE FUNCIONAL */}
        <Simples texto="Flexível!!" />
        <ParImpar numero={20} />
        <Inverter texto='React Nativo' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  f20: {
    fontSize: 40
  }
})
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './components/Simples'

//DOIS TIPOS DE COMPONENTE
//BASEADO EM CLASSE COMO O APP.JS
//BASEADO EM FUNÇÃO, COMO SIMPLES.JS

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>App!</Text>
        {/* IMPORTANDO COMPONENTE FUNCIONAL */}
        <Simples texto="Flexível!!" />
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
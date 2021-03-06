import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import { Avo } from './components/ComunicacaoDireta'
import { TextoSincronizado } from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: () => <Flex />,
        navigationOptions: { title: 'Circulos (FlexBox)' }
    },
    ListaFlex: {
        screen: () => <ListaFlex />,
        navigationOptions: { title: 'Lista de Alunos (FlexBox)' }
    },
    TextoSincronizado: {
        screen: () => <TextoSincronizado />
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva' />,
        navigationOptions: { title: 'Familia' }
    },
    Evento: {
        screen: () => <Evento />
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Plataformas: {
        screen: () => <Plataformas />
    },
    Contador: {
        screen: () => <Contador numeroInicial={50} />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par ou Impar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível' />
    }
},
    { drawerWidth: 300 }
)
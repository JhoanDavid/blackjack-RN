import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

class Instruction extends React.Component {
    goProfile = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.incontainer}>
                <Text style={styles.title}>Objetivo del juego </Text>
                <Text style={styles.text}>El juego consiste en sumar más puntos con tus
                    cartas que el croupier sin pasarse de 21.
                    Si en las 2 primeras cartas el jugador obtiene
                    21 puntos se consigue un “blackjack”.</Text>
                <Text style={styles.title}>Botón: <Text style={styles.bet}> "APOSTAR" </Text> </Text>
                <Text style={styles.text}>Aparecerá otra ventana donde ingresaras la
                    cantidad que desea apostar durante esa mano de blackjack.</Text>
                <Text style={styles.title}>Botón: <Text style={styles.request }> "PEDIR" </Text> </Text>
                <Text style={styles.text}>Se va pedir otra carta de un valor aleatorio
                    para que se sume con las cartas que tienes en mano.</Text>
                <Text style={styles.title}>Botón: <Text style={styles.stand }> "PLANTARSE" </Text></Text>
                <Text style={styles.text}>Se detiene el juego para usted, no puede apostar
                    mas ni pedir mas cartas solo esperando la resolución del crupier, si pierde o gana.</Text>
                </View>
                <Pressable style={styles.goProfileButton} onPress={this.goProfile}>
                    <Text style={styles.back}>VOLVER</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    incontainer:{
        width:"80%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: '800',
        letterSpacing: 0.25
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:"5%"
    },
    goProfileButton: {
        marginBottom: "5%",
        borderRadius: "10px",
        width: "60%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'rgb(235, 91, 91)',
    },
    bet: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'rgb(220, 190, 80)',
    },
    request: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'rgb(37, 207, 81)',
    },
    stand: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'rgb(36, 139, 215)',
    },
    end: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'rgb(235, 91, 91)',
    },
    back: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#ffff',
    }
})

export default (Instruction);
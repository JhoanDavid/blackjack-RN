import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

class EndGame extends React.Component {

    exit = () => {
        this.props.navigation.navigate('Profile')
    }

    again = () => {
        this.props.navigation.navigate('Game')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.endGameTitle}>FIN DEL JUEGO</Text>
                <Text style={styles.textMoney}>EL DINERO GANADO ES</Text>
                <Text style={styles.textValues}>XXXX</Text>
                <Pressable style={styles.backButton} onPress={this.again}>
                    <Text style={styles.text}>VOLVER A JUGAR</Text>
                </Pressable>
                <Pressable style={styles.backButton} onPress={this.exit}>
                    <Text style={styles.text}>FINALIZAR</Text>
                </Pressable>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textMoney: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: '800',
        letterSpacing: 0.25,
        color: 'black',
        marginBottom:5,
    },
    textValues: {
        marginBottom:"5%",
        fontSize: 20,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 5,
        color: 'black',
    },
    endGameTitle: {
        marginBottom:"5%",
        fontSize: 40,
        lineHeight: 50,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'red',
    },
    container: {
        height:"100%",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    backButton: {
        marginBottom: "3%",
        borderRadius: "10px",
        width: "60%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'rgb(235, 91, 91)',
    }
})


export default (EndGame);
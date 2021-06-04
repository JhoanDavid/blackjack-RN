import React from 'react'
import { View, Text, Pressable, StyleSheet, Modal, TextInput } from 'react-native'
import GameViewController from './game.viewController'

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			moneyBet: 0,
			amount:0
		}
	}

	componentDidMount(){
	//this.newGame();
	}

	betMoney = (money) => {
		this.setState({ moneyBet: money })
		console.log(money);
	}

	bet = () => {
		this.setState({ showModal: false });
	}

	
	endGame = () => {
		this.props.navigation.navigate('EndGame')
	}

	render() {
		const {
			hit,
			nextTurn,
			newGame
        } = this.props
		return (
			<View style={styles.container}>
				<View style={{ flexDirection: "column" }}>
					<View
						style={styles.viewGame}>
						<Text style={styles.textPlayers}>Crupier</Text>
						<View style={styles.boxCards}>
							{/* Lo mejor es colocar un map de un array aquí 
							arr.map( (data, i) => {
								<ListItem key={i} image={data}/>
							}) */}
						</View>
						<Text style={styles.textValues}>Valor: XX</Text>
					</View>
					<View
						style={styles.viewGame}>
						<Text style={styles.textPlayers}>player.name</Text>
						<Text style={styles.textValues}>Dinero: {this.state.amount}       Apuesta:{this.state.moneyBet}</Text>
						<View style={styles.boxCards}>
							{/* Lo mejor es colocar un map de un array aquí 
							arr.map( (data, i) => {
								<ListItem key={i} image={data}/>
							}) */}
						</View>
						<Text style={styles.textValues}>Valor: XX</Text>
					</View>
				</View>
				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.showModal}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Ingrese la cantidad que desea apostar</Text>
							<TextInput
								style={styles.input}
								onChangeText={this.betMoney}
								placeholder="Apuesta"
								keyboardType="numeric"
							/>
							<Pressable
								style={[styles.betButton]}
								onPress={this.bet}>
								<Text style={styles.text}>ACEPTAR</Text>
							</Pressable>
						</View>
					</View>
				</Modal>
				<Pressable style={styles.betButton} onPress={() => { this.setState({ showModal: true }) }}>
					<Text style={styles.text}>APOSTAR</Text>
				</Pressable>
				<Pressable style={styles.cardRequestButton} onPress={this.cardRequest}>
					<Text style={styles.text}>PEDIR</Text>
				</Pressable>
				<Pressable style={styles.standButton} onPress={this.stand}>
					<Text style={styles.text}>PLANTARSE</Text>
				</Pressable>
				<Pressable style={styles.endGameButton} onPress={this.endGame}>
					<Text style={styles.text}>FINALIZAR</Text>
				</Pressable>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	input: {
		borderColor: "rgba(0, 0, 0, 0.15)",
		borderRadius: 5,
		width: "100%",
		height: 40,
		margin: 12,
		borderWidth: 1,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		width: "85%",
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	modalText: {
		fontSize:10,
		fontWeight:'700',
		marginBottom: 15,
		textAlign: "center"
	},
	viewGame: {
		flexDirection: "column",
		height: 100,
		padding: 20,
		marginBottom: "20%",
		marginTop: "10%",
		justifyContent: 'center',
		alignItems: 'center'
	},
	boxCards: {
		backgroundColor: "rgba(0, 0, 0, 0.15)",
		flexDirection: "row",
		height: "200%",
		width: "100%",
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textPlayers: {
		fontSize: 20,
		fontWeight: '800',
		letterSpacing: 0.6
	},
	textValues: {
		fontSize: 15,
		fontWeight: 'bold',
		letterSpacing: 0.25
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	betButton: {
		marginBottom: "3%",
		borderRadius: "10px",
		width: "60%",
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'rgb(220, 190, 80)',
	},
	cardRequestButton: {
		marginBottom: "3%",
		borderRadius: "10px",
		width: "60%",
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'rgb(37, 207, 81)',
	},
	standButton: {
		marginBottom: "3%",
		borderRadius: "10px",
		width: "60%",
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'rgb(36, 139, 215)',
	},
	endGameButton: {
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


export default (Game);
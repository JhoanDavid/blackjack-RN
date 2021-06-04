import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../../Firebase'
import { UserImg } from '../../assets'

class Profile extends React.Component {
	handleSignout = () => {
		Firebase.auth().signOut()
		this.props.navigation.navigate('Login')
	}

	handleInstructions = () => {
		this.props.navigation.navigate('Instructions')
	}

	handleGame = () => {
		this.props.navigation.navigate('Game')
	}

	resetMoney = () => {

	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={UserImg}
					style={styles.imgUser} />
				<Text style={styles.textMoney}>Dinero: {this.props.user.money}</Text>
				<Text style={styles.textPlayer}>{this.props.user.email}</Text>
				<Pressable style={styles.gameButton} onPress={this.handleGame}>
					<Text style={styles.text}>JUGAR</Text>
				</Pressable>
				<Pressable style={styles.instructionButton} onPress={this.handleInstructions}>
					<Text style={styles.text}>INSTRUCCIONES</Text>
				</Pressable>
				<Pressable style={styles.moneyButton} onPress={this.resetMoney}>
					<Text style={styles.text}>REINICIAR DINERO</Text>
				</Pressable>
				<Pressable style={styles.signoutButton} onPress={this.handleSignout}>
					<Text style={styles.text}>CERRAR SESIÓN</Text>
				</Pressable>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	imgUser:{
		width: 150,
		height: 150,
		marginBottom: "5%"
	},
	textMoney: {
		fontSize: 20,
		fontWeight: '800',
		letterSpacing: 0.6
	},
	textPlayer: {
		marginBottom: "2%",
		fontSize: 15,
		fontWeight: 'bold',
		letterSpacing: 0.4
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
	gameButton: {
		marginBottom: "5%",
		width: "60%",
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'rgb(37, 207, 81)',
	},
	instructionButton: {
		marginBottom: "5%",
		width: "60%",
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'rgb(36, 139, 215)',
	},
	moneyButton: {
		marginBottom: "5%",
		width: "60%",
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'rgb(220, 190, 80)',
	},
	signoutButton: {
		marginBottom: "5%",
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

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)

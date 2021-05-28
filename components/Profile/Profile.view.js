import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../../Firebase'

class Profile extends React.Component {
	handleSignout = () => {
		Firebase.auth().signOut()
		this.props.navigation.navigate('Login')
	}

	handleInstructions=()=>{
		this.props.navigation.navigate('Instructions')
	}

	handleGame=()=>{
		this.props.navigation.navigate('Game')
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Dinero: 5000</Text>
				<Text>{this.props.user.email}</Text>
				<Button title='Click para empezar' onPress={this.handleGame} />
				<Button title='Instrucciones' onPress={this.handleInstructions} />
				<Button title='Reiniciar dinero' onPress={this.handleSignout} />
				<Button title='Cerrar sesion' onPress={this.handleSignout} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)

import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser, loginFacebook } from '../actions/user'
import Firebase from '../Firebase'

class Login extends React.Component {
	componentDidMount = () => {
		Firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.props.getUser(user.uid)
				if (this.props.user != null) {
					this.props.navigation.navigate('Profile')
				}
			}
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.email}
					onChangeText={email => this.props.updateEmail(email)}
					placeholder='Correo'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.password}
					onChangeText={password => this.props.updatePassword(password)}
					placeholder='Contraseña'
					secureTextEntry={true}
				/>
				<TouchableOpacity style={styles.button} onPress={() => this.props.login()}>
					<Text style={styles.buttonText}>Iniciar sesión</Text>
				</TouchableOpacity>
				<Button
					title="Registrarse"
					onPress={() => this.props.navigation.navigate('Signup')}
				/>
				<Button
					title="Iniciar sesión con Facebook"
					onPress={() => this.props.loginFacebook()}
				/>
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
	},
	inputBox: {
		width: '85%',
		margin: 10,
		padding: 15,
		fontSize: 16,
		borderColor: '#d3d3d3',
		borderBottomWidth: 1,
		textAlign: 'center'
	},
	button: {
		marginTop: 30,
		marginBottom: 20,
		paddingVertical: 5,
		alignItems: 'center',
		backgroundColor: '#F6820D',
		borderColor: '#F6820D',
		borderWidth: 1,
		borderRadius: 5,
		width: 200
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff'
	},
	buttonSignup: {
		fontSize: 12
	}
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, login, loginFacebook ,getUser }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)

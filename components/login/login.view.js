import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Pressable,Image} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser, loginFacebook} from '../../actions/user'
import { Ionicons } from '@expo/vector-icons';
import Firebase from '../../Firebase'
import { BlackJack } from '../../assets'

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
				<Image source={BlackJack}
					style={styles.imgUser} />
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
				<Text style={styles.divider}>_____________________________________________</Text>
				<Pressable
					style={styles.buttonSignup}
					onPress={() => this.props.navigation.navigate('Signup')}>
					<Text style={styles.textFb}>Registrarse <Ionicons name="person-circle" size={18} color="black" /></Text>
				</Pressable>
				<Pressable
					style={styles.buttonFacebook}
					onPress={() => this.props.loginFacebook()}
				>
					<Text style={styles.textFb}>Iniciar sesión con Facebook <Ionicons name="logo-facebook" size={18} color="blue" /></Text>

				</Pressable>
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
	imgUser: {
		width: "50%",
		height: "25%",
		marginBottom: "5%"
	},
	divider: {
		width: "80%",
		color: 'rgba(0,0,0,0.15)',
		marginBottom: "5%",
		marginTop: "5%"
	},
	inputBox: {
		width: '85%',
		margin: 10,
		padding: 15,
		fontSize: 16,
		borderColor: '#d3d3d3',
		borderBottomWidth: 1,
		textAlign: 'left'
	},
	button: {
		marginTop: "10%",
		marginBottom: "5%",
		borderRadius: 4,
		width: "60%",
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		elevation: 3,
		backgroundColor: '#F6820D',
		borderColor: 'rgba(0, 0, 0,0.20)',
		borderWidth: 1,
	},
	buttonFacebook: {
		marginBottom: "5%",
		borderRadius: 4,
		width: "60%",
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		elevation: 3,
		backgroundColor: '#ffff',
		borderColor: 'rgba(36, 139, 215,0.50)',
		borderWidth: 1,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff'
	},
	textFb: {
		fontSize: 15,
		fontWeight: "bold",
		color: "black"
	},
	buttonSignup: {
		marginBottom: "5%",
		borderRadius: 4,
		width: "60%",
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		elevation: 3,
		backgroundColor: '#ffff',
		borderColor: 'rgba(0, 0, 0,0.15)',
		borderWidth: 1,
	}
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, login, loginFacebook, getUser }, dispatch)
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

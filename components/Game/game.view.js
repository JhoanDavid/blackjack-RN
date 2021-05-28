import React from 'react'
class Game extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Cripier</Text>
				<TextInput/>
                <Text>Tu</Text>
                <TextInput/>
				<Button
					title="Apostar"
				/>
                <Button
					title="Pedir"
				/>
                <Button
					title="Plantarse"
				/>
                <Button
					title="Finalizar"
				/>
			</View>
		)
	}
}
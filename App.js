import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { icons, COLORS, SIZES } from './constants';

// Screens
import { Onboarding, DestinationDetail } from './screens';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: 'transparent',
	},
};

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator initialRouteName={''}>
				{/* Screens */}
				<Stack.Screen
					name='Onboarding'
					component={Onboarding}
					options={{
						title: null,
						headerStyle: {
							backgroundColor: COLORS.white,
						},
						headerLeft: null,
						headerRight: () => (
							<TouchableOpacity
								style={{ marginRight: SIZES.padding }}
								onPress={() => console.log('Pressed')}
							>
								<Image
									source={icons.barMenu}
									resizeMode='contain'
									style={{ width: 25, height: 25 }}
								/>
							</TouchableOpacity>
						),
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

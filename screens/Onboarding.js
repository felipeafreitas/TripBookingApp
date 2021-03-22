import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableOpacity,
	LinearGradient,
} from 'react-native';
import { COLORS, FONTS, images, SIZES } from '../constants';

const Onboarding = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Image
					source={images.onboardingImage}
					resizeMode='contain'
					style={{ width: '100%', height: '100%' }}
				/>
			</View>

			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
					<Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
					<Text
						style={{
							color: COLORS.gray,
							marginTop: SIZES.padding,
							textAlign: 'center',
							...FONTS.body3,
						}}
					>
						Ease solution to buy tickets for your travel, business trips,
						transportation, lodging and culinary
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
});

export default Onboarding;

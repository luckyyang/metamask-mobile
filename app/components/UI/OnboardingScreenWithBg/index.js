import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { colors } from '../../../styles/common';
import DeviceSize from '../../../util/DeviceSize';

const styles = StyleSheet.create({
	flex: {
		flex: 1,
		backgroundColor: colors.white
	},
	wrapper: {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		position: 'absolute',
		paddingTop: DeviceSize.isIphoneX() ? 70 : 30,
		borderTopWidth: 0,
		borderColor: colors.white,
		backgroundColor: colors.white,
		flex: 1,
		width: null,
		height: null
	}
});

const images = {
	a: require('../../../images/welcome-bg1.jpg'),
	b: require('../../../images/welcome-bg2.jpg')
};

const OnboardingScreenWithBg = props => (
	<View style={styles.flex}>
		<ImageBackground source={images[props.screen]} style={styles.wrapper} resizeMode={'stretch'}>
			{props.children}
		</ImageBackground>
	</View>
);

OnboardingScreenWithBg.propTypes = {
	/**
	 * String specifying the image
	 * to be used
	 */
	screen: PropTypes.string,
	/**
	 * Children components of the GenericButton
	 * it can be a text node, an image, or an icon
	 * or an Array with a combination of them
	 */
	children: PropTypes.any
};

export default OnboardingScreenWithBg;

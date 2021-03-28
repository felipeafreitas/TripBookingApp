import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/';
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
	showLabel: false,
	style: {
		height: 90,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.53,
		shadowRadius: 13.97,

		elevation: 21,
	},
};

const Tabs = () => {
	return <Tab.Navigator></Tab.Navigator>;
};

export default Tabs;

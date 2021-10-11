import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { RNDNavigator } from './RNDNavigator';
import CustomSidebarMenu from './CustomSidebarMenu';

export const AppDrawerNavigator = createDrawerNavigator({

    Home: {screen: RNDNavigator}
},
 {contentComponent: CustomSidebarMenu},
 {initialRouteName: 'Home'}
)

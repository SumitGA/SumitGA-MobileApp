import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import base from '../styles/base';
import {Image} from 'react-native';

const MenuContent: React.FunctionComponent<DrawerContentComponentProps> = (
  props
) => {
  return (
    <DrawerContentScrollView {...props}>
      <Image 
        style={base.bannerImage}
        resizeMode='cover'
        source={require('../../assets/images/drawerHeader.jpeg')}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default MenuContent;
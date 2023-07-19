import React from 'react';
import { Navbar, NavbarItem } from './style';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

const NavigationBar = ({ navigation }) => {
  console.log(navigation);
  return (
    <Navbar>
      <NavbarItem>
        <Feather name="home" size={24} color="black" onPress={() => navigation.navigate('Home')} />
      </NavbarItem>
      <NavbarItem>
        <MaterialIcons
          name="cleaning-services"
          size={24}
          color="black"
          onPress={() => navigation.navigate('Services')}
        />
      </NavbarItem>
      <NavbarItem>
        <AntDesign name="message1" size={24} color="black" onPress={() => navigation.navigate('Message')} />
      </NavbarItem>
      <NavbarItem>
        <AntDesign name="user" size={24} color="black" onPress={() => navigation.navigate('Profile')} />
      </NavbarItem>
    </Navbar>
  );
};

export default NavigationBar;

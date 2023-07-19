import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import {
  StyledContainer,
  Navbar,
  NavbarItem,
  SelectServices,
  Topnav,
  SelectServicesCard,
  SelectServicesCardText,
  ServicesRow,
 
  ServiceImage,
  HeadingTitle,
  LocationAddress,
  TopNavHeading,
} from '../components/style';

import { AntDesign, MaterialIcons, Feather, Entypo, Ionicons } from '@expo/vector-icons';
import NavigationBar from '../components/NavigationBar';


const Services = ({navigation}) => {
  return (
    <StyledContainer home={true}>
      <Topnav>
        {/* <TopNavHeading>Services</TopNavHeading> */}
      </Topnav>

      <ScrollView>

        <SelectServices>
          <ServicesRow>
            <SelectServicesCard onPress={() => navigation.navigate('ServicerList')}>
              <ServiceImage source={require('./../assets/img/housekeeper.png')} />
              <SelectServicesCardText>Cleaning</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard onPress={() => navigation.navigate('ServicerList')}>
              <ServiceImage source={require('./../assets/img/plumber.png')} />
              <SelectServicesCardText>Plumber</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard onPress={() => navigation.navigate('ServicerList')}>
              <ServiceImage source={require('./../assets/img/carpenter.png')} />
              <SelectServicesCardText>Carpenter</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard onPress={() => navigation.navigate('ServicerList')}>
              <ServiceImage source={require('./../assets/img/electrician.png')} />
              <SelectServicesCardText>Electrican</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard onPress={() => navigation.navigate('ServicerList')}>
              <ServiceImage source={require('./../assets/img/painter.png')} />
              <SelectServicesCardText>Painting</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard onPress={() => navigation.navigate('ServicerList')}>
              <ServiceImage source={require('./../assets/img/carpenter.png')} />
              <SelectServicesCardText>Carpenter</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard onPress={() => navigation.navigate('ServicerList')}>
              <ServiceImage source={require('./../assets/img/electrician.png')} />
              <SelectServicesCardText>Electrican</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard onPress={() => navigation.navigate('ServicerList')}>
              <ServiceImage source={require('./../assets/img/painter.png')} />
              <SelectServicesCardText>Painting</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard >
              <ServiceImage source={require('./../assets/img/painter.png')} />
              <SelectServicesCardText onPress={() => navigation.navigate('ServicerList')}>Painting</SelectServicesCardText>
            </SelectServicesCard>
          </ServicesRow>
        </SelectServices>

      </ScrollView>

      <NavigationBar navigation={navigation} />

    </StyledContainer>
  );
};

export default Services;

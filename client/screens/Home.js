import React from 'react';
import {
  StyledContainer,
  ProfileImage,
  LocationText,
  NavbarItem,
  SelectServices,
  SelectServicesTitle,
  Topnav,
  SelectServicesCard,
  SelectServicesCardText,
  ServicesRow,
  NotificationIcon,
  NavSearchBar,
  TopItem,
  SearchTextInput,
  ServiceImage,
  HeadingTitle,
  TopNavTitle,
  LocationAddress,
} from '../components/style';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign, MaterialIcons, Feather, Entypo, Ionicons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import BestOffers from '../components/BestOffers';
import NavigationBar from '../components/NavigationBar';

const Home = ({ navigation }) => {
  return (
    <StyledContainer home={true}>
      <Topnav>
        <TopItem>
          <LocationText>
            <Entypo name="location" size={30} color="white" />
            <LocationAddress> 45A, Green lane colombo-13</LocationAddress>
          </LocationText>
          <NotificationIcon>
            <Ionicons name="notifications" size={30} color="white" />
          </NotificationIcon>
        </TopItem>
        <NavSearchBar>
          <SearchTextInput placeholder="Search" />
        </NavSearchBar>
      </Topnav>

      <ScrollView>
        <Carousel />

        <SelectServices>
          <HeadingTitle>Services</HeadingTitle>
          <ServicesRow>
            <SelectServicesCard>
              <ServiceImage source={require('./../assets/img/housekeeper.png')} />
              <SelectServicesCardText>Cleaning</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard>
              <ServiceImage source={require('./../assets/img/plumber.png')} />
              <SelectServicesCardText>Plumber</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard>
              <ServiceImage source={require('./../assets/img/carpenter.png')} />
              <SelectServicesCardText>Carpenter</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard>
              <ServiceImage source={require('./../assets/img/electrician.png')} />
              <SelectServicesCardText>Electrican</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard>
              <ServiceImage source={require('./../assets/img/painter.png')} />
              <SelectServicesCardText>Painting</SelectServicesCardText>
            </SelectServicesCard>
            <SelectServicesCard>
              <AntDesign name="plus" size={34} color="black" onPress={() => navigation.navigate('Services')} />
              <SelectServicesCardText>More</SelectServicesCardText>
            </SelectServicesCard>
          </ServicesRow>
        </SelectServices>

        <BestOffers />
      </ScrollView>

      <NavigationBar navigation={navigation} />
    </StyledContainer>
  );
};

export default Home;

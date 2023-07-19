import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import {
  StyledContainer,
  Topnav,
  ServiceUser,
  ServiceUserImage,
  ServiceUserImg,
  ServiceuserContent,
  ServiceUserName,
  ServiceUserRating,
  ServiceUserWork,
  ServiceUserHire,
  ServiceUserBtn,
  ButtonText,
  StyledButton,
} from '../components/style';
import NavigationBar from '../components/NavigationBar';

const ServicerList = ({navigation}) => {
  return (
    <StyledContainer home={true}>
      <Topnav>{/* <TopNavHeading>Services</TopNavHeading> */}</Topnav>

      <ScrollView>
        <ServiceUser>
          <ServiceUserImage>
            <ServiceUserImg resizeMode="cover" source={require('./../assets/img/cleaning.png')} />
          </ServiceUserImage>

          <ServiceuserContent>
            <ServiceUserName>Mohamed Ali</ServiceUserName>
            <ServiceUserRating>4.5 rating (4k)</ServiceUserRating>
            <ServiceUserWork>Painter</ServiceUserWork>
          </ServiceuserContent>

          <ServiceUserHire>
            <StyledButton>
              <ButtonText onPress={() => navigation.navigate('LabourProfile')}>$30/hr</ButtonText>
            </StyledButton>
          </ServiceUserHire>
        </ServiceUser>

        <ServiceUser>
          <ServiceUserImage>
            <ServiceUserImg resizeMode="cover" source={require('./../assets/img/cleaning.png')} />
          </ServiceUserImage>

          <ServiceuserContent>
            <ServiceUserName>Mohamed Ali</ServiceUserName>
            <ServiceUserRating>4.5 rating (4k)</ServiceUserRating>
            <ServiceUserWork>Painter</ServiceUserWork>
          </ServiceuserContent>

          <ServiceUserHire>
            <StyledButton>
              <ButtonText>$30/hr</ButtonText>
            </StyledButton>
          </ServiceUserHire>
        </ServiceUser>

        <ServiceUser>
          <ServiceUserImage>
            <ServiceUserImg resizeMode="cover" source={require('./../assets/img/cleaning.png')} />
          </ServiceUserImage>

          <ServiceuserContent>
            <ServiceUserName>Mohamed Ali</ServiceUserName>
            <ServiceUserRating>4.5 rating (4k)</ServiceUserRating>
            <ServiceUserWork>Painter</ServiceUserWork>
          </ServiceuserContent>

          <ServiceUserHire>
            <StyledButton>
              <ButtonText>$30/hr</ButtonText>
            </StyledButton>
          </ServiceUserHire>
        </ServiceUser>

        <ServiceUser>
          <ServiceUserImage>
            <ServiceUserImg resizeMode="cover" source={require('./../assets/img/cleaning.png')} />
          </ServiceUserImage>

          <ServiceuserContent>
            <ServiceUserName>Mohamed Ali</ServiceUserName>
            <ServiceUserRating>4.5 rating (4k)</ServiceUserRating>
            <ServiceUserWork>Painter</ServiceUserWork>
          </ServiceuserContent>

          <ServiceUserHire>
            <StyledButton>
              <ButtonText>$30/hr</ButtonText>
            </StyledButton>
          </ServiceUserHire>
        </ServiceUser>
      </ScrollView>

      <NavigationBar navigation={navigation} />
    </StyledContainer>
  );
};

export default ServicerList;

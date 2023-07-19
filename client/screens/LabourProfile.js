import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  ButtonContainer,
  Container,
  IconButton,
  LabourButtonText,
  LabourProfileImage,
  LabourSection,
  ProfileBio,
  ProfileDetails,
  ProfileName,
  ReviewText,
  ServiceReview,
  StyledContainer,
  Topnav,
} from '../components/style';
import { Ionicons } from '@expo/vector-icons';

const LabourProfile = () => {
  const handleCall = () => {
    // Handle call functionality
    console.log('Call button pressed');
  };

  const handleMessage = () => {
    // Handle message functionality
    console.log('Message button pressed');
  };

  const handleBookNow = () => {
    // Handle book now functionality
    console.log('Book Now button pressed');
  };

  return (
    <StyledContainer home={true}>
       <Topnav>
        {/* <TopNavHeading>Services</TopNavHeading> */}
      </Topnav>
      <LabourProfileImage source={require('./../assets/img/cleaning.png')} />
      <LabourSection>
        <ProfileName>John Doe</ProfileName>
        <ProfileBio>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac magna id velit accumsan accumsan ac eget
          elit.
        </ProfileBio>
        <ProfileDetails>Skills: Carpentry, Furniture Repair</ProfileDetails>
        <ProfileDetails>Experience: 5 years</ProfileDetails>
        <ProfileDetails>Availability: Monday to Friday, 9 AM - 5 PM</ProfileDetails>

        <ButtonContainer>
          <IconButton >
            <Ionicons name="call" size={20} color="#fff" />
            <LabourButtonText>Call</LabourButtonText>
          </IconButton>
          <IconButton >
            <Ionicons name="chatbubbles" size={20} color="#fff" />
            <LabourButtonText>Message</LabourButtonText>
          </IconButton>
        </ButtonContainer>

        <ServiceReview>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Service Reviews</Text>
          <ReviewText>Great service! Highly recommended.</ReviewText>
        </ServiceReview>

        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#007bff',
              padding: 10,
              borderRadius: 5,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontSize: 16 }}>Book Now</Text>
          </View>
        </TouchableOpacity>
      </LabourSection>
    </StyledContainer>
  );
};

export default LabourProfile;

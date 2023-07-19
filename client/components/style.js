import styled, { createGlobalStyle } from "styled-components";
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Button } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;


// export const GlobalStyle = createGlobalStyle`
//   @font-face {
//     font-family: 'Poppins';
//     src: url(${Poppins}) format('truetype');
//   }
  
//   body {
//     font-family: 'Poppins', sans-serif;
//   }
// `;


// colors
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#00557F",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${Colors.primary};

  ${(props) =>
    props.home &&
    `
    padding: 0px;
    padding-top: 0px;
  `}
`;

export const InnerContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-top: 20px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.brand};
  padding: 10px;

  ${(props) =>
    props.home &&
    `
    font-size: 35px;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) =>
    props.home &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) =>
    props.google == true &&
    `
    background-color: ${green};
    flex-direction: row;
    justify-content: center;
  `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${(props) => (props.type == "SUCCESS" ? green : red)};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;

export const Topnav = styled(View)`
 
  padding: 80px 15px 15px;
  background-color:#00557F;
  color: #fff;
`;

export const ProfileImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const LocationAddress = styled.Text`
padding-left: 6px;
color: #fff;
font-weight:bold;
`;


export const TopNavTitle = styled.Text`
font-size:20px;
color: #fff;
font-weight:bold;
`;

export const TopNavHeading = styled.Text`
color: #fff;
font-weight:bold;
font-size:25px;
`;


export const TopItem = styled(View)`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
`;

export const LocationText = styled(View)`
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const NotificationIcon = styled(View)`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const NavSearchBar = styled(View)`

`;

export const SearchTextInput = styled(TextInput)`
width: 100%;
height: 50px;
background-color:#fff;
border-radius:6px;
padding:5px 10px 5px 15px;
margin-top: 10px;
font-size: 16px;
`;

export const CarouselView = styled(View)`
  margin: 20px 0;
`;

export const Navbar = styled(View)`
  height: 50px;
  background-color: #f2f2f2;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-horizontal: 20px;
`;

export const NavbarItem = styled(Text)`
  font-size: 16px;
`;

export const HeadingTitle = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  padding: 0px 15px 10px;
`;

export const SelectServices = styled(ScrollView)`
  margin-bottom: 20px;
`;

export const ServicesRow = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  flex-wrap: wrap;
  width:100%;
`;
export const SelectServicesTitle = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ServiceImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

export const SelectServicesCard = styled(View)`
  width: 100px;
  height: 105px;
  background-color: #fff;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  elevation: 5; 
`;

export const SelectServicesCardText = styled(Text)`
  margin-top: 5px;
  text-align: center;
`;

export const ServiceUser = styled(View)`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
background-color:#eee;
margin: 10px 10px 5px 10px;
padding: 10px 10px;
border-radius: 10px;
`;

export const ServiceUserImage = styled(View)`
width: 100px;
height: 100px;
border-radius: 6px;
`;

export const ServiceUserImg = styled(Image)`
width: 100%;
height: 100%;
`;

export const ServiceuserContent = styled(View)`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`;

export const ServiceUserName = styled(Text)`
font-size: 16px;
font-weight: bold;
`;

export const ServiceUserRating = styled(Text)``;

export const ServiceUserWork = styled(Text)`
color: #7895CB;
font-weight: bold;
`;

export const ServiceUserHire = styled(View)``;

export const ServiceUserBtn = styled(Button)``;

// labour profile
export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f2f2f2;
`;

export const LabourProfileImage = styled.Image`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const LabourSection = styled.View`
    padding: 25px;
`;

export const ProfileName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProfileBio = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ProfileDetails = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const IconButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
`;

export const LabourButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 5px;
`;

export const ServiceReview = styled.View`
  margin-bottom: 20px;
`;

export const ReviewText = styled.Text`
  font-size: 16px;
`;
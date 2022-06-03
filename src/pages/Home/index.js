import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import {
  StyledContainer,
  InnerContainer,
} from "../../components/styles/BaseConteinerStyles";

import { ButtonMain, ButtonGroup } from "../../components/styles/ButtonStyles";

import { Title, ButtonText } from "../../components/styles/TextStyles";

const Home = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <Image source={require("../../assets/Img/LogoIfap.png")} />
        <Title> Menu Principal</Title>
        <ButtonGroup>
          <ButtonMain onPress={() => navigation.navigate("Calculator")}>
            <ButtonText>Calculadora</ButtonText>
          </ButtonMain>
          <ButtonMain onPress={() => navigation.navigate("Content")}>
            <ButtonText>Conteudo</ButtonText>
          </ButtonMain>
        </ButtonGroup>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Home;

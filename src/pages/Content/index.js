import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyledContainer,
  InnerContainer,
} from "../../components/styles/BaseConteinerStyles";

import { Title } from "../../components/styles/TextStyles";

const Home = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <Title> Em breve</Title>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Home;

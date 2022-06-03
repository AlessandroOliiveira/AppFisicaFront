import React from "react";

import {
  StyledContainer,
  InnerContainer,
} from "../../components/styles/BaseConteinerStyles";

import { ButtonText } from "../../components/styles/TextStyles";
import { Button, ButtonGroup } from "../../components/styles/ButtonStyles";

const Calculator = ({ navigation }) => {
  return (
    <StyledContainer>
      <InnerContainer>
        <ButtonGroup>
          <Button onPress={() => navigation.navigate("CinematicaUV")}>
            <ButtonText>Cinematica Escalar</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("")}>
            <ButtonText></ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Content")}>
            <ButtonText></ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Content")}>
            <ButtonText></ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Content")}>
            <ButtonText></ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Content")}>
            <ButtonText></ButtonText>
          </Button>
      
       </ButtonGroup>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Calculator;

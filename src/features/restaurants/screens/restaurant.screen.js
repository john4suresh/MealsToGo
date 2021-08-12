import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const ListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
  background-color: blue;
`;

export const RestaurantScreen = () => {
  return (
    <SafeAreaContainer>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeAreaContainer>
  );
};

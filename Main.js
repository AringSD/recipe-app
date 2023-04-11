import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, FlatList, ImageBackground, TouchableOpacity } from "react-native";
import SearchB from "./Screens/Search";
import React from "react";

import recipeData from "./recipeData";


export default function Main({ navigation }) {
  const [query, setQuery] = React.useState("");

  const filteredRecipe = recipeData.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ImageBackground 
    source={require('./assets/backgroundImage.jpg')}
    style={styles.backgroundImage}
    >
    
      <SafeAreaView style ={{ margin: 15, backgroundColor:'white', paddingHorizontal: 15}}> 
        <StatusBar style="auto" />
        <SearchB
          query={query}
          setQuery={setQuery}
        />
        <FlatList
          data={filteredRecipe}
          renderItem={({ item }) => (
            <TouchableOpacity  onPress= {()=> navigation.navigate('Recipe')} style={{ backgroundColor: "grey", padding: 5, marginBottom: 10 }}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaView>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  backgroundImage:{
    flex:1, 
    justifyContent: 'center'
  }
});

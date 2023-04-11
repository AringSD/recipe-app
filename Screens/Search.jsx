import React from "react";
import { Appbar } from "react-native-paper";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SearchB({ query, setQuery }) {
  return (
    <View style={styles.container}>

      <View style={{ alignItems: "flex-end", paddingBottom: 10 }}>
        <Icon name="heart" size={25} color="#900" />
      </View>

      <View style={styles.search}>
        <TextInput
          placeholder="Search..."
          value={query}
          onChangeText={setQuery}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#900",
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}
          onPress={() => console.log("Button pressed")}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}> Go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
   
  },
  search: {
    paddingLeft: 15,
    borderWidth: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

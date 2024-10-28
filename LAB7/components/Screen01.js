import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";

export default function Screen01({ navigation }) {
  const [name, setName] = React.useState("");

  function checkName() {
    if (name.trim() === "") {
      return false;
    }

    const vietnameseNameRegex = /^[\p{L}\s]+$/u;

    if (!vietnameseNameRegex.test(name)) {
      return false;
    }

    return true;
  }

  const handleGetStarted = () => {
    if (checkName()) {
      navigation.navigate("Screen02", { name });
    } else {
      Alert.alert("Thông báo", "Vui lòng điền đúng tên của bạn");
    }
  };

  return (
    <View
      style={{
        marginTop: 50,
        marginHorizontal: 40,
      }}>
      <View
        style={{
          paddingVertical: 50,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Image
          source={{ uri: "https://i.imgur.com/zUH5KSs.png" }}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#00BED1",
          }}>
          MANAGE YOUR
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#00BED1",
          }}>
          TASK
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F2F2F2",
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          marginVertical: 40,
        }}>
        <Feather
          name="mail"
          size={24}
          color="#a1a1a1"
          style={{
            marginRight: 10,
          }}
        />
        <TextInput
          placeholder="Enter your name"
          style={{
            flex: 1,
          }}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View
        style={{
          marginVertical: 40,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <TouchableOpacity
          style={{
            width: "50%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00BED1",
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => handleGetStarted()}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}>
            GET STARTED
          </Text>
          <AntDesign
            name="arrowright"
            size={24}
            color="white"
            style={{
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

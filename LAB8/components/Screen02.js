import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome6,
} from "@expo/vector-icons";
import React from "react";
import { View, Text, Button, Image, TouchableOpacity, TextInput, FlatList } from "react-native";

export default function Screen02({ navigation, route = {} }) {
  const { name } = route.params || {}; // Handles undefined route.params

  const [search, setSearch] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    fetch("https://671107fc4eca2acdb5f34d5b.mockapi.io/test/tasks")
      .then((response) => response.json())
      .then((json) => setTasks(json))
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteTask = (id) => {
    fetch(`https://671107fc4eca2acdb5f34d5b.mockapi.io/test/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
      })
      .catch((error) => console.error(error));
  };

  const handleSearch = (text) => {
    return tasks.filter((task) => task.name.toLowerCase().includes(text.toLowerCase()));
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#40A263",
        borderRadius: 5,
        marginVertical: 5,
      }}>
      <MaterialCommunityIcons
        name="clipboard-check-outline"
        size={24}
        color="#40A263"
        style={{ marginHorizontal: 10 }}
      />
      <Text>{item.name}</Text>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
          <AntDesign
            name="delete"
            size={24}
            color="#E06F70"
            style={{ paddingVertical: 10, paddingHorizontal: 6 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Edit action")}>
          <Feather
            name="edit-3"
            size={24}
            color="#E06F70"
            style={{ paddingVertical: 10, paddingHorizontal: 6 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, marginTop: 50, marginHorizontal: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image source={{ uri: "https://i.imgur.com/SdlmDJN.png" }} style={{ width: 50, height: 50 }} />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hi {name || "Guest"},</Text>
          <Text style={{ fontSize: 14 }}>Have a great day ahead</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 5, borderWidth: 1, borderColor: "#666", borderRadius: 5, marginVertical: 20 }}>
        <Ionicons name="search" size={24} color="#555" style={{ marginRight: 10 }} />
        <TextInput
          placeholder="Search"
          style={{ fontSize: 16, padding: 10, flex: 1 }}
          placeholderTextColor={"#777"}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      <FlatList
        data={handleSearch(search)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={{ position: "absolute", height: 200, width: "100%", bottom: 0, alignItems: "center" }}>
        <TouchableOpacity
          style={{ backgroundColor: "#25C3D9", width: 60, height: 60, borderRadius: 30, alignItems: "center", justifyContent: "center" }}
          onPress={() => console.log("Add new task action")}
        >
          <FontAwesome6 name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

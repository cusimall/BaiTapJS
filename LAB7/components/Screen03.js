import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import { View, Text, Button, Image, TouchableOpacity, TextInput } from "react-native";

export default function Screen03({ navigation, route }) {
  const { name, task, tasks, setTasks } = route.params;

  const [job, setJob] = React.useState("");

  const handleFinish = () => {
    if (job.trim() === "") {
      navigation.goBack();
    } else {
      if (task) {
        fetch(`https://671107fc4eca2acdb5f34d5b.mockapi.io/test/tasks/${task.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: job,
          }),
        })
          .then((response) => response.json())
          .then((json) => {
            const newTasks = tasks.map((task) => {
              if (task.id === json.id) {
                return json;
              }
              return task;
            });
            setTasks(newTasks);
            navigation.goBack();
          })
          .catch((error) => console.error(error));
      } else {
        fetch("https://671107fc4eca2acdb5f34d5b.mockapi.io/test/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: job,
          }),
        })
          .then((response) => response.json())
          .then((json) => {
            setTasks([...tasks, json]);
            navigation.goBack();
          })
          .catch((error) => console.error(error));
      }
    }
  };

  return (
    <View
      style={{
        marginTop: 50,
        marginHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}>
          <Image
            source={{ uri: "https://i.imgur.com/SdlmDJN.png" }}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}>
              Hi {name},
            </Text>
            <Text
              style={{
                fontSize: 14,
              }}>
              Have a greate day a head
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            padding: 10,
          }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 40,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#000",
          }}>
          {task ? "EDIT YOUR JOB" : "ADD YOUR JOB"}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F2F2F2",
          marginVertical: 20,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <Entypo
          name="text-document"
          size={24}
          color="#40A263"
          style={{
            marginRight: 10,
          }}
        />
        <TextInput
          placeholder="Input new your job"
          placeholderTextColor={"#555"}
          style={{
            fontSize: 16,
            flex: 1,
          }}
          onChangeText={(text) => setJob(text)}
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
          onPress={() => handleFinish()}>
          <Text
            style={{
              color: "white",
              fontSize: 16,
            }}>
            FINISH
          </Text>
          <AntDesign
            name="arrowright"
            size={20}
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

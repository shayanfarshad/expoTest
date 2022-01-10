import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { NativeBaseProvider, Radio, theme } from "native-base";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [value, setValue] = useState<string>("0");
  const [checkForm, showCheckForm] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const showForm = () => {
    showCheckForm(!checkForm);
  };
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.checkView}>
            <View style={styles.leftSide}>
              <View style={styles.circle} />
              <Text style={styles.title}>Check ID</Text>
            </View>
            <Pressable onPress={showForm}>
              <FontAwesome name='chevron-down' />
            </Pressable>
          </View>
          {checkForm && (
            <View style={{ width: "80%" }}>
              <View style={styles.inpView}>
                <Text>First Name:</Text>
                <TextInput
                  value={firstName}
                  onChangeText={text => setFirstName(text)}
                  placeholder='first name'
                  style={styles.textInp}
                />
              </View>
              <View style={styles.inpView}>
                <View style={{ width: "40%" }}>
                  <Text>Middle Name:</Text>
                </View>
                <TextInput
                  value={middleName}
                  onChangeText={text => setMiddleName(text)}
                  placeholder='middle name'
                  style={styles.textInp}
                />
              </View>
              <View style={styles.inpView}>
                <Text>Last Name:</Text>
                <TextInput
                  value={lastName}
                  onChangeText={text => setLastName(text)}
                  placeholder='last name'
                  style={styles.textInp}
                />
              </View>
            </View>
          )}
          <View style={styles.horLine} />
          <View style={styles.checkView}>
            <View style={styles.leftSide}>
              <View style={styles.circle} />
              <Text style={styles.title}>Select Bank</Text>
            </View>
            <Pressable>
              <FontAwesome name='chevron-down' />
            </Pressable>
          </View>
          <View style={styles.horLine} />
          <View style={styles.checkView}>
            <View style={styles.leftSide}>
              <View style={styles.circle} />
              <Text style={styles.title}>
                Accept <Text style={{ color: "#25abdb" }}>Terms</Text>
              </Text>
            </View>
            <Pressable>
              <Radio.Group
                name='myRadioGroup'
                accessibilityLabel='favorite number'
                value={value}
                onChange={nextValue => {
                  setValue(nextValue);
                }}>
                <Radio
                  value='1'
                  my={"1"}
                  colorScheme={"primary"}
                  // bgColor={"#000"}
                />
              </Radio.Group>
            </Pressable>
          </View>

          <Pressable style={styles.btnBank}>
            <Text style={styles.btnTitle}>Create Bank Account</Text>
          </Pressable>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  form: {
    width: "80%",
    elevation: 2,
    borderRadius: 2,
    paddingVertical: 20,
  },
  checkView: {
    width: "100%",
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  circle: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
  leftSide: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  horLine: {
    width: "80%",
    borderBottomWidth: 1,
    marginRight: "5%",
    borderColor: "#DEDEDE",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  btnBank: {
    width: "90%",
    height: 39,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    marginHorizontal: "5%",
  },
  btnTitle: {
    color: "#B3B3B3",
  },
  inpView: {
    width: "100%",
    flexDirection: "row",
    marginLeft: "15%",
    marginRight: "10%",
    alignItems: "center",
    height: 39,
    justifyContent: "space-between",
  },
  textInp: {
    paddingVertical: 0,
    // justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "right",
    width: "60%",
    height: "100%",
  },
});

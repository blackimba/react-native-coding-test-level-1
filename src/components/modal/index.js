import React from "react";
import { Modal, StyleSheet, Text, View, Button } from "react-native";
import moment from "moment";

const RNModal = ({ show, handleClose, user }) => {
  return (
    <View>
      <Modal
        transparent={true}
        visible={show}
        onRequestClose={() => handleClose()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ marginBottom: 20, alignItems: "center" }}>
              <Text style={{ fontSize: 18 }}>Details</Text>
            </View>
            {console.log("user: ", user)}
            <View
              style={{
                backgroundColor: "yellow",
                marginBottom: 10,
              }}
            >
              <Text>Name: {user.name}</Text>
            </View>
            <View style={{ backgroundColor: "yellow", marginBottom: 10 }}>
              <Text>Email: {user.email}</Text>
            </View>
            <View style={{ backgroundColor: "yellow" }}>
              <Text>Birthday: {user.date}</Text>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 5,
                width: "100%",
                left: 10,
              }}
            >
              <Button title="Close" onPress={() => handleClose()} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    height: "40%",
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
});

export default RNModal;

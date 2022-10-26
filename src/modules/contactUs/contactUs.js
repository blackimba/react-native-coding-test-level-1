import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Formik } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment, { max } from "moment";
import * as yup from "yup";
import RNModal from "../../components/modal";

export default function ContactUs() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    date: moment(new Date()).format("DD/MM/YYYY"),
  });

  const handleSubmit = (values) => {
    setShowModal(true);
    console.log("values: ", values);
    setUser(() => ({
      name: values.name,
      email: values.email,
      date: moment(values.birthday).format("DD/MM/YYYY"),
    }));
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          birthday: new Date(),
        }}
        validationSchema={yup.object({
          name: yup
            .string()
            .required("Required")
            .matches(
              /^[aA-zZ\s]+$/,
              "Only alphabets are allowed for this field ",
            ),
          email: yup.string().email("invalid email"),
        })}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <>
            <View style={{ marginBottom: 10 }}>
              <TextInput
                name="name"
                placeholder="Name"
                onChangeText={(value) => {
                  formik.setFieldValue("name", value);
                }}
                value={formik.values.name}
                style={styles.text}
                onBlur={() => formik.setFieldTouched("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <Text style={styles.errorText}>{formik.errors.name}</Text>
              ) : null}
            </View>
            <View style={{ marginBottom: 10 }}>
              <TextInput
                name="email"
                placeholder="Email"
                onChangeText={(value) => formik.setFieldValue("email", value)}
                value={formik.values.email}
                style={styles.text}
                onBlur={() => formik.setFieldTouched("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <Text style={styles.errorText}>{formik.errors.email}</Text>
              )}
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>
                {moment(formik.values.birthday).format("DD/MM/YYYY")}
              </Text>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                style={styles.button}
              >
                <Text>Show Calendar</Text>
              </TouchableOpacity>
            </View>
            {showDatePicker ? (
              <DateTimePicker
                value={formik.values.birthday}
                onChange={(event, date) => {
                  setShowDatePicker(false);
                  formik.setFieldValue("birthday", date);
                }}
                maximumDate={formik.initialValues.birthday}
              />
            ) : null}
            <TouchableOpacity
              onPress={formik.handleSubmit}
              style={styles.submitButton}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>Submit</Text>
            </TouchableOpacity>
            <RNModal
              show={showModal}
              handleClose={() => setShowModal(false)}
              user={user}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    backgroundColor: "#fff",
    padding: 10,
  },
  date: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 15,
    marginRight: 10,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    height: 40,
    backgroundColor: "#29e",
    padding: 10,
  },
  submitButton: {
    height: 40,
    backgroundColor: "#040975",
    padding: 10,
  },
  errorText: {
    fontSize: 12,
    color: "#FF0D10",
  },
});

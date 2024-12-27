import { StyleSheet, View } from "react-native";
import { Text, Divider, TextInput, Card, Button } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import React, { useState } from "react";
export default function CurrencyConverter() {
  
  return (
    <>
      <View style={styles.header}>
        <Text variant="headlineLarge">Currency Converter</Text>
        <Divider />
      </View>
      <View style={styles.body}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.input}>
              <Text variant="titleLarge">Source Currency </Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select the Currency"
                searchPlaceholder="Search..."
                value={value}
                onChange={(item) => {
                  setValue(item.value);
                }}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                label="Source Currency Amount"
                mode="outlined"
                keyboardType="numeric"
                value={amount}
                onChangeText={(text) => setAmount(text)}
              />
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.input}>
              <Text variant="titleLarge">Target Currency </Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select the Currency"
                searchPlaceholder="Search..."
                value={targetValue}
                onChange={(item) => {
                  setTargetValue(item.value);
                }}
              />
              <Divider style={styles.divider} />
              <Text variant="titleLarge" style={styles.display}>
                {value && targetValue
                  ? convertedAmount
                  : "Please select the source and target currency"}
              </Text>
            </View>
          </Card.Content>
        </Card>
        <Button
          mode="contained"
          theme={{ colors: { primary: "green" } }}
          style={styles.button}
          onPress={() => conversion()}
        >
          Convert
        </Button>
    
      </View>
      <View style={styles.footer}>
        <Text>Currency Converter © 2024</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  body: {
    flex: 6,
    width: "100%",
    padding: 10,
  },
  footer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
  },
  input: {
    padding: 8,
    marginBottom: 10,
  },
  card: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
    marginTop: 10,
  },
  divider: {
    marginBottom: 10,
    marginTop: 10,
  },
  dropdown: {
    marginBottom: 10,
  },
  display:{
    fontWeight: "bold",
    textAlign:"right"
  }
});

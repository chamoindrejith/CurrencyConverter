import { StyleSheet, View } from "react-native";
import { Text, Divider, TextInput, Card, Button } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import React, { useState } from "react";
export default function CurrencyConverter() {
  const data = [
    { label: "Euro(€)", value: "eur" },
    { label: "Dollar($)", value: "usd" },
    { label: "Dinar(KWD)", value: "kwd" },
    { label: "Indian rupee (₹)", value: "inr" },
    { label: "Sri Lankan Rupee (Rs)", value: "lkr" },
    { label: "Won (₩)", value: "krw" },
  ];
  const [value, setValue] = useState(null);
  const [targetValue, setTargetValue] = useState(null);
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  function conversion() {
    const rates = {
      eur: { usd: 1.1, kwd: 0.3, inr: 88.5, lkr: 380, krw: 1300 },
      usd: { eur: 0.9, kwd: 0.27, inr: 80, lkr: 350, krw: 1200 },
      kwd: { eur: 3.3, usd: 3.6, inr: 260, lkr: 1100, krw: 4300 },
      inr: { eur: 0.011, usd: 0.012, kwd: 0.0038, lkr: 4.4, krw: 15 },
      lkr: { eur: 0.0026, usd: 0.0028, kwd: 0.00091, inr: 0.23, krw: 3.4 },
      krw: { eur: 0.00077, usd: 0.00083, kwd: 0.00023, inr: 0.067, lkr: 0.29 },
    };

    const rate = rates[value]?.[targetValue] || 1;
    setConvertedAmount(Number(amount) * rate);
    // console.log(rate)
    // console.log(amount)
  }
  return (
    <>
      <View style={styles.header}>
        <Text variant="headlineLarge">Currency Converter</Text>
        <Divider />
      </View>
      <View style={styles.body}>
        <Card style={styles.card} mode="elevated">
          <Card.Content>
            <View style={styles.input}>
              <Text variant="titleLarge">Source Currency </Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
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
                value={amount} right
                onChangeText={(text) => setAmount(text)}
              />
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card} mode="elevated">
          <Card.Content>
            <View style={styles.input}>
              <Text variant="titleLarge">Target Currency </Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
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
                  : <Text style={styles.error}>Please select the source and target currency</Text>}
              </Text>
            </View>
          </Card.Content>
        </Card>
        <Button
          mode="contained"
          theme={{ colors: { primary: "#008CBA" } }}
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
    flex: 4,
    width: "100%",
    alignItems: "center",
    padding: 10,
    backgroundColor:"rgba(161, 215, 231, 0.1)",
  },
  body: {
    flex: 10,
    width: "100%",
    padding: 10,
    backgroundColor:"rgba(161, 215, 231, 0.1)",
  },
  footer: {
    alignItems:"bottom",
    flex: 4,
    width: "100%",
    alignItems: "center",
    backgroundColor:"rgba(161, 215, 231, 0.1)",
    padding: 90,
  },
  input: {
    padding: 8,
    marginBottom: 10,
  },
  card: {
    padding: 10,
    marginBottom: 10,
  },
  button: {
    marginBottom: 20,
    marginTop: 20,
    padding: 5,
  },
  divider: {
    marginBottom: 10,
    marginTop: 10,
  },
  dropdown: {
    marginBottom: 10,
    marginTop: 10,
  },
  display:{
    fontWeight: "bold",
    textAlign:"right"
  },
  error:{
    color:"red",
    fontWeight: "bold",
    textAlign:"center",
    padding:10,
  }
});

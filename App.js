import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { PaperProvider,} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CurrencyConverter from "./components/CurrencyConverter";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <CurrencyConverter />
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

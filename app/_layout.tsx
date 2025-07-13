import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="character-select" />
        <Stack.Screen name="scenario-select" />
        <Stack.Screen name="call-settings" />
        <Stack.Screen 
          name="phone-call" 
          options={{ 
            title: "",
            headerShown: false,
            presentation: 'fullScreenModal'
          }} 
        />
      </Stack>
    </SafeAreaProvider>
  );
}

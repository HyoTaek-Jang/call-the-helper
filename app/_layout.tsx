import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#333333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: "헬퍼 전화",
            headerShown: true
          }} 
        />
        <Stack.Screen 
          name="character-select" 
          options={{ 
            title: "캐릭터 선택",
            presentation: 'card'
          }} 
        />
        <Stack.Screen 
          name="scenario-select" 
          options={{ 
            title: "시나리오 선택",
            presentation: 'card'
          }} 
        />
        <Stack.Screen 
          name="call-settings" 
          options={{ 
            title: "전화 설정",
            presentation: 'card'
          }} 
        />
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

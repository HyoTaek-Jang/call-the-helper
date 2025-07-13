import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';
import AppHeader from '../components/AppHeader';

export default function CallSettingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <AppHeader 
        title="전화 설정" 
        currentStep={3} 
        totalSteps={4}
      />
      <ThemedView style={styles.content} lightColor="transparent">
        <ThemedText>전화 설정 화면입니다.</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';
import AppHeader from '../components/AppHeader';

export default function PhoneCallScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader 
        title="전화 수신" 
        currentStep={4} 
        totalSteps={4}
        showBackButton={false}
      />
      <ThemedView style={styles.content}>
        <ThemedText>가상 전화 수신 화면입니다.</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
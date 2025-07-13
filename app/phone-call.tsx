import { StyleSheet } from 'react-native';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';
import AppHeader from '../components/AppHeader';

export default function PhoneCallScreen() {
  return (
    <ThemedView style={styles.container} lightColor="#000000" darkColor="#000000">
      <AppHeader 
        title="전화 수신" 
        currentStep={4} 
        totalSteps={4}
        showBackButton={false}
      />
      <ThemedView style={styles.content} lightColor="transparent" darkColor="transparent">
        <ThemedText>가상 전화 수신 화면입니다.</ThemedText>
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
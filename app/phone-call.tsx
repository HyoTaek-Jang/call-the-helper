import { StyleSheet } from 'react-native';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';

export default function PhoneCallScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">전화 수신</ThemedText>
      <ThemedText>가상 전화 수신 화면입니다.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000000',
  },
});
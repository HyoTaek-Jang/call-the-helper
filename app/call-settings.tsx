import { StyleSheet } from 'react-native';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';

export default function CallSettingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">전화 설정</ThemedText>
      <ThemedText>전화 설정 화면입니다.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
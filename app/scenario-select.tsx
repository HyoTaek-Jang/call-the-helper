import { StyleSheet } from 'react-native';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';

export default function ScenarioSelectScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">시나리오 선택</ThemedText>
      <ThemedText>시나리오 선택 화면입니다.</ThemedText>
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
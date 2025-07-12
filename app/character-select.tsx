import { StyleSheet } from 'react-native';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';

export default function CharacterSelectScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">캐릭터 선택</ThemedText>
      <ThemedText>캐릭터 선택 화면입니다.</ThemedText>
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
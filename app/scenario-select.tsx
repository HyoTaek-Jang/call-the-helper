import { StyleSheet } from 'react-native';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';
import { GradientView } from '../components/ui/GradientView';
import AppHeader from '../components/AppHeader';
import { Gradients } from '../constants/Colors';

export default function ScenarioSelectScreen() {
  return (
    <GradientView colors={Gradients.background} style={styles.container}>
      <AppHeader 
        title="시나리오 선택" 
        currentStep={2} 
        totalSteps={4}
      />
      <ThemedView style={styles.content} lightColor="transparent">
        <ThemedText>시나리오 선택 화면입니다.</ThemedText>
      </ThemedView>
    </GradientView>
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
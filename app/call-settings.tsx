import { StyleSheet } from 'react-native';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';
import { GradientView } from '../components/ui/GradientView';
import AppHeader from '../components/AppHeader';
import { Gradients } from '../constants/Colors';

export default function CallSettingsScreen() {
  return (
    <GradientView colors={Gradients.background} style={styles.container}>
      <AppHeader 
        title="전화 설정" 
        currentStep={3} 
        totalSteps={4}
      />
      <ThemedView style={styles.content} lightColor="transparent">
        <ThemedText>전화 설정 화면입니다.</ThemedText>
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
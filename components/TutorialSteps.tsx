import { StyleSheet } from 'react-native';
import { ThemedText } from './ui/ThemedText';
import { ThemedView } from './ui/ThemedView';

interface TutorialStepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
}

function TutorialStep({ stepNumber, title, description, icon }: TutorialStepProps) {
  return (
    <ThemedView style={styles.stepContainer} lightColor="rgba(255, 255, 255, 0.8)" darkColor="rgba(255, 255, 255, 0.05)">
      <ThemedView style={styles.stepHeader} lightColor="transparent">
        <ThemedView style={styles.iconContainer} lightColor="rgba(59, 130, 246, 0.1)" darkColor="rgba(255, 255, 255, 0.1)">
          <ThemedText style={styles.icon}>{icon}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepInfo} lightColor="transparent">
          <ThemedText style={styles.stepNumber}>단계 {stepNumber}</ThemedText>
          <ThemedText style={styles.stepTitle}>{title}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText style={styles.stepDescription}>{description}</ThemedText>
    </ThemedView>
  );
}

export function TutorialSteps() {
  const steps = [
    {
      stepNumber: 1,
      title: "캐릭터 선택",
      description: "아이에게 전화를 걸어줄 캐릭터를 선택하세요",
      icon: "👮‍♀️"
    },
    {
      stepNumber: 2,
      title: "시나리오 선택",
      description: "칭찬, 격려, 생활습관 교정 등 상황에 맞는 시나리오를 골라보세요",
      icon: "📋"
    },
    {
      stepNumber: 3,
      title: "전화 타이머 설정",
      description: "즉시 또는 5분, 10분, 15분 후에 전화가 오도록 시간을 설정하세요",
      icon: "⏰"
    }
  ];

  return (
    <ThemedView style={styles.container} lightColor="transparent">
      <ThemedText style={styles.sectionTitle}>사용법</ThemedText>
      {steps.map((step) => (
        <TutorialStep key={step.stepNumber} {...step} />
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
  stepContainer: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.2)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.3)',
  },
  icon: {
    fontSize: 20,
  },
  stepInfo: {
    flex: 1,
  },
  stepNumber: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 2,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  stepDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 0.7)',
  },
});
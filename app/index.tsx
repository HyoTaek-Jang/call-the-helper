import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';
import { GradientView } from '../components/ui/GradientView';
import { TutorialSteps } from '../components/TutorialSteps';
import { Gradients } from '../constants/Colors';

export default function HomeScreen() {
  return (
    <GradientView colors={Gradients.skyBlue} style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ThemedView style={styles.header} lightColor="transparent">
          <ThemedView style={styles.logoContainer} lightColor="transparent">
            <ThemedText type="title" style={styles.title}>
              📞 말 안들으면 전화한다
            </ThemedText>
          </ThemedView>
          
          <ThemedText style={styles.subtitle}>
            아이와 함께하는 따뜻한 교육 도우미
          </ThemedText>
        </ThemedView>

        <TutorialSteps />

        <ThemedView style={styles.buttonContainer} lightColor="transparent">
          <Link href="/character-select" asChild>
            <TouchableOpacity style={styles.button}>
              <ThemedText style={styles.buttonIcon}>🚀</ThemedText>
              <ThemedText style={styles.buttonText}>지금 시작하기</ThemedText>
            </TouchableOpacity>
          </Link>
        </ThemedView>
      </ScrollView>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    minHeight: '100%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoIcon: {
    fontSize: 36,
    marginRight: 12,
  },
  title: {
    marginBottom: 0,
    textAlign: 'center',
    color: '#000000',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.7,
    color: '#000000',
  },
  featureHighlight: {
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  featureText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000000',
    lineHeight: 20,
  },
  characterPreview: {
    marginVertical: 20,
    alignItems: 'center',
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 15,
    textAlign: 'center',
  },
  characterIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  characterIcon: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    minWidth: 80,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  characterEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  characterName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'hsl(210, 85%, 65%)',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 25,
    elevation: 3,
    boxShadow: '0 2px 3.84px rgba(0, 0, 0, 0.25)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomNote: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    marginTop: 15,
    fontStyle: 'italic',
  },
});

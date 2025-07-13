import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './ui/ThemedText';
import { ThemedView } from './ui/ThemedView';

interface AppHeaderProps {
  title: string;
  currentStep?: number;
  totalSteps?: number;
  showBackButton?: boolean;
}

export default function AppHeader({ 
  title, 
  currentStep, 
  totalSteps = 4,
  showBackButton = true 
}: AppHeaderProps) {
  const router = useRouter();

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <ThemedView style={styles.container} lightColor="transparent">
      <View style={styles.topRow}>
        {showBackButton ? (
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="hsl(210, 85%, 65%)" />
          </TouchableOpacity>
        ) : (
          <View style={styles.backButton} />
        )}
        
        <ThemedText type="subtitle" style={styles.title}>
          {title}
        </ThemedText>
        
        <View style={styles.backButton} />
      </View>

      {currentStep && (
        <View style={styles.stepContainer}>
          <View style={styles.stepIndicator}>
            {Array.from({ length: totalSteps }, (_, index) => (
              <View key={index} style={styles.stepWrapper}>
                <View
                  style={[
                    styles.stepCircle,
                    index + 1 <= currentStep ? styles.stepCircleActive : styles.stepCircleInactive,
                  ]}
                >
                  <ThemedText
                    style={[
                      styles.stepNumber,
                      index + 1 <= currentStep ? styles.stepNumberActive : styles.stepNumberInactive,
                    ]}
                  >
                    {index + 1}
                  </ThemedText>
                </View>
                {index < totalSteps - 1 && (
                  <View
                    style={[
                      styles.stepLine,
                      index + 1 < currentStep ? styles.stepLineActive : styles.stepLineInactive,
                    ]}
                  />
                )}
              </View>
            ))}
          </View>
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  stepContainer: {
    alignItems: 'center',
  },
  stepIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  stepCircleActive: {
    backgroundColor: 'hsl(210, 85%, 65%)',
    borderColor: 'hsl(210, 85%, 65%)',
  },
  stepCircleInactive: {
    backgroundColor: 'transparent',
    borderColor: '#E5E5E7',
  },
  stepNumber: {
    fontSize: 12,
    fontWeight: '600',
  },
  stepNumberActive: {
    color: '#FFFFFF',
  },
  stepNumberInactive: {
    color: '#8E8E93',
  },
  stepLine: {
    width: 20,
    height: 2,
    marginHorizontal: 4,
  },
  stepLineActive: {
    backgroundColor: 'hsl(210, 85%, 65%)',
  },
  stepLineInactive: {
    backgroundColor: '#E5E5E7',
  },
});
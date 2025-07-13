import { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { router } from 'expo-router';
import { GradientView } from '../components/ui/GradientView';
import AppHeader from '../components/AppHeader';
import ScenarioCard from '../components/ScenarioCard';
import { Gradients } from '../constants/Colors';
import { scenarios } from '../data/scenarios';
import { Scenario } from '../types';

export default function ScenarioSelectScreen() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  const handleScenarioSelect = (scenario: Scenario) => {
    setSelectedScenario(scenario);
  };

  const handleContinue = () => {
    if (selectedScenario) {
      // TODO: Pass selected scenario to next screen
      router.push('/call-settings');
    }
  };

  return (
    <GradientView colors={Gradients.background} style={styles.container}>
      <AppHeader 
        title="시나리오 선택" 
        currentStep={2} 
        totalSteps={4}
      />
      
      <View style={styles.content}>
        <Text style={styles.subtitle}>상황에 맞는 시나리오를 선택하세요</Text>
      </View>
      
      <ScrollView 
        style={styles.scenarioList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scenarioListContent}
      >
        {scenarios.map((scenario) => (
          <ScenarioCard
            key={scenario.id}
            title={scenario.title}
            description={scenario.description}
            category={scenario.category}
            duration={scenario.duration}
            isSelected={selectedScenario?.id === scenario.id}
            onPress={() => handleScenarioSelect(scenario)}
          />
        ))}
      </ScrollView>

      {selectedScenario && (
        <View style={styles.bottomSection}>
          <View style={styles.selectedInfo}>
            <Text style={styles.selectedLabel}>선택된 시나리오:</Text>
            <Text style={styles.selectedName}>{selectedScenario.title}</Text>
            <Text style={styles.selectedCategory}>카테고리: {selectedScenario.category}</Text>
          </View>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>계속하기</Text>
          </TouchableOpacity>
        </View>
      )}
    </GradientView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  scenarioList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scenarioListContent: {
    paddingBottom: 20,
  },
  bottomSection: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  selectedInfo: {
    marginBottom: 16,
    alignItems: 'center',
  },
  selectedLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  selectedName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  selectedCategory: {
    fontSize: 14,
    color: 'hsl(210, 85%, 65%)',
  },
  continueButton: {
    backgroundColor: 'hsl(210, 85%, 65%)',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
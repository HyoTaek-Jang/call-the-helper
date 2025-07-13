import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Modal, Animated } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { GradientView } from '../components/ui/GradientView';
import AppHeader from '../components/AppHeader';
import ScenarioCard from '../components/ScenarioCard';
import { Gradients } from '../constants/Colors';
import { scenarios } from '../data/scenarios';
import { Scenario } from '../types';

export default function ScenarioSelectScreen() {
  const params = useLocalSearchParams();
  const characterId = params.characterId as string;
  const characterName = params.characterName as string;
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalScenario, setModalScenario] = useState<Scenario | null>(null);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const handleScenarioSelect = (scenario: Scenario) => {
    setSelectedScenario(scenario);
  };

  const handleContinue = () => {
    if (selectedScenario) {
      router.push({
        pathname: '/call-settings',
        params: {
          characterId,
          characterName,
          scenarioId: selectedScenario.id,
          scenarioTitle: selectedScenario.title,
          scenarioCategory: selectedScenario.category,
        }
      });
    }
  };

  const handleViewScript = (scenario: Scenario) => {
    console.log('전체보기 버튼 클릭됨:', scenario.title);
    setModalScenario(scenario);
    setModalVisible(true);
  };

  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
      setModalScenario(null);
    });
  };

  useEffect(() => {
    if (modalVisible) {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible, fadeAnim]);

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
            script={scenario.script}
            isSelected={selectedScenario?.id === scenario.id}
            onPress={() => handleScenarioSelect(scenario)}
            onViewScript={() => handleViewScript(scenario)}
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

      {/* 시나리오 전체보기 모달 */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{modalScenario?.title}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeModal}
                activeOpacity={0.7}
              >
                <Ionicons name="close" size={24} color="#666666" />
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.modalBody} showsVerticalScrollIndicator={false}>
              <Text style={styles.modalScript}>&ldquo;{modalScenario?.script}&rdquo;</Text>
              
              <View style={styles.modalInfo}>
                <View style={styles.modalInfoItem}>
                  <Text style={styles.modalInfoLabel}>카테고리:</Text>
                  <Text style={styles.modalInfoValue}>{modalScenario?.category}</Text>
                </View>
                <View style={styles.modalInfoItem}>
                  <Text style={styles.modalInfoLabel}>소요시간:</Text>
                  <Text style={styles.modalInfoValue}>{modalScenario?.duration}</Text>
                </View>
              </View>
            </ScrollView>

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
              activeOpacity={0.8}
            >
              <Text style={styles.modalCloseButtonText}>확인</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    maxHeight: '70%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    flex: 1,
  },
  closeButton: {
    padding: 4,
  },
  modalBody: {
    minHeight: 100,
  },
  modalScript: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  modalInfo: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
  },
  modalInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  modalInfoLabel: {
    fontSize: 14,
    color: '#666666',
    marginRight: 8,
    minWidth: 70,
  },
  modalInfoValue: {
    fontSize: 14,
    color: 'hsl(210, 85%, 65%)',
    fontWeight: '500',
  },
  modalCloseButton: {
    backgroundColor: 'hsl(210, 85%, 65%)',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  modalCloseButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
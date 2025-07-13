import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Modal, TextInput } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { GradientView } from '../components/ui/GradientView';
import AppHeader from '../components/AppHeader';
import { Gradients } from '../constants/Colors';

const CALL_TIMING_OPTIONS = [
  { id: 'immediate', label: '즉시 전화', description: '바로 전화가 옵니다', minutes: 0, icon: 'flash' },
  { id: '1min', label: '1분 후', description: '1분 후에 전화가 옵니다', minutes: 1, icon: 'time' },
  { id: '3min', label: '3분 후', description: '3분 후에 전화가 옵니다', minutes: 3, icon: 'timer' },
  { id: 'custom', label: '사용자 설정', description: '원하는 시간을 직접 설정', minutes: 0, icon: 'settings' },
];

export default function CallSettingsScreen() {
  const params = useLocalSearchParams();
  const scenarioId = params.scenarioId as string;
  const scenarioTitle = params.scenarioTitle as string;
  
  const [selectedTiming, setSelectedTiming] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [customModalVisible, setCustomModalVisible] = useState(false);
  const [customMinutes, setCustomMinutes] = useState('');
  const [actualCustomMinutes, setActualCustomMinutes] = useState(0);


  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (countdown !== null && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => {
          if (prev === null || prev <= 1) {
            startCall();
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [countdown]);

  const handleTimingSelect = (timingId: string) => {
    if (timingId === 'custom') {
      setCustomModalVisible(true);
    } else {
      setSelectedTiming(timingId);
    }
  };

  const isValidTime = (minutes: string) => {
    const num = parseInt(minutes);
    return !isNaN(num) && num >= 1 && num <= 60;
  };

  const handleCustomTimeConfirm = () => {
    const minutes = parseInt(customMinutes);
    if (isNaN(minutes) || minutes < 1 || minutes > 60) {
      Alert.alert('오류', '1분부터 60분까지 입력해주세요.');
      return;
    }
    setActualCustomMinutes(minutes);
    setSelectedTiming('custom');
    setCustomModalVisible(false);
    setCustomMinutes('');
  };

  const startCall = () => {
    router.push({
      pathname: '/phone-call',
      params: {
        characterId: params.characterId as string,
        scenarioId,
      }
    });
  };

  const handleStartCall = () => {
    if (!selectedTiming) {
      Alert.alert('알림', '전화 시간을 선택해주세요.');
      return;
    }

    let minutesToWait = 0;
    
    if (selectedTiming === 'custom') {
      minutesToWait = actualCustomMinutes;
    } else {
      const selectedOption = CALL_TIMING_OPTIONS.find(option => option.id === selectedTiming);
      if (!selectedOption) return;
      minutesToWait = selectedOption.minutes;
    }

    if (minutesToWait === 0) {
      startCall();
    } else {
      setIsWaiting(true);
      setCountdown(minutesToWait * 60);
    }
  };

  const handleCancelWaiting = () => {
    setIsWaiting(false);
    setCountdown(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isWaiting && countdown !== null) {
    return (
      <GradientView colors={Gradients.background} style={styles.container}>
        <AppHeader 
          title="전화 대기 중" 
          currentStep={3} 
          totalSteps={3}
          showBackButton={false}
        />
        <View style={styles.waitingContainer}>
          <View style={styles.waitingContent}>
            <Ionicons name="call-outline" size={60} color="hsl(210, 85%, 65%)" />
            <Text style={styles.waitingTitle}>전화 대기 중...</Text>
            <Text style={styles.countdownText}>{formatTime(countdown)}</Text>
            <Text style={styles.waitingSubtitle}>
              {scenarioTitle} 시나리오로 곧 전화가 올 예정입니다
            </Text>
          </View>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleCancelWaiting}
            activeOpacity={0.8}
          >
            <Text style={styles.cancelButtonText}>취소</Text>
          </TouchableOpacity>
        </View>
      </GradientView>
    );
  }

  return (
    <GradientView colors={Gradients.background} style={styles.container}>
      <AppHeader 
        title="전화 설정" 
        currentStep={3} 
        totalSteps={3}
      />
      
      <View style={styles.content}>
        <View style={[styles.timingSection]}>
          <Text style={styles.sectionTitle}>전화가 올 시간을 선택하세요</Text>
          <Text style={styles.sectionSubtitle}>선택한 시간에 가상 전화가 옵니다</Text>
          
          <View style={styles.timingOptions}>
            {CALL_TIMING_OPTIONS.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.timingOption,
                  selectedTiming === option.id && styles.timingOptionSelected
                ]}
                onPress={() => handleTimingSelect(option.id)}
                activeOpacity={0.8}
              >
                <View style={styles.timingOptionContent}>
                  <View style={styles.timingOptionLeft}>
                    <Ionicons 
                      name={option.icon as any} 
                      size={24} 
                      color={'hsl(210, 85%, 65%)'} 
                    />
                    <View style={styles.timingOptionText}>
                      <Text style={[
                        styles.timingOptionLabel,
                        selectedTiming === option.id && styles.timingOptionLabelSelected
                      ]}>
                        {option.id === 'custom' && selectedTiming === 'custom' 
                          ? `${actualCustomMinutes}분 후` 
                          : option.label}
                      </Text>
                      <Text style={[
                        styles.timingOptionDescription,
                        selectedTiming === option.id && styles.timingOptionDescriptionSelected
                      ]}>
                        {option.id === 'custom' && selectedTiming === 'custom' 
                          ? `${actualCustomMinutes}분 후에 전화가 옵니다` 
                          : option.description}
                      </Text>
                    </View>
                  </View>
                  {selectedTiming === option.id && (
                    <Ionicons name="checkmark-circle" size={24} color="hsl(210, 85%, 65%)" />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={[
            styles.startButton,
            !selectedTiming && styles.startButtonDisabled
          ]}
          onPress={handleStartCall}
          disabled={!selectedTiming}
          activeOpacity={0.8}
        >
          <Text style={[
            styles.startButtonText,
            !selectedTiming && styles.startButtonTextDisabled
          ]}>
            전화 시작하기
          </Text>
        </TouchableOpacity>
      </View>

      {/* 커스텀 시간 설정 모달 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={customModalVisible}
        onRequestClose={() => setCustomModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.customModalContent}>
            <View style={styles.customModalHeader}>
              <Text style={styles.customModalTitle}>시간 설정</Text>
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setCustomModalVisible(false)}
              >
                <Ionicons name="close" size={24} color="#666666" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.customModalBody}>
              <Text style={styles.customModalLabel}>몇 분 후에 전화가 올까요?</Text>
              <Text style={styles.customModalSubLabel}>(1분 ~ 60분)</Text>
              
              <View style={[
                styles.customInputContainer,
                !isValidTime(customMinutes) && customMinutes !== '' && styles.customInputContainerError
              ]}>
                <TextInput
                  style={[
                    styles.customInput,
                    !isValidTime(customMinutes) && customMinutes !== '' && styles.customInputError
                  ]}
                  value={customMinutes}
                  onChangeText={setCustomMinutes}
                  placeholder=""
                  keyboardType="numeric"
                  maxLength={2}
                />
                <Text style={[
                  styles.customInputUnit,
                  !isValidTime(customMinutes) && customMinutes !== '' && styles.customInputUnitError
                ]}>분</Text>
              </View>
            </View>

            <View style={styles.customModalButtons}>
              <TouchableOpacity
                style={styles.customCancelButton}
                onPress={() => setCustomModalVisible(false)}
              >
                <Text style={styles.customCancelButtonText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.customConfirmButton,
                  (!isValidTime(customMinutes) || customMinutes === '') && styles.customConfirmButtonDisabled
                ]}
                onPress={handleCustomTimeConfirm}
                disabled={!isValidTime(customMinutes) || customMinutes === ''}
              >
                <Text style={[
                  styles.customConfirmButtonText,
                  (!isValidTime(customMinutes) || customMinutes === '') && styles.customConfirmButtonTextDisabled
                ]}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    flex: 1,
    paddingHorizontal: 20,
  },
  timingSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 24,
  },
  timingOptions: {
    gap: 12,
  },
  timingOption: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  timingOptionSelected: {
    backgroundColor: '#F0F8FF',
    borderColor: 'hsl(210, 85%, 65%)',
  },
  timingOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timingOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  timingOptionText: {
    marginLeft: 12,
    flex: 1,
  },
  timingOptionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 2,
  },
  timingOptionLabelSelected: {
    color: '#333333',
  },
  timingOptionDescription: {
    fontSize: 14,
    color: '#666666',
  },
  timingOptionDescriptionSelected: {
    color: '#666666',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  startButton: {
    backgroundColor: 'hsl(210, 85%, 65%)',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  startButtonTextDisabled: {
    color: '#999999',
  },
  waitingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  waitingContent: {
    alignItems: 'center',
    marginBottom: 30,
  },
  waitingTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    marginTop: 20,
    marginBottom: 16,
  },
  countdownText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'hsl(210, 85%, 65%)',
    marginBottom: 16,
    fontFamily: 'monospace',
  },
  waitingSubtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
  cancelButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cancelButtonText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  customModalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    width: '90%',
    maxWidth: 350,
  },
  customModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  customModalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  modalCloseButton: {
    padding: 4,
  },
  customModalBody: {
    alignItems: 'center',
    marginBottom: 24,
  },
  customModalLabel: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
    textAlign: 'center',
  },
  customModalSubLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  customInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'hsl(210, 85%, 65%)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  customInput: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    minWidth: 40,
    marginRight: 8,
  },
  customInputUnit: {
    fontSize: 16,
    color: '#666666',
  },
  customModalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  customCancelButton: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  customCancelButtonText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
  customConfirmButton: {
    flex: 1,
    backgroundColor: 'hsl(210, 85%, 65%)',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  customConfirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  customInputContainerError: {
    borderColor: '#dc3545',
  },
  customInputError: {
    color: '#dc3545',
  },
  customInputUnitError: {
    color: '#dc3545',
  },
  customConfirmButtonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  customConfirmButtonTextDisabled: {
    color: '#999999',
  },
});
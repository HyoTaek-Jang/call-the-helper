import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { GradientView } from '../components/ui/GradientView';
import AppHeader from '../components/AppHeader';
import { Gradients } from '../constants/Colors';

export default function CallWaitingScreen() {
  const params = useLocalSearchParams();
  const scenarioId = params.scenarioId as string;
  const scenarioTitle = params.scenarioTitle as string;
  const waitTime = parseInt(params.waitTime as string);
  
  const [countdown, setCountdown] = useState(waitTime);

  const startCall = useCallback(() => {
    router.push({
      pathname: '/call-answer',
      params: {
        characterId: params.characterId as string,
        scenarioId,
      }
    });
  }, [params.characterId, scenarioId]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            // Navigation을 다음 tick으로 지연시켜 setState와 분리
            setTimeout(() => startCall(), 0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [countdown, startCall]);

  const handleCancelWaiting = () => {
    router.back();
  };

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
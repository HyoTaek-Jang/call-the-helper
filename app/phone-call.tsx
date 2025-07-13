import React, { useState, useEffect, useRef } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  Animated,
  StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, router } from 'expo-router';
import { characters } from '../data/characters';
import { scenarios } from '../data/scenarios';

export default function PhoneCallScreen() {
  const params = useLocalSearchParams();
  const characterId = params.characterId as string;
  const scenarioId = params.scenarioId as string;
  
  const [callDuration, setCallDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const character = characters.find(c => c.id === characterId);
  const scenario = scenarios.find(s => s.id === scenarioId);

  useEffect(() => {
    const interval = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);

    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    pulseAnimation.start();

    return () => {
      clearInterval(interval);
      pulseAnimation.stop();
    };
  }, []);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    router.back();
  };

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const handleButtonPress = (callback: () => void) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    callback();
  };

  if (!character || !scenario) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>캐릭터 또는 시나리오를 찾을 수 없습니다.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <LinearGradient
        colors={['#1a1a1a', '#2d2d2d', '#1a1a1a']}
        style={styles.background}
      >
        {/* 상단: 상태바와 통화 정보 */}
        <View style={styles.topSection}>
          <Text style={styles.statusText}>전화받기</Text>
          <Text style={styles.characterName}>{character.name}</Text>
          <Text style={styles.scenarioText}>{scenario.title}</Text>
          <Text style={styles.durationText}>{formatDuration(callDuration)}</Text>
        </View>

        {/* 중앙: 캐릭터 이미지 */}
        <View style={styles.middleSection}>
          <Animated.View 
            style={[
              styles.characterImageContainer,
              { transform: [{ scale: pulseAnim }] }
            ]}
          >
            <View style={styles.imageOuterRing} />
            <View style={styles.imageInnerRing} />
            <Image 
              source={character.image}
              style={styles.characterImage}
              resizeMode="cover"
            />
          </Animated.View>
        </View>

        {/* 하단: 컨트롤 버튼 */}
        <View style={styles.bottomSection}>
          {/* 음성 제어 버튼들 */}
          <View style={styles.audioControls}>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <TouchableOpacity
                style={[styles.controlButton, styles.audioButton]}
                onPress={() => handleButtonPress(handlePlayAudio)}
                activeOpacity={0.8}
              >
                <Ionicons 
                  name={isPlaying ? "volume-high" : "volume-mute"} 
                  size={28} 
                  color="white" 
                />
              </TouchableOpacity>
            </Animated.View>
            
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <TouchableOpacity
                style={[styles.controlButton, styles.audioButton]}
                onPress={() => handleButtonPress(() => {})}
                activeOpacity={0.8}
              >
                <Ionicons name="refresh" size={28} color="white" />
              </TouchableOpacity>
            </Animated.View>
          </View>

          {/* 통화 종료 버튼 */}
          <View style={styles.callControls}>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <TouchableOpacity
                style={[styles.controlButton, styles.endCallButton]}
                onPress={() => handleButtonPress(handleEndCall)}
                activeOpacity={0.8}
              >
                <Ionicons name="call" size={32} color="white" />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  background: {
    flex: 1,
    paddingTop: 50,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  errorText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
  },
  statusText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginBottom: 8,
  },
  characterName: {
    color: 'white',
    fontSize: 28,
    fontWeight: '300',
    marginBottom: 4,
  },
  scenarioText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    marginBottom: 8,
  },
  durationText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
  },
  middleSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterImageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOuterRing: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  imageInnerRing: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  characterImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  audioControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    marginBottom: 40,
  },
  callControls: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  controlButton: {
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    elevation: 8,
  },
  audioButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  endCallButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF3B30',
    transform: [{ rotate: '135deg' }],
  },
});
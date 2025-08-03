import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  isSelected?: boolean;
  onPress: () => void;
  currentSoundRef: React.MutableRefObject<Audio.Sound | null>;
  stopCurrentAudio: () => Promise<void>;
}

export const CharacterCard = ({ 
  character, 
  isSelected = false, 
  onPress,
  currentSoundRef,
  stopCurrentAudio 
}: CharacterCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (currentSoundRef.current) {
        currentSoundRef.current.unloadAsync();
      }
    };
  }, [currentSoundRef]);

  const playPreview = async () => {
    try {
      if (isPlaying && currentSoundRef.current) {
        await stopCurrentAudio();
        setIsPlaying(false);
        return;
      }

      // Stop any currently playing sound
      await stopCurrentAudio();

      // Configure audio mode for mobile playback
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
      
      const { sound: newSound } = await Audio.Sound.createAsync(
        character.previewAudio,
        { shouldPlay: true, volume: 1.0 }
      );
      
      currentSoundRef.current = newSound;
      setIsPlaying(true);

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          setIsPlaying(false);
          newSound.unloadAsync();
          currentSoundRef.current = null;
        }
      });
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.container,
        isSelected && styles.selectedContainer
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={character.image}
          style={[
            styles.image,
            isSelected && styles.selectedImage
          ]}
          resizeMode="cover"
        />
        {isSelected && (
          <View style={styles.checkmark}>
            <Text style={styles.checkmarkText}>✓</Text>
          </View>
        )}
      </View>
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.description}>{character.description}</Text>
      <Text style={styles.scenarioCount}>{character.scenarios.length}개 시나리오</Text>
      
      <TouchableOpacity 
        style={styles.previewButton}
        onPress={playPreview}
        activeOpacity={0.7}
      >
        <Text style={styles.previewButtonText}>
          {isPlaying ? '⏸️ 정지' : '🔊 미리듣기'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 8,
    alignItems: 'center',
    boxShadow: '0 2px 3.84px rgba(0, 0, 0, 0.1)',
    elevation: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedContainer: {
    borderColor: 'hsl(210, 85%, 65%)',
    backgroundColor: '#F0F8FF',
    boxShadow: '0 2px 3.84px rgba(0, 0, 0, 0.2)',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  selectedImage: {
    borderWidth: 3,
    borderColor: 'hsl(210, 85%, 65%)',
  },
  checkmark: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 24,
    height: 24,
    backgroundColor: 'hsl(210, 85%, 65%)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 16,
    marginBottom: 4,
  },
  scenarioCount: {
    fontSize: 11,
    color: 'hsl(210, 85%, 65%)',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 8,
  },
  previewButton: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  previewButtonText: {
    fontSize: 11,
    color: '#495057',
    fontWeight: '500',
  },
});
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  isSelected?: boolean;
  onPress: () => void;
}

export const CharacterCard = ({ 
  character, 
  isSelected = false, 
  onPress 
}: CharacterCardProps) => {
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
  },
});
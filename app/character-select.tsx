import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { CharacterCard } from '../components/CharacterCard';
import { ThemedView } from '../components/ui/ThemedView';
import AppHeader from '../components/AppHeader';
import { characters } from '../data/characters';
import { Character } from '../types';

export default function CharacterSelectScreen() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [filterVoiceType, setFilterVoiceType] = useState<string | null>(null);

  const filteredCharacters = filterVoiceType 
    ? characters.filter(char => char.voiceType === filterVoiceType)
    : characters;

  const voiceTypeLabels = {
    stern: '엄격한',
    gentle: '부드러운', 
    caring: '자상한',
    professional: '전문적인',
    heroic: '영웅적인'
  };

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleContinue = () => {
    if (selectedCharacter) {
      router.push('/scenario-select');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <AppHeader 
        title="캐릭터 선택" 
        currentStep={1} 
        totalSteps={4}
      />
      
      <View style={styles.content}>
        <Text style={styles.subtitle}>전화를 걸어줄 캐릭터를 선택해주세요</Text>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContent}
        >
          <TouchableOpacity 
            style={[styles.filterButton, !filterVoiceType && styles.filterButtonActive]}
            onPress={() => setFilterVoiceType(null)}
          >
            <Text style={[styles.filterButtonText, !filterVoiceType && styles.filterButtonTextActive]}>전체</Text>
          </TouchableOpacity>
          {Object.entries(voiceTypeLabels).map(([type, label]) => (
            <TouchableOpacity 
              key={type}
              style={[styles.filterButton, filterVoiceType === type && styles.filterButtonActive]}
              onPress={() => setFilterVoiceType(type)}
            >
              <Text style={[styles.filterButtonText, filterVoiceType === type && styles.filterButtonTextActive]}>{label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView 
        style={styles.characterList}
        contentContainerStyle={styles.characterListContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.characterGrid}>
          {filteredCharacters.map((character) => (
            <View key={character.id} style={styles.characterCardContainer}>
              <CharacterCard 
                character={character}
                isSelected={selectedCharacter?.id === character.id}
                onPress={() => handleCharacterSelect(character)}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {selectedCharacter && (
        <View style={styles.bottomSection}>
          <View style={styles.selectedInfo}>
            <Text style={styles.selectedLabel}>선택된 캐릭터:</Text>
            <Text style={styles.selectedName}>{selectedCharacter.name}</Text>
            <Text style={styles.selectedVoiceType}>음성 타입: {voiceTypeLabels[selectedCharacter.voiceType]}</Text>
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
    </ThemedView>
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
  filterContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  filterScrollContent: {
    paddingRight: 20,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  filterButtonActive: {
    backgroundColor: 'hsl(210, 85%, 65%)',
    borderColor: 'hsl(210, 85%, 65%)',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: '#ffffff',
  },
  characterList: {
    flex: 1,
    paddingHorizontal: 12,
  },
  characterListContent: {
    paddingBottom: 20,
  },
  characterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  characterCardContainer: {
    width: '48%',
    marginBottom: 16,
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
  selectedVoiceType: {
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
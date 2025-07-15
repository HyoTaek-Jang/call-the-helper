export interface Character {
  id: string;
  name: string;
  image: any; // For React Native image requires
  description: string;
  voiceType: "stern" | "gentle" | "caring" | "professional" | "heroic";
  previewAudio: any; // For React Native audio requires
  scenarios: Scenario[];
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  icon?: any; // For React Native icons
  script: string;
  audioFile: any; // For React Native audio requires
}

export interface CallSettings {
  characterId: string;
  scenarioId: string;
  timing: "immediate" | "5min" | "10min" | "15min";
  timestamp?: number;
}
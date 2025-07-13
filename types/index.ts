export interface Character {
  id: string;
  name: string;
  image: any; // For React Native image requires
  description: string;
  voiceType: "stern" | "gentle" | "caring" | "professional" | "heroic";
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
}

export interface CallSettings {
  characterId: string;
  scenarioId: string;
  timing: "immediate" | "5min" | "10min" | "15min";
  timestamp?: number;
}
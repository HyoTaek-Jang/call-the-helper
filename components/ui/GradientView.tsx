import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ViewStyle } from 'react-native';

interface GradientViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

export function GradientView({ 
  children, 
  style, 
  colors = ['#f8f9fa', '#e9ecef'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 }
}: GradientViewProps) {
  return (
    <LinearGradient
      colors={colors as any}
      start={start}
      end={end}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
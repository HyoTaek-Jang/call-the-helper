import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ScenarioCardProps {
  title: string;
  description: string;
  category: string;
  duration: string;
  script: string;
  isSelected?: boolean;
  onPress: () => void;
  onViewScript?: () => void;
}

const getCategoryIcon = (category: string): keyof typeof Ionicons.glyphMap => {
  switch (category) {
    case '건강관리':
      return 'medical-outline';
    case '수면관리':
      return 'bed-outline';
    case '식사예절':
      return 'restaurant-outline';
    case '생활습관':
      return 'home-outline';
    case '일상생활':
      return 'car-outline';
    default:
      return 'help-outline';
  }
};

export default function ScenarioCard({
  title,
  description,
  category,
  duration,
  script,
  isSelected = false,
  onPress,
  onViewScript,
}: ScenarioCardProps) {
  const primaryColor = 'hsl(210, 85%, 65%)';
  const cardBackgroundColor = '#ffffff';
  const textColor = '#333333';
  const secondaryTextColor = '#666666';

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: cardBackgroundColor },
        isSelected && styles.selectedContainer,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <View style={[styles.iconContainer, { backgroundColor: 'rgba(74, 144, 226, 0.1)'}]}>
            <Ionicons
              name={getCategoryIcon(category)}
              size={20}
              color={primaryColor}
            />
          </View>
          <Text style={[styles.title, { color: textColor }]} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View style={styles.rightSection}>
          <View style={styles.categoryBadge}>
            <Text style={[styles.categoryText, { color: secondaryTextColor }]}>
              {category}
            </Text>
          </View>
        </View>
      </View>

      <Text style={[styles.description, { color: secondaryTextColor }]} numberOfLines={2}>
        {description}
      </Text>

      <View style={styles.footer}>
        <View style={styles.durationContainer}>
          <Ionicons name="time-outline" size={14} color={secondaryTextColor} />
          <Text style={[styles.duration, { color: secondaryTextColor }]}>
            {duration}
          </Text>
        </View>
        {onViewScript && (
          <TouchableOpacity 
            style={styles.viewScriptButton}
            onPress={() => {
              console.log('전체보기 버튼 터치됨');
              onViewScript();
            }}
            activeOpacity={0.7}
          >
            <Text style={[styles.viewScriptText, { color: primaryColor }]}>
              전체보기
            </Text>
            <Ionicons name="chevron-forward" size={14} color={primaryColor} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedContainer: {
    borderColor: 'hsl(210, 85%, 65%)',
    backgroundColor: '#F0F8FF',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    borderWidth: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  duration: {
    fontSize: 12,
  },
  viewScriptButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  viewScriptText: {
    fontSize: 12,
    fontWeight: '500',
  },
});
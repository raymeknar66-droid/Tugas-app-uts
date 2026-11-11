import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { COLORS } from '../data/colors';

export default function DetailScreen({ route, navigation }) {
  const { itemName, itemDesc, itemContent, type, screenTitle } = route.params || {};

  // Mengatur judul header atas secara dinamis
  useEffect(() => {
    navigation.setOptions({
      title: screenTitle || 'Detail Materi Modul',
    });
  }, [navigation, screenTitle]);

  if (type === 'notification') {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.cardHeader}>
            <Text style={styles.badge}>DETAIL NOTIFIKASI</Text>
            <Text style={styles.title}>{itemName || 'Pesan Notifikasi'}</Text>
            <Text style={styles.subtitle}>{itemDesc}</Text>
          </View>

          <View style={styles.contentBox}>
            <Text style={styles.contentText}>
              {itemContent || 'Tidak ada isi pesan.'}
            </Text>
          </View>

          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>← Kembali</Text>
          </Pressable>

        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.cardHeader}>
          <Text style={styles.badge}>MATERI KULIAH</Text>
          <Text style={styles.title}>{itemName || 'Detail Modul'}</Text>
          <Text style={styles.subtitle}>{itemDesc || 'Penjelasan ringkas mengenai topik pembelajaran.'}</Text>
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>📖 Penjelasan Materi:</Text>
          <Text style={styles.contentText}>
            {itemContent || 'Belum ada konten materi rinci untuk modul ini.'}
          </Text>
        </View>

        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Kembali</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { padding: 20 },
  cardHeader: {
    backgroundColor: COLORS.cardBackground,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    marginBottom: 16,
  },
  badge: { fontSize: 11, fontWeight: 'bold', color: COLORS.primary, marginBottom: 8, letterSpacing: 1 },
  title: { fontSize: 20, fontWeight: 'bold', color: COLORS.textPrimary, marginBottom: 8 },
  subtitle: { fontSize: 14, color: COLORS.textSecondary, lineHeight: 20 },

  contentBox: {
    backgroundColor: COLORS.cardBackground,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    marginBottom: 20,
  },
  contentTitle: { fontSize: 16, fontWeight: '700', color: COLORS.textPrimary, marginBottom: 10 },
  contentText: { fontSize: 14, color: COLORS.textPrimary, lineHeight: 22 },

  backButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: { color: '#FFF', fontSize: 15, fontWeight: '600' },
});
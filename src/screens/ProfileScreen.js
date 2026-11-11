import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { COLORS } from '../data/colors';

export default function ProfileScreen({ navigation }) {
  const handleLogout = () => {
    // Kembali ke halaman Login dan reset history stack
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil Pengguna 👤</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>IR</Text>
        </View>
        
        <Text style={styles.name}>Imanuel Ray Melkianus</Text>
        <Text style={styles.nim}>NIM: 240040131</Text>
        <Text style={styles.major}>Teknik Informatika / Sistem Informasi</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Mata Kuliah:</Text>
          <Text style={styles.infoValue}>Aplikasi Berbasis Platform</Text>
          
          <Text style={[styles.infoLabel, { marginTop: 12 }]}>Framework Utama:</Text>
          <Text style={styles.infoValue}>React Native (Expo)</Text>

          <Text style={[styles.infoLabel, { marginTop: 12 }]}>Status Akun:</Text>
          <Text style={styles.infoValue}>Aktif (Logged In)</Text>
        </View>

        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Keluar Akun (Logout)</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { padding: 20, backgroundColor: '#FFF', borderBottomWidth: 1, borderBottomColor: '#E5E5EA' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.textPrimary },
  content: { padding: 20, alignItems: 'center' },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 12,
  },
  avatarText: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  name: { fontSize: 20, fontWeight: 'bold', color: COLORS.textPrimary, marginBottom: 4, textAlign: 'center' },
  nim: { fontSize: 14, fontWeight: '600', color: COLORS.primary, marginBottom: 2 },
  major: { fontSize: 13, color: COLORS.textSecondary, marginBottom: 20, textAlign: 'center' },
  
  infoCard: {
    width: '100%',
    backgroundColor: COLORS.cardBackground,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    marginBottom: 24,
  },
  infoLabel: { fontSize: 12, color: COLORS.textSecondary, fontWeight: '500' },
  infoValue: { fontSize: 14, color: COLORS.textPrimary, fontWeight: '600', marginTop: 2 },

  logoutButton: {
    width: '100%',
    backgroundColor: '#FF3B30',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutText: { color: '#FFF', fontSize: 15, fontWeight: '600' },
});
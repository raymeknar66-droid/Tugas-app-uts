import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView, Alert } from 'react-native';
import { COLORS } from '../data/colors';

export default function LoginScreen({ navigation }) {
  const [nim, setNim] = useState('240040131');
  const [password, setPassword] = useState('12345');

  const handleLogin = () => {
    if (!nim) {
      Alert.alert('Peringatan', 'Silakan masukkan NIM Anda terlebih dahulu.');
      return;
    }
    // Langsung arahkan ke menu utama (MainTabs) dan reset stack agar tombol back tidak kembali ke login
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoEmoji}>🎓</Text>
          <Text style={styles.title}>EduCourse Login</Text>
          <Text style={styles.subtitle}>Silakan masuk untuk mengakses modul pembelajaran</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>NIM / Username</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Masukkan NIM..." 
            placeholderTextColor={COLORS.textSecondary}
            value={nim}
            onChangeText={setNim}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Masukkan password..." 
            placeholderTextColor={COLORS.textSecondary}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Masuk ke Aplikasi</Text>
        </Pressable>

        <Text style={styles.footerNote}>Imanuel Ray Melkianus - 240040131</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, justifyContent: 'center', padding: 20 },
  card: {
    backgroundColor: COLORS.cardBackground,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  logoContainer: { alignItems: 'center', marginBottom: 24 },
  logoEmoji: { fontSize: 40, marginBottom: 8 },
  title: { fontSize: 22, fontWeight: 'bold', color: COLORS.textPrimary, marginBottom: 4 },
  subtitle: { fontSize: 13, color: COLORS.textSecondary, textAlign: 'center' },
  
  inputContainer: { marginBottom: 20 },
  label: { fontSize: 13, fontWeight: '600', color: COLORS.textPrimary, marginBottom: 6 },
  input: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 14,
    color: COLORS.textPrimary,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },

  loginButton: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: { color: '#FFF', fontSize: 15, fontWeight: '600' },
  footerNote: { fontSize: 11, color: COLORS.textSecondary, textAlign: 'center' },
});
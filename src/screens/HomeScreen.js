import React from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { COLORS } from '../data/colors';

const MODULES_DATA = [
  { id: '1', title: 'Modul 1: React Native Dasar', desc: 'Pengenalan arsitektur komponen, JSX, dan styling dasar.', content: 'React Native adalah framework open-source yang dibuat oleh Meta. Memungkinkan Anda membangun aplikasi mobile menggunakan JavaScript dan React.' },
  { id: '2', title: 'Modul 2: Layout & Flexbox', desc: 'Mengatur tata letak elemen antarmuka secara responsif.', content: 'Flexbox di React Native bekerja mirip dengan CSS Flexbox di web, membantu menyusun komponen secara baris (row) atau kolom (column).' },
  { id: '3', title: 'Modul 3: Navigasi Stack & Tab', desc: 'Penerapan perpindahan halaman bertingkat dan menu bawah.', content: 'React Navigation menyediakan sistem navigasi native untuk aplikasi React Native, mencakup Stack Navigator dan Bottom Tab Navigator.' },
  { id: '4', title: 'Modul 4: State & Props', desc: 'Manajemen data dinamis di dalam komponen.', content: 'Props digunakan untuk mengirim data antar komponen, sedangkan State digunakan untuk menyimpan data lokal yang dapat berubah.' },
  { id: '5', title: 'Modul 5: Networking & API', desc: 'Menghubungkan aplikasi dengan data eksternal/backend.', content: 'Menggunakan Fetch API atau Axios untuk melakukan HTTP request (GET, POST) ke server luar.' },
  { id: '6', title: 'Modul 6: Penyimpanan Lokal', desc: 'Menyimpan data sementara menggunakan AsyncStorage.', content: 'AsyncStorage adalah sistem penyimpanan key-value yang bersifat persisten, sederhana, dan asinkron untuk perangkat mobile.' },
  { id: '7', title: 'Modul 7: Deploy ke Expo Go', desc: 'Cara menjalankan dan menguji aplikasi di perangkat fisik.', content: 'Menggunakan aplikasi Expo Go di Android/iOS untuk melakukan live preview kode tanpa proses build native yang rumit.' },
  { id: '8', title: 'Modul 8: Handling User Input', desc: 'Penggunaan TextInput, Button, dan Pressable secara interaktif.', content: 'Mempelajari cara menangkap input teks dari pengguna serta mengelola event onpress untuk tombol interaktif.' },
  { id: '9', title: 'Modul 9: List & FlatList', desc: 'Menampilkan data array dalam bentuk daftar yang efisien.', content: 'FlatList adalah komponen performa tinggi untuk menampilkan struktur data list yang panjang dengan mekanisme recycling view.' },
  { id: '10', title: 'Modul 10: Styling & StyleSheet', desc: 'Mendalami teknik desain antarmuka modular di React Native.', content: 'StyleSheet.create membantu mengoptimalkan objek gaya (styling) dan memastikan konsistensi desain visual aplikasi.' },
  { id: '11', title: 'Modul 11: Icon & Assets Management', desc: 'Integrasi ikon vektor dan aset gambar lokal dengan benar.', content: 'Memanfaatkan pustaka seperti @expo/vector-icons serta fungsi require() untuk manajemen gambar lokal.' },
  { id: '12', title: 'Modul 12: Animasi Dasar', desc: 'Membuat transisi dan animasi halus menggunakan Animated API.', content: 'Animated API bawaan React Native memungkinkan pembuatan animasi berbasis performa tinggi di thread native.' },
  { id: '13', title: 'Modul 13: Debugging & Error Handling', desc: 'Tips mengatasi bug, warning, dan error pada React Native.', content: 'Mengenal React Native Debugger, console log, serta cara membaca log error di terminal Expo.' },
  { id: '14', title: 'Modul 14: Konsep Git & GitHub', desc: 'Manajemen kode sumber dan kolaborasi tim.', content: 'Menerapkan version control system menggunakan Git commit, branch, dan push ke repository publik GitHub.' },
  { id: '15', title: 'Modul 15: Persiapan Presentasi UTS', desc: 'Finalisasi proyek dan simulasi live demo aplikasi.', content: 'Memastikan seluruh persyaratan teknis, laporan PDF, dan fungsionalitas aplikasi siap untuk dipresentasikan.' },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* User Greeting Section (Nama Diperbarui) */}
        <View style={styles.userContainer}>
          <Text style={styles.subTitle}>Hi, Imanuel Ray,</Text>
          <Text style={styles.title}>Selamat Pagi! 👋</Text>
        </View>

        {/* Banner Card */}
        <View style={styles.bannerCard}>
          <Text style={styles.bannerTag}>EDUCOURSE PLATFORM</Text>
          <Text style={styles.bannerTitle}>Katalog Modul Pembelajaran UTS</Text>
          <Text style={styles.bannerDesc}>Pilih salah satu dari {MODULES_DATA.length} modul di bawah ini untuk melihat materi lengkap secara interaktif.</Text>
        </View>

        {/* Section Daftar Modul (15 Modul) */}
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Daftar Modul Pembelajaran ({MODULES_DATA.length})</Text>
          
          {MODULES_DATA.map((item) => (
            <Pressable 
              key={item.id}
              style={styles.cardButton} 
              onPress={() => navigation.navigate('Detail', { 
                itemName: item.title, 
                itemDesc: item.desc, 
                itemContent: item.content 
              })}
            >
              <View style={{ flex: 1, marginRight: 10 }}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle} numberOfLines={2}>{item.desc}</Text>
              </View>
              <Text style={styles.arrow}>➔</Text>
            </Pressable>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { padding: 20 },
  userContainer: { marginBottom: 16, marginTop: 10 },
  subTitle: { fontSize: 16, color: COLORS.textSecondary },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.textPrimary, marginTop: 4 },
  
  bannerCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  bannerTag: { color: '#FFE600', fontSize: 12, fontWeight: 'bold', marginBottom: 6, letterSpacing: 1 },
  bannerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  bannerDesc: { color: '#E1E1E1', fontSize: 13, lineHeight: 18 },

  contentContainer: { marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: COLORS.textPrimary, marginBottom: 14 },
  
  cardButton: { 
    backgroundColor: COLORS.cardBackground, 
    padding: 16, 
    borderRadius: 12, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: { fontSize: 15, fontWeight: '600', color: COLORS.textPrimary, marginBottom: 4 },
  cardSubtitle: { fontSize: 12, color: COLORS.textSecondary, lineHeight: 16 },
  arrow: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary }
});
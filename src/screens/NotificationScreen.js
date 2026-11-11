import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { COLORS } from '../data/colors';

// Daftar notifikasi setelah menghapus Pengumuman Akademik & Jadwal Pengumpulan UTS
const NOTIFICATION_DATA = [
  { 
    id: '1', 
    title: '🔄 Pembaruan Sistem Modul', 
    desc: 'Modul navigasi Stack & Tab telah diperbarui ke versi terbaru untuk performa optimal.', 
    time: 'Kemarin, 14:30 PM',
    content: 'Pembaruan ini mencakup optimasi transisi antar halaman menggunakan React Navigation, perbaikan bug kecil pada layout, serta penambahan ikon vektor interaktif.' 
  },
  { 
    id: '2', 
    title: '⭐ Selamat Datang di EduCourse', 
    desc: 'Terima kasih telah menggunakan aplikasi katalog modul pembelajaran interaktif ini.', 
    time: '3 hari lalu',
    content: 'EduCourse dirancang untuk membantu proses belajar mandiri mahasiswa dalam menguasai kerangka kerja React Native Expo secara praktis dan terstruktur.' 
  },
  { 
    id: '3', 
    title: '🛡️ Tips Keamanan Akun', 
    desc: 'Selalu jaga kerahasiaan token akses GitHub dan kredensial akun Anda.', 
    time: '4 hari lalu',
    content: 'Jangan pernah membagikan password atau token pribadi ke repository publik guna menghindari potensi kebocoran data pengembangan.' 
  },
  { 
    id: '4', 
    title: '📚 Modul Baru Ditambahkan', 
    desc: 'Materi tentang Performance Optimization dan RESTful API telah tersedia.', 
    time: '5 hari lalu',
    content: 'Silakan cek menu Beranda atau Explore untuk membaca materi tambahan mengenai teknik optimalisasi aplikasi dan integrasi layanan web.' 
  },
  { 
    id: '5', 
    title: '🛠️ Pemeliharaan Server', 
    desc: 'Sistem penyimpanan lokal akan mengalami pemeliharaan rutin pada akhir pekan.', 
    time: '1 minggu lalu',
    content: 'Pemeliharaan ini bertujuan untuk meningkatkan kecepatan sinkronisasi data cache dan kestabilan aplikasi secara keseluruhan.' 
  },
  { 
    id: '6', 
    title: '🎯 Target Belajar Tercapai', 
    desc: 'Anda telah menyelesaikan 5 modul dasar pengembangan perangkat lunak.', 
    time: '1 minggu lalu',
    content: 'Pertahankan konsistensi belajar Anda! Lanjutkan eksplorasi ke modul-modul lanjutan untuk mempertajam keterampilan teknis Anda.' 
  },
  { 
    id: '7', 
    title: '💬 Umpan Balik Pengguna', 
    desc: 'Bantu kami meningkatkan kualitas aplikasi dengan memberikan ulasan.', 
    time: '2 minggu lalu',
    content: 'Masukan dan saran Anda sangat berharga untuk pengembangan fitur-fitur interaktif berikutnya pada platform EduCourse.' 
  },
  { 
    id: '8', 
    title: '🚀 Rilis Versi 1.1.0', 
    desc: 'Fitur pencarian real-time dan navigasi bertingkat kini telah diaktifkan.', 
    time: '2 minggu lalu',
    content: 'Nikmati pengalaman pencarian topik yang lebih cepat serta transisi layar yang mulus pada pembaruan versi terbaru ini.' 
  },
];

export default function NotificationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifikasi 🔔</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Pesan Terbaru ({NOTIFICATION_DATA.length})</Text>

        {NOTIFICATION_DATA.map((item) => (
          <Pressable 
            key={item.id}
            style={styles.notifItem}
            onPress={() => navigation.navigate('Detail', { 
              itemName: item.title, 
              itemDesc: item.desc, 
              itemContent: item.content,
              type: 'notification',
              screenTitle: 'Notifikasi'
            })}
          >
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.notifTitle}>{item.title}</Text>
              <Text style={styles.notifDesc} numberOfLines={2}>{item.desc}</Text>
              <Text style={styles.notifTime}>{item.time}</Text>
            </View>
            <Text style={styles.arrow}>➔</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { padding: 20, backgroundColor: '#FFF', borderBottomWidth: 1, borderBottomColor: '#E5E5EA' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.textPrimary },
  scrollContent: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: COLORS.textPrimary, marginBottom: 14 },
  notifItem: {
    backgroundColor: COLORS.cardBackground,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  notifTitle: { fontSize: 15, fontWeight: '600', color: COLORS.textPrimary, marginBottom: 4 },
  notifDesc: { fontSize: 13, color: COLORS.textSecondary, marginBottom: 8, lineHeight: 18 },
  notifTime: { fontSize: 11, color: COLORS.primary, fontWeight: '500' },
  arrow: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary }
});
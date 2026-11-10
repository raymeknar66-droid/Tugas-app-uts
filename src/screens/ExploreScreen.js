import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Pressable } from 'react-native';
import { COLORS } from '../data/colors';

// Data topik eksplorasi diperbanyak menjadi 15 item
const EXPLORE_DATA = [
  { id: '1', title: '📱 Mobile Development', desc: 'Belajar React Native, Flutter, dan Native Android/iOS.', content: 'Pengembangan aplikasi mobile lintas platform menggunakan kerangka kerja modern untuk efisiensi dan performa maksimal.' },
  { id: '2', title: '💻 Web Fullstack', desc: 'Menguasai React.js, Node.js, dan Database SQL/NoSQL.', content: 'Membangun aplikasi web dari sisi klien (frontend) hingga server dan basis data (backend).' },
  { id: '3', title: '🎨 UI/UX Design', desc: 'Membuat desain antarmuka modern menggunakan Figma.', content: 'Prinsip desain pengalaman pengguna, pembuatan wireframe, prototype, dan tata letak visual yang estetis.' },
  { id: '4', title: '☁️ Cloud Computing', desc: 'Manajemen server awan, AWS, Google Cloud, dan DevOps.', content: 'Mempelajari cara deployment aplikasi, manajemen kontainer Docker, serta infrastruktur server berskala besar.' },
  { id: '5', title: '🛡️ Cyber Security', desc: 'Dasar keamanan jaringan, enkripsi, dan ethical hacking.', content: 'Identifikasi celah keamanan perangkat lunak, mitigasi serangan siber, dan perlindungan data pengguna.' },
  { id: '6', title: '🤖 Artificial Intelligence', desc: 'Pengenalan Machine Learning, NLP, dan integrasi AI.', content: 'Memanfaatkan model kecerdasan buatan untuk otomatisasi tugas dan analisis data cerdas.' },
  { id: '7', title: '📊 Data Science & Analytics', desc: 'Pengolahan data besar menggunakan Python dan SQL.', content: 'Teknik visualisasi data, pembersihan dataset, dan penarikan kesimpulan bisnis berbasis statistik.' },
  { id: '8', title: '🎮 Game Development', desc: 'Membuat game interaktif dengan Unity dan Unreal Engine.', content: 'Pemrograman logika permainan, fisika game, dan perancangan aset grafis 2D/3D.' },
  { id: '9', title: '⛓️ Blockchain Technology', desc: 'Konsep dasar crypto, smart contracts, dan web3.', content: 'Memahami arsitektur desentralisasi, keamanan transaksi kriptografi, dan pengembangan aplikasi terdistribusi.' },
  { id: '10', title: '⚙️ Internet of Things (IoT)', desc: 'Menghubungkan perangkat keras dengan mikrokontroler.', content: 'Integrasi sensor fisik dengan jaringan internet untuk pemantauan dan kendali jarak jauh.' },
  { id: '11', title: '🧪 Software Testing & QA', desc: 'Automated testing, unit test, dan Quality Assurance.', content: 'Memastikan kualitas kode program melalui pengujian sistematis guna meminimalkan bug.' },
  { id: '12', title: '🚀 Performance Optimization', desc: 'Strategi mempercepat muat aplikasi dan efisiensi memori.', content: 'Teknik profiling kode, pengurangan ukuran bundle, dan optimalisasi rendering antarmuka.' },
  { id: '13', title: '📦 Database Management', desc: 'Perancangan basis data relasional dan non-relasional.', content: 'Pengelolaan tabel, kueri SQL tingkat lanjut, indexing, dan normalisasi data.' },
  { id: '14', title: '🌐 RESTful API Design', desc: 'Membangun dan mendokumentasikan layanan web API.', content: 'Standar komunikasi data berbasis JSON, HTTP methods, dan autentikasi token.' },
  { id: '15', title: '📈 Digital Marketing Tech', desc: 'SEO, analisis trafik web, dan optimasi konversi digital.', content: 'Penerapan teknologi untuk meningkatkan visibilitas produk digital di mesin pencari.' },
];

export default function ExploreScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data berdasarkan input pencarian
  const filteredData = EXPLORE_DATA.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore 🔍</Text>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Cari topik atau materi..." 
          placeholderTextColor={COLORS.textSecondary} 
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>
          {searchQuery ? `Hasil Pencarian (${filteredData.length})` : `Semua Topik (${EXPLORE_DATA.length})`}
        </Text>
        
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Pressable 
              key={item.id}
              style={styles.categoryCard}
              onPress={() => navigation.navigate('Detail', { 
                itemName: item.title, 
                itemDesc: item.desc, 
                itemContent: item.content 
              })}
            >
              <View style={{ flex: 1, marginRight: 10 }}>
                <Text style={styles.categoryTitle}>{item.title}</Text>
                <Text style={styles.categoryDesc} numberOfLines={2}>{item.desc}</Text>
              </View>
              <Text style={styles.arrow}>➔</Text>
            </Pressable>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Topik tidak ditemukan 😢</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { padding: 20, backgroundColor: '#FFF', borderBottomWidth: 1, borderBottomColor: '#E5E5EA' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.textPrimary, marginBottom: 12 },
  searchInput: { 
    backgroundColor: '#F2F2F7', 
    paddingHorizontal: 16, 
    paddingVertical: 10, 
    borderRadius: 10, 
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  scrollContent: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: COLORS.textPrimary, marginBottom: 14 },
  categoryCard: {
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
  categoryTitle: { fontSize: 15, fontWeight: '600', color: COLORS.textPrimary, marginBottom: 4 },
  categoryDesc: { fontSize: 13, color: COLORS.textSecondary, lineHeight: 18 },
  arrow: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary },
  emptyContainer: { padding: 40, alignItems: 'center' },
  emptyText: { fontSize: 14, color: COLORS.textSecondary }
});
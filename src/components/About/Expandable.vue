<template>
  <!-- FAQ 1 -->
  <div class="expand-container">
    <div class="faq-container">
      <button @click="toggleContent(0)" class="faq-button">
        <h3>Apakah SIMAK UI itu?</h3>
      </button>
      <div v-if="isVisible[0]" class="faq-content">
        <p>
          Simak-UI (Seleksi Masuk UI) adalah ujian seleksi terpadu masuk UI yang
          diselenggarakan UI bagi calon mahasiswa yang ingin kuliah di UI.
        </p>
        <p>
          Program pendidikan yang dibuka pada SIMAK UI mulai dari Program Vokasi
          (D3 dan D4), Sarjana, Sarjana Kelas Internasional, Sarjana dengan
          Rekognisi Pembelajaran Lampau (RPL), Profesi, Spesialis, Magister dan
          Doktor.
        </p>
      </div>
    </div>

    <!-- FAQ 2 -->
    <div class="faq-container">
      <button @click="toggleContent(1)" class="faq-button">
        <h3>Berapa biaya kuliah yang harus dibayar jika diterima di UI?</h3>
      </button>
      <div v-if="isVisible[1]" class="faq-content">
        <p>
          Biaya pendidikan Program Sarjana dan Program Vokasi TA 2024/2025
          silahkan lihat <a href="#">di sini</a>.
        </p>
        <p>
          Biaya pendidikan program Sarjana Kelas Internasional TA 2024/2025
          silahkan lihat
          <a
            href="https://simak.ui.ac.id/wp-content/uploads/2024/05/SK-2024-NO-791-Tentang-Tarif-Biaya-Pendidikan-bagi-Mahasiswa-Program-Sarjana-kelas-khusus-Internasional-Tahun-Akademik-20242025.pdf"
            >di sini</a
          >.
        </p>
        <p>
          Biaya pendidikan pascasarjana (profesi, magister, doktor dan
          spesialis) TA 2024/2025 silahkan lihat
          <a
            href="https://www.ui.ac.id/wp-content/uploads/2024/05/SK-2024-NO-798-Tentang-Tarif-Uang-Kuliah-Bagi-Mahasiswa-Program-Profesi-Magister-Doktor-Spesialis-Dan-Sub-Spesialis-Tahun-Akademik-2024-2025.pdf"
            >di sini</a
          >.
        </p>
        <p>
          Biaya pendidikan bagi Sarjana RPL TA 2024/2025 silahkan lihat
          <a
            href="https://simak.ui.ac.id/wp-content/uploads/2024/05/SK_2024_NO_795_Tentang_Tarif_Biaya_Pendidikan_Bagi_Mahasiswa_Program-RPL.pdf"
            >di sini</a
          >.
        </p>
      </div>
    </div>

    <!-- FAQ 3 -->
    <div class="faq-container">
      <button @click="toggleContent(2)" class="faq-button">
        <h3>Bagaimana cara mendaftar SIMAK UI?</h3>
      </button>
      <div v-if="isVisible[2]" class="faq-content">
        <p>
          Ikuti panduan pendaftaran yang tertera di web
          <a href="https://penerimaan.ui.ac.id" target="_blank"
            >penerimaan.ui.ac.id</a
          >
        </p>
      </div>
    </div>

    <!-- FAQ 4 -->
    <div class="faq-container">
      <button @click="toggleContent(3)" class="faq-button">
        <h3>Bagaimana ketentuan foto pendaftaran?</h3>
      </button>
      <div v-if="isVisible[3]" class="faq-content">
        <p>
          1. Foto terbaru. Misalnya, jika saat ini anda berjilbab, maka foto
          yang diupload adalah foto berjilbab.
        </p>
        <p>2. Foto berwarna.</p>
        <p>3. Ukuran minimal 400 x 600 pixel.</p>
        <p>
          4. Foto hanya menampakkan wajah (pasphoto) dengan menghadap ke depan.
        </p>
      </div>
    </div>

    <!-- FAQ 5 -->
    <div class="faq-container">
      <button @click="toggleContent(4)" class="faq-button">
        <h3>Program Studi apa saja yang dibuka dan berapa daya tampungnya?</h3>
      </button>
      <div v-if="isVisible[4]" class="faq-content">
        <p>
          Informasinya dapat dilihat di
          <a href="https://penerimaan.ui.ac.id">https://penerimaan.ui.ac.id</a>
          pada masa pendaftaran
        </p>
      </div>
    </div>

    <!-- FAQ 6 -->
    <div class="faq-container">
      <button @click="toggleContent(5)" class="faq-button">
        <h3>Apa saja persyaratan pendaftaran SIMAK UI?</h3>
      </button>
      <div v-if="isVisible[5]" class="faq-content">
        <p>
          Mengingat persyaratan pendaftaran tiap periode dapat berubah sesuai
          dengan kebutuhan prodi, maka persyaratan pendaftaran dapat dilihat di
          <a href="https://penerimaan.ui.ac.id">https://penerimaan.ui.ac.id</a>
          hanya pada masa pendaftaran.
        </p>
      </div>
    </div>

    <!-- FAQ 7 -->
    <div class="faq-container">
      <button @click="toggleContent(6)" class="faq-button">
        <h3>Apakah SIMAK S1 dan Vokasi TA 2024 mensyaratkan UTBK?</h3>
      </button>
      <div v-if="isVisible[6]" class="faq-content">
        <p>
          Ya, UTBK menjadi persyaratan dalam pendaftaran SIMAK S1 dan Vokasi
          2024. Pendaftar S1 wajib isi nomor peserta UTBK 2024 dalam
          pendaftarannya.Sedangkan pendaftar yang hanya memilih D3 dan D4 tidak
          wajib mengisi nomor UTBK.
        </p>
      </div>
    </div>

    <!-- FAQ 8 -->
    <div class="faq-container">
      <button @click="toggleContent(7)" class="faq-button">
        <h3>Apa saja dokumen pendaftaran SIMAK UI?</h3>
      </button>
      <div v-if="isVisible[7]" class="faq-content">
        <ul>
          <li>
            SIMAK UI RPL (ekstensi), Profesi, Spesialis, S2, S3
            <ul>
              <li>Salinan/copy ijazah yang telah dilegalisasi</li>
              <li>
                Salinan/copy transkrip nilai yang telah dilegalisasi
                <ul>
                  <li>
                    Untuk lulusan perguruan tinggi luar negeri, wajib memiliki
                    surat penyetaraan ijazah dari Dikti
                  </li>
                  <li>
                    Untuk peserta yang mencantumkan nilai TPA / TOEFL, wajib
                    memiliki sertifikat TPA / TOEFL
                  </li>
                </ul>
              </li>
              <li>
                Dokumen persyaratan khusus prodi (jika diminta dalam persyaratan
                prodi)
              </li>
            </ul>
          </li>
          <li>
            SIMAK UI S1/Vokasi
            <ul>
              <li>Tidak ada dokumen pendaftaran</li>
            </ul>
          </li>
          <li>
            SIMAK UI S1 Kelas Internasional
            <ul>
              <li>
                Sertifikat TOEFL/IELTS dengan skor minimum 5.5. Beberapa prodi
                terkadang meminta skor lebih tinggi.
              </li>
              <li>
                FK, FKG dan FH meminta nilai yang lebih tinggi. Lihat kembali
                persyaratan prodi sebelum membuat pendaftaran.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- FAQ 9 -->
    <div class="faq-container">
      <button @click="toggleContent(8)" class="faq-button">
        <h3>
          Jenis TOEFL atau IELTS yang dapat digunakan untuk mendaftar SIMAK UI
          Kelas Internasional?
        </h3>
      </button>
      <div v-if="isVisible[8]" class="faq-content">
        <p>
          Pada saat mendaftar SIMAK Kelas Internasional, peserta harus
          mengupload sertifikat TOEFL/IELTS yang masih dalam masa berlakunya.
          Jenis TOEFL yang diakui adalah yang disertifikasi ETS (<a
            href="https://www.ets.org/"
            >https://www.ets.org/</a
          >) dengan ITP skor min.500 atau iBT skor min.61 atau CBT skor min.173
          atau IELTS dengan skor minimum 5.5. Beberapa fakultas menerapkan
          persyaratan skor yang lebih tinggi, info lebih jelas dapat dilihat di
          website pendaftaran. Jika belum memiliki TOEFL atau IELTS dapat
          menggunakan EPT dari LBI UI. Info EPT dari LBI UI
          <a href="https://lbifib.ui.ac.id/id/language-test/ui-ept-online"
            >di sini</a
          >. <br />
          contoh:
        </p>
      </div>
    </div>

    <!-- FAQ 10 -->
    <div class="faq-container">
      <button @click="toggleContent(9)" class="faq-button">
        <h3>
          Apa bedanya Vokasi, Sarjana (S1), Sarjana Kelas Internasional (S1 KKI)
          dan Sarjana kelas RPL (S1 RPL)?
        </h3>
      </button>
      <div v-if="isVisible[9]" class="faq-content">
        <ul>
          <li>
            Vokasi (D3 dan D4) adalah program pendidikan jenjang diploma yang
            bertujuan untuk mempersiapkan tenaga yang dapat menetapkan keahlian
            dan ketrampilan di bidangnya, siap kerja dan mampu bersaing secara
            global. Lulusan Vokasi (D3) akan mendapat gelar Ahli Madya (A.Md)
            dan lulusan Vokasi (D4) akan mendapat gelar Sarjana Terapan (S.Tr.).
            Jalur masuk Vokasi pada 2024 melalui seleksi nasional (SNBP dan
            SNBT) dan jalur mandiri (PPKB dan SIMAK UI).
          </li>
          <li>
            Sarjana (S1) adalah program pendidikan jenjang sarjana yang menerima
            lulusan SMA/SMK/MA/sederajat dengan batasan usia ijazah maksimal 3
            tahun kelulusan pada saat pendaftaran. Contohnya: pendaftaran 2024
            untuk lulusan 2024, 2023, 2022. Lulusan program ini akan mendapat
            gelar jenjang Kesarjanaan Strata 1 sesuai bidang ilmu yang ditempuh.
            Jalur masuk program sarjana 2024 melalui seleksi nasional (SNBP dan
            SNBT) dan jalur mandiri (PPKB, SJP dan SIMAK UI).
          </li>
          <li>
            Sarjana Kelas Internasional (S1 KKI) adalah program pendidikan yang
            diselenggarakan oleh Universitas Indonesia atas dasar adanya
            kerjasama antara Universitas Indonesia dengan mitra Perguruan Tinggi
            di luar negeri yang memiliki reputasi internasional dan telah
            memperoleh akreditasi di negaranya. Jalur masuk program ini melalui
            Talent Scouting dan SIMAK-KKI.
            <ul>
              <li>
                Gelar Tunggal, adalah program KKI yang memiliki kurikulum khusus
                dengan memberikan kesempatan kepada mahasiswa untuk mengikuti
                perkuliahan atau pengalaman magang di universitas mitra di luar
                negeri selama 1 sampai 2 semester. Hal tersebut disesuaikan
                dengan kurikulum masing-masing program studi. Mahasiswa hanya
                akan memperoleh gelar kesarjanaan dari UI.
              </li>
              <li>
                Gelar Ganda, adalah program KKI yang memiliki kurikulum khusus
                dengan memberi kesempatan mahasiswa untuk menempuh studi di UI
                dan di Universitas Mitra UI dalam suatu masa studi jenjang
                kesarjanaan. Mahasiswa akan memperoleh gelar kesarjanaan dari UI
                dan dari Universitas Mitra UI sekaligus.
              </li>
            </ul>
          </li>
          <li>
            Sarjana kelas RPL (S1 RPL) adalah program pendidikan jenjang sarjana
            berdasarkan asesmen capaian pembelajaran atas hasil belajar yang
            diperoleh mahasiswa dari pendidikan formal sebelumnya (diploma,
            dll), dan/atau pengalaman kerja. Jalur masuknya melalui SIMAK RPL.
            Materi yang diujikan adalah Tes Potensi Akademik dan Bahasa Inggris.
            Fakultas dan Program Studi yang membuka program S1 kelas RPL antara
            lain:
            <ul>
              <li>
                Fakultas Kesehatan Masyarakat, program studi: Ilmu Kesehatan
                Masyarakat
              </li>
              <li>
                Fakultas Ilmu Keperawatan, program studi: Ilmu Keperawatan
              </li>
              <li>
                Fakultas Ekonomi, program studi: Ilmu Manajemen, Ilmu Akuntansi
              </li>
              <li>Fakultas Hukum, program studi: Ilmu Hukum</li>
              <li>Fakultas Ilmu Administrasi</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- FAQ 11 -->
    <div class="faq-container">
      <button @click="toggleContent(10)" class="faq-button">
        <h3>
          Berapakah biaya pendaftaran SIMAK? dan berapa program studi yang dapat
          dipilih?
        </h3>
      </button>
      <div v-if="isVisible[10]" class="faq-content">
        <ul>
          <li>Biaya pendaftaran SIMAK 2024 akan diinformasikan kemudian.</li>
          <li>
            SIMAK UI S3 dan Spesialis hanya dapat memilih 1 program studi. Biaya
            pendaftaran 2024 adalah 1.600.000
          </li>
          <li>
            SIMAK UI S2 dan Profesi hanya dapat memilih 1 program studi. Biaya
            pendaftaran 2024 adalah 1.300.000
          </li>
          <li>
            SIMAK UI S1 kelas RPL hanya dapat memilih 1 program studi. Biaya
            pendaftaran 2024 adalah 750.000
          </li>
          <li>
            SIMAK UI S1 dan Vokasi 2024
            <ul>
              <li>
                Dalam satu formulir pendaftar dapat memilih hingga 6 program
                studi. Pilihan program studi bisa dari program Sarjana dan
                Vokasi sekaligus.
              </li>
              <li>
                Ketentuan pemilihan yakni S1 Reguler maksimal 4 pilihan, Vokasi
                D3 maksimal 2 pilihan dan Vokasi D4 maksimal 2 pilihan.
              </li>
              <li>
                Biaya pendaftaran SIMAK UI S1 dan Vokasi 2024 sebesar Rp500.000
                untuk 2 pilihan pertama. Jika hanya memilih 1 prodi tetap
                membayar Rp500.000.
              </li>
              <li>
                Setiap tambah prodi/jurusan selanjutnya dikenakan tambahan
                Rp100.000/prodi.
              </li>
            </ul>
          </li>
          <li>
            SIMAK UI S1 Kelas Internasional hanya dapat memilih 1 program studi.
            Biaya pendaftarannya 1.600.000.
          </li>
        </ul>
      </div>
    </div>

    <!-- FAQ 12 -->
    <div class="faq-container">
      <button @click="toggleContent(11)" class="faq-button">
        <h3>
          Bagaimana cara mendapatkan no.pendaftaran untuk melakukan pembayaran?
        </h3>
      </button>
      <div v-if="isVisible[11]" class="faq-content">
        <p>
          Nomor pendaftaran muncul di akun setelah anda selesai membuat
          pendaftaran <br />
          Anda juga dapat mengunduh lembar pendaftaran yang berisi data
          pendaftaran dengan mengklik menu lembar pendaftaran. Periksa kembali
          isian data pendaftaran anda sebelum membayar pendaftaran, karena
          setelah membayar data pendaftaran tidak dapat diubah. Lembar
          pendaftara berbeda dari kartu ujian peserta. <br />
          Lembar pendaftaran hanya untuk disimpan oleh pendaftar. Dapat juga
          digunakan sebagai bukti pendaftaran untuk ditunjukkan kepada teller
          bank saat membayar biaya pendaftaran.
        </p>
      </div>
    </div>

    <!-- FAQ 13 -->
    <div class="faq-container">
      <button @click="toggleContent(12)" class="faq-button">
        <h3>Saya telah verifikasi, apakah data saya masih bisa diubah?</h3>
      </button>
      <div v-if="isVisible[12]" class="faq-content">
        <p>Ya.</p>
        <p>
          Anda harus membatalkan pendaftaran yang telah diverifikasi, kemudian
          membuat pendaftaran baru pada akun yang sama. Dengan membatalkan
          pendaftaran berarti menghapus data dan no.pendaftaran. Setelah membuat
          pendaftaran baru, anda akan mendapat no.pendaftaran baru yang dapat
          digunakan sebagai tujuan pembayaran.
        </p>
      </div>
    </div>

    <!-- FAQ 14 -->
    <div class="faq-container">
      <button @click="toggleContent(13)" class="faq-button">
        <h3>Saya telah membayar, apakah data saya masih bisa diubah?</h3>
      </button>
      <div v-if="isVisible[13]" class="faq-content">
        <p>Tidak. Setelah membayar data tidak dapat diubah.</p>
        <p>
          Pada saat mendaftar, pendaftar telah memiliki kesempatan memperbaiki
          data. Dan saat pendaftaran, peserta telah menyetujui konfirmasi
          pengisian data, serta telah melakukan verifikasi.
        </p>
      </div>
    </div>

    <!-- FAQ 15 -->
    <div class="faq-container">
      <button @click="toggleContent(14)" class="faq-button">
        <h3>Bagaimana pelaksaan ujian SIMAK UI?</h3>
      </button>
      <div v-if="isVisible[14]" class="faq-content">
        <p>Mekanisme ujian akan diinformasikan kemudian.</p>
      </div>
    </div>

    <!-- FAQ 16 -->
    <div class="faq-container">
      <button @click="toggleContent(15)" class="faq-button">
        <h3>Materi SIMAK UI mencakup apa saja?</h3>
      </button>
      <div v-if="isVisible[15]" class="faq-content">
        <p class="materi">Materi ujian SIMAK UI S1 dan Vokasi 2024</p>
        <ul>
          <li>
            Kemampuan Dasar (Matematika Dasar, Bahasa Indonesia, Bahasa Inggris)
          </li>
          <li>
            Pengukuran Kemampuan Akademik (Verbal, Kuantitatif, dan Logika)
          </li>
        </ul>
        <p class="materi">Materi ujian SIMAK S1 Kelas Internasional 2024</p>
        <ul>
          <li>
            Basics Mathematics, English, Logic, dan Quantitative Reasoning
          </li>
        </ul>
        <p class="materi">
          Materi Ujian SIMAK S1 kelas RPL (Ekstensi), Profesi, Spesialis, S2, S3
          terdiri dari
        </p>
        <ul>
          <li>Tes Pengukuran Kemampuan Akademik (biasa dikenal dengan TPA)</li>
          <li>Bahasa Inggris</li>
        </ul>
        <p>
          Untuk mempelajari soal-soal SIMAK UI tahun-tahun sebelumnya dapat di
          download
          <a href="https://old.simak.ui.ac.id/download-2.html?category=2"
            >di sini</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqCount = 20;

const isVisible = ref(Array(faqCount).fill(false));

const toggleContent = (index) => {
  isVisible.value = isVisible.value.map((val, i) => (i === index ? !val : val));
};
</script>

<style scoped>
.expand-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.faq-container {
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

/* Full-width button with background */
.faq-button {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.faq-button:hover {
  background-color: #e6e6e6;
}

h3 {
  margin: 0;
  font-size: 1.1em;
  color: #333;
}

.faq-content {
  padding: 10px;
  border-top: 1px solid #ccc;
  border: 1px solid #e3e0e0;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  font-size: medium;
}
a {
  color: blueviolet;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.materi {
  margin: 0;
}
</style>

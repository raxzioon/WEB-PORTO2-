export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface CaseStudy {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  client: string;
  targetAudience: string;
  problem: string;
  whatAdzkaBuilt: string[];
  techStack: string[];
  results: string[];
  businessModel?: {
    studentFee: string;
    clientFee: string;
    security: string;
    targetMarket: string;
  };
  visualAssets: {
    hero?: string;
    logo?: string;
    kadesAvatar?: string;
    sragenLogo?: string;
    screens?: string[];
    victoryPhoto?: string;
    pitchPhoto?: string;
  };
  ctaLabel?: string;
  ctaUrl?: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  category: 'Akademik & Riset' | 'Pengajaran' | 'Engineering' | 'Operasional';
  highlights: string[];
  badgeColor?: string;
}

export interface TeachingItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  stats: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: 'Cloud & AI' | 'Data & BI' | 'Coding' | 'Edukasi';
  verifyNote?: string;
  image?: string;
  verifyUrl?: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  durationNote: string;
  scopeItems: string[];
  targetClient: string;
  isPopular?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  placeholderTag: string;
}

export const siteContent = {
  meta: {
    title: 'Adzka Arroya — Full-Stack Builder & Educator | Telkom University',
    description: 'Portofolio Muhammad Adzka Arroya: Builder web berskala nyata untuk 4.500+ warga desa Denanyar, Juara 1 BizCREATE 2026, dan pengajar IT & STEM.',
    author: 'Muhammad Adzka Arroya',
    url: 'https://adzkaarroya.my.id',
  },

  personal: {
    fullName: 'Muhammad Adzka Arroya',
    displayName: 'Adzka Arroya',
    nickname: 'Roy',
    campus: 'Telkom University',
    major: 'S1 Sistem Informasi',
    location: 'Kabupaten Bekasi & Bandung, Jawa Barat',
    headline: 'Website desa untuk 4.500 warga. Dibangun berdua dari nol.',
    subheadline: 'Saya membangun sistem yang benar-benar dipakai orang, dan saya bisa menjelaskannya sampai orang non-teknis paham.',
    statusBadge: 'TERBUKA UNTUK PROYEK & KONTRAK',
    whatsappNumber: '+62 819-0660-2421',
    whatsappLink: 'https://wa.me/6281906602421?text=Halo%20Adzka,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20proyek...',
    email: 'yakokapa@gmail.com',
    linkedinUrl: 'https://linkedin.com/in/adzkaarroya',
    linkedinDisplay: 'linkedin.com/in/adzkaarroya',
  },

  proofMetrics: [
    {
      value: '4.500+',
      label: 'Warga Terlayani',
      detail: 'Platform digital Desa Denanyar mandiri birokrasi',
    },
    {
      value: 'Juara 1',
      label: 'BizCREATE 2026',
      detail: 'Kompetisi Business Plan TelUGig (Telkom University)',
    },
    {
      value: '5 Modul',
      label: 'Praktikum Diajar',
      detail: 'Word, Excel, Canva, Power BI & WordPress di SAG Lab',
    },
    {
      value: '7+',
      label: 'Sertifikasi Resmi',
      detail: 'Google BI, Google AI, DQLab, Dicoding & Roblox',
    },
  ] as Metric[],

  ticker: [
    'SISTEM SURAT MENYURAT ONLINE',
    'LARAVEL & DOCKER SPECIALIST',
    '4.500+ WARGA DESA TERLAYANI',
    'JUARA 1 BIZCREATE 2026',
    'POWER BI & DATA VISUALIZATION',
    'MASTER TEACHER ROBLOX STUDIO',
    'ASISTEN PRAKTIKUM SAG LAB TELKOM',
    'MACHINE LEARNING RESEARCHER',
    'ZERO BOGUS CLAIMS — HASIL NYATA',
  ],

  caseStudies: [
    {
      id: 'desa-denanyar',
      badge: 'PROYEK #01 — GOVTECH PELAYANAN PUBLIK',
      title: 'Platform Digital Desa Denanyar',
      subtitle: 'Modernisasi Birokrasi Pelayanan Publik & Surat Menyurat Online Mandiri Warga',
      role: 'Full Stack Developer (Kontrak)',
      period: 'Juli 2026 - Agustus 2026',
      client: 'Pemerintah Desa Denanyar, Kec. Tangen, Kab. Sragen',
      targetAudience: '4.500+ Warga Desa (1.503 Kepala Keluarga, 19 RT, 4 Kebayanan)',
      problem: 'Sebelumnya, seluruh proses permohonan surat keterangan (Surat Domisili, Surat Usaha, SKTM) mewajibkan warga datang langsung dan mengantre di kantor desa. Berkas fisik rentan tercecer, proses validasi lambat, dan perangkat desa kesulitan menampilkan data demografi kependudukan secara real-time untuk laporan instansi tingkat kabupaten.',
      whatAdzkaBuilt: [
        'Merancang dan membangun web app mandiri dari nol dengan Laravel, Livewire, dan Tailwind CSS.',
        'Mengembangkan sistem mandiri "Surat Menyurat Online" dengan formulir terstruktur yang langsung masuk ke antrean verifikasi perangkat desa.',
        'Membangun Dynamic Administrator Dashboard untuk visualisasi real-time demografi penduduk, arsip berkas, dan warta kegiatan desa.',
        'Mengonfigurasi environment kontainer Docker Sail dan database MySQL untuk memastikan keandalan deployment.',
      ],
      techStack: ['Laravel', 'Livewire', 'Tailwind CSS', 'Docker Sail', 'MySQL'],
      results: [
        'Sistem siap melayani 4.458 warga desa tanpa kendala bottleneck birokrasi manual.',
        'Pangkas waktu tunggu pengurusan surat administrasi dari hari ke menit.',
        'Data kependudukan 1.503 KK dan 19 RT kini terpetakan secara digital dan transparan.',
        'Aparatur desa memiliki panel kendali terpusat yang mudah dipahami staf non-teknis.',
      ],
      ctaLabel: 'Kunjungi Website Resmi Desa Denanyar',
      ctaUrl: 'https://denanyar-tangen.desa.id/',
      visualAssets: {
        hero: '/images/denanyar-hero.jpg',
        kadesAvatar: '/images/kades-avatar.jpg',
        sragenLogo: '/images/sragen-logo.png',
        screens: [
          '/images/denanyar-mobile-1.jpg',
          '/images/denanyar-mobile-2.jpg',
          '/images/denanyar-mobile-3.jpg',
        ],
      },
    },
    {
      id: 'telugig',
      badge: 'PROYEK #02 — STARTUP & BIZ PLAN KAMPUS',
      title: 'TelUGig — Hyper-Local Campus Freelance',
      subtitle: 'Platform Penghubung Talenta Mahasiswa Telkom University x Digitalisasi UMKM Lokal',
      role: 'Co-Founder & Business/Tech Strategist (Tim Power Ranger Bojongsoang)',
      period: 'Oktober 2026',
      client: 'Ekosistem Mahasiswa Telkom University & UMKM Sekitar Kampus',
      targetAudience: 'Talenta Mahasiswa Aktif & Pemilik Usaha Mikro/Kecil/Menengah',
      problem: 'Mahasiswa bertalenta sering kesulitan mendapatkan jam terbang proyek nyata karena platform freelance global mengenakan potongan fee besar (hingga 20%) serta risiko gagal bayar. Di saat bersamaan, ratusan UMKM di sekitar kampus butuh bantuan desain, digital marketing, dan pembuatan web terjangkau, namun ragu menyewa pihak luar tanpa jaminan kepastian hasil.',
      whatAdzkaBuilt: [
        'Merancang arsitektur produk dan model bisnis freelance hiper-lokal berlandaskan survei dan wawancara pasar langsung.',
        'Menerapkan skema "Zero-Fee Policy" bagi mahasiswa: mahasiswa menerima 100% dari bayaran proyek tanpa potongan komisi sama sekali.',
        'Mendesain model pendapatan B2B via 15% Client Success Fee kepada UMKM sebagai biaya jaminan kualitas dan koordinasi proyek.',
        'Mengonsep arsitektur sistem Escrow / Mandatory DP untuk melindungi kedua pihak dari wanprestasi pembayaran.',
      ],
      techStack: ['Product Strategy', 'Market Validation', 'Escrow System Design', 'Fintech Model', 'B2B Workflow'],
      businessModel: {
        studentFee: '0% Komisi (Mahasiswa terima 100% utuh)',
        clientFee: '15% Client Success Fee (Dibayar UMKM)',
        security: 'Escrow / Mandatory DP (Proteksi dana dua arah)',
        targetMarket: 'Mahasiswa Telkom University x UMKM Bandung Raya',
      },
      results: [
        'Meraih Juara 1 Business Plan Competition BizCREATE 2026 (FKS Telkom University).',
        'Validasi model bisnis yang berkelanjutan dan adil bagi ekosistem talenta muda.',
        'Rancangan finansial dan alur escrow diakui dewan juri sebagai solusi konkret nyata.',
      ],
      visualAssets: {
        victoryPhoto: '/images/telugig-juara-1.jpg',
        pitchPhoto: '/images/telugig-pitch.jpg',
        logo: '/images/bizcreate-logo.jpg',
      },
    },
  ] as CaseStudy[],

  experience: [
    {
      period: 'November 2026 - Sekarang',
      title: 'Research Assistant (Research Division)',
      organization: 'SAG Laboratory, Telkom University',
      category: 'Akademik & Riset',
      highlights: [
        'Melakukan riset dan analisis data terapan untuk mendukung proyek laboratorium dan studi teknologi informasi terkini.',
        'Berkolaborasi erat bersama tim peneliti laboratorium dalam merumuskan solusi komputasional dan mendokumentasikan temuan teknis.',
      ],
      badgeColor: '#3A5BFF',
    },
    {
      period: 'September 2026 - Sekarang',
      title: 'Practicum Assistant (Pengantar Sistem Informasi)',
      organization: 'SAG Laboratory, Telkom University',
      category: 'Pengajaran',
      highlights: [
        'Mengajar dan memandu mahasiswa melalui 5 modul praktikum komprehensif: Microsoft Word, Microsoft Excel, Canva, Power BI, dan WordPress.',
        'Memberikan asistensi teknis pemecahan masalah secara langsung, evaluasi performa belajar, dan penilaian tugas praktikum mahasiswa.',
      ],
      badgeColor: '#FFD23F',
    },
    {
      period: 'Agustus 2026 - Oktober 2026',
      title: 'Roblox Studio Master Teacher & Mentor',
      organization: 'Ruangguru',
      category: 'Pengajaran',
      highlights: [
        'Mengajar dasar pemrograman, logika komputasi, scripting bahasa Lua, dan pengembangan lingkungan game 3D untuk peserta Roblox Scholarship Program.',
        'Merancang aktivitas pembelajaran interaktif berbasis proyek guna menumbuhkan kemampuan computational thinking sejak dini.',
      ],
      badgeColor: '#FFD23F',
    },
    {
      period: 'Juli 2026 - Oktober 2026',
      title: 'IT Teacher',
      organization: 'Sekolah Hamidah Sampurna',
      category: 'Pengajaran',
      highlights: [
        'Menyusun dan menyampaikan kurikulum Teknologi Informasi aplikatif untuk siswa kelas 4 (SD), 7, 8, dan 9 (SMP).',
        'Mengintegrasikan platform edukasi interaktif Code.org dan modul robotika untuk melatih pemecahan masalah komputasional siswa.',
      ],
      badgeColor: '#FFD23F',
    },
    {
      period: 'Juli 2026 - November 2026',
      title: 'Web Maintenance Specialist',
      organization: 'Hamidah Group',
      category: 'Engineering',
      highlights: [
        'Memantau operasi harian, performa server, dan protokol keamanan di seluruh platform web perusahaan.',
        'Memastikan stabilitas dan uptime server konsisten tanpa downtime kritis sepanjang masa jabatan.',
      ],
      badgeColor: '#B3202A',
    },
    {
      period: 'Juli 2026 - Oktober 2026',
      title: 'Research Assistant (Machine Learning)',
      organization: 'PUI-PT AICOMS, Telkom University',
      category: 'Akademik & Riset',
      highlights: [
        'Berkontribusi dalam proyek riset akademik berfokus pada algoritma Machine Learning dan integrasi teknologi pada Pusat Unggulan Iptek Telkom University.',
      ],
      badgeColor: '#3A5BFF',
    },
    {
      period: 'Juli 2026 - Agustus 2026',
      title: 'Full Stack Developer (Contract)',
      organization: 'Pemerintah Desa Denanyar',
      category: 'Engineering',
      highlights: [
        'Membangun platform pelayanan publik terpadu melayani 4.500+ warga dengan Laravel, Livewire, Docker Sail, Tailwind CSS, dan MySQL.',
        'Mengembangkan sistem mandiri Surat Menyurat Online dan dashboard visualisasi demografi real-time.',
      ],
      badgeColor: '#B3202A',
    },
    {
      period: 'Januari 2023 - Juni 2023',
      title: 'Social Media Team & Barista',
      organization: 'Rudy Project Indonesia',
      category: 'Operasional',
      highlights: [
        'Mengelola strategi konten media sosial untuk mendongkrak brand engagement dan menganalisis metrik performa digital.',
        'Menjalankan operasional gerai harian serta melayani interaksi langsung pelanggan sebagai barista.',
      ],
      badgeColor: '#0A0A0A',
    },
  ] as ExperienceItem[],

  teachingAndResearch: [
    {
      title: 'Asisten Riset & Praktikum (5 Modul)',
      institution: 'SAG Laboratory — Telkom University',
      period: 'Sep 2026 - Sekarang (Aktif)',
      description: 'Aktif membimbing mahasiswa S1 Sistem Informasi di 5 modul praktikum inti (Word, Excel, Canva, Power BI, WordPress) serta menjalankan riset terapan di Research Division SAG Lab. Berfokus pada logika praktis dan pemecahan masalah komputasional.',
      stats: 'Research Division & 5 Modul Praktikum Lab',
      tags: ['Research Division', 'Power BI', 'Excel', 'WordPress', 'Mentoring Mahasiswa'],
    },
    {
      title: 'Master Teacher Roblox Studio & Lua Scripting',
      institution: 'Ruangguru (Roblox Scholarship Program)',
      period: 'Agt 2026 - Okt 2026 (Selesai)',
      description: 'Mengampu beasiswa resmi untuk talenta muda. Mentransformasi antusiasme bermain game menjadi pemahaman arsitektur software: variabel, loop, event-driven programming, dan spatial 3D reasoning dengan bahasa Lua.',
      stats: 'Sertifikasi Resmi Ruangguru & Roblox',
      tags: ['Lua Scripting', 'Game Development 3D', 'STEM Education', 'Algoritma'],
    },
    {
      title: 'Kurikulum IT Lintas Jenjang (SD & SMP)',
      institution: 'Sekolah Hamidah Sampurna',
      period: 'Jul 2026 - Okt 2026 (Selesai)',
      description: 'Merancang kurikulum teknologi yang berjenjang: dari computational thinking dasar kelas 4 SD menggunakan Code.org hingga logika robotika dan internet sehat untuk kelas 7, 8, dan 9 SMP.',
      stats: '4 Jenjang Kelas (Kelas 4, 7, 8, dan 9)',
      tags: ['Code.org', 'Robotika', 'Digital Literacy', 'Desain Kurikulum'],
    },
    {
      title: 'Riset Machine Learning Terapan',
      institution: 'PUI-PT AICOMS (Pusat Unggulan Iptek Telkom University)',
      period: 'Jul 2026 - Okt 2026 (Selesai)',
      description: 'Meneliti implementasi algoritma Machine Learning terapan bersama tim periset Center of Excellence, menghubungkan pemodelan data teoritis dengan kebutuhan analitik sistem nyata.',
      stats: 'Riset Akademik & Center of Excellence',
      tags: ['Machine Learning', 'Python', 'Algoritma Data', 'Data Science'],
    },
  ] as TeachingItem[],

  skills: [
    {
      category: 'Web Engineering (Full-Stack)',
      description: 'Membangun aplikasi web tangguh yang cepat dan siap pakai bagi pengguna awam.',
      skills: ['Laravel', 'Livewire', 'Tailwind CSS', 'PHP (OOP)', 'MySQL', 'RESTful APIs', 'WordPress', 'HTML5 / Modern CSS', 'JavaScript'],
    },
    {
      category: 'Data & Business Intelligence',
      description: 'Mengekstrak data mentah menjadi dasbor keputusan yang bisa dipahami manajemen non-teknis.',
      skills: ['Power BI', 'Google Data Studio / Looker Studio', 'Machine Learning', 'Credit Risk Analysis', 'Data Modeling', 'Data Visualization', 'Python', 'R', 'SQL'],
    },
    {
      category: 'Tools & Infrastruktur',
      description: 'Alat kerja untuk reproduksibilitas kode, isolasi sistem, dan visual branding.',
      skills: ['Docker', 'Docker Sail', 'Git & GitHub', 'Roblox Studio (Lua)', 'Linux Environment', 'Canva'],
    },
    {
      category: 'Pedagogi & Edukasi Teknis',
      description: 'Kemampuan langka menerjemahkan kode menjadi materi pembelajaran yang jelas.',
      skills: ['Asistensi Praktikum Lab', 'Penyusunan Kurikulum IT', 'Pengajaran Algoritma Pemula', 'Mentoring Interaktif', 'Bilingual IT (ID/EN)'],
    },
  ] as SkillCategory[],

  certifications: [
    {
      title: 'Google Business Intelligence Professional Certificate',
      issuer: 'Google / Coursera',
      date: 'Juli 2026',
      category: 'Data & BI',
      verifyNote: 'Kompetensi: Data modeling, BI metrics, dashboard design & SQL',
    },
    {
      title: 'Google AI Professional Certificate & AI for Data Analysis',
      issuer: 'Google / Coursera',
      date: 'Juni 2026',
      category: 'Cloud & AI',
      verifyNote: 'Kompetensi: AI workflow, machine learning fundamentals & data reasoning',
    },
    {
      title: 'Data Science in Finance: Credit Risk Analysis',
      issuer: 'DQLab',
      date: 'Juli 2026',
      category: 'Data & BI',
      verifyNote: 'Kompetensi: Pemodelan risiko kredit finansial berbasis data analitik',
    },
    {
      title: 'R Fundamental for Data Science',
      issuer: 'DQLab',
      date: '19 Juli 2026',
      credentialId: '#DQLABINTR1ENLRKH',
      category: 'Data & BI',
      verifyNote: 'Kompetensi: Manipulasi dataframe, visualisasi dan statistik dasar R',
      image: '/images/cert-dqlab-r.jpg',
    },
    {
      title: 'Master Teacher of Roblox Education, Safety, and Civility',
      issuer: 'Ruangguru x Roblox',
      date: 'September 2026',
      credentialId: 'CERT-7UVDG7CE',
      category: 'Edukasi',
      verifyNote: 'Kompetensi: Pedagogi komputasional, Lua scripting, dan keamanan digital anak',
      image: '/images/cert-roblox.jpg',
    },
    {
      title: 'Spec-Driven Development dengan Kiro',
      issuer: 'Dicoding Indonesia',
      date: '12 September 2026',
      credentialId: 'MRZMVQ5E3ZYQ',
      category: 'Coding',
      verifyNote: 'Kompetensi: Spec-Driven Development, unit test architecture, dan AI code workflow',
      image: '/images/cert-dicoding-kiro.jpg',
      verifyUrl: 'https://www.dicoding.com/certificates/MRZMVQ5E3ZYQ',
    },
    {
      title: 'Sekolah Pasar Modal (SPM)',
      issuer: 'PT Bursa Efek Indonesia (IDX) / KSEI',
      date: '18 September 2026',
      category: 'Data & BI',
      verifyNote: 'Kompetensi: Analisis instrumen pasar modal, mekanisme bursa efek & literasi keuangan formal',
      image: '/images/cert-idx-spm.jpg',
    },
  ] as CertificationItem[],

  servicesRateCard: [
    {
      id: 'paket-desa-instansi',
      name: 'Website Layanan Publik / Instansi Desa',
      tagline: 'Portal resmi, sistem surat online mandiri warga, dan dashboard data kependudukan.',
      targetClient: 'Pemerintah Desa, Kelurahan, Kecamatan, atau Instansi Publik Komunitas',
      priceNote: 'Rp 5.500.000 – Rp 12.000.000',
      durationNote: '3 – 5 minggu pengerjaan',
      isPopular: true,
      scopeItems: [
        'Desain antarmuka responsif custom (cepat dibuka di HP warga & hemat kuota)',
        'Sistem Surat Menyurat Online mandiri warga (Surat Domisili, Usaha, SKTM, dll.)',
        'Dashboard Admin: visualisasi data demografi real-time & arsip surat terpusat',
        'Modul warta desa resmi, profil perangkat, dan etalase program BUMDes',
        'Setup kontainerisasi Docker / deployment server cloud instansi',
        'Garansi teknis 30 hari pasca-serah terima + sesi pelatihan operator balai desa',
      ],
    },
    {
      id: 'paket-dashboard-bi',
      name: 'Dashboard Business Intelligence & Data Viz',
      tagline: 'Ubah spreadsheet berantakan menjadi panel kendali keputusan bisnis yang jernih.',
      targetClient: 'UMKM, Startups, Unit Usaha Kampus, atau Lembaga Riset',
      priceNote: 'Rp 3.500.000 – Rp 7.500.000',
      durationNote: '2 – 3 minggu pengerjaan',
      isPopular: false,
      scopeItems: [
        'Audit & pembersihan sumber data mentah (Excel, CSV, database MySQL/Postgres)',
        'Pemodelan data terstruktur & perumusan indikator KPI bisnis utama',
        'Desain interaktif Power BI atau Google Looker Studio dengan visualisasi tajam',
        'Penyusunan kamus data dan panduan interpretasi bagi tim non-teknis',
        'Konfigurasi refresh data berkala & 2 kali sesi penyesuaian/revisi metrik',
      ],
    },
    {
      id: 'paket-workshop-mentoring',
      name: 'Pelatihan IT, Coding & Literasi STEM',
      tagline: 'Workshop praktis ramah pemula untuk sekolah, organisasi mahasiswa, atau komunitas.',
      targetClient: 'Sekolah (SD-SMP-SMA), Laboratorium Kampus, atau Komunitas Talenta Muda',
      priceNote: 'Rp 750.000 – Rp 1.500.000 / sesi',
      durationNote: 'Fleksibel (1 sesi 3 jam hingga program mingguan)',
      isPopular: false,
      scopeItems: [
        'Pilihan topik: Dasar Web (HTML/CSS/Laravel), Power BI Praktis, atau Roblox 3D Lua',
        'Materi dan modul praktik hands-on (langsung hasilkan karya nyata)',
        'Gaya mengajar komunikatif, terstruktur, dan tidak menakutkan bagi pemula',
        'Konsultasi proyek mini dan umpan balik kode per peserta',
        'Kapasitas hingga 30 peserta per kelas, tersedia moda Daring atau Luring',
      ],
    },
  ] as ServicePackage[],

  // Set to true to show testimonials; set to false if real testimonials are not yet collected
  // As requested: "Jika tidak ada data, sembunyikan seksi lewat satu flag di config"
  testimonialsConfig: {
    showTestimonials: false, // Ubah ke true jika data kutipan asli sudah diisi
    items: [
      {
        id: 'testi-1',
        placeholderTag: '[ISI: KUTIPAN ASLI DARI KEPALA DESA DENANYAR]',
        quote: '[ISI: "Sistem surat menyurat online yang dibangun Adzka memangkas waktu tunggu warga kami dan memudahkan aparatur desa memantau administrasi secara tertib."]',
        author: '[ISI: Nama Kepala Desa / Perangkat Desa]',
        role: '[ISI: Kepala Desa Denanyar]',
        organization: 'Pemerintah Desa Denanyar, Kec. Tangen, Kab. Sragen',
      },
      {
        id: 'testi-2',
        placeholderTag: '[ISI: KUTIPAN ASLI DARI KOORDINATOR SAG LAB]',
        quote: '[ISI: "Adzka memiliki dedikasi tinggi dalam membimbing 5 modul praktikum; penjelasannya runtut dan mahasiswa sangat terbantu."]',
        author: '[ISI: Nama Dosen Pembina / Koordinator Lab]',
        role: '[ISI: Koordinator Praktikum]',
        organization: 'SAG Laboratory, Telkom University',
      },
      {
        id: 'testi-3',
        placeholderTag: '[ISI: KUTIPAN ASLI DARI RUANGGURU / SEKOLAH HAMIDAH]',
        quote: '[ISI: "Pendekatan Adzka dalam mengajarkan logika komputasi dan scripting game membuat siswa sangat antusias dan cepat menguasai konsep dasar."]',
        author: '[ISI: Nama Rekan Pengajar / Koordinator Program]',
        role: '[ISI: Koordinator Program STEM]',
        organization: 'Ruangguru / Sekolah Hamidah',
      },
    ] as TestimonialItem[],
  },

  education: [
    {
      institution: 'Telkom University',
      degree: 'S1 Sistem Informasi (Bachelor of Science in Information Systems)',
      period: '2025 - Sekarang',
      status: 'Mahasiswa Aktif',
      note: 'Fokus pada Rekayasa Perangkat Lunak, Tata Kelola Sistem, dan Business Intelligence. Aktif sebagai Research Assistant dan Practicum Assistant di SAG Laboratory.',
    },
    {
      institution: 'Pondok Tahfidz Sulaimaniyah',
      degree: 'Pendidikan Menengah / Program Menghafal Al-Qur\'an',
      period: 'Lulus 2019',
      status: 'Hafidz 30 Juz',
      note: 'Membentuk kedisiplinan tinggi, ketahanan mental, dan integritas kerja. Menempuh kurikulum pendidikan berbasis bahasa Turki.',
    },
  ],
};

/* ==========================================================================
   PORTAL DESA KABUPATEN MALINAU — script.js
   Data 15 kecamatan & Desa + logika Grid Card / Panel Desa + pencarian
   ========================================================================== */

// ---- 1. DATA 15 kecamatan & DESAss -----------------------------------------
const DATA_kecamatan = [
  {kecamatan: "Malinau Kota",ikon: "fa-mountain", gambar: "assets/img/kecamatan/malinau-kota.png",
  Desa: [
    { nama: "Batu Lidung", kode: "6502022001", jenis: "kelurahan" },
    { nama: "Malinau Kota", kode: "6502022002", jenis: "kelurahan" },
    { nama: "Pelita Kanaan", kode: "6502022003", jenis: "kelurahan" },
    { nama: "Malinau Hulu", kode: "6502022004", jenis: "kelurahan" },
    { nama: "Malinau Hilir", kode: "6502022005", jenis: "kelurahan" },
    { nama: "Tanjung Keranjang", kode: "6502022006", jenis: "kelurahan" }
    ] 
  },
  {
  kecamatan: "Malinau Barat",ikon: "fa-mountain", gambar: "assets/img/kecamatan/Malinau-Barat.png",
  Desa: [
    { nama: "Long Bila", kode: "6502032001", jenis: "desa" },
    { nama: "Long Kenipe", kode: "6502032002", jenis: "desa" },
    { nama: "Long Loreh", kode: "6502032003", jenis: "desa" },
    { nama: "Sempayang", kode: "6502032004", jenis: "desa" },
    { nama: "Tanjung Lapang", kode: "6502032005", jenis: "desa" },
    { nama: "Punan Bengalun", kode: "6502032006", jenis: "desa" },
    { nama: "Sesua", kode: "6502032007", jenis: "desa" },
    { nama: "Setulang", kode: "6502032008", jenis: "desa" }   
    ] 
  },
  { 
  kecamatan: "Malinau Utara",ikon: "fa-sun",gambar: "assets/img/kecamatan/malinau-utara.png",
  Desa: [
    { nama: "Sembuak Warod", kode: "6502072001", jenis: "desa" },
    { nama: "Luso", kode: "6502072002", jenis: "desa" },
    { nama: "Respen Tubu", kode: "6502072003", jenis: "desa" },
    { nama: "Kaliamok", kode: "6502072004", jenis: "desa" },
    { nama: "Malinau Seberang", kode: "6502072005", jenis: "desa" },
    { nama: "Lubok Manis", kode: "6502072006", jenis: "desa" },
    { nama: "Semengaris", kode: "6502072007", jenis: "desa" },
    { nama: "Kelapis", kode: "6502072008", jenis: "desa" },
    { nama: "Belayan", kode: "6502072009", jenis: "desa" },
    { nama: "Putat", kode: "6502072010", jenis: "desa" },
    { nama: "Salap", kode: "6502072011", jenis: "desa" },
    { nama: "Seruyung", kode: "6502072012", jenis: "desa" }
    ] 
  },
  {
  kecamatan: "Malinau Selatan",ikon: "fa-sun",gambar: "assets/img/kecamatan/malinau-selatan.png",
  Desa: [
    { nama: "Long Loreh", kode: "6502052001", jenis: "desa" },
    { nama: "Long Jalan", kode: "6502052002", jenis: "desa" },
    { nama: "Setarap", kode: "6502052003", jenis: "desa" },
    { nama: "Punan Gong Solok", kode: "6502052004", jenis: "desa" },
    { nama: "Long Adiu", kode: "6502052005", jenis: "desa" },
    { nama: "Metun Sajau", kode: "6502052006", jenis: "desa" },
    { nama: "Long Rat", kode: "6502052007", jenis: "desa" },
    { nama: "Paya Seturan", kode: "6502052008", jenis: "desa" }
  ]
  },
  {
  kecamatan: "Kayan Hulu",ikon: "fa-mountain-sun",gambar: "assets/img/kecamatan/kayan-hulu.png",
  Desa: [
    { nama: "Long Betaoh", kode: "6502162001", jenis: "desa" },
    { nama: "Long Nawang", kode: "6502162002", jenis: "desa" },
    { nama: "Long Payau", kode: "6502162003", jenis: "desa" },
    { nama: "Long Temuyat", kode: "6502162004", jenis: "desa" },
    { nama: "Nawang Baru", kode: "6502162005", jenis: "desa" }
    ] 
  },
  {
  kecamatan: "Malinau Selatan Hilir",ikon: "fa-sun",gambar: "assets/img/kecamatan/malinau-selatan-hilir.png",
  Desa: [
    { nama: "Punan Setarap", kode: "6502132003", jenis: "desa" },
    { nama: "Batu Kajang", kode: "6502132004", jenis: "desa" },
    { nama: "Gong Solok", kode: "6502132005", jenis: "desa" },
    { nama: "Punan Gong Solok", kode: "6502132006", jenis: "desa" },
    { nama: "Long Adiu", kode: "6502132007", jenis: "desa" },
    { nama: "Punan Long Adiu", kode: "6502132008", jenis: "desa" },
    { nama: "Setarap", kode: "6502132009", jenis: "desa" },
    { nama: "Setulang", kode: "6502132010", jenis: "desa" }
  ]
  },
  {
  kecamatan: "Malinau Selatan Hulu",ikon: "fa-sun",gambar: "assets/img/kecamatan/malinau-selatan-hulu.png",
  Desa: [
    { nama: "Long Lake", kode: "6502142001", jenis: "desa" },
    { nama: "Punan Mirau", kode: "6502142002", jenis: "desa" },
    { nama: "Long Rat", kode: "6502142003", jenis: "desa" },
    { nama: "Halanga", kode: "6502142004", jenis: "desa" },
    { nama: "Metut", kode: "6502142005", jenis: "desa" },
    { nama: "Long Jalan", kode: "6502142006", jenis: "desa" },
    { nama: "Nahakramo", kode: "6502142007", jenis: "desa" },
    { nama: "Tanjung Nanga", kode: "6502142008", jenis: "desa" }
  ]
  },
  {
  kecamatan: "Mentarang",ikon: "fa-sun",gambar: "assets/img/kecamatan/mentarang.png",
  Desa: [
    { nama: "Harapan Maju", kode: "6501112001", jenis: "desa" },
    { nama: "Paking", kode: "6501112002", jenis: "desa" },
    { nama: "Long Liku", kode: "6501112003", jenis: "desa" },
    { nama: "Mentarang Baru", kode: "6501112004", jenis: "desa" },
    { nama: "Long Bisai", kode: "6501112005", jenis: "desa" },
    { nama: "Long Gafid", kode: "6501112006", jenis: "desa" },
    { nama: "Temalang", kode: "6501112007", jenis: "desa" },
    { nama: "Lidung Kemenci", kode: "6501112008", jenis: "desa" },
    { nama: "Pulau Sapi", kode: "6501112009", jenis: "desa" }
  ]
  },
  {
  kecamatan: "Mentarang Hulu",ikon: "fa-sun",gambar: "assets/img/kecamatan/mentarang-hulu.png",
  Desa: [
    { nama: "Long Berang", kode: "6502122001", jenis: "desa" },
    { nama: "Long Pala", kode: "6502122002", jenis: "desa" },
    { nama: "Long Simau", kode: "6502122003", jenis: "desa" },
    { nama: "Long Mekatip", kode: "6502122005", jenis: "desa" },
    { nama: "Long Kebinu", kode: "6502122006", jenis: "desa" },
    { nama: "Long Sulit", kode: "6502122007", jenis: "desa" },
    { nama: "Long Semamu", kode: "6502122008", jenis: "desa" }
  ]
},
  {
  kecamatan: "Bahau Hulu",ikon: "fa-sun",gambar: "assets/img/kecamatan/bahau-hulu.png",
  Desa: [
    { nama: "Long Uli", kode: "6502112001", jenis: "desa" },
    { nama: "Long Alango", kode: "6502112002", jenis: "desa" },
    { nama: "Long Berini", kode: "6502112003", jenis: "desa" },
    { nama: "Long Tebulo", kode: "6502112004", jenis: "desa" },
    { nama: "Apau Ping", kode: "6502112005", jenis: "desa" },
    { nama: "Long Kemuat", kode: "6502112006", jenis: "desa" }
  ]
  },
  {
  kecamatan: "Kayan Hilir",ikon: "fa-sun",gambar: "assets/img/kecamatan/kayan-hilir.png",
  Desa: [
    { nama: "Data Dian", kode: "6502042001", jenis: "desa" },
    { nama: "Long Pipa", kode: "6502042002", jenis: "desa" },
    { nama: "Long Sule", kode: "6502042003", jenis: "desa" },
    { nama: "Sungai Anai", kode: "6502042004", jenis: "desa" },
    { nama: "Long Metun", kode: "6502042005", jenis: "desa" }
  ]
  },
  { 
  kecamatan: "Kayan Selatan",ikon: "fa-sun",gambar: "assets/img/kecamatan/kayan-selatan.png",
  Desa: [
    { nama: "Long Ampung", kode: "6502102001", jenis: "desa" },
    { nama: "Long Uro", kode: "6502102002", jenis: "desa" },
    { nama: "Lidung Payau", kode: "6502102003", jenis: "desa" },
    { nama: "Sungai Barang", kode: "6502102004", jenis: "desa" },
    { nama: "Metulang", kode: "6502102005", jenis: "desa" }
    ] 
  },
  {
  kecamatan: "Pujungan",ikon: "fa-sun",gambar: "assets/img/kecamatan/pujungan.png",
  Desa: [
    { nama: "Long Pujungan", kode: "6502032001", jenis: "desa" },
    { nama: "Long Ketaman", kode: "6502032002", jenis: "desa" },
    { nama: "Long Pua", kode: "6502032003", jenis: "desa" },
    { nama: "Long Lame", kode: "6502032004", jenis: "desa" },
    { nama: "Long Jelet", kode: "6502032005", jenis: "desa" },
    { nama: "Long Aran", kode: "6502032006", jenis: "desa" },
    { nama: "Long Paliran", kode: "6502032007", jenis: "desa" },
    { nama: "Long Bena", kode: "6502032008", jenis: "desa" },
    { nama: "Long Belaka Pitau", kode: "6502032009", jenis: "desa" }
  ]
  },
  {
  kecamatan: "Sungai Boh",ikon: "fa-sun",gambar: "assets/img/kecamatan/sungai-boh.png",
  Desa: [
    { nama: "Dumu Mahak", kode: "6502092001", jenis: "desa" },
    { nama: "Long Lebusan", kode: "6502092002", jenis: "desa" },
    { nama: "Mahak Baru", kode: "6502092003", jenis: "desa" },
    { nama: "Long Top", kode: "6502092004", jenis: "desa" },
    { nama: "Agung Baru", kode: "6502092005", jenis: "desa" },
    { nama: "Data Baru", kode: "6502092006", jenis: "desa" }
  ]
  },
  {
  kecamatan: "Sungai Tubu",
  ikon: "fa-sun",
  gambar: "assets/img/kecamatan/sungai-tubu.png",
  Desa: [
    { nama: "Long Nyau", kode: "6502152001", jenis: "desa" },
    { nama: "Long Titi", kode: "6502152002", jenis: "desa" },
    { nama: "Long Ranau", kode: "6502152003", jenis: "desa" },
    { nama: "Rian Tubu", kode: "6502152004", jenis: "desa" },
    { nama: "Long Pada", kode: "6502152005", jenis: "desa" }
  ]
  },
];

// ---- 2. UTIL ---------------------------------------------------------------

function buatSlug(nama) {
  return nama
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Tautan resmi web Desa. Ganti KONFIGURASI_TAUTAN.mode ke "klipaa" bila perlu.
function buatTautanDesa(kodeDesa) {
  return `https://webdesa.klipaa.id/village/${kodeDesa}`;
}

function highlightTeks(teks, kataKunci) {
  if (!kataKunci) return teks;
  const re = new RegExp(`(${kataKunci.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
  return teks.replace(re, "<mark>$1</mark>");
}

function nomorDua(n) {
  return String(n).padStart(2, "0");
}

function labelJumlahDesa(daftarDesa) {
  const adaDesa = daftarDesa.some(k => k.jenis === "desa");
  const adaKelurahan = daftarDesa.some(k => k.jenis === "kelurahan");
  const label = adaDesa && adaKelurahan ? "Desa/Kelurahan" : adaKelurahan ? "Kelurahan" : "Desa";
  return `${daftarDesa.length} ${label}`;
}

// ---- 3. ELEMEN DOM -----------------------------------------------------------

const grid = document.getElementById("gridKecamatan");
const inputCari = document.getElementById("inputCari");
const infoHasil = document.getElementById("infoHasil");
const tombolResetCari = document.getElementById("tombolResetCari");
const panelDesa = document.getElementById("panelDesa");
const panelDesaJudulTeks = document.getElementById("panelDesaJudulTeks");
const daftarDesaEl = document.getElementById("daftarDesa");
const tombolKembali = document.getElementById("tombolKembali");

let indexAktif = null;
let kataKunciAktif = "";

// ---- 4. RENDER GRID kecamatan ---------------------------------------------------

const WARNA_BADGE = ["hijau", "jingga", "cokelat", "gelap", "ungu", "teal"];

function buatKartukecamatan(item, indexAsli, kataKunci) {
  const kartu = document.createElement("button");
  kartu.type = "button";
  kartu.className = "kartu-kecamatan";
  kartu.dataset.index = indexAsli;
  if (indexAsli === indexAktif) kartu.classList.add("kartu-kecamatan--aktif");

  const warna = WARNA_BADGE[indexAsli % WARNA_BADGE.length];

  kartu.innerHTML = `
    <span class="kartu-kecamatan__bingkai">
      <img src="${item.gambar}" alt="Ilustrasi kecamatan ${item.kecamatan}" class="kartu-kecamatan__ikon" loading="lazy" />
      <span class="kartu-kecamatan__nomor kartu-kecamatan__nomor--${warna}">${nomorDua(indexAsli + 1)}</span>
      <span class="kartu-kecamatan__mini-ikon"><i class="fa-solid ${item.ikon || "fa-location-dot"}" aria-hidden="true"></i></span>
    </span>
    <span class="kartu-kecamatan__label">Kecamatan</span>
    <span class="kartu-kecamatan__nama">${highlightTeks(item.kecamatan, kataKunci)}</span>
    <span class="kartu-kecamatan__jumlah">${labelJumlahDesa(item.Desa)}</span>
  `;

  kartu.addEventListener("click", () => bukaPanelDesa(indexAsli));

  return kartu;
}

function renderGrid(daftar, kataKunci = "") {
  grid.innerHTML = "";
  const frag = document.createDocumentFragment();
  daftar.forEach(({ item, index }) => {
    frag.appendChild(buatKartukecamatan(item, index, kataKunci));
  });
  grid.appendChild(frag);
}

// ---- 5. PANEL Desa ----------------------------------------------------------

function bukaPanelDesa(indexAsli) {
  indexAktif = indexAsli;
  const item = DATA_kecamatan[indexAsli];

  panelDesaJudulTeks.textContent = `Desa di kecamatan ${item.kecamatan}`;
  daftarDesaEl.innerHTML = item.Desa.map((k, i) => `
    <li>
      <a class="tautan-Desa" href="${buatTautanDesa(k.kode)}" target="_blank" rel="noopener">
        <span class="tautan-Desa__nomor">${nomorDua(i + 1)}</span>
        <span class="tautan-Desa__nama">Desa ${k.nama}</span>
        <i class="fa-solid fa-arrow-up-right-from-square tautan-Desa__ikon" aria-hidden="true"></i>
      </a>
    </li>
  `).join("");

  panelDesa.hidden = false;
  document.querySelectorAll(".kartu-kecamatan").forEach((el) => {
    el.classList.toggle("kartu-kecamatan--aktif", Number(el.dataset.index) === indexAsli);
  });

  panelDesa.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function tutupPanelDesa() {
  indexAktif = null;
  panelDesa.hidden = true;
  document.querySelectorAll(".kartu-kecamatan").forEach((el) => el.classList.remove("kartu-kecamatan--aktif"));
}

tombolKembali.addEventListener("click", tutupPanelDesa);

// ---- 6. PENCARIAN REAL-TIME -------------------------------------------------

function cariDanFilter(kataKunciMentah) {
  const kataKunci = kataKunciMentah.trim().toLowerCase();
  kataKunciAktif = kataKunci;
  tombolResetCari.classList.toggle("tampil", kataKunci.length > 0);

  if (!kataKunci) {
    infoHasil.textContent = `Menampilkan seluruh ${DATA_kecamatan.length} kecamatan.`;
    renderGrid(DATA_kecamatan.map((item, index) => ({ item, index })));
    return;
  }

  const hasil = [];
  DATA_kecamatan.forEach((item, index) => {
    const namaCocok = item.kecamatan.toLowerCase().includes(kataKunci);
    const DesaCocok = item.Desa.some(k => k.nama.toLowerCase().includes(kataKunci));

    if (namaCocok || DesaCocok) {
      hasil.push({ item, index });
    }
  });

  infoHasil.textContent = hasil.length
    ? `Ditemukan ${hasil.length} kecamatan cocok dengan "${kataKunciMentah}".`
    : `Tidak ada kecamatan atau Desa yang cocok dengan "${kataKunciMentah}".`;

  renderGrid(hasil, kataKunci);

  // Jika hanya ada 1 hasil kecamatan yang cocok langsung namanya, buka panelnya otomatis
  if (hasil.length === 1) {
    bukaPanelDesa(hasil[0].index);
  } else {
    tutupPanelDesa();
  }
}

inputCari.addEventListener("input", (e) => cariDanFilter(e.target.value));
tombolResetCari.addEventListener("click", () => {
  inputCari.value = "";
  cariDanFilter("");
  inputCari.focus();
});

// ---- 7. MENU MOBILE -------------------------------------------------------------
const tombolMenuHp = document.getElementById("tombolMenuHp");
const navHp = document.getElementById("navHp");

tombolMenuHp.addEventListener("click", () => {
  const terbuka = navHp.classList.toggle("terbuka");
  tombolMenuHp.setAttribute("aria-expanded", String(terbuka));
});

navHp.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navHp.classList.remove("terbuka");
    tombolMenuHp.setAttribute("aria-expanded", "false");
  });
});

// ---- 8. ANIMASI ANGKA PARTISIPASI -----------------------------------------------

function animasiAngka(el, target, durasiMs = 1200) {
  const mulai = performance.now();
  function tik(sekarang) {
    const progres = Math.min(1, (sekarang - mulai) / durasiMs);
    el.textContent = Math.round(progres * target);
    if (progres < 1) requestAnimationFrame(tik);
  }
  requestAnimationFrame(tik);
}

// ---- 9. INISIALISASI --------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  cariDanFilter("");
  document.getElementById("tahunFooter").textContent = new Date().getFullYear();

  const semuaEntri = DATA_kecamatan.flatMap(d => d.Desa);
  const totalDesa = semuaEntri.filter(k => k.jenis === "desa").length;
  const totalKelurahan = semuaEntri.filter(k => k.jenis === "kelurahan").length;
  const elAngka = document.getElementById("angkaPartisipasi");

  const elAngkaKelurahan = document.getElementById("angkaKelurahan");
  if (elAngkaKelurahan) {
    animasiAngka(elAngkaKelurahan, totalKelurahan);
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animasiAngka(elAngka, totalDesa);
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(elAngka);
});

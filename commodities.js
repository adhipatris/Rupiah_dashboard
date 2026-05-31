// ─────────────────────────────────────────────
//  commodities.js — 50+ bahan pokok Indonesia
//  Harga dalam Rupiah per satuan
//  Sumber estimasi: BPS, Harga Pangan Nasional
// ─────────────────────────────────────────────

const YEAR_OLD = 2015;
const YEAR_NEW = 2025;
const BUDGET   = 100000;

const COMMODITIES = [
  // ── SAYUR & BUMBU ──
  { id:'cabai-merah',    name:'Cabai Merah',        category:'Sayur & Bumbu',    unit:'kg',    icon:'🌶️',  price2015:25000,  price2025:65000  },
  { id:'cabai-rawit',    name:'Cabai Rawit',         category:'Sayur & Bumbu',    unit:'kg',    icon:'🌶️',  price2015:30000,  price2025:80000  },
  { id:'bawang-merah',   name:'Bawang Merah',        category:'Sayur & Bumbu',    unit:'kg',    icon:'🧅',  price2015:18000,  price2025:45000  },
  { id:'bawang-putih',   name:'Bawang Putih',        category:'Sayur & Bumbu',    unit:'kg',    icon:'🧄',  price2015:15000,  price2025:40000  },
  { id:'bawang-bombay',  name:'Bawang Bombay',       category:'Sayur & Bumbu',    unit:'kg',    icon:'🧅',  price2015:10000,  price2025:28000  },
  { id:'tomat',          name:'Tomat',               category:'Sayur & Bumbu',    unit:'kg',    icon:'🍅',  price2015:8000,   price2025:18000  },
  { id:'kentang',        name:'Kentang',             category:'Sayur & Bumbu',    unit:'kg',    icon:'🥔',  price2015:9000,   price2025:22000  },
  { id:'wortel',         name:'Wortel',              category:'Sayur & Bumbu',    unit:'kg',    icon:'🥕',  price2015:7000,   price2025:16000  },
  { id:'kangkung',       name:'Kangkung',            category:'Sayur & Bumbu',    unit:'ikat',  icon:'🥬',  price2015:2000,   price2025:5000   },
  { id:'bayam',          name:'Bayam',               category:'Sayur & Bumbu',    unit:'ikat',  icon:'🥬',  price2015:2000,   price2025:5000   },
  { id:'kubis',          name:'Kubis / Kol',         category:'Sayur & Bumbu',    unit:'kg',    icon:'🥬',  price2015:5000,   price2025:12000  },
  { id:'kacang-panjang', name:'Kacang Panjang',      category:'Sayur & Bumbu',    unit:'kg',    icon:'🫛',  price2015:8000,   price2025:18000  },
  { id:'terong',         name:'Terong',              category:'Sayur & Bumbu',    unit:'kg',    icon:'🍆',  price2015:6000,   price2025:14000  },
  { id:'timun',          name:'Mentimun',            category:'Sayur & Bumbu',    unit:'kg',    icon:'🥒',  price2015:5000,   price2025:12000  },
  { id:'jahe',           name:'Jahe',                category:'Sayur & Bumbu',    unit:'kg',    icon:'🫚',  price2015:12000,  price2025:35000  },
  { id:'kunyit',         name:'Kunyit',              category:'Sayur & Bumbu',    unit:'kg',    icon:'🟡',  price2015:10000,  price2025:25000  },
  { id:'lengkuas',       name:'Lengkuas',            category:'Sayur & Bumbu',    unit:'kg',    icon:'🟤',  price2015:8000,   price2025:20000  },
  { id:'daun-bawang',    name:'Daun Bawang',         category:'Sayur & Bumbu',    unit:'ikat',  icon:'🌿',  price2015:2000,   price2025:6000   },
  { id:'seledri',        name:'Seledri',             category:'Sayur & Bumbu',    unit:'ikat',  icon:'🌿',  price2015:2000,   price2025:6000   },

  // ── BERAS & SEREALIA ──
  { id:'beras-medium',   name:'Beras Medium',        category:'Beras & Serealia', unit:'kg',    icon:'🌾',  price2015:9500,   price2025:15000  },
  { id:'beras-premium',  name:'Beras Premium',       category:'Beras & Serealia', unit:'kg',    icon:'🌾',  price2015:12000,  price2025:18000  },
  { id:'beras-organik',  name:'Beras Organik',       category:'Beras & Serealia', unit:'kg',    icon:'🌾',  price2015:18000,  price2025:30000  },
  { id:'tepung-terigu',  name:'Tepung Terigu',       category:'Beras & Serealia', unit:'kg',    icon:'🌾',  price2015:7500,   price2025:14000  },
  { id:'tepung-beras',   name:'Tepung Beras',        category:'Beras & Serealia', unit:'kg',    icon:'🌾',  price2015:8000,   price2025:15000  },
  { id:'jagung',         name:'Jagung Pipil',        category:'Beras & Serealia', unit:'kg',    icon:'🌽',  price2015:5000,   price2025:10000  },
  { id:'mie-kering',     name:'Mie Kering',          category:'Beras & Serealia', unit:'kg',    icon:'🍜',  price2015:12000,  price2025:22000  },

  // ── PROTEIN HEWANI ──
  { id:'daging-sapi',    name:'Daging Sapi',         category:'Protein Hewani',   unit:'kg',    icon:'🥩',  price2015:95000,  price2025:145000 },
  { id:'daging-ayam',    name:'Daging Ayam',         category:'Protein Hewani',   unit:'kg',    icon:'🍗',  price2015:28000,  price2025:40000  },
  { id:'daging-kambing', name:'Daging Kambing',      category:'Protein Hewani',   unit:'kg',    icon:'🥩',  price2015:80000,  price2025:130000 },
  { id:'ikan-bandeng',   name:'Ikan Bandeng',        category:'Protein Hewani',   unit:'kg',    icon:'🐟',  price2015:18000,  price2025:35000  },
  { id:'ikan-lele',      name:'Ikan Lele',           category:'Protein Hewani',   unit:'kg',    icon:'🐟',  price2015:14000,  price2025:28000  },
  { id:'ikan-tongkol',   name:'Ikan Tongkol',        category:'Protein Hewani',   unit:'kg',    icon:'🐠',  price2015:20000,  price2025:38000  },
  { id:'udang-segar',    name:'Udang Segar',         category:'Protein Hewani',   unit:'kg',    icon:'🍤',  price2015:45000,  price2025:85000  },
  { id:'cumi',           name:'Cumi-cumi',           category:'Protein Hewani',   unit:'kg',    icon:'🦑',  price2015:35000,  price2025:65000  },
  { id:'telur-ayam',     name:'Telur Ayam',          category:'Protein Hewani',   unit:'butir', icon:'🥚',  price2015:1200,   price2025:2200   },
  { id:'telur-bebek',    name:'Telur Bebek',         category:'Protein Hewani',   unit:'butir', icon:'🥚',  price2015:2000,   price2025:3500   },

  // ── MINYAK & LEMAK ──
  { id:'minyak-goreng',  name:'Minyak Goreng',       category:'Minyak & Lemak',   unit:'liter', icon:'🫙',  price2015:11000,  price2025:20000  },
  { id:'minyak-kelapa',  name:'Minyak Kelapa',       category:'Minyak & Lemak',   unit:'liter', icon:'🥥',  price2015:18000,  price2025:35000  },
  { id:'mentega',        name:'Mentega',             category:'Minyak & Lemak',   unit:'kg',    icon:'🧈',  price2015:25000,  price2025:55000  },
  { id:'margarin',       name:'Margarin',            category:'Minyak & Lemak',   unit:'kg',    icon:'🧈',  price2015:20000,  price2025:40000  },

  // ── GULA & PEMANIS ──
  { id:'gula-pasir',     name:'Gula Pasir',          category:'Gula & Pemanis',   unit:'kg',    icon:'🍬',  price2015:13000,  price2025:18000  },
  { id:'gula-merah',     name:'Gula Merah',          category:'Gula & Pemanis',   unit:'kg',    icon:'🟫',  price2015:15000,  price2025:28000  },
  { id:'gula-aren',      name:'Gula Aren',           category:'Gula & Pemanis',   unit:'kg',    icon:'🟫',  price2015:18000,  price2025:35000  },
  { id:'madu',           name:'Madu Asli',           category:'Gula & Pemanis',   unit:'kg',    icon:'🍯',  price2015:60000,  price2025:120000 },

  // ── SUSU & OLAHAN ──
  { id:'susu-segar',     name:'Susu Segar',          category:'Susu & Olahan',    unit:'liter', icon:'🥛',  price2015:7000,   price2025:14000  },
  { id:'susu-bubuk',     name:'Susu Bubuk',          category:'Susu & Olahan',    unit:'kg',    icon:'🥛',  price2015:55000,  price2025:95000  },
  { id:'keju',           name:'Keju Cheddar',        category:'Susu & Olahan',    unit:'kg',    icon:'🧀',  price2015:60000,  price2025:110000 },
  { id:'yogurt',         name:'Yogurt Plain',        category:'Susu & Olahan',    unit:'kg',    icon:'🥛',  price2015:25000,  price2025:50000  },

  // ── KACANG & POLONG ──
  { id:'kacang-tanah',   name:'Kacang Tanah',        category:'Kacang & Polong',  unit:'kg',    icon:'🥜',  price2015:16000,  price2025:30000  },
  { id:'kedelai',        name:'Kedelai',             category:'Kacang & Polong',  unit:'kg',    icon:'🫘',  price2015:7000,   price2025:14000  },
  { id:'tempe',          name:'Tempe',               category:'Kacang & Polong',  unit:'kg',    icon:'🫘',  price2015:8000,   price2025:18000  },
  { id:'tahu',           name:'Tahu',                category:'Kacang & Polong',  unit:'kg',    icon:'⬜',  price2015:7000,   price2025:15000  },
  { id:'kacang-hijau',   name:'Kacang Hijau',        category:'Kacang & Polong',  unit:'kg',    icon:'🫘',  price2015:12000,  price2025:22000  },
  { id:'kacang-merah',   name:'Kacang Merah',        category:'Kacang & Polong',  unit:'kg',    icon:'🫘',  price2015:14000,  price2025:26000  },

  // ── BUAH ──
  { id:'pisang',         name:'Pisang Ambon',        category:'Buah',             unit:'kg',    icon:'🍌',  price2015:8000,   price2025:18000  },
  { id:'jeruk',          name:'Jeruk Medan',         category:'Buah',             unit:'kg',    icon:'🍊',  price2015:12000,  price2025:25000  },
  { id:'apel',           name:'Apel Fuji',           category:'Buah',             unit:'kg',    icon:'🍎',  price2015:20000,  price2025:38000  },
  { id:'mangga',         name:'Mangga Harum Manis',  category:'Buah',             unit:'kg',    icon:'🥭',  price2015:12000,  price2025:28000  },
  { id:'semangka',       name:'Semangka',            category:'Buah',             unit:'kg',    icon:'🍉',  price2015:4000,   price2025:9000   },
  { id:'pepaya',         name:'Pepaya',              category:'Buah',             unit:'kg',    icon:'🍈',  price2015:5000,   price2025:12000  },
  { id:'alpukat',        name:'Alpukat',             category:'Buah',             unit:'kg',    icon:'🥑',  price2015:15000,  price2025:32000  },
  { id:'kelapa',         name:'Kelapa Tua',          category:'Buah',             unit:'buah',  icon:'🥥',  price2015:5000,   price2025:12000  },

  // ── BUMBU KEMASAN ──
  { id:'garam',          name:'Garam Dapur',         category:'Bumbu Kemasan',    unit:'kg',    icon:'🧂',  price2015:4000,   price2025:8000   },
  { id:'kecap-manis',    name:'Kecap Manis',         category:'Bumbu Kemasan',    unit:'liter', icon:'🫙',  price2015:15000,  price2025:28000  },
  { id:'saus-tomat',     name:'Saus Tomat',          category:'Bumbu Kemasan',    unit:'kg',    icon:'🫙',  price2015:12000,  price2025:22000  },
  { id:'terasi',         name:'Terasi',              category:'Bumbu Kemasan',    unit:'kg',    icon:'🟫',  price2015:25000,  price2025:55000  },
  { id:'santan',         name:'Santan Kemasan',      category:'Bumbu Kemasan',    unit:'liter', icon:'🥥',  price2015:8000,   price2025:18000  },
  { id:'vetsin',         name:'Penyedap Rasa',       category:'Bumbu Kemasan',    unit:'kg',    icon:'🧂',  price2015:18000,  price2025:35000  },
];

// ── State ──
let activeCategory = 'Semua';
let activeSort     = 'name';
let searchQuery    = '';

// ── Helpers ──
function calcQty(price) { return BUDGET / price; }

function formatQty(qty, unit) {
  const countable = ['butir','buah','ikat','bungkus','ekor'];
  if (countable.includes(unit)) return Math.floor(qty) + ' ' + unit;
  if (qty >= 1) return qty.toFixed(1) + ' ' + unit;
  return (qty * 1000).toFixed(0) + ' gram';
}

function calcInflation(old, now) {
  return Math.round(((now - old) / old) * 100);
}

function infBadgeClass(pct) {
  if (pct < 50)  return 'low';
  if (pct < 100) return 'mid';
  return 'high';
}

function formatPrice(p) {
  return 'Rp ' + p.toLocaleString('id-ID');
}

// ── Render filter buttons ──
function renderFilters() {
  const container = document.getElementById('commodity-filters');
  if (!container) return;
  const categories = ['Semua', ...new Set(COMMODITIES.map(c => c.category))];
  container.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === activeCategory ? ' active' : '');
    btn.textContent = cat;
    btn.onclick = () => filterCommodity(cat, btn);
    container.appendChild(btn);
  });
}

// ── Get filtered + sorted list ──
function getFiltered() {
  let list = [...COMMODITIES];

  // Filter kategori
  if (activeCategory !== 'Semua') {
    list = list.filter(c => c.category === activeCategory);
  }

  // Filter search
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  }

  // Sort
  if (activeSort === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (activeSort === 'inflation') {
    list.sort((a, b) => calcInflation(b.price2015, b.price2025) - calcInflation(a.price2015, a.price2025));
  } else if (activeSort === 'qty') {
    list.sort((a, b) => calcQty(a.price2025) - calcQty(b.price2025));
  }

  return list;
}

// ── Render kartu ──
function renderCards() {
  const grid = document.getElementById('commodity-grid');
  if (!grid) return;

  const list = getFiltered();
  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = '<div class="commodity-empty">Tidak ada bahan pokok yang cocok 🥲</div>';
    renderSummary([]);
    return;
  }

  list.forEach((item, i) => {
    const qty2015 = calcQty(item.price2015);
    const qty2025 = calcQty(item.price2025);
    const inf     = calcInflation(item.price2015, item.price2025);
    const cls     = infBadgeClass(inf);

    const card = document.createElement('div');
    card.className = 'commodity-card';
    card.style.animationDelay = (i * 30) + 'ms';
    card.innerHTML = `
      <span class="inflation-badge ${cls}">+${inf}%</span>
      <div class="commodity-card-top">
        <span class="commodity-icon">${item.icon}</span>
        <div>
          <div class="commodity-name">${item.name}</div>
          <div class="commodity-category-tag">${item.category}</div>
        </div>
      </div>
      <div class="commodity-compare">
        <div class="compare-col">
          <div class="compare-year">${YEAR_OLD}</div>
          <div class="compare-qty">${formatQty(qty2015, item.unit)}</div>
          <div class="compare-price">${formatPrice(item.price2015)} / ${item.unit}</div>
        </div>
        <div class="compare-col now">
          <div class="compare-year">${YEAR_NEW}</div>
          <div class="compare-qty">${formatQty(qty2025, item.unit)}</div>
          <div class="compare-price">${formatPrice(item.price2025)} / ${item.unit}</div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  renderSummary(list);
}

// ── Summary bar ──
function renderSummary(list) {
  const el = document.getElementById('commodity-summary');
  if (!el) return;

  if (list.length === 0) { el.style.display = 'none'; return; }
  el.style.display = 'flex';

  const avgInf = Math.round(list.reduce((s, c) => s + calcInflation(c.price2015, c.price2025), 0) / list.length);
  const maxInf = list.reduce((a, c) => calcInflation(c.price2015, c.price2025) > calcInflation(a.price2015, a.price2025) ? c : a);
  const minInf = list.reduce((a, c) => calcInflation(c.price2015, c.price2025) < calcInflation(a.price2015, a.price2025) ? c : a);

  el.innerHTML = `
    <div class="summary-stat">
      <div class="summary-stat-value">${list.length}</div>
      <div class="summary-stat-label">Bahan ditampilkan</div>
    </div>
    <div class="summary-stat">
      <div class="summary-stat-value">+${avgInf}%</div>
      <div class="summary-stat-label">Rata-rata kenaikan harga</div>
    </div>
    <div class="summary-stat">
      <div class="summary-stat-value">${maxInf.icon} +${calcInflation(maxInf.price2015, maxInf.price2025)}%</div>
      <div class="summary-stat-label">Naik paling tinggi · ${maxInf.name}</div>
    </div>
    <div class="summary-stat">
      <div class="summary-stat-value">${minInf.icon} +${calcInflation(minInf.price2015, minInf.price2025)}%</div>
      <div class="summary-stat-label">Naik paling rendah · ${minInf.name}</div>
    </div>
  `;
}

// ── Event handlers ──
function filterCommodity(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCards();
}

function sortCommodity(mode, btn) {
  activeSort = mode;
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCards();
}

function searchCommodity(q) {
  searchQuery = q;
  renderCards();
}

// ── Init ──
renderFilters();
renderCards();

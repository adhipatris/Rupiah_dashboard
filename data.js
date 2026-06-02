// ─────────────────────────────────────────────
//  data.js — All static data for the Rupiah site
//  Edit values here to update charts & converter
// ─────────────────────────────────────────────

// Annual average USD/IDR exchange rates (1997–2026)
const RATE_LABELS = [
  '1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026'
];

const RATE_DATA = [
  1842, 1950, 2029, 2100, 2200, 2248, 2342, 5550, 8025, 6987, 9595, 10400, 8940, 8465, 9290, 9830, 9020, 9830, 9020, 9419, 10950, 9400, 8991, 9068, 9670, 12189, 12440, 13795, 13436, 13548, 14481, 13901, 14105, 14269, 15731, 15397, 15900, 17800
];

// Slice for "recent" tab (index 18 = year 2015)
const RECENT_START_INDEX = 18;

// Purchasing power chart data
// Format: { year, rate } — auto-calculates USD value of Rp 100,000
const POWER_DATA = [
  { year: '1997', rate: 2400  },
  { year: '1998', rate: 10014 },
  { year: '2003', rate: 8577  },
  { year: '2008', rate: 9699  },
  { year: '2013', rate: 10460 },
  { year: '2018', rate: 14236 },
  { year: '2020', rate: 14582 },
  { year: '2024', rate: 15900 },
  { year: '2026', rate: 17800 },
];

// Converter dropdown options
// Format: { label, rate }
const CONVERTER_ERAS = [
  { label: "1997 · Pre-crisis (Rp 2,400)",      rate: 2400  },
  { label: "1998 · Crisis peak (Rp 10,014)",    rate: 10014 },
  { label: "2003 · Recovery (Rp 8,577)",        rate: 8577  },
  { label: "2008 · Financial crisis (Rp 9,699)",rate: 9699  },
  { label: "2015 · (Rp 13,389)",                rate: 13389 },
  { label: "2018 · Trade war (Rp 14,236)",      rate: 14236 },
  { label: "2020 · COVID (Rp 14,582)",          rate: 14582 },
  { label: "2026 · Today (Rp 17,700)",          rate: 17700 },
];

// Default selected era in converter (index in CONVERTER_ERAS)
const CONVERTER_DEFAULT_INDEX = 7;

// Timeline events
// type: 'crisis' | 'recovery' | '' (neutral)
const TIMELINE_EVENTS = [
  {
    year: '1997',
    type: 'crisis',
    title: 'Asian Financial Crisis',
    desc: 'A wave of capital flight swept through Southeast Asia. Thailand\'s baht collapsed first, then contagion spread to Indonesia. The rupiah lost over 80% of its value in months. The IMF stepped in with a $43 billion emergency rescue package.',
    rate: 'Rp 2,400 → Rp 16,650'
  },
  {
    year: '2003',
    type: 'recovery',
    title: 'Post-Reformasi Stabilisation',
    desc: 'Political stability under the new democratic era, debt restructuring, and rebuilt foreign reserves brought confidence back. The rupiah recovered to roughly half its pre-crisis level and held there for nearly a decade.',
    rate: '~Rp 8,577 per USD'
  },
  {
    year: '2008',
    type: '',
    title: 'Global Financial Crisis',
    desc: 'The collapse of Lehman Brothers triggered global panic. Indonesia fared better than in 1997 thanks to stronger reserves and a more orthodox monetary policy. The rupiah dipped briefly before recovering.',
    rate: '~Rp 12,000 per USD'
  },
  {
    year: '2013',
    type: '',
    title: 'The Fed Taper Tantrum',
    desc: 'When the US Federal Reserve signalled it would wind down quantitative easing, capital rushed back to US assets. Emerging markets like Indonesia suffered sharp outflows and currency weakness.',
    rate: '~Rp 12,200 per USD'
  },
  {
    year: '2018',
    type: 'crisis',
    title: 'Trade War & Strong Dollar',
    desc: 'Rising US interest rates under the Fed, combined with US–China trade tensions, drove capital from emerging markets. The rupiah hit its weakest level since the 1998 crisis, breaching Rp 15,000 for the first time.',
    rate: '~Rp 15,200 per USD'
  },
  {
    year: '2020',
    type: 'crisis',
    title: 'COVID-19 Pandemic',
    desc: 'Global risk-off sentiment in March 2020 saw a flash selloff in rupiah. Bank Indonesia responded with rate cuts and bond purchases. The rupiah partially recovered through 2021 as commodity prices rebounded.',
    rate: 'Rp 16,575 per USD'
  },
  {
    year: '2024–26',
    type: 'crisis',
    title: 'Persistent Dollar Strength',
    desc: 'A strong US dollar era driven by sticky American inflation, high US rates, and global risk aversion has pushed the rupiah to near-record lows above Rp 17,000. The rate now exceeds the worst daily levels of the 1998 crisis on an annual average basis.',
    rate: 'Rp 17,000–17,700 per USD'
  },
];

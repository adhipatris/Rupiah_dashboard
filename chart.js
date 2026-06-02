// ─────────────────────────────────────────────
//  chart.js — Chart.js initialization & controls
//  Depends on: data.js (loaded before this file)
// ─────────────────────────────────────────────

// ── Shared colour tokens ──
const C_LINE     = '#70AD47';
const C_AREA     = 'rgba(200,56,42,0.08)';
const C_GRID     = 'rgba(26,18,8,0.06)';
const C_TICK     = '#8A7B68';
const C_TOOLTIP_BG    = '#1A1208';
const C_TOOLTIP_TITLE = '#FAF7F2';
const C_TOOLTIP_BODY  = 'rgba(250,247,242,0.6)';

// ── Power chart bar colours ──
// Green (gold) = high value, grey = mid, red = low
function powerBarColor(usdValue) {
  if (usdValue >= 10) return '#B8860B';
  if (usdValue >= 7)  return '#8A7B68';
  return '#C8382A';
}

// ── Shared tooltip options ──
const TOOLTIP_DEFAULTS = {
  backgroundColor: C_TOOLTIP_BG,
  titleColor: C_TOOLTIP_TITLE,
  bodyColor: C_TOOLTIP_BODY,
  padding: 12,
  cornerRadius: 8,
};

// ── Main line chart ──
let mainChartInstance = null;

function buildMainChart(labels, data) {
  if (mainChartInstance) mainChartInstance.destroy();

  const ctx = document.getElementById('mainChart');
  if (!ctx) return;

  mainChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'USD/IDR',
        data,
        borderColor: C_LINE,
        backgroundColor: C_AREA,
        fill: true,
        tension: 0.35,
        pointRadius: labels.length > 20 ? 2 : 5,
        pointBackgroundColor: C_LINE,
        pointBorderColor: '#fff',
        pointBorderWidth: 1.5,
        borderWidth: 2.5,
        pointHoverRadius: 7,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          ...TOOLTIP_DEFAULTS,
          callbacks: {
            title: ctx => ctx[0].label,
            label: ctx => '  Rp ' + ctx.raw.toLocaleString('en-ID') + ' per USD',
          }
        }
      },
      scales: {
        x: {
          grid: { color: C_GRID },
          ticks: {
            color: C_TICK,
            font: { size: 11, family: 'DM Sans' },
            maxTicksLimit: 12,
            maxRotation: 45,
          }
        },
        y: {
          grid: { color: C_GRID },
          min: 0,
          ticks: {
            color: C_TICK,
            font: { size: 11, family: 'DM Sans' },
            callback: v => 'Rp ' + (v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v),
          }
        }
      }
    }
  });
}

// ── Tab toggle: full history vs recent ──
function setRange(mode, btn) {
  // Update active tab
  document.querySelectorAll('.tab-row .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  if (mode === 'full') {
    buildMainChart(RATE_LABELS, RATE_DATA);
  } else {
    buildMainChart(
      RATE_LABELS.slice(RECENT_START_INDEX),
      RATE_DATA.slice(RECENT_START_INDEX)
    );
  }
}

// ── Purchasing power bar chart ──
function buildPowerChart() {
  const ctx = document.getElementById('powerChart');
  if (!ctx) return;

  const labels = POWER_DATA.map(d => d.year);
  const values = POWER_DATA.map(d => parseFloat((100000 / d.rate).toFixed(2)));
  const colors = values.map(powerBarColor);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'USD value of Rp 100,000',
        data: values,
        backgroundColor: colors,
        borderRadius: 6,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#FAF7F2',
          titleColor: '#1A1208',
          bodyColor: '#4A3F30',
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: ctx => '  $' + ctx.raw.toFixed(2),
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(250,247,242,0.06)' },
          ticks: { color: 'rgba(250,247,242,0.4)', font: { size: 11, family: 'DM Sans' } }
        },
        y: {
          grid: { color: 'rgba(250,247,242,0.06)' },
          min: 0,
          max: 50,
          ticks: {
            color: 'rgba(250,247,242,0.4)',
            font: { size: 11, family: 'DM Sans' },
            callback: v => '$' + v.toFixed(0),
          }
        }
      }
    }
  });
}

// ── Init on load ──
buildMainChart(RATE_LABELS, RATE_DATA);
buildPowerChart();

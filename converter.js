// ─────────────────────────────────────────────
//  converter.js — Currency converter logic
//  Depends on: data.js (loaded before this file)
// ─────────────────────────────────────────────

let convDir = 'usd2idr'; // 'usd2idr' | 'idr2usd'

// ── Populate the era dropdown from data.js ──
function populateEraSelect() {
  const select = document.getElementById('conv-era');
  if (!select) return;

  CONVERTER_ERAS.forEach((era, i) => {
    const option = document.createElement('option');
    option.value = era.rate;
    option.textContent = era.label;
    if (i === CONVERTER_DEFAULT_INDEX) option.selected = true;
    select.appendChild(option);
  });
}

// ── Switch conversion direction ──
function setDir(dir, btn) {
  convDir = dir;
  document.querySelectorAll('#conv-direction .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  convert();
}

// ── Main conversion function ──
function convert() {
  const amountInput = document.getElementById('conv-amount');
  const eraSelect   = document.getElementById('conv-era');
  const labelEl     = document.getElementById('conv-label');
  const outputEl    = document.getElementById('conv-output');

  if (!amountInput || !eraSelect || !labelEl || !outputEl) return;

  const amount = parseFloat(amountInput.value) || 0;
  const rate   = parseFloat(eraSelect.value);

  if (convDir === 'usd2idr') {
    const result = Math.round(amount * rate);
    labelEl.textContent  = '$' + amount.toLocaleString() + ' USD sama dengan';
    outputEl.textContent = 'Rp ' + result.toLocaleString('id-ID');
  } else {
    const result = (amount / rate).toFixed(4);
    labelEl.textContent  = 'Rp ' + amount.toLocaleString('id-ID') + ' IDR sama dengan';
    outputEl.textContent = '$' + parseFloat(result).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    });
  }
}

// ── Init ──
populateEraSelect();
convert();

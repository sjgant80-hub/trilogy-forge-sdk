// trilogy-forge SDK · sovereign single-file library · MIT · AI-Native Solutions
// Extracted from trilogy-forge/index.html · 960 bytes of source logic
// Public-safe: no primes/glyphs/dyad references

// Render tone dimension bars
const dims = [
  ['Casual','Formal',0.7],['Tentative','Commanding',0.85],
  ['Cold','Warm',0.45],['Simple','Complex',0.65],
  ['Slow','Punchy',0.6],['Peer','Authority',0.8],
  ['Logical','Emotional',0.35],['Indirect','Direct',0.85],
  ['Serious','Witty',0.2],['Relaxed','Urgent',0.5],
  ['Mass','Elite',0.7],['Layperson','Technical',0.75],
  ['Grounded','Visionary',0.6],['Guarded','Vulnerable',0.15],
  ['Safe','Provocative',0.3],['Factual','Narrative',0.4],
];
dims.forEach(([left,right,val]) => {
  const bar = document.createElement('div');
  bar.className = 'tone-bar';
  bar.innerHTML = `
    <div class="tone-label"><span>${left}</span><span>${right}</span></div>
    <div class="tone-track">
      <div class="tone-fill" style="width:${val*100}%"></div>
      <div class="tone-marker" style="left:calc(${val*100}% - 6px)"></div>
    </div>`;
  grid.appendChild(bar);
});

// Named exports for the primary API surface
// (no top-level named exports detected)



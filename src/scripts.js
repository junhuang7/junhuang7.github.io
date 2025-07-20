// once Chart.js is loaded, draw tiny trendlines
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.spark').forEach(canvas => {
    const ctx = canvas.getContext('2d');
    const source = canvas.dataset.source;       // a1c, bp, bmi …
    // Replace with real longitudinal data fetched from API
    const demo = {a1c:[4.9,5.1,5.3,5.6,5.8],
                  bp: [115,118,112,116,115],
                  bmi:[25,25.5,26,26.5,27]}[source];
    new Chart(ctx,{type:'line',
      data:{labels:demo.map((_,i)=>i+1), datasets:[{data:demo,borderColor:'#007aff',fill:false,tension:.3}]},
      options:{plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}
    });
  });
});

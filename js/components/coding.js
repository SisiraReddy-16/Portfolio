// GitHub Contribution Grid
function generateContribData() {
  const data = [];
  const weights = [0.45, 0.25, 0.15, 0.1, 0.05];
  for (let i = 0; i < 365; i++) {
    const rand = Math.random();
    let val = 0;
    let cum = 0;
    for (let j = 0; j < weights.length; j++) {
      cum += weights[j];
      if (rand < cum) { val = j; break; }
    }
    data.push(val);
  }
  return data;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('contribGrid');
  if (grid) {
    const contribData = generateContribData();
    contribData.forEach(v => {
      const cell = document.createElement('div');
      cell.className = `contrib-cell contrib-${v}`;
      cell.title = v === 0 ? 'No contributions' : `${v * 3} contributions`;
      grid.appendChild(cell);
    });
  }
});
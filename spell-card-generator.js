document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('csvFileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const csvData = e.target.result;
      const rows = csvData.split('\n');

      // Clear the previous spell cards
      const spellCardContainer = document.getElementById('spellCardContainer');
      spellCardContainer.innerHTML = '';

      for (const row of rows) {
        const columns = row.split(',');
        const spellData = {
          spellName: columns[0],
          stat: columns[1],
          damage: columns[2],
          aoe: columns[3],
          range: columns[4],
          direction: columns[5],
          description: columns[6],
        };
        createSpellCard(spellData, spellCardContainer);
      }
    };

    reader.readAsText(file);
  });

  function createSpellCard(spellData, container) {
    const cardTemplate = document.createElement('div');
    cardTemplate.classList.add('spell-card');
    cardTemplate.style.display = 'block';

    cardTemplate.innerHTML = `
      <h2>${spellData.spellName}</h2>
      <h3>Stat: ${spellData.stat}</h3>  
      <div class="row">
        <div class="column">
          <p>Range: ${spellData.range}</p>
          <p>Direction: ${spellData.direction}</p>
        </div>
        <div class="column">
          <p>Damage: ${spellData.damage}</p>
          <p>AOE: ${spellData.aoe}</p>
        </div>
        <p>${spellData.description}</p>
      </div>
    `;

    container.appendChild(cardTemplate);
  }

  document.getElementById('printButton').addEventListener('click', function() {
    window.print();
  });
});

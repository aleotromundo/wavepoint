(() => {
  const rates = {
    'surf-lessons': [70, 65, 60, 55, 50, 50],
    'surf-coaching': [45, 45, 45, 45, 45, 45],
    yoga: [20, 20, 20, 20, 20, 20],
    'surf-photography-water': [120, 100, 80, 75, 70, 65],
    'surf-photography-beach': [70, 50, 50, 45, 45, 40],
    surfskate: [50, 50, 50, 50, 50, 50]
  };
  const groups = [
    { guests: 1, label: { es: '1 persona', en: '1 person' }, mobileLabel: { es: '1 persona', en: '1 person' } },
    { guests: 2, label: { es: 'Grupo de 2', en: 'Group of 2' }, mobileLabel: { es: '2 personas', en: '2 guests' } },
    { guests: 3, label: { es: 'Grupo de 3', en: 'Group of 3' }, mobileLabel: { es: '3 personas', en: '3 guests' } },
    { guests: 4, label: { es: 'Grupo de 4', en: 'Group of 4' }, mobileLabel: { es: '4 personas', en: '4 guests' } },
    { guests: 5, label: { es: 'Grupo de 5', en: 'Group of 5' }, mobileLabel: { es: '5 personas', en: '5 guests' } },
    { guests: 6, label: { es: 'Grupo de más de 5', en: 'Group of more than 5' }, mobileLabel: { es: 'Más de 5', en: 'Over 5' } }
  ];
  const rows = [
    { rateId: 'surf-lessons', label: { es: 'Clases de surf', en: 'Surf lessons' } },
    { rateId: 'surf-coaching', label: { es: 'Surf coaching', en: 'Surf coaching' } },
    { rateId: 'yoga', label: { es: 'Yoga', en: 'Yoga' } },
    { rateId: null, label: { es: 'ATV / Cuatriciclos', en: 'ATV tours' } },
    { rateId: 'surf-photography-water', label: { es: 'Fotografía acuática', en: 'In-water photography' } },
    { rateId: 'surf-photography-beach', label: { es: 'Fotografía desde la playa', en: 'Photography from the beach' } },
    { rateId: 'surfskate', label: { es: 'Clases de surfskate', en: 'Surfskate lessons' } }
  ];
  const copy = {
    es: {
      heading: 'Tarifas de servicios',
      description: 'Tarifas de referencia por persona en USD, según el tamaño del grupo.',
      caption: 'Tarifas de servicios de WavePoint según cantidad de personas',
      service: 'Servicio',
      note: 'La disponibilidad y el precio final se confirman al consultar con el proveedor.'
    },
    en: {
      heading: 'Service rates',
      description: 'Reference rates per person in USD, based on group size.',
      caption: 'WavePoint service rates by group size',
      service: 'Service',
      note: 'Availability and the final price are confirmed with the provider.'
    }
  };

  const pricing = { rates, groups, rows };
  window.WAVEPOINT_PRICING = pricing;

  const renderTable = lang => {
    const table = document.querySelector('[data-pricing-table]');
    if (!table) return;

    const language = lang === 'es' ? 'es' : 'en';
    const text = copy[language];
    const heading = document.getElementById('serviceRatesTitle');
    const description = table.closest('.service-rates').querySelector('[data-pricing-description]');
    const caption = table.querySelector('caption');
    const header = table.querySelector('thead tr');
    const body = table.querySelector('tbody');
    const note = table.closest('.service-rates').querySelector('[data-pricing-note]');

    heading.textContent = text.heading;
    description.textContent = text.description;
    caption.textContent = text.caption;
    note.textContent = text.note;

    header.replaceChildren();
    [text.service, ...groups.map(group => group.label[language])].forEach(label => {
      const cell = document.createElement('th');
      cell.scope = 'col';
      cell.textContent = label;
      header.append(cell);
    });

    body.replaceChildren();
    rows.forEach(row => {
      const tableRow = document.createElement('tr');
      const title = document.createElement('th');
      title.scope = 'row';
      title.textContent = row.label[language];
      tableRow.append(title);

      groups.forEach(group => {
        const cell = document.createElement('td');
        cell.dataset.label = group.mobileLabel[language];
        const rate = row.rateId ? rates[row.rateId][Math.min(group.guests, 6) - 1] : null;
        cell.textContent = rate === null ? '—' : `${rate} c/u`;
        tableRow.append(cell);
      });
      body.append(tableRow);
    });
  };

  renderTable(localStorage.getItem('wavepoint-lang') === 'es' ? 'es' : 'en');
  window.addEventListener('wavepoint:languagechange', event => renderTable(event.detail.lang));
})();

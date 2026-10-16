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
    { guests: 5, label: { es: '5 o más', en: '5 or more' }, mobileLabel: { es: '5 o más', en: '5 or more' } }
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
      description: 'Tarifas de referencia por persona en USD, según el tamaño del grupo. En clases de surf, el precio baja hasta USD 50 por persona para grupos de 5 o más.',
      caption: 'Tarifas de servicios de WavePoint según cantidad de personas',
      service: 'Servicio',
      note: '<p><strong>Tarifas.</strong> Las tarifas son de referencia y están expresadas en dólares estadounidenses (USD), por persona y según el tamaño del grupo. “c/u” significa “cada uno”. <strong>ATV:</strong> consultanos; el precio se calcula por vehículo, según la duración y si viaja una o dos personas.</p><p><strong>Cómo organizar tu experiencia.</strong> Contanos qué actividad te interesa, la fecha y cuántas personas participan. WAVEPOINT revisa la disponibilidad y coordina los detalles con vos por WhatsApp.</p><p><strong>Antes de pagar.</strong> Te confirmamos el precio total, qué incluye la actividad, el horario, el punto de encuentro, los requisitos, cualquier costo adicional y las condiciones de pago, cambios y cancelación.</p><p><strong>Importante.</strong> Consultar no requiere un pago ni confirma una reserva. Una vez acordados los detalles, te indicamos cómo completar el pago y confirmar tu experiencia.</p>'
    },
    en: {
      heading: 'Service rates',
      description: 'Reference rates per person in USD, based on group size. Surf lessons drop to USD 50 per person for groups of 5 or more.',
      caption: 'WavePoint service rates by group size',
      service: 'Service',
      note: '<p><strong>Rates.</strong> Rates are reference prices expressed in United States dollars (USD), per person and according to group size. “c/u” means “each person”. <strong>ATVs:</strong> please ask us; the price is calculated per vehicle, based on the duration and whether one or two people are riding.</p><p><strong>How to organize your experience.</strong> Tell us which activity interests you, the date and how many people are participating. WAVEPOINT checks availability and coordinates the details with you through WhatsApp.</p><p><strong>Before paying.</strong> We confirm the total price, what the activity includes, the schedule, the meeting point, the requirements, any additional costs, and the payment, change and cancellation conditions.</p><p><strong>Important.</strong> Asking for information does not require payment or confirm a booking. Once the details are agreed, we explain how to complete the payment and confirm your experience.</p>'
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
    note.innerHTML = text.note;

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
        cell.textContent = rate === null ? '—' : `${rate} USD`;
        tableRow.append(cell);
      });
      body.append(tableRow);
    });
  };

  renderTable(localStorage.getItem('wavepoint-lang') === 'es' ? 'es' : 'en');
  window.addEventListener('wavepoint:languagechange', event => renderTable(event.detail.lang));
})();

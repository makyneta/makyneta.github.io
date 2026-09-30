var assessments = [
  { date: '2026-10-06', subject: 'COMTI', regime: 'EaD' },
  
  { date: '2026-10-28', subject: 'IAPSI', regime: 'TP' },
  
  { date: '2026-10-29', subject: 'FMAT', regime: 'TP2' },
  
  { date: '2026-10-30', subject: 'IAPSI', regime: 'EaD' },
  
  { date: '2026-11-02', subject: 'COMTI', regime: 'PL2' },
  
  { date: '2026-11-02', subject: 'FPROG', regime: 'PL1' },
  
  { date: '2026-11-03', subject: 'FPROG', regime: 'PL3' },
  
  { date: '2026-11-04', subject: 'COMTI', regime: 'PL3' },
  
  { date: '2026-11-05', subject: 'FPROG', regime: 'PL2' },
  
  { date: '2026-11-06', subject: 'COMTI', regime: 'PL1' },
  
  { date: '2026-11-09', subject: 'IRSO', regime: 'EaD' },
  
  { date: '2026-11-10', subject: 'COMTI', regime: 'TP1' },
  
  { date: '2026-11-10', subject: 'IRSO', regime: 'TP' },
  
  { date: '2026-11-13', subject: 'COMTI', regime: 'TP2' },
  
  { date: '2026-11-13', subject: 'PWEBC', regime: 'PL1' },
  
  { date: '2026-11-13', subject: 'PWEBC', regime: 'PL2' },
  
  { date: '2026-11-13', subject: 'PWEBC', regime: 'PL3' },
  
  { date: '2026-11-17', subject: 'COMTI', regime: 'TP1' },
  
  { date: '2026-11-17', subject: 'COMTI', regime: 'EaD' },
  
  { date: '2026-11-19', subject: 'FMAT', regime: 'TP2' },
  
  { date: '2026-11-20', subject: 'COMTI', regime: 'TP2' },
  
  { date: '2026-11-20', subject: 'FMAT', regime: 'TP1' },
  
  { date: '2026-11-24', subject: 'COMTI', regime: 'TP1' },
  
  { date: '2026-11-27', subject: 'COMTI', regime: 'TP2' },
  
  { date: '2026-12-10', subject: 'PWEBC', regime: 'TP' },
  
  { date: '2026-12-14', subject: 'COMTI', regime: 'PL2' },
  
  { date: '2026-12-14', subject: 'FPROG', regime: 'PL1' },
  
  { date: '2026-12-15', subject: 'FPROG', regime: 'PL3' },
  
  { date: '2026-12-16', subject: 'COMTI', regime: 'PL3' },
  
  { date: '2026-12-16', subject: 'IAPSI', regime: 'TP' },
  
  { date: '2026-12-17', subject: 'FPROG', regime: 'PL2' },
  
  { date: '2026-12-18', subject: 'COMTI', regime: 'PL1' },
];

(function () {
  var planner = document.querySelector('.planner');
  if (!planner) return;

  var rows = document.querySelector('.assessment-rows');
  var tableWrap = document.querySelector('.table-wrap');
  var emptyState = document.querySelector('.empty-state');
  var exampleNote = document.querySelector('.example-note');
  var count = document.querySelector('.entry-count');
  var themeButton = document.querySelector('.theme-toggle');
  var themeKey = 'psi-assessments-theme';

  function addCell(row, value, className, label) {
    var cell = document.createElement('td');
    if (className) cell.className = className;
    cell.setAttribute('data-label', label);
    cell.textContent = value || '—';
    row.appendChild(cell);
  }

  function formatDate(value) {
    var parts = value.split('-');
    var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return new Intl.DateTimeFormat('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
  }

  var sortedAssessments = assessments.slice().sort(function (first, second) {
    return first.date.localeCompare(second.date);
  });

  sortedAssessments.forEach(function (assessment) {
    var row = document.createElement('tr');
    addCell(row, assessment.date ? formatDate(assessment.date) : '', 'assessment-date', 'Data');
    addCell(row, assessment.subject, '', 'Disciplina');
    addCell(row, assessment.regime, 'assessment-regime', 'Regime');
    rows.appendChild(row);
  });

  var assessmentCount = sortedAssessments.length;
  exampleNote.hidden = !sortedAssessments.some(function (assessment) { return assessment.example; });
  count.textContent = assessmentCount + (assessmentCount === 1 ? ' avaliação' : ' avaliações');
  tableWrap.hidden = assessmentCount === 0;
  emptyState.hidden = assessmentCount > 0;

  function setTheme(theme) {
    planner.dataset.theme = theme;
    themeButton.setAttribute('aria-label', theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
    themeButton.querySelector('.theme-icon').textContent = theme === 'dark' ? '☼' : '◐';
    try {
      localStorage.setItem(themeKey, theme);
    } catch (error) {
      return;
    }
  }

  themeButton.addEventListener('click', function () {
    setTheme(planner.dataset.theme === 'dark' ? 'light' : 'dark');
  });
  document.querySelector('.print-button').addEventListener('click', function () {
    window.print();
  });

  var savedTheme;
  try {
    savedTheme = localStorage.getItem(themeKey);
  } catch (error) {
    savedTheme = null;
  }
  setTheme(savedTheme === 'light' ? 'light' : 'dark');
})();
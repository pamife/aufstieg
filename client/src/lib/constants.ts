// Values section
export const values = [
  {
    icon: "fas fa-flag",
    title: "Nationale Souveränität",
    description: "Deutschland muss unabhängig und selbstbestimmt handeln."
  },
  {
    icon: "fas fa-shield-alt",
    title: "Sicherheit und Ordnung",
    description: "Stabile Gesetze und konsequente Durchsetzung für ein sicheres Deutschland."
  },
  {
    icon: "fas fa-trophy",
    title: "Leistungsgesellschaft",
    description: "Wer arbeitet, muss davon profitieren – kein staatliches Daueralimentieren."
  },
  {
    icon: "fas fa-home",
    title: "Tradition und Familie",
    description: "Schutz der klassischen Werte und Förderung traditioneller Familienmodelle."
  },
  {
    icon: "fas fa-microchip",
    title: "Technologischer Fortschritt",
    description: "Digitalisierung und technische Innovationen zur Stärkung der Wirtschaft."
  },
  {
    icon: "fas fa-bullseye",
    title: "Langfristige Ziele",
    list: [
      "Strikte Kontrolle der Migration",
      "Wirtschaftswachstum durch unabhängige Energiepolitik",
      "Stärkung der Bundeswehr und nationaler Sicherheit"
    ]
  }
];

// Program categories and content
export const programCategories = [
  {
    id: "bildung",
    title: "Bildung & Jugend",
    subtitle: "Förderung von Leistung und Zukunftschancen unserer Jugend",
    icon: "fas fa-graduation-cap",
    points: [
      {
        title: "Leistungsförderung statt Gleichmacherei",
        description: "Abschaffung von ideologischen Lehrinhalten, mehr Fokus auf Mathematik, Naturwissenschaften und Technik."
      },
      {
        title: "Pflichtjahr für alle Jugendlichen",
        description: "In Bundeswehr, Katastrophenschutz oder sozialem Dienst."
      },
      {
        title: "Digitale Bildungsstrategie",
        description: "Um Deutschland international konkurrenzfähig zu machen."
      }
    ]
  },
  {
    id: "umwelt",
    title: "Umwelt & Klimaschutz",
    subtitle: "Realistische Umweltpolitik ohne wirtschaftlichen Schaden",
    icon: "fas fa-leaf",
    points: [
      {
        title: "Wiedereinstieg in die Atomenergie",
        description: "Zur sicheren und bezahlbaren Energieversorgung."
      },
      {
        title: "Förderung synthetischer Kraftstoffe",
        description: "Statt Verbote für Verbrennungsmotoren."
      },
      {
        title: "Schluss mit Klima-Ideologie",
        description: "Realistische Umweltpolitik ohne wirtschaftlichen Schaden."
      }
    ]
  },
  {
    id: "soziales",
    title: "Soziale Gerechtigkeit & Wirtschaft",
    subtitle: "Leistungsgerechte Wirtschaftspolitik für alle Bürger",
    icon: "fas fa-chart-line",
    points: [
      {
        title: "Reform des Bürgergelds",
        description: "Arbeit muss sich immer mehr lohnen als staatliche Unterstützung."
      },
      {
        title: "Förderung der heimischen Industrie",
        description: "Durch den Ausbau nationaler Energiequellen und Infrastruktur."
      },
      {
        title: "Steuererleichterungen",
        description: "Für Mittelstand und arbeitende Bevölkerung, Senkung der Sozialausgaben."
      }
    ]
  },
  {
    id: "digitalisierung",
    title: "Digitalisierung",
    subtitle: "Technologischer Fortschritt für ein wettbewerbsfähiges Deutschland",
    icon: "fas fa-laptop-code",
    points: [
      {
        title: "Bürokratieabbau durch Digitalisierung",
        description: "Der Verwaltung für mehr Effizienz und Bürgernähe."
      },
      {
        title: "Förderung von Hochtechnologien",
        description: "KI, Quantencomputing, Biotechnologie zur Stärkung der Wirtschaft."
      },
      {
        title: "Datenschutz stärken",
        description: "Weniger Überwachung für Bürger, konsequente Bekämpfung von Cyberkriminalität."
      }
    ]
  },
  {
    id: "gesellschaft",
    title: "Gesellschaft & Demokratie",
    subtitle: "Stärkung traditioneller Werte und direkter Demokratie",
    icon: "fas fa-balance-scale",
    points: [
      {
        title: "Keine Frühsexualisierung und Gender-Ideologie",
        description: "In Schulen und Behörden."
      },
      {
        title: "Direkte Demokratie stärken",
        description: "Volksabstimmungen zu zentralen politischen Fragen."
      },
      {
        title: "Einführung der Wehrpflicht",
        description: "Für Männer und Frauen zur Stärkung der Landesverteidigung."
      }
    ]
  }
];

// Vollständiges Parteiprogramm für die ausklappbare Ansicht
export const fullPartyProgram = {
  name: "DAP – Die Aufstiegspartei",
  slogan: "Der Weg nach oben!",
  vision: {
    title: "Unsere Vision & Grundwerte",
    values: [
      "Nationale Souveränität: Deutschland muss unabhängig und selbstbestimmt handeln.",
      "Sicherheit und Ordnung: Stabile Gesetze und konsequente Durchsetzung für ein sicheres Deutschland.",
      "Leistungsgesellschaft: Wer arbeitet, muss davon profitieren – kein staatliches Daueralimentieren.",
      "Tradition und Familie: Schutz der klassischen Werte und Förderung traditioneller Familienmodelle.",
      "Technologischer Fortschritt: Digitalisierung und technische Innovationen zur Stärkung der Wirtschaft."
    ],
    longTermGoals: [
      "Strikte Kontrolle der Migration",
      "Wirtschaftswachstum durch unabhängige Energiepolitik",
      "Stärkung der Bundeswehr und nationaler Sicherheit",
      "Abkehr von sozialistischen und ideologisch geprägten Wirtschaftsexperimenten"
    ]
  },
  coreThemes: [
    {
      id: "bildung-jugend",
      title: "Bildung & Jugend",
      points: [
        "Leistungsförderung statt Gleichmacherei: Abschaffung von ideologischen Lehrinhalten, mehr Fokus auf Mathematik, Naturwissenschaften und Technik.",
        "Pflichtjahr für alle Jugendlichen in Bundeswehr, Katastrophenschutz oder sozialem Dienst.",
        "Einführung einer digitalen Bildungsstrategie, um Deutschland international konkurrenzfähig zu machen."
      ]
    },
    {
      id: "umwelt-klimaschutz",
      title: "Umwelt & Klimaschutz",
      points: [
        "Wiedereinstieg in die Atomenergie zur sicheren und bezahlbaren Energieversorgung.",
        "Förderung synthetischer Kraftstoffe statt Verbote für Verbrennungsmotoren.",
        "Schluss mit Klima-Ideologie: Realistische Umweltpolitik ohne wirtschaftlichen Schaden."
      ]
    },
    {
      id: "soziales-wirtschaft",
      title: "Soziale Gerechtigkeit & Wirtschaft",
      points: [
        "Reform des Bürgergelds: Arbeit muss sich immer mehr lohnen als staatliche Unterstützung.",
        "Förderung der heimischen Industrie durch den Ausbau nationaler Energiequellen und Infrastruktur.",
        "Steuererleichterungen für Mittelstand und arbeitende Bevölkerung, Senkung der Sozialausgaben."
      ]
    },
    {
      id: "digitalisierung-zukunft",
      title: "Digitalisierung & Zukunftstechnologien",
      points: [
        "Bürokratieabbau durch Digitalisierung der Verwaltung.",
        "Förderung von Hochtechnologien (KI, Quantencomputing, Biotechnologie) zur Stärkung der Wirtschaft.",
        "Datenschutz stärken: Weniger Überwachung und Einschränkungen für Bürger, aber konsequente Bekämpfung von Cyberkriminalität."
      ]
    },
    {
      id: "gesellschaft-demokratie",
      title: "Gesellschaft & Demokratie",
      points: [
        "Keine Frühsexualisierung und Gender-Ideologie in Schulen und Behörden.",
        "Direkte Demokratie stärken: Volksabstimmungen zu zentralen politischen Fragen.",
        "Einführung der Wehrpflicht für Männer und Frauen zur Stärkung der Landesverteidigung."
      ]
    }
  ],
  electionPromises: [
    "Energie für Deutschland: Wiedereinstieg in die Kernenergie und sichere Energieversorgung.",
    "Schutz der Grenzen: Konsequente Regulierung der Migration.",
    "Leistung muss sich lohnen: Bürgergeld reformieren, Arbeitsanreize schaffen."
  ],
  team: [
    { role: "Parteivorsitzender", name: "Jannis und Paul" },
    { role: "Sprecher für Wirtschaft & Finanzen", name: "Jermaine" },
    { role: "Sprecher für Sicherheit & Verteidigung", name: "Colin, Marvin" }
  ],
  closing: "DAP – Für ein starkes, souveränes Deutschland!"
};

// News items
export const newsItems = [
  {
    title: "Podiumsdiskussion: Energiepolitik für die Zukunft",
    description: "Unsere Parteivorsitzenden diskutieren mit Experten über den notwendigen Wiedereinstieg in die Kernenergie.",
    date: "10. Juni 2023",
    type: "Veranstaltung",
    iconClass: "fas fa-calendar-alt"
  },
  {
    title: "DAP fordert Reform des Bürgergeldsystems",
    description: "In einer neuen Stellungnahme kritisiert die DAP das aktuelle Bürgergeldsystem und fordert Reformen.",
    date: "2. Juni 2023",
    type: "Pressemitteilung",
    iconClass: "fas fa-newspaper"
  },
  {
    title: "Bürgerdialog: Nationale Sicherheit und Wehrpflicht",
    description: "Diskutieren Sie mit uns über die Stärkung der Bundeswehr und die Einführung einer modernen Wehrpflicht.",
    date: "25. Mai 2023",
    type: "Veranstaltung",
    iconClass: "fas fa-users"
  }
];

// Team members
export const teamMembers = [
  {
    name: "Jannis und Paul",
    position: "Parteivorsitzende",
    description: "Führen die DAP mit klarer Vision für ein souveränes Deutschland.",
    initials: "J&P"
  },
  {
    name: "Jermaine",
    position: "Sprecher für Wirtschaft & Finanzen",
    description: "Ehemaliger Unternehmensberater mit Expertise in Wirtschaftspolitik.",
    initials: "JM"
  },
  {
    name: "Colin & Marvin",
    position: "Sprecher für Sicherheit & Verteidigung",
    description: "Setzen sich für eine starke nationale Sicherheit und Verteidigungspolitik ein.",
    initials: "C&M"
  }
];

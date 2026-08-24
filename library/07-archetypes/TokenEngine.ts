// library/07-archetypes/TokenEngine.ts

export interface ArchetypeDefinition {
  id: string;
  name: string;
  tagline: string;
  colors: {
    bgPrimary: string;
    bgSurface: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    border: string;
  };
  typography: {
    fontHeading: string;
    fontBody: string;
    scaleRatio: number;
    letterSpacing: string;
  };
  geometry: {
    radiusSm: string;
    radiusMd: string;
    radiusLg: string;
    borderWidth: string;
  };
  effects: {
    shadowCard: string;
    backdropBlur: string;
  };
}

export const ARCHETYPES: Record<string, ArchetypeDefinition> = {
  'luxury-noir': {
    id: 'luxury-noir',
    name: 'Luxury Noir',
    tagline: 'Кинематографичная эстетика высокой моды и премиального люкса',
    colors: {
      bgPrimary: '#08080a',
      bgSurface: '#121216',
      textPrimary: '#f7f7fa',
      textSecondary: '#9999a5',
      accent: '#d4af37',
      border: 'rgba(212, 175, 55, 0.25)'
    },
    typography: {
      fontHeading: "'Cinzel', 'Playfair Display', serif",
      fontBody: "'Cormorant Garamond', 'Georgia', serif",
      scaleRatio: 1.414,
      letterSpacing: '0.08em'
    },
    geometry: {
      radiusSm: '1px',
      radiusMd: '2px',
      radiusLg: '4px',
      borderWidth: '1px'
    },
    effects: {
      shadowCard: '0 20px 50px rgba(0,0,0,0.8)',
      backdropBlur: '12px'
    }
  },
  'neo-brutalism': {
    id: 'neo-brutalism',
    name: 'Neo-Brutalism',
    tagline: 'Сырой уличный контраст, четкие тени со смещением и моноширинный слог',
    colors: {
      bgPrimary: '#f4f0ea',
      bgSurface: '#ffffff',
      textPrimary: '#000000',
      textSecondary: '#222222',
      accent: '#ff3e00',
      border: '#000000'
    },
    typography: {
      fontHeading: "'Space Grotesk', 'Syne', sans-serif",
      fontBody: "'JetBrains Mono', monospace",
      scaleRatio: 1.5,
      letterSpacing: '-0.04em'
    },
    geometry: {
      radiusSm: '0px',
      radiusMd: '0px',
      radiusLg: '0px',
      borderWidth: '3px'
    },
    effects: {
      shadowCard: '6px 6px 0px #000000',
      backdropBlur: '0px'
    }
  },
  'cyber-tech': {
    id: 'cyber-tech',
    name: 'Cyber-Tech',
    tagline: 'Инженерная точность, терминальные сетки, скошенные углы и неон',
    colors: {
      bgPrimary: '#050b14',
      bgSurface: '#0d1829',
      textPrimary: '#00f2fe',
      textSecondary: '#7aa2f7',
      accent: '#00ff88',
      border: 'rgba(0, 242, 254, 0.3)'
    },
    typography: {
      fontHeading: "'Orbitron', 'Chakra Petch', sans-serif",
      fontBody: "'Share Tech Mono', monospace",
      scaleRatio: 1.333,
      letterSpacing: '0.05em'
    },
    geometry: {
      radiusSm: '4px',
      radiusMd: '8px',
      radiusLg: '12px',
      borderWidth: '1.5px'
    },
    effects: {
      shadowCard: '0 0 25px rgba(0, 255, 136, 0.2)',
      backdropBlur: '16px'
    }
  },
  'editorial-swiss': {
    id: 'editorial-swiss',
    name: 'Editorial Swiss',
    tagline: 'Академическая строгость, швейцарская сетка и безупречная типографика',
    colors: {
      bgPrimary: '#f9f9fb',
      bgSurface: '#ffffff',
      textPrimary: '#111111',
      textSecondary: '#555555',
      accent: '#0055ff',
      border: '#e2e2e8'
    },
    typography: {
      fontHeading: "'Neue Montreal', 'Inter', sans-serif",
      fontBody: "'Inter', sans-serif",
      scaleRatio: 1.25,
      letterSpacing: '-0.02em'
    },
    geometry: {
      radiusSm: '0px',
      radiusMd: '0px',
      radiusLg: '0px',
      borderWidth: '1px'
    },
    effects: {
      shadowCard: 'none',
      backdropBlur: '0px'
    }
  },
  'clean-minimal': {
    id: 'clean-minimal',
    name: 'Clean Minimal',
    tagline: 'Мягкий human-интерфейс, закругленные формы, воздух и деликатность',
    colors: {
      bgPrimary: '#0d0f12',
      bgSurface: '#181b20',
      textPrimary: '#ffffff',
      textSecondary: '#a0a6b2',
      accent: '#6366f1',
      border: 'rgba(255, 255, 255, 0.08)'
    },
    typography: {
      fontHeading: "'Plus Jakarta Sans', sans-serif",
      fontBody: "'Plus Jakarta Sans', sans-serif",
      scaleRatio: 1.2,
      letterSpacing: '0em'
    },
    geometry: {
      radiusSm: '8px',
      radiusMd: '16px',
      radiusLg: '24px',
      borderWidth: '1px'
    },
    effects: {
      shadowCard: '0 10px 30px rgba(0,0,0,0.3)',
      backdropBlur: '20px'
    }
  }
};

export const headerTexts = {
  mobile: {
    name: 'Nombre',
    wins: 'V',
    losses: 'D',
    goals: 'Gol.',
    points: 'Pts'
  },
  desktop: {
    name: 'Jugador',
    wins: 'Victorias',
    losses: 'Derrotas',
    goals: 'Goles',
    points: 'Puntos'
  }
};

export const getResponsiveTexts = (isMobile: boolean) => {
  return isMobile ? headerTexts.mobile : headerTexts.desktop;
};

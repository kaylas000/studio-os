// SYS-07 · Brand DNA клиента поверх архетипа cyber-tech.
// Эти значения (1) красят сайт через --brand-* и (2) проверяются `studio audit`
// на APCA: override-палитра не имеет права быть нечитаемее базового архетипа.

export const brandName = 'ВЫЛЕТ';
export const brandTagline = 'Автовышки · автокраны · манипуляторы · земтехника';

export const brandTokens = {
  bgPrimary: '#05070c',
  bgSurface: '#0b1119',
  textPrimary: '#e8eef8',
  textSecondary: '#a8c6ff',
  accent: '#ffb020', // сигнальный янтарь спецтехники
  telemetry: '#00f2fe', // цифры телеметрии
  alert: '#ff5c39',
  border: 'rgba(255, 176, 32, 0.24)'
};

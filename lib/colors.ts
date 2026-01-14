export const oceanLightPalette = {
  /* Brand */
  primary: '#2563eb', // blue-600
  primaryVariant: '#1d4ed8', // blue-700
  onPrimary: '#ffffff',

  secondary: '#0ea5e9', // sky-500
  secondaryVariant: '#0284c7', // sky-600
  onSecondary: '#ffffff',

  /* Surfaces */
  background: '#ffffff',
  onBackground: '#0f172a',

  surface: '#f8fafc', // slate-50
  surfaceVariant: '#e2e8f0', // slate-200
  onSurface: '#020617', // slate-950
  onSurfaceMuted: '#64748b', // slate-500

  /* Feedback */
  success: '#22c55e', // green-500
  onSuccess: '#ffffff',

  warning: '#facc15', // yellow-400
  onWarning: '#020617',

  error: '#ef4444', // red-500
  onError: '#ffffff',

  info: '#0ea5e9', // sky-500
  onInfo: '#ffffff',

  /* Structure */
  outline: '#c7d2fe', // indigo-200
  divider: '#e2e8f0', // slate-200
  overlay: 'rgba(15, 23, 42, 0.45)', // slate-900-ish
} as const

export const oceanDarkPalette = {
  /* Brand */
  primary: '#60a5fa', // blue-400
  primaryVariant: '#2563eb', // blue-600
  onPrimary: '#020617',

  secondary: '#38bdf8', // sky-400
  secondaryVariant: '#0ea5e9', // sky-500
  onSecondary: '#020617',

  /* Surfaces */
  background: '#020617', // slate-950
  onBackground: '#f8fafc', // slate-50

  surface: '#020617',
  surfaceVariant: '#0f172a', // slate-900-ish

  onSurface: '#e5e7eb', // gray-200
  onSurfaceMuted: '#94a3b8', // slate-400

  /* Feedback */
  success: '#22c55e',
  onSuccess: '#020617',

  warning: '#fde047', // yellow-300
  onWarning: '#020617',

  error: '#f87171', // red-400
  onError: '#020617',

  info: '#38bdf8',
  onInfo: '#020617',

  /* Structure */
  outline: '#1e40af', // blue-800
  divider: '#1e293b', // slate-800
  overlay: 'rgba(248, 250, 252, 0.08)', // soft light scrim
} as const

const forestLightPalette = {
  /* Brand */
  primary: '#166534', // deep green
  primaryVariant: '#14532d',
  onPrimary: '#ffffff',

  secondary: '#0ea5a4', // teal
  secondaryVariant: '#0f766e',
  onSecondary: '#ffffff',

  /* Surfaces */
  background: '#f8fafc',
  onBackground: '#0f172a',

  surface: '#ecfeff',
  surfaceVariant: '#ccfbf1',
  onSurface: '#134e4a',
  onSurfaceMuted: '#6b7280',

  /* Feedback */
  success: '#16a34a',
  onSuccess: '#ffffff',

  warning: '#f59e0b',
  onWarning: '#000000',

  error: '#dc2626',
  onError: '#ffffff',

  info: '#0284c7',
  onInfo: '#ffffff',

  /* Structure */
  outline: '#99f6e4',
  divider: '#ccfbf1',
} as const

const forestDarkPalette = {
  /* Brand */
  primary: '#22c55e',
  primaryVariant: '#166534',
  onPrimary: '#020617',

  secondary: '#2dd4bf',
  secondaryVariant: '#0d9488',
  onSecondary: '#020617',

  /* Surfaces */
  background: '#020617',
  onBackground: '#ecfeff',

  surface: '#0b1410', // very dark pine
  surfaceVariant: '#12211a', // lifted pine (hover)

  onSurface: '#d1fae5',
  onSurfaceMuted: '#94a3b8',

  /* Feedback */
  success: '#22c55e',
  onSuccess: '#020617',

  warning: '#fbbf24',
  onWarning: '#020617',

  error: '#f87171',
  onError: '#020617',

  info: '#38bdf8',
  onInfo: '#020617',

  /* Structure */
  outline: '#134e4a',
  divider: '#064e3b',
} as const

export const palettes = {
  ocean: {
    dark: oceanDarkPalette,
    light: oceanLightPalette,
  },
  forest: {
    dark: forestDarkPalette,
    light: forestLightPalette,
  },
}

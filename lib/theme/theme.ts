// theme.ts
export function applyTheme(theme: { primary: string; secondary: string }) {
  document.documentElement.style.setProperty('--color-primary', theme.primary)
  document.documentElement.style.setProperty(
    '--color-secondary',
    theme.secondary
  )
}

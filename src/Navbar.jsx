import { Link } from 'react-router-dom'

function ThemeToggleButton({ variant, onClick }) {
  const styles =
    variant === 'dark'
      ? 'bg-slate-900 text-white hover:bg-slate-700'
      : 'bg-white text-slate-900 hover:bg-slate-100'
  const label = variant === 'dark' ? 'Switch to dark mode' : 'Switch to light mode'

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`rounded-md border border-slate-400 px-4 py-2 text-sm font-medium transition-colors ${styles}`}
    >
      {label}
    </button>
  )
}

function Navbar({ theme, onToggleTheme }) {
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const isDark = theme === 'dark'

  return (
    <header
      className={`border-b ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          className={`font-semibold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
          to="/"
        >
          My Project
        </Link>
        <ThemeToggleButton variant={nextTheme} onClick={onToggleTheme} />
      </nav>
    </header>
  )
}

export default Navbar

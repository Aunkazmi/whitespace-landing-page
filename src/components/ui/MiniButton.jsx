import Arrow from './Arrow'
import './MiniButton.css'

export default function MiniButton({ children = 'Get started', href = '#quotation', variant = 'primary' }) {
  return (
    <a className={`mini-button ${variant}`} href={href}>
      <span>{children}</span>
      <Arrow />
    </a>
  )
}

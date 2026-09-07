import Arrow from './Arrow'
import './MiniButton.css'

export default function MiniButton({ children = 'Get started', href = '#quotation', variant = 'primary', onClick }) {
  return (
    <a className={`mini-button ${variant}`} href={href} onClick={onClick}>
      <span>{children}</span>
      <Arrow />
    </a>
  )
}

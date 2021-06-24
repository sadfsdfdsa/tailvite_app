/**
 * @file src/components/base/Logo/index.tsx
 * @fileoverview Logo of the app
 * @author Artem Shuvaev
 * @version 1.0.0
 */

import styles from './styles.module.css'

/**
 * Create component for top left Header logo
 * @param props - properties for Logo components
 * @returns Logo TSX component
 */
const Logo = (props: { label?: string; anim?: boolean }) => {
  const cls = props.anim ? styles.anim + ' pr-1' : ''

  return <span class={cls}>{props.label || '<Code />'}</span>
}

export default Logo

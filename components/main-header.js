import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css';

export default function name() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <img src={logoImg.src} alt="A plate with food on in" />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

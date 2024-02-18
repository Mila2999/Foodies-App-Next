import Link from 'next/link';
import logoImg from '@/assets/logo.png';

export default function name() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on in" />
        NextLevel Food
      </Link>
    </header>
  );
}

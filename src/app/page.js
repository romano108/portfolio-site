import Navbar from '@/components/Navbar';
import HeaderLanding from '@/components/HeaderLanding';
import './page.css';
import Image from 'next/image';
import Dolphin from '@/app/assets/pinneaple.png';

export default function Home() {
  return (
    <div className="portfolio-container">
      <aside className="sidebar w-40">
        <Image src={Dolphin} alt="A dolphin" width={300} height={100} />
      </aside>
      <div className="content-wrapper">
        <main className="content">
          <HeaderLanding />
        </main>
      </div>
    </div>
  );
}

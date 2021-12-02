import BootsCTA from 'components/BoostCTA';
import Hero from 'components/Hero';
import Stats from 'components/Stats';

function LandingPage() {
  return (
    <main className="landing-page">
      <Hero></Hero>
      <Stats></Stats>
      <BootsCTA></BootsCTA>
    </main>
  );
}

export default LandingPage;

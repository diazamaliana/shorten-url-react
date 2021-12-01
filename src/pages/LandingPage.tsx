import BootsCTA from 'components/BoostCTA';
import Hero from 'components/Hero';
import Stats from 'components/Stats';

function LandingPage() {
  return (
    <div className="landing-page">
      <Hero></Hero>
      <Stats></Stats>
      <BootsCTA></BootsCTA>
    </div>
  );
}

export default LandingPage;

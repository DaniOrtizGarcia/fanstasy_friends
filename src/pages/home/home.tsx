import logo from '../../assets/fantasy-league.inline.svg';
import { PlayerList } from '../../components/players-list';
import './home.scss';

export const HomePage = () => {
  return (
    <main className="home-page">
      <section className='home-page__brand'>
        <img className='home-page__brand_logo' src={logo} alt="Cojos Fantasy League" />
        <h1 className='home-page__brand_title'>Cojos Fantasy</h1>
      </section>

      <section className='home-page__players_list'>
        <PlayerList />
      </section>
    </main>
  )
}

export default HomePage;

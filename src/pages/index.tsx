import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | moveitnextJs</title>
      </Head>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}

export default App;

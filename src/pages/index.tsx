import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from '../components/ChallengeBox'

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
        <ChallengeBox/>
        </div>
      </section>
    </div>
  );
}

export default App;

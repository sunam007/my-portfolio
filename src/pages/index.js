import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.heroImage)}>
      <div className="container">
        <h1 className="hero__title">Hello, my name is Asaduzzaman Sunam.</h1>
        <h2 className="hero__subtitle">I am a junior fullstack developer.</h2>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="my-projects/project-viznet">
            Check out some of my personal projects
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Asaduzzaman Sunam'}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

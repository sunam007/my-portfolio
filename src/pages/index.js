import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const resume_url =
    "https://drive.google.com/file/d/1HKWuss6ygb_LKQey9Nkzd0bs_7eM8FfP";
  return (
    <header
      className={clsx(
        "hero hero--primary",
        styles.heroBanner,
        styles.heroImage
      )}
    >
      <div className="container">
        <div>
          <h1 className="hero__title">
            <span className="hero__span">hello world ,</span> I'm Asaduzzaman
            Sunam.
          </h1>
          <h2 className="hero__subtitle">
          I am a passionate JavaScript developer.
          </h2>
        </div>
        <br />
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="my-projects/espd"
          >
            Check out my projects
          </Link>
        </div>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href={resume_url}
          >
            Download my resume
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={"Asaduzzaman Sunam"}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

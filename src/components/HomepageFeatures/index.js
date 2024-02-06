import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

//  JavaScript, React, Next JS, Angular, Redux, RxJS, Typescript, SCSS, Tailwind css,
// Ant Design Framer Motion, Figma IJI, Git & Github, Express JS, MongoDB, Firebase,
// Material UI,

const FeatureList = [
  {
    title: 'Professional Skills',
    Svg: require('@site/static/img/programming-monitor.svg').default,
    description: (
      <>
      <div id="programming-languages">
          <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next JS</li>
              <li>Node JS</li>
              <li>Nest JS</li>
              <li>Express JS</li>
              <li>Prisam</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Bootstrap</li>
              <li>Tailwind css</li>
              <li>Ant Design</li>
              <li>Firebase</li>
              <li>Git & Github</li>
          </ul>
      </div>
      </>
    ),
  },
  {
    title: 'Contact Information',
    Svg: require('@site/static/img/smartphone.svg').default,
    description: (
      <>
        <b>Name:</b>Asaduzzaman Sunam<br></br>
        <b>Email:</b> asaduzzaman.sunam@gmail.com<br></br>
        <b>Linkedin:</b> <a href="https://www.linkedin.com/in/asaduzzaman-sunam/" target="_blank">linkedin.com/in/asaduzzaman-sunam</a><br></br>
        <b>Github:</b> <a href="https://github.com/sunam007" target="_blank">github.com/sunam007</a><br></br>
      </>
    ),
  },
  {
    title: 'Misc Skills',
    Svg: require('@site/static/img/edit-tools-ruler.svg').default,
    description: (
      <>
        <p className={styles.miscSkills}>Docker</p>
        <p className={styles.miscSkills}>Kubernetes</p>
        <p className={styles.miscSkills}>Azure Cloud</p>
        <p className={styles.miscSkills}>Azure Pipelines</p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

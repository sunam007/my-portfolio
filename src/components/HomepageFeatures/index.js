import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

//  JavaScript, React, Next JS, Angular, Redux, RxJS, Typescript, SCSS, Tailwind css,
// Ant Design Framer Motion, Figma IJI, Git & Github, Express JS, MongoDB, Firebase,
// Material UI,

const FeatureList = [
  {
    title: "Professional Skills",
    Svg: require("@site/static/img/programming-monitor.svg").default,
    description: (
      <>
        <div id="programming-languages">
          <br />
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next JS</li>
            <li>Node JS</li>
            <li>Nest JS</li>
            <li>Git</li>
            <li>Express JS</li>
            <li>Prisma</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Tailwind css</li>
            <li>Ant Design</li>
          </ul>
          <br />
        </div>
      </>
    ),
  },
  {
    title: "Work Experience",
    Svg: require("@site/static/img/edit-tools-ruler.svg").default,
    description: (
      <>
        <br />
        {/* Experience 1 */}
        <p className={styles.miscSkills}>
          <b> Fullstack JS Developer </b>
          <br />
          <p>
            IT Corner Ltd. <br />(<em> August 2024 - Present </em> )
          </p>
        </p>
        {/* Experience 2 */}
        <p className={styles.miscSkills}>
          <b> Jr. MERN-stack Developer </b>
          <br />
          <p>
            Bitpixel Software Solutions <br />(
            <em>June 2023 - August 2024 </em> )
          </p>
        </p>
        {/* Experience 3 */}
        <p className={styles.miscSkills}>
          <b> Web Developer ( intern ) </b>
          <br />
          <p>
            Bitpixel Software Solutions <br />
            (<em> April 2023 - June 2023 </em> )
          </p>
        </p>
      </>
    ),
  },
  {
    title: "Contact Information",
    Svg: require("@site/static/img/smartphone.svg").default,
    description: (
      <>
        <div className="contact__container">
          <div className="contact__info__div">
            <br />
            <p>
              <b>Name: </b>Asaduzzaman Sunam
            </p>
            <p>
              <b>Github: </b>
              <a href="https://github.com/sunam007" target="_blank">
                github.com/sunam007
              </a>
            </p>
            <p>
              <b>Phone:</b> <a>+8801849-715021</a>
            </p>
            <p>
              <b>Email:</b> <a>asaduzzaman.sunam@gmail.com</a>
            </p>
            <br />
            <br />
          </div>
        </div>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <>{description}</>
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

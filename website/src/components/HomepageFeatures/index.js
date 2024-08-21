import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Essays',
    Svg: require('@site/static/img/essays.svg').default,
    description: (
      <>
        Creative nonfiction helped me find my voice as a young writer. These days, I use it to tell stories, to honor loved ones, and to make sense of my world.
      </>
    ),
  },
  {
    title: 'Food and Travel',
    Svg: require('@site/static/img/travel.svg').default,
    description: (
      <>
        I was a travel writer in a previous life. I visited restaurants and stayed in hotels, and then I wrote about those awesome experiences.
      </>
    ),
  },
  {
    title: 'Technology',
    Svg: require('@site/static/img/tech.svg').default,
    description: (
      <>
        I have done the full gamut of technical writing: from writing articles for a tech magazine, doing technical marketing, and eventually focusing on technical documentation and UX writing.
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
        <Heading as="h3">{title}</Heading>
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

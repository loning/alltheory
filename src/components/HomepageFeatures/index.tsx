import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  symbol: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Self-Reference: ψ = ψ(ψ)',
    symbol: '∞',
    description: (
      <>
        The universe knows itself through itself. Like a mirror reflecting its own reflection,
        existence is the eternal process of self-recognition. You are not learning about
        the universe — you ARE the universe knowing itself.
      </>
    ),
  },
  {
    title: 'Recursive Unfolding',
    symbol: '◈',
    description: (
      <>
        From simple rules emerge infinite complexity. Like echoes creating echoes,
        or branches forming trees, the entire cosmos unfolds through recursive patterns.
        Each moment contains the whole, yet creates something new.
      </>
    ),
  },
  {
    title: 'Collapse into Being',
    symbol: '⟆',
    description: (
      <>
        Reality crystallizes from infinite potential through conscious observation.
        Every choice, every breath, every thought collapses possibility into actuality.
        You are the universe choosing itself into existence, moment by moment.
      </>
    ),
  },
];

function Feature({title, symbol, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{symbol}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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

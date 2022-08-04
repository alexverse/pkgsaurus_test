import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
  title: 'A Title',
  Svg: require('@site/static/img/undraw_sharing_knowledge_03vp.svg').default,
  description: (
    <>
      This is a Description
    </>
  ),
},


{
  title: 'Another Title',
  Svg: require('@site/static/img/undraw_personal_trainer_re_cnua.svg').default,
  description: (
    <>
      This is another Description
    </>
  ),
},


{
  title: 'Yet Another Title',
  Svg: require('@site/static/img/undraw_office_snack_re_l162.svg').default,
  description: (
    <>
      Final Description
    </>
  ),
},

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
      <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
      <h3>{title}</h3>
      <p>{description}</p>
      </div>
      </div>
  );
  }

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
      <div className='row'>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
      </div>
      </section>
  );
}

import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ales.png"
          alt="An image showing Aleš"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Aleš</h1>
      <p>I blog about my code learning journey</p>
    </section>
  );
}

export default Hero;

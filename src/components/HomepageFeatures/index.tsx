import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "*.js",
    description: (
      <>
        In 2007, Jeff Atwood made the quote that was popularly referred to as
        Atwood's Law: “Any application that can be written in JavaScript, will
        eventually be written in JavaScript.”
      </>
    ),
  },
  {
    title: "Be an artist",
    description: (
      <>
        If you have not read the book <i>Hackers and Artists</i>, you should.
      </>
    ),
  },
  {
    title: "cryptography",
    description: (
      <>
        I always view cryptography as a missing part of elementary school, and,
        for a good reason.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

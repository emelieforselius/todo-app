import Link from "next/link";
import Image from "next/image";
import styles from "../styles/LandingPage.module.css"

const LandingPage = () => {
  const links = [{ href: "/todo" }];

  return (
    <div className={styles.todoPageContainer}>
      <div className={styles.textContainer}>
      <h1 className={styles.title}>Task Tracker</h1>
      <p className={styles.description}>
        With our todo list, you can easily add, remove and keep track of your
        tasks. <br /> Capture your thoughts and plan your day!
        <br />
        <br />
        Wanna get started? Click <Link href="/todo">here</Link> to add your
        tasks :)
      </p>
      </div>
      <Image
        src="/website-launch-checklist.svg"
        alt="Website launch checklist"
        width={400}
        height={400}
        className={styles.image}
      ></Image>
    </div>
  );
};

export default LandingPage;

import Link from "next/link";
import Image from "next/image";

const LandingPage = () => {
  const links = [{ href: "/todo" }];

  return (
    <div>
      <h1>Task Tracker</h1>
      <p>
        With our todo list, you can easily add, remove and keep track of your
        tasks. Capture your thoughts and plan your day!
        <br />
        <br />
        Wanna get started? Click <Link href="/todo">here</Link> to add your
        tasks :)
      </p>
      <Image
        src="/website-launch-checklist.svg"
        alt="Website launch checklist"
        width={400}
        height={400}
      ></Image>
    </div>
  );
};

export default LandingPage;

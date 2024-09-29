import Link from "next/link";

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
    </div>
  );
};

export default LandingPage;

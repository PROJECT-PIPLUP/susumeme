import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-2 text-center">
      <h1 className="text-8xl text-indigo-500">
        <Link href="https://about.susume.me">susume.me</Link>
      </h1>
    </main>
  );
}

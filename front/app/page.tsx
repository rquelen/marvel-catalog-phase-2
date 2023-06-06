import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-24 gap-5">
      <h1 className={"text-2xl text-center hover:animate-bounce"}>
        Welcome to this wondereful multiverse catalog 🦸‍
      </h1>
      <Link
        href={"/marvel-catalog/1"}
        className={"underline hover:text-slate-600 hover:animate-spin w-fit"}
      >
        Marvel catalog
      </Link>
      <Link
        href={"/dc-catalog/1"}
        className={"underline hover:text-slate-600 hover:animate-pulse"}
      >
        DC catalog
      </Link>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/static" className="text-2xl underline m-5">
        Static
      </Link>
      <Link href="/dynamic" className="text-2xl underline m-5">
        Dynamic
      </Link>
    </div>
  );
}

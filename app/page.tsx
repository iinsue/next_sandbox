import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Link href={"/caroucel"}>캐러셀</Link>
    </div>
  );
}

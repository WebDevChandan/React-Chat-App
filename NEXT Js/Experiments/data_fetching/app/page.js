import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/productlist">Go To Client Side Fetching</Link>
      <br />
      <br />
      <Link href="/productimg">Go To Server Side Fetching</Link>
    </>
  )
}

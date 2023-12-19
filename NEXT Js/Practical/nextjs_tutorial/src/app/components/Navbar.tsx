import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <Link href="/"> Home</Link>
            <Link href="/about"> About</Link>
            <Link href="/about/us"> About Us</Link>
            <Link href="/about/company"> About Company</Link>
            <Link href="/listofposts"> All Posts</Link>
        </div>
    );
}
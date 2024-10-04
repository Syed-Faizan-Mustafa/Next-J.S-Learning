import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <h1>My Fisrt Webpage</h1>
      <nav >
        <ul>
          <li><Link href="/Domain">Domain</Link></li>
          <li><Link href="/Blogs">Blogs</Link></li>
          <li><Link href="/About_us">About Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}

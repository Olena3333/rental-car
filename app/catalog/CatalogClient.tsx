import Link from "next/link";
export default function HomePage() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Find your perfect rental car</h1>
        <p>Reliable and comfortable cars for your journey.</p>
        <Link href="/catalog" className="primaryButton">
          View Catalog
        </Link>
      </div>
    </section>
  );
}

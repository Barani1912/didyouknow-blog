import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 space-y-6">
      <h1 className="font-serif text-7xl md:text-9xl font-normal text-black">
        404
      </h1>
      <h2 className="font-serif text-2xl md:text-3xl font-normal text-black">
        Page Not Found
      </h2>
      <p className="font-sans text-sm md:text-base text-black/70 max-w-md leading-relaxed">
        The article or category you are looking for does not exist, or has been moved to a new location.
      </p>
      <Link
        href="/"
        className="font-sans text-sm uppercase tracking-widest font-semibold text-black underline underline-offset-4 decoration-1"
      >
        Back to Home Page
      </Link>
    </div>
  );
}

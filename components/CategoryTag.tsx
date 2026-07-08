import Link from "next/link";

interface CategoryTagProps {
  slug: string;
  name: string;
}

export default function CategoryTag({ slug, name }: CategoryTagProps) {
  return (
    <Link
      href={`/category/${slug}`}
      className="eyebrow hover:underline underline-offset-4"
    >
      {name}
    </Link>
  );
}

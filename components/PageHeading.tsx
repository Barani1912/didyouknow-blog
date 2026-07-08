interface PageHeadingProps {
  title: string;
  description?: string;
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-serif font-normal tracking-tight text-black leading-tight">
        {title}
      </h1>
      {description && (
        <p className="text-base md:text-lg text-black/70 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

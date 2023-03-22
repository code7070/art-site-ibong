interface Props {
  title: string;
  description?: string;
  children?: string | JSX.Element | JSX.Element[];
}

export default function ArtSection({ title, description, children }: Props) {
  return (
    <div className="mb-16">
      <div className="text-4xl font-black tracking-[0.15em] text-black opacity-50">
        {title}
      </div>
      <div className="tracking-[0.05em] text-black opacity-70">
        {description}
      </div>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}

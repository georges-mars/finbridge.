interface SectionEyebrowProps {
  children: React.ReactNode;
  number?: string;
}

export function SectionEyebrow({ children, number }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-3">
      {number && <span className="eyebrow text-foreground">{number}</span>}
      <span className="eyebrow">— {children}</span>
    </div>
  );
}

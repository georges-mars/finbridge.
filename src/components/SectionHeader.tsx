interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <div className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

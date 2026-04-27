import { Link, NavLink } from "react-router-dom";
import { Boxes, Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/process", label: "Process" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background group-hover:bg-primary transition-colors">
            <Boxes className="h-4 w-4" strokeWidth={2.25} />
          </div>
          <span className="font-sans text-[15px] font-semibold tracking-tight">
            FinBridge<span className="text-muted-foreground"> Solutions</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "px-3.5 py-2 text-sm rounded-md text-foreground font-medium"
                  : "px-3.5 py-2 text-sm text-muted-foreground rounded-md transition-colors hover:text-foreground"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background hover:bg-primary transition-colors"
        >
          Hire Us
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-3 text-sm rounded-md text-foreground font-medium bg-muted"
                    : "px-4 py-3 text-sm text-muted-foreground rounded-md hover:text-foreground hover:bg-muted"
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              Hire Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

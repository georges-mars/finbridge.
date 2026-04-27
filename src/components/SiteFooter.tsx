import { Link } from "react-router-dom";
import { Boxes, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="section-ink border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-12 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-background text-foreground">
                <Boxes className="h-4 w-4" strokeWidth={2.25} />
              </div>
              <span className="text-base font-semibold">FinBridge Solutions</span>
            </Link>
            <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
              A two-person engineering team building production-ready mobile, backend, IoT, and full-stack systems end-to-end.
            </p>
            <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> georgesmars8@gmail.com
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Nairobi, Kenya — Remote Worldwide
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow">Explore</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/skills" className="hover:text-primary transition-colors">Skills</Link></li>
              <li><Link to="/process" className="hover:text-primary transition-colors">Process</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow">Start a project</div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Tell us what you are building. We will come back with a clear technical path within 24 hours.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Schedule a call →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} FinBridge Solutions. All rights reserved.</span>
          <span className="font-mono">Built with intent in Nairobi.</span>
        </div>
      </div>
    </footer>
  );
}

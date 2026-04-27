import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { Boxes, ArrowUpRight, X, Menu, Mail, MapPin, Clock, Monitor, ChevronLeft, ChevronRight, Globe, ArrowRight, Calendar } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const appCss = "/assets/styles-BRtv1a-V.css";
const navItems = [
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/process", label: "Process" }
];
function SiteHeader() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", onClick: () => setOpen(false), children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background group-hover:bg-primary transition-colors", children: /* @__PURE__ */ jsx(Boxes, { className: "h-4 w-4", strokeWidth: 2.25 }) }),
        /* @__PURE__ */ jsxs("span", { className: "font-sans text-[15px] font-semibold tracking-tight", children: [
          "FinBridge",
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: " Solutions" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1", children: navItems.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.to,
          className: "px-3.5 py-2 text-sm text-muted-foreground rounded-md transition-colors hover:text-foreground",
          activeProps: { className: "px-3.5 py-2 text-sm rounded-md text-foreground font-medium" },
          children: item.label
        },
        item.to
      )) }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/contact",
          className: "hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background hover:bg-primary transition-colors",
          children: [
            "Hire Us",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden p-2 rounded-md hover:bg-muted",
          onClick: () => setOpen(!open),
          "aria-label": "Toggle menu",
          children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col p-4 gap-1", children: [
      navItems.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.to,
          onClick: () => setOpen(false),
          className: "px-4 py-3 text-sm text-muted-foreground rounded-md hover:text-foreground hover:bg-muted",
          activeProps: { className: "px-4 py-3 text-sm rounded-md text-foreground font-medium bg-muted" },
          children: item.label
        },
        item.to
      )),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          onClick: () => setOpen(false),
          className: "mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background",
          children: "Hire Us"
        }
      )
    ] }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "section-ink border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-12 sm:py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-md bg-background text-foreground", children: /* @__PURE__ */ jsx(Boxes, { className: "h-4 w-4", strokeWidth: 2.25 }) }),
          /* @__PURE__ */ jsx("span", { className: "text-base font-semibold", children: "FinBridge Solutions" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-sm text-muted-foreground leading-relaxed", children: "A two-person engineering team building production-ready mobile, backend, IoT, and full-stack systems end-to-end." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
            " georgesmars8@gmail.com"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
            " Nairobi, Kenya — Remote Worldwide"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Explore" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:text-primary transition-colors", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/team", className: "hover:text-primary transition-colors", children: "Team" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/projects", className: "hover:text-primary transition-colors", children: "Projects" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/skills", className: "hover:text-primary transition-colors", children: "Skills" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/process", className: "hover:text-primary transition-colors", children: "Process" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Start a project" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-muted-foreground leading-relaxed", children: "Tell us what you are building. We will come back with a clear technical path within 24 hours." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/contact",
            className: "mt-6 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors",
            children: "Schedule a call →"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " FinBridge Solutions. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("span", { className: "font-mono", children: "Built with intent in Nairobi." })
    ] })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00"
];
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}
function isWeekend(year, month, day) {
  const d = new Date(year, month, day).getDay();
  return d === 0 || d === 6;
}
function isPastDate(year, month, day) {
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const check = new Date(year, month, day);
  return check < today;
}
function isToday(year, month, day) {
  const today = /* @__PURE__ */ new Date();
  return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
}
function ScheduleCallModal({ open, onOpenChange }) {
  const now = /* @__PURE__ */ new Date();
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };
  const handleDateClick = (day) => {
    if (isPastDate(currentYear, currentMonth, day)) return;
    if (isWeekend(currentYear, currentMonth, day)) return;
    setSelectedDate(day);
    setSelectedTime(null);
    setConfirmed(false);
  };
  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      setSelectedDate(null);
      setSelectedTime(null);
      onOpenChange(false);
    }, 2500);
  };
  const canGoPrev = !(currentYear === now.getFullYear() && currentMonth === now.getMonth());
  const blanks = Array.from({ length: firstDay }, (_, i) => /* @__PURE__ */ jsx("div", { className: "schedule-cal-cell" }, `blank-${i}`));
  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const past = isPastDate(currentYear, currentMonth, day);
    const weekend = isWeekend(currentYear, currentMonth, day);
    const today = isToday(currentYear, currentMonth, day);
    const selected = selectedDate === day;
    const disabled = past || weekend;
    return /* @__PURE__ */ jsxs(
      "button",
      {
        disabled,
        onClick: () => handleDateClick(day),
        className: `schedule-cal-cell schedule-cal-day
          ${disabled ? "schedule-cal-day--disabled" : "schedule-cal-day--enabled"}
          ${selected ? "schedule-cal-day--selected" : ""}
          ${today && !selected ? "schedule-cal-day--today" : ""}
        `,
        children: [
          day,
          today && /* @__PURE__ */ jsx("span", { className: "schedule-cal-today-dot" })
        ]
      },
      day
    );
  });
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "schedule-modal-content max-w-[820px] !p-0 gap-0 overflow-hidden border-0 bg-white text-[#1a1a2e]", children: [
    /* @__PURE__ */ jsx(DialogTitle, { className: "sr-only", children: "Schedule a Call" }),
    /* @__PURE__ */ jsxs("div", { className: "schedule-modal-layout", children: [
      /* @__PURE__ */ jsxs("div", { className: "schedule-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "schedule-brand", children: [
          /* @__PURE__ */ jsx("div", { className: "schedule-brand-icon", children: /* @__PURE__ */ jsx(Boxes, { className: "h-4 w-4", strokeWidth: 2.25 }) }),
          /* @__PURE__ */ jsx("span", { className: "schedule-brand-name", children: "FinBridge Solutions" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "schedule-meeting-title", children: "Project Discovery Call" }),
        /* @__PURE__ */ jsxs("div", { className: "schedule-meta", children: [
          /* @__PURE__ */ jsxs("div", { className: "schedule-meta-row", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "30 min" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "schedule-meta-row", children: [
            /* @__PURE__ */ jsx(Monitor, { className: "h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Web conferencing details provided upon confirmation." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "schedule-desc", children: /* @__PURE__ */ jsx("p", { children: "We'll discuss your project requirements, technical architecture, timeline, and how FinBridge Solutions can help you ship production-ready systems." }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "schedule-right", children: !confirmed ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h3", { className: "schedule-cal-title", children: "Select a Date & Time" }),
        /* @__PURE__ */ jsxs("div", { className: "schedule-cal-nav", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handlePrevMonth,
              disabled: !canGoPrev,
              className: "schedule-cal-nav-btn",
              "aria-label": "Previous month",
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "schedule-cal-month", children: [
            MONTH_NAMES[currentMonth],
            " ",
            currentYear
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleNextMonth,
              className: "schedule-cal-nav-btn",
              "aria-label": "Next month",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "schedule-cal-grid schedule-cal-header", children: DAYS.map((d) => /* @__PURE__ */ jsx("div", { className: "schedule-cal-cell schedule-cal-weekday", children: d }, d)) }),
        /* @__PURE__ */ jsxs("div", { className: "schedule-cal-grid", children: [
          blanks,
          days
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "schedule-tz", children: [
          /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "East Africa Time (",
            (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }),
            ")"
          ] })
        ] }),
        selectedDate && /* @__PURE__ */ jsxs("div", { className: "schedule-times animate-fade-up", children: [
          /* @__PURE__ */ jsxs("div", { className: "schedule-times-label", children: [
            "Available times for ",
            MONTH_NAMES[currentMonth],
            " ",
            selectedDate
          ] }),
          /* @__PURE__ */ jsx("div", { className: "schedule-times-grid", children: TIME_SLOTS.map((time) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSelectedTime(time),
              className: `schedule-time-btn ${selectedTime === time ? "schedule-time-btn--selected" : ""}`,
              children: time
            },
            time
          )) }),
          selectedTime && /* @__PURE__ */ jsxs("button", { onClick: handleConfirm, className: "schedule-confirm-btn animate-fade-up", children: [
            "Confirm Booking",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) : (
        /* ── Confirmation state ── */
        /* @__PURE__ */ jsxs("div", { className: "schedule-confirmed animate-fade-up", children: [
          /* @__PURE__ */ jsx("div", { className: "schedule-confirmed-check", children: "✓" }),
          /* @__PURE__ */ jsx("h3", { className: "schedule-confirmed-title", children: "Call Scheduled!" }),
          /* @__PURE__ */ jsxs("p", { className: "schedule-confirmed-text", children: [
            MONTH_NAMES[currentMonth],
            " ",
            selectedDate,
            ", ",
            currentYear,
            " at ",
            selectedTime
          ] }),
          /* @__PURE__ */ jsx("p", { className: "schedule-confirmed-subtext", children: "You'll receive a confirmation email with meeting details." })
        ] })
      ) })
    ] })
  ] }) });
}
function FloatingCTA() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        className: "fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-2xl shadow-foreground/20 hover:bg-primary transition-colors cursor-pointer",
        children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
          "Schedule your FREE call"
        ]
      }
    ),
    /* @__PURE__ */ jsx(ScheduleCallModal, { open, onOpenChange: setOpen })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FinBridge Solutions — Engineering that ships" },
      { name: "description", content: "A two-person engineering team building production-ready mobile, backend, IoT, and full-stack systems end-to-end." },
      { name: "author", content: "FinBridge Solutions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(FloatingCTA, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./team-B6V16aQx.js");
const Route$6 = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "Team — FinBridge Solutions"
    }, {
      name: "description",
      content: "Two engineers, one full stack. A focused two-person team that moves quickly across product, platform, firmware, and infrastructure."
    }, {
      property: "og:title",
      content: "Team — FinBridge Solutions"
    }, {
      property: "og:description",
      content: "Meet Eddy and George — the two engineers behind FinBridge Solutions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./skills-IUHhQyLK.js");
const Route$5 = createFileRoute("/skills")({
  head: () => ({
    meta: [{
      title: "Skills — FinBridge Solutions"
    }, {
      name: "description",
      content: "Core engineering depth across backend systems, mobile and frontend platforms, embedded devices, and modern cloud operations."
    }, {
      property: "og:title",
      content: "Capabilities — FinBridge Solutions"
    }, {
      property: "og:description",
      content: "Backend, embedded, frontend, mobile, cloud, and DevOps capabilities."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./services-C48cmjtA.js");
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — FinBridge Solutions"
    }, {
      name: "description",
      content: "Mobile, backend, full-stack web, IoT and embedded systems, cloud and DevOps, plus data and AI integration."
    }, {
      property: "og:title",
      content: "Services — FinBridge Solutions"
    }, {
      property: "og:description",
      content: "Full-spectrum engineering — mobile, backend, IoT, cloud, and AI integration."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./projects-CPEQJ8eM.js");
const Route$3 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — FinBridge Solutions"
    }, {
      name: "description",
      content: "A mix of IoT products, mobile experiences, and real-world production systems delivered across multiple industries."
    }, {
      property: "og:title",
      content: "Selected Work — FinBridge Solutions"
    }, {
      property: "og:description",
      content: "Anitrac, Hewa-Teck, Okoa Life, E-Shamba, ASTE, DosiWatch and more — IoT, mobile, and full-stack systems we shipped."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./process-C4Sm6Dbi.js");
const Route$2 = createFileRoute("/process")({
  head: () => ({
    meta: [{
      title: "Process — FinBridge Solutions"
    }, {
      name: "description",
      content: "A simple, transparent delivery flow designed for fast iteration and reliable production outcomes."
    }, {
      property: "og:title",
      content: "Our Process — FinBridge Solutions"
    }, {
      property: "og:description",
      content: "Discovery, architecture, build and iterate, deploy and support."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./contact-B3_E1uD9.js");
const Route$1 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — FinBridge Solutions"
    }, {
      name: "description",
      content: "Tell us what you are building and where you need help. We will come back with a clear technical path and next steps."
    }, {
      property: "og:title",
      content: "Let's build something great — FinBridge Solutions"
    }, {
      property: "og:description",
      content: "Get in touch with the FinBridge Solutions engineering team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BK0moMEl.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "FinBridge Solutions — Engineering that ships"
    }, {
      name: "description",
      content: "A two-person engineering team covering mobile apps, backend APIs, IoT firmware, and hardware. Full-stack. Production-ready. End-to-end."
    }, {
      property: "og:title",
      content: "FinBridge Solutions — Engineering that ships"
    }, {
      property: "og:description",
      content: "Mobile, backend, IoT, and full-stack systems delivered end-to-end by a focused two-person team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TeamRoute = Route$6.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$7
});
const SkillsRoute = Route$5.update({
  id: "/skills",
  path: "/skills",
  getParentRoute: () => Route$7
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const ProjectsRoute = Route$3.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$7
});
const ProcessRoute = Route$2.update({
  id: "/process",
  path: "/process",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$1.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  ProcessRoute,
  ProjectsRoute,
  ServicesRoute,
  SkillsRoute,
  TeamRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};

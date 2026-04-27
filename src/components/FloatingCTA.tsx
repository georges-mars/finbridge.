import { Calendar } from "lucide-react";
import { useState } from "react";
import { ScheduleCallModal } from "@/components/ScheduleCallModal";

export function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-2xl shadow-foreground/20 hover:bg-primary transition-colors cursor-pointer"
      >
        <Calendar className="h-4 w-4" />
        Schedule your FREE call
      </button>
      <ScheduleCallModal open={open} onOpenChange={setOpen} />
    </>
  );
}

import { useState } from "react";
import { Boxes, Clock, Monitor, Globe, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "14:00", "14:30", "15:00", "15:30", "16:00",
] as const;

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  // Convert Sunday=0 to Monday-start: Mon=0 ... Sun=6
  return day === 0 ? 6 : day - 1;
}

function isWeekend(year: number, month: number, day: number) {
  const d = new Date(year, month, day).getDay();
  return d === 0 || d === 6;
}

function isPastDate(year: number, month: number, day: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const check = new Date(year, month, day);
  return check < today;
}

function isToday(year: number, month: number, day: number) {
  const today = new Date();
  return (
    today.getFullYear() === year &&
    today.getMonth() === month &&
    today.getDate() === day
  );
}

interface ScheduleCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ScheduleCallModal({ open, onOpenChange }: ScheduleCallModalProps) {
  const now = new Date();
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
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

  const handleDateClick = (day: number) => {
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

  // Build calendar grid
  const blanks = Array.from({ length: firstDay }, (_, i) => (
    <div key={`blank-${i}`} className="schedule-cal-cell" />
  ));

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const past = isPastDate(currentYear, currentMonth, day);
    const weekend = isWeekend(currentYear, currentMonth, day);
    const today = isToday(currentYear, currentMonth, day);
    const selected = selectedDate === day;
    const disabled = past || weekend;

    return (
      <button
        key={day}
        disabled={disabled}
        onClick={() => handleDateClick(day)}
        className={`schedule-cal-cell schedule-cal-day
          ${disabled ? "schedule-cal-day--disabled" : "schedule-cal-day--enabled"}
          ${selected ? "schedule-cal-day--selected" : ""}
          ${today && !selected ? "schedule-cal-day--today" : ""}
        `}
      >
        {day}
        {today && <span className="schedule-cal-today-dot" />}
      </button>
    );
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="schedule-modal-content max-w-[820px] !p-0 gap-0 overflow-hidden border-0 bg-white text-[#1a1a2e]">
        <DialogTitle className="sr-only">Schedule a Call</DialogTitle>

        <div className="schedule-modal-layout">
          {/* ── Left Panel: Meeting info ── */}
          <div className="schedule-left">
            {/* Brand */}
            <div className="schedule-brand">
              <div className="schedule-brand-icon">
                <Boxes className="h-4 w-4" strokeWidth={2.25} />
              </div>
              <span className="schedule-brand-name">FinBridge Solutions</span>
            </div>

            {/* Meeting title */}
            <h2 className="schedule-meeting-title">Project Discovery Call</h2>

            {/* Meta */}
            <div className="schedule-meta">
              <div className="schedule-meta-row">
                <Clock className="h-4 w-4 shrink-0" />
                <span>30 min</span>
              </div>
              <div className="schedule-meta-row">
                <Monitor className="h-4 w-4 shrink-0" />
                <span>Web conferencing details provided upon confirmation.</span>
              </div>
            </div>

            {/* Description */}
            <div className="schedule-desc">
              <p>
                We'll discuss your project requirements, technical architecture, 
                timeline, and how FinBridge Solutions can help you ship 
                production-ready systems.
              </p>
            </div>
          </div>

          {/* ── Right Panel: Calendar ── */}
          <div className="schedule-right">
            {!confirmed ? (
              <>
                <h3 className="schedule-cal-title">Select a Date & Time</h3>

                {/* Month nav */}
                <div className="schedule-cal-nav">
                  <button
                    onClick={handlePrevMonth}
                    disabled={!canGoPrev}
                    className="schedule-cal-nav-btn"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="schedule-cal-month">
                    {MONTH_NAMES[currentMonth]} {currentYear}
                  </span>
                  <button
                    onClick={handleNextMonth}
                    className="schedule-cal-nav-btn"
                    aria-label="Next month"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Day headers */}
                <div className="schedule-cal-grid schedule-cal-header">
                  {DAYS.map((d) => (
                    <div key={d} className="schedule-cal-cell schedule-cal-weekday">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Day cells */}
                <div className="schedule-cal-grid">
                  {blanks}
                  {days}
                </div>

                {/* Time zone */}
                <div className="schedule-tz">
                  <Globe className="h-3.5 w-3.5 shrink-0" />
                  <span>East Africa Time ({new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })})</span>
                </div>

                {/* Time slots (appear when a date is selected) */}
                {selectedDate && (
                  <div className="schedule-times animate-fade-up">
                    <div className="schedule-times-label">
                      Available times for {MONTH_NAMES[currentMonth]} {selectedDate}
                    </div>
                    <div className="schedule-times-grid">
                      {TIME_SLOTS.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`schedule-time-btn ${
                            selectedTime === time ? "schedule-time-btn--selected" : ""
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    {selectedTime && (
                      <button onClick={handleConfirm} className="schedule-confirm-btn animate-fade-up">
                        Confirm Booking
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                )}
              </>
            ) : (
              /* ── Confirmation state ── */
              <div className="schedule-confirmed animate-fade-up">
                <div className="schedule-confirmed-check">✓</div>
                <h3 className="schedule-confirmed-title">Call Scheduled!</h3>
                <p className="schedule-confirmed-text">
                  {MONTH_NAMES[currentMonth]} {selectedDate}, {currentYear} at {selectedTime}
                </p>
                <p className="schedule-confirmed-subtext">
                  You'll receive a confirmation email with meeting details.
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

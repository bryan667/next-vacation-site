'use client';

import { useState } from 'react';

export function BookingWidget() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [travelers, setTravelers] = useState(2);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const updateTravelers = (delta: number) => {
    setTravelers((prev) => Math.max(1, Math.min(12, prev + delta)));
  };

  return (
    <div className="fixed right-8 bottom-8 z-[1000] max-md:right-4 max-md:bottom-4">
      <div
        className={`absolute right-0 bottom-[90px] w-[380px] rounded-[20px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] p-8 opacity-0 shadow-[0_25px_80px_rgba(0,0,0,0.4)] backdrop-blur-[35px] invisible translate-y-5 transition-all duration-300 max-md:-right-4 max-md:w-[calc(100vw-4rem)] ${bookingOpen ? 'active' : ''} [&.active]:visible [&.active]:translate-y-0 [&.active]:opacity-100`}
      >
        <h3 className="mb-6 text-[2rem] [font-family:var(--font-caveat)] text-shadow-md">
          Begin Your Journey
        </h3>

        <div className="mb-6">
          <label
            htmlFor="destination"
            className="mb-2 block text-xs uppercase tracking-[2px] text-sand-gold text-shadow-md"
          >
            Destination
          </label>
          <select
            id="destination"
            defaultValue=""
            className="w-full rounded-[10px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] px-4 py-4 text-[0.95rem] outline-none transition-colors focus:border-sand-gold"
          >
            <option value="" disabled className="bg-ocean-depth">
              Select your dream destination
            </option>
            <option className="bg-ocean-depth">
              Boracay - White Beach Paradise
            </option>
            <option className="bg-ocean-depth">
              El Nido - Island Paradise
            </option>
            <option className="bg-ocean-depth">Bohol - Mountain Treks</option>
            <option className="bg-ocean-depth">
              Banaue - Ancient Rice Terraces
            </option>
            <option className="bg-ocean-depth">
              Siargao - Island of Surfers
            </option>
          </select>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-xs uppercase tracking-[2px] text-sand-gold">
            Travel Dates
          </label>
          <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            <input
              id="travel-from"
              type="date"
              aria-label="Travel from date"
              value={fromDate}
              max={toDate || undefined}
              className="w-full rounded-[10px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] px-4 py-4 text-[0.95rem] outline-none transition-colors focus:border-sand-gold"
              onChange={(event) => {
                const nextFrom = event.currentTarget.value;
                setFromDate(nextFrom);
                if (toDate && nextFrom > toDate) {
                  setToDate(nextFrom);
                }
              }}
            />
            <input
              id="travel-to"
              type="date"
              aria-label="Travel to date"
              value={toDate}
              min={fromDate || undefined}
              className="w-full rounded-[10px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] px-4 py-4 text-[0.95rem] outline-none transition-colors focus:border-sand-gold"
              onChange={(event) => {
                const nextTo = event.currentTarget.value;
                setToDate(nextTo);
                if (fromDate && nextTo < fromDate) {
                  setFromDate(nextTo);
                }
              }}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-xs uppercase tracking-[2px] text-sand-gold">
            Travelers
          </label>
          <div className="flex items-center gap-4">
            <button
              className="h-10 w-10 cursor-pointer rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.1)] text-xl transition-colors hover:bg-sand-gold hover:text-ocean-depth"
              type="button"
              onClick={() => updateTravelers(-1)}
            >
              -
            </button>
            <span className="min-w-10 text-center text-2xl font-semibold">
              {travelers}
            </span>
            <button
              className="h-10 w-10 cursor-pointer rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.1)] text-xl transition-colors hover:bg-sand-gold hover:text-ocean-depth"
              type="button"
              onClick={() => updateTravelers(1)}
            >
              +
            </button>
          </div>
        </div>

        <button
          className="w-full cursor-pointer rounded-xl bg-linear-[135deg,#c5a065,#d4b876] px-4 py-5 text-[0.9rem] font-semibold uppercase tracking-[2px] text-ocean-depth transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(197,160,101,0.4)]"
          type="button"
        >
          Begin Journey
        </button>
      </div>

      <button
        className="flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-[20px] transition-all duration-300 hover:scale-110 hover:bg-sand-gold hover:text-ocean-depth"
        type="button"
        onClick={() => setBookingOpen((prev) => !prev)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-7 w-7"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </button>
    </div>
  );
}

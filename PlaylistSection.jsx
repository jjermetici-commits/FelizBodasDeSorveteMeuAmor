import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarHeart, Clock } from "lucide-react";
import { SITE } from "../data/content";

function diffFromStart(startDate) {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  const totalDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

  return { years, months, days, hours, minutes, seconds, totalDays };
}

const Card = ({ label, value, accent, testId }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
    className="glass-card rounded-3xl px-5 py-6 md:py-7 text-center"
    data-testid={testId}
  >
    <div
      className="text-4xl md:text-5xl font-heading font-700 tabular-nums"
      style={{ color: accent }}
    >
      {String(value).padStart(2, "0")}
    </div>
    <div className="mt-1 text-xs md:text-sm font-semibold uppercase tracking-wider text-purple-700/70">
      {label}
    </div>
  </motion.div>
);

export default function CountdownCounter() {
  const start = new Date(SITE.relationshipStart);
  const [diff, setDiff] = useState(() => diffFromStart(start));

  useEffect(() => {
    const id = setInterval(() => setDiff(diffFromStart(start)), 1000);
    return () => clearInterval(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      id="counter"
      className="section-anchor relative py-24 md:py-32 px-6"
      data-testid="counter-section"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/70 text-purple-700 text-xs font-semibold tracking-wider mb-4">
            <CalendarHeart size={14} />
            VIVENDO A VIDA
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-600 text-purple-900">
            Vivendo a vida do jeito certo
          </h2>
          <p className="mt-3 text-purple-800/70 max-w-xl mx-auto">
            Minha vida começou a ser vivida de verdade depois daquele "sim".
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Card label="anos" value={diff.years} accent="#9333EA" testId="counter-years" />
          <Card label="meses" value={diff.months} accent="#A855F7" testId="counter-months" />
          <Card label="dias" value={diff.days} accent="#C026D3" testId="counter-days" />
          <Card label="horas" value={diff.hours} accent="#DB2777" testId="counter-hours" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          <Card label="minutos" value={diff.minutes} accent="#EC4899" testId="counter-minutes" />
          <Card label="segundos" value={diff.seconds} accent="#F472B6" testId="counter-seconds" />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl px-5 py-6 md:py-7 text-center flex flex-col items-center justify-center"
            data-testid="counter-total-days"
          >
            <Clock size={18} className="text-amber-500 mb-1" />
            <div className="text-4xl md:text-5xl font-heading font-700 tabular-nums text-amber-600">
              {diff.totalDays.toLocaleString("pt-BR")}
            </div>
            <div className="mt-1 text-xs md:text-sm font-semibold uppercase tracking-wider text-purple-700/70">
              dias de nós
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

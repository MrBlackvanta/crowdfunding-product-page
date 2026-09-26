"use client";

import { useCampaign } from "@/components/campaign-provider";
import { project } from "@/data/campaign";
import { money, shortCount, shortMoney } from "@/lib";

export default function FundingStats() {
  const [{ raised, backers }] = useCampaign();
  const fundedPercent = Math.min((raised / project.goal) * 100, 100);

  const stats = [
    { ...shortMoney(raised), label: `of ${money.format(project.goal)} backed` },
    { ...shortCount(backers), label: "total backers" },
    { ...shortCount(project.daysLeft), label: "days left" },
  ];

  return (
    <div className="max-w-content inset-ring-hairline mx-auto w-full rounded-lg bg-white px-6 pt-8 pb-10 text-center inset-ring md:px-12 md:pt-12 md:pb-12.25 md:text-left">
      <ul className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-12">
        {stats.map(({ text, title, label }) => (
          <li key={label} className="v-stat-divider">
            <span title={title} className="block text-4xl font-bold">
              {text}
            </span>
            <span className="text-muted md:text-md mt-2.25 block text-sm">
              {label}
            </span>
          </li>
        ))}
      </ul>

      <div
        role="progressbar"
        aria-label="Funding progress"
        aria-valuenow={Math.round(fundedPercent)}
        className="bg-charcoal/5 mt-8 h-3 rounded-full md:mt-9.25"
      >
        <div
          style={{ width: `${fundedPercent}%` }}
          className="bg-cyan h-full rounded-full motion-safe:transition-[width]"
        />
      </div>
    </div>
  );
}

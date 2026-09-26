"use client";

import { useCampaign } from "@/components/campaign-provider";
import { money } from "@/lib";
import PledgeAmount from "./pledge-amount";

type PledgeOptionProps = {
  id: string;
  title: string;
  minimumPledge: number;
  description: string;
  stock?: number;
};

export default function PledgeOption({
  id,
  title,
  minimumPledge,
  description,
  stock,
}: PledgeOptionProps) {
  const [{ selectedRewardId }, dispatch] = useCampaign();
  const inputId = `pledge-option-${id}`;
  const selected = selectedRewardId === id;
  const soldOut = stock === 0;

  return (
    <li
      data-selected={selected || undefined}
      data-sold-out={soldOut || undefined}
      className="group/option inset-ring-line data-selected:inset-ring-cyan data-sold-out:inset-ring-hairline relative rounded-lg inset-ring data-selected:inset-ring-2"
    >
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 px-6 pt-6 pb-8 group-data-selected/option:pb-6 md:grid-cols-[auto_1fr_auto] md:gap-x-6 md:px-7 md:py-8 md:group-data-selected/option:pb-8">
        <input
          id={inputId}
          type="radio"
          name="pledge-option"
          checked={selected}
          disabled={soldOut}
          onChange={() => dispatch({ type: "rewardSelected", rewardId: id })}
          className="border-line checked:bg-cyan disabled:border-hairline col-start-1 row-start-1 size-6 shrink-0 appearance-none rounded-full border bg-white checked:inset-ring-5 checked:inset-ring-white"
        />

        <div className="col-start-2 row-start-1 flex min-h-10.5 flex-col justify-center gap-2 md:min-h-0 md:flex-row md:items-center md:justify-start md:gap-4">
          <label
            htmlFor={inputId}
            className="not-group-data-sold-out/option:hover:text-cyan cursor-pointer text-sm font-bold group-data-sold-out/option:cursor-default group-data-sold-out/option:opacity-60 before:absolute before:inset-0 motion-safe:transition-colors md:text-base"
          >
            {title}
          </label>

          {stock !== undefined && (
            <p className="text-cyan text-sm font-medium md:text-base">
              Pledge {money.format(minimumPledge)} or more
            </p>
          )}
        </div>

        {stock !== undefined && (
          <p className="col-span-2 col-start-1 row-start-3 mt-6 flex items-center gap-2 md:col-span-1 md:col-start-3 md:row-start-1 md:mt-0">
            <span className="text-lg font-bold group-data-sold-out/option:opacity-60">
              {stock}
            </span>
            <span className="text-muted text-md">left</span>
          </p>
        )}

        <p className="text-muted md:text-md/7 col-span-2 col-start-1 row-start-2 mt-6 text-sm/6 md:col-start-2 md:mt-3.25">
          {description}
        </p>
      </div>

      {selected && (
        <PledgeAmount
          minimum={minimumPledge}
          onConfirm={(amount) => dispatch({ type: "pledgeConfirmed", amount })}
        />
      )}
    </li>
  );
}

"use client";

import { useCampaign } from "@/components/campaign-provider";
import { Button } from "@/components/ui";
import { rewards } from "@/data/campaign";
import { money } from "@/lib";

export default function RewardList() {
  const [{ stockById }, dispatch] = useCampaign();

  return (
    <ul className="mt-8.75 space-y-6 md:mt-10">
      {rewards.map(({ id, title, minimumPledge, description }) => {
        const stock = stockById[id];
        const soldOut = stock === 0;

        return (
          <li
            key={id}
            data-sold-out={soldOut || undefined}
            className="group/reward inset-ring-line data-sold-out:inset-ring-hairline rounded-lg p-6 inset-ring md:px-8 md:pt-9.5 md:pb-8"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-sm font-bold group-data-sold-out/reward:opacity-60 md:text-lg">
                {title}
              </h3>
              <p className="text-cyan md:text-md text-sm font-medium">
                Pledge {money.format(minimumPledge)} or more
              </p>
            </div>

            <p className="text-muted mt-6 text-sm/6 md:text-base/7.5">
              {description}
            </p>

            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="flex items-center gap-2">
                <span className="text-4xl font-bold group-data-sold-out/reward:opacity-60">
                  {stock}
                </span>
                <span className="text-muted text-md">left</span>
              </p>

              <Button
                disabled={soldOut}
                onClick={() => dispatch({ type: "pledgeOpened", rewardId: id })}
                className="h-12 w-fit min-w-39.25 px-8 text-sm"
              >
                {soldOut ? "Out of stock" : "Select Reward"}
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

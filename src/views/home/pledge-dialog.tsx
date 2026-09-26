"use client";

import { useCampaign } from "@/components/campaign-provider";
import { Dialog } from "@/components/ui";
import { noReward, project, rewards } from "@/data/campaign";
import PledgeOption from "./pledge-option";

export default function PledgeDialog() {
  const [{ stage, stockById }, dispatch] = useCampaign();

  return (
    <Dialog
      open={stage === "pledging"}
      labelledBy="pledge-title"
      onClose={() => dispatch({ type: "pledgeDismissed" })}
    >
      <h2 id="pledge-title" className="text-lg font-bold md:text-2xl">
        Back this project
      </h2>

      <p className="text-muted mt-6 text-sm/6 md:mt-4 md:text-base/7.5">
        Want to support us in bringing {project.name} out in the world?
      </p>

      <fieldset className="mt-6 min-w-0 md:mt-8">
        <legend className="sr-only">Choose a reward</legend>

        <ul className="space-y-6">
          <PledgeOption {...noReward} />
          {rewards.map(({ id, title, minimumPledge, description }) => (
            <PledgeOption
              key={id}
              id={id}
              title={title}
              minimumPledge={minimumPledge}
              description={description}
              stock={stockById[id]}
            />
          ))}
        </ul>
      </fieldset>
    </Dialog>
  );
}

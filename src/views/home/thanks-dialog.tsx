"use client";

import { useCampaign } from "@/components/campaign-provider";
import { CheckIcon } from "@/components/icons";
import { Button, Dialog } from "@/components/ui";
import { project } from "@/data/campaign";

export default function ThanksDialog() {
  const [{ stage }, dispatch] = useCampaign();
  const dismiss = () => dispatch({ type: "thanksDismissed" });

  return (
    <Dialog
      open={stage === "thanking"}
      labelledBy="thanks-title"
      onClose={dismiss}
      className="max-w-135 px-6 pt-8 pb-10 text-center md:p-12"
    >
      <div className="bg-cyan mx-auto flex size-16 items-center justify-center rounded-full text-white md:size-22.5">
        <CheckIcon className="w-7.25 md:w-9.5" />
      </div>

      <h2
        id="thanks-title"
        className="mt-6 text-lg font-bold md:mt-12 md:text-2xl"
      >
        Thanks for your support!
      </h2>

      <p className="text-muted mt-6 text-sm/6 md:mt-4 md:text-base/7.5">
        Your pledge brings us one step closer to sharing {project.name}{" "}
        worldwide. You will get an email once our campaign is completed.
      </p>

      <Button onClick={dismiss} className="mt-8 h-12 min-w-26.75 px-8 text-sm">
        Got it!
      </Button>
    </Dialog>
  );
}

"use client";

import { useCampaign } from "@/components/campaign-provider";
import { Button } from "@/components/ui";

export default function BackProjectButton() {
  const [, dispatch] = useCampaign();

  return (
    <Button
      onClick={() => dispatch({ type: "pledgeOpened", rewardId: null })}
      className="h-14 grow px-4 md:grow-0 md:px-10"
    >
      Back this project
    </Button>
  );
}

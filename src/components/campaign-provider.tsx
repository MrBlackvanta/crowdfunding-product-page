"use client";

import { project, rewards } from "@/data/campaign";
import {
  createContext,
  use,
  useReducer,
  type ActionDispatch,
  type ReactNode,
} from "react";

type PledgeStage = "idle" | "pledging" | "thanking";

type CampaignState = {
  raised: number;
  backers: number;
  bookmarked: boolean;
  stage: PledgeStage;
  selectedRewardId: string | null;
  stockById: Record<string, number>;
};

type CampaignAction =
  | { type: "bookmarkToggled" }
  | { type: "pledgeOpened"; rewardId: string | null }
  | { type: "rewardSelected"; rewardId: string }
  | { type: "pledgeDismissed" }
  | { type: "pledgeConfirmed"; amount: number }
  | { type: "thanksDismissed" };

const initialState: CampaignState = {
  raised: project.raised,
  backers: project.backers,
  bookmarked: false,
  stage: "idle",
  selectedRewardId: null,
  stockById: Object.fromEntries(rewards.map(({ id, stock }) => [id, stock])),
};

function reduceCampaign(
  state: CampaignState,
  action: CampaignAction,
): CampaignState {
  switch (action.type) {
    case "bookmarkToggled":
      return { ...state, bookmarked: !state.bookmarked };
    case "pledgeOpened":
      return { ...state, stage: "pledging", selectedRewardId: action.rewardId };
    case "rewardSelected":
      return { ...state, selectedRewardId: action.rewardId };
    case "pledgeDismissed":
    case "thanksDismissed":
      return { ...state, stage: "idle" };
    case "pledgeConfirmed": {
      const rewardId = state.selectedRewardId;
      const claimsStock = rewardId !== null && rewardId in state.stockById;
      return {
        ...state,
        stage: "thanking",
        raised: state.raised + action.amount,
        backers: state.backers + 1,
        stockById: claimsStock
          ? { ...state.stockById, [rewardId]: state.stockById[rewardId] - 1 }
          : state.stockById,
      };
    }
  }
}

type CampaignStore = [CampaignState, ActionDispatch<[action: CampaignAction]>];

const CampaignContext = createContext<CampaignStore | null>(null);

export function useCampaign() {
  const store = use(CampaignContext);
  if (!store) {
    throw new Error("useCampaign must be used inside CampaignProvider");
  }
  return store;
}

export default function CampaignProvider({
  children,
}: {
  children: ReactNode;
}) {
  const store = useReducer(reduceCampaign, initialState);

  return <CampaignContext value={store}>{children}</CampaignContext>;
}

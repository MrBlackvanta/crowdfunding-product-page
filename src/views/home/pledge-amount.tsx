"use client";

import { Button } from "@/components/ui";
import { project } from "@/data/campaign";
import { useState } from "react";

type PledgeAmountProps = {
  minimum: number;
  onConfirm: (amount: number) => void;
};

const capPledge = (value: string) =>
  Number(value) > project.maxPledge ? String(project.maxPledge) : value;

export default function PledgeAmount({
  minimum,
  onConfirm,
}: PledgeAmountProps) {
  const [amount, setAmount] = useState(String(minimum));

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onConfirm(Number(amount));
      }}
      className="border-line relative border-t px-6 py-6 md:flex md:items-center md:justify-between md:px-7"
    >
      <label
        htmlFor="pledge-amount"
        className="text-muted md:text-md/7 block text-center text-sm/7 md:text-left"
      >
        Enter your pledge
      </label>

      <div className="mt-4 flex flex-wrap items-center gap-4 md:mt-0 md:flex-nowrap">
        <div className="inset-ring-line has-focus-visible:v-focus-ring flex h-12 w-25 shrink-0 items-center gap-2 rounded-full pl-6 inset-ring">
          <span className="text-muted text-sm font-bold">$</span>
          <input
            id="pledge-amount"
            type="number"
            required
            min={minimum}
            max={project.maxPledge}
            value={amount}
            onChange={(event) => setAmount(capPledge(event.target.value))}
            className="v-amount-input w-full min-w-0 text-sm font-bold focus-visible:outline-none"
          />
        </div>

        <Button type="submit" className="h-12 grow px-6 text-sm md:grow-0">
          Continue
        </Button>
      </div>
    </form>
  );
}

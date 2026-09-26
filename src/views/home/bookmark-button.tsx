"use client";

import { useCampaign } from "@/components/campaign-provider";
import { BookmarkIcon } from "@/components/icons";

export default function BookmarkButton() {
  const [{ bookmarked }, dispatch] = useCampaign();

  return (
    <button
      type="button"
      aria-pressed={bookmarked}
      onClick={() => dispatch({ type: "bookmarkToggled" })}
      className={`group flex w-fit shrink-0 items-center gap-4 rounded-full font-bold motion-safe:transition-colors md:pr-6 ${
        bookmarked ? "text-cyan md:bg-cyan/5" : "text-muted md:bg-charcoal/5"
      }`}
    >
      <span
        className={`flex size-14 items-center justify-center rounded-full motion-safe:transition-colors ${
          bookmarked
            ? "bg-cyan group-hover:bg-cyan-strong"
            : "bg-charcoal group-hover:bg-muted"
        }`}
      >
        <BookmarkIcon
          className={`h-4.5 w-2.5 motion-safe:transition-colors ${
            bookmarked ? "text-white" : "text-flag group-hover:text-line"
          }`}
        />
      </span>
      <span className="sr-only md:not-sr-only">
        {bookmarked ? "Bookmarked" : "Bookmark"}
      </span>
    </button>
  );
}

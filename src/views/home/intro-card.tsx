import { MastercraftLogo } from "@/components/icons";
import { project } from "@/data/campaign";
import BackProjectButton from "./back-project-button";
import BookmarkButton from "./bookmark-button";

export default function IntroCard() {
  return (
    <div className="max-w-content inset-ring-hairline relative mx-auto w-full rounded-lg bg-white px-6 pt-13 pb-10 text-center inset-ring md:px-12 md:pt-14 md:pb-12">
      <MastercraftLogo className="absolute -top-7 left-1/2 size-14 -translate-x-1/2" />

      <h1 className="text-xl font-bold text-balance md:text-3xl">
        {project.name}
      </h1>

      <p className="text-muted mt-4 text-sm/6 md:mt-3.75 md:text-base">
        {project.tagline}
      </p>

      <div className="mt-6 flex items-center justify-between gap-2.25 md:mt-10">
        <BackProjectButton />
        <BookmarkButton />
      </div>
    </div>
  );
}

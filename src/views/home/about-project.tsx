import { project } from "@/data/campaign";
import RewardList from "./reward-list";

export default function AboutProject() {
  return (
    <section
      aria-labelledby="about-project"
      className="max-w-content inset-ring-hairline mx-auto w-full rounded-lg bg-white px-6 py-10 inset-ring md:p-12"
    >
      <h2 id="about-project" className="text-lg font-bold md:text-xl">
        About this project
      </h2>

      <div className="text-muted mt-6 space-y-6 text-sm/6 md:mt-8.5 md:space-y-7.5 md:text-base/7.5">
        {project.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <RewardList />
    </section>
  );
}

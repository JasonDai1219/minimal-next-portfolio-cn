import Link from "next/link";
import { contributionsInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: contributionsInterface[];
}

export default function ContributionCard({ contributions }: ContributionCardProps) {
  if (!contributions?.length) return null;

  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contributions.map((c, idx) => {
        const url = c.link ?? c.href;

        const CardInner = (
          <div className="w-full min-w-0 h-full rounded-lg border bg-background p-4 hover:bg-muted/40 transition-colors">
            <h3 className="font-heading text-base sm:text-lg truncate">{c.title}</h3>

            {c.description ? (
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-3 break-words">
                {c.description}
              </p>
            ) : null}

            {c.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {c.tags.map((t, i) => (
                  <span
                    key={`${idx}-${i}`}
                    className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        );

        return url ? (
          <Link
            key={idx}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="w-full min-w-0 h-full"
          >
            {CardInner}
          </Link>
        ) : (
          <div key={idx} className="w-full min-w-0 h-full">
            {CardInner}
          </div>
        );
      })}
    </div>
  );
}

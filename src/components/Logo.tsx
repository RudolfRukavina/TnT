import Link from "next/link";

export default function Logo({ size = "large" }: { size?: "small" | "large" }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span
        className={`font-bold ${
          size === "small" ? "text-sm" : "text-xl"
        } italic bg-gradient-to-br from-yellowPrimary/60 via-yellowPrimary/80 to-yellowPrimary text-transparent bg-clip-text tracking-tighter`}
      >
        TnT
      </span>
      <span
        className={` ${size === "small" ? "text-xs" : "text-sm"} opacity-70   `}
      >
        /Poreč
      </span>
    </Link>
  );
}

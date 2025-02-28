import Link from "next/link";

export default function Logo({ size = "large" }: { size?: "small" | "large" }) {
  return (
    <Link href="/" className="flex items-center gap-1">
      <span
        className={`font-bold ${
          size === "small" ? "text-sm" : "text-xl"
        } italic text-yellowPrimary tracking-tighter`}
      >
        TnT
      </span>
      <span className={` ${size === "small" ? "text-xs" : "text-sm"} `}>
        /Poreč
      </span>
    </Link>
  );
}

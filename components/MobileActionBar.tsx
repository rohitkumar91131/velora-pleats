import Link from "next/link";
import site from "@/lib/lib.json";

export default function MobileActionBar() {
  return (
    <nav className="mobile-sticky" aria-label={site.mobileActionsLabel}>
      {site.mobileActions.map((action) => (
        <Link className={`mobile-sticky-${action.style}`} href={action.href} key={action.style}>
          {action.label}
        </Link>
      ))}
    </nav>
  );
}

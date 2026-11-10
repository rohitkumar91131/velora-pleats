import Link from "next/link";
import site from "@/lib/lib.json";

function ActionIcon({ type }: { type: string }) {
  if (type === "whatsapp") {
    return (
      <svg className="mobile-sticky-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.437-9.884 9.893-9.884 2.643.001 5.127 1.03 6.995 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.438 9.884-9.897 9.884m8.413-18.297A11.815 11.815 0 0 0 12.002 0C5.385 0 .002 5.383 0 12a11.95 11.95 0 0 0 1.599 5.995L0 24l6.137-1.61A11.95 11.95 0 0 0 12 24h.005c6.617 0 12-5.383 12.003-12a11.944 11.944 0 0 0-3.544-8.512Z" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg className="mobile-sticky-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M7.2 3.8 9.7 7l-1.6 2a14 14 0 0 0 6.9 6.9l2-1.6 3.2 2.5-.7 3.1c-.2.8-.9 1.3-1.7 1.3A16.8 16.8 0 0 1 2.8 5.2c0-.8.5-1.5 1.3-1.7l3.1-.7Z" />
      </svg>
    );
  }

  return null;
}

export default function MobileActionBar() {
  return (
    <nav className="mobile-sticky" aria-label={site.mobileActionsLabel}>
      {site.mobileActions.map((action) => (
        <Link className={`mobile-sticky-${action.style}`} href={action.href} key={action.style}>
          {action.icon && <ActionIcon type={action.icon} />}
          {action.label}
        </Link>
      ))}
    </nav>
  );
}

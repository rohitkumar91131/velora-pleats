import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import CallToAction from "@/components/CallToAction";
import SiteFooter from "@/components/SiteFooter";
import MobileActionBar from "@/components/MobileActionBar";
import site from "@/lib/lib.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.site.baseUrl),
  title: site.site.defaultTitle,
  description: site.site.defaultDescription,
  icons: { icon: site.site.favicon },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const megaMenuProducts = site.productMegaMenu.products.flatMap((menuProduct) => {
    const product = site.products.find((item) => item.name === menuProduct.slug);
    return product ? [{
      ...menuProduct,
      title: product.title,
      description: product.cardDescription,
      href: product.href,
      alt: product.image.alt,
    }] : [];
  });

  return (
    <html lang="en">
      <body>
        <SiteHeader
          logo={site.site.logo}
          logoAlt={site.site.logoAlt}
          logoHomeLabel={site.site.logoHomeLabel}
          mainNavigationLabel={site.accessibility.mainNavigation}
          mobileNavigationLabel={site.accessibility.mobileNavigation}
          openNavigationLabel={site.accessibility.openNavigation}
          closeNavigationLabel={site.accessibility.closeNavigation}
          navigation={site.navigation}
          productMegaMenu={{ ...site.productMegaMenu, products: megaMenuProducts }}
          actions={site.actions}
        />
        {children}
        <CallToAction data={site.homeCta} />
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}

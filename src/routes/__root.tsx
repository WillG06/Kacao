import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { FilmGrain } from "@/components/FilmGrain";
import { CookieBanner } from "@/components/CookieBanner";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-cream">
      <div className="text-center max-w-md">
        <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">404</div>
        <h1 className="mt-4 font-display text-5xl">Lost in the kitchen</h1>
        <p className="mt-3 text-sm text-muted-foreground">This page is not on today's menu.</p>
        <Link to="/" className="inline-block mt-8 text-[11px] tracking-luxe uppercase border-b border-ink pb-1">Return home</Link>
      </div>
    </div>
  );
}

function ErrorFallback({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-cream">
      <div className="text-center max-w-md">
        <h1 className="font-display text-4xl">A small mishap</h1>
        <p className="mt-3 text-sm text-muted-foreground">Please refresh the page.</p>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KACAO — Luxury Bakery, Birmingham" },
      { name: "description", content: "KACAO is a five-star artisan bakery in Birmingham's Bullring food court. Hand-crafted patisserie, viennoiserie and specialty coffee." },
      { name: "author", content: "KACAO Bakery" },
      { name: "theme-color", content: "#F5F0E8" },
      { name: "keywords", content: "KACAO, Kacao Bakery, Birmingham bakery, luxury bakery Birmingham, artisan patisserie, Bullring food court, croissants Birmingham, specialty coffee" },
      { property: "og:title", content: "KACAO — Luxury Bakery, Birmingham" },
      { property: "og:description", content: "Hand-crafted patisserie and specialty coffee in Birmingham's Bullring." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:site_name", content: "KACAO" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "KACAO — Luxury Bakery, Birmingham" },
      { name: "twitter:description", content: "Hand-crafted patisserie and specialty coffee in Birmingham's Bullring." },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "canonical", href: "https://kacao.co.uk/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "preconnect", href: "https://www.google.com" },
      { rel: "preconnect", href: "https://www.googletagmanager.com" },
      { rel: "preconnect", href: "https://api.resend.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "KACAO",
          image: "https://kacao.co.uk/og-image.jpg",
          url: "https://kacao.co.uk/",
          telephone: "+44 121 000 0000",
          priceRange: "££",
          servesCuisine: ["Bakery", "Patisserie", "Coffee"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bullring Food Court",
            addressLocality: "Birmingham",
            postalCode: "B5 4BU",
            addressCountry: "GB",
          },
          geo: { "@type": "GeoCoordinates", latitude: 52.4775, longitude: -1.8945 },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "120" },
          openingHours: ["Mo-Fr 08:00-20:00", "Sa-Su 09:00-21:00"],
        }),
      },
      {
        children: `(function(){try{var id=${JSON.stringify(import.meta.env.VITE_GA_ID || "G-XXXXXXXXXX")};var host=location.hostname;if(!id||id==="G-XXXXXXXXXX"||host==="localhost"||host==="127.0.0.1")return;function load(){var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+id;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag("js",new Date());gtag("config",id);}if(localStorage.getItem("kacao-consent")==="accepted"){load();}else{window.addEventListener("kacao:consent",load,{once:true});}}catch(e){}})();`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorFallback,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <CustomCursor />
      <FilmGrain />
      <CookieBanner />
    </QueryClientProvider>
  );
}

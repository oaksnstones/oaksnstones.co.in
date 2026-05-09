import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'
import { WhatsAppCTA } from '@/components/whatsapp-cta'
import { FAQChatbot } from '@/components/faq-chatbot'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Oaks N Stones | Premium Interior Designers in Wakad, Pune',
    template: '%s | Oaks N Stones Interior Design'
  },
  description: 'Oaks N Stones is a leading luxury interior design firm in Wakad, Pune. We specialize in residential & commercial interior design, renovation, and turnkey projects. Transform your space with our expert designers.',
  keywords: [
    'interior designer in pune',
    'interior designer wakad',
    'luxury interior design pune',
    'best interior designers pune',
    'home interior design pune',
    'office interior design pune',
    'residential interior design',
    'commercial interior design',
    'interior design company pune',
    'modular kitchen pune',
    'living room design pune',
    'bedroom interior design',
    'interior decorator pune',
    'home renovation pune',
    'interior design services pune',
    'affordable interior design pune',
    'premium interior design india'
  ],
  authors: [{ name: 'Oaks N Stones' }],
  creator: 'Oaks N Stones Interior Design',
  publisher: 'Oaks N Stones',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://oaksnstones.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://oaksnstones.com',
    title: 'Oaks N Stones | Premium Interior Designers in Wakad, Pune',
    description: 'Transform your space with Pune\'s leading luxury interior design firm. Residential, commercial & turnkey projects.',
    siteName: 'Oaks N Stones Interior Design',
    images: [
      {
        url: '/images/hero-living-room.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury interior design by Oaks N Stones in Pune',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f3ef' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1816' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <head>
        <link rel="canonical" href="https://oaksnstones.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Oaks N Stones Interior Design',
              image: 'https://oaksnstones.com/images/hero-living-room.jpg',
              '@id': 'https://oaksnstones.com',
              url: 'https://oaksnstones.com',
              telephone: '+919503931331',
              email: 'oaksnstones@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Office No. 404, MI Commercia, Pink City Road',
                addressLocality: 'Wakad',
                addressRegion: 'Pune, Maharashtra',
                postalCode: '411057',
                addressCountry: 'IN'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 18.5978,
                longitude: 73.7640
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '10:00',
                closes: '19:00'
              },
              sameAs: [
                'https://instagram.com/oaksnstones',
                'https://facebook.com/oaksnstones',
                'https://linkedin.com/company/oaksnstones',
                'https://youtube.com/@oaksnstones'
              ],
              priceRange: '$$',
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 18.5204,
                  longitude: 73.8567
                },
                geoRadius: '50000'
              },
              description: 'Premium interior design firm in Wakad, Pune specializing in luxury residential and commercial interiors.'
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
        <FAQChatbot />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

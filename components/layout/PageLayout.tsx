import { Toaster } from '@/components/ui/sonner'
import PageNavbar from './PageNavbar'
import PageTitle from './PageTitle'

interface PageLayoutProps {
  children: React.ReactNode
  backLink?: {
    href: string
    textKey: string
  }
  forwardLink?: {
    href: string
    textKey: string
  }
}

export default function PageLayout({ children, backLink, forwardLink }: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="relative mx-auto max-w-full">
        <PageNavbar backLink={backLink} forwardLink={forwardLink} />
        <PageTitle />

        {children}

        <Toaster />
      </div>
    </main>
  )
}

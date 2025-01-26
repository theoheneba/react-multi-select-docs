import { DocSidebar } from "./doc-sidebar"

interface DocLayoutProps {
  children: React.ReactNode
}

export function DocLayout({ children }: DocLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 border-r border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                EnhancedMultiSelect
              </span>
            </div>
            <DocSidebar />
          </div>
        </div>
      </div>
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="prose prose-invert max-w-none">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


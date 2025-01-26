import Link from "next/link"
import { ArrowRightIcon, CodeBracketIcon, CloudIcon, CubeTransparentIcon } from "@heroicons/react/24/outline"

import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Enhanced Multi-Select Component</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A powerful, customizable, and accessible multi-select component for React applications. Built with
            performance and user experience in mind.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                href="/docs"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
              >
                Get started
                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                href={siteConfig.links.github}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-background hover:bg-secondary md:py-4 md:text-lg md:px-10"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-foreground">Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to build a great multi-select experience.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
            {[
              {
                name: "Virtual Scrolling",
                description: "Efficiently handle large datasets with virtualized rendering.",
                icon: CubeTransparentIcon,
              },
              {
                name: "Async Loading",
                description: "Load options asynchronously with built-in debouncing.",
                icon: CloudIcon,
              },
              {
                name: "Custom Rendering",
                description: "Fully customizable rendering for options and selected values.",
                icon: CodeBracketIcon,
              },
            ].map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <feature.icon className="absolute h-6 w-6 text-primary" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-foreground">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


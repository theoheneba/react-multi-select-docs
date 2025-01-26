import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Basic Usage", href: "/docs/basic-usage" },
      { title: "Async Loading", href: "/examples/async" },
      { title: "Virtual Scrolling", href: "/examples/virtual" },
      { title: "Custom Rendering", href: "/docs/custom-rendering" },
    ],
  },
]

export function DocSidebar() {
  const pathname = usePathname()

  return (
    <nav className="space-y-1 px-2">
      {sidebarItems.map((section) => (
        <div key={section.title} className="pb-8">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{section.title}</h2>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} passHref>
                  <a
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      pathname === item.href
                        ? "bg-secondary text-secondary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                    }`}
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}


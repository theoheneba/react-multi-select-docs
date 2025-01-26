import React, { useState, useRef, useEffect } from "react"

interface Option {
  value: string
  label: string
}

interface OptionGroup {
  label: string
  options: Option[]
}

interface EnhancedMultiSelectProps {
  options: OptionGroup[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
}

export function EnhancedMultiSelect({ options, value, onChange, placeholder }: EnhancedMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleToggle = () => setIsOpen(!isOpen)

  const handleSelect = (optionValue: string) => {
    const newValue = value.includes(optionValue) ? value.filter((v) => v !== optionValue) : [...value, optionValue]
    onChange(newValue)
  }

  const filteredOptions = options
    .map((group) => ({
      ...group,
      options: group.options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase())),
    }))
    .filter((group) => group.options.length > 0)

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={handleToggle}
        className={`
          w-full px-4 py-2.5 text-left rounded-md border transition-all
          bg-card text-card-foreground
          hover:bg-accent hover:text-accent-foreground
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background
          ${isOpen ? "border-ring" : "border-input"}
        `}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {value.length > 0 ? (
              value.map((v) => (
                <span
                  key={v}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary"
                >
                  {options.flatMap((g) => g.options).find((o) => o.value === v)?.label}
                </span>
              ))
            ) : (
              <span className="text-sm text-muted-foreground">{placeholder || "Select options..."}</span>
            )}
          </div>
          <svg
            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div
          className="absolute z-50 w-full mt-2 rounded-md border border-border bg-popover shadow-lg"
          style={{ maxHeight: "400px", overflowY: "auto" }}
        >
          <div className="sticky top-0 z-[51] p-2 border-b border-border bg-popover/95 backdrop-blur supports-[backdrop-filter]:bg-popover/75">
            <input
              type="text"
              className="w-full px-3 py-1.5 text-sm rounded-md bg-background text-foreground border border-input
                placeholder:text-muted-foreground
                focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="p-1">
            {filteredOptions.map((group) => (
              <div key={group.label} className="mb-1">
                <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground">{group.label}</div>
                {group.options.map((option) => (
                  <div key={option.value} className="px-2">
                    <button
                      type="button"
                      onClick={() => handleSelect(option.value)}
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded-sm text-sm
                        text-popover-foreground hover:bg-accent hover:text-accent-foreground
                        focus:outline-none focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-primary">
                        {value.includes(option.value) && (
                          <svg
                            className="h-3 w-3 text-primary"
                            fill="none"
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                      <span className="truncate">{option.label}</span>
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


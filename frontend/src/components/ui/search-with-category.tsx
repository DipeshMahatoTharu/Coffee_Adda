"use client"

import React, { useId } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SearchCategoryOption {
  id: string
  label: string
}

export interface SearchWithCategoryProps {
  categories?: SearchCategoryOption[]
  selectedCategory?: string
  onCategoryChange?: (value: string) => void
  searchQuery?: string
  onSearchChange?: (value: string) => void
  onSearchSubmit?: () => void
  placeholder?: string
  className?: string
  label?: string
}

export default function SearchWithCategory({
  categories = [
    { id: "all", label: "All" },
    { id: "products", label: "Products" },
    { id: "blogs", label: "Blogs" },
    { id: "users", label: "Users" },
    { id: "docs", label: "Docs" },
  ],
  selectedCategory = "all",
  onCategoryChange,
  searchQuery = "",
  onSearchChange,
  onSearchSubmit,
  placeholder = "Search coffee, momo, laphing, breakfast...",
  className,
  label = "Search with category",
}: SearchWithCategoryProps) {
  const id = useId()

  const handleCategoryChange = (val: string) => {
    if (onCategoryChange) {
      onCategoryChange(val)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(e.target.value)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearchSubmit) {
      onSearchSubmit()
    }
  }

  // Find currently selected label
  const activeCategoryObj = categories.find((c) => c.id === selectedCategory)
  const currentCategoryLabel = activeCategoryObj ? activeCategoryObj.label : "Category"

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-2 mx-auto max-w-xl w-full", className)}>
      {label && (
        <Label htmlFor={id} className="text-xs font-bold text-brand-forest uppercase tracking-wider block text-left">
          {label}
        </Label>
      )}

      <div className="flex rounded-2xl shadow-sm bg-white border border-neutral-300/80 focus-within:border-brand-forest focus-within:ring-2 focus-within:ring-brand-forest/20 overflow-hidden transition-all duration-200">
        {/* Category selector */}
        <Select value={selectedCategory} onValueChange={handleCategoryChange}>
          <SelectTrigger
            aria-label="Filter by menu category"
            className="h-12 w-[140px] sm:w-[170px] rounded-none border-0 border-r border-neutral-200 bg-neutral-50/80 text-xs sm:text-sm font-semibold text-brand-forest focus:ring-0 shadow-none hover:bg-neutral-100 transition-colors shrink-0"
          >
            <SelectValue placeholder="Category">
              <span className="truncate">{currentCategoryLabel}</span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white border-neutral-200 shadow-xl max-h-72 rounded-xl">
            {categories.map((cat) => (
              <SelectItem
                key={cat.id}
                value={cat.id}
                className="text-xs sm:text-sm font-medium hover:bg-brand-sage/40 cursor-pointer"
              >
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Search input */}
        <div className="relative flex-1 flex items-center">
          <Input
            id={id}
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="h-12 border-0 rounded-none text-xs sm:text-sm focus-visible:ring-0 shadow-none px-3.5 text-neutral-800 placeholder:text-neutral-400 bg-transparent"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange && onSearchChange("")}
              className="mr-2 text-neutral-400 hover:text-neutral-600 p-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search button */}
        <Button
          type="submit"
          className="h-12 px-4 sm:px-6 rounded-none bg-brand-forest hover:bg-brand-dark text-white font-bold transition-colors shrink-0 border-0 cursor-pointer"
          variant="secondary"
        >
          <Search className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold" />
          <span className="hidden sm:inline ml-2 text-xs font-bold uppercase tracking-wider">Search</span>
        </Button>
      </div>
    </form>
  )
}

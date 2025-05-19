import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

interface FilterSelectorProps {
  onFilterChange: (filter: string) => void;
  selectedFilter: string | null;
}

// Define the filters with their IDs, names, and descriptions

const filters = [
  {
    id: "protanopia",
    name: "Protanopia",
    description: "Difficulty in perceiving the colour red",
  },
  {
    id: "deuteranopia",
    name: "Deuteranopia",
    description: "Difficulty in perceiving the colour green",
  },
  {
    id: "tritanopia",
    name: "Tritanopia",
    description: "Difficulty in perceiving blue colour",
  },
  {
    id: "achromatopsia",
    name: "Achromatopsia",
    description: "Black and white vision",
  },
  {
    id: "blur",
    name: "Blurred vision",
    description: "Simulation of low visual acuity",
  },
  { id: "normal", name: "Normal Vision", description: "No alterations" },
];

// The FilterSelector component allows users to select a filter for visual impairment simulation
const FilterSelector: React.FC<FilterSelectorProps> = ({
  onFilterChange,
  selectedFilter,
}) => {
  return (
    <div className="w-full space-y-4">
      <Select
        onValueChange={onFilterChange}
        value={selectedFilter || undefined}
      >
        {/*  The Select component provides a dropdown for selecting a filter */}
        <SelectTrigger className="w-full h-12">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <SelectValue placeholder="Choose type of visual impairment" />
          </div>
        </SelectTrigger>
        {/*  The SelectContent component contains the list of filters */}
        <SelectContent>
          {filters.map((filter) => (
            <SelectItem key={filter.id} value={filter.id}>
              <div className="flex flex-col">
                <span>{filter.name}</span>
                <span className="text-xs text-slate-500">
                  {filter.description}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/*  The Card component displays quick filters */}
      <Card className="border border-slate-200">
        <CardContent className="p-4">
          <div className="text-sm text-slate-600 mb-3 font-medium">
            Quick filters
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {/*  The Badge component represents quick filters */}
            {filters.map(
              (filter) =>
                filter.id !== "normal" && (
                  <Badge
                    key={filter.id}
                    variant={
                      selectedFilter === filter.id ? "default" : "outline"
                    }
                    className={`cursor-pointer transition-all hover:scale-105 px-3 py-1.5 ${
                      selectedFilter === filter.id
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "hover:bg-slate-100"
                    }`}
                    onClick={() => onFilterChange(filter.id)}
                  >
                    {filter.name}
                  </Badge>
                )
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSelector;

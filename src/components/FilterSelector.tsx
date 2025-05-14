
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSelectorProps {
  onFilterChange: (filter: string) => void;
  selectedFilter: string | null;
}

const filters = [
  { id: "protanopia", name: "Protanopía (Sin color rojo)" },
  { id: "deuteranopia", name: "Deuteranopía (Sin color verde)" },
  { id: "tritanopia", name: "Tritanopía (Sin color azul)" },
  { id: "achromatopsia", name: "Acromatopsia (Blanco y negro)" },
  { id: "blur", name: "Visión borrosa" },
  { id: "normal", name: "Visión normal" },
];

const FilterSelector: React.FC<FilterSelectorProps> = ({ onFilterChange, selectedFilter }) => {
  return (
    <div className="w-full">
      <Select onValueChange={onFilterChange} value={selectedFilter || undefined}>
        <SelectTrigger className="w-full h-16 text-lg">
          <SelectValue placeholder="Elegir filtro" />
        </SelectTrigger>
        <SelectContent>
          {filters.map((filter) => (
            <SelectItem key={filter.id} value={filter.id}>
              {filter.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Card className="mt-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {filters.map((filter) => (
              filter.id !== "normal" && (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  className="text-xs md:text-sm p-2 h-auto"
                  onClick={() => onFilterChange(filter.id)}
                >
                  {filter.name.split(" ")[0]}
                </Button>
              )
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSelector;

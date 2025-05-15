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

const filters = [
  {
    id: "protanopia",
    name: "Protanopía",
    description: "Dificultad para percibir el color rojo",
  },
  {
    id: "deuteranopia",
    name: "Deuteranopía",
    description: "Dificultad para percibir el color verde",
  },
  {
    id: "tritanopia",
    name: "Tritanopía",
    description: "Dificultad para percibir el color azul",
  },
  {
    id: "achromatopsia",
    name: "Acromatopsia",
    description: "Visión en blanco y negro",
  },
  {
    id: "blur",
    name: "Visión borrosa",
    description: "Simulación de baja agudeza visual",
  },
  { id: "normal", name: "Visión normal", description: "Sin alteraciones" },
];

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
        <SelectTrigger className="w-full h-12">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <SelectValue placeholder="Elegir tipo de discapacidad visual" />
          </div>
        </SelectTrigger>
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

      <Card className="border border-slate-200">
        <CardContent className="p-4">
          <div className="text-sm text-slate-600 mb-3 font-medium">
            Filtros rápidos
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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

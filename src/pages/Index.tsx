import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ImageUploader from "@/components/ImageUploader";
import FilterSelector from "@/components/FilterSelector";
import ImagePreview from "@/components/ImagePreview";

import { toast } from "@/components/ui/sonner";
import { useToast } from "@/hooks/use-toast";
import InfoCircle from "@/components/infoCircle";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    toast({
      title: "Imagen cargada",
      description: "La imagen se ha cargado correctamente.",
    });
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    toast({
      title: "Filtro aplicado",
      description: `Se ha aplicado el filtro: ${filter}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-4 md:p-8">
      <Card className="max-w-6xl mx-auto shadow-lg border border-slate-200 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-center text-2xl md:text-3xl font-bold tracking-tight">
                Simulador de Discapacidad Visual
              </CardTitle>
              <CardDescription className="text-blue-100 mt-2 max-w-2xl">
                Herramienta profesional para simular diferentes tipos de
                discapacidad visual y entender mejor la experiencia de usuarios
                con estas condiciones.
              </CardDescription>
            </div>
            <InfoCircle />
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                  <h2 className="text-lg font-medium mb-4 text-slate-800">
                    Paso 1: Subir Imagen
                  </h2>
                  <ImageUploader onImageUpload={handleImageUpload} />
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                  <h2 className="text-lg font-medium mb-4 text-slate-800">
                    Paso 2: Seleccionar Filtro
                  </h2>
                  <FilterSelector
                    onFilterChange={handleFilterChange}
                    selectedFilter={selectedFilter}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-slate-800 flex items-center">
                  <span className="mr-2">Visualización:</span>
                  {selectedFilter && (
                    <span className="bg-blue-100 text-blue-800 text-sm py-1 px-2 rounded-md">
                      {selectedFilter.charAt(0).toUpperCase() +
                        selectedFilter.slice(1)}
                    </span>
                  )}
                </h2>
                <ImagePreview
                  imageUrl={selectedImage}
                  filter={selectedFilter}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;

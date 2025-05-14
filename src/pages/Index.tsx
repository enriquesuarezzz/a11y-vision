
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageUploader from "@/components/ImageUploader";
import FilterSelector from "@/components/FilterSelector";
import ImagePreview from "@/components/ImagePreview";
import { toast } from "@/components/ui/sonner";
import { useToast } from "@/components/ui/use-toast";

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle className="text-center text-2xl md:text-3xl font-bold">
            Simulador de Discapacidad Visual
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-1/2">
                <ImageUploader onImageUpload={handleImageUpload} />
              </div>
              <div className="w-full md:w-1/2">
                <FilterSelector onFilterChange={handleFilterChange} selectedFilter={selectedFilter} />
              </div>
            </div>
            
            <div className="mt-4 flex justify-center flex-col items-center">
              <h2 className="text-lg font-semibold mb-2 text-center">
                {selectedFilter ? `Previsualización: ${selectedFilter}` : "Previsualización"}
              </h2>
              <ImagePreview imageUrl={selectedImage} filter={selectedFilter} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;

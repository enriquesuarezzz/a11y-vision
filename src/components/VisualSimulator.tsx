import { useState } from "react";
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
import InfoCircle from "@/components/infoCircle";
import { useToast } from "@/hooks/use-toast";

const VisualSimulator = () => {
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
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-50 to-white p-4 md:p-8">
      <Card className="max-w-6xl mx-auto shadow-lg border border-slate-200 overflow-hidden">
        {/* Card header with title and description */}
        <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-center text-2xl md:text-3xl font-bold tracking-tight">
                Visual Impairment Simulator
              </CardTitle>
              <CardDescription className="text-blue-100 mt-2 max-w-2xl">
                This is a professional tool to simulate different types of
                visual impairment and better understand the user experience of
                users with these conditions.
              </CardDescription>
            </div>
            <InfoCircle />
          </div>
        </CardHeader>
        {/* Card content */}
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                {/* Image uploader */}
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                  <h2 className="text-lg font-medium mb-4 text-slate-800">
                    Step 1: Upload Image
                  </h2>
                  <ImageUploader onImageUpload={handleImageUpload} />
                </div>
                {/* Filter selector */}
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                  <h2 className="text-lg font-medium mb-4 text-slate-800">
                    Step 2: Select Filter
                  </h2>
                  <FilterSelector
                    onFilterChange={handleFilterChange}
                    selectedFilter={selectedFilter}
                  />
                </div>
              </div>
              {/* Image preview */}
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-slate-800 flex items-center">
                  <span className="mr-2">Visualisation:</span>
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

export default VisualSimulator;

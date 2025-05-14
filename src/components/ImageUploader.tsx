
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      console.error("File is not an image");
      return;
    }

    // Create a URL for the image
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onImageUpload(url);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      
      <Button 
        onClick={handleButtonClick}
        className="w-full h-16 text-lg bg-blue-500 hover:bg-blue-600"
      >
        <UploadCloud className="mr-2 h-6 w-6" />
        Subir Imagen
      </Button>
      
      {previewUrl && (
        <Card className="mt-4 p-2 border-dashed border-2">
          <div className="text-center text-sm text-gray-500 mb-2">Imagen Original</div>
          <div className="flex justify-center">
            <img
              src={previewUrl}
              alt="Imagen Original"
              className="max-h-40 object-contain"
            />
          </div>
        </Card>
      )}
    </div>
  );
};

export default ImageUploader;

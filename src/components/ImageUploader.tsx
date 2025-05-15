import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Image } from "lucide-react";

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      console.error("El archivo no es una imagen");
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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onImageUpload(url);
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

      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-slate-300 hover:border-blue-400"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Upload className="h-8 w-8 text-blue-600" />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-slate-800">
              Arrastre su imagen aquí
            </h3>
            <p className="text-sm text-slate-500">o</p>
            <Button
              onClick={handleButtonClick}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Seleccionar archivo
            </Button>
            <p className="text-xs text-slate-500 mt-2">
              PNG, JPG o GIF (max. 10MB)
            </p>
          </div>
        </div>
      </div>

      {previewUrl && (
        <Card className="mt-4 p-3 border border-slate-200">
          <div className="text-center text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
            Imagen Original
          </div>
          <div className="flex justify-center bg-slate-50 rounded p-2">
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

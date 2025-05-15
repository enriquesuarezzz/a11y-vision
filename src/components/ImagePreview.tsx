import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { applyFilter } from "@/utils/filters";
import { Skeleton } from "@/components/ui/skeleton";
import { Image as ImageIcon } from "lucide-react";

interface ImagePreviewProps {
  imageUrl: string | null;
  filter: string | null;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, filter }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!imageUrl) return;

    const applyFilterToImage = async () => {
      setLoading(true);
      const image = new Image();

      image.onload = () => {
        // Calculate dimensions to maintain aspect ratio
        const maxWidth = 700;
        const maxHeight = 500;
        let newWidth = image.width;
        let newHeight = image.height;

        if (newWidth > maxWidth) {
          newHeight = (maxWidth / newWidth) * newHeight;
          newWidth = maxWidth;
        }

        if (newHeight > maxHeight) {
          newWidth = (maxHeight / newHeight) * newWidth;
          newHeight = maxHeight;
        }

        setDimensions({ width: newWidth, height: newHeight });

        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = newWidth;
        canvas.height = newHeight;

        applyFilter(canvas, image, filter || "normal");
        setLoading(false);
      };

      image.src = imageUrl;
    };

    applyFilterToImage();
  }, [imageUrl, filter]);

  if (!imageUrl) {
    return (
      <Card className="border-2 border-dashed border-slate-200 w-full aspect-video flex items-center justify-center bg-slate-50">
        <div className="text-center p-6">
          <div className="bg-slate-100 rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center mb-4">
            <ImageIcon className="h-8 w-8 text-slate-400" />
          </div>
          <p className="text-slate-500">
            Suba una imagen para visualizar el resultado
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full overflow-hidden border border-slate-200">
      <CardContent className="p-0 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-2"></div>
              <p className="text-sm text-slate-600">Aplicando filtro...</p>
            </div>
          </div>
        )}
        {!dimensions.width && !loading && (
          <Skeleton className="w-full h-[400px]" />
        )}
        <canvas
          ref={canvasRef}
          className="w-full object-contain"
          style={{
            maxHeight: "70vh",
            minHeight: dimensions.height ? "auto" : "300px",
            display: loading ? "none" : "block",
          }}
        ></canvas>
        {filter && !loading && (
          <div className="absolute top-0 right-0 bg-black/70 text-white text-xs font-medium py-1 px-3 rounded-bl-md">
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImagePreview;

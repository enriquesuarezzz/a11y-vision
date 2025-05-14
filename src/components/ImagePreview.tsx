
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { applyFilter } from "@/utils/filters";

interface ImagePreviewProps {
  imageUrl: string | null;
  filter: string | null;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, filter }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!imageUrl || !filter) return;

    const applyFilterToImage = async () => {
      setLoading(true);
      const image = new Image();
      
      image.onload = () => {
        // Calculate dimensions to maintain aspect ratio
        const maxWidth = 600;
        const maxHeight = 400;
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
        
        applyFilter(canvas, image, filter);
        setLoading(false);
      };
      
      image.src = imageUrl;
    };

    applyFilterToImage();
  }, [imageUrl, filter]);

  if (!imageUrl) {
    return (
      <Card className="border-2 border-dashed border-gray-300 w-full max-w-2xl aspect-video flex items-center justify-center">
        <p className="text-gray-500">Sube una imagen para ver el resultado</p>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl overflow-hidden">
      <CardContent className="p-0 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        <canvas 
          ref={canvasRef} 
          className="w-full object-contain"
          style={{ maxHeight: '70vh', minHeight: dimensions.height ? 'auto' : '300px' }}
        ></canvas>
      </CardContent>
    </Card>
  );
};

export default ImagePreview;

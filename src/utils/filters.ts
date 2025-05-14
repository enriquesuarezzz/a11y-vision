import colorBlind from 'color-blind';

export function applyFilter(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  filterType: string
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Draw the original image
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // If normal vision, just return the original image
  if (filterType === 'normal') return;

  // Apply blur filter directly using canvas filter
  if (filterType === 'blur') {
    // Save the original image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    // Apply blur filter
    ctx.filter = 'blur(3px)';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    
    // Reset the filter
    ctx.filter = 'none';
    return;
  }

  // For color blindness filters, we process the pixel data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Alpha channel at data[i + 3] remains unchanged

    // Convert RGB to hex for the color-blind library
    const hex = rgbToHex(r, g, b);
    
    // Apply the selected filter
    let filteredHex;
    switch (filterType) {
      case 'protanopia':
        filteredHex = colorBlind.protanopia(hex);
        break;
      case 'deuteranopia':
        filteredHex = colorBlind.deuteranopia(hex);
        break;
      case 'tritanopia':
        filteredHex = colorBlind.tritanopia(hex);
        break;
      case 'achromatopsia':
        // For grayscale, we use a simple average method
        const avg = Math.round((r + g + b) / 3);
        data[i] = avg;     // Red
        data[i + 1] = avg; // Green
        data[i + 2] = avg; // Blue
        continue;
      default:
        continue;
    }

    // Convert hex back to RGB
    const rgb = hexToRgb(filteredHex);
    if (rgb) {
      data[i] = rgb.r;
      data[i + 1] = rgb.g;
      data[i + 2] = rgb.b;
    }
  }

  // Put the processed image data back to the canvas
  ctx.putImageData(imageData, 0, 0);
}

// Helper function to convert RGB to HEX
function rgbToHex(r: number, g: number, b: number): string {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Helper function to convert HEX to RGB
function hexToRgb(hex: string): { r: number, g: number, b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

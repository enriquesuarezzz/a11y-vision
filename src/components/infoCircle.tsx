import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleCheck } from "lucide-react";

export const InfoCircle = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="rounded-full h-8 w-8 p-0 text-blue-100 hover:text-white hover:bg-blue-800/30"
        >
          <span className="sr-only">Información</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sobre el Simulador de Discapacidad Visual</DialogTitle>
          <DialogDescription>
            Esta herramienta permite simular diferentes tipos de discapacidades
            visuales para entender mejor la experiencia de usuarios con estas
            condiciones.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="protanopia">
              <AccordionTrigger>Protanopía</AccordionTrigger>
              <AccordionContent>
                Es un tipo de daltonismo donde hay dificultad para distinguir
                entre el rojo y el verde. Las personas con esta condición no
                pueden percibir el color rojo correctamente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="deuteranopia">
              <AccordionTrigger>Deuteranopía</AccordionTrigger>
              <AccordionContent>
                Es un tipo de daltonismo que afecta la percepción del color
                verde. Las personas con esta condición confunden el verde con el
                rojo, similar a la protanopía.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tritanopia">
              <AccordionTrigger>Tritanopía</AccordionTrigger>
              <AccordionContent>
                Es un tipo de daltonismo poco común que afecta la percepción del
                azul y el amarillo, dificultando distinguir entre estos colores.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="achromatopsia">
              <AccordionTrigger>Acromatopsia</AccordionTrigger>
              <AccordionContent>
                Es una condición que causa ceguera total al color (visión en
                blanco y negro) y una mayor sensibilidad a la luz.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="blur">
              <AccordionTrigger>Visión Borrosa</AccordionTrigger>
              <AccordionContent>
                Simula condiciones como cataratas, degeneración macular o miopía
                severa, donde la visión pierde nitidez.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="rounded-lg bg-blue-50 p-4 text-blue-800 text-sm">
            <div className="flex gap-2">
              <CircleCheck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium mb-1">Uso recomendado</h4>
                <p>
                  Esta herramienta es útil para diseñadores y desarrolladores
                  que desean crear interfaces accesibles para personas con
                  discapacidad visual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoCircle;

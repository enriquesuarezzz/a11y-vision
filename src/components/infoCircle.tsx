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
      {/* Dialog component */}
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="rounded-full h-8 w-8 p-0 text-blue-100 hover:text-white hover:bg-blue-800/30"
        >
          {/* Hidden text */}
          <span className="sr-only">Information</span>
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
        {/* Dialog header */}
        <DialogHeader>
          <DialogTitle>About the Visual Impairment Simulator</DialogTitle>
          <DialogDescription>
            This tool allows to simulate different types of visual impairments
            to better understand the experience of users with these conditions.
          </DialogDescription>
        </DialogHeader>
        {/* Accordion component */}
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {/* Accordion items */}
            <AccordionItem value="protanopia">
              <AccordionTrigger>Protanopia</AccordionTrigger>
              <AccordionContent>
                It is a type of colour blindness where there is difficulty in
                distinguishing between red and green. People with this condition
                cannot perceive the colour red correctly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="deuteranopia">
              <AccordionTrigger>Deuteranopia</AccordionTrigger>
              <AccordionContent>
                It is a type of colour blindness that affects the perception of
                the colour green. People with this condition mistake green for
                red , similar to protanopia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tritanopia">
              <AccordionTrigger>Tritanopia</AccordionTrigger>
              <AccordionContent>
                It is a rare type of colour blindness that affects the
                perception of blue and yellow, making it difficult to
                distinguish between these colours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="achromatopsia">
              <AccordionTrigger>Achromatopsia</AccordionTrigger>
              <AccordionContent>
                It is a condition that causes total colour blindness (vision in
                black and white) and increased sensitivity to light.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="blur">
              <AccordionTrigger>Blurred Vision</AccordionTrigger>
              <AccordionContent>
                Simulates conditions such as cataracts, macular degeneration or
                severe myopia , where vision becomes blurred.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* Recommended use */}
          <div className="rounded-lg bg-blue-50 p-4 text-blue-800 text-sm">
            <div className="flex gap-2">
              <CircleCheck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium mb-1">Recommended use</h4>
                <p>
                  This tool is useful for designers and developers who want to
                  create accessible interfaces for people with visual
                  impairment.
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

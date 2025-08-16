import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Maximize } from "lucide-react";

export function GalleryModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="text-black cursor-pointer lg:h-10 h-6 lg:w-10 w-6 bg-white flex items-center justify-center">
          <Maximize className="lg:h-6 h-4 lg:w-6 w-4" />
        </div>
      </DialogTrigger>
      <DialogContent className="h-svh w-[100vw] bg-white">
        <DialogHeader>
          <DialogTitle className="sr-only">
            View All Images of the Watch
          </DialogTitle>
          <DialogDescription className="sr-only">
            View all images of the watch here.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

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
        <div className="text-black rounded-md cursor-pointer h-10 w-10 bg-white flex items-center justify-center">
          <Maximize className="h-6 w-6" />
        </div>
      </DialogTrigger>
      <DialogContent className="h-svh w-[100vw] bg-white">
        <DialogHeader>
          <DialogTitle className="sr-only">
            View All Images of the Watch
          </DialogTitle>
          <DialogDescription className="sr-only">
            <p>View all images of the watch here.</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

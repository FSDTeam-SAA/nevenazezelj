import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Box } from "lucide-react";
import WatchViewer from "./model-viewer";

export function ModelModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative group text-black rounded-md cursor-pointer h-10 w-10 bg-white flex items-center justify-center">
          <Box className="h-6 w-6" />
          <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-full overflow-visible w-20 text-center bg-black/70 text-white text-[14px]">
            <p>View 3D</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="h-svh w-[100vw] bg-[#efefef]">
        <DialogHeader>
          <DialogTitle className="sr-only">View 3D Model</DialogTitle>
          <DialogDescription className="sr-only">
            View the 3D model of the watch here.
          </DialogDescription>
          <WatchViewer />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

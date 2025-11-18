"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WatchViewer from "./model-viewer";

interface ModelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger?: React.ReactNode; // optional custom trigger
}

export function ModelModal({ open, onOpenChange, trigger }: ModelModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="h-[100vh] w-[100vw] bg-[#efefef]">
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

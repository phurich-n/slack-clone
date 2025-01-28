/* eslint-disable @next/next/no-img-element */
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface ThumbnailProps {
  url: string | null | undefined;
}

export function Thumbnail({ url }: Readonly<ThumbnailProps>) {
  if (!url) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative overflow-hidden max-w-[360px] border rounded-lg my-2 cursor-zoom-in">
          <img
            src={url}
            alt="Thumbnail"
            className="object-cover rounded-md size-full"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[800px] border-none bg-transparent p-0 shadow-none">
        <VisuallyHidden asChild>
          <DialogTitle></DialogTitle>
        </VisuallyHidden>
        <img
          src={url}
          alt="Thumbnail"
          className="object-cover rounded-md size-full"
        />
      </DialogContent>
    </Dialog>
  );
}

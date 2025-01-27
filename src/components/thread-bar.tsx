import { formatDistanceToNow } from 'date-fns';
import { ChevronRight } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface ThreadBarProps {
  count?: number;
  image?: string;
  timestamp?: number;
  name?: string;
  onClick?: () => void;
}

export const ThreadBar = ({
  count,
  image,
  name = 'Member',
  timestamp,
  onClick,
}: ThreadBarProps) => {
  const avatarFallback = name.charAt(0).toUpperCase();

  if (!count || !timestamp) return null;

  return (
    <button
      onClick={onClick}
      className="p-1 rounded-md hover:bg-white border border-transparent flex items-center justify-start group/thread-bar transition max-w-[600px]"
    >
      <div className="flex items-center gap-2 overflow-hidden">
        <Avatar className="size-6 shrink-0">
          <AvatarImage src={image} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <span className="text-xs font-bold truncate text-sky-700 hover:underline">
          {count} {count > 1 ? 'replies' : 'reply'}
        </span>
        <span className="block text-xs truncate text-muted-foreground group-hover/thread-bar:hidden">
          Last reply {formatDistanceToNow(timestamp, { addSuffix: true })}
        </span>
        <span className="hidden text-xs truncate text-muted-foreground group-hover/thread-bar:block">
          View thread
        </span>
      </div>
      <ChevronRight className="ml-auto transition opacity-0 size-4 text-muted-foreground group-hover/thread-bar:opacity-100 shrink-0" />
    </button>
  );
};

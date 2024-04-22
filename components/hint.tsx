import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';

interface HintProps {
    children: React.ReactNode;
    description: string;
    side?: 'left' | 'right' | 'top' | 'bottom';
    sideOffset: number;
}
export default function Hint({
    children,
    description,
    sideOffset = 0,
    side = 'bottom',
}: HintProps) {
    return (
        <div>
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>{children}</TooltipTrigger>
                    <TooltipContent
                        sideOffset={sideOffset}
                        side={side}
                        className="max-w-[220px] break-words text-xs"
                    >
                        {description}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}

import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';

export default function PlatformLayoute({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <Toaster />
            {children}
        </ClerkProvider>
    );
}

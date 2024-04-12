import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'

export function Footer() {
    return (
        <div className="fixed bottom-0 flex w-full items-center border-b bg-white p-4 px-4 shadow-sm">
            <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
                <Logo />
                <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
                    <Button size="sm" variant="ghost">
                        Privacy Policy
                    </Button>
                    <Button size="sm" variant="ghost">
                        Terms of Service
                    </Button>
                </div>
            </div>
        </div>
    )
}

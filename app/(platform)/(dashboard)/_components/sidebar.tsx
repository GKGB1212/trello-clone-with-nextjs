'use client';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useLocalStorage } from 'usehooks-ts';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import NavItem, { Oranization } from './nav-item';
interface SidebarProps {
    storageKey?: string;
}
export default function SideBar({
    storageKey = 't-sidebar-state',
}: SidebarProps) {
    //Tạo key lưu trữ local expanded
    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
        storageKey,
        {}
    );
    //useOrganization Dùng để truy xuất thông tin của organization hiện tại
    const { organization: activeOrganization, isLoaded: isLoadedOrg } =
        useOrganization();
    //hook useOrganizationList từ thư viện Clerk để lấy thông tin về các tổ chức mà người dùng hiện tại là thành viên
    const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
        userMemberships: {
            infinite: true,
        }, //userMemberships dùng để lấy thông tin các organization là user tham gia
    });
    //Cái defaultAccordionValue dùng để lấy ds các organization đang được mở
    const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
        (acc: string[], key: string) => {
            if (expanded[key]) {
                acc.push(key);
            }
            return acc;
        },
        []
    );
    console.log('binh', defaultAccordionValue);
    console.log('binh2', expanded);
    const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr,
            [id]: !expanded[id], // set giá trị ngược lại so với những gì nó đang có
        }));
    };
    if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
            <>
                <div className="mb-2 flex items-center justify-between">
                    <Skeleton className="h-10 w-[50%]" />
                    <Skeleton className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                </div>
            </>
        );
    }
    return (
        <>
            <div className="mb-1 flex items-center text-xs font-medium">
                <span className="pl-4">Workspaces</span>
                <Button
                    asChild
                    size={'icon'}
                    variant={'ghost'}
                    className="ml-auto"
                >
                    <Link href="/select-org">
                        <Plus className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
            <Accordion
                type="multiple"
                defaultValue={defaultAccordionValue}
                className="space-y-2"
            >
                {userMemberships.data.map(({ organization }) => (
                    <NavItem
                        key={organization.id}
                        isActive={activeOrganization?.id === organization.id}
                        isExpanded={expanded[organization.id]}
                        onExpanded={onExpand}
                        organization={organization as Oranization}
                    />
                ))}
            </Accordion>
        </>
    );
}

import { OrganizationList } from '@clerk/nextjs';
import React from 'react';

export default function CreateOrganizationPage() {
    return (
        <div>
            <OrganizationList
                hidePersonal
                afterCreateOrganizationUrl="/organization/:id"
                afterSelectOrganizationUrl="/organization/:id"
            />
        </div>
    );
}

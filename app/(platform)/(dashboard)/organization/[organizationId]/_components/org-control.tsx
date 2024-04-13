'use client';

import { useOrganizationList } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
//Component này dùng để gán organization theo url /organization/chuỗi id
export default function OrgControl() {
    const params = useParams();
    //hàm set organization
    const { setActive } = useOrganizationList();
    useEffect(() => {
        if (!setActive) return;
        setActive({
            organization: params.organizationId as string,
        });
    }, [setActive, params.organizationId]);
    return null;
}

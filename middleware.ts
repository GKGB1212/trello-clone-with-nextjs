import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
export default authMiddleware({
    publicRoutes: ['/'],
    afterAuth(auth, req) {
        //1. Kiem tra da dang nhap chua va co phai dang o mot route public hay khong, nếu phải thì chuyển hướng đến trang khác
        if (auth.userId && auth.isPublicRoute) {
            let path = '/select-org'; // chuyen huong sang trang chon organization
            if (auth.orgId) {
                path = `/organization/${auth.orgId}`;
            }
            const orgSelection = new URL(path, req.url);
            return NextResponse.redirect(orgSelection);
        }
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }
        //3. Kiểm tra nếu người dùng đã đăng nhâp tuy nhiên lại chưa chọn organization nào và url lại không phải trang chọn org thì phải trỏ đến trang đó
        if (
            auth.userId &&
            !auth.orgId &&
            req.nextUrl.pathname != '/select-org'
        ) {
            const orgSelection = new URL('/select-org', req.url);
            return NextResponse.redirect(orgSelection);
        }
    },
});
export const config = {
    matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

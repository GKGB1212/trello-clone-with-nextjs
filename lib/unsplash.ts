import { createApi } from 'unsplash-js';
export const unsplash = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!, // Thay thế YOUR_ACCESS_KEY bằng Access Key thực tế của bạn
    fetch: fetch,
});

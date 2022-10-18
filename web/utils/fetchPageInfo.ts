import { PageInfo } from '../typing';

export const fecthPageInfo =async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    const data = await res.json();
    const skills: PageInfo = data.PageInfo;

    return skills;
}
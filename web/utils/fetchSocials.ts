import { Social } from '../typing';

export const fecthSocials =async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    const data = await res.json();
    const skills: Social[] = data.socials;

    return skills;
}
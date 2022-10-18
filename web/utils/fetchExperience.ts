import { Experience } from '../typing';

export const fecthExperience =async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

    const data = await res.json();
    const skills: Experience[] = data.experiences;

    return skills;
}
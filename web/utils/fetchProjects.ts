import { Project } from '../typing';

export const fecthProjects =async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

    const data = await res.json();
    const skills: Project[] = data.Projects;

    return skills;
}
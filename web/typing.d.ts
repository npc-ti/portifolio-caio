interface SanityBody{
    _createdAt:string,
    _id:string,
    _rev:string, 
    _updatedAt:string
} 

interface Image {
    _type: "Image",
    asset:{
        _ref:string,
        _type:"reference"
    }
}

export interface PageInfo extends SanityBody {
    _type: "PageInfo",
    address: string,
    phoneNumber: string,
    name: string,
    heroImage: Image,
    role: string,
    email: string,
    backgroundInformation: string,
    profilePic: Image
}

export interface Tech extends SanityBody {
    _type: "skill",
    image: Image,
    progress: number,
    title: string,
}

export interface Skill extends SanityBody {
    _type: "skill",
    image: Image,
    progress: number,
    title: string,
}

export interface Project extends SanityBody {
    tile: string,
    _type: "project",
    image: Image,
    linkToBuild: string,
    linkToGitHub: string,
    summary: string
    tech: Tech[],
}

export interface Experience extends SanityBody {
    title: string,
    jobTitle: string,
    points: string[],
    tech: Tech[],
    company: string,
    _type: "experience",
    companyImage: Image,
    dateToStarted: date,
    dateToEnded: date,
}

export interface Social extends SanityBody {
    _type:"social",
    tile: string,
    url: string
}
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Project } from "../../typing";

const query = groq`
*[_type=="projectInfo"]{
    ...,
    tech[]->
  }
`


type Data = {
    Projects: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
){
    const Projects: Project[] = await sanityClient.fetch(query);
    res.status(200).send({Projects})
}
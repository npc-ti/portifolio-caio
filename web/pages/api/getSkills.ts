import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Skill } from "../../typing";

const query = groq`
    *[_type=="skill"]
`


type Data = {
    Skills: Skill[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
){
    const Skills: Skill[] = await sanityClient.fetch(query);
    res.status(200).send({Skills})
}
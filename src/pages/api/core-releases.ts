import { NextApiRequest, NextApiResponse } from 'next'
import { navigation } from '../../navigation'
import { Octokit } from 'octokit'

type Data = {
    results: string[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const octokit = new Octokit({
        auth: process.env.GH_TOKEN,
    })

    const results = await octokit.request('GET /repos/{owner}/{repo}/releases', {
        owner: 'fold-dev',
        repo: 'fold',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    })

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ results }))
}

import { NextApiRequest, NextApiResponse } from 'next'
import { navigation } from '../../navigation'

type Data = {
    results: string[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { query } = req.query
    const results = query
        ? navigation.filter((item) => {
              return (
                  item.title.toLowerCase().includes(query.toString()) ||
                  item.description.toLowerCase().includes(query.toString())
              )
          })
        : navigation
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ results }))
}

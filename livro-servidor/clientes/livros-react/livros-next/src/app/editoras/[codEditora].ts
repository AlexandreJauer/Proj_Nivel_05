import { NextApiRequest, NextApiResponse } from 'next';
import  controleEditora  from './index';





export default (req: NextApiRequest, res: NextApiResponse) => {
 
  try {
    if (req.method === 'GET') {
      const codEditora = Number(req.query.codEditora)
      const Editora = controleEditora.getNomeEditora(codEditora)
      res.status(200).json({ nome: Editora })
    } else {
      res.status(405).end() 
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
}
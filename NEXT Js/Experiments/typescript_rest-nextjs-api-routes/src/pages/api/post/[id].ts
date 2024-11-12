import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const postId = Array.isArray(req.query?.id)
    ? req.query?.id[0]
    : req.query?.id;

  console.log(req.method);
  switch (req.method) {
    case 'DELETE':
      return handleDELETE(postId, res)

    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      )
  }
}

// DELETE /api/post/:id
async function handleDELETE(postId: string | undefined, res: NextApiResponse<any>) {
  const post = await prisma.post.delete({
    where: { id: postId },
  })
  return res.json(post)
}

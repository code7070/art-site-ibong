import { NotionAPI } from "notion-client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  statusCode: number;
  pageId: string | string[];
  notion: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { pageId = "" } = req.query;
  const notion = new NotionAPI();
  return await notion
    .getPage(`${pageId}`)
    .then((resNotion: any) =>
      res.status(200).json({ statusCode: 200, pageId, notion: resNotion })
    )
    .catch((err: any) =>
      res.status(400).json({ statusCode: 400, pageId, notion: err })
    );
}

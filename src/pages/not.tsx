import { getPageTitle, getBlockIcon, parsePageId } from "notion-utils";
import Renderer from "@/utils/Renderer";
import PageHead from "./PageHead";
import { NotionRenderer } from "react-notion-x";

export async function getStaticProps() {
  const pageId = "dc15ec27474749e0915a7c44a29301fc";
  const fet = await fetch(`${process.env.baseUrl}/api/notion/${pageId}`);
  const res = await fet.json();
  return { props: { data: res } };
}

interface Props {
  data: {
    pageId: string;
    statusCode: number;
    notion: any;
  };
}

export default function NotPage({ data }: Props) {
  const { notion, pageId } = data;

  const parsedPageId = parsePageId(pageId);
  const currentBlock = notion.block[parsedPageId]?.value;

  const title = getPageTitle(notion);
  const icon = getBlockIcon(currentBlock, notion);

  return (
    <>
      <PageHead title={title} iconEmoji={icon} />
      <Renderer blocks={notion} pageId={pageId} />
      <NotionRenderer recordMap={notion} />
    </>
  );
}

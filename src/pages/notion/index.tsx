import { NotionAPI } from "notion-client";
import { getBlockTitle } from "notion-utils";
import NextImage from "next/image";
import { NotionRenderer } from "react-notion-x";
import PageHead from "@pages/PageHead";
import dynamic from "next/dynamic";

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (dyn) => dyn.Collection
  )
);

export async function getStaticProps() {
  const notclient = new NotionAPI();

  const page = await notclient.getPage("abbc4a14485142b2a0e49bd8f7dcd637");

  return {
    props: { page },
  };
}

export default function NotionTest({ page }: any) {
  console.log("Notion: ", page);

  const keys = Object.keys(page.block);
  const block = page?.block?.[keys[0]]?.value;

  console.log("Title: ", getBlockTitle(block, page));

  return (
    <>
      <PageHead title="Heheh" />
      <div className="mx-auto max-w-4xl">
        <NotionRenderer
          recordMap={page}
          components={{ Collection, nextImage: NextImage }}
        />
      </div>
    </>
  );
}

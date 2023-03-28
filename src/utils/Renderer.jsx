import { parsePageId } from "notion-utils";

const Item = ({ targetBlocks, id, con }) => {
  const dom = targetBlocks[id]?.value;
  const { type, properties, content } = dom;
  const hasContent = typeof content === "object" && content.length > 0;
  if (con) console.log("DOM: ", id, dom);
  if (type === "header")
    return (
      <h1 key={id} className="mb-2 text-3xl">
        {properties.title[0][0]}
      </h1>
    );
  else if (type === "sub_header")
    return (
      <h2 key={id} className="mb-2 text-2xl">
        {properties.title[0][0]}
      </h2>
    );
  else if (type === "sub_sub_header")
    return (
      <h3 key={id} className="mb-2 text-xl">
        {properties.title[0][0]}
      </h3>
    );
  else if (type === "column_list")
    return (
      hasContent && (
        <div className="mb-2 flex gap-4">
          {content.map((contentId) => (
            <Item
              key={contentId}
              id={contentId}
              con
              targetBlocks={targetBlocks}
            />
          ))}
        </div>
      )
    );
  else if (type === "column")
    return (
      hasContent && (
        <div className="mb-2">
          {content.map((id) => (
            <Item key={id} id={id} targetBlocks={targetBlocks} />
          ))}
        </div>
      )
    );
  else if (type === "text") return <div>{properties?.title[0]}</div>;
  else if (type === "image")
    return (
      <div>
        <img alt="" src={properties?.source[0]} className="block w-full" />
      </div>
    );
  else if (type === "callout")
    return (
      <div className="mb-2 rounded-lg border-2 border-primary bg-info">
        {properties.title[0][0]}
      </div>
    );
  else if (type === "quote")
    return (
      <div className="mb-2 border-2 border-primary p-4 italic">
        {properties.title[0][0]}
      </div>
    );
  else return <div key={id}>{id}</div>;
};

export default function Renderer({ blocks, pageId }) {
  const parsedPageId = parsePageId(pageId);
  const currentBlock = blocks.block[parsedPageId]?.value;
  const targetBlocks = blocks.block;
  console.log("Loops: ", { currentBlock, targetBlocks });
  return (
    <section className="mx-auto max-w-lg p-4">
      {currentBlock.content.map((id) => (
        <Item key={id} id={id} targetBlocks={targetBlocks} />
      ))}
    </section>
  );
}

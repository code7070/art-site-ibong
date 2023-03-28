import Head from "next/head";
import { FunctionComponent } from "react";

interface PageHeadProps {
  title?: string;
  description?: string;
  icon?: string;
  iconEmoji?: string;
}

const PageHead: FunctionComponent<PageHeadProps> = ({
  title = "Next-TS by Jojo",
  description = "This is NextJS with TS starter by Jojo",
  icon = "/favicon.ico",
  iconEmoji = "",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {iconEmoji ? (
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${iconEmoji}</text></svg>`}
        ></link>
      ) : (
        <link rel="icon" href={icon} />
      )}
    </Head>
  );
};

export default PageHead;

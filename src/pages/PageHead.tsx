import Head from "next/head";
import { FunctionComponent } from "react";

interface PageHeadProps {
  title?: string;
  description?: string;
  icon?: string;
}

const PageHead: FunctionComponent<PageHeadProps> = ({
  title = "Next-TS by Jojo",
  description = "This is NextJS with TS starter by Jojo",
  icon = "/favicon.ico",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={icon} />
    </Head>
  );
};

export default PageHead;

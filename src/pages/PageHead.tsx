import Head from "next/head";

export default function PageHead({
  title = "Next TS starter by Jojo",
  description = "Next TS Starter by Jojo",
  icon = "/favicon.ico",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={icon} />
    </Head>
  );
}

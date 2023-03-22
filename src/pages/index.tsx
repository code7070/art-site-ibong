import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageHead from "./PageHead";
import { Client } from "@notionhq/client";
import HomeCover from "@/sections/home/cover";
import ArtSection from "@/components/art-section";
import WorkThumbnail from "@/components/work-thumbnail";

const inter = Inter({ subsets: ["latin"] });

const notion = new Client({ auth: process.env.notion });

export async function getStaticProps() {
  const { results } = await notion.databases.query({
    database_id: "ec7b8a349e664dafaf8f0e77c376072a",
  });

  let works = results.map((i) => ({
    name: i.properties.Name.title[0].plain_text,
    category: i.properties.category?.select?.name || null,
    image: i.properties.image.files[0].file.url,
  }));

  return {
    props: { raw: results, works: works },
  };
}

export default function Home(props = { works: [] }) {
  const { works } = props;
  console.log(props);

  const artwork = works.filter(({ category }) => category === "Art Work");
  const trusted = works.filter(
    ({ category }) => `${category}`.toLowerCase() === "trusted by"
  );

  return (
    <>
      <PageHead />
      <section>
        <HomeCover />
        <div className="wrapper">
          <ArtSection
            title="ArtWork"
            description="created with visual and special messages"
          >
            <div className="grid grid-cols-2 gap-3">
              {artwork.map(({ name, category, image }) => (
                <WorkThumbnail key={name} name={name} image={image} />
              ))}
            </div>
          </ArtSection>
          <ArtSection title=""></ArtSection>
        </div>
      </section>
    </>
  );
}

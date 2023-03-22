import Image from "next/image";

interface Props {
  name: string;
  image?: string;
}

export default function WorkThumbnail({ name, image }: Props) {
  return (
    <div className="bg-white">
      <div className="pt-2.5">
        <div className="relative mx-auto h-[110px] w-[130px] bg-[#efefef]">
          {image && <Image alt={name} src={image} fill />}
        </div>
      </div>
      <div className="h-[50px] w-full px-3 py-1.5 text-sm font-bold">
        {name}
      </div>
    </div>
  );
}

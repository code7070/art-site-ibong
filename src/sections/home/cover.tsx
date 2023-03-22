import Image from "next/image";

export default function HomeCover() {
  return (
    <div className="wrapper">
      <div className="relative mb-14 pt-16">
        <div className="relative mx-auto mb-6 aspect-[4/3]">
          <h1 className="hidden">IDO</h1>
          <Image
            alt="IDO Logo"
            src="/images/logo-ido.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          />
        </div>
        <div className="text-center text-lg [&>*]:my-4">
          <h2>A man who interest with art-work especially handlettering.</h2>
          <p>I have unique vintage style in every work.</p>
        </div>
      </div>
    </div>
  );
}

import { SEO } from "../components/global";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5 xl:px-8">
        <div className="min-h-[100dvh] mx-auto flex flex-col items-center justify-center text-black text-[40px]">
          Home
        </div>
      </div>
    </>
  );
}

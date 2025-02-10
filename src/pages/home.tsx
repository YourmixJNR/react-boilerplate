import { SEO } from "../components/global";
import { H2 } from "../components/typography";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5 xl:px-8">
        <div className="min-h-[100dvh] mx-auto flex flex-col items-center justify-center">
          <H2>Hi</H2>
          <motion.h3
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="overflow-hidden whitespace-nowrap text-xl text-center text-gray-900"
          >
            Welcome home
          </motion.h3>
        </div>
      </div>
    </>
  );
}

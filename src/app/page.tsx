import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

export default function Home() {
  return (
    <main className="bg-white px-10  max-w-screen-lg mx-auto">
      <section className="min-h-screen mb-16">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">tedros</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-tr from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href=""
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h3 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Tedros Kahsu
          </h3>
          <h3 className="text-2xl py-2 md:text-3xl">Developer and desinger</h3>
          <p className="text-lg leading-7 text-gray-800 py-5 md:text-xl md:max-w-xl md:m-auto">
            Freelancer proviing service for programming needs. Join me down
            below let get going.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:w-96 md:h-96">
          <Image
            alt="Tedros Kahsu Image"
            src={deved}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
      <section className="mb-20">
        <div></div>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-lg py-2 leading-7 text-gray-800 md:max-w-xl md:text-xl">
            Since the beginning of my journey as a freelance developer and
            desinger, I have done remote work for
            <span className="text-teal-500"> agencies </span> consulted for
            <span className="text-teal-500"> startups </span> and collaborated
            with talented people to create digital products for both business
            and consumer use.
          </p>
          <p className="text-lg leading-7 text-gray-800 md:max-w-xl md:text-xl">
            I offer world class quality on software develoopment and system
            design of proformant software products.
          </p>
        </div>
        <div className="md:flex gap-10">
          <div className="flex flex-col shadow-lg p-10 rounded-xl my-10">
            <Image src={design} alt="Design" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="pt-3 pb-1 text-teal-600">Design tools I use</h4>
            <div className="flex gap-2">
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>

          <div className="flex flex-col shadow-lg p-10 rounded-xl my-10">
            <Image src={code} alt="Design" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="pt-3 pb-1 text-teal-600">Design tools I use</h4>
            <div className="flex gap-2">
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>

          <div className="flex flex-col shadow-lg p-10 rounded-xl my-10">
            <Image src={consulting} alt="Design" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="pt-3 pb-1 text-teal-600">Design tools I use</h4>
            <div className="flex gap-2">
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20">
        <div className="my-8">
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-lg py-2 leading-7 text-gray-800 md:max-w-xl md:text-xl">
            Since the beginning of my journey as a freelance developer and
            desinger, I have done remote work for
            <span className="text-teal-500"> agencies </span> consulted for
            <span className="text-teal-500"> startups </span> and collaborated
            with talented people to create digital products for both business
            and consumer use.
          </p>
          <p className="text-lg leading-7 text-gray-800 md:max-w-xl md:text-xl">
            I offer world class quality on software develoopment and system
            design of proformant software products.
          </p>
        </div>
        <div className="grid grid-col gap-6 md:grid-cols-2">
          <div>
            <Image src={web1} alt="web1" />
          </div>
          <div>
            <Image src={web2} alt="web2" />
          </div>
          <div>
            <Image src={web3} alt="web3" />
          </div>
          <div>
            <Image src={web4} alt="web4" />
          </div>
          <div>
            <Image src={web5} alt="web5" />
          </div>
          <div>
            <Image src={web6} alt="web6" />
          </div>
        </div>
      </section>
    </main>
  );
}

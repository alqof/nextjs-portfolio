import { FaLocationArrow, FaMessage } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer id="contact" className="w-full pt-20 pb-10">
            {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <Image className="w-full h-full opacity-80" src="/footer-grid.svg" alt="grid" layout="fill" objectFit="cover" />
            </div> */}

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take your <span className="text-red-400">digital presence</span> to the next level?
                </h1>

                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>

                <a href="mailto:alqofnuraji@gmail.com">
                    <MagicButton title="Let’s work together!" icon={<FaMessage />} position="right"/>
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light"> Copyright © 2025 qopzy.id </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info, i) => (
                        <div key={i} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            {info.src ? (
                                <a href={info.src}>
                                    <Image src={info.img} alt="icons" width={20} height={20} />
                                </a>
                            ) : (
                                <span className="opacity-50 cursor-not-allowed">
                                    <Image src={info.img} alt="icons" width={20} height={20} />
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

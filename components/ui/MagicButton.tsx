import type { ReactNode } from "react";

type MagicButtonProps = {
    title: string;
    icon: ReactNode;
    position: "left" | "right";
} & ({ href: string; onClick?: never } | { href?: never; onClick: () => void });

export default function MagicButton({ title, icon, position, href, onClick }: MagicButtonProps) {
    const className = "relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-full p-[1.5px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
    const content = (
        <>
            <span aria-hidden="true" className="absolute inset-[-1000%] motion-safe:animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#009600_0%,#ffffff_50%,#009600_100%)]" />
            <span className="h-full w-full px-7 inline-flex items-center justify-center gap-2 font-medium text-sm text-white rounded-full bg-custom-1000 backdrop-blur-3xl cursor-pointer">
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </>
    );

    return href
        ? <a className={className} href={href}>{content}</a>
        : <button type="button" className={className} onClick={onClick}>{content}</button>;
}

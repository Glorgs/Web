import { DiCssdeck } from 'react-icons/di';
import { FiAtSign } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {translate} from "../assets/js/utils.js";
import {useEffect, useState} from "react";

const HeaderIcon = ({ Icon, url }) => (
    <Icon onClick={() => window.open(url)} size="2rem" className="cursor-pointer hover:text-yellow-400 transition" />
)

const scroll = name => {
    const el = document.querySelector(`#${name}`);

    el.scrollIntoView({
        behavior: 'smooth'
    });
}

export default function Header() {
    const [isLargeLayout, setIsLargeLayout] = useState(false);

    useEffect(() => {
        setIsLargeLayout(window.innerWidth > 560);
    }, []);

    return (
        <div className="flex flex-wrap items-center pt-4">
            {
                isLargeLayout && (
                    <div className="flex items-center text-xl">
                        <DiCssdeck size="2rem" />
                        <div className="ml-5">Portfolio</div>
                    </div>
                )
            }

            {
                isLargeLayout && (
                    <div className="flex-1 flex items-center justify-center text-xl font-light gap-x-20 tracking-wide opacity-80">
                        <div onClick={() => scroll('projects')} className="hover:underline cursor-pointer">{translate('Projects|Projets')}</div>
                        <div onClick={() => scroll('technologies')} className="hover:underline cursor-pointer">{translate('Technologies|Technologies')}</div>
                        <div onClick={() => scroll('about-me')} className="hover:underline cursor-pointer">{translate('About|Profil')}</div>
                    </div>
                )
            }

            <div className="flex items-center w-full justify-center lg:w-auto lg:justify-start gap-x-10">
                <HeaderIcon Icon={AiFillGithub} url="https://github.com/Glorgs" />
                <HeaderIcon Icon={AiFillLinkedin} url="https://www.linkedin.com/in/jonathan-baudillon-1ba43a220/" />
                <HeaderIcon Icon={FiAtSign} url="mailto:jonathanbaudillon@yahoo.fr" />
            </div>
        </div>
    )
}

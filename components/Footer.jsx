import {translate} from "../assets/js/utils.js";

export default function Footer() {
    return (
        <div className="flex flex-wrap gap-x-32 gap-y-10">
            <div className="w-full lg:w-auto">
                <div className="opacity-50 text-sm tracking-widest">{translate('CALL|TÉLÉPHONE')}</div>
                <a href="tel:+33 6 14 34 26 56" target="_self" className="mt-5 block opacity-70 tracking-wider hover:underline">+33 6 14 34 26 56</a>
            </div>

            <div className="w-full lg:w-auto">
                <div className="opacity-50 text-sm tracking-widest">EMAIL</div>
                <a href="mailto:jonathanbaudillon@yahoo.fr" target="_self" className="mt-5 block opacity-70 tracking-wider hover:underline">jonathanbaudillon@yahoo.fr</a>
            </div>

            <div className="w-full lg:w-auto">
                <div className="opacity-50 text-sm tracking-widest">ITCH</div>
                <a href="https://glorgs.itch.io/" target="_self" className="mt-5 block opacity-70 tracking-wider hover:underline">glorgs.itch.io</a>
            </div>
        </div>
    )
}

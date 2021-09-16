import {translate} from "../assets/js/utils.js";
import {SectionTitle} from "../assets/js/StyledComponents.js";
import AnimatedBackground from "./AnimatedBackground.jsx";
import {useEffect, useState} from "react";

export default function Introduction() {
    const [isLargeLayout, setIsLargeLayout] = useState(false);

    useEffect(() => {
        setIsLargeLayout(window.innerWidth > 560);
    }, []);

    return (
        <div className="flex items-center">
            <div className="lg:w-3/4">
                <SectionTitle main>
                    <span>Jonathan Baudillon</span>
                </SectionTitle>

                <div className="mt-5 opacity-50 text-xl leading-8 font-light tracking-wider">
                    {
                        translate([
                            `Welcome to my Portfolio. You can find the main projects and technologies I worked on. Enjoy your visit!`,
                            `Bienvenue dans mon Portfolio. Vous pourrez y trouver les principaux projets et les technologies sur lesquels j'ai travaillé. Bonne visite !`
                        ])
                    }
                </div>
            </div>

            {
                isLargeLayout && (
                    <div style={{marginLeft: -120, width: '35%', height: '100%'}}>
                        <AnimatedBackground />
                    </div>
                )
            }
        </div>
    )
}

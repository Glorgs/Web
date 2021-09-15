import Head from 'next/head';
import Header from "../components/Header.jsx";
import Introduction from "../components/Introduction.jsx";
import Projects from "../components/Projects.jsx";
import {SectionDivider} from "../assets/js/StyledComponents.js";
import Technologies from "../components/Technologies.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
        <div className="lg:w-3/5 container lg:mx-auto p-5 lg:px-0 pb-20">
            <Head>
                <title>Jonathan Baudillon</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header/>

            <div className="mt-10 lg:mt-32">
                <Introduction />
            </div>

            <SectionDivider divider />

            <div id="projects">
                <Projects />
            </div>

            <SectionDivider divider />

            <div id="technologies">
                <Technologies />
            </div>

            <SectionDivider divider />

            <div id="about-me">
                <AboutMe />
            </div>

            <hr className="opacity-20 my-14" />

            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}

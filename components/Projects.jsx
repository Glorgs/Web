import {
    GridContainer,
    Hr,
    ProjectCard, ProjectDescription,
    ProjectTitle,
    SectionTitle
} from "../assets/js/StyledComponents.js";
import {translate} from "../assets/js/utils.js";
import {AiFillQuestionCircle, AiFillGithub} from "react-icons/ai";
import {BiGlobe} from "react-icons/bi";
import {IoLogoGooglePlaystore} from "react-icons/io5";
import {IoIosAppstore} from "react-icons/io";
import {FaItchIo} from "react-icons/fa";
import {IoLogoYoutube} from "react-icons/io";

const projects = [
    {
        title: translate('Unity 2D : Bridge Colossus'),
        description: 'Bridge Colossus est un jeu narratif avec des choix. Choisissez vos alliés pour décider du sort de la ville basse. Il a été réalisé pour une game jam de 3 jours à Gobelins.',
        image: './Bridge.png',
        tags: ['C#', 'Unity 2D', 'Inkle', 'Project Management'],
        links: [
            {
                name: 'itch',
                url: 'https://glorgs.itch.io/bridge-colossus'
            }
        ],
        type: translate(['school','École'])
    },
    {
        title: 'Unity 3D : Neon Pipe',
        description: 'Un run n gun à 360° pour 2 joueurs réalisé pendant une game jam de 2,5 jours aux Gobelins, inspiré par Jet Set Radio et Splatoon.',
        image: './NeonPipe.png',
        tags: ['C#', 'Unity 3D', 'Decal', 'Project Management'],
        links: [
            {
                name: 'itch',
                url: 'https://glorgs.itch.io/neon-pipe'
            }
        ],
        type: translate(['school','École'])
    },
    {
        title: translate('Portage de plusieurs jeux sur Dreamcast'),
        description: translate([
            `Porting of the PC games Wolflame, Zangeki Warp and SteelStrider on the Dreamcast console. Work done in total autonomy within the Rush On Games company in collaboration with the PixelHeart studio.`,
            `Portage des jeux PC Wolflame, Zangeki Warp et SteelStrider sur la console Dreamcast. Travail effectué en total autonomie au sein de l'entreprise Rush On Games en collaboration avec le studio PixelHeart.`
        ]),
        image: './game2.png',
        tags: ['C', 'C++', 'KallistiOS', 'Project Management'],
        links: [
            {
                name: 'website',
                url: 'https://www.pixelheart.eu/fr/accueil/'
            }
        ],
        type: 'pro'
    },
    {
        title: 'Portage de Satazius sur Dreamcast',
        description: translate([
            `Porting of the PC game Satazius to the Dreamcast console. Work done at Rush On Games in collaboration with the PixelHeart studio.`,
            `Portage du jeu PC Satazius sur la console Dreamcast. Travail effectué au sein de l'entreprise Rush On Games en collaboration avec le studio PixelHeart.`
        ]),
        image: './satazius.png',
        tags: ['C', 'C++', 'KallistiOS'],
        links: [
            {
                name: 'website',
                url: 'https://www.pixelheart.eu/fr/accueil/'
            }
        ],
        type: 'pro'
    },
    {
        title: '2D Zelda-like Game',
        description: `Création d'un jeu RPG 2D sur Unity. Gestion `,
        image: './game.png',
        tags: ['Unity 2D', 'C#', 'Tiled'],
        links: [
            {
                name: 'youtube',
                url: ''
            }
        ],
        type: 'pro'
    },
    {
        title: 'Visual Effect on Unity',
        description: translate([
            `Easily send messages and photos to your family. Your messages will be delivered manually to residents of selected establishments.`,
            `Création d'effets visuels sous Unity.`
        ]),
        image: './effect.PNG',
        tags: ['Unity', 'C#', 'VFX Graph', 'Shader Graph'],
        links: [
        ],
        type: 'perso'
    },
    {
        title: translate(['Maze in augmented reality','Labyrinthe en Réalité Augmentée']),
        description: translate([
            `Creation of a maze in augmented reality from a scheme on a sheet of paper. Analysis of the rotational movements of the sheet of paper with a camera in order to make a marble move in the generated maze.`,
            `Création d'un labyrinthe en réalité augmentée à partir d'un schéma sur une feuille de papier. Analyse des mouvements de rotation de la feuille de papier à l'aide d'une caméra afin de faire bouger une bille dans le labyrinthe généré.`
        ]),
        image: './maze.PNG',
        tags: ['OpenCV', 'Opengl', 'C++'],
        links: [
        ],
        type: translate(['school','École'])
    },
    {
        title: translate(['Lie detector','Détecteur de Mensonges']),
        description: translate([
            `Implementation of a web application for the realization of a lie detector. Recovery of sensor data and transmission to the application. Elaboration of a result from the data.`,
            `Mise en place d'une application web pour la réalisation d'un détecteur de mensonges. Récupération de données de capteurs et transmission à l'application. Élaboration d'un résultat à partir des données.`
        ]),
        image: './Detecteur.png',
        tags: ['PHP', 'HTML', 'Python'],
        links: [
        ],
        type: translate(['school','École'])
    },
    {
        title: translate(['Didactic Platform','Plateforme Didactique']),
        description: translate([
            `Implementation of an application for learning the C language. Creation of exercises, correction, sending of code and live compilation. Creation of a dashboard for management.`,
            `Mise en place d'une application pour l'apprentissage du langage C. Création d'exercices, correction, envoi de code et compilation en direct. Création d'un tableau de bord pour la gestion.`
        ]),
        image: './image.png',
        tags: ['PHP', 'HTML', 'Javascript', 'MySQL'],
        links: [
        ],
        type: translate(['school','École'])
    }
];

const iconOf = name => {
    if (name === 'website')
        return BiGlobe;
    else if (name === 'play-store')
        return IoLogoGooglePlaystore;
    else if (name === 'app-store')
        return IoIosAppstore;
    else if (name === 'github')
        return AiFillGithub;
    else if(name === 'itch')
        return FaItchIo;
    else if(nam === 'youtube')
        return IoLogoYoutube;
    else
        return AiFillQuestionCircle;
}

const titleOf = name => {
    if (name === 'website')
        return translate('Website|Site web');
    else if (name === 'play-store')
        return 'Play Store';
    else if (name === 'app-store')
        return 'App Store';
    else if (name === 'github')
        return 'Github';
    else
        return null;
}

const LinkIcon = ({ Icon, url }) => {
    return (
        <Icon onClick={() => window.open(url)} className="text-2xl opacity-80 cursor-pointer transition" />
    )
}

export default function Projects() {
    return (
        <div>
            <SectionTitle>{translate('Projects|Projets')}</SectionTitle>

            <div className="mt-14">
                <GridContainer width={320} noPadding>
                    {projects.map((project, index) => (
                        <a>
                        <ProjectCard key={index}>
                            <img src= {project.image} alt={project.title} style={{objectFit: 'cover', width: '100%', height: 200, zIndex: 0}} />
                            <ProjectTitle>{project.title}</ProjectTitle>

                            <Hr />

                            <div className="flex items-center mb-1" style={{paddingLeft: '1.5rem', paddingRight: '1.5rem'}}>
                                <div className="rounded-full bg-gray-200 text-black font-bold tracking-wider uppercase px-2 py-1">{project.type}</div>

                                <div className="flex items-center gap-2 mt-auto ml-auto"
                                     style={{borderBottomLeftRadius: 'inherit', borderBottomRightRadius: 'inherit', borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                                    {project.links.map((link, index) => (
                                        <button key={index} title={titleOf(link.name)} className="bg-gray-500 px-3 py-2 shadow-sm rounded-full transition hover:bg-yellow-500">
                                            <LinkIcon Icon={iconOf(link.name)} url={link.url} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <ProjectDescription>{project.description}</ProjectDescription>

                            <div className="text-center uppercase tracking-widest text-sm mt-auto mb-3">Stack</div>

                            <div className="flex items-center justify-around flex-wrap gap-x-5 gap-y-1 px-5 pt-2 pb-3">
                                {project.tags.map((tag, index) => (
                                    <div className="opacity-70 font-light" key={index}>{tag}</div>
                                ))}
                            </div>
                        </ProjectCard></a>
                    ))}
                </GridContainer>
            </div>
        </div>
    )
}

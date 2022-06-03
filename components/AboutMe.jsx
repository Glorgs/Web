import {GridContainer, SectionTitle, Title} from "../assets/js/StyledComponents.js";
import {translate} from "../assets/js/utils.js";
import moment from "moment";

const age = moment().diff(moment('1998-03-03'), 'years');

export default function AboutMe() {
    return (
        <div>
            <SectionTitle>{translate('About me|Profil')}</SectionTitle>

            <div className="mt-5 opacity-50 text-lg leading-8 font-light tracking-wider">
                {
                    translate([
                        `${age} years old computer engineer and developer. I like to discover new technologies and find solutions to problems. Teamwork is very important to me because it allows me to obtain high quality results.`,
                        `Ingénieur en informatique de ${age} ans et développeur. J'aime découvrir de nouvelles technologies et trouver des solutions aux problèmes rencontrés. Le travail d'équipe est primordial pour moi car il permet d'obtenir des résultats d'une grande qualité.`
                    ])
                }
            </div>

            <div className="mt-8">
                    <button onClick={() => window.open('/cv_jonathan_baudillon.pdf')} className="bg-gradient-to-r from-blue-900 to-blue-400 px-14 py-3 rounded-full hover:scale-105 active:scale-90 transition transform duration-150">
                        <span className="text-xl font-bold tracking-wider">{translate('Download my Resume|Télécharger mon CV')}</span>
                    </button>
            </div>

            <div className="mt-10">
                <GridContainer width={120} noPadding>
                    <div>
                        <Title>2015</Title>
                        <div className="mt-2 opacity-70 text-sm leading-6 tracking-wider">
                            Baccalauréat Scientifique spécialité Informatique
                        </div>
                    </div>
                    <div>
                        <Title>2015-2017</Title>
                        <div className="mt-2 opacity-70 text-sm leading-6 tracking-wider">
                            Ecole Préparatoire (Polytech)
                        </div>
                    </div>
                    <div>
                        <Title>2017-2020</Title>
                        <div className="mt-2 opacity-70 text-sm leading-6 tracking-wider">
                            Diplôme d’Ingénieur en Informatique spécialisé en Réalité Virtuelle et Augmentée (Polytech)
                        </div>
                    </div>
                    <div>
                        <Title>2021-2022</Title>
                        <div className="mt-2 opacity-70 text-sm leading-6 tracking-wider">
                            Mastère Spécialisé Interactive Digital Experiences Designer (Gobelin / CNAM ENJMIN)
                        </div>
                    </div>
                </GridContainer>
            </div>
        </div>
    )
}

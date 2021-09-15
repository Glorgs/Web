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
                        `${age} years old computer engineer and full stack web developer using the latest technologies. I learn and adapt quickly. I emphasize the rigor and the quality brought to my productions. I like teamwork above all because learning is a collective game.`,
                        `Ingénieur en informatique de ${age} ans et développeur. J'aime découvrir de nouvelles technologies et trouver des solutions aux problèmes rencontrés. Le travail d'équipe est primordial pour moi car il permet d'obtenir des résultats d'une grande qualité.`
                    ])
                }
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
                            Ecole Préparatoire (Peip)
                        </div>
                    </div>
                    <div>
                        <Title>2017-2020</Title>
                        <div className="mt-2 opacity-70 text-sm leading-6 tracking-wider">
                            Diplôme d’Ingénieur en Informatique spécialisé en Réalité Virtuelle et Augmentée
                        </div>
                    </div>
                </GridContainer>
            </div>
        </div>
    )
}

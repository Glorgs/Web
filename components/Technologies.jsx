import {translate} from "../assets/js/utils.js";
import {SectionTitle} from "../assets/js/StyledComponents.js";

const technologies = [
    {
        name: 'C',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png',
        link: 'https://docs.microsoft.com/fr-fr/cpp/c-language/?view=msvc-160'
    },
    {
        name: 'C++',
        icon: 'https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png',
        link: 'https://docs.microsoft.com/fr-fr/cpp/cpp/?view=msvc-160'
    },
    {
        name: 'C#',
        icon: 'https://camo.githubusercontent.com/8d56e87edf99e89bfc457cd62462e0b7aae19e6b197b1df5c542d474d8d76f81/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67',
        link: 'https://docs.microsoft.com/fr-fr/dotnet/csharp/'
    },
    {
        name: 'Unity',
        icon: 'https://icon-library.com/images/unity-icon/unity-icon-5.jpg',
        link: 'https://unity.com'
    },
    {
        name: 'Tiled',
        icon: 'https://static.macupdate.com/products/62323/l/tiled-logo.png?v=1628662406',
        link: 'https://www.mapeditor.org/'
    },
    {
        name: 'Java',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/java-3628857-3029997.png',
        link: 'https://www.java.com'
    },
    {
        name: 'Python',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png',
        link: 'https://www.python.org/'
    },
    {
        name: 'Photoshop',
        icon: './image7.png',
        link: 'https://www.adobe.com/fr/products/photoshop.html'
    }
]

export default function Technologies() {
    return (
        <div>
            <SectionTitle>{translate('Technologies|Technologies')}</SectionTitle>

            <div className="mt-5 opacity-50 text-lg leading-8 font-light tracking-wider">
                {translate([
                    `I have had the opportunity to work on many technologies in development.`,
                    `J'ai eu l'occasion de travailler sur de nombreuses technologies dans le développement.`
                ])}
            </div>

            <div className="technologies mt-10 lg:gap-8 gap-y-8">
                {technologies.map((technology, index) => (
                    <div onClick={() => window.open(technology.link)} key={index} className="flex flex-col justify-center shadow-light text-center cursor-pointer hover:underline rounded p-5" style={{width: 150, height: 150}}>
                        <div>
                            <img src={technology.icon} style={{objectFit: 'cover', width: 50, height: 50}} alt={technology.name} className="mx-auto" />
                            <div className="mt-3">{technology.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

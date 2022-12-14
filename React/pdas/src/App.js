import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>

            <img src={AlexaImage} />
            <img src={SiriImage} />

            <ProfileCard title="Alexa" handle="@Alexa99" img src={AlexaImage} />
            <ProfileCard title="Cortana" handle="@Cortana32" />
            <ProfileCard title="Siri" handle="@Siri01" />
        </div>
    )
}

export default App
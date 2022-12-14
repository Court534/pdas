import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
	return (
  	<div>
			<section className="hero is-info">
				<div className="hero-body">
					<p className="title">Personal Digital Assistants</p>
				</div>
			</section>

				<div className="container">
					<section className="section">
						<div className="columns">
							<div className="column is-4">
      					<ProfileCard 
									title="Alexa" 
									handle="@Alexa99" 
									image={AlexaImage}
									description="Alexa is a virtual assistant developed by Amazon. It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system."
								/>
							</div>
							<div className="column is-4">
        				<ProfileCard 
									title="Cortana" 
									handle="@Cortana32" 
									image={CortanaImage} 
									description="Cortana is a virtual assistant created by Microsoft for Windows 10, Windows 10 Mobile, Windows Phone 8.1, Invoke smart speaker, Microsoft Band, Xbox One, iOS, Android, Windows Mixed Reality, and Amazon Alexa. Cortana is capable of voice and text input, and can answer questions, make recommendations, and perform actions such as opening apps and setting reminders."
								/>
							</div>
							<div className="column is-4">
        				<ProfileCard 
									title="Siri" 
									handle="@Siri01" 
									image={SiriImage} 
									description="Siri is a virtual assistant developed by Apple Inc. that is available on Apple devices. Siri can understand natural language voice commands and complete tasks such as making phone calls, sending text messages, opening apps, and setting reminders. Siri can also answer questions, search the web, and provide information such as sports scores, news, and weather."
								/>
							</div>
						</div>
					</section>
				</div>
      </div>
  )
}

export default App
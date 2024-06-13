import ProfileCard from "./ProfileCard";
import Alexa from './images/alexa.png';
import Siri from './images/siri.png';
import Cortana from './images/cortana.png';
import 'bulma/css/bulma.css';
function App() {
    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="Alexa" handle="@alexa99" description="Alexa made by Amazon" image={Alexa} alt="alexa"/>
                        </div>
                        <div className="column is-4">    
                            <ProfileCard title="Siri" handle="@siri101" description="Siri made by Apple" image={Siri} alt="siri"/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Cortana" handle="@cortana12" description="Cortana made by Microsoft" image={Cortana} alt="cortana"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;
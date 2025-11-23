import HeroSection from './components/HeroSection'
import BioSection from './components/BioSection'
import TargetAudienceSection from './components/TargetAudienceSection'
import ImrovisoSection from './components/ImrovisoSection'
import ChecklistSection from './components/ChecklistSection'
import EventDetailsSection from './components/EventDetailsSection'
import OfferSection from './components/OfferSection'

function App() {
    return (
        <div className="bg-[#050505] text-white overflow-x-hidden">
            <HeroSection />
            <BioSection />
            <TargetAudienceSection />
            <ImrovisoSection />
            <ChecklistSection />
            <EventDetailsSection />
            <OfferSection />
        </div>
    )
}

export default App

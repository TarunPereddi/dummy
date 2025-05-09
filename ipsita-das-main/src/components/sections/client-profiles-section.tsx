import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientProfilesSection() {
  const profiles = [
    {
      title: "The High-Achieving Professional Partner",
      profile: "Mid-to-senior level corporate professionals, entrepreneurs, or creatives who are thriving in their careers but feel relational friction at home—especially with a spouse or close family member.",
      painPoint: "You are used to excelling everywhere else, but misunderstandings in close relationships leave you feeling frustrated or powerless.",
      desire: "You want clear, emotionally intelligent tools to de-escalate conflict and protect what matters most—without sacrificing your sense of self.",
      why: "It gives you a structured, thoughtful way to address miscommunication without therapy-speak or guesswork."
    },
    {
      title: "The Ambitious Working Parent",
      profile: "Career-focused individuals balancing demanding jobs with the responsibilities of parenthood, struggling to feel present in either role.",
      painPoint: "You constantly feel pulled in multiple directions, with guilt that you're not doing enough at work or at home.",
      desire: "You want practical strategies to create meaningful connections with your children while still honoring your professional ambitions.",
      why: "It provides a framework for intentional time management and teaches you how to have quality interactions even when time is limited."
    },
    {
      title: "The Relationship Rebuilder",
      profile: "People who have experienced a significant relationship breakdown and are committed to rebuilding trust and communication.",
      painPoint: "Past conflicts have created patterns of misunderstanding that make even simple conversations feel like walking through a minefield.",
      desire: "You want to move beyond blame and defensiveness to create a foundation of mutual respect and understanding.",
      why: "It offers proven techniques for healing communication wounds and establishing new patterns that support genuine connection."
    },
    {
      title: "The Boundary Navigator",
      profile: "Empathetic individuals who excel at supporting others but struggle to communicate their own needs in personal and professional settings.",
      painPoint: "You find yourself overcommitting, feeling resentful, or burning out because you can't effectively express your limits.",
      desire: "You want to advocate for yourself with confidence while maintaining positive relationships.",
      why: "It teaches specific language and frameworks for setting boundaries that feel firm yet kind."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === profiles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-16">
          <h2 className="bg-gradient-to-r from-[#E5ABCE] to-[#6D87C4] bg-clip-text text-transparent text-5xl md:text-6xl font-bold">
            Who is it for?
          </h2>
          
          <div className="flex gap-4">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center transition-colors hover:bg-gray-100"
              aria-label="Previous profile"
            >
              <ChevronLeft className="w-13 h-13 text-black " />
            </button>
            
            <button
              onClick={goToNext}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center transition-colors hover:bg-gray-100"
              aria-label="Next profile"
            >
              <ChevronRight className="w-13 h-13 text-black" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-2/5">
            <h3 className="text-3xl font-bold text-gray-800 mb-0">
              {profiles[activeIndex].title}
            </h3>
          </div>

          <div className="md:w-3/5">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700">Profile:</h4>
              <p className="text-gray-600">
                {profiles[activeIndex].profile}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700">Pain Point:</h4>
              <p className="text-gray-600">
                {profiles[activeIndex].painPoint}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700">Desire:</h4>
              <p className="text-gray-600">
                {profiles[activeIndex].desire}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-700">Why this Masterclass?</h4>
              <p className="text-gray-600">
                {profiles[activeIndex].why}
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-6 space-x-2 md:ml-4">
          {profiles.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-[#E5ABCE]" : "bg-gray-300"
              }`}
              aria-label={`View profile ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
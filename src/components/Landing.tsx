import SectionLanding from '@/utilities/SectionLanding'
import  discover  from '../assets/apps.svg'
import custom from '../assets/custom.svg'
import social from '../assets/social.svg'
import stats from '../assets/stats.svg'

const Landing = () => {
  return (
    <div className='flex flex-col bg-bglanding rounded-lg mt-14 mx-52'>
        <div className='flex flex-col items-center gap-6 mt-16 font-bold'>
            <h1 className='text-mjtitleldg text-3xl'>The next-generation anime platform</h1>
            <h4 className='text-spanldg justify-center text-center text-xl max-w-sm '>Track, share, and discover your favorite anime and manga with Anilist</h4>
        </div>
        <div className= 'flex flex-wrap justify-center items-center py-15 px-30 w-'>
        <SectionLanding svg={discover} sectionTitle={"Discover your obcessions"} sectionText={"What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics"}/>
        <SectionLanding svg={custom} sectionTitle={"Bring Anilist anywhere"} sectionText={"keep track your progress on-the-go with one of many Anilist apps across iOS, Android, macOS, and Windows."}/>
        <SectionLanding svg={social}sectionTitle={"Join the conversation"} sectionText={"Shake your thoughts with our thriving community, make friends, socialize, and receive recommendations."}/>
        <SectionLanding svg={stats}sectionTitle={"Tweak it your liking"} sectionText={"Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode."}/>
        </div>
    </div>
  )
}

export default Landing
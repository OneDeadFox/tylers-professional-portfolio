import wow from './images/pathway2.png'
import gamerPad from './images/gamerPadTemp.png'
import techBlog from './images/techBlog.PNG'
import weatherApp from './images/weatherApp.PNG'
import peerThroughDepths from './images/peerThroughDepths.PNG'
import blank from './images/blank.jpg'

export const v = {
    headerHeight: 9,
    bodyHeight: 85,
    footerHeight: 6,
    headerColor: `#7DAFB1`,
    bodyColor: `#B0A3D4`,
    highlights: `#CEBACF`,
    accent: `#C6AFB1`,
    accent2: `#C6AFB1BB`,
    shadows: `#65655E99`,
    cards: [
        {
            img: `${wow}`,
            url: "https://world-of-wordcraft.herokuapp.com/",
            repo: "https://github.com/OneDeadFox/world-of-wordcraft",
            description: "World of WordCraft"
        },
        {
            img: `${gamerPad}`,
            url: "https://github.com/maximusDecimalusMeridius/gamerPad",
            repo: "https://github.com/maximusDecimalusMeridius/gamerPad",
            description: "GamerPad"
        },
        {
            img: `${techBlog}`,
            url: "https://polar-gorge-17679.herokuapp.com/",
            repo: "https://github.com/OneDeadFox/blockheads-tech-blog",
            description: "Tech Blog"
        },
        {
            img: `${weatherApp}`,
            url: "https://onedeadfox.github.io/challenge-6-5-day-forecast/",
            repo: "https://github.com/OneDeadFox/challenge-6-5-day-forecast",
            description: "Weather App"
        },
        {
            img: `${peerThroughDepths}`,
            url: "https://github.com/OneDeadFox/peer-through-depths",
            repo: "https://github.com/OneDeadFox/peer-through-depths",
            description: "Side Project"
        },
        {
            img: `${blank}`,
            url: "#",
            repo: "",
            description: "Coming Soon"
        }
    ]
}


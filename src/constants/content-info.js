import Kickstart from "@assets/kickstart-icon.svg";
import Onboard from "@assets/onboard-icon.svg";
import Engage from "@assets/engage-icon.svg";
import AnnaOlsen from "@assets/Anna_Olsen.svg";
import DillonKydd from "@assets/Dillon_Kydd.svg";
import KasMoss from "@assets/Kas_Moss.svg";
import JassirJonis from "@assets/Jassir_Jonis.svg";
import JasonKwon from "@assets/Jason_Kwon.svg";
import AlexRose from "@assets/Alex_Rose.svg";
import LizzieUlrich from "@assets/Lizzie_Ulrich.svg";
import Star from "@assets/star.svg";

export const CONTENT_INFO_BLOCK_1 = {
    img: Kickstart,
    title: "Kickstart an organization with your co-founders",
    content: "It's the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey."
}

export const CONTENT_INFO_CARD_1 ={
    title: "Members",
    members: [
    {
    img: DillonKydd,
    member: "Dillon Kydd",
    shares: "100 SHARES",
    }, 
    {
    img: AnnaOlsen,
    member: "Anna Olsen",
    shares: "100 SHARES",
    }, 
    {
    img: KasMoss,
    member: "Kas Moss",
    shares: "100 SHARES",
    }
]}

export const CONTENT_INFO_BLOCK_2 = {
    img: Onboard,
    title: "Onboard users, investors and advisors as you grow",
    content: "You've bootstrapped and delivered an MVP, and some investors and advisors are interested in having a chat with you. As an Open Enterprise, you can onboard them seamlessly into your digital organization and align them with your success."
}

export const CONTENT_INFO_CARD_2 ={
    investorImg: JassirJonis,
    investorTitle: "Jassir Jonis",
    subtitle: "Pre-seed angel investor",
    investorContent: "Hey guys, love what you're doing and I'm convinced that together we'll achieve amazing things.",
    commit: "COMMIT",
    commitValue: "10,000 DAI",
    shares: "SHARES",
    numShares: "20",
    voteBtn: "Go to vote",
    voteBtnStyle: "vote__btn"
}

export const CONTENT_INFO_BLOCK_3 = {
    img: Engage,
    title: "Engage highly committed contributors",
    content: "You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares."
}

export const CONTENT_INFO_CARD_3_A = {
    articleTitle: "Write a how-to on Open Enterprise",
    articleContent: "Looking for an amazing copywriter using Open Enterprise to help us write an article on how to get started.",
    shareBtn: "1 SHARE"
}

export const CONTENT_INFO_CARD_3_B = {
    applicantsTitle: "3 applicants",
    starImg: Star,
    profileBtn: "View profile"
}

export const CONTENT_INFO_CARD_3_APPLICANTS = [
    {
    applicantImg: JasonKwon,
    applicantRole: "Front-end Developer",
    member: "Jason Kwon",
    stars: 4.8,
    applicantCommits: "6 commits"
    }, 
    {
    applicantImg: AlexRose,
    member: "Alex Rose",
    applicantRole: "UX Writer",
    stars: 4.5,
    applicantCommits: "4 commits"
    }, 
    {
    applicantImg: LizzieUlrich,
    member: "LizzieUlrich",
    applicantRole: "Game Design",
    stars: 4.2,
    applicantCommits: "2 commits"
    } 
]


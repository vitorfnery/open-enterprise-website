import Workforce from "@assets/workforce-icon.svg";
import Resilience from "@assets/resilience-icon.svg";
import Meritocratic from "@assets/meritocratic-icon.svg";
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

export const CONTENT_HEADER = {
    title: "Reimagining what it means to work", 
    content: "RTeams and communities using Open Enterprise fundamentally unlock a reality of work that reimagines how people engage in economic opportunity, meeting the demands and expectations of a modern organization.", 
}

export const CONTENT_CARDS = [{
    img: Workforce,
    title: "Modern workforce",
    content: "Multistakeholder governance aligns employees with the organization's wider community.",
},
{
    img: Meritocratic,
    title: "Meritocratic by design",
    content: "Tokenized ownership aligns deeply committed individuals with the organization's success.",
},
{
    img: Resilience,
    title: "Engineered for resilience",
    content: "Open Enterprise supports best practices in sociocratic management.",
}
]

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

export const CONTENT_TASKS_HEADER = {
    title: "Help us improve Open Enterprise", 
    content: "As an Open Enterprise ourselves, we are actively looking for new talent to join our mission of improving and delivering the Open Enterprise model to the world. Apply for open tasks and earn a stake in our success.", 
}

export const  TASKS_PER_ROW = 3

export const TASKS = [
    {
        title: "Ideate a list of features based on the Sociocracy model",
        content: "We're looking for someone interested in business theory and research that'll help us bridge the gap between our s...",
        info: "5 AUT",
        date: "Apply by May 15"
    },
    {
        title: "Update documentation with FAQs",
        content: "Review our community chat for the most frequently asked questions and document answers for our product docs.",
        info: "10 AUT",
        date: "Apply by May 18"
    },
    {
        title: "Tutorial video series",
        content: "Create a series of video tutorials that cover everything from start to finish on using Open Enterprise.",
        info: "40 AUT",
        date: "Apply by May 20"
    },
    {
        title: "Design marketing materials for new product launch",
        content: "Collaborate with our marketing team to create visually appealing materials to promote our upcoming product launch.",
        info: "15 AUT",
        date: "Apply by May 25"
    },
    {
        title: "Conduct user research interviews",
        content: "Gather user feedback and insights through interviews to inform product improvements and feature development.",
        info: "20 AUT",
        date: "Apply by May 30"
    },
    {
        title: "Implement responsive design for website",
        content: "Make our company website responsive across different devices and screen sizes for an improved user experience.",
        info: "30 AUT",
        date: "Apply by June 5"
    },
    {
        title: "Develop automated testing scripts",
        content: "Write test scripts to automate the testing process and ensure the quality of our software products.",
        info: "25 AUT",
        date: "Apply by June 10"
    },
    {
        title: "Optimize website performance for faster loading",
        content: "Identify and implement optimizations to improve the loading speed and performance of our website.",
        info: "10 AUT",
        date: "Apply by June 15"
    },
    {
        title: "Create engaging social media content",
        content: "Produce creative and engaging content for our social media platforms to increase brand awareness and user engagement.",
        info: "15 AUT",
        date: "Apply by June 20"
    }
]

export const MORE_LESS_BTN = {
    more: "View more",
    less: "Show less"
}
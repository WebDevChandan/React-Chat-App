import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        if (request.method !== "POST") {
            return NextResponse.json(
                { error: "Method Not Allowed" },
                { status: 405 },
            )
        }

        // await prisma.personalInfo.deleteMany();
        // await prisma.education.deleteMany();
        // await prisma.testimonial.deleteMany();
        // await prisma.experience.deleteMany();
        // await prisma.certificate.deleteMany();
        // await prisma.certificateDetail.deleteMany();
        // await prisma.portfolio.deleteMany();
        // await prisma.portfolioCategory.deleteMany();
        // await prisma.portfolioDetail.deleteMany();
        // await prisma.admin.deleteMany();


        // await prisma.personalInfo.create({
        //     data: {
        //         name: "Chandan Kumar",
        //         myImages: [
        //             "https://res.cloudinary.com/dnwf21zlv/image/upload/v1724091496/myImages/Chandan_Kumar.webp",
        //             "https://res.cloudinary.com/dnwf21zlv/image/upload/v1724091496/myImages/Chandan_Kumar.webp"],
        //         roles: ["Web Developer", "Java Developer"],
        //         about: "<p>Hello, My name is Chandan Kumar. I am a <strong>Full-Stack Web/Java Developer</strong> from Jharkhand, India. I like to code things from scratch and enjoy bringing ideas to life in the browser. I value simple content structure, clean design patterns, and thoughtful interactions. I've done remote work for agencies, consulted for startups, and also worked as a Freelancer in a various online digital platform.</p><p></p><p>I love in turning People's Imagination into Reality. Feel free to take a look at my latest projects on <a rel='noopener noreferrer nofollow' href='/portfolio'><strong>Portfolio Page</strong></a>.</p><p></p><p>Remotely available UTC-1 to UTC+05:30 - <a rel='noopener noreferrer nofollow' href='mailto:hirechandan@gmail.com'><strong>hirechandan@gmail.com</strong></a></p>",
        //         resume: "myResume.pdf",
        //         socialLinks: [
        //             {
        //                 label: "Linkedin",
        //                 link: "https://www.linkedin.com/in/webdevchandan/"
        //             }, {
        //                 label: "Leetcode",
        //                 link: "https://leetcode.com/WebDevChandan/",
        //             }, {
        //                 label: "Github",
        //                 link: "https://github.com/WebDevChandan",
        //             }, {
        //                 label: "Twitter",
        //                 link: "https://twitter.com/WebChandan",
        //             }
        //         ],
        //         skills: [
        //             {
        //                 name: "HTML",
        //                 level: "90",
        //             },
        //             {
        //                 name: "CSS",
        //                 level: "75",
        //             },
        //             {
        //                 name: "Javascript",
        //                 level: "70",
        //             },
        //             {
        //                 name: "Bootstrap",
        //                 level: "85",
        //             },
        //             {
        //                 name: "Jquery",
        //                 level: "60",
        //             },
        //             {
        //                 name: "PHP",
        //                 level: "65",
        //             },
        //             {
        //                 name: "SQL",
        //                 level: "85",
        //             },
        //             {
        //                 name: "WordPress",
        //                 level: "90",
        //             },
        //         ],
        //         contact: [
        //             {
        //                 label: "WhatsApp",
        //                 detail: "+91 9297587411",
        //             }, {
        //                 label: "email",
        //                 detail: "hirechandan@gmail.com",
        //             }, {
        //                 label: "address",
        //                 detail: "Chas-Bokaro, Jharkhand- 827013",
        //             },
        //         ],
        //     }
        // })

        // await prisma.education.createMany({
        //     data: [
        //         {
        //             to: "2023",
        //             from: "2019",
        //             level: "Bachelor of Technology In Computer Science & Soft. Engineering",
        //             info: "Currently, I'm pursuing my B.Tech Degree in Computer Science and Software Engineering from <a href = 'https://cgu-odisha.ac.in/' target = '_blank' rel = 'nofollow' > C.V.Raman Global University</a > since August 2019. This is an engineering and management institution located in Bhubaneswar, Odisha.",
        //             institution: {
        //                 title: "C.V. Raman Global University",
        //                 location: "Odisha, India"
        //             },
        //         },
        //         {
        //             to: "2019",
        //             from: "2017",
        //             level: "Higher Secondary Education",
        //             info: "I've completed my Intermediate with Science Stream(Physics, Chemistry, Maths and Computer Fundamentals) from CBSE Board in India.I studied from<label> Crescent PublicSchool</label > (Affiliated from CBSE Board), SEC - VI, BOKARO STEEL CITY, JHARKHAND.",
        //             institution: {
        //                 title: "Crescent Public School",
        //                 location: "Jharkhand, India"
        //             }
        //         },
        //         {
        //             to: "2017",
        //             from: "2015",
        //             level: "Secondary Education",
        //             info: "I've completed my Matriculation from CBSE Board in India. I studied at <label> Crescent Public School</label > (Affiliated from CBSE Board), SEC - VI, BOKARO STEEL CITY, JHARKHAND.",
        //             institution: {
        //                 title: "Crescent Public School",
        //                 location: "Jharkhand, India"
        //             }
        //         },
        //     ]
        // })


        // await prisma.testimonial.createMany({
        //     data: [
        //         {
        //             name: "Lori Wolfe-1",
        //             img: "female.png",
        //             region: "USA",
        //             feedback: "Chandankumar went above and beyond. Great to work with. Communication was awesome, and he fixed my broken blog! Attitude was more than GREAT, always ready and willing. I will be back. SUPER DEVELOPER!",
        //             active: false,
        //         },
        //         {
        //             name: "Lori Wolfe-2",
        //             img: "female.png",
        //             region: "USA",
        //             feedback: "Chandankumar went above and beyond. Great to work with. Communication was awesome, and he fixed my broken blog! Attitude was more than GREAT, always ready and willing. I will be back. SUPER DEVELOPER!",
        //             active: true,
        //         },
        //         {
        //             name: "Lori Wolfe-3",
        //             img: "female.png",
        //             region: "USA",
        //             feedback: "Chandankumar went above and beyond. Great to work with. Communication was awesome, and he fixed my broken blog! Attitude was more than GREAT, always ready and willing. I will be back. SUPER DEVELOPER!",
        //             active: false,
        //         },
        //     ]
        // })


        // await prisma.experience.createMany({
        //     data: [
        //         {
        //             from: "May, 2019",
        //             to: "Current",
        //             role: "Full-Stack & WordPress developer",
        //             experienceDetail: "Currently, I'm working at Fiverr as Freelancer by providing my services as Front End Developer over 100+ clients per month.Fiverr is an Israeli online marketplace for freelance services.The company provide a platform for freelancers to offer services to customers worldwide.",
        //             organization: {
        //                 title: "Fiverr",
        //                 location: "Israel",
        //             }
        //         },
        //         {
        //             from: "Oct, 2017",
        //             to: "Nov, 2017",
        //             role: "WordPress Developer Intern",
        //             experienceDetail: "I've worked remotely with this company as a Senior WordPress Developer to build a Car Rental Website for their business. This is a Car Rental Service providing Company in over 3+ states across India which are located in Uttar Pradesh, India.",
        //             organization: {
        //                 title: "All India Tour & Taxi",
        //                 location: "India",
        //             }
        //         },
        //     ]
        // })


        // //CERTIFICATE SECTION:-
        // await prisma.certificateDetail.createMany({
        //     data: [
        //         {
        //             certificateHeaderDetail: {
        //                 authority: "HackerRank",
        //                 issueDate: "08 Nov, 2021",
        //                 expiryDate: "No Expiry",
        //                 skill: "CSS",
        //                 link: "https://google.com",
        //                 description: "It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others.",
        //             },
        //             certificateMainDetail: {
        //                 largeImage: "HackerRank-Verfied-CSS-Certificate.png",
        //                 imgText: "HackerRank CSS Certificate",
        //             }
        //         },
        //     ]
        // })

        // const certificateDetails = await prisma.certificateDetail.findMany();
        // const firsCertificateDetail_Id =
        //     certificateDetails.find((_certificateDetail, index) => index === 0)?.slug || "";

        // //Certificate Card:
        // await prisma.certificate.createMany({
        //     data: [
        //         {
        //             label: "CSS",
        //             src: "HackerRank-Verfied-CSS-Certificate.png",
        //             info: "HackerRank Verfied CSS Certificate",
        //             details_id: firsCertificateDetail_Id,
        //         }
        //     ]
        // })


        // //PORTFOLIO SECTION:-
        // await prisma.portfolioDetail.createMany({
        //     data: [
        //         {
        //             portfolioHeaderDetail: {
        //                 from: "Apr, 2021",
        //                 to: "Jul , 2021",
        //                 client: "Chandan Kumar",
        //                 link: "https://www.google.com",
        //                 tools: ["HTML", "CSS", "JavaScript"],
        //                 demo: "Email: Demo@demo.com / Pass: demo",
        //                 description: "Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Officiis provident, vitae iure tempora voluptatum quasi sequi atque. Iusto doloremque, vero!",
        //             },

        //             portfolioMainDetail: {
        //                 imgSrc: ["/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp"],
        //                 altText: "GoChat Admin Panel",
        //                 titleText: "Admin Panel",
        //                 webFrameLink: "https://webdevchandan.github.io/text-speech-converter/"
        //             }
        //         },
        //         {
        //             portfolioHeaderDetail: {
        //                 from: "Apr, 2022",
        //                 to: "Jul , 2023",
        //                 client: "Chandan Kumar",
        //                 link: "https://www.google.com",
        //                 tools: ["HTML", "CSS", "JavaScript"],
        //                 demo: "Email: Demo@demo.com / Pass: demo",
        //                 description: "Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Officiis provident, vitae iure tempora voluptatum quasi sequi atque. Iusto doloremque, vero!",
        //             },

        //             portfolioMainDetail: {
        //                 imgSrc: ["/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp"],
        //                 altText: "GoChat Admin Panel",
        //                 titleText: "Admin Panel",
        //                 webFrameLink: "https://webdevchandan.github.io/text-speech-converter/"
        //             }
        //         },
        //     ]
        // })

        // const portfolioDetails = await prisma.portfolioDetail.findMany();
        // const firstPortfolioDetail_Id =
        //     portfolioDetails.find((_portfolioDetail, index) => index === 0)?.slug || "";
        // const secondPortfolioDetail_Id =
        //     portfolioDetails.find((_portfolioDetail, index) => index === 1)?.slug || "";

        // await prisma.portfolioCategory.createMany({
        //     data: [
        //         {
        //             label: "All",
        //             active: true,
        //         },
        //         {
        //             label: "Web application",
        //             active: false,
        //         }, {
        //             label: "WordPress",
        //             active: false,
        //         }, {
        //             label: "E-Commerce",
        //             active: false,
        //         }, {
        //             label: "Web Design & Development",
        //             active: false,
        //         }
        //     ]
        // })

        // const categories = await prisma.portfolioCategory.findMany();
        // const webCategory_Id =
        //     categories.find(category => category.label === "Web application")?.id || "1";
        // const wordPressCategory_Id =
        //     categories.find(category => category.label === "WordPress")?.id || "1";


        // // Portfolio Card:-
        // await prisma.portfolio.createMany({
        //     data: [
        //         {
        //             title: "GoChat",
        //             src: "/img/portfolio/thumb/project-1/goChat_thumb.webp",
        //             altText: "GoChat by MoviesRocker.co",
        //             category_id: webCategory_Id,
        //             details_id: firstPortfolioDetail_Id,
        //         },
        //         {
        //             title: "GoChat (WordPress)",
        //             src: "/img/portfolio/thumb/project-1/goChat_thumb.webp",
        //             altText: "GoChat by MoviesRocker.co",
        //             category_id: wordPressCategory_Id,
        //             details_id: secondPortfolioDetail_Id,
        //         }
        //     ]
        // })


        // await prisma.admin.create({
        //     data: {
        //         firstName: "Chandan",
        //         lastName: "Kumar",
        //         email: "shreeck1999@gmail.com",
        //         password: "$2a$12$Xzl2sI4r0gpd8iN56XKTuuz9emRNrDwQ.LBazHAMtqN8Hmg7NYine"
        //     }
        // })

        return NextResponse.json(
            { name: "Database Seeded Successfully" },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 503 },
        )
    }
}

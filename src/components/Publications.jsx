import React, { useState } from "react";
import "../css/Publications.css";

import sketchar from "../assets/paper/sketchar.pdf";
import sketchar_slide from "../assets/paper/sketchar_slide.pdf";
import art from "../assets/paper/art.pdf";
import brain from "../assets/paper/brain.pdf";
import brain_slide from "../assets/paper/brain_slide.pdf";
import clay from "../assets/paper/clay.pdf";
import emo from "../assets/paper/emo.pdf";
import flow from "../assets/paper/flow.pdf";
import capace from "../assets/paper/capace.pdf";
import future from "../assets/paper/future.pdf";
import image from "../assets/paper/image.pdf";
import lifeeling from "../assets/paper/lifeeling.pdf";
import lifeeling_poster from "../assets/paper/lifeeling_poster.pdf";
import tarot from "../assets/paper/tarot.pdf";
import vistoria from "../assets/paper/vistoria.pdf";
import chinese from "../assets/paper/chinese.pdf";
import tuntun from "../assets/paper/tuntun.pdf";
import tuntun_poster from "../assets/paper/tuntun_poster.pdf";
import carbon_poster from "../assets/paper/carbon_poster.pdf";

import sketchar_img from "../assets/paper_image/sketchar.png";
import future_img from "../assets/paper_image/future.png";
import art_img from "../assets/paper_image/art.png";
import capace_img from "../assets/paper_image/capace.png";
import tarot_img from "../assets/paper_image/tarot.png";
import clay_img from "../assets/paper_image/clay.png";
import chinese_img from "../assets/paper_image/chinese.png";
import emo_img from "../assets/paper_image/emo.png";
import image_img from "../assets/paper_image/image.png";
import flow_img from "../assets/paper_image/flow.png";
import tuntun_img from "../assets/paper_image/tuntun.png";
import brain_img from "../assets/paper_image/brain.png";
import vistoria_img from "../assets/paper_image/vistoria1.png";
import lifeeling_img from "../assets/paper_image/lifeeling.png";
import carbon_img from "../assets/paper_image/carbon.png";

const MY_NAME = "Long Ling";

const publications = [

    {
        title:
            "\"The answer is already in my mind\": How People Tell Their Own Fortunes Using GenAI for Personal Confirmation and Expression",
        abstract: "People want to predict their futures with divination, which frequently guides their actions with a spiritual rationale, providing comfort for certain outcomes, or amusement for unexpected predictions. Seers often use technologies like tarot cards and Ouija boards to engage people during the fortune-telling process, but recent advances in natural-language-based systems have provided alternative means to interact with data-sources for spiritual prediction-making. To understand the ways people read and express their own futures with GenAI tools, we conducted a workshop (N=44) where participants probed GenAI tools for tarot-based divination, then expressed that future textually and visually using GenAI. We found that participants co-constructed spiritual belief with GenAI for self-reflection, paying selective attention to self-confirming predictions. They then co-created future-self narratives by strategically prompting for visual representations based on desired outcomes. This work shows how people actively negotiate meaning with technology rather than passively accept predictions in applications related to spiritual aims.",
        authors: [
            {name: "Long Ling", link: "https://lucy-ling.com"},
            {name: "Qi Gong", link: "https://scholar.google.ch/citations?hl=en&user=UmuqMoMAAAAJ"},
            {name: "Xiyu Zheng"},
            {name: "Ray LC", link: "https://raylc.org/", role: "advisor"},
        ],
        venues: [
            {name: "CHI '26", type: "conference"},
        ],
        links: {
            // acm: "https://dl.acm.org/doi/abs/10.1145/3677102",
            pdf: tarot,
            // arxiv: "https://arxiv.org/abs/2508.12333",
            // video: "https://dl.acm.org/doi/suppl/10.1145/3677102/suppl_file/v8chip337.mp4",
            // msg: "🚧 Video coming soon...",
        },
        image: tarot_img,
        tags: ["Selected","In Submission","Human-AI Collaboration", "Cultural & Philosophical","Understanding People"]
    },
    {
        title:
            "Vistoria: A Multimodal System to Support Fictional Story Writing through Instrumental Text-Image Co-Editing",
        abstract: "Humans think visually—we remember in images, dream in pictures, and use visual metaphors to communicate. Yet, most creative writing tools remain text-centric, limiting how authors develop ideas. We present Vistoria, a system for synchronized text-image co-editing in fictional story writing that treats visuals and text as co-equal narrative materials. A formative Wizard-of-Oz co-design study with 10 story writers revealed how sketches, images, and annotations serve as essential instruments for ideation and organization. Drawing on theories of Instrumental Interaction and Structural Mapping, Vistoria introduces multimodal operations-lasso, collage, filters, and perspective shifts that enable seamless narrative exploration across modalities. A controlled study with 12 participants shows co-editing enhances expressiveness, immersion, and collaboration, enabling writers to explore divergent directions, embrace serendipitous randomness, and trace evolving storylines. While multimodality increased cognitive demand, participants reported stronger authorship and agency. These findings demonstrate multimodal co-editing expands creative potential by balancing abstraction and concreteness in narrative development.",
        authors: [
            {name: "Kexue Fu",link:"https://fukexuexue.github.io/", role: "first"},
            {name: "Jingfei Huang",link:"https://jingfeihuang.myportfolio.com/", role: "first"},
            {name: "Long Ling", link: "https://lucy-ling.com",role: "first"},
            {name: "Sumin Hong",link: "https://suminhong.me/"},
            {name: "Yihang Zuo",link: "https://zyh0911.github.io/"},
            {name: "Ray LC", link: "https://raylc.org/", role: "advisor"},
            {name: "Toby Jia-Jun Li", link: "https://toby.li/", role: "advisor"},
        ],
        venues: [
            {name: "CHI '26", type: "conference"},
        ],
        links: {
            // acm: "https://dl.acm.org/doi/abs/10.1145/3677102",
            pdf: vistoria,
            github:"https://github.com/zyh0911/CHI26-Visual_Instruments",
            arxiv: "https://arxiv.org/abs/2509.13646",
            short: "https://www.youtube.com/watch?v=FppAZnPdIFU",
            video:"https://www.youtube.com/watch?v=iAYFP2z5GLI",
            demo:"https://www.youtube.com/watch?v=JWaj2VJG5lU"
        },
        image: vistoria_img,
        tags: ["Selected","In Submission","Human-AI Collaboration","Creativity Support", "Multimodal Interaction","System"]
    },
    {
        title:
            "TunTun Diary: Exploring AI-Generated Storytelling and Virtual Companionship for Nightmare Relief",
        abstract: "Nightmares disrupt sleep and heighten daytime anxiety, yet therapeutic support is often hard to access due to limited clinician availability, cost, and clinical framing. We propose TunTun Diary, a mobile game in which an alien puppy named TunTun “eats” players’ nightmares and returns gentle, comic-style retellings. The system uses generative AI to reinterpret users' nightmare descriptions into positive narratives. Through simple text-based dream input and playful pet interactions, players form an emotional bond with TunTun as a safe and supportive companion for coping with negative dreams. In a preliminary deployment with 20 young adults, participants reported emotional relief and increased comfort after engaging with TunTun’s transformed dream comics, often describing the experience as both soothing and playful. These findings highlight how integrating therapy-inspired reframing with interactive storytelling and virtual companionship can lower barriers to everyday emotional support. By illustrating a novel application of AI-based visual storytelling in game contexts, TunTun Diary opens opportunities for future research at the intersection of visual computing, affective interaction, and game design.",
        authors: [
            {name:"Zixin Wang",link: "https://zixin-wang.netlify.app/"},
            {name:"Shan Luo",link: "https://luoshan-home.vercel.app/index.html"},
            {name:"Siyu Tian"},
            {name: "Yunxi Cai"},
            {name: "Long Ling", link: "https://lucy-ling.com"},
            {name: "Muhan Xu"},
            {name: "Jiaxing Yu"},
            {name: "Guanting Lu"},
            {name:"Jiajing Zhu"},
            {name: "Liping Luo"}
        ],
        venues: [
            {name: "Siggraph Asia '25 Poster", type: "conference"}
        ],
        links: {
            acm: "https://dl.acm.org/doi/abs/10.1145/3757374.3771484",
            pdf: tuntun,
            poster:tuntun_poster
        },
        image:tuntun_img,
        tags: ["Human-AI Collaboration","Affective Computing","System"]
    },
    {
        title:
            "ClayScape: GenAI-Supported Design to Clay 3D Printing in Fabricating Chinese Textured Ceramics",
        abstract: "Chinese ceramic-making involves complex and interdependent steps, making it technically demanding and time-consuming. Digital fabrication methods attempt to make the process more efficient, but for craft-creators, technical barriers such as CAD and CAM skills remain major obstacles. To reducing technical barriers for crafts-people, two co-authors first collaboratively designed a workflow that enables craft-artists to sketch out their design, actualize the design by prompting GenAI, then convert the design into ceramic crafts by clay 3D printing and hand glazing. We evaluated the workflow with an empirical study of four ceramic creators using the tool in real-life settings. The findings show that beginner creators benefited from accessible entry points into the creative process, whereas experienced artists reflected critically on the balance between digital fabrication skills and traditional crafts. This work demonstrates how ideas can be transformed into physical forms through human-AI design and digital fabrication hybrid workflows.",
        authors: [
            {name: "Sijia Liu",link: "https://starliusijia.com/"},
            {name: "Hoi Ching Silvester Mok",link: "https://www.silvestermok.com/biography"},
            {name: "Long Ling", link: "https://lucy-ling.com"},
            {name: "Tobias Klein", link: "https://www.tobiasklein.ws/"},
            {name: "Ray LC", link: "https://raylc.org/", role: "advisor"},
        ],
        venues: [
            {name: "DIS '26", type: "conference"},
        ],
        links: {
            // acm: "https://dl.acm.org/doi/abs/10.1145/3677102",
            pdf: clay,
            // arxiv: "https://arxiv.org/abs/2508.12333",
            // video: "https://dl.acm.org/doi/suppl/10.1145/3677102/suppl_file/v8chip337.mp4",
            // msg: "🚧 Video coming soon...",
        },
        image: clay_img,
        tags: ["Selected","In Submission","Human-AI Collaboration", "Creativity Support", "Cultural & Philosophical","Digital Fabrication"]
    },
    {
        title:
            "\"Re-Tell the Fortune so I Can Believe It\": How Chinese User Communities Engage with and Interpret GenAI-based Fortune Telling",
        abstract: "People traditionally divine the future by interpreting natural phenomena as oracular signals, especially in societies adhering to traditional beliefs like China. With the advent of Generative AI (GenAI), people gain access to new ways of probing digital oracles for predicting the future. To understand how people use and interpret GenAI for divination in China, we interviewed 22 participants who habitually use GenAI platforms for fortune-telling, complemented by a three-week digital ethnography with 1,842 community posts. Qualitative analysis showed that people who seek psychological comfort are particularly receptive to GenAI-based decision-making. Users valued GenAI's accessibility, convenience, and efficiency while perceiving its lack of spiritual mystique. We observed community dynamics forming around GenAI tools, where users reinforce interpretations by sharing and discussing with each other, repeating queries until responses align with expectations. Our work uncovers how AI technologies change the way people and communities engage in traditional cultural practices while yearning for the same goals.",
        authors: [
            {name: "Long Ling", link: "https://lucy-ling.com"},
            {name: "Xiyu Zheng"},
            {name: "Gengchen Cao"},
            {name: "Ray LC", link: "https://raylc.org/", role: "advisor"},
        ],
        venues: [
            {name: "CSCW '26", type: "conference"},
        ],
        links: {
            // acm: "https://dl.acm.org/doi/abs/10.1145/3677102",
            pdf: chinese,
            // arxiv: "https://arxiv.org/abs/2508.12333",
            // video: "https://dl.acm.org/doi/suppl/10.1145/3677102/suppl_file/v8chip337.mp4",
            // msg: "🚧 Video coming soon...",
        },
        image: chinese_img,
        tags: ["In Submission","Human-AI Collaboration", "Cultural & Philosophical","Understanding People"]
    },

    {
        title:
            "Emoticrafter: Text-to-emotional-image generation based on valence-arousal model",
        abstract: "Recent research shows that emotions can enhance users' cognition and influence information communication. While research on visual emotion analysis is extensive, limited work has been done on helping users generate emotionally rich image content. Existing work on emotional image generation relies on discrete emotion categories, making it challenging to capture complex and subtle emotional nuances accurately. Additionally, these methods struggle to control the specific content of generated images based on text prompts. In this work, we introduce the new task of continuous emotional image content generation (C-EICG) and present EmotiCrafter, an emotional image generation model that generates images based on text prompts and Valence-Arousal values. Specifically, we propose a novel emotion-embedding mapping network that embeds Valence-Arousal values into textual features, enabling the capture of specific emotions in alignment with intended input prompts. Additionally, we introduce a loss function to enhance emotion expression. The experimental results show that our method effectively generates images representing specific emotions with the desired content and outperforms existing techniques.",
        authors: [
            {name: "Shengqi Dang",link: "https://dangsq.github.io/#/",role: "first" },
            {name: "Yi He",link: "https://scholar.google.com/citations?user=NC_b_pUAAAAJ&hl=zh-CN",role: "first" },
            {name: "Long Ling", link: "https://lucy-ling.com"},
            {name: "Ziqing Qian"},
            {name: "Nanxuan Zhao",link: "https://www.nxzhao.com/"},
            {name: "Nan Cao", link: "https://www.nancao.org/", role: "advisor"},
        ],
        venues: [
            {name: "ICCV '25", type: "conference"},
        ],
        links: {
            // acm: "https://dl.acm.org/doi/abs/10.1145/3678884.3681846",
            pdf: emo,
            demo: "https://huggingface.co/spaces/idvxlab/EmotiCrafter-Demo",
            arxiv: "https://arxiv.org/pdf/2501.05710?",
            code: "https://github.com/idvxlab/EmotiCrafter?tab=readme-ov-file"
        },
        image: emo_img,
        tags: ["Selected","Computer Vision","Affective Computing","Machine Learning"]
    },

    {
        title:
            "\"An Image of Ourselves in Our Minds\": How College-educated Online Dating Users Construct Profiles for Effective Self Presentation",
        abstract: "Online dating is frequently used by individuals looking for potential relationships and intimate connections. Central to dating apps is the creation and refinement of a dating profile, which represents the way individuals desire to present themselves to potential mates, while hiding information they do not care to share. To investigate the way frequent users of dating apps construct their online profiles and perceive the effectiveness of strategies taken in making profiles, we conducted semi-structured interviews with 20 experienced users who are Chinese college-educated young adults and uncovered the processes and rationales by which they make profiles for online dating, particularly in selecting images for inclusion. We found that participants used idealized photos that exaggerated their positive personality traits, sometimes traits that they do not possess but perceive others to desire, and sometimes even traits they wish they had possessed. Users also strategically used photos that show personality and habits without showing themselves, and often hid certain identifying information to reduce privacy risks. This analysis signals potential factors that are key in building online dating profiles, providing design implications for systems that limit the use of inaccurate information while still promoting self-expression in relationship platforms.",
        authors: [
            {name: "Fan Zhang"},
            {name: "Yun Chen"},
            {name: "XiaoKe Zeng", link: "https://zx-ke.com/"},
            {name: "Tianqi Wang"},
            {name: "Long Ling", link: "https://lucy-ling.com"},
            {name: "Ray LC", link: "https://raylc.org/", role: "advisor"},
        ],
        venues: [
            {name: "CSCW '25", type: "conference"},
            {name: "PACM HCI", type: "journal"},
        ],
        links: {
            acm: "https://dl.acm.org/doi/abs/10.1145/3710929",
            pdf: image,
            arxiv: "https://arxiv.org/pdf/2502.11430",
        },
        image: image_img,
        tags: ["Cultural & Philosophical","Understanding People"]
    },
    {
        title:
            "Brain Cache: Generative AI as a Cognitive Exoskeleton for Externalizing, Structuring, and Activating Knowledge",
        abstract: "The cognitive entropy of the information age manifests as memory overload, fragmented thinking, and inaccessible knowledge when needed. This paper proposes Brain Cache, a Generative AI-powered cognitive exoskeleton acting as a second brain for humans. It achieves cognitive augmentation through three mechanisms: externalizing biological memory via personal knowledge repositories, structuring fragmented insights into semantic networks, and activating knowledge through contextual interaction and recommendation. The study establishes a theoretical framework for human-AI cognitive symbiosis while examining technical implementation challenges and risks of algorithmic dependency in long-term usage.",
        authors: [
            {name: "Long Ling", link: "https://lucy-ling.com"},
        ],
        venues: [
            {name: "CHI Workshop '25", type: "workshop"}
        ],
        links: {
            slide:brain_slide,
            pdf: brain,
            github:"https://generativeaiandhci.github.io/papers/2025/genaichi2025_51.pdf",
        },
        image: brain_img,
        tags: ["Human-AI Collaboration","Creativity Support","Cognitive Augmentation"]
    },
    {
        title:
            "Sketchar: Supporting Character Design and Illustration Prototyping using Generative AI",
        abstract: "Character design in games involves interdisciplinary collaborations, typically between designers who create the narrative content, and illustrators who realize the design vision. However, traditional workflows face challenges in communication due to the differing backgrounds of illustrators and designers, the latter with limited artistic abilities. To overcome these challenges, we created Sketchar, a Generative AI (GenAI) tool that allows designers to prototype game characters and generate images based on conceptual input, providing visual outcomes that can give immediate feedback and enhance communication with illustrators’ next step in the design cycle. We conducted a mixed-method study to evaluate the interaction between game designers and Sketchar. We showed that the reference images generated in co-creating with Sketchar fostered refinement of design details and can be incorporated into real-world workflows. Moreover, designers without artistic backgrounds found the Sketchar workflow to be more expressive and worthwhile. This research demonstrates the potential of GenAI in enhancing interdisciplinary collaboration in the game industry, enabling designers to interact beyond their own limited expertise.",
        authors: [
            {name: "Long Ling", link: "https://lucy-ling.com", role: "first"},
            {name: "Xinyi Chen", link: "https://scholar.google.ch/citations?user=OP8pYSEAAAAJ&hl=en", role: "first"},
            {name: "Ruoyu Wen", link: "https://playerinmetaverse.tech/", role: "first"},
            {name: "Toby Jia-Jun Li", link: "https://toby.li/"},
            {name: "Ray LC", link: "https://raylc.org/", role: "advisor"},
        ],
        venues: [
            {name: "CHI Play '24", type: "conference"},
            {name: "PACM HCI", type: "journal"},
        ],
        links: {
            acm: "https://dl.acm.org/doi/abs/10.1145/3677102",
            pdf: sketchar,
            slide: sketchar_slide,
            web:"https://lucyling24.github.io/sketchar/",
            arxiv: "https://arxiv.org/abs/2508.12333",
            video: "https://dl.acm.org/doi/suppl/10.1145/3677102/suppl_file/v8chip337.mp4",
            code:"https://github.com/LucyLing24/sketchar-code"
        },
        image: sketchar_img,
        tags: ["Selected","Human-AI Collaboration", "Creativity Support", "Multimodal Interaction","System"]
    },
    {
        title:
            "LIFEELING: A \"Detox\" Metaphor-Based Fitness Tracking and Reminder Device Designed for the Elderly",
        abstract: "With society aging, electronic wearable devices (EWDs) can be a viable option to promote healthy living among the elderly. However, these devices often present complex graphics, difficult interfaces, and inappropriate assistance features, which hinder their use by older individuals. To address this, we conducted a formative interview and found that the elderly need simple and positive signals, psychological support through objects, and guidance for preventing over-exercise in EWDs. Thus, we propose LIFEELING, a fitness tracking and reminder system that combines the traditional bracelet form factor with the prevalent concept of \"detoxification\" among the Chinese elderly. Additionally, LIFEELING can provide positive psychological sustenance using the metaphor of \"detoxification\" and mimic design. Meanwhile, it can monitor the user's heart rate and assist with breathing adjustments. A preliminary study helps us understand how the elderly perceive it and better position our contributions.",
        authors: [
            {name: "Long Ling", link: "https://lucy-ling.com"},
            {name:"Xiyu Zheng"},
            {name:"Jiayu Pan"},
            {name:"Hao Chen"},
            {name: "Yuting Diao",link: "https://scholar.google.com/citations?user=hjUxk0oAAAAJ&hl=en"},
            {name: "Guanhong Liu", link: "https://www.liuguanhong.net/", role: "advisor"},
        ],
        venues: [
            {name: "CSCW Companion '24", type: "conference"},
        ],
        links: {
            acm: "https://dl.acm.org/doi/abs/10.1145/3678884.3681846",
            pdf: lifeeling,
            // arxiv: "https://arxiv.org/abs/2508.12333",
            poster:lifeeling_poster
        },
        image: lifeeling_img,
        tags: ["Affective Computing", "Cognitive Augmentation","Embodied Interaction"]
    },
    {
        title:
            "CARBON COPY",
        abstract: "In our rapidly advancing technological landscape, generative artificial intelligence (GenAI) is transforming human-AI interactions across various domains. The viral sensation of ChatGPT and GenAI's role in content creation has captured widespread attention. However, AI's ability to generate convincing yet fictitious images, videos, texts, and voices presents a significant challenge. This deception complicates distinguishing authentic human content from AI-generated forgeries and highlights the increasing importance of verifying online identities, particularly in mobile dating, for safety and trust as AI technology advances and detecting false content becomes more difficult. Consumers often fail to recognize fake AI-generated information, such as fake news or social media profiles, leading to misinformation and security risks. The proliferation of fake accounts with AI-synthesized faces on platforms like Facebook and LinkedIn exemplifies these challenges.\n" +
            "\n" +
            "Thus, we delve into the fusion of human creativity and AI’s generative power, using the fake dating website\"Carbon Copy Dating\" to critically assess the influence of GenAI in shaping social interactions within human communities. Drawing on insights from seasoned dating app users, we crafted a model for a fake dating platform, powered by GenAI-generated profiles. Our methodology commenced with an analysis of existing user profile texts, leveraging AI to emulate these narratives’ style and substance. This process involved generating textual content throughChatGPT and creating visual profiles using advanced generative models like Stable Diffusion (SD) and Midjourney (MJ). This AI-driven approach ensures that the generated profiles maintain authenticity and relevance to potential users’ expectations. ",
        authors: [
            {name: "Long Ling", link: "https://lucy-ling.com"},
            {name: "XiaoKe Zeng", link: "https://zx-ke.com/"},
            {name: "Ray LC", link: "https://raylc.org/", role: "advisor"},
        ],
        venues: [
            {name: "20th Athens Digital Arts Festival", type: "exhibition"},
        ],
        links: {
            demo: "https://carboncopydating.github.io/carboncopydating/",
            poster: carbon_poster,
            link:"https://2024.adaf.gr/artworks/carbon-copy/",
            // video: "https://dl.acm.org/doi/suppl/10.1145/3677102/suppl_file/v8chip337.mp4",
            // msg: "🚧 Video coming soon...",
        },
        image: carbon_img,
        tags: ["Human-AI Collaboration", "Affective Computing","Cultural & Philosophical","System"]
    },
    {
        title:
            "FLOW: Filtering and LSTM-based Optimization for Web Browser Interactions",
        abstract: "Web browsers have become an indispensable tool for human-computer interactions across various platforms. However, interactive performance (e.g the immediacy of interaction, the accuracy of interaction data) in browser-based apps can be hindered by hardware limitations and network delays, resulting in unwanted jitter and input signal delays that negatively impact the user experience. To tackle these challenges, we propose a novel approach that leverages effective filtering algorithms and lightweight machine learning models. By integrating the 1 euro filter and Long Short-Term Memory (LSTM) algorithm, we successfully optimize the accuracy of Mediapipe-based gesture interactions and TUIO-based tangible interactions within web browsers. Our findings demonstrate that this combined approach not only enhances input signal accuracy but also ensures seamless and highly responsive web browser interactions.",
        authors: [
            {name:"Dongyijie Pan",link: "https://primopan.github.io/about/"},
            {name:"Zhengnan Li"},
            {name: "Long Ling", link: "https://lucy-ling.com"},
            {name:"Guangzheng Fei"},
        ],
        venues: [
            {name: "Chinese CHI '23", type: "conference"}
        ],
        links: {
            acm: "https://dl.acm.org/doi/abs/10.1145/3629606.3629611",
            pdf: flow,
        },
        image:flow_img,
        tags: ["Multimodal Interaction"]
    },

    {
        title:
            "Somewhere in between the Latent Space: Theoretical and Technological Perspectives on the Status of AI Art",
        abstract: "Situated at the convergence of computational creativity, machine learning, and art, AI Art has experienced significant growth in popularity and is now widely regarded as a leading medium among artists. Despite growing attention to its potentialities, it has also raised philosophical, ethical, and legal issues. However, a systematic review of how and to what extent AI shapes artistic creation is lacking, as is an in-depth analysis of the technologies being used. To address these gaps, we surveyed 143 papers and artworks, presenting a multi-perspective survey considering both theoretical and technological issues. On the theoretical side, we identified 5 research threads frequently debated in the literature. On the technological side, we constructed a design taxonomy to explore how AI techniques are used in current practices. We correlate theoretical and technological analyses, providing a comprehensive understanding of how AI contributes to art making and suggesting new research opportunities.",
        authors: [
            {name: "Yi He",link: "https://scholar.google.com/citations?user=NC_b_pUAAAAJ&hl=zh-CN" },
            {name: "Filippo Fabrocini", link: "https://tjsic.tongji.edu.cn/tjsicen/info/1057/1253.htm"},
            {name: "Long Ling", link: "https://lucy-ling.com"},
            {name: "De'en Chen"},
            {name: "Kostas Terzidis",link: "https://scholar.google.com/citations?user=xmltKRwAAAAJ&hl=en"},
            {name: "Nan Cao", link: "https://www.nancao.org/", role: "advisor"},
        ],
        venues: [
            {name: "Work In Progress", type: "wip"},
        ],
        links: {
            // acm: "https://dl.acm.org/doi/abs/10.1145/3677102",
            pdf: art,
            // arxiv: "https://arxiv.org/abs/2508.12333",
            // video: "https://dl.acm.org/doi/suppl/10.1145/3677102/suppl_file/v8chip337.mp4",
            // msg: "🚧 Public demo coming soon...",
        },
        image: art_img,
        tags: ["Human-AI Collaboration","Creativity Support", "Survey"]
    },

    {
        title:
            "Capace: A Head-Mounted Haptic System for Attention Regulation in Adults with Deficit/Hyperactivity Disorder (ADHD)",
        abstract: "Regulating attention is a primary challenge for adults with Attention-Deficit/Hyperactivity Disorder (ADHD). Current technological aids, such as smartphone apps or wrist-worn wearables, often introduce visual distractions that undermine their intended purpose. Thus, we conducted formative studies involving 124 survey participants, 12 adults with ADHD, and 4 clinicians, which confirmed the need for non-visual, embodied, and in-situ interventions. Building on these insights, we present CaPace, a novel head-mounted wearable system that provides real-time, context-aware vibrotactile biofeedback cues to support focus. We evaluated CaPace in 2 within-group experiments with 10 adults with ADHD, assessing the comprehensibility of its haptic cues and the user experience. Our work contributes to an understanding of the design space and feasibility of using on-head haptics for attention, inspiring future explorations of embodied interfaces for cognitive support.",
        authors: [
            {name: "Long Ling", link: "https://lucy-ling.com",role: "first"},
            {name: "Yike Wang", link: "https://yikewanguk.github.io/",role: "first"},
            {name: "Jiaying Lei"},
            {name: "Nan Cao", link: "https://www.nancao.org/", role: "advisor"},
        ],
        venues: [
            {name: "Work In Progress", type: "wip"},
        ],
        links: {
            // acm: "https://dl.acm.org/doi/abs/10.1145/3677102",
            pdf: capace,
            // arxiv: "https://arxiv.org/abs/2508.12333",
            // video: "https://dl.acm.org/doi/suppl/10.1145/3677102/suppl_file/v8chip337.mp4",
            msg: "🚧 Video coming soon...",
        },
        image: capace_img,
        tags: ["Cognitive Augmentation","Machine Learning", "Embodied Interaction","System"]
    },

    {
        title:
            "Future Calling: Exploring and Prototyping Career Choices Through Generative AI-supported Evaluation and Visualization",
        abstract: "Choosing future career paths involves an exhaustive search over complex variables like motivation, financial considerations, and the possibility of failure. Current career planning tools are not adaptable to individual priorities and fail to provide users with concrete visualization of a long-term future career. We created Future Calling, a GenAI(Generative AI)-based application which provides a customized chatbot on career choice issues, and applies individual data to envision different potential future careers. We compared the use of Future Calling against text-to-image GenAI tool alone for career choice exploration in a between-group study. We found that Future Calling allowed participants to gain greater confidence and reflection than control. Participants used the application by repeatedly iterating, questioning, and conversing to compare their career futures, exploring detailed aspects and preferences of different career paths. This work highlights the way GenAI can support human decision-making by fostering imagination and reflection about potential futures.",
        authors: [
            {name: "XiaoKe Zeng", link: "https://zx-ke.com/",role: "first"},
            {name: "Xinyi Chen", link: "https://scholar.google.ch/citations?user=OP8pYSEAAAAJ&hl=en", role: "first"},
            {name: "Ruoyu Wen", link: "https://playerinmetaverse.tech/", role: "second"},
            {name: "Long Ling", link: "https://lucy-ling.com", role: "second"},
            {name: "Xiaoyu Chang"},
            {name: "Sijia Liu",link: "https://starliusijia.com/"},
            {name: "Kexue Fu",link:"https://fukexuexue.github.io/"},
            {name: "Richard William Allen"},
            {name: "Ray LC", link: "https://raylc.org/", role: "advisor"},
        ],
        venues: [
            {name: "Work In Progress", type: "wip"},
        ],
        links: {
            // acm: "https://dl.acm.org/doi/abs/10.1145/3677102",
            pdf: future,
            // arxiv: "https://arxiv.org/abs/2508.12333",
            // video: "https://dl.acm.org/doi/suppl/10.1145/3677102/suppl_file/v8chip337.mp4",
            msg: "🚧 Public demo coming soon...",
        },
        image: future_img,
        tags: ["Human-AI Collaboration", "Creativity Support", "System"]
    },


];


const tagColors = {
    conference: "conference",
    journal: "journal",
    workshop: "workshop",
    // submission: "submission",
    wip:"wip",
    exhibition: "exhibition",
};

// 给不同tag分配不同颜色
const tagStyleMap = {
    "Selected": "#242424",
    "In Submission":"#cccccc",
    "Human-AI Collaboration": "#ff7f96",
    "Creativity Support": "#ffb07f",
    "Affective Computing": "#ffcd49",
    "Cultural & Philosophical": "#f3dc12",
    "Machine Learning": "#b8cc7d",
    "Cognitive Augmentation": "#7dcd6f",
    "Computer Vision":"#6fcda6",
    "Digital Fabrication": "#87dcdc",
    "Embodied Interaction": "#7fcaff",
    "Multimodal Interaction": "#7f9dff",
    "System": "#9b7fff",
    "Survey": "#c57fff",
    "Understanding People": "#ff7fb9",
};

export default function Publications() {
    const [selectedTag, setSelectedTag] = useState("");

    const filteredPublications = selectedTag
        ? publications.filter((p) => p.tags.includes(selectedTag))
        : publications;

    const handleTagClick = (tag) => {
        setSelectedTag(selectedTag === tag ? "" : tag);
    };
    const handleSelectChange = (event) => {
        const newTag = event.target.value;
        handleTagClick(newTag);
    };

    return (
        <div className="publications" id="publications" style={{marginTop:"1rem"}}>
            <div className="publications-select">
                <div className="card-title">
                    Publications
                </div>

                <select
                    className="tag-select-filter"
                    value={selectedTag}
                    onChange={handleSelectChange}
                    style={{background: `${tagColors[selectedTag]}`}}
                >
                    <option value="">All</option>
                    {Object.keys(tagStyleMap).map((tag) => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}

                </select>
            </div>

            {/*<div className="tag-filter">*/}
            {/*    <span*/}
            {/*        className={`${selectedTag === "Selected" ? "active" : ""} rainbow-tag`}*/}
            {/*        style={{color: tagStyleMap["Selected"]}}*/}
            {/*        onClick={() => handleTagClick("Selected")}*/}
            {/*    >*/}
            {/*            #Selected*/}
            {/*        </span>*/}
            {/*    <span*/}
            {/*        key={"In Submission"}*/}
            {/*        className={`${selectedTag === "In Submission" ? "active" : ""} submission-tag`}*/}
            {/*        onClick={() => handleTagClick("In Submission")}*/}
            {/*    >*/}
            {/*            #In Submission*/}
            {/*        </span>*/}
                {/*{Object.keys(tagStyleMap).map((tag) => {*/}
                {/*        if (tag === "Selected") {*/}
                {/*            return (<span*/}
                {/*                key={tag}*/}
                {/*                className={`${selectedTag === tag ? "active" : ""} rainbow-tag`}*/}
                {/*                style={{color: tagStyleMap[tag]}}*/}
                {/*                onClick={() => handleTagClick(tag)}*/}
                {/*            >*/}
                {/*        #{tag}*/}
                {/*    </span>)*/}
                {/*        } else if (tag === "In Submission") {*/}
                {/*            return (<span*/}
                {/*                key={tag}*/}
                {/*                className={`${selectedTag === tag ? "active" : ""} submission-tag`}*/}
                {/*                onClick={() => handleTagClick(tag)}*/}
                {/*            >*/}
                {/*        #{tag}*/}
                {/*    </span>)*/}
                {/*        }*/}
                {/*        // else return (<span*/}
                {/*        //     key={tag}*/}
                {/*        //     className={`filter-tag ${selectedTag === tag ? "active" : ""}`}*/}
                {/*        //     style={{color: tagStyleMap[tag]}}*/}
                {/*        //     onClick={() => handleTagClick(tag)}*/}
                {/*        // >*/}
                {/*        //     #{tag}*/}
                {/*        // </span>)*/}
                {/*    }*/}
                {/*)}*/}
            {/*</div>*/}

            <div className="publications-info">
                {/*My publications reflect my ongoing exploration of human–AI interaction and creativity support.*/}
                {/*You can click on the tags below to filter papers by topic or research area.*/}
                <div className="publications-info-small">* indicates equal contribution, and † denotes the advising
                    professor.</div>
            </div>


            <div className="publications-list">
                {filteredPublications.map((paper, index) => (
                    <div key={index} className="publication-card">
                        <img
                            src={paper.image}
                            alt={paper.title}
                            className="publication-image"
                        />

                        <div className="publication-content">

                            <div className="publication-venue">
                                {paper.venues.map((v, vi) => (
                                    <span
                                        key={vi}
                                        className={`venue-tag ${tagColors[v.type]}`}
                                    >
                    {v.name}
                  </span>
                                ))}
                            </div>

                            {/* title + hover abstract */}
                            <div className="publication-title-wrapper">
                                <div className="publication-title">{paper.title}</div>
                                <div className="abstract-popup">{paper.abstract}</div>
                            </div>

                            <div className="publication-authors">
                                {paper.authors.map((author, i) => {
                                    let symbol = "";
                                    if (author.role === "first") symbol = "*";
                                    if (author.role === "second") symbol = "**";
                                    if (author.role === "advisor") symbol = "†";

                                    const isMe = author.name === MY_NAME;
                                    const authorName = isMe ? (
                                        <strong
                                            style={{color: "#F42E7A", fontWeight: 900}}
                                        >
                                            {author.name + symbol}
                                        </strong>
                                    ) : (
                                        author.name + symbol
                                    );

                                    return (
                                        <span key={i}>
                      {author.link ? (
                          <a
                              href={author.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="author-link"
                          >
                              {authorName}
                          </a>
                      ) : (
                          authorName
                      )}
                                            {i < paper.authors.length - 1 && ", "}
                    </span>
                                    );
                                })}
                            </div>

                            <div className="publication-tags">
                                {paper.tags.map((tag, i) => {
                                        if (tag === "Selected") {
                                            return (
                                                <span
                                                    key={i}
                                                    className="tag-item-show rainbow-tag-all"
                                                    // onClick={() => handleTagClick(tag)}
                                                >
                                            #{tag}
                                        </span>
                                            )
                                        } else if (tag === "In Submission") {
                                            return (
                                                <span
                                                    key={i}
                                                    className="tag-item-show submission-tag-all"
                                                    // onClick={() => handleTagClick(tag)}
                                                >
                                            #{tag}
                                        </span>
                                            )
                                        } else return (
                                            <span
                                                key={i}
                                                className="tag-item-show"
                                                // style={{color: tagStyleMap[tag]}}
                                                style={{color: "#888"}}
                                                // onClick={() => handleTagClick(tag)}
                                            >
                                            #{tag}
                                        </span>
                                        );
                                    }
                                )}
                            </div>

                            <div className="publication-links">
                                {paper.links.pdf && (
                                    <a href={paper.links.pdf} target="_blank" rel="noopener noreferrer">
                                        PDF
                                    </a>
                                )}
                                {paper.links.acm && (
                                    <a href={paper.links.acm} target="_blank" rel="noopener noreferrer">
                                        DOI
                                    </a>
                                )}
                                {paper.links.arxiv && (
                                    <a href={paper.links.arxiv} target="_blank" rel="noopener noreferrer">
                                        arXiv
                                    </a>
                                )}
                                {paper.links.slide && (
                                    <a href={paper.links.slide} target="_blank" rel="noopener noreferrer">
                                        Slide
                                    </a>
                                )}
                                {paper.links.github && (
                                    <a href={paper.links.github} target="_blank" rel="noopener noreferrer">
                                        Github
                                    </a>
                                )}
                                {paper.links.web && (
                                    <a href={paper.links.web} target="_blank" rel="noopener noreferrer">
                                        Website
                                    </a>
                                )}
                                {paper.links.poster && (
                                    <a href={paper.links.poster} target="_blank" rel="noopener noreferrer">
                                        Poster
                                    </a>
                                )}
                                {paper.links.code && (
                                    <a href={paper.links.code} target="_blank" rel="noopener noreferrer">
                                        Code
                                    </a>
                                )}
                                {paper.links.demo && (
                                    <a href={paper.links.demo} target="_blank" rel="noopener noreferrer">
                                        Demo
                                    </a>
                                )}
                                {paper.links.short && (
                                    <a href={paper.links.short} target="_blank" rel="noopener noreferrer">
                                        Quick View
                                    </a>
                                )}
                                {paper.links.page && (
                                    <a href={paper.links.page} target="_blank" rel="noopener noreferrer">
                                        Page
                                    </a>
                                )}
                                {paper.links.video && (
                                    <a href={paper.links.video} target="_blank" rel="noopener noreferrer">
                                        Presentation
                                    </a>
                                )}
                                {paper.links.msg && (
                                    <div className={"publications-msg"}>{paper.links.msg}</div>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

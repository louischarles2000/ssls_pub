import { BasicCardProps, EventType, PostType, PostTypeEnum, ProgramType } from "./types";


export const _programs: ProgramType[] = [
  {
    _id: 'zaw234d',
    title: 'Land Rights in Transition',
    image: '/images/program_1.jpg',
    content: [
      {
        type: 'p',
        text: `
        Through its research and advocacy, the SSLS sheds light on the interplay between land and power in postwar South Sudan. The SSLS has documented recent reforms in South Sudanese land law, efforts to establish an industrial mining sector, and provisions for revenue sharing in the oil sector. SSLS legal aid clinics also provide legal services to individuals and groups seeking to protect their land rights against infringements by state or non-state actors.

        `
      },
      {
        type: 'p',
        text: `
        Among the SSLS’s key initiatives is advocacy around the challenges and opportunities posed by large-scale land-based investment in South Sudan. Recent studies indicate that in just four years, between the start of 2007 and the end of 2010, foreign interests sought or acquired a total of 2.64 million hectares of land (26,400 km2) in the agriculture, forestry and biofuel sectors alone. That is a larger land area than the entire country of Rwanda. Adding domestic investments, some of which date back to the pre-war period, and investments in tourism and conservation, the figure rises to 5.15 million hectares (51,500 km2), or nine percent of Southern Sudan’s total land area.
        `
      },
      {
        type: 'p',
        text: `              
        SSLS advocacy has highlighted the risks posed by unregulated investments in fragile post-conflict settings, such as that of South Sudan. The Research Department has also developed a Handbook on Community Engagement, as a tool to promote constructive relationships between communities, companies and government institutions involved with land investments.`
      },
    ],
    resources: [
      'https://www.sslawsociety.org/wp-content/uploads/2016/03/Briefing-Note-Workshop-ITJR-in-South-Sudan.pdf'
    ]
  },  
  {
    _id: '0003esd',
    title: 'Constitutional Development',
    image: '/images/program_2.jpg',
    content: [
      {
        type: 'p',
        text: `
        In a project entitled, Towards the Constitution of ‘Zol Meskin’ (or the ‘common person’, in Juba Arabic), the SSLS and a coalition of civil society organizations are advocating for a constitution and constitution-making process that reflects the hopes and aspirations of the South Sudanese people.
        `
      },
      {
        type: 'p',
        text: `
        The civil society coalition began its work by sending a resource team comprised of some of the leading voices in South Sudanese civil society to learn about comparative experiences with constitutionalism elsewhere in Africa and internationally. The resource team traveled to XX countries, including South Africa, Ghana, XX and XX.
        `
      },
      {
        type: 'p',
        text: `
        The coalition then began conducting workshops in each of the ten states of South Sudan to solicit people’s input on what they would like to see in their constitution. Individuals and groups from throughout the respective states were brought to the state capitals for three-day workshops in which they debated everything from federalism, decentralization and executive power to land, revenue sharing and the death penalty.
        `
      },
      {
        type: 'p',
        text: `
        The resource team will use these insights from South Sudanese across the country to develop their own model constitution representing the views of Zol Meskin. This model constitution will be offered as a resource to members of the constitutional review commission and other official organs tasked with developing South Sudan’s first post-independence constitution.
        `
      },
    ],
    resources: [
      'https://www.sslawsociety.org/wp-content/uploads/2016/03/Briefing-Note-Workshop-ITJR-in-South-Sudan.pdf'
    ]
  }, 
  {
    _id: 'zaw3esd',
    title: 'Legal Aid',
    image: '/images/program_3.jpg',
    content: [
      {
        type: 'p',
        text: `
        The SSLS currently operates nine legal aid clinics across six of the ten states of South Sudan. In addition to its head office in Juba, the SSLS has legal aid clinics in Yei, Torit, Budi, Ikotos, Akobo, Renk, Yambio and Rumbek. The purpose of these clinics is to provide legal advice, mediation and courtroom representation to clients who would otherwise be unable to afford these services.
        `
      },
      {
        type: 'p',
        text: `
        Such services have never before been available to South Sudanese. The prevailing model of legal aid in South Sudan seeks to provide legal services only in the most serious of criminal cases. In a typical legal aid case, the government or one of its international partners will provide funds to hire a private lawyer to represent a particular client accused of having committed a capital offense. This model of legal aid may be effective at providing a high quality of legal services at high cost to a very small number of clients, but it is not sufficient to address the myriad of challenges confronting the justice system in South Sudan.
        `
      },
      {
        type: 'p',
        text: `
        By providing free legal services through a staff of full-time, in-house lawyers, the SSLS’s legal aid program seeks to tackle many of the systemic problems in the justice system with better coordination and at a lower cost. Some of the issues that our legal aid program has targeted include: unlawful detention and extended remand periods, more appropriate use of civil remedies and criminal punishments by judges and traditional authorities, the provision of legal defense for all people accused of a capital offense, and the protection of women and girls from sexual violence.
        `
      },
    ],
    resources: [
      'https://www.sslawsociety.org/wp-content/uploads/2016/03/Briefing-Note-Workshop-ITJR-in-South-Sudan.pdf'
    ]
  }
]



export const _posts: PostType[] = [
  {
    _id: '1q2w3e4r',
    title: 'New accelerator TiPS to provide firms financial support for AI and lawtech',
    content: 'UK law and accounting firms are being invited to take advantage of funded support to explore how they can make better use of digital technology and artificial intelligence (AI) to become more productive and develop new services.',
    type: PostTypeEnum.Blog,
    date: '20 November 2023',
    image: '/images/computer_1.jpg',
    resources: [],
    tags: ['Computer', 'AI', 'Technology']
  },
  {
    _id: '0o9i8u7y',
    title: 'India opens up to English and Welsh solicitors and law firms',
    content: `
    For the first time, English and Welsh solicitors and law firms will be able to register to practise in India on a permanent basis, under new rules published by the Bar Council of India in March 2023.
    This historic development follows decades of campaigning by the Law Society of England and Wales, most recently through a visit to India by president Lubna Shuja and our international team in March to discuss these matters with the Bar Council of India and the Ministry of Law and Justice.

    Law Society president Lubna Shuja said: “The Bar Council of India’s decision is a significant step forward in this long-standing issue and will create huge opportunities for solicitors and Indian advocates in both countries."

    Following the publication of the new rules, we signed a memorandum of understanding with the Bar Council of India on 5 June 2023.

    Read our updated guide on doing legal business in India
    `,
    type: PostTypeEnum.News,
    date: '20 November 2023',
    image: '/images/post_1.jpg',
    resources: [],
    tags: ['Computer', 'AI', 'Technology']
  },
  {
    _id: 'zaw3esd',
    title: 'Westminster update: emergency legislation planned after supreme court ruling on Rwanda policy',
    content: 'UK law and accounting firms are being invited to take advantage of funded support to explore how they can make better use of digital technology and artificial intelligence (AI) to become more productive and develop new services.',
    type: PostTypeEnum.Blog,
    date: '20 November 2023',
    image: '/images/lawyers_1.jpg',
    resources: [],
    tags: ['Computer', 'AI', 'Technology']
  },
  {
    _id: 'zaw3esd',
    title: 'Celebrating Disability History Month 2023',
    content: `
    We’ll be sharing stories, resources and guidance to promote disability inclusion because, like you, we believe a diverse and inclusive profession is a resilient one. This year’s theme is ‘disability, childhood and youth’. “The journey to a legal career can be a daunting experience for all aspiring solicitors,” said Law Society president Nick Emmerson.

“A disabled student faces the additional stress of having to overcome barriers based on assumptions and lack of knowledge.

“Employers are increasingly committed to recruiting candidates that can help shape a dynamic and diverse workforce and are tapping into a massive and often excluded talent pool.”
    `,
    type: PostTypeEnum.Blog,
    date: '20 November 2023',
    image: '/images/lawyer_2.jpg',
    resources: [],
    tags: ['Computer', 'AI', 'Technology']
  }
]

export const _membership_info: BasicCardProps[] = [
  {
    title: 'Members-Only Portal',
    description: 'Access our secure members-only portal for exclusive content, research materials, and resources. Stay up to date with the latest legal publications, research papers, and industry reports available only to our valued members.',
    image: '/images/portal_1.jpg'
  },
  {
    title: 'Webinars and Workshops',
    description: ' Attend our webinars and workshops to stay abreast of the latest legal developments. Engage with expert speakers, participate in discussions, and gain valuable knowledge on emerging topics and best practices in various legal fields.',
    image: '/images/webner_1.jpg'
  },
  {
    title: 'Encouraging Continuous Learning',
    description: ' Mentorship fosters a culture of continuous learning. Mentors encourage mentees to pursue professional development opportunities, attend relevant courses, and engage in ongoing education to stay at the forefront of legal knowledge.',
    image: '/images/mentor_1.jpg'
  },
]

export const events: EventType[] = [
  {
    _id: 'b8yceuiwv',
    start: '09-DEC',
    end: '12-DEC',
    title: 'SPECIAL ECONOMIC ZONES: OPPORTUNITIES AND CHALLENGES FOR THE LEGAL PRACTITIONER',
    duration: 3,
    isOnline: false,      
    hybrid: true,
  },
  {
    _id: 'b8yclmnuev',
    start: '11-DEC',
    end: '11-DEC',
    title: 'DATA PROTECTION: THE EVOLVING LEGISLATION AND THE IMPLICATION FOR THE LEGAL PRACTITIONER',
    duration: 1,
    isOnline: true,     
    hybrid: false,
  },
  {
    _id: 'b8y235uiwv',
    start: '24-DEC',
    end: '27-DEC',
    title: 'MARITIME LAW AND THE BLUE ECONOMY: THE LEGAL PRACTITIONER’S GUIDE TO THE EMERGING OPPORTUNITIES',
    duration: 4,
    isOnline: false,      
    hybrid: true,
  },
]

export const publications: ProgramType[] = [
  {
    _id: '1qw3seetgf',
    title: 'Briefing Note - Workshop ITJR in South Sudan',
    content: [
      {
        type: 'p',
        text: `
        This briefing note summarizes the discussions during a workshop organized on 7 November 2014 at the Juba Civic Engagement Center in Juba, South Sudan.2 The workshop provided a platform to present a research project entitled, “Intersections of Truth, Justice and Reconciliation in South Sudan”, to gauge the relevance of the proposed questions and methods, and to solicit cooperation and sharing of knowledge. It furthermore provided an opportunity to discuss the concepts of truth, reconciliation and justice, and their meaning in the current context in South Sudan. Twenty-four representatives of civil society organisations participated in the discussions.
        `
      }
    ],
    resources: [
      `https://www.sslawsociety.org/wp-content/uploads/2016/03/Briefing-Note-Workshop-ITJR-in-South-Sudan.pdf`
    ],
    image: 'https://www.sslawsociety.org/wp-content/uploads/2016/03/Briefing-Note-Workshop-ITJR.jpg'
  },
  {
    _id: '1qw3s304mvgf',
    title: 'Search for a new beginning',
    content: [
      {
        type: 'p',
        text: `
        This report presents the findings of a survey on perceptions of truth, justice, reconciliation and healing in South Sudan. Over a six-month period from October 2014 to April 2015, the South Sudan Law Society (SSLS), in partnership with the United Nations Development Programme (UNDP), interviewed 1,525 individuals in 11 locations across six of the ten states of South Sudan and Abyei. The goal of the survey was to understand what the people of South Sudan think should be done to address the legacy of violence in the country. The survey also included a post-traumatic stress disorder (PTSD) measure to assess how trauma and mental health issues affect people’s perceptions.
        `
      }
    ],
    resources: [
      `
      https://www.sslawsociety.org/wp-content/uploads/2016/03/Perception-Survey-Report-Transitional-Justice-Reconciliation-and-Healing-.pdf
      `
    ],
    image: `
    https://www.sslawsociety.org/wp-content/uploads/2016/03/Search-for-a-New-beginning.jpg
    `
  },
  {
    _id: '1qw393mv4vcmvgf',
    title: 'Land Governance Assessment Framework: South Sudan Country Report',
    content: [
      {
        type: 'p',
        text: `
        This report was written nearly one year ago, a few weeks before a conflict erupted in Juba on 15 December 2013 and spread throughout much of the Upper Nile region. In the early days of the conflict, publishing a report about land governance hardly seemed like a priority. But a closer examination would have shown that a number of long-standing problems, including tensions over land, were among the factors that set the stage for the conflict. Since obtaining regional autonomy in 2005, the Government of South Sudan has struggled to establish functional land governance systems.
        `
      }
    ],
    resources: [
      `
      https://www.sslawsociety.org/wp-content/uploads/2015/08/LGAF_SouthSudanNov194.pdf
      `
    ],
    image: `
    https://www.sslawsociety.org/wp-content/uploads/2015/08/LGAF_SouthSudan-1.jpg
    `
  },
  {
    _id: '1qw9d8u7ncdvgf',
    title: 'Transitional Justice Strategy for South Sudan',
    content: [
      {
        type: 'p',
        text: `
        The core elements of this strategy were developed at a conference on transitional justice in South Sudan held in Nairobi, Kenya in August 2014. The conference, entitled, Towards a New Beginning: A conference on truth, justice and reconciliation in South Sudan, brought together more than 60 South Sudanese and international participants for three days of deliberations on what South Sudan could do to come to terms with the legacy of mass human rights violations in the country.
        `
      }
    ],
    resources: [
      `
      https://www.sslawsociety.org/wp-content/uploads/2015/08/Transitional_Justice_Strategy_for_South_Sudan_Sep-20141.pdf
      `
    ],
    image: `
    https://www.sslawsociety.org/wp-content/uploads/2015/08/Transitional_Justice_Strategy.jpg
    `
  }
];

export const other_resources: ProgramType[] = [
  {
    _id: '1d2es4feh455',
    title: 'Reducing the Big Chance of Youth participation and Joining Conflict',
    content: [
      {
        type: 'p',
        text: `
        Long-term unemployment is worse than poverty as it leads to social exclusion and marginalisation, especially in urban areas, where a person’s social status is linked to his/her job or career. Idle youth may be threat to themselves and to the social environment they live in as witnessed in the on-going war. Youth employment will drive economic growth and reduce poverty and may also secure social and environmental sustainability and reduce the big chance of youth participation and joining conflict.
        `
      }
    ],
    resources: [
      `
      https://www.sslawsociety.org/wp-content/uploads/2015/08/Policy_Paper_on_Youth_employment_In_South_Sudan_Dec-3-2014.pdf
      `
    ],
    image: `
    https://www.sslawsociety.org/wp-content/uploads/2015/08/Policy_Paper_on_Youth_employment.jpg
    `
  },
  {
    _id: '1d2enzbxbcv55',
    title: 'Establishing a Mining Sector in Postwar South Sudan',
    content: [
      {
        type: 'p',
        text: `
        This report is based on research conducted in Juba, Torit, and Kapoeta during August and September 2012. The research provides an initial examination on the underdocumented issue of mining in South Sudan and seeks to provide the government of South Sudan with evidence-based recommendations that can help it to develop a regulatory framework that will provide equitable benefits to all concerned parties. This report was made possible through financial and editorial support from the United States Institute of Peace.  
        `
      }
    ],
    resources: [
      `
      https://www.sslawsociety.org/wp-content/uploads/2015/08/Establishing_a_Mining_Sector_in_Postwar_South_Sudan.pdf
      `
    ],
    image: `
    https://www.sslawsociety.org/wp-content/uploads/2015/08/EstaMinSecinPostwarSouthSud.jpg
    `
  },
  {
    _id: '1d000987cv55',
    title: 'The New Frontier: A baseline survey of large-scale land-based investment in Southern Sudan',
    content: [
      {
        type: 'p',
        text: `
        This report is part of a baseline survey of large-scale land-based investment in Southern Sudan prepared for Norwegian People’s Aid (NPA). It presents data on 28 foreign and domestic investments planned or underway across the ten states of Southern Sudan. In just four years, between the start of 2007 and the end of 2010, foreign interests sought or acquired a total of 2.64 million hectares of land (26,400 km2) in the agriculture, forestry and biofuel sectors alone. That is a larger land area than the entire country of Rwanda. If one adds domestic investments, some of which date back to the pre-war period, and investments in tourism and conservation, the figure rises to 5.74 million hectares (57,400 km2), or nine percent of Southern Sudan’s total land area.
        `
      }
    ],
    resources: [
      `
      http://www.mokoro.co.uk/other-resources/horn-of-africa/sudan-and-south-sudan
      `
    ],
    image: `
    https://www.sslawsociety.org/wp-content/uploads/2015/08/NPANewFrontier.jpg
    `
  },
  
  {
    _id: '1d09893987cv55',
    title: 'Local Justice in Southern Sudan',
    content: [
      {
        type: 'p',
        text: `
        This study is the result of collaboration between the United States Institute of Peace and the Rift Valley Institute (RVI), leveraging the former’s broader work on customary justice and legal pluralism and the latter’s extensive knowledge of the region. This report empirically analyzes the current dynamics of justice at the local level, identifying priorities for reform according to the expressed needs and perceptions of local litigants.
        `
      }
    ],
    resources: [
      `
      http://www.mokoro.co.uk/other-resources/horn-of-africa/sudan-and-south-sudan
      `
    ],
    image: `
    https://www.sslawsociety.org/wp-content/uploads/2015/08/USIPLocalJustice.jpg
    `
  },
]
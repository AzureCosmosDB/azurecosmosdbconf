// Define the array of speaker objects
var speakers = [
  {
    id: 1,
    name: "Anitha Adusumilli",
    session: "Near real-time analytics on Azure Cosmos DB with Microsoft Fabric mirroring",
    dateAndTime: "TBA",
    abstract: "In this session, learn how you can bring Azure Cosmos DB data into Microsoft Fabric and run no-ETL, near real-time analytics over your operational data. Mirroring allows you to unify your data estate and break down silos. You can seamlessly mirror data from various sources like Snowflake, Azure Cosmos DB, Azure SQL DB, etc. into Fabric. Once the data is replicated into Fabric OneLake, you can join data across these mirrored artifacts and build complex analytical solutions with ease, unifying your data estate.",
    bioP1: "Principal PM Manager, Azure Cosmos DB, Microsoft. Working on Azure Cosmos DB, analytics with Fabric.",
    bioP2: "",
    socialLinks: [ 
        { url: "https://www.linkedin.com/in/anithaadusumilli/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/anitha-adusumilli.jpg",
    liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
  },
  {
    id: 2,
    name: "Arthur Vickers",
    session: "Use EF Core to transition from SQL Server to Azure Cosmos DB",
    dateAndTime: "TBA",
    abstract: "Differences in the characteristics and capabilities of document databases when compared to relational databases mean that it is often unwise to lift a relational model and attempt to use it directly with a document database. However, with appropriate changes to the data model and its use, a relational workload can be moved to a document database, especially when using an abstraction like EF Core. In this session, we take a simple application using EF Core and the SQL Server database provider and migrate it to use EF Core with the Azure Cosmos DB database provider, making appropriate changes along the way to promote best practices for working with document databases.",
    bioP1: "Arthur Vickers has worked on Entity Framework at Microsoft for the past 15 years.",
    bioP2: "",
    socialLinks: [
        { url: "https://twitter.com/ajcvickers", platform: "X" },
        { url: "https://www.linkedin.com/in/arthur-vickers-02b9026/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/arthur-vickers.jpg",
    liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
  },
  {
    id: 3,
    name: "Avijit Gupta",
    session: "Developing a Similarity Search Application utilizing Vector types on Azure CosmosDB for Mongo vCore",
    dateAndTime: "TBA",
    abstract: "Similarity Search Application leveraging vector data types on Azure Cosmos DB for MongoDB vCore. This application will offer two key functionalities: Text to Image search and Image to Image search. In the Text to Image search feature, users can input textual queries, and the application will utilize vector data types to find semantically similar images stored in the Azure Blob.  Similarly, the Image to Image search feature allows users to upload an image, and the application will employ vector data types to search through blob container.",
    bioP1: "My name is Avijit Gupta & I bring 13 years of database expertise spanning across architecture, development, and BI. Currently a Program Manager at Microsoft with focus on utilizing vectors for intelligent data analysis.",
    bioP2: "",
    socialLinks: [
        { url: "linkedin.com/in/avijitkgupta/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/avijit-gupta.jpg",
    liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
  },
  {
    id: 4,
    name: "Craig Courtney",
    session: "Enhancing Data Ingestion and Enrichment at Aware with Azure Cosmos DB",
    dateAndTime: "TBA",
    abstract: "Aware utilizes Azure Cosmos DB to efficiently process vast streams of messages in its AI/ML-driven data ingestion and enrichment pipeline. This session highlights the deployment of Kubernetes KEDA auto-scalers, Azure Cosmos DB partitioning, and throughput autoscaling techniques. We'll discuss practical applications of Azure Cosmos DB change feeds in data management and outline strategies for effective cost management and optimization in a high-volume environment.",
    bioP1: "Craig is a software architect and technology leader with over 25 years of experience in software development. He has helped develop integration, order flow, analysis, and inventory solutions for startups to Fortune 15 companies.",
    bioP2: "",
    socialLinks: [
        { url: "https://www.linkedin.com/in/craig-courtney-74178b6/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/craig-courtney.jpg",
    liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
  },
  {
    id: 5,
    name: "Debasish Biswas",
    session: "Enhancing Data Ingestion and Enrichment at Aware with Azure Cosmos DB",
    dateAndTime: "TBA",
    abstract: "Aware utilizes Azure Cosmos DB to efficiently process vast streams of messages in its AI/ML-driven data ingestion and enrichment pipeline. This session highlights the deployment of Kubernetes KEDA auto-scalers, Azure Cosmos DB partitioning, and throughput autoscaling techniques. We'll discuss practical applications of Azure Cosmos DB change feeds in data management and outline strategies for effective cost management and optimization in a high-volume environment.",
    bioP1: "Debasish Biswas, CTO of Aware, leads Aware's Engineering and Technology effort. Debasish is a seasoned tech veteran with 25+ years' experience leading product engineering teams at companies at different stages of development, from early stage startups all the way to well established mature public tech companies. Debasish's experience and expertise lie in SDN/SDWAN, Network & Cyber Security, Data Engineering/AI+ML.",
    bioP2: "",
    socialLinks: [
        { url: "https://www.linkedin.com/in/debasish-biswas/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/debasish-biswas.jpg",
    liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
  },
  {
    id: 6,
    name: "Deborah Chen",
    session: "How to achieve good cost/performance with Azure Cosmos DB elasticity",
    dateAndTime: "TBA",
    abstract: "In this session, we'll take a look at best practices in Azure Cosmos DB partitioning and how you can use various elasticity features to optimize your workload for good cost/performance, including autoscale, partition merge, and more.",
    bioP1: "Deborah Chen is a Program Manager on Azure Cosmos DB. She focuses on building a great developer experience - Portal experience, notebooks, partitioning, autoscale, and more - and improving the getting started experience for new customers. In her free time, she enjoys building demos to show the capabilities of Azure Cosmos DB. Previously, she worked on Visual Studio, building out new debugging and productivity features.",
    bioP2: "",
    socialLinks: [
        { url: "https://www.linkedin.com/in/deborah-chen-62212437/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/deborah-chen.jpg",
    liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
  },
  {
    id: 7,
    name: "Divakar Kumar",
    session: "CosmicTalent: Workforce Efficiency with AI-Driven Vector Search",
    dateAndTime: "TBA",
    abstract: "By leveraging the native vector search feature in Azure Cosmos DB for MongoDB vCore, we will develop a intelligent application that allows organization to do resource mapping and talent optimization in a better and efficient way. We will start by uploading the resume of all employees via API/batch processing , which is then used by AI Document Intelligence to extract semantic chunks and stored in our vector database. Now, Manager/Business/HR users, queries with relevant JD or custom queries. Query is then vectorized, and then uses it in a vector query against the data stored in Azure Cosmos DB for MongoDB vCore. The results are then passed to Azure OpenAI Service which will then helps in listing all relevant candidates who are currently in bench.",
    bioP1: "I'm a Microsoft Certified Trainer and Cloud Architect with expertise in designing, developing, and architecting robust and scalable solutions with Azure and the .NET stack. I'm passionate about leveraging cloud technologies and DevOps to provide innovative solutions to complex business problems. I'm an active speaker at events and meetups, and I contribute to the community through my blogs at https://iamdivakarkumar.com. I'm also working on a personal project to explore Azure services with real-time implementations based on different use cases at https://azpark.iamdivakarkumar.com.",
    bioP2: "",
    socialLinks: [
        { url: "https://www.linkedin.com/in/divakar-kumar/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/divakar-kumar.jpg",
    liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
  },
  {
    id: 8,
    name: "Farah Abdou",
    session: "Building Intelligent Data Analysis Applications with OpenAI's LLMs and Azure Cosmos DB",
    dateAndTime: "TBA",
    abstract: "This session will explore the integration of Large Language Models (LLMs) from OpenAI with Azure Cosmos DB to develop intelligent data analysis applications. Learn how to enhance data insights using LLMs, leverage Azure Cosmos DB as a vector database, and orchestrate AI workflows with tools like LangChain. The session will cover practical examples, implementation strategies, and best practices for creating AI-powered applications that scale seamlessly.",
    bioP1: "Deborah Chen is a Program Manager on Azure Cosmos DB. She focuses on building a great developer experience - Portal experience, notebooks, partitioning, autoscale, and more - and improving the getting started experience for new customers. In her free time, she enjoys building demos to show the capabilities of Azure Cosmos DB. Previously, she worked on Visual Studio, building out new debugging and productivity features.",
    bioP2: "",
    socialLinks: [
        { url: "https://twitter.com/FaraahCodes", platform: "X" },
        { url: "https://www.linkedin.com/in/farah-m-abdou-1a8a31222/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/farah-abdou.jpg",
    liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
  },
  {
    id: 9,
    name: "Hossein Khadivi Heris",
    session: "LLM App Development Using PromptFlow and Azure Cosmos DB",
    dateAndTime: "TBA",
    abstract: "In this informative talk, we will present the integration of Azure Cosmos DB MongoDB vCore and Postgres in PromptFlow via the pf-azuredata package. This light-weight library streamlines the integration of MongoDB vCore and PostgreSQL’s vector search with PromptFlow, accelerating the development of LLM applications using PromptFlow and Azure AI Studio. These Microsoft tools are essential for building deployment-ready LLM applications. We will demonstrate the integration through a practical sample.",
    bioP1: "Hossein Khadivi Heris is a Senior Applied AI Engineer at Microsoft, where he has been working for the past 5 years. He currently specializes on developing customer-driven AI use cases, leveraging Azure data products such as CosmosDB and Microsoft Fabric to develop large language model applications. He also has expertise in building industrial autonomous systems using reinforcement learning. Before Microsoft, Hossein was a Data Scientist in an energy trading firm, applying machine learning and artificial intelligence to develop profitable trading strategies. He holds an engineering PhD degree from McGill University in Canada and has many publications and patents in scientific and technological domains.",
    bioP2: "",
    socialLinks: [
        { url: "https://www.linkedin.com/in/hossein-khadivi-heris-bb8a2320/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/hossein-khadivi-heris.jpg",
    liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
  },
  {
    id: 10,
    name: "James Codella",
    session: "Building Generative AI Apps with Azure Cosmos DB",
    dateAndTime: "TBA",
    abstract: "In this demo-focused session, we'll see how Azure Cosmos DB can support your Generative AI applications! From using vector search for Retrieval Augmented Generation (RAG), to managing chat histories, semantic caching, and more, all from your favorite orchestration tools like Semantic Kernel and LangChain! Learn why Azure Cosmos DB is the best database for your AI-powered applications!",
    bioP1: "James is a Product Manager in Azure Cosmos DB working on NoSQL Query, vector search, and AI products. He has more than 15 years of experience working in data, analytics, and machine learning. He has a B.S. and an M. Eng. from Cornell University and a Ph.D. from the University of Wisconsin - Madison in Operations Research. He currently lives near NYC with his wife and puppy.",
    bioP2: "",
    socialLinks: [
        { url: "https://twitter.com/jamescodella", platform: "X" },
        { url: "https://www.linkedin.com/in/jamescodella/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/james-codella.jpg",
    liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
  },
];

// Function to generate HTML for each speaker card
function generateSpeakerCard(speaker) {
    var socialLinksHTML = '';
    speaker.socialLinks.forEach(link => {
        if (link.url && link.platform) {
            let svgIcon;
            // Check the social platform and assign the appropriate SVG icon
            if (link.platform === 'X') {
                svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="24">
                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                </svg>`;
            } else if (link.platform === 'LinkedIn') {
                svgIcon = `<svg data-slug-id="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.63 1C1.73 1 1 1.7 1 2.58v18.84C1 22.3 1.73 23 2.63 23h18.74c.9 0 1.63-.7 1.63-1.58V2.58A1.6 1.6 0 0021.37 1H2.63zm5.04 8.48v9.94H4.35V9.48h3.32zm.22-3.07c0 .95-.72 1.72-1.88 1.72h-.02c-1.12 0-1.84-.77-1.84-1.72 0-.98.74-1.72 1.88-1.72s1.84.74 1.86 1.72zm4.94 13H9.51c0-.05.04-9 0-9.93h3.32v1.4a3.3 3.3 0 013-1.63c2.18 0 3.82 1.42 3.82 4.47v5.7h-3.32V14.1c0-1.33-.48-2.24-1.68-2.24-.92 0-1.47.61-1.71 1.2-.09.22-.1.51-.1.8v5.56zm-3.32 0z"></path>
                </svg>`;
            }
            // Append the HTML for the social link with SVG icon
            socialLinksHTML += `
                <div class="col-auto ps-0">
                    <a href="${link.url}" target="_blank" aria-label="Follow Me on ${link.platform}" class="social-link">
                        ${svgIcon}
                    </a>
                </div>
            `;
        }
    });
  
    var liveSessionLink = '';
    if (speaker.liveSessionURL) {
      liveSessionLink = `<a href="${speaker.liveSessionURL}" target="_blank" class="blue">${speaker.dateAndTime} </a>`;
    } else {
      liveSessionLink = speaker.dateAndTime;
    }
  
    return `
        <div class="col-12 col-lg-6">                          
            <div class="card h-100">
                <div class="card-body">
                    <div class="row">
                        <div class="col-auto">
                            <img class="speaker-img-card" role="presentation" alt="" src="${speaker.imageUrl}">
                        </div>
                        <div class="col-auto">
                            <h3 class="pt-3 mb-0"><a class="blue" href="speaker-details.html?id=${speaker.id}">${speaker.name}</a></h3>
                            <h4 class="mb-0">${speaker.session}</h4>
                            <p class="eyebrow" style="color:var(--type-primary)">
                              ${liveSessionLink}
                            </p>
                        </div>
                    </div>
                    <p>${speaker.bioP1}</p>
                </div>
                <div class="card-footer">
                    <div class="row justify-content-end">
                    ${socialLinksHTML}
                    </div>
                </div>
            </div>
        </div>
    `;
  }
  
  // Function to extract speaker ID from URL query parameters
  function getSpeakerIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
  }
  
  // Function to find speaker details by ID
  function findSpeakerById(id) {
    return speakers.find(speaker => speaker.id === id);
  }
  
  // Function to generate HTML for displaying speaker details
  function generateSpeakerDetails(speaker) {
    var socialLinksHTML = '';
    speaker.socialLinks.forEach(link => {
        if (link.url && link.platform) {
            let svgIcon;
            // Check the social platform and assign the appropriate SVG icon
            if (link.platform === 'X') {
                svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="24">
                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                </svg>`;
            } else if (link.platform === 'LinkedIn') {
                svgIcon = `<svg data-slug-id="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.63 1C1.73 1 1 1.7 1 2.58v18.84C1 22.3 1.73 23 2.63 23h18.74c.9 0 1.63-.7 1.63-1.58V2.58A1.6 1.6 0 0021.37 1H2.63zm5.04 8.48v9.94H4.35V9.48h3.32zm.22-3.07c0 .95-.72 1.72-1.88 1.72h-.02c-1.12 0-1.84-.77-1.84-1.72 0-.98.74-1.72 1.88-1.72s1.84.74 1.86 1.72zm4.94 13H9.51c0-.05.04-9 0-9.93h3.32v1.4a3.3 3.3 0 013-1.63c2.18 0 3.82 1.42 3.82 4.47v5.7h-3.32V14.1c0-1.33-.48-2.24-1.68-2.24-.92 0-1.47.61-1.71 1.2-.09.22-.1.51-.1.8v5.56zm-3.32 0z"></path>
                </svg>`;
            }
            // Append the HTML for the social link with SVG icon
            socialLinksHTML += `
                <div class="col-auto pe-0">
                    <a href="${link.url}" target="_blank" aria-label="Follow Me on ${link.platform}" class="social-link">
                        ${svgIcon}
                    </a>
                </div>
            `;
        }
    });
  
    // Check if liveSessionURL is provided
    var watchLiveSessionButton = '';
    if (speaker.liveSessionURL) {
        watchLiveSessionButton = `
            <div class="col-auto">
                <a href="${speaker.liveSessionURL}" target="_blank" class="btn btn-primary">Watch Live Session</a>
            </div>
        `;
    }
  
    return `
        <div class="row">
            <div class="col-12 col-lg-6">
                <img class="speaker-img w-100" role="presentation" alt="" src="${speaker.imageUrl}">
            </div>
            <div class="col-12 col-lg-6">
                <h3 class="pt-3 mb-0">${speaker.name}</h3>
                <h4 class="mb-0">${speaker.session}</h4>
                <p class="eyebrow" style="color:var(--type-primary)">${speaker.dateAndTime}</p>
                <h4 class="mb-0">Abstract</h4>
                <p>${speaker.abstract}</p>
                <h4 class="mb-0">Bio</h4>
                <p>${speaker.bioP1}</p>
                <p>${speaker.bioP2}</p>
                <div class="row align-items-center justify-content-between">
                <div class="col-auto">
                    <div class="row">${socialLinksHTML}</div>
                </div>
                <div class="col-12 mt-3">
                    <a href="/agenda.html#presenters" class="blue">View all presenters</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    `;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Check if on the speaker-details page
    if (window.location.pathname.includes("speaker-details.html")) {
        const speakerId = getSpeakerIdFromURL();
        const speaker = findSpeakerById(speakerId);
        if (speaker) {
            var speakerDetailsContainer = document.getElementById('speaker-details-container');
            speakerDetailsContainer.innerHTML = generateSpeakerDetails(speaker);
        } else {
            console.error("Speaker not found");
        }
    } else {
        // Select the container where the speaker cards will be appended
        var speakerContainer = document.getElementById('speaker-container');
  
        // Iterate through each speaker and generate their respective card
        speakers.forEach(speaker => {
            // Append the generated card HTML to the container
            speakerContainer.innerHTML += generateSpeakerCard(speaker);
        });
    }
  });
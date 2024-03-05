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
            { url: "", platform: "" },
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
            { url: "", platform: "" },
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
            { url: "", platform: "" },
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
            { url: "", platform: "" },
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
            { url: "", platform: "" },
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
        bioP1: "I'm a Microsoft Certified Trainer and Cloud Architect with expertise in designing, developing, and architecting robust and scalable solutions with Azure and the .NET stack.",
        bioP2: "I'm passionate about leveraging cloud technologies and DevOps to provide innovative solutions to complex business problems. I'm an active speaker at events and meetups, and I contribute to the community through my blogs at https://iamdivakarkumar.com. I'm also working on a personal project to explore Azure services with real-time implementations based on different use cases at https://azpark.iamdivakarkumar.com.",
        socialLinks: [
            { url: "", platform: "" },
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
        bioP1: "Deborah Chen is a Program Manager on Azure Cosmos DB. She focuses on building a great developer experience - Portal experience, notebooks, partitioning, autoscale, and more - and improving the getting started experience for new customers. ",
        bioP2: "In her free time, she enjoys building demos to show the capabilities of Azure Cosmos DB. Previously, she worked on Visual Studio, building out new debugging and productivity features.",
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
        bioP1: "Hossein Khadivi Heris is a Senior Applied AI Engineer at Microsoft, where he has been working for the past 5 years. He currently specializes on developing customer-driven AI use cases, leveraging Azure data products such as CosmosDB and Microsoft Fabric to develop large language model applications.",
        bioP2: "He also has expertise in building industrial autonomous systems using reinforcement learning. Before Microsoft, Hossein was a Data Scientist in an energy trading firm, applying machine learning and artificial intelligence to develop profitable trading strategies. He holds an engineering PhD degree from McGill University in Canada and has many publications and patents in scientific and technological domains.",
        socialLinks: [
            { url: "", platform: "" },
            { url: "https://www.linkedin.com/in/hossein-khadivi-heris-bb8a2320/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/hossein-khadivi-heris.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 10,
        name: "Jasmine Greenaway",
        session: "Unleashing Potential: Design Patterns in Azure Cosmos DB",
        dateAndTime: "TBA",
        abstract: "Learn how to unlock the power of strategic design pattern utilization in Azure Cosmos DB for effective data modeling and resilient applications.",
        bioP1: "Jasmine Greenaway is a seasoned technologist with over 15 years of experience, across roles in software development, computer science education, as well as active engagement as a speaker and technical community organizer. ",
        bioP2: "Jasmine has a passion for helping newcomers to tech, understanding the struggles of what it takes to get started and stay motivated. She currently works in developer relations at Microsoft teaches programming and computer science fundamentals at local colleges and schools across the New York City area.",
        socialLinks: [
            { url: "https://twitter.com/paladique", platform: "X" },
            { url: "https://www.linkedin.com/in/jasminegreenaway/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/jasmine-greenaway.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 11,
        name: "James Codella",
        session: "Building Generative AI Apps with Azure Cosmos DB",
        dateAndTime: "TBA",
        abstract: "In this demo-focused session, we'll see how Azure Cosmos DB can support your Generative AI applications! From using vector search for Retrieval Augmented Generation (RAG), to managing chat histories, semantic caching, and more, all from your favorite orchestration tools like Semantic Kernel and LangChain! Learn why Azure Cosmos DB is the best database for your AI-powered applications!",
        bioP1: "James is a Product Manager in Azure Cosmos DB working on NoSQL Query, vector search, and AI products.",
        bioP2: "He has more than 15 years of experience working in data, analytics, and machine learning. He has a B.S. and an M. Eng. from Cornell University and a Ph.D. from the University of Wisconsin - Madison in Operations Research. He currently lives near NYC with his wife and puppy.",
        socialLinks: [
            { url: "https://twitter.com/jamescodella", platform: "X" },
            { url: "https://www.linkedin.com/in/jamescodella/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/james-codella.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 12,
        name: "Karlo Zatylny",
        session: "Turning Growing Pains To Growing Wins With Azure Cosmos DB",
        dateAndTime: "TBA",
        abstract: "As a cloud native application grows in scale with an increase in both customer size and count, the database and compute systems get subject to new and interesting changes. This session will focus on the way which Portnox dealt with tripling our scale in one year in Azure Cosmos DB and the tools and methodologies we used in order to address scale issues in containers and analyze any need for caching.",
        bioP1: "Karlo is the CTO at Portnox Security which includes the responsibilities of engineering, QA, DevOps, security, documentation, and IT. Previous to Portnox, Karlo was at SolarWinds where he was a Distinguished Engineer in charge of designing and implementing a variety of systems including the first AIOps feature. Karlo graduated from UT Austin with a master's degree in software engineering.",
        bioP2: "",
        socialLinks: [
            { url: "", platform: "" },
            { url: "https://www.linkedin.com/in/karlo-zatylny/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/karlo-zatylny.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 13,
        name: "Kirill Gavrylyuk",
        session: "Azure Cosmos DB Conf 2024 Keynote",
        dateAndTime: "TBA",
        abstract: "Hear the latest and greatest from the Azure Cosmos DB team, including new features, customer stories, and a look at the future of the service.",
        bioP1: "Product Leader with experience of leading and growing multiple large scale cloud services from inception to maturity. Responsibilities include product strategy, business strategy, product execution, and leading engineering teams to deliver global cloud services. 20 years of experience building cloud services, distributed systems, frameworks & tools.",
        bioP2: "",
        socialLinks: [
            { url: "https://twitter.com/kirillg_msft", platform: "X" },
            { url: "https://www.linkedin.com/in/kirillgavrylyuk/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/kirill-gavrylyuk.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 14,
        name: "Manish Sharma",
        session: "Dynamic storytelling and NPC interactions using generative AI & Azure Cosmos DB in game development",
        dateAndTime: "TBA",
        abstract: "In this session, we explore the fusion of generative AI and Azure Cosmos DB within the realm of game development. Dive into the dynamic world of storytelling, where non-player characters (NPCs) evolve beyond scripted roles. Discover how generative AI enhances NPC interactions, adapts to player choices, and breathes life into virtual game worlds.",
        bioP1: "Manish Sharma is a Principal Program Manager in Azure Cosmos DB engineering team. He has an experience of 19 years and have experience in architecting high volume/large scale databases ranging from RDBMS, NoSQL & BigData.",
        bioP2: "Currently, he is responsible for Technological product adoption in India & APAC. He has authored a book titled “Cosmos DB for Mongo Developers” published by Apress and also authored on Open Source For You (OSFY). He is a certified Azure Solution Architect, Cloud Data Architect, AWS Sol. Architect, .NET Solution Developer and PMP certified. He is a regular speaker in various technical conferences organized by Microsoft (FutureDecoded, Azure Conference, specialized Webinars) & Community (GIDS, Docker, DPS etc.) for Client-Server, Cloud & Data technologies. He has expertise in NoSQL (Document data model & Graph Data Model) & Searching technologies e.g. Lucene, Solr, Elastic Search, Azure Search etc. & Cloud e.g. Azure, AWS, Softlayer & OpenStack etc. technologies. He had also worked on JAVA, SPRING, .NET, UWP, Client-Server architecture-based applications, SOA integration projects",
        socialLinks: [
            { url: "https://twitter.com/manisharma_ms", platform: "X" },
            { url: "https://www.linkedin.com/in/mannu2050/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/manish-sharma.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 15,
        name: "Marcelo Fonseca",
        session: "Build Scalable Inventory System with Azure Cosmos DB",
        dateAndTime: "TBA",
        abstract: "In this session we will discuss two different approaches to design an inventory management system using several Azure Cosmos DB advanced features and the new Azure Cosmos DB Mirroring in Microsoft Fabric for near real time dashboards.",
        bioP1: "18-year technology professional focused on Microsoft platform and most part of the career on financial services.  Currently helping enterprise customers in financial industry and retail to achieve more using Azure Cosmos DB.",
        bioP2: "",
        socialLinks: [
            { url: "", platform: "X" },
            { url: "fonsecamarcelo", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/marcelo-fonseca.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 16,
        name: "Massimiliano Ungheretti",
        session: "Building Generative AI Apps with Azure Cosmos DB",
        dateAndTime: "TBA",
        abstract: "In this presentation, we will explore the architecture and development of the TomTom Intelligent Vehicle Assistant. This assistant integrates with vehicle infotainment and navigation systems to enable natural and meaningful voice interactions for drivers and passengers.  This advanced voice assistant is powered by Generative AI using the Azure OpenAI API and AI techniques such as vector search, retrieval augmented generation, and tool use. Our architecture relies on Azure Cosmos DB, which stores customer interactions and enables continuous learning and personalization based on each driver's unique preferences. We will discuss the roles that various Azure services play in creating this voice assistant.",
        bioP1: "Massimiliano Ungheretti, PhD, is a Data Scientist at TomTom, where he applies his background in mathematics and software engineering to various machine learning and big data projects. Currently, he's developing the TomTom Intelligent Vehicle Assistant. Prior to this, he worked on a range of Data Science topics at TomTom, including NLP for search engines, A/B testing, and search engine ranking optimization. Before joining TomTom, he earned his PhD in mathematics and worked at ING Bank.",
        bioP2: "",
        socialLinks: [
            { url: "", platform: "X" },
            { url: "https://www.linkedin.com/in/massimilianoungheretti/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/massimiliano-ungheretti.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 17,
        name: "Michael Calvin",
        session: "Fighting financial crime: How Kinectify uses Azure Cosmos DB, Fabric, and Azure AI to stop money laundering",
        dateAndTime: "TBA",
        abstract: "Discover Kinectify's use of Azure Cosmos DB to build a platform that processes thousands of transactions per second, aiding in the detection and prevention of money laundering in gaming. We'll discuss the platform's architecture, why Azure Cosmos DB was chosen, and key lessons from scaling data ingestion. Additionally, we'll explore how integrating this data into Microsoft Fabric enhances our business intelligence, analytics, and AI Ops, contributing to our GenAI and traditional ML initiatives.",
        bioP1: "Michael Calvin is a technology leader driven to deliver great software through high-performance engineering teams. Prior to joining Kinectify, Michael led the development of multiple cloud-first SaaS solutions in the construction technology, identity-proofing (KYC), and financial services markets. He has also delivered both on-premise and cloud solutions in the highly regulated healthcare and education spaces.",
        bioP2: "Michael is a technologist, and enjoys the everyday challenge of solving real-world problems with technology. He is constantly expanding his skillset, learning new languages, and finding new ways to deliver high-quality, high-performance solutions faster. Michael served in the U.S. Marine Corps from 2004 to 2008. After his enlistment, he completed a BS in Information Technology Web Development and an MS in Management Information Systems while working full-time as a programmer. He has completed the High Performance Leadership course from Cornell University, the AWS Certified DevOps Engineer Professional certification, and is a Certified ScrumMaster. Away from work, Michael enjoys traveling, wine-tasting, cooking, and enjoying the perks of California living.",
        socialLinks: [
            { url: "", platform: "X" },
            { url: "https://www.linkedin.com/in/mbcalvin/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/michael-calvin.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 18,
        name: "Michael John Pena",
        session: "Azure Cosmos DB as Vector Database",
        dateAndTime: "TBA",
        abstract: "In this session, we delve into the utilization of Azure Cosmos DB as a vector database. We explore its capabilities in handling large-scale vector data, offering low-latency, high-throughput, and globally distributed scalability. We discuss its multi-model support, which allows for the storage and querying of vector data in various formats. We also provide a hands-on demonstration of how to leverage Azure Cosmos DB for vector data management. This includes a step-by-step guide on setting up the database, loading vector data, and executing queries. The demonstration concludes with an overview of best practices for optimizing performance and cost. This session is ideal for data professionals seeking to enhance their knowledge of Azure Cosmos DB and its application in managing vector data. Attendees will gain practical skills that can be immediately applied in their own projects.",
        bioP1: "Michael John “MJ” Pena is a passionate engineer and business leader who loves Data and AI. He has been working with cutting-edge technologies such as cloud computing, big data analytics, blockchain, IoT, and machine learning for over a decade and a half. He is a Microsoft MVP in Azure and an active community contributor to emerging data technologies.",
        bioP2: "He works as the Data and AI Director at Playtime Solutions, an Australian tech consulting company. He uses technology to create new solutions like data warehouses, real-time analytics, and reports. In his previous life, he held many positions, such as CTO, Solutions Architect, and Technical Lead. MJ is an entrepreneur who co-founded and raised funding for a venture in Cryptocurrency and mobile development. He is adept at stakeholder management, team leadership, and business operations. MJ is a balanced individual who enjoys outdoor activities with his family, such as biking and running. He is always eager to learn new things and share his knowledge with others.",
        socialLinks: [
            { url: "https://twitter.com/mjtpena", platform: "X" },
            { url: "https://www.linkedin.com/in/michaeljohnpena/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/michael-john-pena.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 19,
        name: "Nick Greenfield",
        session: "Exploring Dapr’s Integration with Azure Cosmos DB",
        dateAndTime: "TBA",
        abstract: "Join Nick Greenfield, a Senior Product Manager at Microsoft and Dapr maintainer, as he provides an overview of Dapr and its integration with CosmosDB. Dapr is an open-source runtime that offers developers a set of incrementally adoptable APIs, simplifying the development of distributed applications by abstracting away many implementation complexities. During this session, Nick will demonstrate just how easy it is to use CosmosDB through a set of Dapr APIs. Nick will also cover implementation specifics regarding how Dapr leverages the Azure CosmosDB Go-SDK for communication with Cosmos services.",
        bioP1: "I'm a Senior Product Manager at Microsoft working on the Dapr project, a runtime that helps developers build event-driven, resilient distributed applications. My background in software engineering drives my passion for building products that help developers achieve more.",
        bioP2: "",
        socialLinks: [
            { url: "", platform: "X" },
            { url: "https://www.linkedin.com/in/nicholas-greenfield/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/nick-greenfield.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 20,
        name: "Rebai Hamida",
        session: "Azure Cosmos DB as Vector Database",
        dateAndTime: "TBA",
        abstract: "In this session, we delve into the utilization of Azure Cosmos DB as a vector database. We explore its capabilities in handling large-scale vector data, offering low-latency, high-throughput, and globally distributed scalability. We discuss its multi-model support, which allows for the storage and querying of vector data in various formats. We also provide a hands-on demonstration of how to leverage Azure Cosmos DB for vector data management. This includes a step-by-step guide on setting up the database, loading vector data, and executing queries. The demonstration concludes with an overview of best practices for optimizing performance and cost. This session is ideal for data professionals seeking to enhance their knowledge of Azure Cosmos DB and its application in managing vector data. Attendees will gain practical skills that can be immediately applied in their own projects.",
        bioP1: "Hamida Rebai has been working in the computing domain for over 14 years. She started her professional career in Tunisia working for multinational corporations (MNCs) as a software developer, then served as a .NET consultant at CGI, Canada. She is currently a senior advisor and information and solution integration architect at Revenu Québec, Canada.",
        bioP2: "She has been awarded as Most Valuable Professional in Developer Technologies and Microsoft DevHeros by Microsoft and holds several Azure certifications. She is a Docker Captain. Besides being a Microsoft Certified Trainer and a member of the .NET Foundation, Hamida is a Book author, blogger, international speaker, and one of the finalists in the Women in IT Award in Canada in 2019.",
        socialLinks: [
            { url: "https://twitter.com/RebaiHamida", platform: "X" },
            { url: "https://www.linkedin.com/in/hamida-rebai-trabelsi-09b8525/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/rebai-hamida.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 21,
        name: "Revin Chalil",
        session: "Near real-time analytics on Azure Cosmos DB with Microsoft Fabric mirroring",
        dateAndTime: "TBA",
        abstract: "In this session, learn how you can bring Azure Cosmos DB data into Microsoft Fabric and run no-ETL, near real-time analytics over your operational data. Mirroring allows you to unify your data estate and break down silos. You can seamlessly mirror data from various sources like Snowflake, Azure Cosmos DB, Azure SQL DB, etc. into Fabric. Once the data is replicated into Fabric OneLake, you can join data across these mirrored artifacts and build complex analytical solutions with ease, unifying your data estate.",
        bioP1: "Principal Manager, Engineering and Product, Azure Cosmos DB Team",
        bioP2: "",
        socialLinks: [
            { url: "", platform: "X" },
            { url: "https://www.linkedin.com/in/revin/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/revin-chalil.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 22,
        name: "Rodrigo Souza",
        session: "Near real-time analytics on Azure Cosmos DB with Microsoft Fabric mirroring",
        dateAndTime: "TBA",
        abstract: "In this session, learn how you can bring Azure Cosmos DB data into Microsoft Fabric and run no-ETL, near real-time analytics over your operational data. Mirroring allows you to unify your data estate and break down silos. You can seamlessly mirror data from various sources like Snowflake, Azure Cosmos DB, Azure SQL DB, etc. into Fabric. Once the data is replicated into Fabric OneLake, you can join data across these mirrored artifacts and build complex analytical solutions with ease, unifying your data estate.",
        bioP1: "Data Professional with 25+ years of experience on Analytics, Information Architecture, Big Data, Cloud Computing, Data Modeling, Machine Learning, and Database Administration.",
        bioP2: "From startups to large organizations, always delivered commitment and innovation. After 2 years as AI instructor on Microsoft Cloud & AI team, migrated to the Cosmos DB team as a Senior Program Manager for Synapse Link, Power BI OLTP connector, and Python SDK. Microsoft certified AI Engineer, Instructor, Golden Speaker, Hackathon Leader and SQL Specialist.",
        socialLinks: [
            { url: "https://twitter.com/rodrigosqsz", platform: "X" },
            { url: "https://www.linkedin.com/in/rodrigossz/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/rodrigo-souza.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 23,
        name: "Sajeetharan Sinnathurai",
        session: "Effortless GraphQL: Data API Builder with Azure Cosmos DB Emulator for Cost-Free Cloud Simulation",
        dateAndTime: "TBA",
        abstract: "In this session, we'll delve into Data API Builder, an open-source, cross-platform tool. With a single config file and zero coding, it swiftly creates secure GraphQL endpoints for Azure Cosmos DB. We'll also demonstrate using the Azure Cosmos DB emulator to rapidly build APIs and simulate the cloud experience.",
        bioP1: "Wth over 13 years of experience in the ICT industry, Sajeetharan Sinnathurai is a Cloud Solution Architect, an enthusiast in Cloud and Web Development. He currently works at Microsoft as a Program Manager in the Azure Cosmos DB team.",
        bioP2: "His skill in Web Application Architecture, Cloud and more has seen him become a Microsoft MVP in Developer Technologies, Google developer expert in Web technology. Sajeetharan is also the top contributor on stack Overflow in Sri Lanka and he ranks among the top 10 contributors in the world on Angular, Cosmos DB, etc. He is also a reviewer on https://www.packtpub.com/ .He now focuses on channeling his knowledge into open source projects and sharing it with the community by mentoring,creating POCS,running workshops,writing blogs to help make the world a better and more developed place.",
        socialLinks: [
            { url: "https://twitter.com/kokkisajee", platform: "X" },
            { url: "https://www.linkedin.com/in/sajeetharan/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/sajeetharan-sinnathurai.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 24,
        name: "Sergiy Smyrnov",
        session: "Build Scalable Inventory System with Azure Cosmos DB",
        dateAndTime: "TBA",
        abstract: "In this session we will discuss two different approaches to design an inventory management system using several Azure Cosmos DB advanced features and the new Azure Cosmos DB Mirroring in Microsoft Fabric for near real time dashboards.",
        bioP1: "Sergiy Smyrnov is a Senior Specialist @ Microsoft Data&AI Global Black Belt Team focusing on helping customers to solve mission critical problems with help of distributed NoSQL database technologies. Sergiy has extensive experience in database development, architecture and performance tuning across various Relational, NoSQL and NewSQL technologies.",
        bioP2: "",
        socialLinks: [
            { url: "", platform: "X" },
            { url: "https://www.linkedin.com/in/sergiy-smyrnov/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/sergiy-smyrnov.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 25,
        name: "Shay Rojansky",
        session: "Use EF Core to transition from SQL Server to Azure Cosmos DB",
        dateAndTime: "TBA",
        abstract: "Differences in the characteristics and capabilities of document databases when compared to relational databases mean that it is often unwise to lift a relational model and attempt to use it directly with a document database. However, with appropriate changes to the data model and its use, a relational workload can be moved to a document database, especially when using an abstraction like EF Core. In this session, we take a simple application using EF Core and the SQL Server database provider and migrate it to use EF Core with the Azure Cosmos DB database provider, making appropriate changes along the way to promote best practices for working with document databases.",
        bioP1: "I'm in love with everything data in .NET - Entity Framework, System.Data, and anything else that has you talking to some sort of database. I'm especially interested in making things go faster, and going deep into the guts of things in order to make that happen. I'm also one of the developers working on Npgsql, the PostgreSQL .NET provider.",
        bioP2: "",
        socialLinks: [
            { url: "https://twitter.com/shayrojansky", platform: "X" },
            { url: "https://www.linkedin.com/in/shay-rojansky/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/shay-rojansky.png",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 26,
        name: "Tara Bhatia",
        session: "Best Practices for Building Multi-Tenant Applications on Azure Cosmos DB",
        dateAndTime: "TBA",
        abstract: "In this session, we’ll discuss best practices to follow when building mission-critical multi tenant systems on Azure Cosmos DB. Using a real-world example, we’ll deep dive into key concepts surrounding performance and security isolation and discuss best practices when it comes to key Azure Cosmos DB design considerations and capabilities — including selecting a partition key, setting throughput, and modeling your data.",
        bioP1: "Tara is a program manager at Microsoft for Azure Cosmos DB. She works primarily on elasticity features like autoscale, partition merge, and hierarchical partition keys.",
        bioP2: "",
        socialLinks: [
            { url: "", platform: "X" },
            { url: "https://www.linkedin.com/in/tarabhatia01/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/tara-bhatia.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 27,
        name: "Teena Idnani",
        session: "Azure Cosmos DB as Vector Database",
        dateAndTime: "TBA",
        abstract: "In this session, we delve into the utilization of Azure Cosmos DB as a vector database. We explore its capabilities in handling large-scale vector data, offering low-latency, high-throughput, and globally distributed scalability. We discuss its multi-model support, which allows for the storage and querying of vector data in various formats. We also provide a hands-on demonstration of how to leverage Azure Cosmos DB for vector data management. This includes a step-by-step guide on setting up the database, loading vector data, and executing queries. The demonstration concludes with an overview of best practices for optimizing performance and cost. This session is ideal for data professionals seeking to enhance their knowledge of Azure Cosmos DB and its application in managing vector data. Attendees will gain practical skills that can be immediately applied in their own projects.",
        bioP1: "Teena Idnani is a Senior Lead Software Engineer based out of London. As a certified Azure Solutions Architect, she excels in building scalable cloud-native event driven architectures and is a key player in uplifting engineering practices across her organisation. ",
        bioP2: "In her current role, she enables various teams as they migrate and modernise their applications on Azure. She is also actively engaged in exploring potential applications of Quantum computing in finance. She is a prolific public speaker and enjoys mentoring young minds/women in tech.",
        socialLinks: [
            { url: "", platform: "X" },
            { url: "https://www.linkedin.com/in/teenaidnani/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/teena-idnani.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 28,
        name: "Theo van Kraay",
        session: "Bulk read and update millions of items in seconds with the Cosmos DB Spark Connector!",
        dateAndTime: "TBA",
        abstract: "In modern day IoT scenarios its common to receive batches of updates in the tens of millions from pre-processed signals - for example digital twin - from fleets of billions of devices. Suppose you need to read each item before doing the update - how do you process these updates in seconds without using enormous client resources? This session walks through the latest optimisations for bulk read/replace/patch in the Spark Connector to vastly improve the efficiency of this kind of operation.",
        bioP1: "Theo is passionate about NoSQL and distributed computing. He joined Microsoft in 2017 and has been in the Cosmos DB Engineering team as a Program Manager since 2019. He is currently leads product management of Java Ecosystem, high availability, and Cassandra offerings for Cosmos DB.",
        bioP2: "",
        socialLinks: [
            { url: "https://twitter.com/theokraay", platform: "X" },
            { url: "https://www.linkedin.com/in/theo-van-kraay-3388b130/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/theodorus-leonardus-van-kraay.jpg",
        liveSessionURL: "https://www.youtube.com/watch?v=PcSqw3CyABE"
    },
    {
        id: 29,
        name: "William Harding",
        session: "Procedural Simulation, AI creativity and stochastic modeling. Using Azure Cosmos DB to make games.",
        dateAndTime: "TBA",
        abstract: "In this session, we delve into the utilization of Azure Cosmos DB as a vector database. We explore its capabilities in handling large-scale vector data, offering low-latency, hiI've always had a hobby in Simulation, Games and Azure Infrastructure. In this talk, I'll show how you can leverage Azure, Cosmos DB and open source data science tools to build rich, extendable experiences. The Azure Cosmos DB graph, combined with Open AI can be used to generate very rich procedural experiences in real time. The application of the tools in this demo extend beyond games, the framework can be used for a number of Azure experience that use AI, graphs and event-based web experiences. https://github.com/BillmanH/exoplanets",
        bioP1: "William Harding (Bill), has been working in the Azure Ecosystem since 2010, mostly focused in the area of Data Science and Advanced Analytics.",
        bioP2: "",
        socialLinks: [
            { url: "https://twitter.com/BillmanH", platform: "X" },
            { url: "https://www.linkedin.com/in/hardingwilliam/", platform: "LinkedIn" }
        ],
        imageUrl: "./images/speaker-images/william-harding.jpg",
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

document.addEventListener("DOMContentLoaded", function () {
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
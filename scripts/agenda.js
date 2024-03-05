// Define the array of speaker objects
var speakers = [
  {
    id: 1,
    name: "Anitha Adusumilli",
    session: "Talk Title Name",
    dateAndTime: "MM/DD/YYYY, 10:00 AM - 10:45 AM",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bioP1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    bioP2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    socialLinks: [
        { url: "https://azure.microsoft.com/en-us/products/cosmos-db", platform: "X" },
        { url: "https://www.linkedin.com/showcase/microsoft-azure/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/anitha-adusumilli.jpg",
    liveSessionURL: "https://example.com/live-session"
  },
  {
    id: 2,
    name: "Arthur Vickers",
    session: "Talk Title Name",
    dateAndTime: "MM/DD/YYYY, 10:00 AM - 10:45 AM",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bioP1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    bioP2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    socialLinks: [
        { url: "https://azure.microsoft.com/en-us/products/cosmos-db", platform: "X" },
        { url: "https://www.linkedin.com/showcase/microsoft-azure/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/arthur-vickers.jpg",
    liveSessionURL: "https://example.com/live-session"
  },
  {
    id: 3,
    name: "Avijit Gupta",
    session: "Talk Title Name",
    dateAndTime: "MM/DD/YYYY, 10:00 AM - 10:45 AM",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bioP1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    bioP2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    socialLinks: [
        { url: "https://azure.microsoft.com/en-us/products/cosmos-db", platform: "X" },
        { url: "https://www.linkedin.com/showcase/microsoft-azure/", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/avijit-gupta.jpg",
    liveSessionURL: "https://example.com/live-session"
  },
  {
    id: 4,
    name: "Deborah Chen",
    session: "Talk Title Name",
    dateAndTime: "MM/DD/YYYY, 10:00 AM - 10:45 AM",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bioP1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    bioP2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    socialLinks: [
        { url: "https://azure.microsoft.com/en-us/products/cosmos-db", platform: "X" },
        { url: "", platform: "LinkedIn" }
    ],
    imageUrl: "./images/speaker-images/deborah-chen.jpg",
    liveSessionURL: ""
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
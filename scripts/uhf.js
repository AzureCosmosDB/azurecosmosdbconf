let partnerId = "AZCosmos";
let headerId = "AZCosmosHeader";
let footerId = "AZCosmosFooter";
let locale = "en-us";
let cacheKey = partnerId + headerId + footerId + locale;
let expiry = 60*60*1000; // 1 hour in milliseconds

function GetUHF() {

    let uhf = customLocalStorage.getItem(cacheKey);
    if (uhf) {
        return uhf;
    }

    const request = new XMLHttpRequest();
    request.open('GET', `https://uhf.microsoft.com/${locale}/shell/xml/${partnerId}?headerId=${headerId}&footerId=${footerId}&CookieComplianceEnabled=true`, false);
    request.send(null);
    let xmlDoc = request.responseXML;

    if (typeof xmlDoc === 'undefined' || xmlDoc == null) {
        // Return last cached copy if it exists.
        return customLocalStorage.getItem(cacheKey);
    }
    else {
        // Extract CDATA content from XML response.
        uhf = {
            cssIncludes: xmlDoc.getElementsByTagName("cssIncludes")[0].childNodes[1].nodeValue,
            headerHtml: xmlDoc.getElementsByTagName("headerHtml")[0].childNodes[1].nodeValue,
            footerHtml: xmlDoc.getElementsByTagName("footerHtml")[0].childNodes[1].nodeValue,
            javascriptIncludes: xmlDoc.getElementsByTagName("javascriptIncludes")[0].childNodes[1].nodeValue,
        };

        // Copy script block from footer html.
        let scriptRegex = /<script(?:\s+id="uhf-footer-ccpa")?.*?>([\s\S]*?)<\/script>/;
        let match = uhf.footerHtml.match(scriptRegex);
        if (match) {
            uhf.javascriptBlock = match[1];
        }

        // Remove useless script block from footer html.
        scriptRegex = /(<script(?:\s+id="uhf-footer-ccpa")?.*?>[\s\S]*?<\/script>)/;
        match = uhf.footerHtml.match(scriptRegex);
        if (match) {
            uhf.footerHtml = uhf.footerHtml.replace(scriptRegex, '');
        }

        customLocalStorage.setItem(cacheKey, uhf, expiry);
        return uhf;
    }
}

let uhf = GetUHF();
if (uhf) {
    let cssIncludes = uhf.cssIncludes;
    let headerHtml = uhf.headerHtml;
    let footerHtml = uhf.footerHtml;
    let javascriptIncludes = uhf.javascriptIncludes;
    let javascriptBlock = uhf.javascriptBlock;

    // Add CSS Includes to the end of HTML head element.
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = cssIncludes;
    let cssNodes = Array.from(tempDiv.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);

    // Load CSS files sequentially and then proceed with header and footer content.
    function loadCSSFiles(index) {
        if (index < cssNodes.length) {
            let cssNode = cssNodes[index];
            let cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href = cssNode.getAttribute('href');
            cssLink.onload = function () {
                loadCSSFiles(index + 1); // Load next CSS file
            };
            document.head.appendChild(cssLink);
        } else {
            // All CSS files loaded, proceed with header and footer content.
            loadHeaderAndFooter();
        }
    }

    // Function to load header and footer content.
    function loadHeaderAndFooter() {
        // Add header HTML into header element.
        let obj = document.getElementById("uhf-header-html");
        if (obj && (headerHtml.length > 0)) {
            obj.innerHTML = headerHtml;
        }

        // Add footer HTML into footer element.
        obj = document.getElementById("uhf-footer-html");
        if (obj && (footerHtml.length > 0)) {
            obj.innerHTML = footerHtml;
        }

        // Add JavaScript Includes to the end of HTML body element.
        let scriptRegex = /<script.*?src=['"](.*?)['"].*?<\/script>/g;
        let match;
        while ((match = scriptRegex.exec(javascriptIncludes)) !== null) {
            let scriptElement = document.createElement('script');
            scriptElement.src = match[1];
            document.body.appendChild(scriptElement);
        }

        // Add JavaScript block to the end of HTML body element.
        let scriptElement = document.createElement('script');
        scriptElement.innerHTML = javascriptBlock;
        document.body.appendChild(scriptElement);

        // Include 1DS to the end of HTML body element (must be after other UHF Javascript).
        scriptElement = document.createElement('script');
        scriptElement.src = "scripts/1ds.js";
        document.body.appendChild(scriptElement);

        // Execute jQuery code after all content is loaded.
        $(function () {
            document.body.style.visibility = 'visible';
        });
    }

    // Start loading CSS files.
    loadCSSFiles(0);
}

// Script to update View Details links with unique application IDs
const fs = require('fs');
const path = require('path');

// Read the HTML file
const filePath = path.join(__dirname, 'Student-my-application.html');
let content = fs.readFileSync(filePath, 'utf8');

// Replace each View Details link with a unique application ID
for (let i = 1; i <= 8; i++) {
    const searchStr = `View Details</button>`;
    const replaceStr = `View Details</a>`;
    content = content.replace(searchStr, replaceStr);
    
    const searchHref = `onclick="openModal('appModal${i}')`;
    const replaceHref = `href="Student-my-application-details.html?id=${i}`;
    content = content.replace(searchHref, replaceHref);
}

// Write the updated content back to the file
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated View Details links with unique application IDs.');

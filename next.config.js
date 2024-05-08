const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}

// const path = require('path');

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     // Remove 'domains' configuration
//     // Add 'remotePatterns' configuration with an array of regular expressions
//     remotePatterns: [
//       '^https://res\\.cloudinary\\.com/',
//       '^https://media\\.dev\\.to/'
//     ]
//   }
// };

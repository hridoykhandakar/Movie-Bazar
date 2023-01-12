/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = {
//   images:{
//     remotePatterns:[
//       {
//         protocol:'https',
//         hostname: ["links.papareact.com", "image.tmdb.org"],

//       }
//     ]
//   }
// }

module.exports = {
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
}

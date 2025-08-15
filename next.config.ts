import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.worldvectorlogo.com',
			},
			{
				protocol: 'https',
				hostname: 'www.svgrepo.com',
			},
			{
				protocol: 'https',
				hostname: 'techicons.dev',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
			{
				protocol: 'https',
				hostname: 'logos-world.net',
			},
			{
				protocol: 'https',
				hostname: 'playwright.dev',
			},
			{
				protocol: 'https',
				hostname: 'docs.cypress.io',
			},
			{
				protocol: 'https',
				hostname: 'developers.google.com',
			},
			{
				protocol: 'https',
				hostname: 'www.postman.com',
			},
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
			},
			{
				protocol: 'https',
				hostname: 'nextjs.org',
			},
			{
				protocol: 'https',
				hostname: 'typescriptlang.org',
			},
			{
				protocol: 'https',
				hostname: 'nodejs.org',
			},
			{
				protocol: 'https',
				hostname: 'www.mongodb.com',
			},
			{
				protocol: 'https',
				hostname: 'tailwindcss.com',
			},
			{
				protocol: 'https',
				hostname: 'git-scm.com',
			},
			{
				protocol: 'https',
				hostname: 'www.docker.com',
			},
			{
				protocol: 'https',
				hostname: 'wac-cdn.atlassian.com',
			},
			{
				protocol: 'https',
				hostname: 'datadog-docs.imgix.net',
			},
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
			},
			{
				protocol: 'https',
				hostname: 'github.githubassets.com',
			}
		],
	},
};

export default nextConfig;
# Kaushik Janmanchi — Light Portfolio

A clean light-theme Next.js portfolio designed for Software Engineering, DevOps, Cloud and SRE roles.

## Run locally

```bash
npm install
npm run dev
```

The project is configured to run on:

http://localhost:3001

This intentionally uses port 3001 so it doesn't conflict with another project running on port 3000.

## Replace the profile image

Replace:

`public/profile-placeholder.svg`

with your own image, preferably:

`public/profile.jpg`

Then update this line in `src/data/portfolio.ts`:

```ts
profileImage: "/profile.jpg",
```

## Resume

The resume is already included as:

`public/resume.pdf`

The View Resume button opens it in a new tab.

## Main content

All portfolio content is centralized in:

`src/data/portfolio.ts`

This includes:

- All four professional experiences
- MediFlow AI
- AI Job Radar
- Technical skills
- Education
- Contact details
- LinkedIn and GitHub links

## Production build

```bash
npm run build
```

Because the project uses Next.js static export, the generated site can also be deployed to GitHub Pages.

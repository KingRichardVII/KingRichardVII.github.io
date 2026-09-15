# Richard Phan Portfolio

Personal cybersecurity, infrastructure, and IT portfolio built with Astro, Tailwind CSS, and DaisyUI.

This site serves as a recruiter-facing portfolio for documenting hands-on work in enterprise IT, systems administration, cybersecurity, networking, virtualization, and software development.

---

## Live Site

Currently preparing for deployment through GitHub Pages.

GitHub Pages repository:

```text
KingRichardVII.github.io
```

Future custom domain:

```text
richardphan.com
```

---

## Portfolio Sections

- Home
- Projects
- Resume
- Contact

The site is designed around a simple principle:

> **The main portfolio should be easy to scan. Detailed technical evidence belongs inside individual project case studies and GitHub repositories.**

---

## Focus Areas

- Cybersecurity
- Infrastructure
- Linux Systems Administration
- Identity & Access Management
- Networking
- Virtualization
- Enterprise IT
- Automation
- Software Development

---

# Project Management

Project information is managed primarily from:

```text
src/data/projects.ts
```

This file controls:

- project title
- short description
- status
- technology tags
- thumbnail
- project-page link

Reusable project cards are controlled by:

```text
src/components/ProjectCard.astro
```

The main Projects page is:

```text
src/pages/projects.astro
```

Do **not** manually create separate project-card layouts for every project.

Instead, add or update projects inside:

```text
src/data/projects.ts
```

---

## Project Images

Project screenshots and assets should be stored under:

```text
public/projects/
```

Recommended structure:

```text
public/projects/
├── homelab/
│   ├── thumbnail.webp
│   ├── architecture.webp
│   ├── proxmox-dashboard.webp
│   └── ssh-session.webp
│
├── linux/
│   ├── thumbnail.webp
│   └── screenshot-01.webp
│
└── eventcentral/
    ├── thumbnail.webp
    └── application-ui.webp
```

Project thumbnails should communicate what the project is quickly without requiring someone to read a large paragraph.

Screenshots should provide **evidence**, not decoration.

---

# Project Case Studies

Reusable project-page layout:

```text
src/layouts/ProjectLayout.astro
```

Project-page template:

```text
src/templates/ProjectPageTemplate.astro
```

When a project becomes ready for full documentation:

1. Copy the project-page template.
2. Place the copy under:

```text
src/pages/projects/
```

3. Rename it using a URL-friendly name.

Example:

```text
src/pages/projects/infrastructure-homelab.astro
```

4. Add screenshots under:

```text
public/projects/project-name/
```

5. Update the project's `href` inside:

```text
src/data/projects.ts
```

A good case study may include:

- Overview
- Objective
- Architecture
- Technologies
- Implementation
- Screenshots / Evidence
- Challenges & Troubleshooting
- Security Considerations
- Lessons Learned
- Future Improvements
- GitHub Repository

---

# Resume

The downloadable résumé should be stored at:

```text
public/resume/Richard_Phan_Resume.pdf
```

Detailed résumé update instructions are located at:

```text
public/resume/README.md
```

When updating the résumé:

1. Export the newest résumé as PDF.
2. Name it exactly:

```text
Richard_Phan_Resume.pdf
```

3. Replace the existing file.

Keeping the same filename means the website does not need code changes.

---

# Profile Photo

The sidebar profile image is:

```text
public/profile.webp
```

To update it:

1. Use a square or near-square professional photo.
2. Convert it to WebP.
3. Name it:

```text
profile.webp
```

4. Replace the existing file.

No code changes are required if the filename remains the same.

---

# Other Website Assets

Additional asset documentation is available at:

```text
public/README-ASSETS.md
```

Important assets include:

```text
public/profile.webp
public/favicon.svg
public/social_img.webp
```

The social preview image should ideally be approximately:

```text
1200 x 630
```

---

# Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

The local site normally runs at:

```text
http://localhost:4321
```

Create a production build:

```bash
pnpm run build
```

Before pushing significant changes, make sure the production build completes successfully.

---

# Git Development Workflow

This portfolio is developed across multiple computers.

The most important rule is:

> **PULL BEFORE YOU EDIT. PUSH BEFORE YOU LEAVE.**

This prevents one computer from working on an outdated copy of the repository.

---

## Starting a Work Session

Before making changes:

```bash
git pull
git status
```

`git pull` downloads the newest commits from GitHub.

`git status` confirms the state of the repository before you begin.

Then start the development server if needed:

```bash
pnpm run dev
```

---

## Normal Workflow

```text
DESKTOP

git pull
git status
↓
work
↓
git status
↓
git add -A
git status
↓
git commit -m "Describe what changed"
git push
↓
GitHub


LAPTOP

git pull
git status
↓
continue working
```

The same workflow works in either direction.

---

# When to Use `git status`

Use:

```bash
git status
```

frequently.

It is a safe command and does not modify the repository.

It tells you:

- what branch you are currently using
- which files were modified
- which files were added
- which files were deleted
- which files are staged
- whether the working tree is clean
- whether your branch is ahead of or behind GitHub

---

## Before Starting Work

Run:

```bash
git pull
git status
```

This helps confirm that:

- you downloaded the newest code
- you are on the expected branch
- there are no forgotten local changes

---

## After Making Changes

Run:

```bash
git status
```

This shows exactly which files you changed.

Review the list before staging anything.

---

## Before a Commit

Stage your changes:

```bash
git add -A
```

Then immediately check:

```bash
git status
```

This is important.

It shows exactly what will be included in the next commit.

Do **not** blindly commit files you do not recognize.

---

## Create the Commit

Use a short message describing what changed.

Example:

```bash
git commit -m "Improve responsive project layout"
```

Other examples:

```bash
git commit -m "Update portfolio project screenshots"
```

```bash
git commit -m "Add Infrastructure Homelab case study"
```

```bash
git commit -m "Update resume and profile image"
```

---

## Push to GitHub

After committing:

```bash
git push
```

Then verify:

```bash
git status
```

Ideally Git should report:

```text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

At this point the changes are safely stored on GitHub.

---

# End-of-Session Workflow

Before leaving a computer:

```bash
git status
git add -A
git status
git commit -m "Describe what changed"
git push
git status
```

The second `git status` is useful because it confirms exactly what is staged before creating the commit.

The final `git status` confirms that everything was committed and pushed successfully.

---

# Switching Computers

Before leaving one computer:

```bash
git status
git add -A
git status
git commit -m "Describe what changed"
git push
```

Then on the other computer:

```bash
git pull
git status
```

Continue working only after the newest commits have been downloaded.

The workflow is:

```text
DESKTOP

git pull
↓
work
↓
git add -A
git commit
git push
↓
GitHub


LAPTOP

git pull
↓
continue working
```

And vice versa.

---

## Important Git Rule

Avoid editing the same files independently on two computers before synchronizing them.

For example:

```text
BAD:

Desktop modifies projects.astro
↓
does NOT push

Laptop modifies projects.astro
↓
tries to push
```

This can create a merge conflict.

Instead:

```text
GOOD:

Desktop works
↓
Desktop commits + pushes
↓
Laptop pulls
↓
Laptop continues working
```

Remember:

> **PULL BEFORE YOU EDIT. PUSH BEFORE YOU LEAVE.**

---

# Useful Git Commands

Check repository state:

```bash
git status
```

Download newest commits:

```bash
git pull
```

Stage all changes:

```bash
git add -A
```

Create a commit:

```bash
git commit -m "Describe what changed"
```

Upload commits:

```bash
git push
```

View recent commits:

```bash
git log --oneline
```

Check which remote repository is connected:

```bash
git remote -v
```

---

# Built With

- Astro
- Tailwind CSS
- DaisyUI
- TypeScript
- Git
- GitHub

---

# Template

This portfolio is based on the open-source **Astrofy** template by Manuel Ernesto and has been customized for Richard Phan's cybersecurity, infrastructure, and IT portfolio.

The original project is distributed under the MIT License.

See:

```text
LICENSE
```

for licensing information.

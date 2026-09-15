/*
===============================================================================
                         HOW TO MANAGE PROJECTS
===============================================================================

This file is the MAIN place to add, remove, reorder, or update projects.

You usually SHOULD NOT need to edit:
    src/components/ProjectCard.astro

That component controls how project cards look.

-------------------------------------------------------------------------------
HOW TO ADD A NEW PROJECT
-------------------------------------------------------------------------------

1. Copy one existing project object below.

2. Change:
       title
       description
       image
       href
       status
       tags

3. Add the project's thumbnail image under:

       public/projects/

   Recommended structure:

       public/projects/project-name/thumbnail.webp

   Example:

       public/projects/active-directory/thumbnail.webp

4. If the project DOES NOT have a finished case-study page yet:

       href: undefined

   The project will still appear normally, but it will NOT create a dead link.

5. Once the detailed portfolio page exists, set:

       href: "/projects/project-name"

   Example:

       href: "/projects/active-directory"

6. Then create:

       src/pages/projects/project-name.astro

-------------------------------------------------------------------------------
HOW TO ADD / CHANGE A PROJECT IMAGE
-------------------------------------------------------------------------------

Recommended thumbnail:
    - WebP
    - 16:10-ish aspect ratio
    - clear and readable at small size
    - real screenshot / architecture diagram preferred
    - avoid stock images

Example:

    image: "/projects/homelab/thumbnail.webp"

means the actual file should be:

    public/projects/homelab/thumbnail.webp

If a project has no image yet, use:

    image: undefined

The site will display a placeholder instead of a broken image.

-------------------------------------------------------------------------------
HOW TO LINK TO A PROJECT CASE STUDY
-------------------------------------------------------------------------------

If the portfolio documentation page exists:

    href: "/projects/infrastructure-homelab"

If it does NOT exist yet:

    href: undefined

Do NOT use:
    href: "#"

Dead links make the site feel unfinished.

-------------------------------------------------------------------------------
HOW TO LINK GITHUB
-------------------------------------------------------------------------------

GitHub links belong INSIDE the detailed project page, not on this summary page.

Example case-study button:

    <a
        href="https://github.com/KingRichardVII/REPOSITORY-NAME"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-outline rounded-xl"
    >
        View on GitHub
    </a>

Only add the GitHub link once the repository is presentable.

-------------------------------------------------------------------------------
PROJECT PAGE PHILOSOPHY
-------------------------------------------------------------------------------

Projects page:
    RECRUITER SCANNING

Keep descriptions SHORT.

Detailed project page:
    TECHNICAL STORY + EVIDENCE

Good case-study sections:

    Overview
    Objective
    Architecture
    Technologies
    Implementation
    Screenshots / Evidence
    Challenges & Troubleshooting
    Security Considerations
    Lessons Learned
    Future Improvements
    GitHub Documentation

===============================================================================
*/


export interface Project {
    title: string;
    description: string;
    image?: string;
    href?: string;
    status?: string;
    tags: string[];
}


export const projects: Project[] = [
    {
        title: "Infrastructure Homelab",

        description:
            "Proxmox-based environment for Linux, networking, identity, and security labs.",

        /*
        Replace this with:
            "/projects/homelab/thumbnail.webp"

        once a real screenshot or architecture image is ready.
        */
        image: undefined,

        /*
        Change this to:
            "/projects/infrastructure-homelab"

        once the detailed case-study page exists.
        */
        href: undefined,

        status: "IN PROGRESS",

        tags: [
            "Proxmox VE",
            "Ubuntu",
            "Networking",
            "SSH",
        ],
    },


    {
        title: "Linux Systems Administration",

        description:
            "Linux administration, SSH, permissions, firewalling, logging, and troubleshooting.",

        /*
        Future image:
            "/projects/linux/thumbnail.webp"
        */
        image: undefined,

        /*
        Future case study:
            "/projects/linux-systems"
        */
        href: undefined,

        status: "IN PROGRESS",

        tags: [
            "Linux",
            "SSH",
            "UFW",
            "iptables",
        ],
    },


    {
        title: "EventCentral",

        description:
            "Full-stack event platform with OAuth, PostgreSQL RLS, and role-based access controls.",

        /*
        Future image:
            "/projects/eventcentral/thumbnail.webp"
        */
        image: undefined,

        /*
        Future case study:
            "/projects/eventcentral"
        */
        href: undefined,

        status: "COMPLETE",

        tags: [
            "TypeScript",
            "React",
            "PostgreSQL",
            "OAuth",
        ],
    },
];
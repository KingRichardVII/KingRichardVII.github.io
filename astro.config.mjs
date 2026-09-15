import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

/*
===============================================================================
                         ASTRO SITE CONFIGURATION
===============================================================================

CURRENT DEPLOYMENT:

    https://KingRichardVII.github.io

Because this repository is named:

    KingRichardVII.github.io

NO `base` setting is required for GitHub Pages.

-------------------------------------------------------------------------------
WHEN MOVING TO richardphan.com
-------------------------------------------------------------------------------

Change:

    site: 'https://KingRichardVII.github.io'

to:

    site: 'https://richardphan.com'

You will also need to update:

    public/robots.txt

from:

    Sitemap: https://KingRichardVII.github.io/sitemap-index.xml

to:

    Sitemap: https://richardphan.com/sitemap-index.xml

GitHub Pages custom-domain/DNS setup will be handled separately.

===============================================================================
*/

export default defineConfig({
    site: 'https://KingRichardVII.github.io',
    integrations: [
        sitemap(),
        tailwind(),
    ],
});
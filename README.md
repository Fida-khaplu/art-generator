AI Art Generator

A sleek AI Art Generator built with Next.js 14 (App Router), TypeScript, Redux Toolkit, and Tailwind CSS.
Users can explore inspiration images and generate new AI artworks using prompts and model selections.

🚀 Features
🧠 Text-to-Image Generation

Enter a text prompt and generate stunning AI-generated art.

Choose from different AI model styles.

Display loading states during image generation.

🌈 Inspiration Page

Displays a grid of sample artworks.

Clicking an artwork automatically fills the prompt and redirects to the generator page.

⚙️ State Management

Uses Redux Toolkit for managing:

Prompt text (shared between pages)

Model list (fetched via API)

Generated image URL

💅 Modern UI

Built with Tailwind CSS for responsive, clean design.

Gradient borders and buttons.

Fully responsive for mobile, and desktop.

Notes on Approach

Used Redux Toolkit for global state management (prompt, models, and generated image).

Created reusable Layout and Header components for consistent UI.

Gradient borders implemented via CSS using background-clip to ensure consistent thickness.

Tailwind CSS handles responsive design; mobile layouts adjust widths and stacking automatically.

Dummy inspiration data is stored locally in /data/data.ts; image generation API calls are structured for future integration with AI APIs.

🧩 API Routes
Endpoint	Method	Description
/api/inspirations	GET	Fetch available AI inspirations data
/api/models	GET	Fetch available AI model styles
/api/model	POST	Generate image based on prompt and model

To Start 
npm run dev
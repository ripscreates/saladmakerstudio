# Salad Maker Studio 3000 🥗

**Much crunch. Very wow.** An interactive, pixel-art salad kitchen where you can make a bowl your way, watch it assemble, and take home a recipe ticket.

**Try the live app:** [salad-maker-studio-3000.ripleyjene.chatgpt.site](https://salad-maker-studio-3000.ripleyjene.chatgpt.site/)

## What you can do

- Start with one of five editable bowls: Garden Party, Berry Good, Tokyo Crunch, Coastal Club, or Power Bowl. Ask the kitchen to surprise you, or empty the bowl and create your own.
- Choose from all 22 ingredients: lettuce, tomatoes, shredded carrot, apple cubes, blueberries, strawberries, orange slices, lemon pieces, ginger, pumpkin seeds, walnuts, red onion, olives, tuna, salmon, boiled egg, sardines, anchovies, chicken, steak, shrimp, and pan-fried tofu.
- Add ingredients with a click or drag them into the isometric bowl. Arrange individual pieces by dragging; turn the bowl with a drag on open space or the rotation buttons. Fine-tune with keyboard-friendly nudge controls.
- Switch between manual creation and a demo that assembles your chosen recipe with pause, resume, and replay.
- Choose from lemon–olive oil, balsamic vinaigrette, tahini, yogurt, green goddess, miso ginger-carrot, or no dressing.
- Adjust servings and ingredient portions. The ticket updates amounts for the entire recipe.
- See an estimated kcal/g for every ingredient, plus approximate calories for each portion, the whole recipe, each serving, the selected dressing, and the finished bowl's overall kcal/g.
- Finish for a recipe receipt with measured dressing ingredients, calorie estimates, and simple preparation steps. Print it, save it as PDF, or download an illustrated PNG card.
- Save recipes in this browser and reload them later. Share a recipe with a link that carries the recipe data directly.

## Run it yourself

The app is static HTML, CSS, and JavaScript. You need a recent browser with Canvas, local storage, and Pointer Events, plus a local static file server. There is no package manager, build step, API key, account, backend, or recipe database to set up.

With Python 3 installed, clone the repo, open a terminal in the repo folder, and run:

```sh
python3 -m http.server 8317
```

Open [http://localhost:8317](http://localhost:8317). Any other static HTTP server works too. Serve this folder as the document root. For a public URL, deploy the same files to a static host. Recipe sharing works when the shared link points to that host.

## Recipe storage and sharing

The current bowl and saved recipes use this browser's local storage. There is no account and recipes are not uploaded to an app database. Clearing browser data, changing browsers or using private browsing may remove saved recipes. The site host may keep ordinary request logs.

The Share button puts a versioned, size-limited recipe in the URL fragment (the part after `#`). The fragment stays in the browser and is not sent with the website request. Anyone who receives the link can read that recipe. This demo does not need a recipe-sharing service.

## How it is made

The bowl and its original ingredient illustrations are drawn at runtime on an HTML Canvas using small geometric pixel-art shapes. Ingredients have deterministic positions, can be moved independently, and rotate with the isometric bowl. The app has no runtime JavaScript dependencies or external asset requests. `core.js` handles recipe validation, share links, measured quantities, calorie estimates, and preparation steps; `app.js` connects those recipes to the controls and browser storage.

## Calorie estimates

The app bundles generic food kcal-per-100-g estimates informed by [USDA FoodData Central SR Legacy](https://fdc.nal.usda.gov/download-datasets/). It uses typical edible weights for count-based boiled eggs and simple kitchen-weight assumptions for dressings. The calculator scales the values with the selected portions and servings, then includes the chosen dressing in the recipe total and overall kcal/g. Values are rounded and can differ from a real bowl because ingredients, brands, edible yield, and preparation vary. They are for casual recipe planning, not a nutrition label. The app makes no nutrition API requests.

Run the lightweight recipe-format checks with Node.js 18 or newer:

```sh
node recipe-checks.cjs
```

## Design and asset credits

- **Visual inspiration:** [Colorfigures by April Zhu](https://april-zhu.com/colorfigures), especially its tangible, hand-inked interactive-object presentation. The salad interface, code, and Canvas illustrations here were made for this project; the Colorfigures source code, generated figures, and assets are not bundled or reused.
- **Technical references:** Colorfigures credits [ISO-GLOW by April Zhu](https://isoglow.dev/) and the underlying [iso-figure project by Tolga Cohce](https://github.com/MrBongoC/ai-iso-skill). These links document the reference project's technical lineage; Salad Maker Studio 3000 does not depend on either project.
- **Pixelify Sans**, designed by Stefie Justprince, is bundled for the pixel-style wordmark and display text under the SIL Open Font License 1.1. See [`FONT-LICENSE.txt`](FONT-LICENSE.txt) and the [Pixelify Sans source](https://github.com/eifetx/Pixelify-Sans).

## Recipe note

Ingredient quantities are flexible starting points. Protein amounts refer to ready-to-eat portions. Prepare raw proteins appropriately. Calorie values are estimates rather than a nutrition label. Check product labels and dressings for allergens.

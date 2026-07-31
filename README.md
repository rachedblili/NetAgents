# NetAgents

**[netagents.ai](https://netagents.ai)** — a field guide to agentic AI in networking.

A working directory and plain-language guide to AI agents in computer networking: what vendors and open source projects are actually shipping, the protocols connecting them, and the security questions nobody has fully answered yet. Hand-checked against primary sources, maintained by one person, corrected in the open.

This repo is the source for the site itself, not just a place to file issues against it.

## Contribute

This is exactly what the repo is for:

- [Report a correction](https://github.com/rachedblili/NetAgents/issues/new?template=correction.yml) — something in the directory or an article is wrong, stale, or missing context.
- [Suggest a new agent or project](https://github.com/rachedblili/NetAgents/issues/new?template=new-agent.yml) for the directory.
- [Pitch a community article](https://github.com/rachedblili/NetAgents/issues/new?template=community-article-pitch.yml) if you've got a write-up on agentic networking worth sharing.
- Open-ended questions or discussion: [GitHub Discussions](https://github.com/rachedblili/NetAgents/discussions), or the comment threads on each article (via [giscus](https://giscus.app), backed by this repo's Discussions).
- Prefer not to use GitHub? Email works too: info@strikerit.com.

Corrections that land get credited on the directory page where they apply. See [CONTRIBUTING.md](CONTRIBUTING.md) for a bit more detail, and the site's [About page](https://netagents.ai/about/) for the full methodology and a disclosed conflict of interest (I work at one of the vendors listed).

## Running it locally

Plain [Eleventy](https://www.11ty.dev/) (Nunjucks templates), no other framework.

```
npm install
npm run serve   # dev server with live reload
npm run build   # writes static output to _site/
```

Directory entries live as data in `src/_data/agents.json`; articles are `src/articles/*.njk` with front matter (`tags: ["core"]` for the maintainer's own pieces, `["community"]` reserved for contributed ones). Shared page chrome (nav, rail, footer) is `src/_includes/base.njk`; the article layout is `src/_includes/post.njk`.

## License

Site content and code are not currently under an open license — ask if you want to reuse something specific.

# Contributing to NetAgents

This is a one-person, hand-checked project — see the [About page](https://netagents.ai/about/) for the full story. That means it's wrong or out of date in places I haven't caught, and I'd genuinely rather hear about it than not.

## Ways in

| I want to... | Go here |
| --- | --- |
| Flag something wrong, stale, or missing context | [Report a correction](https://github.com/rachedblili/NetAgents/issues/new?template=correction.yml) |
| Suggest an agent or project for the directory | [Suggest a new agent](https://github.com/rachedblili/NetAgents/issues/new?template=new-agent.yml) |
| Add a new ecosystem entry (source-of-truth, observability, standards, etc.) | [Suggest a new ecosystem entry](https://github.com/rachedblili/NetAgents/issues/new?template=new-ecosystem-entry.yml), or send a PR directly, see below |
| Pitch a write-up of my own | [Pitch a community article](https://github.com/rachedblili/NetAgents/issues/new?template=community-article-pitch.yml) |
| Ask an open-ended question, or just talk | [GitHub Discussions](https://github.com/rachedblili/NetAgents/discussions) |
| Comment on a specific article | The comment thread at the bottom of the article itself (giscus, backed by this repo's Discussions) |
| Avoid GitHub entirely | Email info@strikerit.com |

## What makes a correction easy to act on

- **Point at something specific.** An entry ID (e.g. `NA-014`), a URL on the site, or an article title — not just "the directory section."
- **A primary source, if you have one.** A vendor's own docs, the actual GitHub repo, an IETF datatracker entry. I try to verify against primary sources rather than secondhand summaries, and a link saves a round trip.
- **Status-tag disagreements are welcome.** The shipping/active/experimental/draft labels are my own judgment calls, not vendor-submitted. If you work on something listed and think a tag is off, that's exactly the kind of correction I want.

## What happens after you submit

I check it, and if it lands, it gets credited in the directory's "recently corrected" note — being right beats being fast, and I'd rather this visibly get checked by more than one set of eyes. There's no SLA; it's genuinely one person doing this alongside other work.

## Pull requests

For the agent directory and articles, not currently the expected path. Those are structured enough (a shared JSON array, front-matter-tagged templates) that an issue describing the change is usually easier for both of us than a diff, and a shared array means two concurrent PRs can collide on the same file. If you've written a full community article draft, the article-pitch template is the right first step before a PR.

**Ecosystem entries are the exception.** Each one lives in its own file at `src/_data/ecosystem/<category>/<entry-slug>.json`, so a new entry is a single-file addition with no collision risk. If you'd rather open a PR than an issue for one of these, go ahead. Match the shape of an existing file in the same category directory: `category`, `name`, `maker`, `statusClass` (`shipping`, `active`, `experimental`, or `draft`), `statusLabel`, `description` (roughly 350 to 480 visible characters, inline links allowed), `tags`, `url`, `search`, and `dateVerified`. Link to a primary source (the project's own repo or docs) rather than a vendor's marketing page where the two differ.

# The Environmental Defense Initiative

The Environmental Defense Initiative is an international youth-led initiative dedicated to raising awareness of environmental issues and providing a platform for people to take action to create long-lasting change.

The website is hosted with vercel at [tedinitiative.org](https://www.tedinitiative.org/)

## Node.js runtime

Use Node.js 22.23.4 or a newer patched 22.x release. `.nvmrc` supplies the baseline
for version managers, and `package.json` selects the supported 22.x line on Vercel.
Do not install the `node` npm package: its executable can override the host runtime
when package scripts run. Update the host runtime itself, then reinstall dependencies.

Vercel manages runtime patch versions independently of this repository. After a
security update, deploy a fresh build without reusing the build cache and verify
both the build and function runtime versions before considering the rollout complete.
See the [Node.js October 2026 advisory](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases)
and [Vercel's runtime documentation](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

Stripe donations use the server-only `STRIPE_SECRET_KEY` environment variable.
After securing the runtime, review Stripe request logs and account activity, rotate
the key, update every deployment environment that uses it, redeploy, and verify the
donation checkout before expiring the previous key. Never commit or paste secret
keys into source files, logs, or issue reports.

## How can I contribute?

You can join us though the [form on the website](https://www.tedinitiative.org/join-us). You can also contact us at [team@tedinitiative.org](mailto:team@tedinitiative.org). We are always looking for new members to help us write articles ([our blog](https://www.tedinitiative.org/blog)), create social media content, and help further our mission.

You can learn more about our mission and goals on the [about page](https://www.tedinitiative.org/about) and support us by signing our [petitions](https://www.tedinitiative.org/petition).

### Some of the technologies we use:

- [Next.js](https://nextjs.org)
- [Auth.js](https://authjs.dev/)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)

### Follow us on social media to stay updated:

- [Instagram](https://www.instagram.com/environmentaldefenseinitiative/)
- [Twitter](https://twitter.com/TEDIactivism)
- [Facebook](https://www.facebook.com/tedinitiative)
- [LinkedIn](https://www.linkedin.com/company/the-environmental-defense-initiative/posts)
- [YouTube](https://www.youtube.com/@EnvironmentalDefenseInitiative)
- [TikTok](https://www.tiktok.com/@tedi_youth)

## Some Screenshots of the site

![Home Page](https://res.cloudinary.com/mozzarella-tedi/image/upload/other/homepage.png)
![Blog Page](https://res.cloudinary.com/mozzarella-tedi/image/upload/other/blog.png)

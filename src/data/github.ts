export interface ActivitySlice {
  label: string
  pct: number
}

/**
 * GitHub activity config. The contribution heatmap and total are fetched live
 * (see useGithubContributions), but the activity percentages come from GitHub's
 * contributionsCollection, which needs an authenticated token — not safe to ship
 * in a static site — so they're maintained manually here.
 */
export const github = {
  username: 'risyadul',
  profileUrl: 'https://github.com/risyadul',
  breakdown: [
    { label: 'pull requests', pct: 46 },
    { label: 'commits', pct: 32 },
    { label: 'code review', pct: 22 },
  ] as ActivitySlice[],
  repos: ['lionparcel/android-consumer', 'lionparcel/android-consumer-intl', 'lionparcel/shipment'],
  otherReposCount: 10,
}

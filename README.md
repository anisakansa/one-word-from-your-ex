[![make.fun · u-brave-eagle-12-one-word-from-your-ex-cfd97ba2](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2?utm_source=github&utm_medium=readme&utm_campaign=u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/anisakansa/one-word-from-your-ex/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/anisakansa/one-word-from-your-ex/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2?utm_source=github&utm_medium=readme&utm_campaign=u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

# One Word From Your Ex

A [make.fun](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) entry for **One Word From Your Ex** — send exactly one word your ex would use to describe you. The funniest, most painfully honest word takes the whole reward.

## The word

**almost**

One small word carrying a whole failed relationship: almost the one, almost good enough, almost there. It is funny because of the sharp turn, it stings because it is painfully true, it lands instantly with no explanation, and it is relatable — everyone has been somebody's "almost". No near synonym keeps the edge: "nearly" is a measurement, "almost" is a verdict.

## How it works

`main.ts` writes the constant word `almost` to `output/entry.txt`. The program is fully deterministic: no input, no clock, no randomness, no network. A guard validates the entry is exactly one word (1–24 characters, no whitespace) before writing, and the output path is relative to the working directory (`output/entry.txt`, with a fallback to `/output/entry.txt`) — never derived from the script location, so it runs cleanly in the grader's read-only sandbox.

## Run

```sh
node main.ts
cat output/entry.txt
```

## License

MIT

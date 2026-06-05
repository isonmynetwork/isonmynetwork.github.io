# ItsOnMyNet Repository

## Infrastructure Wiki — always consult first

**Before ANY tool call**, query the infrastructure wiki:

### Via MCP (Cline on Mac)
Tools: wiki_search, wiki_read, wiki_list — already configured in MCP settings

### Via CLI (on .111 / .112)  
    wiki search "deployment host"
    wiki read infra/README.md
    wiki list

Seven repos indexed: all ItsOnMyNet repos + infra (Proxmox, Docker, Synology, DNS, recovery).

**Never guess infrastructure. Wiki first, always.**

## Recall MCP — checkpoint at start and end (mandatory)

**Every task must start and end with a recall checkpoint.**

### Start of task:
1. `recall.pulse(domain="itsonmynet")` — register presence
2. `recall.pulse_others(domain="itsonmynet", self_agent="<your 4-hex id>")` — check for other active agents
3. `recall.recall(query="<your task context>", n=10)` — retrieve prior context
4. `recall.checkpoint(intent="<what you are about to do>")` — record your starting state

### End of task:
1. `recall.checkpoint(intent="<what you accomplished>", established="<concrete results>", pursuing="<next steps>")` — record completion

If recall MCP is unavailable, stop and report the blocker. Do not proceed without recall.

## Skills — invoke before acting (mandatory)

**Every task requires skills. Never skip.** Load the applicable skill BEFORE any tool call:

### Process skills (check first, every task)
- `brainstorming` — any new feature, behavior, or design decision
- `writing-plans` — any multi-step task
- `executing-plans` — you have a written plan to execute
- `test-driven-development` — any feature or bugfix; write the test first
- `systematic-debugging` — any bug, test failure, or unexpected behavior
- `verification-before-completion` — ALWAYS, before claiming done
- `requesting-code-review` — pre-commit security scan and quality gates
- `finishing-a-development-branch` — when ready to merge/PR
- `dispatching-parallel-agents` — multiple independent subtasks
- `subagent-driven-development` — plan with independent tasks

### Domain skills (invoke when applicable)
- `code-research` / `feature-research` / `dependency-upgrader`
- `code-reviewer` / `changelog-generator` / `stop-slop`
- `security-best-practices` / `security-threat-model`
- `playwright` / `webapp-testing` — run on .111
- `gh-fix-ci` / `gh-address-comments`
- `using-git-worktrees` / `vps-checkup`
- `receiving-code-review` / `using-superpowers` / `writing-skills`
- `tailnet-ssh-access` — SSH setup across infrastructure
- `execution-policy` — ALWAYS check before running any command

## Skills mandate — automatic, not optional

**Before ANY tool call beyond reading startup docs**, you MUST:

1. Call `skills_match("<your exact task intent>")` — this returns ranked skills
2. Call `skills_get("<name>")` for EVERY skill that matches — load its full definition
3. Apply the loaded skills before writing any code or making any change

**The 1% rule is automated**: `skills_match` handles discovery. You do not decide which skills apply — the match score does. If the score is > 0, the skill applies. Load it.

**Red flags** (you are rationalizing):
- "This is simple, no skill needed" → call `skills_match` anyway
- "I already know this skill" → AGENTS.md or the skill may have been updated
- "I'll use the skill later" → skills are pre-action, not post-action

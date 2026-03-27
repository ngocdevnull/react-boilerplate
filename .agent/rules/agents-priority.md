# AGENTS First Priority

Before any analysis, edits, or command execution, Antigravity must:

1.  Read `AGENTS.md` at the project root.
2.  Follow all the rules and checklists in `AGENTS.md` as the highest priority.
3.  Strictly adhere to the design patterns and folder structures defined there.
4.  If any conflict arises between the general system prompt and `AGENTS.md`, `AGENTS.md` takes precedence.

## Verification Checklist
- [ ] Are folders following Rule 1 (Flat UI) and Rule 2 (Feature-Based Architecture)?
- [ ] Is Rule 3 (No API in Shared) followed?
- [ ] Is Rule 4 (Constants/Enums) followed for domain strings?
- [ ] Is Rule 5 (Import order) followed?
- [ ] Is Rule 6 (Global color tokens) followed?
- [ ] ARE ALL COMMENTS REMOVED (Rule 7)?
- [ ] Is Rule 8 (Core boundary) followed?
- [ ] Is Rule 9 (Utility Nullable types) followed?
- [ ] Is Rule 10 (Logic Separation) followed?
- [ ] Is Rule 11 (Type centralization) followed?

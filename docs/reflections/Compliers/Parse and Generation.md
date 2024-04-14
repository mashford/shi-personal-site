---
sidebar_position: 1
---

# Parse and Generation

A segment of code is essentially a string of characters.

To run a string, usually we first break it into tokens, then parse the tokens into an abstract syntax tree (AST), and finally generate the code from the AST.

That's sth I have made a demo before. It's still in my repo. That toy project can

- parse a string into tokens
- parse tokens into AST
- execute the AST

Recently I found the api-tool in company codebase can not handle the case of map correctly. I know the api-tool has been around for a while and the Jannie who created it has moved to Australia. I don't want to bother her. I have some experience in parsing and generating code. I can do it.

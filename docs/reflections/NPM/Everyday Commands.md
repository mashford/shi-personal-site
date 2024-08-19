
### Check your login status:

`npm whoami`

### /To use a token:

Add in ~/.zshrc:

`//registry.npmjs.org/:_authToken=NPM_TOKEN`

### snapshot release: refer to [Link](https://github.com/changesets/changesets/blob/main/docs/snapshot-releases.md)

1. add a changeset:

`npx changeset`

2. Versioning your packages

`npx changeset version --snapshot`

3. Publishing your packages

`npx changeset publish --tag WHAT_EVER`
# Contributing to Redbrick

## Code Contributions

We welcomes new contributors.

This document will guide you through the contribution process.

### Step 1: Fork

Fork the project [on GitHub](https://github.com/redbrick/static-site) and check
out your copy locally.

#### Which branch?

For developing new features and bug fixes, the `master` branch needs to be
pulled and built upon. We follows a
[Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration)
model, where the master branch is always deployed to production.

### Step 2: Branch

Create a feature branch and start hacking:

```text
$ git checkout -b my-feature-branch -t origin/master
```

### Step 3: Commit

Make sure git knows your name and email address:

```text
$ git config --global user.name "J. Random User"
$ git config --global user.email "j.random.user@example.com"
```

Writing good commit logs is important. A commit log needs to describe what
changed and why. Follow these guidelines when writing one:

1. The first line ideally should be 50 characters or less and contain a short
   description of the change
1. Keep the second line blank.
1. Wrap all other lines at 72 columns.

A good commit log can look something like this:

```
explaining the commit in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc. etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way `git log` will show things
nicely even when it is indented.
```

The header line needs to be meaningful; it is what other people see when they
run `git shortlog` or `git log --oneline`.

### Step 4: Rebase

Use `git rebase` (not `git merge`) to sync your work from time to time.

```text
$ git fetch upstream
$ git rebase upstream/master
```

### Step 5: Push

```text
$ git push origin my-feature-branch
```

Go to https://github.com/yourusername/static-site and select your feature
branch. Click the 'Pull Request' button and fill out the form.

Pull requests are usually reviewed within a few days. If there are comments to
address, apply your changes in a separate commit and push that to your feature
branch. Post a comment in the pull request afterwards; GitHub does not send out
notifications when you add commits.

## Developer's Certificate of Origin 1.0

By making a contribution to this project, I certify that:

- (a) The contribution was created in whole or in part by me and I have the
  right to submit it under the open source license indicated in the file; or
- (b) The contribution is based upon previous work that, to the best of my
  knowledge, is covered under an appropriate open source license and I have the
  right under that license to submit that work with modifications, whether
  created in whole or in part by me, under the same open source license (unless
  I am permitted to submit under a different license), as indicated in the file;
  or
- (c) The contribution was provided directly to me by some other person who
  certified (a), (b) or (c) and I have not modified it.

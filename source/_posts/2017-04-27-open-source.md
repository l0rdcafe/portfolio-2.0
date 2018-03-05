---
title: My First Open Source Contribution
date: 2017-04-27 11:00:00
tags: null
---

Hey <span class="main__body__content__span">hackers!</span> [l0rdcafé](mailto:me@l0rdcafe.com) here. This post is about **version control**, how I learned **git** and in turn my first open source contribution. Up until then, my technical proficiency with **version control** was limited. I had a basic workflow to initialize a **repository**, add files, **commit changes** and **push repositories** to a remote server, in my case [GitHub](http://github.com) but that was about it.

My **git workflow** was a product of the aforementioned [Learn Enough tutorial on version control](https://www.learnenough.com/git-tutorial), [GitHub's Guides](https://guides.github.com/) and trial and error within reasonable limits. Until one day after updating my **tech stack**, [(more on that to come later!)](#newdev) and getting [browser-sync](http://browsersync.io/), which starts a **local** web server that updates browser on file changes. I noticed the [tldr](https://github.com/tldr-pages/tldr) pages were missing a page for [browser-sync](http://browsersync.io) after needing to look up some syntax examples.

Seeing an opportunity to contribute, I went to the [GitHub tldr repo](https://github.com/tldr-pages/tldr), **forked** a copy from its **master branch**, and created my one-page contribution to the [tldr](https://github.com/tldr-pages/tldr). Again, [jellyc0la's](https://github.com/jellyc0la) guidance was invaluable to my success, helping me ensure adherence to the standardized format of the **tldr pages**. Inevitably and due to my inexperience with **git** as well as the **CI server**, I committed one too many changes.

Fearful it might reflect a lack of professionalism, I learned about **git rebase** with the help of [jellyc0la](https://github.com/jellyc0la), which enables you to alter the history of **commits** in a variety of ways. And after mostly trial and error, tweaking the **git log**, I **pushed** my changes for submission. My contribution finally passed the **CI** and was to be reviewed by the maintainer. Within a day or two, the first maintainer approved the changes, and notified the second maintainer to review my **pull request**. A month later, it was finally approved and my contribution was **merged** to the **master branch** of the [tldr pages.](https://github.com/tldr-pages/tldr/blob/master/pages/common/browser-sync.md)

In conclusion, even though I was inexperienced with **version control**; my workflow, technical sophistication and knowledge lacking, my first open source contribution helped me learn more **git** and gain valuable experience under my belt with **pull requests**, **forks**, **git rebase** even more than tutorials ever did. And this goes to show that nothing beats immersion when it comes to learning.

---
title: Setup Your Macbook Pro To Be More Efficient for Editing Code (For New Web Devs)
date: 2017-04-27 12:00:00
tags: null
description: l0rdcafe's starter pack blog post outlining how to edit code efficiently for beginner front end web developers with installation tutorials for iTerm2 terminal, Homebrew, Node, tldr manual pages, a better shell using zsh, command line autojump, a quicker CSS workflow using browser-sync, using editor plugins such as linters for markdown, JSON, ESLint, HTML and others as well as autoprefixer for quicker coding.
og_description: Starter pack for beginner front end web devs including installation tutorials for text editor plugins, better command line and CSS workflows and hints to make code editing and writing faster and more efficient.
twitter_description: Starter pack for beginner front end web devs including tutorials for text editor plugins, better command line and CSS workflows and hints to make code editing and writing faster and more efficient.
path: /mac-setup
---

Hey <span class="main__body__content__span">hacker friends!</span> It's [l0rdcafé](mailto:me@l0rdcafe.com). I fleetingly mentioned the term **tech stack** in the previous post. Here, we go deeper into that and how to set up a well-organized workflow especially for new web developers on Mac.

1. <i class="fa fa-square"></i>[iTerm2](#itrm)
2. <i class="fa fa-square"></i>[Homebrew](#brew)
3. <i class="fa fa-square"></i>[Node](#node)
4. <i class="fa fa-square"></i>[Easier to read manual pages](#tldr)
5. <i class="fa fa-square"></i>[Setup your Shell with Prezto](#zsh)
6. <i class="fa fa-square"></i>[Faster directory navigation](#j)
7. <i class="fa fa-square"></i>[Efficient CSS workflow](#brwsr)
8. <i class="fa fa-square"></i>[Linters and other plugins](#lntrs)
9. <i class="fa fa-square"></i>[Autoprefixer](#autop)

<h4 id="itrm">iTerm2</h4>

If you're still using the default **Mac Terminal**, bin that instantly and download [iTerm2](https://iterm2.com/). Press **Cmd-N**, instant improvement, right?

[iTerm2](https://www.iterm2.com/) unlike **Terminal**, is very customizable. So give the preferences a look and toy with the colors. Additionally, you can download [preset color schemes](http://iterm2colorschemes.com/).![iTerm2 changing color theme gif](/assets/colors.gif)

<h4 id="brew">Homebrew</h4>

Before you go any further, you should install [Homebrew](https://brew.sh/). It'll give you quick access to a plethora of software by running simple commands, dubbed as the missing package manager for macOS. Copy/paste the command into your terminal.

<h4 id="node">Node</h4>

Up next is [Node,](https://nodejs.org/en/) which after installing [Homebrew](https://brew.sh/) becomes a much simpler task. Run `brew install node`. Now, run `node -v` to see if it's installed, and then also `npm -v`. If it is, you should see something similar to this.

![node version print in terminal](/assets/node.png)

<h4 id="tldr">Easier to read Manual Pages</h4>

If you know some basic **UNIX command line** and know about the `man` pages, which are notoriously dizzying to read, then you should start off by installing [tldr](https://github.com/tldr-pages/tldr). Simply run `sudo npm install –g tldr`, then run `tldr echo` to see if it works. The `sudo` prefix might not be necessary, depending on your admin preferences. But if you run the command without it and returns an error, then it will be.

<h4 id="zsh">Shell Setup with Prezto</h4>

The default **Shell** is `.bash`, which isn't necessarily the most efficient. You can tell which **Shell** is running by looking at the top of your terminal window.

![bash shell terminal window top](/assets/bash.png)

That's where [Prezto](https://github.com/sorin-ionescu/prezto) comes into play, a `.zsh` **framework** enriching the command line interface with **aliases**, **sane defaults**, **prompt themes** and most importantly **auto completion**; a true savior!

Run `zsh` to start a `.zsh` session and follow the installation instructions carefully.

As with most things, you'll need to customize your [Prezto](https://github.com/sorin-ionescu/prezto) modules. So go to your home directory by running `cd`, then run `ls -a` and check to see if there's a `.zpreztorc`. If there is and there should be, open that file in your **text editor**and make sure the modules from line 26 to 44 are in the following order.

![prezto modules config in Atom settings](/assets/module.png)

<h4 id="j">Faster Directory Navigation</h4>

Moreover, if you've used the `cd` command enough, you'll know how consuming directory navigation can be. Run `brew install fasd` and now you can use the command `j` with any **directory** that you've visited before as its **argument** to navigate instantly there. Here's an example of it in action.

![directory hopping using fasd gif](/assets/fasd.gif)

<h4 id="brwsr">Efficient CSS Workflow</h4>

Writing **CSS** can be a pain when you have to refresh the page on your browser with each saved change. That's why [browser-sync](https://browsersync.io/) exists, run `sudo npm install –g browser-sync`, then `tldr browser-sync` [(Aha!)](#src) for examples on how to use it.

![browser-sync demo gif](/assets/browser-sync.gif)

<h4 id="lntrs">Linters and Text Editor Plugins</h4>

Now it's time to upgrade your **text editor**. Personally, I picked [Atom](https://atom.io/) at the start and have been using it ever since, so this is going to be catered to that but feel free to look up equivalent upgrades for whatever **text editor** you end up choosing. **Linters** are packages installed in a **text editor** that, given specific settings will clean up your code and pick up on any syntax errors. This is a pretty long list, since you have to install **linters** for each language. However, I highly advise against copy/pasting and to actually type in each command.

<code class="main__body__content__code">apm install linter-csslint <br>
apm install linter-htmlhint
<br>
apm install linter-jsonlint
<br>
apm install linter-scss-lint
<br>
apm install linter-markdown
<br>
apm install linter-eslint
<br>
apm install linter-stylefmt
<br>
apm install linter-write-good
<br>
apm install atom-beautify
<br>
apm install git-diff
<br>
apm install jquery
<br>
apm install pigments
<br>
apm install file-type-icons
<br>
apm install open-recent</code>

You will need to customize some of these plugins. Firstly, create a `~/.eslintrc` file and write the following in it.

![eslintrc file setup](/assets/eslintrc.png)

Then your beautify settings should match those in the following image.

![Atom text editor beautify plugin settings](/assets/beautify.png)

You'll also need to tick the box for Use global ESLint installation as well as specify the **.eslintrc Path** to the `~/.eslintrc` file created earlier. You can implement these changes in the linter-eslint plugin settings as shown below. Additionally, you should run `npm get prefix` and input the result into the **Global Node Installation Path** box.

![Atom text editor style lint settings](/assets/stylelint2.png)

<h4 id="autop">Autoprefixer</h4>

Beyond **linters**, an **autoprefixer** will be your new best friend. You'll never have to hardcode **vendor prefixes** again. By simply running `apm install autoprefixer` and setting it to prefix on save, you can simply code, save and **vendor prefixes** will be prefixed automagically.

That's it for the web developer starter pack. These tools will help you establish an efficient workflow and save you time and cognitive load to work on other less trivial issues as opposed to figuring out **vendor prefixes** for random properties.

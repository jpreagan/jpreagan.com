---
title: Become a command line wizard with a modern shell environment
description: Learn how to set up a modern shell environment with fish, zsh, and bash
pubDate: 2024-07-04
coverImage: "/f310d0b1-419a-477d-9c44-b6ec703f1c2e.jpg"
---

After using [zsh](https://zsh.sourceforge.io/) for nearly three decades, I recently switched to [fish](https://fishshell.com/) for interactive sessions. I'll admit that I'm impressed with what it offers. Fish has redefined what I expect from a modern shell, and I can't imagine my workflow without it at this point.

Even so, I keep configurations for zsh and [bash](https://www.gnu.org/software/bash/), given their status as default shells on macOS and most Linux distributions, respectively. For portability, I also still write pretty much all of my shell scripts in bash.

Fish gives you an almost perfect user experience out of the box, with only minimal configuration required. With some effort, though, you can likewise achieve similar functionality in zsh and bash, and I'll share with you how to do so in this post.

First, let's take a look at some of the best features you might expect in any modern shell environment to get an idea of the sort of thing we're trying to achieve here.

## The magical feature set

### Autosuggestions

One standout feature built into fish is [autosuggestions](https://fishshell.com/docs/current/interactive.html#autosuggestions). As you type, the shell suggests input based on your history, completions, and file paths. These suggestions appear in a muted color and can be accepted with <kbd>→</kbd>, and partially accepted with <kbd>Alt</kbd>+<kbd>→</kbd>. This feature will speed up your workflow, especially when dealing with long or complex commands you use frequently.

### History search

Fish's [searchable command history](https://fishshell.com/docs/current/interactive.html#searchable-command-history) is valuable, and I use this feature often. You can search your command history by typing any part of a previous command, not just the beginning. This allows you to quickly find and reuse specific commands, even if you only remember a portion in the middle or end. Type in a fragment and use <kbd>↑</kbd> or <kbd>↓</kbd>, or <kbd>k</kbd> and <kbd>j</kbd> in vim mode, to navigate through your history.

### Completions

Fish's [tab completion](https://fishshell.com/docs/current/interactive.html#tab-completion) system is both powerful and delightfully colorful. When you hit Tab, fish not only tries to complete the current word but also offers suggestions for command options and arguments. What's truly impressive is its context-aware completions for specific tools. For instance, it can suggest `make`, `npm`, or `composer` scripts without you needing to check the respective files, provide complex option completions for cloud provider CLIs like `aws`, `az`, and `gcloud`, complete git branches, and even suggest package names for `apt` or `brew`.

### Vim mode

Vim keybindings are a must have for me, which is available on most shells, and fish doesn't disappoint here. Let me put it this way, if an editor doesn't have vim keybindings, it is practically unusable to me as a writing tool. Having [vim mode](https://fishshell.com/docs/current/interactive.html#vi-mode-commands) for my shell is likewise non-negotiable, but this one for you might come down to personal preference. Luckily, it's just a simple one-line configuration with fish!

### A better prompt

You can easily make your own prompt with fish, but for a more feature-rich experience out of the box, I recommend exploring other options. Zsh has some really nice prompts that are worth checking out, like [Pure](https://github.com/sindresorhus/pure), [Powerlevel10k](https://github.com/romkatv/powerlevel10k), and [Spaceship](https://spaceship-prompt.sh/), while fish has [Hydro](https://github.com/jorgebucaran/hydro).

Another option, and my current favorite, is [Starship](https://starship.rs/). Starship is a Rust project inspired by Spaceship. It's highly configurable and designed to work with any shell. I use Starship with fish, zsh, and bash.

The key feature for me with any prompt is git integration. I want to see the current branch, working tree status, and asynchronous update information about unpushed or unpulled commits. Like Spaceship, the Starship prompt will also give you version information for your project tools based on the current working directory.

### Aliases

Aliases are shortcuts that map longer commands to shorter ones. For instance, you can create an alias like `py` for `python3` to save the keystrokes. I use aliases for basic commands like `ls`, `grep`, `vim`, and `python`, but I prefer abbreviations for pretty much everything else to maintain a readable and portable history.

### Abbreviations

Beyond aliases, fish has an awesome feature called [abbreviations](https://fishshell.com/docs/current/interactive.html#abbreviations). For example, if I type `gco` and have an abbreviation set for that, it will automatically expand to `git checkout`. This makes your command history easier to read and more portable while still saving you the actual typing.

## Getting started with fish

### Installing fish

On macOS, you can install fish using Homebrew:

```bash
brew install fish
```

On Debian 12:

```bash
echo 'deb http://download.opensuse.org/repositories/shells:/fish:/release:/3/Debian_12/ /' | sudo tee /etc/apt/sources.list.d/shells:fish:release:3.list
curl -fsSL https://download.opensuse.org/repositories/shells:fish:release:3/Debian_12/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/shells_fish_release_3.gpg > /dev/null
sudo apt update
sudo apt install fish
```

Fish supports most Linux distributions, BSD, macOS, and Windows. Visit the [Fish homepage](https://fishshell.com/) for the latest and most specific instructions for your system.

To start a new session, simply type:

```bash
fish
```

And voilà!

You now have out of the box [syntax highlighting](https://fishshell.com/docs/current/interactive.html#syntax-highlighting), [autosuggestions](https://fishshell.com/docs/current/interactive.html#autosuggestions), [tab completion](https://fishshell.com/docs/current/interactive.html#tab-completion) for most commands, and a [searchable command history](https://fishshell.com/docs/current/interactive.html#searchable-command-history). That's great, and with a little more configuration, we can add the following the remaining feature set.

But first, to set fish as your shell, you have two main options:

1.  Make fish your default shell.
2.  Configure your terminal emulator to start fish directly.

The second option is often safer, as some systems require a Bourne-compatible login shell (typically bash or zsh). For example:

- Start GNOME Terminal with `gnome-terminal -e fish`
- In Apple's Terminal.app go to **Settings -> General -> Shell opens with: Command (complete path):** `/opt/homebrew/bin/fish`

If, instead, you decide to make fish your default login shell:

```bash
echo $(which fish) | sudo tee -a /etc/shells
chsh -s $(which fish)
```

### Enabling vim mode

If you're a vim user like me, you'll likely appreciate having vim keybindings in your shell. To enable vim emulation mode in fish, add this line to your `config.fish`:

```fish
# ~/.config/fish/config.fish
if status is-interactive
    fish_vi_key_bindings
end
```

### Install Starship prompt

Let's jazz up that prompt! Install Starship:

```bash
curl -sS https://starship.rs/install.sh | sh
```

Add the following line to the end of your `config.fish`:

```fish
# ~/.config/fish/config.fish
if status is-interactive
    # ...
    starship init fish | source
end
```

I've found Starship to be pretty decent out of the box, but for further configuration options, see the documentation.

### Defining some aliases

Here is a particular set of aliases to get you started:

```fish
if command -v eza > /dev/null
    alias ls='eza'
    alias la='ls -a'
    alias lla='ls -la'
else if command -v exa > /dev/null
    alias ls='exa'
    alias la='ls -a'
    alias lla='ls -la'
else
    alias ls='ls --color=auto'
    alias la='ls -A'
    alias lla='ls -lA'
end
alias ll='ls -l'
alias grep='grep --color=auto'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias vi='nvim'
alias vim='nvim'
alias py='python3'
alias python='python3'
alias pip='pip3'
```

Here we prefer to use `eza` or `exa`, an `ls` replacement if available, and if not falling back on `ls`, defining a few aliases like `la`, `ll`, and `lla`, colorizing output where available, and creating a few aliases for Python, pip, and neovim.

I actually prefer to use functions for aliases with fish, so if you're curious about how that works, see my [configuration files](https://github.com/jpreagan/dotfiles/tree/main/linux/.config/fish/functions) and the [documentation](https://fishshell.com/docs/current/cmds/alias.html).

### Set a few abbreviations

Abbreviations are normally preferred over aliases in fish. Some commands, though, like `ls`, or whether you're using `vi`, `vim`, or `nvim`, don't really matter too much in terms of expansion, so they are well-suited for aliases.

Pretty much everything else, in my opinion, should likely be an abbreviation rather than an alias. Either way, we will cut down on repetitive typing and speed up our workflow. Let's look at how to create abbreviations.

If we wanted an abbreviation for `git checkout` that expands when we type `gco`:

```fish
abbr --add gco git checkout
```

Now, when we type `gco` followed by a space, it will expand into `git checkout`. Let's add one more for Docker Compose:

```fish
abbr --add dkc docker compose
```

These abbreviations will persist only during the current session. To see a list of the abbreviations, simply type:

```fish
abbr
```

To make these abbreviations permanent, appending them to our `config.fish`, do the following:

```fish
abbr >> ~/.config/fish/config.fish
```

This command will add all current abbreviations to your fish configuration file, ensuring they're available in future sessions.

See my [configuration files](https://github.com/jpreagan/dotfiles/tree/main/linux/.config/fish) for more examples of abbreviations if you're interested.

## Zsh is still great

While fish has lately won me over, zsh is still a great option. With some effort, zsh can achieve near feature parity with what is described above. There are two notable advantages to zsh:

1.  **Closer POSIX compliance**: Zsh can emulate POSIX shells, not perfectly, though, which is why you want to keep writing your scripts in bash, but note this fact makes zsh more viable as a login shell on some systems.
2.  **Default shell on macOS**: For those on macOS systems, you'll likely want to keep around some zsh configuration.

These factors, combined with its customization options and plugins, make zsh still a compelling choice for users seeking a balance between modern features and traditional shell capabilities.

### Configuring zsh

To keep your home directory tidy, store zsh configuration files in `~/.config/zsh`. Create a `~/.zshenv` file to set up the environment:

```bash
# ~/.zshenv
export XDG_CONFIG_HOME="${XDG_CONFIG_HOME:-$HOME/.config}"
export XDG_DATA_HOME="${XDG_DATA_HOME:-$HOME/.local/share}"
export ZDOTDIR="$XDG_CONFIG_HOME/zsh"

# Create necessary directories and files
mkdir -p "$ZDOTDIR"
touch "$ZDOTDIR/.zshenv"

source "$ZDOTDIR/.zshenv"
```

This configuration file sets up [XDG base directories](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html) and points zsh to the new configuration location.

Create `~/.config/zsh/.zshrc` with these initial settings:

```bash
# ~/.config/zsh/.zshrc
setopt histignorealldups sharehistory

# Vi keybindings
bindkey -v

# History configuration
HISTSIZE=10000
SAVEHIST=10000
HISTFILE=$ZDOTDIR/.zsh_history

# Modern completion system
autoload -Uz compinit
compinit
```

This configuration enables vi keybindings, sets up history, and initializes the completion system.

### Adding the plugins

We'll use community plugins to add features like autosuggestions and syntax highlighting. Update your `.zshrc`:

```bash
# ~/.config/zsh/.zshrc
setopt histignorealldups sharehistory

# Use vi keybindings
bindkey -v

# Keep 10000 lines of history within the shell and save it to ~/.config/zsh/.zsh_history:
HISTSIZE=10000
SAVEHIST=10000
HISTFILE=$ZDOTDIR/.zsh_history

if [[ ! -e "$ZDOTDIR/.zsh/zsh-completions" ]]; then
  git clone --depth=1 https://github.com/zsh-users/zsh-completions.git "$ZDOTDIR/.zsh/zsh-completions"
fi
if [[ ! -e "$ZDOTDIR/.zsh/zsh-syntax-highlighting" ]]; then
  git clone --depth=1 https://github.com/zsh-users/zsh-syntax-highlighting.git "$ZDOTDIR/.zsh/zsh-syntax-highlighting"
fi
if [[ ! -e "$ZDOTDIR/.zsh/zsh-history-substring-search" ]]; then
  git clone --depth=1 https://github.com/zsh-users/zsh-history-substring-search.git "$ZDOTDIR/.zsh/zsh-history-substring-search"
fi
if [[ ! -e "$ZDOTDIR/.zsh/zsh-autosuggestions" ]]; then
  git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions.git "$ZDOTDIR/.zsh/zsh-autosuggestions"
fi

fpath=(${ZDOTDIR}/.zsh/zsh-completions/src(N) $fpath)

# Use modern completion system
autoload -Uz compinit
compinit

source "$ZDOTDIR/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh"
source "$ZDOTDIR/.zsh/zsh-history-substring-search/zsh-history-substring-search.zsh"
source "$ZDOTDIR/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh"

for key ('^[[A' '^P' ${terminfo[kcuu1]}) bindkey ${key} history-substring-search-up
for key ('^[[B' '^N' ${terminfo[kcud1]}) bindkey ${key} history-substring-search-down
for key ('k') bindkey -M vicmd ${key} history-substring-search-up
for key ('j') bindkey -M vicmd ${key} history-substring-search-down
unset key
```

This setup automatically clones and sources the plugins if they don't exist, providing extra completions, autosuggestions, syntax highlighting, and improved history search.

### A few more touches

Just the same as before, let's add the aliases:

```bash
if (( ${+commands[eza]} )); then
  alias ls='eza'
  alias la='ls -a'
  alias lla='ls -la'
elif (( ${+commands[exa]} )); then
  alias ls='exa'
  alias la='ls -a'
  alias lla='ls -la'
else
  alias ls='ls --color=auto'
  alias la='ls -A'
  alias lla='ls -lA'
fi
alias ll='ls -l'
alias grep='grep --color=auto'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias vi='nvim'
alias vim='nvim'
alias py='python3'
alias python='python3'
alias pip='pip3'
```

And install Starship, if you haven't already:

```bash
curl -sS https://starship.rs/install.sh | sh
```

Add the following line to the end of your `.zshrc`:

```bash
eval "$(starship init zsh)"
```

With this configuration, your zsh environment will have most of the modern features we already discussed. Abbreviations are also available via the [zsh-abbr](https://github.com/olets/zsh-abbr) plugin. If you're interested in my setup, check out my [zsh configuration files](https://github.com/jpreagan/dotfiles/tree/main/darwin/.config/zsh).

## Modern bash with ble.sh

While bash might seem outdated compared to fish or zsh, it remains the default shell on most Linux systems. Thanks to [ble.sh](https://github.com/akinomyoga/ble.sh), we can significantly enhance bash's capabilities, bringing it closer to its modern counterparts.

For this section, I'll assume you are on a system with bash installed and using it as your default shell.

### What is ble.sh?

ble.sh is a powerful line editor for bash, created by [Koichi Murase](https://akinomyoga.github.io/). This tool provides features like syntax highlighting, autosuggestions, and improved command history search. It breathes new life into bash for users who want modern shell features without switching to a different shell.

With ble.sh, we can likewise achieve almost feature parity with what has been described above while maintaining bash's widespread compatibility and familiarity. This makes ble.sh an essential tool for those who work in environments where bash is the standard or required shell.

### Install ble.sh

First, install ble.sh:

```bash
git clone --recursive --depth 1 --shallow-submodules https://github.com/akinomyoga/ble.sh.git
make -C ble.sh install PREFIX=~/.local
```

### Configuring bash with ble.sh

To get something close to what we've described above for fish and zsh, here is how your `.bashrc` might look:

```bash
# ~/.bashrc: executed by bash(1) for non-login shells.

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize


# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    alias dir='dir --color=auto'
    alias vdir='vdir --color=auto'
    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# Alias definitions.
if command -v eza &> /dev/null; then
alias ls='eza'
    alias la='ls -a'
    alias lla='ls -la'
elif command -v exa &> /dev/null; then
    alias ls='exa'
    alias la='ls -a'
    alias lla='ls -la'
else
    alias la='ls -A'
    alias lla='ls -lA'
fi
alias ll='ls -l'
alias vi='nvim'
alias vim='nvim'
alias py='python3'
alias python='python3'
alias pip='pip3'

[[ $- == *i* ]] && source "$HOME/.local/share/blesh/ble.sh" --noattach

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# starship
if command -v starship &> /dev/null; then
  eval "$(starship init bash)"
fi

[[ ${BLE_VERSION-} ]] && ble-attach
```

And we'll also need a `.blerc` for further customization. In this case, we're enabling vim mode and a few configuration options related to that, as well as a few default options:

```bash
# -*- mode: sh; mode: sh-bash -*-

##-----------------------------------------------------------------------------
## Basic settings

bleopt input_encoding=UTF-8
bleopt pager=less
bleopt editor=vim

##-----------------------------------------------------------------------------
## User input settings

bleopt default_keymap=vi

##-----------------------------------------------------------------------------
## Keybindings

ble-bind -f 'up' 'history-substring-search-backward'
ble-bind -f 'down' 'history-substring-search-forward'

function blerc/vim-load-hook {
  ((_ble_bash>=40300)) && builtin bind 'set keyseq-timeout 1'
  #----------------------------------------------------------------------------
  # Keybindings
  ble-bind -m vi_nmap -f 'j' 'history-substring-search-backward'
  ble-bind -m vi_nmap -f 'k' 'history-substring-search-forward'
}
blehook/eval-after-load keymap_vi blerc/vim-load-hook
```

### A whole new bash

With this configuration, bash transforms into a modern shell environment. We now have syntax highlighting, autosuggestions, enhanced history search, vim mode, a decent prompt, and improved command completion.

I frequently use this bash setup on systems where it's the default shell. For a closer look at this setup, feel free to explore my [bash configuration files](https://github.com/jpreagan/dotfiles/tree/main/linux).

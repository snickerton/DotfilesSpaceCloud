#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '
# >>> BEGIN ADDED BY CNCHI INSTALLER
EDITOR=/usr/bin/nano
# <<< END ADDED BY CNCHI INSTALLER

#to run bash scripts located in home/bin
export PATH="$HOME/bin:$PATH"
export PATH=$PATH:~/bin

#urxvt color fix
TERM='rxvt-unicode'
COLORTERM='rxvt-unicode-256color'

# Map Ctrl-S to sth usefull other than XOFF (interrupt data flow).
bind 'Control-s: '

#aliases
alias configLibinput='cd /etc/X11/xorg.conf.d'
alias configi3='cd ~/.config/i3'
alias configrofi='cd ~/.config/rofi'
alias configScripts='cd ~/bin'

# General (32 marks)

1. What is the default shell of new users on Redbrick (3 marks)
1. What is Redbrick's primary login server? Name two other servers and what they
   do. (3 marks)
1. What temperature should the server room be kept at? (2 marks)
1. What does nagios do? Why do we use it? How does it work? (4 marks)
1. You type the command "ls" expecting a list of all non-hidden items in the
   current directory, instead you get an ascii dick printed to standard output,
   why would this happen? (4 marks)
1. A server has spazzed out and turned off, we’re in Brussels at a tech
   conference, what can the admins use to turn it back on and install a new OS
   if need be? (3 marks)
1. What is a ulimit? We impose them everywhere except our development server,
   give one advantage and one disadvantage to this approach. (3 marks)
1. Why would you use a managed PDU instead of a PDU? What does PDU stand for? (3
   marks)
1. What is SNMP used for, name a tool which we use that makes use of SNMP (2
   marks)
1 .What protocol allows us to mount /storage over multiple servers? (3 marks)
1. adduser vs useradd which is better? why? (2 marks).

# Linux (36 marks)

1. What flavour of linux do we use on the majority of Redbrick Servers? And what
   version have we been attempting to move to over the last couple of months? (3
   marks)
1. List the steps that occur in the startup of a linux machine(5 marks)
1. Package managers are great, name some. Why should you never "apt purge"?
   (3 marks)
1. How would you show what version of OS you're running (assume this is on a
   Redbrick server)? (1 marks)
1. What is LDAP? Why do we use it? (3 marks)
1. There are two main ways you’ll have to kill a process using the “kill”
   command.Graceful and ungraceful, list the syntax for both ways. Name the
   SIGNAL that is sent to to a process that is terminated gracefully(3 marks)
1. What command would you use to find the process id running as a particular
   user? (3 marks)
1. chmod and chown, what do they do? and for each give the syntax they use (4
   marks, 2 per command)
1. What command would you run to update to the latest version of OS available on
   a Redbrick server? (3 marks)
1. When you don’t know the exact syntax for a command, what do you do? (NOT
   GOOGLE IT) (2 marks)
1. You want to upgrade to the newest version of ubuntu. Give the command for 2
   different ways and list the differences for them. ( 6 marks)

# BSD (30 marks)

1. What does BSD Stand for? What version does Redbrick use? (3 marks)
1. Lots of our stuff runs on Ubuntu, why do we even use BSD?(3 marks)
1. What is the BSD equivalent of root? (3 marks)
1. What is pf? How would you show the current ruleset? (3 marks)
1. How do you get a process to run at boot time? (3 marks)
1. What file would you modify to set the static IP of an interface in BSD? (3
   marks)
1. Show me how to find the routing table in BSD (3 marks)
1. What is ports in BSD? How do I update them? (3 marks)
1. In FreeBSD; what is a jail? Why would one use it? (3 marks)
1. You just got your root talk as an admin, and were added to the root group 
   on a freebsd box, Why does this allow you to do jack all? (3 marks)

# Security (30 marks)

1. How would you list all of the currently enforced iptables rules on a system(2
   marks)
1. What are: pf, fail2ban, iptables (3 marks)
1. What does VPN stand for? Why would one be used? (3 marks)
1. What are SSH keys? What command would you use to configure one? (3 marks)
1. You suspect maK has a rootkit on one of the machines. What command could you
   run to check for the rootkit? (3 marks)
1. You have just installed a new linux server. Name 3 things you should do to
   secure this system. (3 marks)
1. What is the difference between sudo and su(2 marks)
1. Name 3 files that should only be readable by root and what they do. (4 marks)
1. Why would you set the sticky bit on a file? (3 marks)
1. You left a root terminal unlocked and someone has used it to do something.
   The history files has been deleted. How do you go about finding out what they
   did? (4 marks)
1. Somebody posted a security exploit in #lobby that you are vulnerable to. What
   do you do? (4 marks)
1. You find a guide to help you install and configure $program on some random
   site. Why should you never blindly follow the commands there. (1 marks)

# Files & Filesystems (30 marks)

1. Name 3 different types of filesystems (3 marks)
1. What does it mean when a filesystem is described as being journalled? (2
   marks)
1. What is an inode value? How do you delete a file using an inode number? (3
   marks)
1. What is a symlink, how would you create one, how does it differ from a
   'hard-link' (4 marks)
1. You've added a new disk to a machine mount /zergless/potato on it (2 marks)
1. drwxrw-rw- what is this permission in octal format? (3 marks)
1. What is NFS? Do we use it in Redbrick? If so where? (4 marks)
1. What are the following? (1 mark each)
   1. ctime
   1. atime
   1. mtime
1. What is the difference between /etc/mtab & /etc/fstab (3 marks)
1. How would you force unmount a 'busy' directory? (3 marks)
1. Explain with ascii diagrams or humorous examples Raid 1, Raid 0, Raid 5 and
   Raid 10

# Practical (37 marks)

For this practical we have set up a raspberry pi for you with login details
provided. You man use the man pages for this section.

| name | password |
| ---- | -------- |
| pi   | redbrick |
| root | testa    |

1. Diagnose why the pi user can't log in.(5 marks)
1. Create a user for yourself 'redbrick' with a home directory of
   '/home/redbrick' (4 marks)
1. It looks like ssh is enabled for root. Disable it. (6 marks)
1. update and upgrade the current packages. Once this is done install pwgen. (3
   marks)
1. Ok now that we know no one can ssh in as root(fingers crossed) lets change
   the password. use pwgen to generate a password of 8 characters that has at
   least 1 special character and change the root password. make sure this is
   included in answers so we can correct this section.(4 marks)
1. Change it so that only su can be used and not sudo.(6 marks)
1. Because were really lazy add an alias to update and upgrade the Raspbery pi(
   3 marks)
1. Some sketchy user is logged in. kill his session and stop him from logging in
   again. extra marks for interesting ways of doing this(5 marks)
1. Create a cron job that will synchronise the contents of /etc/ every night to
   your home dir on redbrick over ssh. (10 marks)

# Scripting (40 marks)

1. Create an alphabetically sorted, unique list of all members currently active
   on your current machine Output this to a .txt file(4 marks)
1. With this txt file amend @redbrick.dcu.ie is at the end of each name. (5
   marks)
1. Redbrick is running out of space quicker than the admins can delete files.
   Write a script that checks the size of users home directorys. if the
   directory is more that 90% full email the admins the user and the biggest 3
   files. (15 marks)
1. There has been a new wordpress vulnerability, scan the webtree for the file
   "wp-fucked.php", delete it and then email and inform any member who has this
   file that it has been removed.(15 marks)
1. Write a script to amuse us! (1 mark)

# Hardware (30 marks)

1. You enter the server room, there’s orange flashing lights, beeping, and a
   faint clicking sound coming from somewhere within the racks, give a possible
   cause for the problem based on the evidence. (2 mark)
1. Which one of the RAID arrangement is a bastardized version that is not
   regarded as being true “RAID”? (5 marks)
1. The air conditioning in the server room has broken. What do you do? (2 marks)
1. So you want to build a server, name the bare minimum in hardware you’ll need
   (3 marks)
1. Order these protocols in terms of data transfer speed (high -> low) :
   SATA,ATA,IDE,SAS,SCSI. (3 marks)
1. What is DAS? Does Redbrick have any DAS, if so where? (4 marks)
1. What is an IP-KVM? Why should we use one (3 marks)
1. What is the UUiD of a disk, why would you need it? (2 marks)
1. Why do our servers have two power supplies? What 2 pieces of hardware do we
   use in conjunction with them to ensure maximum redundancy and uptime? (5
   marks)
1. Where would you mount a UPS? Why? (2 marks)

# Networking (30 marks) - done

1. What are the 3 'private' IPv4 address spaces (3 marks)
1. What is the subnet mask of a these IPv4 Subnet. (2 marks)
   1. /8
   1. /29
1. What commands would you run on our ubuntu machines to get rid of your ip
   address and request a new one (2 marks)
1. What is an AAAA record? (2 marks)
1. What protocol is used to distribute routes on the internet? (2 marks)
1. What do the folling stand for and what ports & protocols do they use by
   default (6 marks)
   1. HTTPS
   1. DNS
   1. DHCP
1. We use Cisco switches; how do you show the running configuration on one of
   our switches? (2 marks)
1. NAT and PAT are similar, but what do they do? What is the distinction between
   them, where would you see PAT instead of NAT? (4 marks)
1. How many disparate networks are there in the Redbrick environment? Why? (3
   marks)
1. How would you temporarily bring up a network interface on ubuntu? What file
   would you edit to make these changes permanent (2 marks)
1. Why should you always change the serial number when changing a DNS entry? (3
   marks)

# Bonus Round - done

This round carries no marks but will affect our mood when correcting the exams.

1. Give one change you would make to how Redbrick Systems Administration Team
   operates.
1. How do you feel about documentation.Be Honest.
1. In a hypothetical situation there are no rules for having root. What would
   you do to Redbrick?
1. Give me a cool new service that Redbrick could offer.
1. Whos the coolest admin?

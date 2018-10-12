---
title: 'Admin test 2007 AGM'
---

All questions can be answered in the context of any version of UNIX (except for the FreeBSD and Linux sections obviously!). Indicating which version of UNIX you refer to in your answer is preferred but not required. Negative marking applies throughout for answers that are clearly incorrect or demonstrate incompetence.

Humourous answers while appreciated gain no extra marks*. **Keep answers short and concise** - don't waste time writing when one or two word answers will suffice.  

<small>* - Although, it will put us in a better mood while correcting.</small>

**ALL SECTIONS ARE *NOT* EQUALLY WEIGHTED**

The test is marked out of an arbitrary number equal to two times the bisection of the set of available marks, as outlined by the numbers beside the questions and sections (they're not just there to look pretty).

### The Rules

*   You ***must*** be mesg n for the duration of the test. Any attempt to communicate with other users will result in immediate disqualification. Big Brother is watching you.
*   During the scripting section ***only***, you may refer to the system documentation (man & info pages) for help. You ***may not*** use any external documentation, i.e. no web access! Don't forget, Big Brother is still watching you.
*   You are free to use whatever shell or scripting language you wish to write the scripts (except brainfuck and whitespace. Admins are people too!). Only system commands may be used: yours or other users' scripts ***may not*** be referred to. Basically: No cheating! Big Brother will be checking.
*   Make a directory called ~/admintest, and place scripts and answers in there. Name each script by its question number. Don't forget: Humorous error messages make your scripts run faster. Big Brother likes humorous error messages.

Best of luck!

> - big brother, atlas, svan, igy and a little bit of phaxx.

## Scripting (40 marks)

**Whilst we hope your scripts run correctly, the emphasis is on the procedure rather than a perfectly working implementation.** (That and humorous error messages...)

Here we go..

1.  Help! Help! Big Brother turned his back for a minute, and someone's gone and written "OMG WAF TBH" at the end of every world-writable file on the system. Write a script that prints out a list of all world-writable files on the system and removes "OMG WAF TBH" from the file. For a bonus mark, mail the user with the name of the file, and call them a big OMG WAF for having world-writable files.

<span class="mark">13.333333333334 marks</span>

1.  Write a script that takes a username as a parameter, and every 30 seconds checks to see how many processes they're running. If they're running more than 15 processes, kill them all

<span class="mark">13.333333333334 marks</span>

1.  What the fudge?! You don't seem to have pgrep, pkill, or killall, but you need to kill all instances of screen (don't ask!). How do you do it?

<span class="mark">14 - 0.66666666666599994 marks</span>

## FreeBSD (30 marks)

1.  An enterprise system (root disk) is failing, list the steps and commands to transfer files to a new disk.

<span class="mark">6 marks</span>

1.  Where do applications installed via ports typically store their configuration files?

<span class="mark">3 marks</span>

1.  How would you build just a kernel without the modules?

<span class="marks">3 marks</span>

1.  Give the command to update ports

<span class="mark">2 marks</span>

1.  Give the command to update the base system

<span class="mark">2 marks</span>

1.  How would I install jumpgate from the ports using a remote package and from source?

<span class="mark">5 marks</span>

1.  What is sysinstall and what can you use it for?

<span class="mark">3 marks</span>

1.  What does the command 'dump' and 'restore' do?

<span class="mark">3 marks</span>

1.  What are 'device hints' and what are they used for?

<span class="mark">3 marks</span>

## Linux (30 marks)

1.  What commands would you use for the following:
    *   Find the amount of free disk space
    *   Find the size of a specific file
    *   Search for a specific package that you want to install
    *   Install a package

<span class="mark">4 x 1 marks</span>

1.  You've just installed a new kernel, but it's not booting. You see an error message fly by about the root partition not mountable. What are the possible causes?

<span class="mark">4 marks</span>

1.  If a network interface is marked as ifdown, how would you list it?

<span class="mark">2 marks</span>

1.  You want to unmount a disk, but when you try to do it, you get this:  

    <pre>	carbon:~# umount /webtree
    	umount: /webtree: device is busy
    	</pre>

    How would you:  

    1.  Find the process (assume just one) that is accessing the drive, and kill it?
    2.  Unmount the drive without having to kill any processes

<span class="mark">2 x 4 marks</span>

1.  How would you configure eth0 to have the addresses 10.0.0.1 and 10.0.0.2 simultaneously?

<span class="mark">3 marks</span>

1.  How would you install Linux on a machine that doesn't have a CD/DVD/Floppy drive?

<span class="mark">2 marks</span>

1.  What is /dev/kmem?

<span class="mark">2 marks</span>

1.  What is swap space used for?

<span class="mark">4 marks</span>

1.  How do you safely shut down a linux system?

<span class="mark">1 mark</span>

## General (30 marks)

1.  What is RCS and why would you want to use it on important config files? <span class="mark">3 marks</span>
2.  What architecture is murphy? And how does that architecture help to leverage collaborative enterprise systems(read: what thing is it really good at)?
3.  <span class="mark">3 marks</span>
4.  What is chkrootkit?
5.  <span class="mark">3 marks</span>
6.  What is rsync and why would you want to use it for plethora of pr0n (read: backups)?
7.  <span class="mark">3 marks</span>
8.  What is strace and why would you want to use it?
9.  <span class="mark">3 marks</span>
10.  What is a 'nice' value and how could you change it?
11.  <span class="mark">4 marks</span>
12.  You accidentally cat a binary file and it corrupts your terminal. Give a command to fix it.
13.  <span class="mark">4 marks</span>
14.  How would you edit a users quota?
15.  <span class="mark">3 marks</span>
16.  How would you suspend a process and then resume it later?
17.  <span>4 marks</span>

## Files & Filesystems (30 marks)

1.  What is an ACL?

<span class="mark">3 marks</span>

1.  What's the difference between a symbolic link and a hard link?

<span class="mark">3 marks</span>

1.  What is /etc/fstab? What is /etc/mtab?

<span class="mark">2 x 3 marks</span>

1.  List any 3 filesystems that you know of (that work on Linux).

<span class="mark">3 x 1 mark</span>

1.  Give an advantage and disadvantage for each of the above.

<span>6 x .5 marks</span>

1.  You try to unmount /webtree, but it says that the device is busy and can't be unmounted. How can you force it to unmount?

<span class="mark">4 marks</span>

1.  How would you check a disk for errors?

<span class="mark">3 marks</span>

1.  How would you show how much free space is on a device?

<span class="mark">2 marks</span>

1.  What is an inode?

<span class="mark">3 marks</span>

## Hardware (30 marks)

1.  Give 3 ways the SAS hardrives differ from SCSI?

<span class="mark">3 marks</span>

1.  What is KVM and why would you want to use it in server enviroments?

<span class="mark">3 marks</span>

1.  A hard disk is giving you I/O errors, you need to check is it under the warranty, but for that you need to get the serial number. And of course you're to lazy to take out the disk out of the box. Give a command which can give you the serial number of the disk(along with other disk related things).

<span class="mark">3 marks</span>

1.  Its not late 80s anymore, we don't have physical serial consoles anymore. Give a command which you would use to connect to a machine via a serial port.

<span class="mark">3 marks</span>

1.  You notice 'CS' marked beside a jumper on a new IDE drive you buy. What on Earth does that mean?

<span class="mark">3 marks</span>

1.  What is UPS? And why do we use them? Typically there is only 1 serial/usb port on the UPS. So how the hell other machines will know when to shut down?

<span class="mark">5 marks</span>

1.  Its 7am, write your own question.  

    (What is RAID 0, RAID 1 and RAID 5 and briefly explain their stellar storage management capabilities(how they work)

<span class="mark">7 marks</span>

1.  I'm eating my breakfast righ now, What is the meaning of life?  

    (What is software RAID? Why is it better to use hardware RAID to leverage enterprise applications?)

<span class="mark">3 marks</span>

## Networking ( 30 marks )

1.  First off, an easy one. What's the difference between a switch and a hub? Just give a brief overview.

<span class="mark">5 marks</span>

1.  How would you find out the default route on a linux machine? How would you set it?

<span class="mark">2 x 3 marks</span>

1.  What is a private IP address range? Give two examples.

<span class="mark">3 marks</span>

1.  Why does Redbrick have two networks (internal and external)?

<span class="mark">3 marks</span>

1.  What would happen if you plug a hub into itself? (As in, take a cable, plug one end into one port on the hub, plug the other end into another port).

<span class="mark">3 marks</span>

1.  Someone's running an FTP server on Redbrick, and distributing warez. You can see the process, but before you kill it, you want to see what he's got. What command would you use to find out what port it's running on (assuming you can't get it from ps)?

<span class="mark">3 marks</span>

1.  Classless addressing is dead and gone, but what's the CIDR equivalent of a class A, class B and a class C network?

<span class="mark">3 x 1 marks</span>

1.  Give a rough explaination of what a TTL on a DNS record is?

<span class="mark">3 marks</span>

1.  Give some differences between TCP and UDP

<span class="mark">4 marks</span>

## LDAP (20 marks)

1.  What is LDAP? What is it used for? What does it stand for? Y'know, the basics.

<span class="mark">3 marks</span>

1.  What does it mean to "reindex" LDAP?

<span class="mark">3 marks</span>

1.  What's the difference between slapd and slurpd?

<span class="mark">3 marks</span>

1.  So. LDAP is running, but people are still having problems? Give a possible cause, and how you would diagnose it?

<span class="mark">2 marks</span>

1.  Explain what is meant by the term Schema

<span class="mark">2 marks</span>

1.  What command will update an LDAP entry?

<span class="mark">2 marks</span>

1.  What is an LDIF file? What command generates one? What command imports it back into the LDAP database?

<span class="mark">3 marks</span>

1.  Explain what is meant by an attribute?

<span class="mark">2 marks</span>

## Security (30 marks)

1.  You've gone and left your root terminal unattended, and you reckon someone might have done something nasty. Since they've gone and deleted the history file, what do you do next? (Be detailed!)

<span class="mark">7 marks</span>

1.  Let's turn the tables. You find a root terminal unattended. How would you give yourself a backdoor?

<span class="mark">4 marks</span>

1.  Why do we use suexec on CGI scripts, and not apache modules, like mod_php, mod_perl or mod_python

<span class="mark">3 marks</span>

1.  Telnet, ftp, pop, imap. They're all bad for the same reasons. What?

<span class="mark">3 marks</span>

1.  If apache runs as the user 'www', but only root can bind to ports below 1024, how is this happening?

<span class="mark">3 marks</span>

1.  What is a VPN? Give a situation in which it might be used.

<span class="mark">3 marks</span>

1.  Someone asks you in the labs to change their password because they have important project stuff to do and oh my god they need it lol. They tell you what they want the password to be. What do you do?

<span class="mark">3 marks</span>

1.  How are ssh keys used? What are they? How would you go about setting them up so you don't need to put in a password? Why is this good/bad?

<span class="mark">4 marks</span>

## Bonus! (1060 marks)*

<small><small><small>* Note - Marks may not be available</small></small></small>

1.  Vim, emacs or nano?

<span class="mark">+1000, -1000, 0 marks, in that order</span>

1.  YORE SERVARS ARE ASPLODING. IS YORE HEAD ASPLODING?!

<span class="mark">3 marks</span>

1.  Rate the following operating systems by order of most fantastical:  
    - Debian

<span class="mark">3 marks</span>

1.  01010111011010000110000101110100001000000110100101110011001000000011000100100000 00101011001000000011000100111111?

<span class="mark">30 marks</span>

1.  Will you actively continue to upkeep the exhibition of posters depicting attractive women in the Redbrick server room?

<span class="mark">10 marks</span>

1.  O RLY?

<span class="mark">4 marks</span>

1.  Complete the sentance: "Bebo is for ____________"

<span class="mark">4 marks</span>

1.  carbon's just crashed. deathray's following closely behind, because peoples' home directories have disappeared. A user is heying you every 30 seconds looking for an update as to what is happening. What would you do to him if you had the chance?

<span class="mark">4 marks</span>

1.  Who is the most sarcastic member of Redbrick? (Answer carefully, he's in the room watching you.)

<span class="mark">2 marks</span>

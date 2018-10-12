---
title: 'Admin test 2006 EGM'
---

# DCU Networking Society System Administrator Test 2006

All questions can be answered in the context of any version of UNIX (except for the FreeBSD and Linux sections obviously!). Indicating which version of UNIX you refer to in your answer is preferred but not required. Negative marking applies throughout for answers that are clearly incorrect or demonstrate incompetence.

Humourous answers while appreciated gain no extra marks. **Keep answers short and concise** - don't waste time writing when one or two word answers will suffice.

**ALL SECTIONS ARE *NOT* EQUALLY WEIGHTED**

The test is marked out of an arbitrary number equal to the sum of the marks written beside each sections. Usually.

Best of luck!

> - atlas, svan, and a little bit of phaxx.

## Scripting (40 marks)

**Rules:**

*   You must be mesg n for duration of test. Any attempt to communicate with other users will result in immediate failure.
*   You may only refer to system documentation (man & info pages) for help, i.e. no web access!
*   You are free to use any shell or scripting language to write the scripts. Only system commands may be used, your own or other user scripts may not be referred to. Basically: no cheating!
*   Make a directory ~/admintest and place scripts in there. Name each script by its question number. Humorous error messages make your scripts run faster.

**Whilst we hope your scripts run correctly, the emphasis is on the procedure rather than a perfectly working implementation.**

Here we go..

1.  OH NOEZ! Someone has started writing rubbish to any world writable files on the system! We need to write a mail to all our users to warn them... But wait! Some associates get tetchy when they get too many mails in one week.  
    Write a script that scans through / ( but ignores /dev and /proc, we don't want to go reading /dev/kmem now, do we (: ), and finds any world writable files. Mail each user a list of all their writable files. Oh. And write them to /var/tmp/naughty-users-with-writable-files in the formaat:

    <pre>username - path to file - permissions</pre>

    <span class="mark">(13.333333333334 marks)</span>
2.  Redbrick have started trying to be organised and stuff. We now use nagios to monitor whether things are broken or not. Your mission, should you chose to accept it ( you don't have a choice, no ) is to write a shell script that downloads the contents of the two webmail login screens and compares them to /tmp/roundcube.html and /tmp/squirrellmail.html  
    ( The login pages are at: https://webmail.redbrick.dcu.ie/squirrelmail/src/login.php and https://webmail.redbrick.dcu.ie/roundcube/ )  
    The script should exit with an exit status of 0 if the two are correct, 1 if either of them is different, and 2 if it can't connect to webmail.redbrick.dcu.ie <span class="mark">(13.333333333334 marks)</span>
3.  You just downloaded a killer web-app for redbrick. But! It doesn't have the hashbang or correct permissions on any of the php files. Write a script to insert "#!/usr/local/bin/php" into each file with the suffix of .php in a directory, and change its permission to 755\. <span class="mark">(14 - 0.66666666666599994 marks)</span>

## FreeBSD (30 marks)

1.  What is the latest FreeBSD release? (1 marks)
2.  What are jails and why would we want to use them? (3 marks)
3.  Give the command to list currently loaded pf rules? (3 marks)
4.  Where are non-base start up scripts stored in? (3 marks)
5.  Give a command to find mutt packages in ports (1 marks)
6.  Now install mutt by:
    *   ports (1 marks)
    *   remote prebuilt package (2 marks)
7.  *   Give command to update ports (2 marks)
    *   Gice command to update base system (2 marks)
8.  Give exact instructions on how you would build and install a kernel and world (3 marks)
9.  What would be the first document you would check if you're unsure about anything? (2 marks)
10.  "/dev/ad1s1" is mounted on "/jibber" - explain what each part of the disk device "ad1s1" means.(3 marks)
11.  Whats the difference between FreeBSD' network interface naming and Linux'? (3 marks)
12.  "/dev/ad1s1" is mounted on "/jibber" - explain what each part of the disk (3 marks)

## Linux (30 marks)

1.  Some filthy greasemonkey has removed apt-get. How would you reinstall it? (4 marks.)
2.  apt-get doesn't work inside DCU without going through the proxy. How do you make it do this. There are two ways. (3 marks.)
3.  OH NOEZ. DEATHRAY WON"T BOOT!!!!11eleven. It gets as far as LI and then stops. What's wrong? How would you fix it without reinstalling? What admins had to stay in the redbrick room for 3 hours trying to make this work? (3 marks.)
4.  You just built a nice new kernel. It's going great... Until you try and boot it. You get errors about the root filesystem not found. BUT IT'S SITTING RIGHT THERE! What driver might you have forgotten? (3 marks.)
5.  I'm sick of those associates who think emacs is better than vim. Remove emacs. That'll shut them up. ( Don't get cheeky and use rm, or mv. ) (3 marks.)
6.  You want to unmount /webtree but some flangewallet has left a process open that's reading a file. How do you find out who, what file, and stop it? Alternatively, how do you unmount it ignoring open files? (3 marks.)
7.  What is this? Explain what it does, and how it does it:  
    a(){a|a&;};a (3 marks.)
8.  You have no CD drive. You have no floppy drive. You have no tape drive. Please install linux and tell me how you would do it ( just name the process )? (2 marks.)
9.  You have 4 network cards. There are only 2 showing up when you run ifconfig. How do you show the others? ( Note, they may be marked as ifdown ) (3 marks.).
10.  /dev/hda and /dev/sda. What are the differences? (3 marks.)

## General (30 marks)

1.  DCU' core router engine has failure, what do you do? what do **you** do? (2 marks)
2.  What are:
    *   nscd (1 marks)
    *   monit (1 marks)
    *   nagios(1 marks)
    *   mailman(1 marks)
3.  What is rcs and why would you want to use it on important config files (3 marks)?
4.  What is 'expect' and what would you use it for? (2 marks)
5.  What MTA does redbrick use? (2 marks)
6.  A user complains that when they use tsocks they get an error message:

    <pre>"You don't exist, go away!"
    </pre>

    What is a possible cause for this? (3 marks)
7.  You accidentally cat a binary file and it corrupts your terminal. Give a command to fix it. (3 marks)
8.  What is RPC? What is it used for? (3 marks)
9.  A daemon/service is misbehaving, give 2 ways you could find out why (2 marks)
10.  What's the main advantage of using the Maildir format over the traditional mail spool file? (3 marks)
11.  What's the optimal temperature for a server room's air conditioning system? (3 marks)

## Files & Filesystems (30 marks)

1.  Whats rsync? And why is it nice for backups? (2 marks)
2.  Give a command determine file type. (2 marks)
3.  The filesystem is corrupted, and 'ls' cannot be read; you need to list the contents of your pr0n dir fast, give a command you could use. (3 marks)
4.  You just installed a new hard drive to carbon and created few ext3 partitions. df reports that the size of one of the partitions is 100GB and there is 95GB available, explain where the 5GB are gone. (3 marks)
5.  Logical volume management, what it is, and name what its called in FreeBSD and Linux. (3 marks)
6.  asl? I mean ACL, what is it? (3 marks)
7.  Whats a snapshot? (3 marks)
8.  Whats the difference between softlink and a hardlink? Give commands to create them. (3 marks)
9.  What is an inode? (3 marks)
10.  What is a command to edit quota? (3 marks)
11.  Give a command to create a file called "-[ hax0r ]-". (2 marks)

## Hardware (30 marks)

1.  How do the SAS hardrives differ from SCSI? (3 marks)
2.  Give 2 advantages for using 2.5" hard drives instead of 3.5" in servers (2 marks)
3.  What is RAID 0, RAID 1 and RAID 5 and briefly explain how they work. (7 marks)
4.  What is ALOM and BMC(hint, ALOM is on Sun servers, BMC on Intel servers; both do pretty much the same job) (3 marks)
5.  What is KVM and why would you want to use it in server enviroments? (3 marks)
6.  Some very nice people are donating a server to redbrick, they say it is '1U' what does that mean? (3 marks)
7.  What is UPS? And why do we use them? (3 marks)
8.  Give 3 advantages of SATA over IDE. (3 marks)
9.  Explain what 'serial console' means. (3 marks)

## Networking ( 30 marks )

Answer section A or B. Each are worth the same amount of marks.

1.  Draw an ascii diagram of an IPv4 header packet and an IPv6 header packet. Show all fields and explain what they are used for. Give 3 advantages and disadvantages of using IPv6 over IPv4\. (30 marks. Yes, atlas is a bastard)
2.  1.  Listen up Soldier! Some filthy maggot has put the wrong IP address on your server. Change it. While you're at it, change the default route as well. Pick whatever address and route you want. NOW DROP AND GIVE ME 20\. (3 marks)
    2.  I don't know what I've been told, a switch is new, a hub is old. Give me 2 reasons why a switch is better than a hub. (2 mark)
    3.  Ten-HUT. Preseeent ... a list of all TCP ports that a server is listening on. Without using nmap. (1 mark)
    4.  What do these stand for, and give a very brief explanation of what each is for. ( 10 marks, 2 each )
        1.  ARP
        2.  MX
        3.  WAF
        4.  SOA
        5.  MTU
    5.  Class based addressing is for Commies. What is the alternative called? (1 mark)
    6.  How many IP addresses are in a /24, /16, and for a bonus mark, /25 subnets? Double time. Hut hut hut. (3 marks, 1 possible bonus)

## LDAP (20 marks)

1.  What *is* LDAP? What does it do on Redbrick? How important is it? How easy is it to break it? (3 marks)
2.  How would you search LDAP for someone with the username 'flangewallet'? (3 marks)
3.  <pre>:~$ hey atlas
    hey: warning - atlas does not exist
    :~$ id atlas
    id: atlas: No such user</pre>

    OH NOEZ. LDAP is running. You can search it. What's wrong? (4 marks)
4.  What is a Schema? (3 marks)
5.  slapd is the LDAP daemon. What's slurpd? Explain what it does. (4 marks)
6.  Give an alternative to LDAP? (3 marks)
7.  What is an LDAP reindex? Give a brief description of the process. (5 marks)
8.  What are LDAP attributes? (2 marks)
9.  What do the following stand for? (3x1 marks)
    *   ou
    *   dn
    *   cn

## Security (30 marks)

1.  Why is this really *really* bad:  

    <pre>~ # echo $PATH
    	.:/bin:/sbin:local/bin:/bin::/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin</pre>

2.  Telnet, ftp, pop, imap, are all insecure for the same reason. What is it?
3.  Explain what 'chroot' does. Why is it useful for securing daemons?
4.  What is identd? What is it for?
5.  "Linux is like totally secure". Discuss briefly.
6.  The website has been defaced. What do you do? What *do* you do?
7.  You suspect a rootkit being on the system. How do you check if your gut is right.
8.  Why do we use SUEXEC in apache?
9.  You find a root terminal unattended. You're feeling particularly leet today How do you give yourself a backdoor?

## Bonus! (0 marks)

1.  Why are there no questions marked '6'?
2.  How many marks is this section worth?
3.  Given the answer above, why are you bothering?
4.  What is an etherkiller?
5.  Emacs or Vim? Answer very carefully. ( Answering with 'nano' or 'pico' will result in an instant 0... Emacs, instant -500 )
6.  Why has question number 6 suddenly made a comeback?
7.  Complete the sentance: #lobby is full of ____________

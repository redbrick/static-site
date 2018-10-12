---
title: 'Admin Test 2010 AGM'
---

## The rules

1.  **ALL GLORY TO THE HYPNOTOAD.**
2.  The first half hour is for scripting. During this time, man, info, apropos, perldoc, pydoc, etc (anything that's installed on redbrick) may be accessed. The internet may not.
3.  After the first half hour you may not access anything other than a text editor.
4.  We're watching you. Any trouble and sonic will throw you out a window.
5.  All sections are probably not weighted equally. Probably. W're not quite sure yet.
6.  The whole test is out of 267\. Yep, 267.
7.  **ALL GLORY TO THE HYPNOTOAD.**

## Section 1, Scripting

40 marks

1.  Write a script to tell you how much space each user is using in their HOME directory and how many files they have greater than 150mb. Output should be:  

    <pre>SpaceUsed Username NumFiles</pre>

    However it should be sorted by alphabetically by Username. (13 marks)
2.  Write a script that checks whether or not a user has a quota on /dev/sda1 (/storage on Minerva). If they don't, then check whether or not they have more then 2GB of files in their home directory. If not, set them a 2GB quota. If they do have more then 2GB of files, email admins@redbrick.dcu.ie to prod someone to look at the situation manually. (13 marks)
3.  Write a script that takes 6 usernames and monitors what processes they are running during the admin test. If any of the users run any of 3 forbidden binaries simultaneously (you get to pick the forbidden binaries, aren't we nice?) they are heyed (assume mesg y) saying they are cheating gits and to "stop or else". Also, if **any** of the offending processes are running, kill them immediately. (13 marks)
4.  Write a script that monitors incoming mail for the word "GRAND", "PLANTS", "BBQ" or "TFAS". If any is found, send it to /dev/null and cat /boot/vmlinuz all over that user's terminal. (1 mark, but we'll really like you and be nicer marking the rest).

## General

(22 marks)

1.  You are about to reboot all user login servers for a kernel upgrade. You have already upgraded the kernels. What else should you do on each server and in what order. (Server A running LDAP, Mail, IRC server, Server B running a dev environment for users, Server C running an NFS server with everyone's /home and webtree on it, Server D running a web server) (5 marks)
2.  Whats nagios likely output to what happens in the above question assuming no intervention on your part. (1 mark)
3.  What permissions would you give /usr/bin/wall if you were setting up a server? Why? (2 marks)
4.  You just typed your password into the username field while logging in from PuTTY. Should you be worried? If so, what should you do about it? (3 marks)
5.  What temperature should the Redbrick room be kept at? (1 mark)
6.  A machine has just died, its not important enough for you to rush to the server room to fix (at 00:22 anyway), but your curious as to what went wrong. Give an example of where you might look for information. (2 marks)
7.  What does DNS do? (1 mark)
8.  How would you search man for a woman? (1 mark)
9.  What version of an OS should your secondary services machine be running?(2 marks)
10.  What is the CVE database? (2 marks)
11.  What is an IP KVM? Why does redbrick have or need one? (2 marks)

## Linux

(26 marks)

1.  You want to find a package that has something to do with "mudkips" on a Debian based system. Give us the command you'd enter. (1 mark)
2.  You pasted minerva's root password into #lobby last night, didn't notice and went to bed. How do you change the root password? The permissions of what file in /bin are suddenly very important to you? (2 marks)
3.  Describe the steps needed to share /waf on 192.168.0.1 with 192.168.0.2 via NFS. (4 marks)
4.  How would you disable sudo access for users without removing the binary or editing the binaries permissions? (3 marks)
5.  Murphy just had a wibblywobbly and you had to shut it down. What steps will you take to diagnose what went wrong. (1 mark)
6.  What file do you add nameservers to? (1 mark)
7.  What file do you add a time server to? (1 mark)
8.  How do you get ntp to resync its time immediately? (2 marks)
9.  OH noes, some idiot left their root terminal open and someones ran apt-get remove apt. How might you go about fixing this? (4 marks)
10.  Redbrick use a shiny packaging system (a standard debian setup, really), explain how you would modify and deploy a change to a package? (5 marks)
11.  What's an nrpe plugin? (2 marks)

## Free/OpenBSD

(23 marks)

1.  How would you update the ports tree on FreeBSD? Any one of the twenty methods is acceptable, as long as it works. (3 marks)
2.  You've been elected, and you're handed a root terminal on our BSD machine to create an a/c for yourself. You go  

    <pre>useradd waf</pre>

    You can now login fine, but it won't let you su, even when you have the password right. Why not? (2 marks)
3.  What's a securelevel? (2 marks)
4.  Why should you not put your /home partition on /dev/wd0b? (2 marks)
5.  /dev/amrd0s1a. What's that all mean? (3 marks)
6.  What does dtrace do? (1 mark)
7.  What's the current (stable) OpenBSD version? Current (release) FreeBSD version? (2 marks)
8.  What's the correct way to add a new user or group on FreeBSD? (2 marks)
9.  Where do ports and packaged software usually install to on a BSD system? (1 mark)
10.  What file usually contains the kernel on an OpenBSD system? (1 mark)
11.  Where would you configure networking on either an OpenBSD or a FreeBSD system? (2 marks)
12.  Where would you configure which TTYs (the console, serial ports, etc) have login prompts on a BSD system? (2 marks)

## Security

(33 marks)

1.  I overloaded your ma's buffer last night. What's a buffer overflow (1 mark), why are they bad (1 mark)? How would you use one to 0wn someone's gibson (3 marks)? (1+1+3=5 marks)
2.  What's a "setuid" executable? (2) Give a command to turn a regular executable into a "setuid" one (1). (2+1=3 marks)
3.  A user has called you over to look at their broken wordpress installation. They type ls -l and you see the following output:  

    <pre>[werdz@minerva wordpress]$ ls -l
    total 228K
    -rw-r--r-- 1 werdz member    94 2006-11-19 07:56 index.php
    -rw-r--r-- 1 werdz member 15127 2003-04-01 15:12 license.txt
    -rw-r--r-- 1 werdz member  7635 2007-08-28 20:01 readme.html
    drwxr-xr-x 7 werdz member  4096 2007-10-26 17:08 wp-admin
    -rw-r--r-- 1 werdz member 32765 2007-09-18 17:32 wp-app.php
    -rw-r--r-- 1 werdz member   129 2007-08-03 01:45 wp-atom.php
    -rw-r--r-- 1 werdz member   997 2007-05-09 17:18 wp-blog-header.php
    -rw-r--r-- 1 werdz member  2923 2007-07-04 17:12 wp-comments-post.php
    -rw-r--r-- 1 werdz member   153 2007-08-03 01:45 wp-commentsrss2.php
    -rw-r--r-- 1 werdz member   944 2007-11-23 02:02 wp-config.php
    -rw-r--r-- 1 werdz member   965 2007-05-12 19:29 wp-config-sample.php
    drwxr-xr-x 4 werdz member    49 2007-10-26 17:08 wp-content
    -rw-r--r-- 1 werdz member   851 2007-08-03 01:45 wp-cron.php
    -rw-r--r-- 1 werdz member   120 2006-11-19 07:56 wp-feed.php
    drwxr-xr-x 4 werdz member  4096 2007-10-26 17:08 wp-includes
    -rw-r--r-- 1 werdz member  1525 2007-09-23 20:25 wp-links-opml.php
    -rw-r--r-- 1 werdz member 16654 2007-09-26 00:17 wp-login.php
    -rw-r--r-- 1 werdz member  5779 2007-10-21 07:18 wp-mail.php
    -rw-r--r-- 1 werdz member   296 2007-09-18 23:23 wp-pass.php
    -rw-r--r-- 1 werdz member   190 2007-08-03 01:45 wp-rdf.php
    -rw-r--r-- 1 werdz member   251 2006-10-11 10:26 wp-register.php
    -rw-r--r-- 1 werdz member   129 2007-08-03 01:45 wp-rss2.php
    -rw-r--r-- 1 werdz member   127 2007-08-03 01:45 wp-rss.php
    -rw-r--r-- 1 werdz member 10793 2007-09-19 21:48 wp-settings.php
    -rw-r--r-- 1 werdz member  3520 2007-08-03 01:45 wp-trackback.php
    -rw-r--r-- 1 werdz member 57954 2007-09-18 17:42 xmlrpc.php
    </pre>

    Point out the glaring security hole (3 marks).
4.  Some moron admin left their terminal open on the Photoshop PC in the clubs and socs office. They had a root terminal open in one of their screens. Name one way Micheal McHugh could give himself a back door. (3 marks)
5.  All root passwords just got changed. How do you inform the other root holders of the new passwords securely? (2 marks)
6.  Forkbombs are bad mmmkay. Why? How will you stop this evil? (3 marks)
7.  What is a umask? (2 marks)
8.  Give 3 files that should only be viewable by root. (3 marks)
9.  Redbrick uses at least 2 different firewalls, name them. (2 marks)
10.  What is this line from? What does it do?  

    <pre>pass out quick on hme1 inet proto { tcp udp } from any to any port { www https }</pre>

    (3 marks)
11.  Why is telnet, FTP, SMTP, etc usually a bad idea? (1 mark)
12.  What does AppArmor do, aside from piss admins off? (2 marks)
13.  Why is this a bad idea?  

    <pre>mysql -u root -h mysql.internal -p=rootpasswordgoeshere mydatabase</pre>

    (1 mark)

## LDAP

(26 marks)

1.  What is slapd? What is slurpd? (2 marks)
2.  What does nscd stand for? What does it do? (2 marks)
3.  What version of LDAP do we mainly use? (the protocol, not the piece of software) (1 mark)
4.  What form of authentication do we use on our LDAP server? (2 marks)
5.  You want to do an (unprivileged, no need for root) LDAP search for merchelo. How would you do this? You can assume that the admins have set up ldap.conf correctly to reduce the amount of switches you'll need. (3 marks)
6.  Give me an LDAP search filter that'll find all the users with YearsPaid less than one (shouldn't be any lower than -1), and in the member group? (3 marks)
7.  What does LDAP stand for? (2 mark)
8.  How would you produce an LDIF if the LDAP server was running normally? (1 mark)
9.  How would you produce one if it was down? (1 mark)
10.  Name 2 generic LDAP tools, other then the one you used earlier. (2 marks)
11.  What does re-indexing the LDAP database mean? (1 mark)
12.  How would you do this? (2 marks)
13.  In the context of an LDAP search, what do the following normally mean?
    1.  o
    2.  ou
    3.  cn
    4.  dn(4x1 = 4 marks)

## Files and Filesystems

(31 marks)

1.  Name three filesystems. Tell us a useful bit of information about each of them. No NTFS plx. (5 marks)
2.  What's an LVM? (2 marks)
3.  Explain what the sticky bit on a directory does. (2 marks)
4.  How would you find the inode number of a file? (2 marks)
5.  Now that you've found the number, what is an inode? (2 marks)
6.  Why would you ever want to know an inode's number anyway? What's it useful for, other then designing filesystems? (2 marks)
7.  Explain in as much detail as you can the difference between symbolic links and hard links. How would you create each? Why are hard links useful for incremental backups? (1 + 2 + 2 = 5 marks)
8.  Explain what each bit of this line means, and tell us where we found it:  

    <pre>UUID=3835ca8f-3c96-4597-a027-32c7a0962c07 /var/tmp        ext3    nosuid,noexec,nodev,relatime        0       2</pre>

    (8 marks)
9.  What's in /etc/mtab? (1 mark)
10.  How did I produce the following? What do the numbers mean, roughly?  

    <pre>     Filesystem  blocks   quota   limit   grace   files   quota   limit   grace
    192.168.0.21:/storage
                    26151752  30000000 33000000          385837  1800000 2000000  
    					</pre>

    (2 marks)

## Networking

(33 marks)

1.  What's a pf? Sounds a bit like poof. What's a server doing acting like a poof? (2 marks)
2.  Aside from creating a massive headache and an epic looking spaghetti jungle behind the racks, why do we have three different networks? (1) What does each of them do? (1) They're all plugged into the same physical switch. How does this not result in chaos? (3) (1+1+3 = 5 marks)
3.  So, Redbrick's primary link has died, and you need to bring up the secondary link on our switch. Give the commands to do this, assuming that the secondary link is gi0/47 (4 marks)
4.  Give the names of, and examples of things that happen in any 4 of the 7 OSI layers. (4 marks)
5.  136.206.15.0 to 136.206.15.255 is how big a subnet? (in bits) (2 marks)
6.  136.206.218.123/28\. What's the /28 usually called? (1 mark)
7.  Give the ports on which two services would usually listen, excluding telnet, FTP, HTTP or SSH. (2 marks)
8.  What is tcpdump? (1 mark)
9.  What is a VLAN? (2 marks)
10.  What is a VPN? Name a piece of software that you might use to create one. (2 marks)
11.  How would you add a route to the routing table of an OS of your choice? (2 marks)
12.  How would you add an IP alias to an interface on an OS of your choice? The interface is already up, and you don't want to disrupt the existing link. (2 marks)
13.  Identd runs on port 113, but it runs under the xinetd user. How is this possible? Why is it strange? (2 marks)
14.  How would you log into redbrick's switch? (Any method that works on a Cisco will do). (2 marks)

## Hardware

(33 marks)

1.  Redbrick recently bought a giant storage array.It's a direct attached storage device connecting to a SAS RAID controller (a Dell PERC6/E sitting in minerva). It contains 10 15000RPM 3.5" SAS disks in RAID 10, has two power supplies and shows up on Linux as /dev/sda.
    *   What's the difference between a direct attached storage device and a network attached storage device? (1 mark)
    *   What's RAID do (in general, no need for discussion on individual levels). (1 mark)
    *   Explain what RAID 10 means. (3 marks)
    *   The disks are 15,000RPM disks with SAS interfaces. They're fast. Name one other type of interface you might find on a disk in the Redbrick room, and name one other common disk speed that you might find in the redbrick room. Regarding the interface, is it generally slower or faster then a SAS interface? (3 marks)
    *   Why would we want two power supplies in a piece of hardware? (1 mark).
    *   There's ten disks. /dev/sda only represents one disk. Why is this? (2 marks).(1+1+3+3+1+2 = 11 marks)
2.  Sonic wants to replace the new and old storage arrays with 5 shiney SSD drives in a RAID10 setup. Is this madness or IS THIS SPARTA? Explain your answer by giving the advantages/disadvantages to the system. (3 marks)
3.  Thunder, with it's crazy prioprietary hardware RAID controller, has a dead disk. How do you know and how do you find out which disk? (very vague answer accepted) (1 marks)
4.  RAID1/RAID5/RAID6\. Give me minimum number of disks. Which is more space efficent? How do they work? (3* 3 marks +1 = 10 marks)
5.  Pick a current intel processor and give 3 technical reasons why it rocks your cpu socks. (3 marks)
6.  What architecture is murphy? Why has this caused us headaches in the past? (2 marks)
7.  What is this architecture good at? What is it really, really, really bad at?(2 marks)

## Bonus

1.  Hit refresh at the end of your test to see the super shiny bonus round! We haven't written it yet.

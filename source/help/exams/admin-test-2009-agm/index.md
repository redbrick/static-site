---
title: 'Admin Test 2009 AGM'
---

277 marks total. All rounds are not weighted equally.

The first half hour is for scripting. During this time, man and info pages (along with perldoc, etc - anything that's **preinstalled on redbrick**, no external docs allowed!) may be accessed. After this time, you may not access anything other then your text editor. We're watching you. Johan has a knife.

* * *

### scripting

###### 40 marks

It's 2008 and RedBrick has been haxxored, you alone must write a bunch of hacky scripts to sort it out.

1.  Firstly you must email all the users, because they're angry and don't know what's going on. However, deathray is shitting itself, so using mailman is out of the question - All you have is an ldif file. Use the ldif file to email every user at both their redbrick and altmail addresses. (an example ldif is in /var/tmp) (13 marks).
2.  So, now the users know, but all their websites are still replaced by rooted bricks. Luckily the original html file has been saved as index.waf. Write a script that finds all the index.waf files in /webtree and renames them to index.html (13 marks)
3.  That mostly worked, but some users didn't have an original index.html so their brick page wasn't replaced. Write a script to check the differences between every index.html and the one in /var/tmp. If they're indentical then delete the users' index.html (13 marks)
4.  Write a script to amuse me (1 mark)

### General (The more 4 section)

###### 41 marks

1.  How would you search for a man page? (3 marks)
2.  What's an RCS? Why does Redbrick use it? What does it mean that receive's had db.internal locked for the past 200 days (5 marks)
3.  What's a nice number? What command would you use to change a nice number (3 marks
4.  What's a xen? Why's it different from a KVM? (3 marks)
5.  What's a dirvish? Why's it good for looking after Cian's giant collection of pr0n? (3 MARKS)
6.  You've gone and catted a binary, and your screen is in a wide variety of languages, none of which contain latin characters? How do you go about fixing this? (3 marks)
7.  How would you suspend a process? What signal would you send it? How would you resume it? What signal would you use? (3 marks)
8.  Why should you avoid using kill -9? (2 marks)
9.  What architecture is murphy? What are it's benefits for RedBrick wide synergistic protocol exchange? (I'll accept what the architecture is good at either) (2 marks)
10.  What's a crontab? How would you edit such sorcery? (2 marks)
11.  What temperature should the redbrick room be at? (1 mark)
12.  It's late, it's nearly time to run the test, and I haven't slept last night. Finish this one yourself  
    Only joking. What do you need to do to tell programs you use you're behind a proxy? (3 marks)
13.  No body in the office could give me a damn cup, so now it's payback time, What's fail2ban, why do we use it? (3 marks)
14.  What are the following? (1 mark each)

*   nagios
*   exim
*   bind
*   jumpgate
*   iptables
*   IOS

### David Cameron Round (Linux)

###### 22 marks

1.  You have 2 disks, sda1 and md0, explain the difference between them (3 marks)
2.  Some Fool, possibly moju has used yum to remove yum, explain the steps you would take to fix this [debian apt related answers excepted] (4 marks)
3.  Ubuntu likes to reset the MOTD on boot, how would you set it so this doesn't happen on boot [hack expected] (2 marks)
4.  Your ntp server is eating your CPU, how would you find out what its doing (3 marks)
5.  What commands would you use for the following:

*   Give one way of checking load (1 mark)
*   bring up the eth0 interface (1 mark)
*   Show currently mounted file systems (1 mark)
*   Find the amount of Free Space on a Partition (1 mark)

7.  Name one way to check if a package is installed (3 marks)
8.  What is /etc/nsswitch.conf used for (3 marks)

### OpenBSD / Solaris

###### 32 marks

##### Solaris (the synergy section)

1.  Explain c0t1d0s2 (3 marks)
2.  You've installed Solaris, the damm thing thinks its 1995 and is starting telnet on boot, how do you stop this? (3 marks)
3.  Give the Solaris specific way of telling if a service is running? (3 marks)
4.  Sun in it's infinite wisdom have decided not to bother with a nice network aware package manager. They've also decided to leave you with a nice kernel bug. Where do you go to get a patch for this? (2 marks)
5.  Why is killall a wonderful little tool on linux, and a hilarously bad idea on Solaris? (3 marks)
6.  You've just logged into your new Solaris box with your funky colorised bashrc, but ls dosn't work, how would you fix this? (2 marks)

##### OpenBSD (The difficult bastard section)

1.  Open BSD's installer is seperating your disk into alphabetically numbered sections. You really shouldn't use two of these for actual file systems. Which two and why? (5 marks)
2.  explain the difference between patches ports and packages? (3 marks)
3.  What's PF? What do you use to start it? (3 marks)
4.  How would you set pf to start on boot (the proper configurable way, no hacks kkplzthnxbai)? (3 marks)
5.  What's a securelevel? (2 marks)
6.  su doesn't work for your newly created local account on OpenBSD. Any idea why? (3 marks)

### Security

###### 30 marks

1.  Apache runs on port 80, but it runs as www-data. Omghow? (3 marks)
2.  Why is this like, bad and stuff? (3 marks)

    <pre>[root@murphy ~]# echo $PATH
     .:/bin:/sbin:local/bin:/bin::/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin
    </pre>

3.  What is identd? What is it for? (3 marks)
4.  You find a root terminal unattended. How do you give yourself a backdoor? (3 marks)
5.  Explain what 'chroot' does. When would you use one. (4 marks)
6.  Why is the RedBrick webserver set up to run CGI scripts under SUEXEC? (or SuPHP for php files)? (3 marks)
7.  C code should be avoided in favour of python scripts that don't need to be beaten to compile on various platforms, but at sometime you'll probably have to look at some C code, and check that using it wouldn't be insane. Why would you be mad to let this slip through? (4 marks)

    <pre>        #include 

            int main(int argc,char * argv[]) {
                char input[20];

                printf("Enter a 20-character string: ");
                gets(input);

                // Do something with username and password

                return 0;
            }
    </pre>

8.  How can you get a list of all processes (and their owner) listening on network ports? (3 marks)
9.  Give an example of 2 mailing lists you should subscribe to as an admin (1 mark each)
10.  Explain each of the following briefly (1 mark each)
    *   chkrootkit
    *   fakeroot

### LDAP

###### 20 marks

1.  What does LDAP stand for? (2 marks)
2.  What's the difference between slapd and slurpd? (3 marks)
3.  What's a Schema? (3 marks)
4.  How would you search LDAP? (3 marks)
5.  Slow LDAP is slow, how do you make slow ldap fast? (3 marks)
6.  What is an LDIF file? What command generates one? What command imports it back into the LDAP database? (3 marks)
7.  What LDAP version do we use [not slapd!] (3 marks)

### File systems

###### 35 marks

1.  Name 3 different, non-compatiable filesystems? (3 marks)
2.  Name at least one difference between each of these (3 marks)
3.  What's an inode? (3 marks)
4.  What goes in /etc/fstab? How about /etc/dfstab? and /etc/mtab? (Yes I know this is for a pile of different operating systems, but I'm a dickhead so I don't care) (3 * 2 marks)
5.  When do you want to fsck? (3 marks)
6.  What's a symbolic link? What's a hard link? What's the difference? ( 3 marks)
7.  What's a character and a block device? Given an example of each? (2 * 2 marks)
8.  What's a journaling filesytem (2 marks)
9.  What's this lie from? Explain at least 2 of the options ( 3 marks + 2 * 2.5 marks)

### Networking

###### 30 marks

1.  How do you show the routing table on an OS of your choice (that redbrick uses) (3 marks)
2.  Explain the difference between TCP and UDP (3 marks)
3.  Explain the following terms in relation to DNS (1 mark each)
    *   SOA
    *   CNAME
    *   Glue Record
    *   A
    *   TTL
4.  What is NAT? Why would you use it (or not use it)? (4 marks)
5.  Give 3 commands to look up a DNS entry (1 mark each)
6.  How many IP addresses are in a /24, /16, and for a bonus mark, /25 subnets? Double time. (3 marks, 3 possible bonus)
7.  What is inetd. What would you use it for? (3 marks)
8.  What is a vlan? How are they used on Redbrick? (3 marks)
9.  What is a vpn? How are they used on Redbrick (or, somewhere else)? (3 marks)

### Hardware

###### 20 marks

1.  Explain RAID0, RAID1, and RAID5 (3x1 Mark)
2.  Whats the difference between RAID10 and RAID01? Which is better and why? (3 marks)
3.  What's the difference between SATA, SCSI and SAS
4.  Murphy has an ALOM, Morpheus and Daniel have ILOMs, what are they and why do they make Cian nearly forgive Sun for there horrible horrible Software(3 marks)
5.  I have a lot of Us in my RACK, what are they and how many do I have (3 marks)
6.  What program would you use to connect to a serial console on a *NIX System (3 marks)
7.  1000BaseT specifies 2 things about Ethernet, What are they? (2 marks)

### BONUS ROUND

###### 1,000,000,000,000,000,000,000,000,000,000,000,000,000 marks ( approx, +/- infinity )

1.  Some admin keeps leaving his screen unlocked. What do you do to him?
2.  Why are we better than Games Soc?
3.  Explain in less than 1000 words, the javascript trap
4.  Whats wrong with fake tan and red bull?
5.  What's this mean? 0100001100110000011010110011111101100111011011000011000100100011
6.  What key combination enters the console screen saver on FreeBSD?
7.  What's wrong with Sun Microsystems
8.  Rate these operating systems in order of preference
    *   OpenBSD
    *   OpenBSD
    *   OpenBSD
9.  What does su do?
10.  How do you intend to improve the quality of the naked women on the server room wall?

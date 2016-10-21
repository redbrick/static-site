---
title: 'Admin Test 2005 AGM'
---

All questions can be answered in the context of any version of UNIX (except for the Solaris, FreeBSD and Linux sections obviously!). Indicating which version of UNIX you refer to in your answer is preferred but not required. Negative marking applies throughout for answers that are clearly incorrect or demonstrate incompetence.

Humourous answers while appreciated gain no extra marks. Keep answers short and concise - don't waste time writing when one or two word answers will suffice.

ALL SECTIONS ARE *NOT* EQUALLY WEIGHTED

The test is marked out of 300.

Best of luck!

- phaxx, mickeyd, halenger, dizer
0. Scripting (40 marks)
Rules:

You must be mesg n for duration of test. Any attempt to communicate with other users will result in immediate failure.
You may only refer to system documentation (man & info pages) for help, i.e. no web access!
You are free to use any shell or scripting language to write the scripts. Only system commands may be used, your own or other user scripts may not be referred to. Basically: no cheating!
Make a directory ~/admintest and place scripts in there. Name each script by its question number. Humorous error messages make your scripts run faster.
Whilst we hope your scripts run correctly, the emphasis is on the procedure rather than a perfectly working implementation.

Here we go..

Redbrick has started receiving letters from the various Irish organisations who deal like to complain about illegal material being available on the internet. The webmaster has...forgotten...to pay much attention to this situation. Write a script to find all files in /webtree with the following extensions: "mp3, wma, wmv, rm, ra, ogg, avi, mov, m4a, mpg, mpeg". Make sure the search is case insensitive. Write this to a file (as we will need it to find "culprits") and present it in the form:
username :: group -:- chmod_of_file :-: size_in_kilobytes - path
Write to the file "omfg_busted_zing.txt"
(13 marks)
Process this list so that it generates a report. The report should be as follows:
chmod :: number_of_files :-: size_in_kilobytes_in_total -:- number_of_members
(13 marks)
Also process the list so that the top 10 users with the largest combined file sizes are listed as:
username :: group :-: total_file_size -:- largest_file
with a full list written to "fscking_users.txt" 
(14 marks)
1. Solaris - with thanks to dizer (30 marks)
Listen up maggots, as part of this job you're going to be anally gang raped by Sun Microsystems. And you're going to have to learn to like it, soliders. With time, you'll enjoy the feeling of a cool hard E450 on your ass cheeks. 

Now pay attention you slimey cunt fucks.

You commie bastards think you're so fuckin' smart eh? Then tell me what 'logging' means on Solaris UFS. (4 marks)
WHAT DID YOU SAY! /usr and / on separate partitions on a Solaris system? Either you tell me why this is a bad idea, or I'll teach your sister all about 'partitioning'. (4 marks)
Ah not again. Some anal sucking mommas boy left the air conditioning off again. Your Sun system is probably overheating like your Dad on a cheap Thai hooker. What command can I use to find out the temperature of your system? (2 marks)
Sun in their infinite wisdom left a nasty little kernel bug in a version of Solaris running on Redbrick. What online resource do you use to patch against this? Your mommy can't help you now fagboy. (1 marks)
Describe the steps involved in attaching my dick to your mother. Replace 'dick' with 'disk' and 'mother' with 'father'. Now replace' father' with 'Sun box'. (5 marks)
America, fuck yeah. Sun Microsystems, fuck yeah. Bed, Bath and Beyond, fuck yeah. Metastat, what the fuck does it do? (1 marks)
Your commander in chief has just given you a new Solaris package named 'YERma'. Your orders are to get a list of everything in 'YERma'. (2 marks)
What's the difference between /bin/sh on Solaris and on Linux? Unlike your mother and your sister, they are actually different. (2 marks)
I don't know but I've been told, Eskimo pussy is mighty cold. Here are a list of director-ies, tell me what they're for as it sure ain't sleaze.
/devices
/dev
/kernel
/opt
/platform
(5 marks)
Stop interfacing with your hand and interface with the network. You need to setup a network alias on a running network interface (say hme0) and ensure it is persistent across reboots. How do you go about this, with emphasis on the persistency. (4 marks)
 

2. FreeBSD (30 marks)
What does sysctl do? (3 marks)
What partition type does FreeBSD usually use? (3 marks)
What does FreeBSD normally use these partitions for?
/dev/ad0s1a
/dev/ad0s1b
(2 marks)
What command would you use to display the routing table? (3 marks)
Assume your DNS server is down. Looking up the hostnames for displaying the routing table is taking all freakin' day. What option (to the answer for the previous question) turns this off? (1 mark)
You've just installed a BSD system, but neglected to include the ports collection when prompted. List two ways you could install it. (4 marks)
You'd like to upgrade your system without using a crappy ol' CD. What do you do? (3 marks)
In what situation would you use vinum? Name an alternative to using vinum. (3 marks)
New kernel time! Assuming you have the kernel sources installed, how do you go about this? (5 marks)
/etc/defaults/rc.conf? What the heck is that? Why shouldn't you edit it? (2 marks)
Whats LINT? (hint: not related to fabric or paper ;) (1 marks)
 

3. Linux (30 marks)
What command would you use to change or print terminal line settings?
How would you use this command to fix a terminal after catting a binary file?
How would you use this command to set backspace to ^?
(3x1 marks)

You run ps on a user. How do you find the full path to the executable of any of the user's processes? (3 marks)
What device is represented by /dev/kmem? /dev/lp1? (2 marks)
What are major and minor device numbers? (2 marks)
What command would you use to make a block or character device? (2 marks)
You install a new network card but the driver is not installed by default. Give the steps you would take to set up the new card (you have the driver and the network card is installed). (4 marks)
Name two linux boot managers. For each one, show how you would make a change to the configuration. (4 marks)
In what file might you set a proxy for apt to use? (2 marks)
If you don't want to set a proxy in that file, how else might you make apt use a proxy? (2 marks)
What command and option would you use to do a non-destructive read/write scan for bad blocks on a file system? (2 marks)
You've just compiled a new kernel and you reboot. Everything seems to be going ok until you get the dreaded KERNEL PANIC message. You notice messages about ext3 filesystems not being mounted. What might be the cause of this? (4 marks)
 

4. LDAP (20 marks)
Sometimes LDAP needs to be reindexed. The main part of the reindexing process is stopping LDAP, exporting the LDAP database to an LDIF file, readding all the entries from the file and restarting LDAP. Give the commands to do this on RedBrick without using the slapindex command (you can assume the database is cleared after you export the database). (6 marks)
What does ldapmodrdn do? (2 marks)
When usernames start appearing as numbers, its usually a problem with nscd rather than LDAP, but what is nscd and what is it used for? (4 marks)
What commands are used to a) change and b) remove an LDAP entry. (2 marks)
slurpd provides replication of an LDAP database. Name three benefits of doing this. (3 marks)
What are LDAP attributes? List and explain 3 of them. (3 marks)
 

5. Files & Filesystems (30 marks)
[ mickeyd@carbon:~ ]$ ls -ld /tmp
drwxrwxrwt   35 root     root         1080 Apr  8 11:52 /tmp
         ^
What does the t mean?
Why might this be set on a directory like /tmp?
(5 marks)
What is the difference between a character and block device? (2 marks)
Give an example of a character and a block device (you can use FreeBSD/Linux/Solaris but both examples must be from the same OS). Provide device names. (2 marks)
Filesystem           1k-blocks      Used Available Use% Mounted on
/dev/sda2              4901956   3334036   1318916  72% /
none                    102400       284    102116   1% /tmp
/dev/sda3              4901956   2214024   2438928  48% /var
/dev/sda5              8649544   1204144   7006024  15% /local
/dev/sda6              4901924   2523936   2128984  55% /var/tmp
/dev/sda7            186299092  91005928  95293164  49% /home
192.168.0.3:/webtree 173810112  62530848 111279264  36% /webtree
192.168.0.4:/jibber/webtree
                     192872352 152488544  24954016  86% /backup/webtree
192.168.0.4:/jabber/home
                     192872352 129194080  48248480  73% /backup/home
What command was used to display the above output? What can you say about the last three filesystems? (3 marks)
What is the traditional difference between /bin and /sbin? (2 marks)
Show how you would write a bootable floppy image 'boot.img' to a floppy disk (assuming the image fits on the disk). (3 marks)
Explain what is meant by the following mount options:
noauto
nouser
suid
sync
(4x1 marks)
Journaling filesystems - good or bad? Why? Name 2 journaling and 2 non-journaling file systems. (6 marks)
On an NFS mount, what does all_squash do? (3 marks)
 

6. Hardware (30 marks)
What does RAID stand for? What is it? (4 marks)
Give reasons for and against using RAID. (4 marks)
The most common RAID levels are 0, 1 and 5. Explain how these work. (4 marks)
Give some advantages of using software RAID over hardware RAID. (4 marks)
You attach a new IDE drive to a system. Its not working properly. Name 3 things you check before shipping it back. (3 marks)
What is DVI? (2 marks)
What is ECC memory and why would a server use it? (2 marks)
The pentium 4 Xeon inside carbon has the following capabilites:
fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe cid
Explain 6 of these flags. (6x0.5 marks)
What does UPS stand for and why is it A Good Thing [TM]? (4 marks)
 

7. Networking (30 marks)
Whats a CIDR netmask? Give an example of the other type. (2 marks)
tun0/tap0. What the feck are they? (don't just say 'network interfaces' :) (2 marks)
Explain briefly each of the following:
MTU
FQN
ARP
TBH
SOA
UDP
MAC
(12 marks)
Why is the loopback device important? (2 marks)
How would you add a default route for a linux machine? How would you verify it worked? (2 marks)
screen    4587     awol    3u  IPv4 0xc3dafcf0      0t0  TCP 192.168.0.4:65070->192.168.0.1:ldap (ESTABLISHED)
What program generated the line above?
Summarise this line in plain english.
Why might 'screen' be doing that?
Look at the fields with the IPs and ports. One of the ports has been replaced with it's actual name, 'ldap'. How does it know? What controls this?
(8 marks)
RedBrick has been delegated two subnets by DCU. (15 & 16). Are they class A, B, C or D? (1 mark)
...and finally for Networking, a nice simple one: Hubs and Switches. Whats the big difference? (1 mark)
 

8. Security (30 marks)
chroot! Whats it good for? What problems might you face when trying to use it? (4 marks)
-rwsr-x---    1 root     root        23112 Nov  2 19:56 /bin/spork
You find a mysterious binary in /bin/. You don't know what it is or how it got there. Name three things you can do to safely try to see what it does. (6 marks)
Look at the permissions string for /bin/spork above - what does that 's' mean? How would you both add and remove that 's'? (4 marks)
The file above turns out to be a copy of 'bash'. Shit. What do you do next? (detailed answer - six marks for this!) (6 marks)
Er, how is it that something like apache can run as the user 'www', yet be listening on port 80? Aren't ports below 1024 priviledged? (3 marks)
Apart from something one might do with your nose, whats snort? (3 marks)
Whats a VPN? Give one situation in which one might want to use one. (2 marks)
Whats SUEXEC good for? (2 marks)
 

9. General (30 marks)
Redbrick's lagged to hell. You check top and there's "sshd"s everywhere. Lower down there's some "sftp-server"s listed. What...the...hell...?? How do I find out what these sftp things are doing? (3 marks)
'hey' is telling you that some users don't exist. Something definately up, but what might it be? (3 marks)
When editing important files as a Redbrick admin, RCS is often employed. What is RCS? How do I use it? What do I do when that tool phaxx leaves the file "in use"? (3 marks)
Whats wtmp for? (2 marks)
I'm tired of this. Please write the remainder of the test yourself.











Just kidding. Describe the steps in mounting something over NFS. Both client and server steps are required. (6 marks)
What are all of the following for:
renice
wtmp
dig
(3x2 marks)
Currect version of:
Carbon's kernel
Deathray's kernel
Enigma's FreeBSD
(3x1 marks)
What's the optimal temperature for a server room's air conditioning system? (2 marks)
tsocks seems to be unresponsive. Any attempts to use it just hang there and eventually time out. The proxy seems to be the most likely culprit so changing it seems like a good idea. It's set to proxy3. How do I change it and get tsocks working again? (2 marks)
 

10. skyhawk's mother (Bonus round, zero marks, be nice!)
(0 marks)

Name?
Do you think she'd approve of you being an admin?
If so, why?
(sorry dec, had to make good on my threats. ;)
 

Bonus Bonus question:
What member /var/tmped something that ground Redbrick to a halt lately? How did he make people aware of what he had put there and how big a tit do you think he is? (Please display ability to abuse members who make a general balls of Redbrick)

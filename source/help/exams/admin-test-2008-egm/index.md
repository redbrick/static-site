---
title: 'Admin test 2008 EGM'
---

<pre id="line1">ll questions can be answered in the context of any version of UNIX 
(except for the FreeBSD and Linux sections obviously!). Indicating which 
version of UNIX you refer to in your answer is preferred but not required. 
Negative marking applies throughout for answers that are clearly incorrect 
or demonstrate incompetence.

Humourous answers while appreciated gain no extra marks*. Keep answers short
and concise - don't waste time writing when one or two word answers will 
suffice.

* - Although, it will put us in a better mood while correcting.

ALL SECTIONS ARE *NOT* EQUALLY WEIGHTED

The test is marked out of an arbitrary number equal to two times the 
bisection of the set of available marks, as outlined by the numbers beside 
the questions and sections (they're not just there to look pretty).

The Rules

    * You *must* be mesg n for the duration of the test. Any attempt to 
    communicate with other users will result in immediate disqualification. 
    Big Brother is watching you.

    * During the scripting section *only*, you may refer to the system 
    documentation (man & info pages) for help. You *may not* use any external 
    documentation, i.e. no web access! Don't forget, Big Brother is still 
    watching you.

    * You are free to use whatever shell or scripting language you wish to 
    write the scripts (except brainfuck and whitespace. Admins are people 
    too!). Only system commands may be used: yours or other users' scripts 
    *may not* be referred to. Basically: No cheating! Big Brother will be 
    checking.

    * Make a directory called ~/admintest, and place scripts and answers in 
    there. Name each script by its question number. Don't forget: Humorous 
    error messages make your scripts run faster. Big Brother likes humorous 
    error messages.

All questions that don't have marks next to them are marked equally.

=======[ Scripting (40 marks) ]=======

1\. Write a script or command, in the scripting language or shell of your
 choice, to search every file in every members home directory (ignore 
 associates, cos they're too nice) for the string "i hate ". If the string is found, wipe the user's home directory
 and make their terminal print "GTFO" and exit when they attempt to log in.
 (13 marks)

2\. We've just moved our storage partition from a certain unnamed 180GB array
 to another certain unnamed 3.26TB array. Write a script to give each user a
 1GB quota on that new array (call it /dev/sda1, mounted as /storage). If the
 user's old quota (on 192.168.0.3:/home) was greater than 1GB, then just let
 them keep their old quota. (Ignore /webtree - for the purpose of this question, 
 it doesn't exist. I know, I know, I'm far too nice). (13 marks)

3\. You've just installed Ubuntu Server, and found that it's default groups are 
 all screwey. When you mount /storage, you notice that member's home directories 
 are in the group "syslog". Oh noes! You rectify this by swapping the syslog 
 and member GIDs in /etc/group, but you want to make sure that none of the files 
 in the default installation belonged to syslog ('cos they'd now belong to "member"). 
 Write a script that scans the filesystem (excluding /storage), lists any files 
 now in the group "member", changes the group to syslog, and then prints a report 
 of how many files it had to modify at the end. (14 marks)

=======[ Linux (30 marks) ]=======

1 - What's the command to show the routing table in linux?
2 - What's the command to remove all files associated with a program using apt?
3 - What is /etc/nsswitch.conf used for? When would you need to edit this file?
4 - Where are changelogs stored when you upgrade a program with apt? What program 
would you use to show these before you upgrade?
5 - (a) What does /etc/mtab do?
	(b) What does the following line mean? Where is it from? Explain the options to it?
	 192.168.0.3:/fast-storage /fast-storage nfs nosuid,nodev,soft,intr,rsize=32768,wsize=32768,rw       0   0
6 - What linux system utility would you use the see the system calls a program is 
making?
7 - How would you install linux on your PC, given that you just dropped your CD drive, 
and it's making funny noises and eating your cds?
8 - What does /dev/hda1 mean? What's different between it and /dev/sdb2?
9 - What program runs Redbrick's boards?
10 - You're looking to unmount /home, but some idiot has left a file open. How do you 
find the process? How would you go about unmounting the file anyway?

=======[ Networking (30 marks) ]=======
1 - Name the three private IP ranges. What are they used for, and how do they differ 
from normal IP ranges?
2 - What is the netmask for 192.168.1.14/27? How many valid IP addresses would there 
in the network? How many of these can you use for hosts?
3 - Explain the difference between a switch, a hub, and a router? Give an example of 
where you'd use each? Why is a switch better than a hub?
4 -  What's STP? What's RSTP? Why is RSTP better than STP?
4 - what's a VLAN? What would you use one for?
5 - What's an arp cache? How would you display this on linux, and for a bonus point, 
on IOS?
6 - Explain Jitter?
7 - What's the serial number of a zone file used for?
8 - Give three commands to query DNS on a linux machine?
9 - How would you go about changing the IP of a debian machine?
10 - What's NAT? Why is it useful?
11 - Why is IPv6 cool?

=======[ General Unix/FreeBSD/Solaris/etc (30 marks) ]=======
1 - What's a Jail? What would you use one for?
2 - What is PF? What command would you use to activate it? How would you load a rule 
set from a file?
3 - How would you go about building a new kernel for source (for any non-Linux Unixy 
type OS), assuming you already had said source?
4 - You want to install Weechat from ports. Give the command to search ports for it, 
and having found it, how would you go about installing it?
5 - What are solaris containers? What command is used to show resource allocation within 
these?
6 - What command is used to change kernel options on a freeBSD system?
7 - By default, where can you login as root to a Solaris machine?
8 - What does this signify /dev/dsk/c0t1d0s6? give as much detail as possible.

=======[ Files ]======= (30 marks)
1\. State briefly what the ctime, mtime and atime of a file represent?
    How would you retrieve these?
    Give an advantage of enabling the "noatime" mount option?
2\. What is an inode?
   	Given an arbitrary inode number for a filesystem, how do you find the name of the 
		corresponding file(s)?
    How do you find the number of total and free inodes on a filesystem? 
3\. What are these filesystems used for, on your average unix box?
    /proc
    /dev 
4\. 5 different file systems plz? And a little bit of what's good about them?
5\. What does no_squash_root mean on an NFS system?
6\. Logical volume management, what it is, and name what its called in FreeBSD and Linux?

=======[ Hardware (30 marks) ]=======
1\. Give the architectures of murphy, minerva. (2 marks)
2\. Describe the advantages and disadvantages of hardware RAID. (4 marks)
3\. Describe the difference between RAID 1 and RAID 5\. (3 marks)
4\. Why is it generally a bad idea to use RAID 0 in a server/production environment? 
(1 mark)
5\. Describe RAID 1+0\. (5 marks)
6\. What's the difference between SATA and PATA? Why is one better then the other? 
(3 marks)
7\. Why is an IP KVM a really, really good thing to have? (1 mark)
8\. Describe the differences between PCI-X and PCI-Ex. (6 marks)
9\. Why does Redbrick use ALOMs and DRACs? (2 marks)
10\. You type /proc/cpuinfo on minerva, and under the flags section you see "vmx". What 
does this mean? How does this help us deliver a higher quality vector and push the 
envelope of our enterprise appliances? (3 marks)

=======[ LDAP (30 marks) ]=======
1\. What is LDAP? (3 marks)
2\. What are slapd and slurpd? (4 marks)
3\. What is nscd? Why is it a Good Thing(tm)? (4 marks)
4\. LDAP is being incredibly slow and CPU usage on our LDAP machine is going through the 
roof. Suggest a course of action. Assume that we've already tried the prodding-it-with-
a-stick approach. (4 marks)
5\. How would you search an LDAP directory for a given user? (Assume simple 
authentication) (4 marks)
6\. How would you add a user to a group using LDAP? (4 marks)
7\. What is a schema? (3 marks)
8\. What is an LDIF file? List the possible ways that you can think of to generate one. 
(4 marks)

=======[ General (30 marks) ]=======
1\. You've just recompiled weechat, because you want more shiny plugin support than you 
can get from the repository version. It was compiled on carbon, but for some reason 
minerva refuses to run it.Why? (2 marks)
2\. We're currently in the process of moving Apache to murphy. Explain why it makes far 
more sense to run it here, rather then on deathray. (3 marks)
3\. Why is it generally seen as a good idea to purchase hardware from companies like 
Encom/Sun/Dell if possible, as opposed to building stuff ourself? (Aside from the extra 
effort of building it). (2 marks)
4\. What is a nice value? How would you change a nice value? (3 marks)
5\. How would you edit a user's quota? Give all the ways you can think of. (3 marks)
6\. Explain what strace and ltrace are, and give the difference between them. (3 marks)
7\. What is chkrootkit? (1 marks)
8\. What is a crontab? How would you edit such a thing? (2 marks)
9\. What is RCS? Why do we use it? (2 marks)
10\. A program is generating segmentation faults, and you don't know why. You download 
the source and compile it with debug symbols enabled.
 	a. What is a backtrace, and why is it useful? (2 marks)
 	b. How would you use GDB to execute the program, and then output a backtrace? (4 marks)
11\. What's the difference between virtualisation and paravirtualisation? Give an example 
of each. (2 marks)
12\. Why is the air conditioner the single most important piece of hardware in the 
redbrick room? (1 mark)

=======[ Security (30 marks) ]=======
1\. Why are protocols like POP, IMAP, Telnet and FTP a bad idea in most cases? (3 marks)
2\. What is a GPG key? Why is it a Good Thing(tm) that the apt package manager uses 
them? (3 marks)
3\. Why should the author of the following code be flogged -
		#include 

		int main(int argc,char * argv[]) {
			char input[20];

			printf("Enter a 20-character string: ");
			gets(input);

			// Do something with username and password

			return 0;
		}
   (3 marks)
4\. Describe why we use suexec instead of mod_php, mod_perl, etc, like everybody else. 
(3 marks)
5\. Apache runs on port 80, which is a privileged port. You run top and find apache 
running as www-data. How did this program ever manage to bind to port 80? (3 marks)
6\. Programs like suexec and passwd use a special mechanism to temporarily gain superuser 
privileges. What is this mechanism? How would you set it? (3 marks)
7\. What can Iptables be used for? How would you list the rules currently in effect? 
(3 marks)
8\. What is chroot used for? (3 marks)
9\. What is fakeroot used for? (3 marks)
10\. How can you get a list of all processes (and their respective owners) listening on 
network ports? (3 marks)

=======[ Bonus Round (125 marks) ]=======
1\. Vim, Nano or Emacs? (10, 0, -10 marks)
2\. Describe in an article, 5000 to  6000 words in length, why Redbrick is a cult. 
(3 marks)
3\. Press F1 to continue. (3 marks)
4\. How much wood could a woodchuck chuck if a woodchuck could chuck wood? (3 marks)
5\. Which current admin do you like best? Give details on why you dislike the other one. 
(100 marks)
6\. You just said you don't like me. Why should I vote for you? (3 marks)
7\. Who did you vote for at the last AGM? (3 marks)
8\. Do you vow to proactively synergise and globalise our corporate structures by 
empowering them with client-focused tools that enterprise appliances enable, and build 
our team structure with adaptive schedule compression and knowledge base, so that our 
IT resources can envision strategically fit scenarios to really push the envelope of 
the quality vector of our organisations morale, mindset and credibility? (3 marks)
</pre>

---
title: 'Admin Test 2003 AGM'
---

All questions can be answered in the context of any version of UNIX (except for the Solaris and FreeBSD sections obviously!). Indicating which version of UNIX you refer to in your answer is preferred but not required. Negative marking applies throughout for answers that are clearly incorrect or demonstrate incompetence.

Humourous answers while appreciated gain no extra marks. Keep answers short and concise - don't waste time writing when one or two word answers will suffice.

Best of luck!

> - cns, dizer, pixies

## 0\. Scripting (30 marks)

**Rules:**

*   You must be mesg n for duration of test. Any attempt to communicate with other users will result in immediate failure.
*   You may only refer to system documentation (man & info pages) for help, i.e. no web access!
*   You are free to use any shell or scripting language to write the scripts. Only system commands may be used, your own or other user scripts may not be referred to. Basically: no cheating!
*   Make a directory ~/admin_test and place scripts in there. Name each script by its question number.

Here we go..

1.  Write a script to monitor a log file for a line of the form:

    <pre>2003-03-03 WARNING! **n** monkies are eating our **hardware item**!</pre>

    **n** will be a number (5, 10, etc), **hardware item** will be a string containing only lower case letters and spaces. The date at the start can be any date, not always the 3rd March :-)

    When this line appears, the script should send a mail to a list of people supplied as an argument, with the subject "Monkey alert! **n** consuming **hardware item**!". The script should send a mail for all such matching lines not just the first and will be run as follows:

    <pre>% ./script admins@redbrick.dcu.ie committee@redbrick.dcu.ie</pre>

    If your script fails, the death of thousands between the jaws of monkies will be on your conscience.

    <span class="mark">(10 marks)</span>
2.  Write a script to rotate all the files in a particular directory, to be run as follows:

    <pre>% ./script /directory /output</pre>

    `/directory` is the path to the directory containing all the log files and `/output` is the path to the directory where the log files are to be placed like so:

    <pre>/output/YYYY/MM/DD/file.gz</pre>

    Where YYYY, MM and DD are the current year, month and day respectively and file.gz is the gzipped version of the original log file.

    <span class="mark">(10 marks)</span>
3.  Write a script to kill off all processes between a given range of PIDs (inclusive) that have an RSS value over a given size, to be run as follows:

    <pre># ./script 100 1000 2000</pre>

    This should kill all processes with a PID between 100 and 1000 inclusive that have a RSS greater than or equal to 2000KB.

    <span class="mark">(10 marks)</span>

## 1\. Solaris (30 marks)

1.  Name the important difference between the killall command on Linux and on Solaris. <span class="mark">(1 mark)</span>
2.  Discuss how you would go about adding a new disk to a Solaris machine. <span class="mark">(3 marks)</span>
3.  Discuss the purpose and usage of the dumpadm command. <span class="mark">(2 marks)</span>
4.  On a Solaris system, why is /usr/bin/ps not setuid root? <span class="mark">(2 marks)</span>
5.  Where is the kernel stored on a Solaris machine? <span class="mark">(1 mark)</span>
6.  How would you add a package to a solaris system, and list the packages already installed? <span class="mark">(2 marks)</span>
7.  What is an ACL and how would you set one? thehand is a popular redbrick utility for blocking particular users from writing to your terminal. In the context of ACLs explain how it works. <span class="mark">(3 marks)</span>
8.  What command can provide details on CPU temperature, power supply status, memory bank status (etc)? <span class="mark">(2 marks)</span>
9.  Which Sun website contains patches, bug reports, etc? <span class="mark">(1 mark)</span>
10.  Describe what is meant by filesystem logging? <span class="mark">(2 marks)</span>
11.  When shutting a Solaris system down what is the difference between these programs:
    *   shutdown
    *   init
    *   halt<span class="mark">(2 marks)</span>
12.  For each of the following commands specify if you should use the raw disk device, or not, or if it doesn't matter.
    1.  fsck
    2.  prtvtoc
    3.  mount<span class="mark">(3 x 1 marks)</span>
13.  Linux uses the ext2 filesystem extensively, what does Solaris normally use? <span class="mark">(1 mark)</span>
14.  What does the runacct command do? <span class="mark">(2 marks)</span>
15.  What are /etc/system and /etc/default/ used for? <span class="mark">(2 marks)</span>
16.  You're standing in front of Prodigy, which has a Sun Keyboard attached to it. How can you drop to the OBP immediately? <span class="mark">(1 mark)</span>

## 2\. FreeBSD (30 marks)

1.  Identify what type of devices 'da0', 'sa0' and 'ad0' refer to. <span class="mark">(3 marks)</span>
2.  The kernel on your system is missing and there are no backup copies. You do however have a bootable CD with FreeBSD on it, how do you boot using the CD's kernel but using the root filesystem of your hard disk? <span class="mark">(2 marks)</span>
3.  What is the latest release version of FreeBSD? <span class="mark">(2 marks)</span>
4.  Briefly mention what the following commands are used for:
    1.  kldstat
    2.  disklabel
    3.  limits
    4.  vinum<span class="mark">(4 x 2 marks)</span>
5.  You want to run some custom commands when the system is shutdown, which file do you place these in? <span class="mark">(2 marks)</span>
6.  Describe how to install an application from the ports system? <span class="mark">(2 marks)</span>
7.  Descibe what a disk slice is and its advantages over normal partitioning schemes? <span class="mark">(4 marks)</span>
8.  If you wanted to pre-load modules before the kernel is loaded, what file would you edit? <span class="mark">(2 marks)</span>
9.  How would you partition and format a new disk in a machine with a FAT filesystem and mount it as /dos ? <span class="mark">(4 marks)</span>
10.  What is generally regarded as the quickest method for updating source and port trees ? <span class="mark">(1 mark)</span>

## 3\. Files & Filesystems (30 marks)

1.  We'll start with an easy one. What's the difference between /dev/rdsk/c0t0d0s0 and /dev/dsk/c0t0d0s0? (Explanation, not just a few words) <span class="mark">(3 marks)</span>
2.  You're looking at a directory listing, and you see the following items (from ls -l) <span class="mark">(7 marks)</span>:

    <pre>1: drwx------+  3 pixies   committe     512 Feb  4  2002 cia
    2: -rw-------   1 pixies   committe    9319 Jul 11  2001 cv.pdf
    3: prw-------   1 root     root           0 Mar 27 15:55 queue</pre>

    1.  What file type are 1 and 2? <span class="mark">(1 mark)</span>
    2.  What does the '+' in item 1 mean? How could you find out more about this? <span class="mark">(2 marks)</span>
    3.  Why does pixies have a file owned by root in his directory? (any plausible explanation) <span class="mark">(1 mark)</span>
    4.  What file type is item 3? How could one make such a file? What could it be used for? <span class="mark">(3 marks)</span>
3.  You've obtained the following output from a system command:

    <pre>/ on /dev/md/dsk/d0 read/write/setuid/intr/largefiles/logging/onerror=panic/dev=1540000 on Wed Dec 11 11:23:11 2002
    /proc on /proc read/write/setuid/dev=3940000 on Wed Dec 11 11:23:04 2002
    /dev/fd on fd read/write/setuid/dev=3a00000 on Wed Dec 11 11:23:16 2002
    /etc/mnttab on mnttab read/write/setuid/dev=3b00000 on Wed Dec 11 11:23:21 2002
    /var on /dev/md/dsk/d3 read/write/setuid/intr/largefiles/logging/onerror=panic/dev=1540003 on Wed Dec 11 11:23:43 2002
    /var/run on swap read/write/nosuid/size=8M/dev=1 on Wed Dec 11 11:23:43 2002
    /tmp on swap read/write/nosuid/size=256m/dev=2 on Wed Dec 11 11:24:12 2002
    /local on /dev/md/dsk/d2 read/write/setuid/intr/largefiles/logging/onerror=panic/dev=1540002 on Wed Dec 11 11:24:12 2002
    /home on /dev/md/dsk/d4 read/write/nosuid/intr/largefiles/logging/quota/onerror=panic/dev=1540004 on Wed Dec 11 11:24:12 2002
    /snapshot/home on /dev/fssnap/0 read only/nosuid/intr/largefiles/logging/onerror=panic/dev=f00000 on Sun Mar 23 03:07:17 2003</pre>

    1.  What command gives you this information? Also accepted is the file containing it. <span class="mark">(1 mark)</span>
    2.  What do the following represent:
        1.  nosuid?
        2.  quota?
        3.  The first item in the output? (e.g. /, /tmp)?
        4.  The second item? (e.g. /dev/md/dsk/d0, /proc)?<span class="mark">(4 x 1 marks)</span>
    3.  What does the 'md' in lines such as '/dev/md/dsk/d0' mean? Name one command related to it. <span class="mark">(2 marks)</span>
    4.  How would I prevent people executing files located in /home? <span class="mark">(1 mark)</span>
    5.  Due to a disk problem, / has been mounted readonly. I need to change root's password so I can log in, as I don't know the machine. What should I do? <span class="mark">(2 marks)</span>
4.  What tool can I use to check a filesystem for errors? <span class="mark">(1 mark)</span>
5.  You have a corrupt superblock on an old disk. You know it was formatted using default values. How can you determine the locations of backup superblocks, with access to the tools used to format it? <span class="mark">(2 marks)</span>
6.  What are these filesystems usually used for?
    1.  /proc
    2.  /dev<span class="mark">(2 x 1 marks)</span>
7.  You have just added a new drive to a system running your favourite UNIX-a-like OS. It shows up in your /dev directory. Describe the steps required to set it up for use as your /mp3s directory. <span class="mark">(5 marks)</span>.

## 4\. Hardware (30 marks)

1.  Briefly describe RAID. <span class="mark">(2 marks)</span>
2.  Describe 3 advantages of RAID. <span class="mark">(3x2 marks)</span>
3.  What are the three most common RAID levels. <span class="mark">(2 marks)</span>
4.  Redbrick buys a new server for production use, what RAID level would you use for the boot device? Why? <span class="mark">(3 marks)</span>
5.  What's the difference between RAID 1+0 and RAID 0+1? <span class="mark">(1 mark)</span>
6.  Name 3 advantages of SCSI over IDE. <span class="mark">(3x2 marks)</span>
7.  You attach a new SCSI disk to a machine, but it doesn't work. Name two things to check. <span class="mark">(2x2 marks)</span>
8.  Someone has donated a SparcStation, you have no Sun monitor or 13w3 convertor. Describe a means through which you could log into the machine? <span class="mark">(2 marks)</span>
9.  A machine has two hard-disks on the first IDE channel. Name two ways of changing which is the master and which is the slave. <span class="mark">(2x2 marks)</span>

## 5\. Networking (30 marks)

1.  You want to scan the Redbrick network for unauthorised connections. Name a tool you would use to do this. <span class="mark">(2 marks)</span>
2.  What does SOA stand for? <span class="mark">(1 marks)</span>
3.  Name a way to list all open TCP connections on a machine. <span class="mark">(1 mark)</span>
4.  How would you retrieve the mail servers for the redbrick.dcu.ie domain? <span class="mark">(2 marks)</span>
5.  Name two differences between a switch and a hub. <span class="mark">(2 x 2 marks)</span>
6.  There are two network cards in one machine, but one starts malfunctioning. How would you go about manually configuring the second to take the place of the first. You are at the console of the machine. <span class="mark">(2 marks)</span>
7.  Explain the concept of NAT? <span class="mark">(3 marks)</span>
8.  Name a disadvantage of NAT. <span class="mark">(1 marks)</span>
9.  You connect a machine with one NIC to the RedBrick subnet (136.206.15.0/24) where the gateway is 136.206.15.254\. Output from ifconfig:

    <pre>eth0 Link encap:Ethernet  HWaddr 00:00:3B:E2:C9:DF
    inet addr:136.206.15.90  Bcast:136.206.15.254  Mask:255.255.0.0
    UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
    RX packets:13 errors:0 dropped:0 overruns:0 frame:0
    TX packets:10 errors:0 dropped:0 overruns:0 carrier:0
    collisions:0 txqueuelen:100
    Interrupt:11</pre>

    And the routing details are:

    <pre>Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
    136.206.18.0    0.0.0.0         255.255.255.0   U        40 0          0 eth0</pre>

    Identify the errors in the output and suggest a means of rectifing each one.

    <span class="mark">(9 marks)</span>
10.  Ftp on Prodigy was recently removed from inetd and made standalone. Explain what is meant by inetd and standalone and possible reasons for this change. <span class="mark">(3 marks)</span>
11.  You start a daemon from the command line, but it complains "Cannot bind to port". Suggest two possible causes for this. <span class="mark">(2 marks)</span>

## 6\. Security (30 marks)

Note: This section has quite a high answer to marks ratio. It's acceptable to resort to bullet points, if you feel they answer the question sufficiently. Not all questions are purely technical.

1.  An oldie, but a goodie: why is telnet considered insecure, if we assume that the telnet server and client are written without any security holes? Some detail required. <span class="mark">(2 marks)</span>
2.  You have 5 seconds at an unattended root shell (and can type at a rate of at least 8 characters a second). Using only the /tmp directory and basic commands, describe how you could give yourself a back door on the system. You have an unprivileged shell account already. <span class="mark">(2 marks)</span>.
3.  Describe, in general terms, the function of a one-way/hash/signature function such as MD5 or SHA1\. Explain how this can be used by tools such as Tripwire to ensure your files are safe. <span class="mark">(2 marks)</span>
4.  A guy comes up to you in the labs looking frantic. "Jaysus!" (he says) "I've just lost me redbrick password, and me project is in it! I'm cleverguy@redbrick, could you reset it to 'pleasegodidontwannafail'?" What do you do? <span class="mark">(2 marks)</span>
5.  What is a firewall? Describe roughly how it works, making reference to TCP/IP, port numbers and protocol numbers, and why this is beneficial. <span class="mark">(3 marks)</span>
6.  Discuss, very briefly: "UNIX is immune to viruses and worms". <span class="mark">(2 marks)</span>
7.  What is wrong with the traditional UNIX security model regarding users and files? i.e. how is it flawed. <span class="mark">(2 marks)</span>
8.  RBAC is "Role Based Access Control" for Solaris. What does this mean? <span class="mark">(2 marks)</span>
9.  Somebody asks you "Hey, 136.206.15.171 is a RedBrick IP, what's that machine do?". Your head explodes in panic, as that IP isn't in use by RedBrick. After your head unexplodes, how do you proceed? Assume you can track down the owner of the machine. <span class="mark">(3 marks)</span>

## 7\. General (30 marks)

1.  You have a program that requires "libfoo" and is dynamically linked against it. However, there are two different versions of libfoo, one in /usr/local/lib and one in /usr/local/foo/lib. How do you:
    1.  Find out which library the program would normally use when run from your shell? <span class="mark">(2 marks)</span>
    2.  Force the program to use the library verison in /usr/local/foo/lib when run from the shell? <span class="mark">(2 marks)</span>
2.  What is the mechanism that a process (e.g. a shell) would use to allow the suspension and resumation of other processes? <span class="mark">(2 marks)</span>
3.  Give 1 advantage of using dump and 1 advantage of using tar for making backups. <span class="mark">(2 marks)</span>
4.  You have downloaded a compressed tarball, but don't know what program was used to compress it. Give 2 methods for determining this. <span class="mark">(2 marks)</span>
5.  1.  Name the 2 different ways in which at jobs are typically automatically launched by the system? <span class="mark">(2 marks)</span>
    2.  Name the command and describe its use on how to remove jobs from the 'at' scheduler queue? <span class="mark">(2 marks)</span>
6.  1.  What is a Mail Transfer Agent and name the one used on prodigy. <span class="mark">(2 marks)</span>
    2.  What is a Mail Delivery Agent and name the one used on prodigy. <span class="mark">(2 marks)</span>
7.  What is the mt command used for? Give an example of its use. <span class="mark">(3 marks)</span>
8.  The tape device 'st0' has three forms: st0, rst0 and nrst0, what is the difference between these? (note that his applies to many UNIXes despite different names for actual tape device) <span class="mark">(3 marks)</span>
9.  You accidentally cat a binary file and it corrupts your terminal. Name 2 commands you would try to fix this? <span class="mark">(4 marks)</span>
10.  Where are C system header files usually located ? <span class="mark">(2 marks)</span>

## 8\. Bonus Round! *ding ding*

1.  Do you prefer Vi or Emacs? <span class="mark">(Vi = 0 marks, Emacs = -10 marks)</span>
2.  What does this do?

```
    <pre>@P=split//,".URRUU\c8R";@d=split//,"\nrekcah xinU / lreP rehtona tsuJ";sub p{
    @p{"r$p","u$p"}=(P,P);pipe"r$p","u$p";++$p;($q*=2)+=$f=!fork;map{$P=$P[$f^ord
    ($p{$_})&6];$p{$_}=/ ^$P/ix?$P:close$_}keys%p}p;p;p;p;p;map{$p{$_}=~/^[P.]/&&
    close$_}%p;wait until$?;map{/^r/&&<$_>}%p;$_=$d[$q];sleep rand(2)if/\S/;print</pre>
```

3.  Rate these operating systems in order of preference:
    *   Solaris
4.  You're stressed out with project work, your latest program doesn't work, you've just spent an hour and a half running around DCU trying to get a working printer, you have to write an admin test and someone heys you and asks you for a Tomcat account. What do you do?
5.  Write this in hex.

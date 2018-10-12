---
title: 'Admin Test 2002 AGM'
---

All questions can be answered in the context of any version of UNIX (except for the Solaris and FreeBSD sections obviously!). Indicating which version of UNIX you refer to in your answer is preferred but not required. Negative marking applies throughout for answers that are clearly incorrect or demonstrate incompetence.

Humourous answers while appreciated gain no extra marks. Keep answers short and concise - don't waste time writing when one or two word answers will suffice.

Best of luck!

> - cns, phil, mark

## 0\. Scripting (32 marks)

**Rules:**

*   You must be mesg n for duration of test. Any attempt to communicate with other users will result in immediate failure.
*   You may only refer to system documentation (man & info pages) for help, i.e. no web access!
*   You are free to use any shell or scripting language to write the scripts. Only system commands may be used, your own or other user scripts may not be referred to. Basically: no cheating!
*   Make a directory ~/admin_test and place scripts in there. Name each script by its question number.

Here we go..

1.  Write a script which renames files based on a simple substitute pattern. The script will take the following arguments:

    `% ./script pattern1 pattern2 filename [filename ... ]`

    All occurrences of 'pattern1' found in each filename are replaced by 'pattern2'. e.g:

    `% ./script HTM html foo* *.HTM`

    This would rename "HTMSTUFF.HTM" to "htmlSTUFF.html" but leave "foo_blah.html" as is.

    <span class="mark">(8 marks)</span>
2.  You've found users regularly leaving processes running in the background after they've logged out. Write a script which takes a list of usernames as its arguments and kills off all such processes belonging to each user. It should print out each process ID that is killed. Note that running this script must not kill processes belonging to a user's current session(s) if logged in! e.g:

    <pre># ./script luser1 hackd00d luser2
    709
    712
    10045
    10080</pre>

    <span class="mark">(8 marks)</span>
3.  You're looking around a source tree and wish to find the top 3 directories in the distribution which contain the most number of files. Write a script which is run from the current working directory (in this example the top level of the distribution) which lists the name of each directory along with the number of files in it in descending order. e.g:

    <pre>% ./script
    7000 drivers
    5000 kernel
    900 misc</pre>

    <span class="mark">(8 marks)</span>
4.  Write a script that conditionally deletes (i.e. asks for confirmation) all files which either begin with the word "core" or are owned by an unknown user or group in /home. <span class="mark">(8 marks)</span>

## 1\. Solaris (29 marks)

1.  "`/dev/dsk/c0t1d0s2`" is mounted on "`/var`" - explain what each part of the disk device "`c0t1d0s2`" means. <span class="mark">(3 marks)</span>
2.  1.  You are logged in as root at the console and wish to reboot the system in 5 minutes time. State the most appropriate command to do this. <span class="mark">(2 marks)</span>
    2.  After the reboot, you wish to interrupt the automatic boot and boot to single user mode. How would you do this? <span class="mark">(2 marks)</span>
3.  How would you add a startup script to a Solaris system? <span class="mark">(2 marks)</span>
4.  How would you add a Solaris package you have obtained to the system? <span class="mark">(2 marks)</span>
5.  What is the procedure for adding a Solaris patch you have obtained to the system? <span class="mark">(2 marks)</span>
6.  1.  Which Sun website contains extensive documentaton for Solaris?
    2.  Which Sun website contains patches, bug reports, etc.?<span class="mark">(2 x 1 marks)</span>
7.  Describe **briefly**what each of the following files are for:
    1.  `/etc/system`
    2.  `/etc/dumpadm.conf`<span class="mark">(2 x 1 marks)</span>
8.  After a crash, fsck is run on each filesystem. This can sometimes take a very long time. How can this time be reduced for future crashes? <span class="mark">(2 marks)</span>
9.  Where are the BSD commands in Solaris? <span class="mark">(2 marks)</span>
10.  How does the `killall` command on Solaris differ from the command on Linux systems? <span class="mark">(2 marks)</span>
11.  Should `/usr` be part of `/` or a seperate filesystem on a Solaris system? Why? <span class="mark">(2 marks)</span>
12.  What is `nscd` and what does it do? <span class="mark">(2 marks)</span>
13.  What is `/etc/nsswitch.conf` for? <span class="mark">(2 marks)</span>

## 2\. FreeBSD (27 marks)

1.  "`/dev/da2s1e`" is mounted on "`/var`" - explain what each part of the disk device "`da2s1e`" means. <span class="mark">(3 marks)</span>
2.  You are about to boot the system but you want to disable a certain device driver in the kernel first. How do you do this (without compiling a new kernel or physically removing the device!)? <span class="mark">(2 marks)</span>
3.  Explain **briefly**what the following FreeBSD boot options are for:
    1.  -s
    2.  -a<span class="mark">(2 x 1 marks)</span>
4.  Explain **briefly**what the following FreeBSD commands are used for:
    1.  vnconfig
    2.  vinum
    3.  camcontrol
    4.  sysctl<span class="mark">(4 x 1 marks)</span>
5.  What version of FreeBSD is currently on Enigma? <span class="mark">(2 marks)</span>
6.  How do you enable soft updates on a filesystem? <span class="mark">(2 marks)</span>
7.  What are the benefits of using soft updates? <span class="mark">(2 marks)</span>
8.  How do you install an application from the "ports" collection? <span class="mark">(2 marks)</span>
9.  How would you add a FreeBSD package you have obtained to the system? <span class="mark">(2 marks)</span>
10.  How would you update a FreeBSD system without a CD (just the system, not including packages)? Describe the steps. <span class="mark">(6 marks)</span>

## 3\. Files & Filesystems (23 marks)

1.  What is the effect of setting the sticky bit on a directory? <span class="mark">(2 marks)</span>
2.  What is the effect of setting the setgid bit on a directory? <span class="mark">(2 marks)</span>
3.  Below is the output from the command "`ls -li /usr/bin/passwd`":

    <pre>519949 -r-sr-xr-x   2 root     wheel       14808 Nov 17  2000 /usr/bin/passwd</pre>

    State **briefly** what each part represents (one or two word description will suffice). <span class="mark">(5 marks)</span>
4.  1.  State **briefly** what the ctime, mtime and atime of a file represent? <span class="mark">(3 marks)</span>
    2.  How would you retrieve these? <span class="mark">(1 mark)</span>
    3.  Give an advantage of enabling the "`noatime`" mount option? <span class="mark">(1 mark)</span>
5.  1.  What is an inode?
    2.  Given an arbitrary inode number for a filesystem, how do you find the name of the corresponding file(s)?
    3.  How do you find the number of total and free inodes on a filesystem?<span class="mark">(3 x 1 marks)</span>
6.  You login to the system and find `/var` is completely full. However when you su to root, you find you can still create files in `/var` even though it is full. Explain why, state which parameter affects this and how you would change it? <span class="mark">(3 marks)</span>
7.  You try to unmount a filesystem but recieve the error "umount: /cdrom: Device busy".
    1.  What does this mean?
    2.  How would you solve the problem?
    3.  Despite your best attempts, you still recieve the same error. What's your last resort?<span class="mark">(3 x 1 marks)</span>

## 4\. Hardware (17 marks)

1.  Give 3 advantages of SCSI over IDE. <span class="mark">(3 marks)</span>
2.  1.  Describe **briefly** what RAID is? <span class="mark">(2 marks)</span>
    2.  Give an advantage of software RAID and an advantage of hardware RAID. <span class="mark">(2 marks)</span>
    3.  State and **briefly** describe the 3 most common RAID levels. <span class="mark">(3 marks)</span>
    4.  Which is better, RAID 1+0 or RAID 0+1 and why? <span class="mark">(3 marks)</span>
3.  You've just put together a new SCSI setup, but it's not working. Name 2 things to check. <span class="mark">(2 marks)</span>
4.  You've just put together a new RAID 5 array and it works fine. Name 2 things you should test/do before putting it into production use. <span class="mark">(2 marks)</span>

## 5\. Networking (22 marks)

1.  You notice an unknown daemon is listening on TCP port 31337\. How would you go about finding both the owner of this daemon and the exact path to the program? <span class="mark">(4 marks)</span>
2.  How would you distribute web traffic for a site between more than one web server using only DNS? What is this commonly called? <span class="mark">(2 marks)</span>
3.  How would you retrieve the SOA record for the zone "redbrick.dcu.ie" from the DNS server running on 136.206.1.1? <span class="mark">(2 marks)</span>
4.  How would you probe a remote host to enquire what services it is running? <span class="mark">(2 marks)</span>
5.  Given the hypothetical subnet 136.206.16.128 and netmask 255.255.255.128, state the valid range of IP addresses that could be assigned to hosts on the subnet. <span class="mark">(2 marks)</span>
6.  Give 2 advantages of a switch over a hub. <span class="mark">(2 marks)</span>
7.  How would you test if the mail server "`relay.eu.ney`" will relay mail for the "`redbrick.dcu.ie`" domain? <span class="mark">(4 marks)</span>
8.  Explain **briefly** what NAT (or IP Masquerading) is and how it's useful? <span class="mark">(2 marks)</span>
9.  Name three useful tools available on all UNIX systems for diagnosing network problems. <span class="mark">(2 marks)</span>

## 6\. Security (30 marks)

1.  Give a path name that is very insecure to have in the PATH environment variable? <span class="mark">(2 marks)</span>
2.  What is scp? Give an example of its use. <span class="mark">(2 marks)</span>
3.  Describe **briefly** how identd works. <span class="mark">(2 marks)</span>
4.  Give the reason why sshd TCP forwarding is currently disabled on Redbrick. <span class="mark">(2 marks)</span>
5.  You're on a remote system without ssh and have to login to Redbrick using telnet. Why is this bad? What should be the first thing you do as soon as you login to Redbrick securely (i.e. with ssh) again? <span class="mark">(2 marks)</span>
6.  You've lost the root password to a system. Sitting in front of the console you reboot the machine to single user mode, but this also asks for the root password. There are no floppy or CDROM drives in the machine. How do you reset the password? <span class="mark">(2 marks)</span>
7.  You are performing an audit of setuid and setgid binaries on Prodigy. State whether the following should be left as is or stripped of set[ug]id bits and give a reason:
    1.  `-r-sr-xr-x root bin /usr/bin/login`
    2.  `-r-s--x--x root lp /usr/bin/lp`
    3.  `-r-sr-xr-x root bin /usr/bin/traceroute`
    4.  `-r-sr-xr-x root sys /usr/bin/sparcv9/ps`<span class="mark">(4 x 2 marks)</span>
8.  Two methods we use to secure BIND are that of using a chroot environment and high-UIDs. Explain what a chroot environment is and the purpose of using high-UIDs. <span class="mark">(2 x 2 marks)</span>
9.  What are the Real UID, Effective UID and Saved UID of a process? What are these set to for a setuid program? <span class="mark">(6 marks)</span>

## 7\. General (20 marks)

1.  1.  How would you find what signal a given signal number corresponds to?
    2.  What are the SIGINT and SIGHUP signals used for?<span class="mark">(2 x 2 marks)</span>
2.  Explain **briefly** what the term Parent Process ID means. <span class="mark">(2 marks)</span>
3.  1.  How would you turn on system accounting?
    2.  Name 2 commands to retrieve accounting information.
    3.  Give 1 advantage and 1 disadvantage to its use.<span class="mark">(3 x 2 marks)</span>
4.  Give 1 advantage of using dump and 1 advantage of using tar for making backups. <span class="mark">(2 marks)</span>
5.  What is the "`mt`" command used for? <span class="mark">(2 marks)</span>
6.  How would you unpack the file "`prog.tar.gz`" with a version of tar that doesn't support the 'z' flag? <span class="mark">(2 marks)</span>
7.  What is the "`domainname`" command used for? <span class="mark">(2 marks)</span>

## 8\. Bonus Round! *ding ding*

1.  What key combination enables the FreeBSD console screen saver?
2.  vi or emacs?
3.  Do you aspire to be a BOFH?
4.  What is your preferred procedure for disuserment?
5.  `|` u 4 l33+ h4X0|` d00d`?
6.  Are you willing to dedicate so much time to Redbrick that you flunk college?

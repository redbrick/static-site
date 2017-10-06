---
title: 'Admin Test 2005 EGM'
---

All questions can be answered in the context of any version of UNIX (except for the Solaris, FreeBSD and Linux sections obviously!). Indicating which version of UNIX you refer to in your answer is preferred but not required. Negative marking applies throughout for answers that are clearly incorrect or demonstrate incompetence.

Humourous answers while appreciated gain no extra marks. **Keep answers short and concise** - don't waste time writing when one or two word answers will suffice.

**ALL SECTIONS ARE *NOT* EQUALLY WEIGHTED**

The test is marked out of 300.

Best of luck!

> - phaxx, mickeyd, dizer

## 0\. Scripting (40 marks)

**Rules:**

*   You must be mesg n for duration of test. Any attempt to communicate with other users will result in immediate failure.
*   You may only refer to system documentation (man & info pages) for help, i.e. no web access!
*   You are free to use any shell or scripting language to write the scripts. Only system commands may be used, your own or other user scripts may not be referred to. Basically: no cheating!
*   Make a directory ~/admintest and place scripts in there. Name each script by its question number. Humorous error messages make your scripts run faster.

**Whilst we hope your scripts run correctly, the emphasis is on the procedure rather than a perfectly working implementation.**

Here we go..

1.  One of the admins made a silly mistake in the exim config. For a few hours, new mail was delivered to ~/MaildirX rather than ~/Maildir. A couple of hundred users have been affected. No mail has been lost, but it's sitting in the wrong directory.

    Write a quick script to move everybody's mail in MaildirX into their normal Maildir.

    An example usage is:

    <pre># ./fixmail</pre>

    <span class="mark">(16 marks)</span>
2.  For some reason, a bunch of users don't have a quota.

    Write a script to set the default quota for users with none set.

    An example usage is:

    <pre># ./fixzeroquotas</pre>

    <span class="mark">(17 marks)</span>
3.  Plenty of users have world-writable files in their webspace.

    Write a script to produce a list of group and world writable files in /webtree, sorted by username.

    Example usage:

    <pre># ./checkwritable
    auser:
    /webtree/a/auser/something
    buser:
    /webtree/b/buser/stuff
    /webtree/b/buser/things
    bzuser:
    /webtree/b/bzuser/meh
    /webtree/b/bzuser/fmeh</pre>

    <span class="mark">(17 marks)</span>

## 1\. Solaris (30 marks)

1.  Solaris patches. Where can you find the latest? <span class="mark">(3 marks)</span>
2.  Explain the difference between using a patch cluster and using a utility such as PatchPro to manage the patches on your system. <span class="mark">(3 marks)</span>
3.  What is 'logging', with regard to a Solaris filesystem? <span class="mark">(3 marks)</span>
4.  What filesystem does Solaris use? How compatible is this filesystem with Linux? <span class="mark">(3 marks)</span>
5.  There's one very important difference between Solaris 'tar' and GNU 'tar'. What is it? <span class="mark">(3 marks)</span>
6.  What is the OBP? How can you get to it? <span class="mark">(4 marks)</span>
7.  Explain each component of /dev/dsk/c1t2d1s2\. What if the 'dsk' was changed to 'rdsk', what difference would that make? What's special about 's2', relative to any other value of 's'? <span class="mark">(3 marks)</span>
8.  You have a Sun system with a spare drive bay. You have a suitable drive in your hand. You'd like to mount this new disk as /not_porn. List the steps you would take. <span class="mark">(6 marks)</span>
9.  Solaris 10 offers many new features. Name two. <span class="mark">(2 marks)</span>

## 2\. FreeBSD (30 marks)

1.  On Linux, one changes kernel options such as enabling ipv4 fowarding by:

    <pre>echo 1 > /proc/sys/net/ipv4/ip_forward</pre>

    Roughly, whats the *BSD equivalent? <span class="mark">(3 marks)</span>
2.  What file is usually responsible for starting a service like sshd on boot? <span class="mark">(2 marks)</span>
3.  The kernel sources are installed. List the steps in building a new kernel. <span class="mark">(4 marks)</span>
4.  What file lists *every* kernel config option? <span class="mark">(3 marks)</span>
5.  How would I install vim from the ports? <span class="mark">(3 marks)</span>
6.  What if I want to install vim from ports on a system WITHOUT X11? <span class="mark">(3 marks)</span>
7.  What is the preferred method of keeping a FreeBSD system up to date reguarly? <span class="mark">(3 marks)</span>
8.  What is vinum? How would you make it give you an overview of it's config and status right now? <span class="mark">(3 marks)</span>
9.  What is FreeBSD's packet filter, and where is it's config file? <span class="mark">(2 marks)</span>
10.  What is the kernel compile option to enable it? <span class="mark">(2 marks)</span>
11.  How about logging for it? <span class="mark">(2 marks)</span>

## 3\. Linux (30 marks)

1.  You just installed a package via apt, but you're not sure what the executable is called.

    What command could you use to list all the files associated with that package?

    <span class="mark">(3 marks)</span>
2.  What file is the following taken from?

    <pre>	*               soft    core            0
    	*               hard    core            81920
    	*               hard    data            51200
    	*               hard    fsize           153600
    	*               hard    memlock         275000
    	*               hard    nofile          300
    	*               hard    rss             51200
    	*               hard    stack           40960
    	*               hard    cpu             300
    	*               hard    as              275000
    	*               hard    nproc           75
    	*               -       maxlogins       10
    	</pre>

    <span class="mark">(3 marks)</span>
3.  On a system with apt, you'd like to know what package installed a particular file. What command AND option do you use to find this? <span class="mark">(3 marks)</span>
4.  What utility do you use to check an ext2/3 filesystem for problems? <span class="mark">(1 marks)</span>
5.  How can you find the temperature of your CPU(s) on a Linux system? <span class="mark">(1 marks)</span>
6.  How do you list the routing table? What option do you use to make sure it doesn't attempt to resolve IPs to hostnames? (slow) <span class="mark">(4 marks)</span>
7.  What Linux utility can you use to see what system calls a program is making? <span class="mark">(2 marks)</span>
8.  With regard to a network interface in Linux, what is an alias? How would you set one up? <span class="mark">(4 marks)</span>
9.  How do you list all processes who have files open under a particular directory? <span class="mark">(3 marks)</span>
10.  You'd like to not only remove a package with apt, but erase everything associated with it. What apt command do you use? <span class="mark">(3 marks)</span>
11.  What device is represented by /dev/sdb2 ? <span class="mark">(3 marks)</span>

## 4\. LDAP (20 marks)

1.  What does LDAP stand for, and what is it used for on RedBrick? <span class="mark">(4)</span>
2.  How would you search an LDAP database for an entry whose uid field is 'mickeyd'? <span class="mark">(4 marks)</span>
3.  What is an LDIF file? How would you generate one? What command does the opposite of that? <span class="mark">(4 marks)</span>
4.  When you run the command 'ps -fu mickeyd' you get the error: 'No such user: mickeyd'. Assuming the LDAP daemons are running, how would you fix this? (Specific commands/steps not required) <span class="mark">(4 marks)</span>
5.  What LDAP implementation does RedBrick use? Name another LDAP implementation from another vendor. <span class="mark">(4 marks)</span>

## 5\. Files & Filesystems (30 marks)

1.  List four filesystems, and a pro and con of each. <span class="mark">(8 marks)</span>
2.  How would you delete a file named "-boobie-"? <span class="mark">(2 marks)</span>
3.  How about "boobie!"? <span class="mark">(2 marks)</span>
4.  <pre>-rwsr-x---    1 root     root        23112 Nov  2 19:56 /bin/su
       ^   ^^^</pre>

    Explain why the pointed-to sections are that way. <span class="mark">(2 marks)</span>
5.  What does the 'sync' command do on Linux/BSD? When might one use it? <span class="mark">(4 marks)</span>
6.  Explain all the options in bold on the following line:

    <pre>/dev/sda6 on /var/tmp type ext3 (**rw,nosuid,nodev,errors=remount-ro**)</pre>

    <span class="mark">(4marks)</span>
7.  What is an inode? Why should a user only be allowed to use a certain amount of them? <span class="mark">(2 marks)</span>
8.  Why would one choose to have a filesystem with 1k inode blocks? What about larger (like 4k) inode blocks? <span class="mark">(2 marks)</span>
9.  1.  What is an ACL?
    2.  How would you see any are attached to a particular file?
    3.  How would you set one?
    4.  Name a filesystem in use by RedBrick that supports them.<span class="mark">(4 marks)</span>

## 6\. Hardware (30 marks)

1.  What is:
    1.  RAID?
    2.  RAID 0?
    3.  RAID 1?
    4.  RAID 5?<span class="mark">(4x1 marks)</span>
2.  Whats SPARC and PPC? Who makes systems using SPARC, and who makes PPC systems? <span class="mark">(3 marks)</span>
3.  What is a SCSI terminator? <span class="mark">(4 marks)</span>
4.  Which of RAID 0 or RAID 1 is suitable for: (Give one reason why)
    1.  Backups
    2.  /home<span class="mark">(4 marks)</span>
5.  Which is more reliable, RAID 1+0 or 0+1? Why? <span class="mark">(5 marks)</span>
6.  What is SCA? <span class="mark">(2 marks)</span>
7.  If you were to put three 18gb disks in RAID 5, roughly how much usable disk space would you expect? <span class="mark">(4 marks)</span>
8.  What are the advantages of using hardware RAID over software RAID? <span class="mark">(4 marks)</span>

## 7\. Networking (30 marks)

1.  192.168.0.0/16 is a private IP range. Explain what is meant by a private IP range and list TWO others. <span class="mark">(4 marks)</span>
2.  Convert the netmask 255.255.255.0 into a netmask in CIDR notation. <span class="mark">(2 marks)</span>
3.  What is a privileged port? Name one service that usually uses one, and what port it usually runs on. <span class="mark">(3 marks)</span>
4.  IPv6, eh? Whats it good for? <span class="mark">(1 marks)</span>
5.  Hubs are bad. Why? (TWO reasons) <span class="mark">(4 marks)</span>
6.  Why does RedBrick have both an external and internal network? What types of traffic would you expect to pass over our internal network? <span class="mark">(1 marks)</span>
7.  You want to keep a log of all outgoing IRC connections from a particular machine. Name two ways of doing this. <span class="mark">(4 marks)</span>
8.  Explain briefly each of the following:
    1.  TTL
    2.  CNAME
    3.  OOB
    4.  PEBKAC
    5.  ARP<span class="mark">(8 marks)</span>
9.  <pre>tcp        0      1 carbon.redbrick.d:56337 208.53.160.79:ircd      SYN_SENT</pre>

    What program generated the line above? What does 'SYN_SENT' mean?

    <span class="mark">(3 marks)</span>

## 8\. Security (30 marks)

1.  What is a root kit, and what use would it be? <span class="mark">(3 marks)</span>
2.  A common type of root kit is in the form of an LKM. What does LKM stand for? <span class="mark">(1 marks)</span>
3.  Name a utility that can be used to scan for root kits. <span class="mark">(1 marks)</span>
4.  You've noticed a bunch of websites are defaced. What do you do?! <span class="mark">(4 marks)</span>
5.  As part of your term as an admin, it's likely the admin team will have to audit a small piece of code, probably something RedBrick-specific written by an admin.

    With that in mind, examine the following snippet of C code, and explain why it sucks, from a security point of view. Why would it be worse for it to be setuid-root?

    <pre>	char buf[10];
    	strcpy(buf, argv[1]);</pre>

    <span class="mark">(4 marks)</span>
6.  What is a checksum-based IDS? Can you name one? <span class="mark">(2 marks)</span>
7.  Name a security mailing list you should be subscribed to. <span class="mark">(2 marks)</span>
8.  Name two places user login activity is logged to. <span class="mark">(2 marks)</span>
9.  Why is the RedBrick webserver set up to run CGI scripts under SUEXEC? <span class="mark">(4 marks)</span>
10.  How can you get a list of all processes (and their owner) listening on network ports? <span class="mark">(4 marks)</span>
11.  Why shouldn't you ever run any of shadow's utilities? (for example) <span class="mark">(3 marks)</span>

## 9\. General (30 marks)

1.  Describe the steps you'd take if you wanted to mount deathray's /not_porn onto carbon via NFS. Both server and client steps are required. <span class="mark">(5 marks)</span>
2.  Apart from changing somebody's shell to disusered and writing an appropriate message, what else might you have to do when disusering somebody? <span class="mark">(4 marks)</span>
3.  How can you ensure a backgrounded process continues running after you logout? (not 'screen'!) <span class="mark">(4 marks)</span>
4.  Explain:
    1.  SIGHUP
    2.  xargs
    3.  Accounting<span class="mark">(6 marks)</span>
5.  How would you view/grep/etc a gzipped log file without actually decompressing it to disk? <span class="mark">(3 marks)</span>
6.  Why is a networked name service system *essiental* when you're distributing filesystems over NFS? <span class="mark">(4 marks)</span>
7.  Latest version of:
    1.  Linux 2.4
    2.  Linux 2.6
    3.  FreeBSD<span class="mark">(3 marks)</span>
8.  If you turn the airconditioning off for any reason, what do you do afterwards? <span class="mark">(1 marks)</span>

## 10\. Bonus Round! *ding ding*

<span class="mark">(0 marks)</span>

1.  Think of a use RedBrick might have for a 15" CRT monitor, where the VGA connector is missing the 'red' pin, creating an image with no red component.
2.  Which of these operating systems do you prefer?
    *   Linux (0 marks)
    *   Solaris (-1000000000 marks)(Take that, Duffy)
3.  BOFH?
    1.  [   ] Yes.
    2.  [   ] No.
    3.  [   ] I put some C4 in your powersupply.
4.  Things break horribly at 4am. Deathray crashes, carbon is slowly grinding to a halt. You're warm and cosy, you're ten minutes from DCU, and it's fucking howling outside. What do you do?
5.  <pre>/dev/sda7             178G  163G  15G  92% /home</pre>

    Who?
6.  Complete the sentence, but say something nice: IRC is a load of b_______
7.  Which of these manufacturers provides the shittiest case to work inside?
    1.  Compaq
    2.  Packard Bell

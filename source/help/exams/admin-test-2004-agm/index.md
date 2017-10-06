---
title: 'Admin Test 2004 AGM'
---

All questions can be answered in the context of any version of UNIX (except for the Solaris, FreeBSD and Linux sections obviously!). Indicating which version of UNIX you refer to in your answer is preferred but not required. Negative marking applies throughout for answers that are clearly incorrect or demonstrate incompetence.

Humourous answers while appreciated gain no extra marks. **Keep answers short and concise** - don't waste time writing when one or two word answers will suffice.

**ALL SECTIONS ARE *NOT* EQUALLY WEIGHTED**

The test is marked out of 300.

Best of luck!

> - dizer,tuama,prolix,mark(ie)

## 0\. Scripting (40 marks)

**Rules:**

*   You must be mesg n for duration of test. Any attempt to communicate with other users will result in immediate failure.
*   You may only refer to system documentation (man & info pages) for help, i.e. no web access!
*   You are free to use any shell or scripting language to write the scripts. Only system commands may be used, your own or other user scripts may not be referred to. Basically: no cheating!
*   Make a directory ~/admintest and place scripts in there. Name each script by its question number. Humorous error messages make your scripts run faster.

**Whilst we hope your scripts run correctly, the emphasis is on the procedure rather than a perfectly working implmenetation.**

Here we go..

1.  Write a script which makes a md5sum of every executable file in the system path and stores it to a file. The script should check against a file left the previous day for differences and report a change to admins via mail.

    An example usage is:

    <pre>./systemcheck</pre>

    <span class="mark">(13.333 marks)</span>
2.  Due to Marks enormous porn collection, /home on Redbrick is rapidly filling up. We need more space dammit.

    Your job, should you choose to accept it, is to write a script that goes through a directory and mails the owners of the top 10 largest files asking them to free up some space.

    Mark is good with his tongue though, so any of his files are to be ignored.

    An example usage is:

    <pre>./toptenmail /home
    </pre>

    This will mail the owners of the top ten largest files in /home (but any files owned by Mark are skipped).

    .. or ..

    <pre>./toptenmail /webtree
    </pre>

    <span class="mark">(13.333 marks)</span>
3.  Some of the committee mailing list archive files have been stolen! You don't know which files have been taken. You do know the perpetrator is an associate and also that he's clever enough to change the names of the files he has copied. A list of md5sums of all of the committee archives is contained in the file sums.log in the format

    <pre>d542034f417e7e4e45eeba42e2ec4884  2000-December.txt
    fea5aeceaa5da313ec0c55e67fe5bd07  2001-December.txt
    5c7c86ab526a4205d29f0536c834f737  2001-November.txt
    f4f17acf4391126a00a89f9826f10c2c  2001-October.txt
    ..
    457dee0a0cc46961c2b13ef22983ba59  2004-January.txt
    4c089e4be4e8e1f6a5133f3914db5b7b  2004-February.txt

    </pre>

    Write a script that will search through /home/associat and record the full path of any file which matches any of the md5sums in sum.log, in the file results.log. A copy of this list should also be mailed to admins@redbrick.dcu.ie.

<span class="mark">(13.333 marks)</span>

## 1\. Solaris (30 marks)

1.  What is the purpose of the "platform" directories found in multiple places on a Solaris machine? <span class="mark">(3 marks)</span>
2.  What does the 'format' command do? In that context, what does it's 'verify' command do? <span class="mark">(3 marks)</span>
3.  What's the exact difference between /dev/dsk/c0t6d0s1 and /dev/rdsk/c0t6d0s1? Explain each constituent part of each device name? <span class="mark">(5 marks)</span>
4.  On a Solaris system, how do I print the routing table? <span class="mark">(1 marks)</span>
5.  If I install the 112233-11 patch on one machine, and 112234-11 patch on another machine, what can you say about the two machines? (This is not specific to that patch number). What does the '112233' series of patches actually patch? <span class="mark">(2 marks)</span>
6.  pkgadd can add two distinct types (formats) of packages to a Solaris system. These "types" are converted between each other using the pkgtrans utility. What are the two formats? (You don't need their exact Sun authorised names, just roughly what each consists of). <span class="mark">(3 marks)</span>
7.  On Prodigy, Redbrick's Sun machine, all our software is compiled from source, then packaged, then installed using Solaris package installation tools. If, you have a package, say, RBopenssh, how can I:
    1.  Get information on the package, such as size, installation date, intended architecture, etc.
    2.  Get a listing of all files contained in the package.<span class="mark">(4 marks)</span>
8.  What do the following boot options do?

    1.  -r
    2.  -s<span class="mark">(4 marks)</span>
9.  Explain the difference between 'halt' and 'poweroff'. <span class="mark">(1 marks)</span>
10.  You've just read on Bugtraq there's a vulnerability in ld.so, which website would you visit to download the appropriate patch? <span class="mark">(1 marks)</span>
11.  What is the 'OBP'? You're sitting at a root prompt, with a Sun keyboard on your lap. Name two ways of dropping to the OBP? <span class="mark">(3 marks)</span>

## 2\. FreeBSD (30 marks)

1.  Breify Explain FreeBSD disk slices and disk labels in comparison to Linux paritions and DOS style partitions. Also make reference to the traditional use of partition a, b and c in a FreeBSD slice. <span class="mark">(5 marks)</span>
2.  What is rc.conf. What is it's relationship to /etc/defaults/rc.conf? <span class="mark">(1 marks)</span>
3.  You have a machine to dedicate to FreeBSD with a six Gigabyte harddrive. Give a sample disk layout scheme if you were to use the machine for
    1.  Log server
    2.  Kernel build machine<span class="mark">(2 marks)</span>
4.  I've already got the latest kernel code in the appropriate location. Now, how do I compile and install the kernel? <span class="mark">(2 marks)</span>
5.  How would I install vim from the ports? <span class="mark">(3 marks)</span>
6.  How would I search for a vnc client in the ports system? <span class="mark">(3 marks)</span>
7.  What tool can I use to keep my ports collection up to date? How does it work? <span class="mark">(3 marks)</span>
8.  Examine the following ifconfig output on a FreeBSD machine, within the Redbrick network (136.206.15.0/24).

    <pre>mark@enigma (~) $ ifconfig                                                                                                                
    [20:27]                                                                                                                                    
    vx0: flags=8843 mtu 1500                                                                           
            inet 192.168.0.4 netmask 0xffffff00 broadcast 192.168.0.255                                                                        
            inet6 fe80::220:afff:feef:33f1%vx0 prefixlen 64 scopeid 0x1                                                                        
            ether 00:20:af:ef:33:f1                                                                                                            
    xl0: flags=8843 mtu 1500                                                                           
            options=8                                                                                                                
            inet6 fe80::260:8ff:fe53:9a7c%xl0 prefixlen 128 scopeid 0x2                                                                        
            inet 136.206.15.4 netmask 0xfffffff0 broadcast 136.206.15.255                                                                      
            inet 136.206.15.64 netmask 0xffffffff broadcast 136.206.15.64                                                                      
            inet6 2001:770:107:15:260:8ff:fe53:9a7c prefixlen 64 autoconf                                                                      
            ether 00:60:08:53:9a:7c                                                                                                            
            media: Ethernet autoselect (100baseTX )                                                                               
            status: active                                   
    </pre>

    What's wrong with this? <span class="mark">(2 marks)</span>
9.  What FreeBSD tool would you use to accept IPv6 router advertisements and to configure interfaces accordingly? <span class="mark">(3 marks)</span>
10.  What is vinum? <span class="mark">(3 marks)</span>
11.  Name the rather popular IP packet filter for FreeBSD? <span class="mark">(3 marks)</span>

## 3\. Linux (30 marks)

1.  You want to install a VNC client but you don't know the name of the package.

    What apt commands could you use to find one and install it?

    <span class="mark">(3 marks)</span>
2.  Which file are the following lines taken from:

    <pre>	deb http://ftp.ie.debian.org/debian stable main non-free contrib
    	deb-src http://ftp.ie.debian.org/debian stable main non-free contrib
    	</pre>

    <span class="mark">(2 marks)</span>
3.  The below files exist:

    <pre>carbon (/usr/src/tu) # ls
    linux-2.4.23.tar.bz2 xfs-2.4.23-all-i386
    </pre>

    List the commands you would use to apply the xfs patch, configure, build and install the new kernel. Assume there are modules to be compiled. (Do this either the Debian way, or the "normal" way).

    <span class="mark">(5 marks)</span>
4.  1.  Briefly describe each part of the following line taken from /etc/fstab(don't go into detail on the device name):

        <pre>/dev/sda6       /var/tmp        ext3    nosuid,nodev            0       2
        </pre>

    2.  What does the /etc/mtab file contain?<span class="mark">(6 marks)</span>
5.  How would you go about setting the default route to 136.206.15.254? <span class="mark">(3 marks)</span>
6.  What is process accounting? How would you enable it in Linux? <span class="mark">(2 marks)</span>
7.  How would you configure interface eth0 with the IP addresses 192.168.0.1 and 192.168.0.5? <span class="mark">(2 marks)</span>
8.  The daemon /usr/local/bin/mysqlwatchd needs to be started on entering runlevel 3 and stopped when the runlevel is anything but 3.
    1.  How might you achieve this on a System V-style linux distribution?
    2.  What command could you use to show the current runlevel?<span class="mark">(4 marks)</span>
9.  <pre>root@aeon:~# umount /dev/cdrom
    umount: /dev/cdrom: device is busy

    </pre>

    Assuming you have no idea what process is accessing the drive, how would you go about finding the PID of the process and then unmounting the drive?

    <span class="mark">(3 marks)</span>

## 4\. LDAP (20 marks)

1.  Explain very very briefly, each of the following:
    1.  o
    2.  ou
    3.  cn
    4.  dn
    5.  sn<span class="mark">(5 x 1 marks)</span>
2.  Consider that POSIX account information is stored under LDAP (as it is on Redbrick), how would I change a user's shell using the ldapmodify command. Specifics just generally how one would go about using ldapmodify to make a change. <span class="mark">(5 marks)</span>
3.  Explain briefly the difference between slapd and slurpd. <span class="mark">(5 marks)</span>
4.  LDAP *appears* to be broken. UIDs are not getting translated correctly, resulting in "usernames" such as 7295, 1354 in programs such as ps and top. You quickly realise that it's not LDAP that's broken, but something else. What could that something else be? How would you rectify the situation? <span class="mark">(5 marks)</span>
5.  Quick fire:
    1.  The L in LDAP stands for 'Lightweight'. What does the DAP stand for?
    2.  When it says 'Lightweight', what is this "weight" in comparision to?
    3.  What is an LDAP 'schema'?
    4.  Name a "default" "built-in" LDAP schema.
    5.  Name an alternative to LDAP for holding account and authentication information?<span class="mark">(5 x 1 mark)</span>

## 5\. Files & Filesystems (30 marks)

1.  Name 4 different FS types and discuss their merits (we're looking for detail here, and try and relate to Redbrick if you can). <span class="mark">(8 marks)</span>
2.  What's tmpfs? Explain why it's a good idea in certain circumstances? <span class="mark">(4 marks)</span>
3.  Snapshotting, what's it all about. Why is it a good idea in some cases? <span class="mark">(3 marks)</span>
4.  I wanna backup /home, it has my porn collection. Burn it to DVD? Nah I'm old school, porn belongs on tape. Describe how I would do this on either Linux, BSD or Solaris. <span class="mark">(4 marks)</span>
5.  Describe a backup scheme of your choice and discuss it's advantages/disadvantages. <span class="mark">(4 marks)</span>
6.  Discuss inodes, mention inode quotas and the inode-filesystem-relationship. <span class="mark">(4 marks)</span>
7.  What's an ACL and how would I set one on a file? <span class="mark">(3 marks)</span>

## 6\. Hardware (30 marks)

1.  Redbrick has an external disk array, configured in a RAID 5 array. The controller card in it's infinite wisdom marked two disks 'offline' at the same time, while the system was in use.

    With reference to how RAID 5 works, explain why this is very very bad.

    <span class="mark">(5 marks)</span>
2.  Explain what is meant by SPARC? Name one way a SPARC system is different from an Intel system. <span class="mark">(3 marks)</span>
3.  You've just installed a SCSI disk. However it's not working correctly? Explain two things to check. <span class="mark">(4 marks)</span>
4.  You have 4 x 200Gb disks. You want to store /home on these disks. Is having the 4 disks in a RAID 0 array a good idea or a bad idea? Explain why? <span class="mark">(4 marks)</span>
5.  My favourite: What's the difference between RAID 1+0 and RAID 0+1? <span class="mark">(4 marks)</span>
6.  Roughly Compare and contrast IDE/SCSI/SATA under the following headings:
    1.  Number of devices per channel?
    2.  Throughput (Figures not necessary, but I'd be impressed and strangely aroused)
    3.  Typical device RPM?
    4.  Cable lengths and sizes?<span class="mark">(4 marks)</span>
7.  You notice 'CS' marked at the back of a new IDE drive you buy. What on Earth does that mean? <span class="mark">(2 marks)</span>
8.  You've just bought a brand new Sun server. It claims to come equipped with a video card. But con-sarn-it there doesn't seem to be a monitor connector that'll fit your PC monitor. What gives? Explain two ways of getting around this? <span class="mark">(4 marks)</span>

## 7\. Networking (30 marks)

1.  A routine nmap of Carbon shows that there's something listening on port 5666\. You telnet to this port and find:

    <pre>M1CK L33T FTP SERVER V1.0</pre>

    How can you find out the PID of this unauthorised server and kill it off.

    <span class="mark">(2 marks)</span>
2.  sshd runs under the 'ssh' user, but you're not exactly familar with process of starting sshd. You first 'su' to ssh, but upon starting it see the following error message:

    <pre>Could not bind to port 22.</pre>

    What's the problem? Why can't it bind? (Assuming nothing else is running on port 22) <span class="mark">(1 marks)</span>
3.  I want to setup an IP alias on a network interface, for 136.206.15.55.

    Show the exact steps required to do this and to keep it persistent between boots. You may answer in the context of FreeBSD, Solaris or Linux (one of them), just me sure to specify which one.

    <span class="mark">(3 marks)</span>
4.  You want to look up the IPv6 address for carbon.redbrick.dcu.ie.

    How do I do this, using the DNS query tool of your choice?

    <span class="mark">(3 marks)</span>
5.  What's the difference between a router, a switch and a hub? <span class="mark">(4 marks)</span>
6.  What is a private address range? (As described in rfc1918)

    List 2 such ranges.

    Why would you want to use one?

    <span class="mark">(3 marks)</span>
7.  One of your fellow admins suggests running LDAP from inetd using the nowait flag. After you've beaten him to a pulp and he's being carried away by paramedics, you explain, including details of how inetd works, why this is such a bad idea... <span class="mark">(3 marks)</span>
8.  Explain briefly each of the following:
    1.  SOA
    2.  MTU
    3.  TCP
    4.  MX and MX priority<span class="mark">(8 marks)</span>
9.  Postgresql is a DBMS. Rebdrick have it setup to use ident authentication. Currently, postgres is accessible only from within the Redbrick network.

    If you were to change this, so that postgres was accessible from the world, why would you *have* to change the authentication mechanism in order to ensure security?

    <span class="mark">(3 marks)</span>

## 8\. Security (30 marks)

1.  Describe roughly what's involved in chrooting a Bind installation? <span class="mark">(3 marks)</span>
2.  Well done, you have just been elected and added to the root group. However, you've just become a security threat to the system.

    As a root group member, you have elevated privileges to that of a normal user. Name 2 steps you can take to ensure your account is secure.

    <span class="mark">(4 marks)</span>
3.  RedBrick has been hacked. The website defaced, the boards deleted, spock is heying you about 4 times a second. Describe what your first actions would be? <span class="mark">(3 marks)</span>
4.  Describe the usage of SSH public/private key pairs, and how you would setup a passphraseless ssh key login. Discuss the merits and disadvantages of this. In what ways are ssh keys more secure than traditionally password authentication? <span class="mark">(4 marks)</span>
5.  CSD, who, if elected you will be sleeping with, have emailed admins saying they suspect that there is some malicious attacks eminating from the RedBrick network. What investigative steps would you take? <span class="mark">(4 marks)</span>
6.  Assume the role of the hacker. You cross dress as a hot chick (if nessassary), you bring Dizer to the bar and you're being very flirty.

    There's alot of alcohol being consumed and well Dermot isn't eactly picky. He invites you up to the server room, he want to show you his "root kit".

    While your up there he passes out for 2 minutes leaving himself logged in as root. How would you backdoor the system so that you can esclate your privilages from your user account easily at a later time?

    Dermot wakes up. You now have to "pay" for your deviance.

    <span class="mark">(4 marks)</span>
7.  Describe one of the following:
    1.  RBAC the "Role Based Access Control" for Solaris
    2.  LIDS - Linux intrusion dection system.<span class="mark">(2 marks)</span>
8.  Explain what is meant by "Security through Obscurity". Give an example. <span class="mark">(2 marks)</span>
9.  Why are encrypted passwords not stored in /etc/passwd anymore?

    Why are passwords encrypted with a salt?

    <span class="mark">(4 marks)</span>

## 9\. General (30 marks)

1.  CSD accidentally cut off all outbound/inbound IRC access to Redbrick. It appears port 6667 has become blocked. Suggest a means of getting around this problem until CSD fix it? <span class="mark">(5 marks)</span>
2.  Sometimes on Redbrick users aren't correctly logged off which can sometimes lead to other users getting heys intended for the logged off person. What file is responsible for this inaccurate information? How might you (theoretically) go about fixing this? <span class="mark">(4 marks)</span>
3.  When user jbloggs tries to connect they get the following error

    <pre>Server sent disconnect message
    type 2(SSH_DISCONNECT_PROTOCOL_ERROR):
    "fork failed: Resource temporarily unavailable"
    </pre>

    No one else has any problems logging in. What might the error indicate? How would you resolve this? <span class="mark">(4 marks)</span>
4.  Give a brief description of the function of each of the following commands:
    1.  strace
    2.  renice
    3.  vmstat
    4.  ldd<span class="mark">(8 marks)</span>
5.  What's the main advantage of using the Maildir format over the traditional mail spool file? <span class="mark">(3 marks)</span>
6.  Why is a networked name service system *essiental* when you're distributing filesystems over NFS? <span class="mark">(4 marks)</span>
7.  What's the very latest version of NFS? <span class="mark">(2 marks)</span>

## 10\. Bonus Round! *ding ding*

1.  Which of these operating systems do you prefer?
    *   Linux (-1000000000 marks)
    *   Solaris (0 marks)
2.  If you could spin one Redbrick member, who would it be?
3.  Tea or coffee? Answer carefully.
4.  Would you actively support the upkeep and maintenance of pornographic artwork in the server room?
5.  Who owns *the* cock?
6.  To what organisation does the following insignia belong?

    <pre>:(soc</pre>

7.  People keep heying you questions. It's really getting irritating. Describe what you're doing to these people in your imagination.

---
title: 'Admin Test 2009 EGM'
---

All questions can be answered in the context of any version of UNIX (except for the OpenBSD, Solaris and Linux sections obviously!). Indicating which version of UNIX you refer to in your answer is preferred but not required. Negative marking applies throughout for answers that are clearly incorrect or demonstrate incompetence.

Humourous answers while appreciated gain no extra marks*. **Keep answers short and concise** - don't waste time writing when one or two word answers will suffice.  

<small>* - Although, it will put us in a better mood while correcting.</small>

**ALL SECTIONS ARE *NOT* EQUALLY WEIGHTED**

The test is marked out of an arbitrary number equal to two times the bisection of the set of available marks, as outlined by the numbers beside the questions and sections (they're not just there to look pretty).

### The Rules

*   You ***must*** be mesg n for the duration of the test. Any attempt to communicate with other users will result in immediate disqualification. Big Brother is watching you. Johan has a knife. Sonic **borrowed** Declan's Mace.
*   During the scripting section ***only***, you may refer to the system documentation (man & info pages) for help. You ***may not*** use any external documentation, i.e. no web access! Don't forget, Big Brother is still watching you.
*   You are free to use whatever shell or scripting language you wish to write the scripts (except brainfuck and whitespace. Admins are people too!). Only system commands may be used: yours or other users' scripts ***may not*** be referred to. Basically: No cheating! Big Brother will be checking.
*   Make a directory called ~/admintest, and place scripts and answers in there. Name each script by its question number. Don't forget: Humorous error messages make your scripts run faster. Big Brother likes humorous error messages.

Best of luck!

> - johan and sonic

* * *

### scripting

###### 40 marks

1.  Sonic's outputed a list of all the renewed users, but we wanted just the members, not those old associates. Using /var/tmp/list.list send an email to all the members telling them their passwords probably in their spamtrap. (13 Marks)
2.  Redbrick's got a new DAS, So we moving the contents of /storage there, write a script that will copy the contents of /storage to /das/ As it copys each user's files across it should boot the user from the network and disable their account. When the copy completes change the users home dir to the new location and reable there account. Remember, keeping the users informed as you go along is a good idea.(13 marks)
3.  Write a script that will force the user to read the AUP, /var/tmp/aup. After reading the AUP the user should be able to accept, reject or abort the AUP, if the user rejects the AUP make it so they can no longer log in, kick then from the system and email admins. If they abort 3 times email helpdesk asking them to help this user, Each time they abort they should be dissconected. If they accept email committee. The only way out of the script should be by answering the choice at the end of the AUP.(13 marks)
4.  Write a script to amuse me (1 mark)

### General ()

###### 30 marks

1.  How would forward a port from your local computer to the internal network on redbrick? What would be a good reason for doing this? (3 marks)
2.  Check what kernel your currently running? (1 mark)
3.  What does chmod 4765 filename do? (3 marks)
4.  How do you search for all the man pages containing a particular word? (2 marks)
5.  Whats the difference between find and ls (2 marks)
6.  finds gone, so's ls, how do see whats in the current working directory (2 marks)
7.  whats busybox? Whats it useful for? (3 marks)
8.  Describe the steps you'd take if you wanted to mount deathray's /not_porn onto carbon via NFS. Both server and client steps are required. (5 marks)
9.  If you turn the airconditioning off for any reason, what do you do afterwards? Be specific. (1 marks)
10.  If you forgot the root password on carbon how would you recover/change it? (3 marks)
11.  What are the following? (1 mark each)

*   zabbix
*   postgres
*   munin
*   dovecot
*   pf

### The Linus Round

###### 30 marks

1.  How would you add yourself to a group? (1 mark)
2.  How do you stop exim from running when you go into run level 5, why would you do this (3 marks)
3.  Whats /etc/aliases for? (2 marks)
4.  What command(s) would you use for the following: (1 mark each)
    *   Check if a user is over quota?
    *   Apache is running?
    *   Fail2ban has banned someone?
    *   Check the mail queue?
    *   Look for root kits?
5.  What file is the following taken from? (3 marks)  

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

6.  How would you check a filesystem for problems? (1 mark)
7.  For some reason redbrick just dosn't like sudo, how would you disable it on your newly installed server? (2 marks)
8.  How would you configure tzdata? Why is it important to do this? (3 marks)
9.  What Linux utility can you use to see what system calls a program is making? (2 marks)
10.  You've just compiled a new kernel and you reboot. Everything seems to be going ok until you get the dreaded KERNEL PANIC message. You notice messages about ext3 filesystems not being mounted. What might be the cause of this? (4 marks)
11.  How would you enable Redbrick's, apt repositry? For 2 bonus marks give the exact changes you would make (1+2 marks)
12.  apt-get install on your newly installed server didn't work, fix it. (1 mark)

### OpenBSD / Solaris

###### 30 marks

##### Solaris (the synergy section)

1.  Explain c2t2d1s5 (3 marks)
2.  What does 'logging' means on Solaris UFS? (3 marks)
3.  Metastat, whats that do? (1 mark)
4.  You need to setup a network alias on a running network interface (say hme0) and ensure it is persistent across reboots. How do you go about this, with emphasis on the persistency. (4 marks)
5.  A service isn't starting, how do you check its status? (2 marks)
6.  Where would you specify filesystem mounts in Solaris? (2marks)

##### OpenBSD (The difficult bastard section)

1.  How do you enable multi-processor support in OpenBSD? (2 marks)
2.  Give a quick rundown of how to PXEboot your OpenBSD system. (4 marks)
3.  How do you set up a default route? How do you make it presistant, why is this good? (3 marks)
4.  pass in on em0 inet proto tcp from any to em0 port 80, what does this do, where would you find it, how would you make it more secure? (3 marks)
5.  What does pfctl do? why should you use it? (2 marks)
6.  Whats /dev/wd0a? (1 mark)

### Security

###### 30 marks

1.  bind runs on port 53, but it runs as named, and its root directory is /var/lib/named. Explain the magic (3 marks)
2.  What is iptables? What is it for? (3 marks)
3.  You find a root terminal unattended. How do you give yourself a backdoor? (1 marks)
4.  Explain what a ulimit is, and why poor goldie needs them. (3 marks)
5.  Redbrick is firewalled to hell by DCU, but is there is a way to get full access to our network from outside without an account? What would it be? if you were elected, how would you fix it? (3 marks)
6.  What is apparmor? Why is it good? What would you use it for? (3 marks)
7.  Why shouldn't you ever run any of shadow's utilities? (for example) (3 marks)
8.  Why are telnet, ftp, etc block inbound to redbrick? (2 marks)
9.  List 3 things that should only be accessible to admins? (3 marks)
10.  Well done, you have just been elected and added to the root group. However, you've just become a security threat to the system. As a root group member, you have elevated privileges to that of a normal user. Name 2 steps you can take to ensure your account is secure. (3 marks)
11.  Explain each of the following briefly (1 mark each)
    *   A password salt
    *   Why theres /etc/passwd and /etc/shadow
    *   suPHP

### LDAP

###### 24 marks

1.  What does ldif stand for? (2 marks)
2.  ldapsearch? What is it. Name 3 switchs and tell me what they do? (4 marks)
3.  Give 3 examples of LDAP attributes (3 marks)
4.  Explain how you would set up a Slave LDAP Server. Pick a type and explain your choice (3 marks) Give other config variables you'd use on the slave (3 marks for that) What configuration needs to be done on the master? (2 marks)
5.  What would you put into a ldap command to add yourself to the root group (3 marks + 1 if you name the command)
6.  NSCD, do you like it, is it nessecary, whats this is again. etc. (3 marks)

### File systems

###### 27 marks

1.  Name 3 different, non-compatiable filesystems? (3 marks)
2.  Name at least one difference between each of these (3 marks)
3.  You decide to buy a new storage array with 6 300GB disks. You decide on Raid10\. How much much usable space will you have? Any drawbacks to this setup? What advantages are there? (5 marks)
4.  You want minerva's disks for yourself and decide to mount /storage over nfs while in the library on your laptop. All is going well except it wont work. What command are you running on your laptop to try and mount it. Why doesnt it work? How would you make it work? If it did work, how would you make it so the disks were mounted automatically after booting your laptop and how would you tell your super duper ubuntu laptop to start using these changes you just made immediately. (5 marks)
5.  How would you change the timestamp on a file to Jan/1/1970 00:00\. (2 marks)
6.  What are these filesystems used for, on your average unix box? (2 * 2 marks)

    <pre>    /proc
        /dev </pre>

7.  What system file is this from? Which OS? Explain the 5th line (5 marks)

    <pre>fd      -       /dev/fd fd      -       no      -
    /proc   -       /proc   proc    -       no      -
    /dev/dsk/c1t0d0s2       -       -       swap    -       no      -
    /dev/dsk/c1t1d0s2       -       -       swap    -       no      -
    /dev/md/dsk/d10 /dev/md/rdsk/d10        /       ufs     1       no      -
    /dev/md/dsk/d20 /dev/md/rdsk/d20        /var    ufs     1       no      -
    /dev/dsk/c1t1d0s3       /dev/rdsk/c1t1d0s3      /helpdeskporn   ufs     2       yes     -
    /dev/dsk/c1t0d0s3       /dev/rdsk/c1t0d0s3      /var/tmp        ufs     2       yes     rw,nosuid,noexec,nodev
    /devices        -       /devices        devfs   -       no      -
    ctfs    -       /system/contract        ctfs    -       no      -
    objfs   -       /system/object  objfs   -       no      -
    swap    -       /tmp    tmpfs   -       yes     -

    192.168.0.21:/storage    -      /storage        nfs     -       yes     rw,vers=3,rsize=65535,wsize=65535,nosuid,nodev,soft,intr
    192.168.0.1:/fast-storage        -      /fast-storage   nfs     -       yes     rw,vers=3,rsize=65535,wsize=65535,nosuid,nodev,soft,intr

    sharefs         -       /etc/dfs/sharetab       sharefs -       no      -
    </pre>

### Networking

###### 33 marks

1.  Your openbsd webserver is only accessible from localhost, but its configured correctly to allow access from anywhere. Whats wrong, how do you fix it, which current esteemed root holder do you beat with a stick? (3 marks)
2.  Explain the following terms in relation to Networking (1 mark each)
    *   netmask
    *   DNS
    *   ifconfig
    *   Multicast
    *   arp
3.  What is ntp? Why would you use it (or not use it)? (2 marks)
4.  You heard gw's ma runs a remote server and everyone knows the IP address(if you know what i mean) including you. What would you use to see what services she offers on it? (2 marks)
5.  1000BASE-TX. Sounds weird, what is it? Details are king. (3 marks)
6.  What are dcu's dns server ips? (2 marks)
7.  Whats DCU's ntp server's hostname? (1 mark)
8.  What layer in the OSI networking model is ICMP in? (2 marks)
9.  /etc/services, heres a list of services, you tell me the ports (1 mark each)
    *   syslog
    *   nfs
    *   ldap
    *   ntp
    *   tftp
10.  You notice an unknown daemon is listening on TCP port 31337\. How would you go about finding both the owner of this daemon and the exact path to the program? (3 marks)
11.  Shite, the website appears down, any idea why? (2 marks)

    <pre>sonic@99.222.13.4:~/1950sPorn$ ping www.redbrick.dcu.ie
    PING www.redbrick.dcu.ie (136.206.15.70) 56(84) bytes of data.
    ^C
    --- www.redbrick.dcu.ie ping statistics ---
    16 packets transmitted, 0 received, 100% packet loss, time 15014ms
    </pre>

12.  Name three useful tools available on all UNIX systems for diagnosing network problems. (2 marks)

### Hardware

###### 28 marks

1.  The IP-KVM uses daisy chaining. What this, why is it handy for redbrick. (Hint: nothing to do with botany) (2 marks)
2.  Redbrick is doing a disk inventory. On the os of your choice, find out the type and number of disks on the machine. While you are at it, you want to know the type/number of processors on sprout(openbsd) and carbon(ubuntu). (4 marks)
3.  Cian keeps asking you about IOPS. Explain what it is and what its used for. (3 marks)
4.  DAS. What the frack is it? (1 mark)
5.  Please give the number of cpus/cpu cores(threads)/ram for: Murphy, Morpheus & Carbon ( 3 * 3 marks )
6.  RAID1/RAID5/RAID6\. Give me minimum number of disks. Which is more space efficent. How do they work. (3* 3 marks +1 )

### BONUS ROUND

###### 1,000,000,000,000,000,000,000,000,000,000,000,000,000 marks ( approx, +/- infinity )

1.  Dr Robotnik. Friend or foe? (>7000 words)
2.  I will when elected buy sonic what number of pizza's? (-1000 marks for numbers < 1)
3.  If you could take one operating system on date. What one would it be and why?
4.  Gw's mother has a lot of "clients" on her "server". In this scenario is "uptime" important?
5.  Give me a good joke including the words monkey, pineapple and yogurt.
6.  Rate these in order of your preference, and explain why  
    Solaris, OpenBSD, GW's Ma
7.  How long does it take the average Redbrick Admin Project to Complete 1 year, 2 years, 10 years? What would you do to improve this
8.  You servars are aspolding, whats you head doing? whats a good way to fix this?
9.  A user emails you asking to be removed from the Debate Socs Redbrick email list. what do you do?
10.  How do you convince the SPC to buy you shinny stuff?
11.  What does su do?
12.  How do you intend to improve the quality of the naked women on the server room wall?

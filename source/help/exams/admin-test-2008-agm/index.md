---
title: 'Admin test 2008 AGM'
---

220 marks total. All rounds are weighted equally, at 30 marks, except for scripting which is worth 40 marks.

The first half hour is for scripting. During this time, man and info pages (along with perldoc, etc - anything that's **preinstalled on redbrick**, no external docs allowed!) may be accessed. After this time, you may not access anything other then your text editor. We're watching you. Cian has a gun.

* * *

### Scripting

###### 40 marks

1.  It's the year 2017, and we've finally run out of disk space on Minerva. Write a script to look for PHP files (ending in .php) and check whether or not a hash line (#!/usr/local/bin/php) exists. If it does, remove the line (to free disk space
2.  Another one related to internets. Write a script that scans for PHP files that are world readable, and contain the string "$mysql_password = "(anything)";. For every file found, automagically insult the owner via email, and mail the string found to zyox@redbrick.dcu.ie.
3.  Write a script that generates the md5 sum of every file under /etc, and saves it, along with the filename, to /root/md5sums. Then have it compare /root/md5sums to /root/md5sums.old, and email any changes to rb-admins@lists.redbrick.dcu.ie. Extra marks if you can make this suitable for cron (i.e rotates md5sum and md5sum.old automatically).

### General

###### 30 marks

1.  What is RCS? Why do we use it? What do you do to people who leave files locked?
2.  What's a crontab? How does one edit yours?
3.  What's a nice value? How would you change it?
4.  How do you edit someone's quota?
5.  What are
    *   Nagios?
    *   Munin?
    *   NSCD?
    *   exim?
6.  Someone keeps complaining that tsocks tells them "You don't exist, go away". Why is this?
7.  What temperature should the server room be kept at? (Fucking freezing, while true, isn't what we're looking for)
8.  What's Xen? What could Redbrick use it for?

### The Stallman round (Linux)

###### 30 marks

1.  What's the apt command to remove already downloaded package files?
2.  How do you stop postgresql from starting on entering run level 3?
3.  You've just royally screwed your shell by catting a binary. How do you fix this?
4.  Where does apt expect to find details on it's proxy?
5.  What's the difference between /dev/hda, /dev/sda and /dev/md?
6.  What's Swap for?
7.  You're trying to unmount /storage, but it keeps complaining about being busy. How do you find out what/who is using it, and kill the process/user? Also, how do you unmount without killing the user/process?
8.  What's /dev/kmem? What's /dev/mem? Explain the difference?
9.  What's the difference between a character and a block device?

### Generic Unix round

###### 30 marks

1.  In a default Solaris install, /home cannot be written to. Why is this? How would you fix it?
2.  Where are the GNU tools held in a default solaris install?
3.  How do I make sshd reread it's config file?(the solaris specific way please :-))
4.  What does killall do on solaris? How is differnt from linux?
5.  /dev/dsk/c0t1d0s2\. Explain each bit of this. What is it?
6.  What's a port? Why would you use one?
7.  What command would you use to see the list of packages installed on your system?
8.  What's vinium? What's sysctl? (a brief explanation is all that's needed)
9.  What's a Jail? Why Would I use one?
10.  What do the following boot flags do in freeBSD -s, -a, -c?

### LDAP (harhar)

###### 30 marks

1.  What does ldap stand for? "Evil bastard authentication system from hell" is not the right answer.
2.  What version of ldap does Redbrick use?
3.  What does slapd do?
4.  What's an ldif file?
5.  Name two ways of producing an ldif file.
6.  Which of these would you use while the server was still running?
7.  What would slurpd be used for?
8.  What does it mean to "reindex" OpenLDAP's database?
9.  OpenLDAP uses BerkeleyDB, but BerkeleyDB sucks giant donkey balls. Name one step you can take when it gets confused, crashes and leaves the database in an unusable inconsistent state.
10.  What is a schema?

### Networking

###### 30 marks

1.  Briefly explain what the following terms stand for/mean
    *   SOA
    *   A
    *   AAAA
    *   CNAME
    *   MX
    *   TTL
2.  Why is changing the serial number of a zone file important?
3.  How do you display the routing table on an operating system of your choice?
4.  What's a default route?
5.  Give us three commands to query DNS?
6.  What's inetd? Why is running some things from it silly?
7.  What is Nmap? give two uses of it?
8.  What's the difference between a switch and a hub?
9.  What's an arp cache? How would you clear it on the OS of your choice?

### Security

###### 30 marks

1.  Explain what a ulimit is, and why poor goldie needs them.
2.  Why do we bother with suexec and suPHP on our apache installations?
3.  Why does the following piece of code fail at life?

    <pre>   #include 

       int main(int argc,char * argv[]) {
          char name[80];

          printf("Enter your name lol: ");

          gets(name);

          printf("Your name lol is %s\n",name);

          return 0;
       }</pre>

4.  You notice somebody keeps trying to log into severus and failing (through /var/log/auth.log) - they seem to be trying to guess the password. It's likely they'll fail, because the password is so horribly..horrible, but how would you block connections from their IP just in case? Extra marks if you can give the entire command.
5.  What is chroot good for?
6.  What is chkrootkit good for?
7.  What is fakeroot good for?
8.  Redbrick is firewalled to hell by DCU, but there is a way to get full access to our network from outside without an account. How?
9.  Apache runs on port 80, but it runs as www-data. Omghow? (bet you didn't see this one coming)
10.  You see something about GPG flying up the screen while apt is updating stuff. What could apt possibly use GPG for?

### Files and Filesystems

###### 30 marks

1.  What does the +i attribute do in linux?
2.  What's a journal? Why would a file system want to keep a journal? Feckin emo file systems.
3.  You're feeling leet, and format your storage disk as ZFS. To use this in Linux you need to use a thing called FUSE. What the hell is FUSE? Name an advantage and a disadvantage of it.
4.  Name 3 file systems. ZFS doesn't count, I just told you about it.
5.  Explain what an inode is.
6.  A crazy woman just handed me a lollipop and chocolate. Eoghan (yes you, the guy taking it) looks amused. I vowed to make this test easier in return for said lollipop and chocolate. Unfortunately I lied. What do rsize and wsize do in NFS mount options?
7.  The following line appears somewhere on murphy:  

    <pre>192.168.0.3:/fast-storage /fast-storage nfs     rw,nosuid,nodev,soft,intr,rsize=32768,wsize=32768       0       2</pre>

    *   What file is this from?
    *   Explain 3 components of it (mention what they do)
8.  werdz@murphy:~$ chmod g+s moo  
    What does this command do?
9.  -rwxrwxrwt  
    You see this in an ls -l listing. What does the "t" mean? Does it make a difference under linux?
10.  There's three hours to go until the exam and it's not written yet. Time for the oh shit I can't think of any more filesystems questions question. Give three reasons why FAT32 is bollox.

### Hardware

###### 30 marks

1.  What architecture is murphy? What's Deathray?
2.  Explain what is meant by the following?
    *   RAID 0
    *   RAID 1
    *   JBOD
    *   RAID 5
3.  What's the difference between SATA and SAS?
4.  What's a KVM? What's the benefit of an IP-KVM? Why are these handy?
5.  Why is Hardware RAID? What is Software RAID? Which is better? Why?
6.  Why Do we want a UPS? Our UPS only has one serial port, how do we make it shut down all the machines?
7.  Explain what a server being 1U means?
8.  What is TFTP? What do we use it for (specifically, regarding our Cisco switch).
9.  You have no serial console, and a horrily irritating sun box with no VGA or PS/2 ports. What program would you use to connect from another server?

### Bonus round (only 5% more horrible than the LDAP round)

###### Lots more marks, honest

1.  Is your hair long?
2.  Why not?
3.  Why is solaris shit? What does using it make you want to do to Sun?(less than 10,000 words please)
4.  What do you think of lil_cain's hair cut?
5.  It's 6 in the morning, the morning after you disabled unpaid a/cs. Someone just rang you to complain that their a/c was disabled. What do you do?
6.  Why?
7.  Why are computers better than people?
8.  What is the Java Trap?
9.  Compare and contrast the CDDL and the GPL v.3.
10.  life.redbrick.dcu.ie. What should we do with this domain, and why?
11.  Why is Fedora crap?

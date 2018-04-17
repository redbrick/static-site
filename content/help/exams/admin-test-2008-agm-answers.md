---
title: Admin test 2008 AGM Answers
---

Admin test for 2008 AGM

# Admin test 2008 AGM

220 marks total. All rounds are weighted equally, at 30 marks, except for
scripting which is worth 40 marks.

The first half hour is for scripting. During this time, man and info pages
(along with perldoc, etc - anything that's **preinstalled on redbrick**, no
external docs allowed!) may be accessed. After this time, you may not access
anything other then your text editor. We're watching you. Cian has a gun.

Answers are marked in Red. Some answers are just links and/or just mad, this
means you should read it for yourself. For many questions there could be other
valid answers not listed.

---

### Scripting

###### 40 marks

1.  It's the year 2017, and we've finally run out of disk space on Minerva.
    Write a script to look for PHP files (ending in .php) and check whether or
    not a hash line (#!/usr/local/bin/php) exists. If it does, remove the line
    (to free disk space
2.  Another one related to internets. Write a script that scans for PHP files
    that are world readable, and contain the string "\$mysql_password =
    "(anything)";. For every file found, automagically insult the owner via
    email, and mail the string found to zyox@redbrick.dcu.ie.
3.  <pre style="color: red;">#!/bin/bash
    
    files=`find /webtree -name "*.php" -perm -a+r `
    
    for file in $files; do
        pwcount=`grep -c "$mysql_password = " $file`
        if [ "$pwcount" -gt 0 ]; then
            owner=`ls -l $file | awk '{print $3}'`
            figlet waf | sendmail $owner
            grep "$mysql_password = " $file | sendmail zyox
        fi
    done
    </pre>

4.  Write a script that generates the md5 sum of every file under /etc, and
    saves it, along with the filename, to /root/md5sums. Then have it compare
    /root/md5sums to /root/md5sums.old, and email any changes to
    rb-admins@lists.redbrick.dcu.ie. Extra marks if you can make this suitable
    for cron (i.e rotates md5sum and md5sum.old automatically).
5.  <pre style="color: red;">#!/bin/bash
    
    #move the old one if it exists
    if [ -f ~/md5sums ]; then
        mv ~/md5sums ~/md5sums.old
    fi
    
    #make a list of all files in /etc/
    files=`find /etc/ -type f`
    
    #generate md5sums for all the files.
    for file in $files; do
        md5sum $file >> ~/md5sums
    done
    
    #magic
    cat ~/md5sums ~/md5sums.old ~/md5sums.old | sort | uniq -u|mutt -s "changed files" admins
    </pre>

### General

###### 30 marks

1.  What is RCS? Why do we use it? What do you do to people who leave files
    locked?

Revision Control System. To revert n00bed config files. The same thing you do
when someone presses CTRL+ALT+DEL on carbon when it's running your only LDAP
server.

1.  What's a crontab? How does one edit yours?

Set of commands to be ran by cron. crontab -e

1.  What's a nice value? How would you change it?

The relative priority of a process. Renice.

1.  How do you edit someone's quota?

edquota -u

1.  What are

    - Nagios?

    Monitoring system for machines/services that sends annoying alerts so you
    have to fix stuff at 3am

    - Munin?

    Makes pretty graphs

    - NSCD?

    Name Service Caching Daemon. Caches results from LDAP locally to reduce the
    ldap load.

    - exim?

    Mail Transfer Agent

2.  Someone keeps complaining that tsocks tells them "You don't exist, go away".
    Why is this?

LDAP could be broken. Once upon a time, it could be that that screen wasn't
logged, in, but this seems to be fixed now

1.  What temperature should the server room be kept at? (Fucking freezing, while
    true, isn't what we're looking for)

16C

1.  What's Xen? What could Redbrick use it for?

Virtualisation

### The Stallman round (Linux)

###### 30 marks

1.  What's the apt command to remove already downloaded package files?

apt-get clean

1.  How do you stop postgresql from starting on entering run level 3?

chkconfig --level 3 postgresql off

1.  You've just royally screwed your shell by catting a binary. How do you fix
    this?

reset

1.  Where does apt expect to find details on it's proxy?

- \$http_proxy
- apt.conf

3.  What's the difference between /dev/hda, /dev/sda and /dev/md?

- hda - first IDE disk on older kernels
- sda - first IDE, SATA or SCSI disk
- md - software raid device

5.  What's Swap for?

Stopping asplosions when you run out of ram

1.  You're trying to unmount /storage, but it keeps complaining about being
    busy. How do you find out what/who is using it, and kill the process/user?
    Also, how do you unmount without killing the user/process?

- lsof
- fuser/kill
- umount -fl

3.  What's /dev/kmem? What's /dev/mem? Explain the difference?

/dev/kmem is the memory, as currently mapped by the kernel. /dev/mem is the
memory as it actually is. These days, /dev/kmem isn't used by much, and has
mostly been replaced by /proc

1.  What's the difference between a character and a block device?

a character device expects a stream of 0 or more bytes of input/output. A block
device expects a series of fixed size chunks of input/output. It's actually far
more complicated than this, and you should read a good book on operating
systems. But we'd accept this answer

### Generic Unix round

###### 30 marks

1.  In a default Solaris install, /home cannot be written to. Why is this? How
    would you fix it?

- Solaris expects /home to be a network mount, and for a local /home to be kept
  in /export/home
- Make /home an nfs mount, or a symlink to somewhere else, or turn off the
  automount service

3.  Where are the GNU tools held in a default solaris install?

/opt/sfw/bin/

1.  How do I make sshd reread it's config file?(the solaris specific way please
    :-))

svcadm -v reload svc:/network/ssh:default

1.  What does killall do on solaris? How is differnt from linux?

- Solaris: killall is used by shutdown to kill EVERYTHING
- Linux: kill all processes that match a name argument

3.  /dev/dsk/c0t1d0s2\. Explain each bit of this. What is it?

- /dev/dsk - it's a disk device
- c0 - on controller 0
- t1 - in tray 1
- /dev/kmem is the memory, as currently mapped by the kernel. /dev/mem is the
  memory as it actually is. These days, /dev/kmem isn't used by much, and has
  mostly been replaced by /proc

- d0 - it's disk 0
- s2 - slice 2

5.  What's a port? Why would you use one?

Ports is a system for compiling software not packaged on BSD systems. You would
use ports when there is no package available

1.  What command would you use to see the list of packages installed on your
    system?

pkg_info -A (OpenBSD)

1.  What's vinium? What's sysctl? (a brief explanation is all that's needed)

- Vinum is a block device driver which implements virtual disk drives capable of
  RAID. Vinium is a typo.
- [http://en.wikipedia.org/wiki/Sysctl](http://en.wikipedia.org/wiki/Sysctl)

3.  What's a Jail? Why Would I use one?

Jails are an OS level virtualisation system for limiting access to
services/users

1.  What do the following boot flags do in freeBSD -s, -a, -c?

- -s: Single User Mode
- -a: Causes the kernel to ask for the root device to use
- -c: Causes the kernel to go into boot_config(8) before performing autoconf(4)
  procedures.

### LDAP (harhar)

###### 30 marks

1.  What does ldap stand for? "Evil bastard authentication system from hell" is
    not the right answer.

Lightweight Directory Access Protocol

1.  What version of ldap does Redbrick use?

3

1.  What does slapd do?

It's an LDAP server

1.  What's an ldif file?

LDAP Data Interchange Format. It's a plain text format for holding data for an
ldap server.

1.  Name two ways of producing an ldif file.

- slapcat
- ldapsearch

3.  Which of these would you use while the server was still running?

ldapsearch

1.  What would slurpd be used for?

Forwarding changes to slave servers

1.  What does it mean to "reindex" OpenLDAP's database?

Exactly what it says on the tin

1.  OpenLDAP uses BerkeleyDB, but BerkeleyDB sucks giant donkey balls. Name one
    step you can take when it gets confused, crashes and leaves the database in
    an unusable inconsistent state.

bdb_recover on the data file (switching it on and off again will do this. It
won't get you marks though

1.  What is a schema?

A definition of the objects/attributes in an LDAP system

### Networking

###### 30 marks

1.  Briefly explain what the following terms stand for/mean

    - SOA

    Start Of Authority

    - A

    A Record: Points to an ipv4 address

    - AAAA

    AAAA Record: Points to an ipv6 address

    - CNAME

    CNAME: An alias to another record

    - MX

    MX: Mail exchange record. Points to a mail server

    - TTL

    Time To Live, the number of seconds remaining on a cached record before it
    is purged. For authoritative records the TTL is fixed at a specific length.
    If a record is cached, the server providing the record will provide the time
    remaining on the TTL rather then the original length it was given.

2.  Why is changing the serial number of a zone file important?

Because the serial number is used by slave servers to determine if changes have
been made. If the serial is not changed then changes will not be replicated

1.  How do you display the routing table on an operating system of your choice?

route show (OpenBSD)

1.  What's a default route?

A routing table entry which is used to direct packets addressed to networks not
explicitly listed in the routing table.

1.  Give us three commands to query DNS?

- dig
- host
- nslookup

3.  What's inetd? Why is running some things from it silly?

Inetd launches a specified program when the server is contacted on a specified
port.

1.  What is Nmap? give two uses of it?

Nmap uses raw packets to determine information about the network

1.  What's the difference between a switch and a hub?

A switch is layer two, so doesn't know about ip address or the like. It also
forwards broadcasts everywhere. A hub forwards everything everywhere, and
doesn't know about any addressing. A router knows about layer three addressing,
and only forwards stuff to the correct network

1.  What's an arp cache? How would you clear it on the OS of your choice?

It's a cache of MAC addresses with IP addresses. arp -da (OpenBSD).

### Security

###### 30 marks

1.  Explain what a ulimit is, and why poor goldie needs them.

Oddly enough, it's a limit of system resources on a user

1.  Why do we bother with suexec and suPHP on our apache installations?

So user code exceutes as the user, rather than as www-user

1.  Why does the following piece of code fail at life?

    <pre>   #include
    
       int main(int argc,char * argv[]) {
          char name[80];
    
          printf("Enter your name lol: ");
    
          gets(name);
    
          printf("Your name lol is %s\n",name);
    
          return 0;
       }</pre>

BUFFER OVERFLOW LOL

1.  You notice somebody keeps trying to log into severus and failing (through
    /var/log/auth.log) - they seem to be trying to guess the password. It's
    likely they'll fail, because the password is so horribly..horrible, but how
    would you block connections from their IP just in case? Extra marks if you
    can give the entire command.

iptables. (Note: we now do this automatically with fail2ban)

1.  What is chroot good for?

Running a processes within an isolated set of directories. Used for BIND among
other things

1.  What is chkrootkit good for?

Checking for rootkits (Bet you didn't see that coming)

1.  What is fakeroot good for?

Certain things (eg. making debian packages) want you to be root. fakeroot lets
you do this wihtout being root

1.  Redbrick is firewalled to hell by DCU, but there is a way to get full access
    to our network from outside without an account. How?

IPv6

1.  Apache runs on port 80, but it runs as www-data. Omghow? (bet you didn't see
    this one coming)

It gets started as root

1.  You see something about GPG flying up the screen while apt is updating
    stuff. What could apt possibly use GPG for?

Checking package integrity

### Files and Filesystems

###### 30 marks

1.  What does the +i attribute do in linux?

A file with the 'i' attribute cannot be modified: it cannot be deleted or
renamed, no link can be created to this file and no data can be written to the
file. Only the superuser or a process possessing the CAP_LINUX_IMMUTABLE
capability can set or clear this attribute.

1.  What's a journal? Why would a file system want to keep a journal? Feckin emo
    file systems.

[Go Read](http://en.wikipedia.org/wiki/Journaling_file_system)You're feeling
leet, and format your storage disk as ZFS. To use this in Linux you need to use
a thing called FUSE. What the hell is FUSE? Name an advantage and a disadvantage
of it.

FUSE: Filesystem in Userspace

- Name 3 file systems. ZFS doesn't count, I just told you about it.
- ext3
- fat32
- ReiserFS
- etc.

- Explain what an inode is.

[READ ME](http://en.wikipedia.org/wiki/Inode)

- A crazy woman just handed me a lollipop and chocolate. Eoghan (yes you, the
  guy taking it) looks amused. I vowed to make this test easier in return for
  said lollipop and chocolate. Unfortunately I lied. What do rsize and wsize do
  in NFS mount options?

The maximum number of bytes in each network Read/Write request that the NFS
client can receive when reading data from a file on an NFS server.

- The following line appears somewhere on murphy:

  <pre>192.168.0.3:/fast-storage /fast-storage nfs     rw,nosuid,nodev,soft,intr,rsize=32768,wsize=32768       0       2</pre>

  - What file is this from?

  /etc/fstab

  - Explain 3 components of it (mention what they do)

- 192.168.0.3:/fast-storage - source location
- /fast-storage - mount point
- nfs - fs type
- rw - read/write
- nosuid - any suid attributes on files on the source fs are ignored
- nodev - any dev attributes on files on the source fs are ignored
- soft - "If the soft option is specified, then the NFS client fails an NFS
  request after retrans retransmissions have been sent, causing the NFS client
  to return an error to the calling application.
- intr - allow system calls to interrupt file operations on this fs

- werdz@murphy:~\$ chmod g+s moo  
  What does this command do?

sgid moo

- -rwxrwxrwt  
  You see this in an ls -l listing. What does the "t" mean? Does it make a
  difference under linux?

It's a [Sticky Bit](http://en.wikipedia.org/wiki/Sticky_bit). Sticky bits have
no effect on files...

- There's three hours to go until the exam and it's not written yet. Time for
  the oh shit I can't think of any more filesystems questions question. Give
  three reasons why FAT32 is bollox.
- The maximum file size is 4Gb, and I have HD porn movies bigger than this
- No permissions support
- Patent encumbered

### Hardware

###### 30 marks

1.  What architecture is murphy? What's Deathray?

- Murphy: Sparc (Niagra Sun_4v)
- Deathray: x86 (Intel i686)

3.  Explain what is meant by the following?

    - RAID 0

    Disk striping, no redundancy

    - RAID 1

    Disk mirroring

    - JBOD

    Just a bunch of disks. No striping, no redundancy

    - RAID 5

    Striped disks with parity, an array of 3 or more disks that can survive a
    single disk failure.

4.  What's the difference between SATA and SAS?

- SATA: Serial ATA
- SAS: Serial attached scsi

6.  What's a KVM? What's the benefit of an IP-KVM? Why are these handy?

KVM allows multiple machines to be connected to a single keyboard, video &
mouse. An IP-KVM is accessable over the internet, so handy for fixing broken
stuff from bed at 3am

1.  Why is Hardware RAID? What is Software RAID? Which is better? Why?

- Hardware RAID: Has a dedicated hardware RAID controller the disks are
  connected to.
- Software RAID: Disks are connected to a normal controller, and RAID
  fuctionality is implemented in software
- Hardware tends to be faster. Software lacks a RAID controller to die on you
  though

3.  Why Do we want a UPS? Our UPS only has one serial port, how do we make it
    shut down all the machines?

The UPS gives you time to shut down cleanly in the event of a power cut". The
serial port isn't connected to anything, so you'll have to shut them down
manually. Were it connected, you'd run a daemon called apcd to do it though.

1.  Explain what a server being 1U means?

It refers to the height of it. (it's about 1.75 inches)

1.  What is TFTP? What do we use it for (specifically, regarding our Cisco
    switch).

Trivial File Transfer Protocol. It's used for copying stuff to/from the Cisco
switch.

1.  You have no serial console, and a horrily irritating sun box with no VGA or
    PS/2 ports. What program would you use to connect from another server?

minicom

### Bonus round (only 5% more horrible than the LDAP round)

###### Lots more marks, honest

1.  Is your hair long?
2.  Why not?
3.  Why is solaris shit? What does using it make you want to do to Sun?(less
    than 10,000 words please)
4.  What do you think of lil_cain's hair cut?
5.  It's 6 in the morning, the morning after you disabled unpaid a/cs. Someone
    just rang you to complain that their a/c was disabled. What do you do?
6.  Why?
7.  Why are computers better than people?
8.  What is the Java Trap?
9.  Compare and contrast the CDDL and the GPL v.3.
10. life.redbrick.dcu.ie. What should we do with this domain, and why?
11. Why is Fedora crap?

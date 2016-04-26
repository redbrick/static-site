---
title: 'Admin Test 2004 AGM Answers'
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

1.  <pre>#!/bin/bash

    OUT=/var/admin/systemcheck
    TMP=/tmp/md5sum.$

    if [ -e $OUT ]; then
            mv $OUT $OUT.old
    fi

    find `echo $PATH | tr ':' ' '` -perm -111 -type f -maxdepth 1 -exec md5sum {} \; >> $OUT

    if [ -e $OUT.old ]; then
            diff -u $OUT.old $OUT > $TMP
            if [ -s $TMP ]; then
                    {       echo "To: admins@redbrick.dcu.ie"
                            echo "From: admins@redbrick.dcu.ie"
                            echo "Subject: PATH md5 change!"
                            echo
                            cat $TMP
                    } | sendmail -t
            fi
            rm $TMP
    fi

    </pre>

2.  It didn't really have to mail the user just once, but it's nice.

    <pre>#!/bin/bash

    if [ $# -ne 1 ]; then
    	echo "Usage: $0 directory-name";
    	exit 1;
    fi

    TMPDIR=/tmp/badusers.$/

    COUNT=0

    mkdir $TMPDIR

    find $1 -type f -not user mark -printf "%s %u %p\n" | sort -rn | head -10 | while read SIZE NAME PATH
    do
    	if [ ! -e "$TMPDIR/$NAME" ]; then
    		{	
    			echo "You're using too much space in these files:"
    			echo
    		} > "$TMPDIR/$NAME"
    	fi

    	echo $PATH >> "$TMPDIR/$NAME"		
    done

    for i in $TMPDIR/*
    do
    	cat $i | mail -s 'Files too large!" admins@redbrick.dcu.ie
    	rm -f $i
    done

    rmdir $TMPDIR
    	</pre>

3.  <pre>#!/bin/bash
    find /home/associat -type f -exec md5sum {} \; 2>/dev/null > allsums.log

    function doit {
    for CHECKSUM in `cat sums.log | awk {'print $1'}`
    do
            grep $CHECKSUM allsums.log | tee -a results.log
    done
    }

    doit | mail admins@redbrick.dcu.ie
    </pre>

## 1\. Solaris (30 marks)

1.  Contain platform specific libraries and binaries, all listed by platform type. Typically contains hardware/arch sensitive code.
2.  Partition/Label a disk. Verify prints the current label. <span class="mark">(3 marks)</span>
3.  One is a block device, the other a character device.
    *   c = controller
    *   t = target/id
    *   d = disk/partition
    *   s = slice
4.  netstat -rn
5.  The former is an SPARC machine, the latter an intel one.  
    112233 patches the kernel.
6.  Datastream and filesystem. Datastream packages are a single distributable file, filesystem type packages are like a directory structure of package files. pkgtrans converts the latter to the former, kind of like tarring to a very specific format.
7.  1.  pkginfo -l RBopenssh
    2.  # grep RBopenssh /var/sadm/install/contents
8.  What do the following boot options do?
    1.  Reconfigure devices. (For hardware changes)
    2.  Single user mode
9.  Halt will drop you at the OBP, poweroff will physically try and turn the machine off.
10.  http://sunsolve.sun.com
11.  Open Boot Prom. Press STOP+A or halt the machine. Or unplug a connected serial cable. Haha.

## 2\. FreeBSD (30 marks)

1.  FreeBSD uses slices which are "sub-partitions" of physical partitions. Linux and DOS uses physical partitions.
    *   a = root slice
    *   b = swap
    *   c = whole disk
2.  Contains the primary system configuration information. /etc/defaults/rc.conf contain the default that is used, when an option is left out of /etc/rc.conf.
3.  1.  Log server - Big var
    2.  Kernel build machine - Big /usr, / or /boot (if testing)
4.  <pre>cd /usr/src
    make BUILDKERNEL KERNCONF=dizer.conf
    make INSTALLKERNEL KERNCONF=dizer.conf
    </pre>

5.  <pre>cd /usr/ports/editors/vim-lite; make install clean	
    </pre>

6.  <pre>cd /usr/ports; make search key='vnc'
    </pre>

7.  cvsup to keep the ports themselves up to date, just cvs's off a primary server. portupgrade to update the installed ports.
8.  netmask on the 15.4 should be 0xffffff00, broadcast should be 15.255 on the 15.64 and the prefixlen should be 64 on the local scope IPv6 link. (Two is enough)
9.  rtsol
10.  A piece of shit. "Logical Volume Manager Control Program". Software disk management, controls raiding and striping of disks. (Ala disksuite on Solaris)
11.  ipfw

## 3\. Linux (30 marks)

1.  <pre>apt-cache search vnc
    apt-get install CLIENT_NAME
    </pre>

2.  /etc/apt/sources.list
3.  <pre>tar -xvjf linux-2.4.23.tar.bz2
    cd linux-2.4.23
    patch -p1 	
    	</pre>

4.  1.  Device name, mount point, file system, no suid binaries allowed, no device files allowed, no dumps, fsck check order
    2.  A list of currently mounted file systems and their options.
5.  route add default gw 136.206.15.254
6.  Used to record information on processes. accton. Provided the kernel has been compiled with it.
7.  How would you configure interface eth0 with the IP addresses 192.168.0.1 and 192.168.0.5?

    <pre>ifconfig eth0 inet 192.168.0.1 netmask 255.255.255.0
    ifconfig eth0:1 inet 192.168.0.5 netmask 255.255.255.255
    </pre>

8.  1.  *   create a wrapper script for it in /etc/init.d which takes arguments start or stop.
        *   create a symbolic link to it in /etc/rc3.d (e.g S99mysqlwatchd)
        *   every other runlevel directory except rc3.d should contain a symbolic link to it preceeded by a K. (e.g K99mysqlwatchd)
    2.  who -r
9.  Use fuser or lsof to find the PID. kill -9 PID. umount /dev/cdrom

## 4\. LDAP (20 marks)

1.  1.  Organisation
    2.  Organisational Unit
    3.  Common name
    4.  Distinguished name
    5.  Surname
2.  <pre>	$ ldapmodify -W -x -D cn=root,ou=ldap,o=redbrick 
    	dn: uid=dizer,ou=accounts,o=redbrick
    	changeType: modify
    	replace: loginShell
    	loginShell: /usr/local/shells/bash
    	</pre>

3.  Slapd controls the LDAP database, the access rules to it and answers all LDAP queries. Slurpd simply propogates changes from one slapd to another.
4.  NSCD has died, which gives the illusion of LDAP problems. (slapd at 100% is often since it's overwhelmed with queries).

    <pre>	/etc/init.d/nscd start
    	</pre>

5.  Quick fire:
    1.  Directory Access Protocol
    2.  X509
    3.  A schema is a description of the data that the LDAP database will hold. It contains information such as datatypes and identifiers.
    4.  core/cosine/corba/inetorgperson/java/nis
    5.  NIS/NIS+

## 5\. Files & Filesystems (30 marks)

1.  ext2, ext3, xfs, ufs, reiserfs. Lots of possibilities. And no, I won't name the advantages of them all.
2.  ramfs, a filesystem held entirely in memory. Good since continuous little writes are much more efficient when no physical disk is involved.
3.  Takes a virtual (or sometimes real) copy of a filesystem, you get it's exact contents at a moment in time. How this operates varies, some have a copy-on-write mechanism. Dumping from a live filesystem is bad since the files can and do change while the dump is in progress, so you'd have to bring the machine to singleuser mode to reliably dump the filesystem. With a snapshot, you can dump straight from the snapshot.
4.  <pre># mt rewind
    # tar -cf /dev/rmt/1 /home
    </pre>

5.  Grandfather, Father, Son backup scheme. Take incrementals every day, level 0s every weekend, rotate the dailys weekly, the weeklies monthly and the monthlies annually.

    Any reasonable backup scheme is acceptable

6.  An inode is a data structure for holding information about files on a UNIX file system. It contains permissions, devices, link counts, times, etc. Every file has an inode. Inode = "Index node". The name is not in the inode, this is stored in the directory. (One inode can have multiple names). There is a finite number of inodes, decided at filesystem creation, without a quota a user could render a system useless, by filling the disk with (usually) billions of tiny files. They'd remain under their block quota, though. So there's gotta be an inode quota too.
7.  Access control list, controls access to a file on a much more granular level, you can have settings on a per-user/per-group basis.

    <pre>		setfacl -m user:dizer:rw- foo.html
    	</pre>

## 6\. Hardware (30 marks)

1.  A RAID 5 array has stripes, with segments of parity information on each of the disks. If you lose one disk, the system stays up and running, since the parity information can be used to retrieve the day. Two disks makes the data irrecoverable. As the system tried to write to the diks, it destroyed the integrity.
2.  Scalable Processor ARChitecture. SPARC machines can support ridiculously large numbers of processors (8 and way up). SPARCs have an SBUS.
3.  1.  Cable lengths
    2.  Active termination
    3.  ID conflicts
4.  Very bad. Lose one disk, lose everything, since the data is stripped across all 4 disks and there is no parity information.
5.  RAID 1+0 stripes data across a set of n mirrors . 0+1 mirrors two stripes (consisting of n disks). 1+0 good, 0+1 bad, each can take one failure, but 1+0 can potentially take much more. (Depending on how unlucky you are)
6.  Roughly Compare and contrast IDE/SCSI/SATA under the following headings:
    1.  IDE 2, SCSI 7/15, SATA 1.
    2.  133M/sec, up to 160M/sec, SATA 150Mb/sec +
    3.  IDE 7200, SCSI 10K/15K, SATA 7200/10K
    4.  IDE, nasty big bulky cables, short lengths. SCSI nasty bigger bulkier cables, long lengths. SATA, lovely tiny cables, longish lengths.<span class="mark">(4 marks)</span>
7.  Cable select, the Master/Slave depends on it's position on the cable.
8.  13w3 connectors are common on Sun boxes. Either buy a 13w3 to VGA connector, or just log in on a serial line.

## 7\. Networking (30 marks)

1.  lsof -i TCP@136.206.15.1:5666
2.  Ports below 1024 are privileged and must be bound to by root.
3.  Linux:

    <pre>ifconfig eth0:1 136.206.15.55 netmask 255.255.255.255 up</pre>

    FreeBSD:

    <pre>ifconfig xl0 alias 136.206.15.55 netmask 255.255.255.255 up</pre>

    Solaris:

    <pre> ifconfig hme0:1 plumb
    ifconfig hme0:1 136.206.15.55 netmask 255.255.255.255 up</pre>

4.  <pre>dig carbon.redbrick.dcu.ie aaaa</pre>

    <pre>host -t aaaa carbon.redbrick.dcu.ie</pre>

5.  Hub send packets through a connected subnet at half duplex, sending all inbound packets out on all links at the same time. Switch is full duplex, sends only to the correct line. Router routes packets between subnets.
6.  It's an IP range that is not allocated to any external body, but that is free for anyone to use on their private network and not be routed onto the internet at large.
    *   10.0.0.0 to 10.255.255.255
    *   172.16.0.0 to 172.31.255.255
    *   192.168.0.0 to 192.168.255.255
7.  Nowait implies that once a query has been made the server is turn down again, until a new query comes in and the server is once again started. For something that gets as battered as LDAP, this is very very inefficient.
8.  1.  Start of Authority, marks the start of a zone and who is responsible for it.
    2.  Maximum transmissible unit, largest sized packet to send without fragmentation.
    3.  Transmission Control Protocol, a reliable communication protocol.
    4.  Mail exchange records, priority indicates which server is contacted first.
9.  identd runs on the client, if you can't trust the client (like on the Internet), then the ident daemon could be sending any username. So to access your database all I have to do is say "Hi, I'm Diz, I mean...Mark, yes Mark". And I have access to his database.

## 8\. Security (30 marks)

1.  Constructing an artifical root filesystem for the server by copying in the libraries, configuration files and spools it needs. Then just use the '-t' option to get named to automatically chroot in there. <span class="mark">(3 marks)</span>
2.  Passphrased ssh keys, change your passwords, don't run CGIs. <span class="mark">(4 marks)</span>
3.  pkill -9 -u spock, then disconnect Redbrick from the network immediately. Try to determine if system binaries are root-kit-stylee. <span class="mark">(3 marks)</span>
4.  Ssh keys consist of a private and public part which can be used for system authentication. You can setup passphraseless ssh keys using ssh-keygen and not specifying a passphrase.

    Passphraseless is good because it's quick, no typin required, automated scripts can do it. But it's bad because if one account is broken into to, so are all the accounts linked to it

    Passphrases never go over the wire, unlike passwords, making the system safer. They also take more than 8 characters into account.

    <span class="mark">(4 marks)</span>
5.  Process accounting, IP accounting, log files. <span class="mark">(4 marks)</span>
6.  <pre>cp /bin/bash /tmp
    chmod 4755 /tmp/bash
    </pre>

7.  Describe one of the following:
    1.  Role based authentication, allows for a much finer grained control, by adding people/groups into arbitrary roles, then assigning permission to these roles. man rbac.
    2.  Allows precision control over the faculties of a Linux system, the filesystems that can be access, the commands that can be exectuted. Can arbitrarily allow some processess access to /etc, but not others, etc.<span class="mark">(2 marks)</span>
8.  Hiding something, so it's hard to find, but not well secured. If found, would be vulnerable. Storing the root password in a file called /etc/X11/gdm/Sessions/Xsession/fluxbox, leaving security bugs in a closed source project. <span class="mark">(2 marks)</span>
9.  They're stored in /etc/shadow, which isn't word readable, so you can't do dictionary attacks on it.

    So that for a dictionary attack each possible word has to be encrypted with the salt, then compared. This serves to slow the cracking process down.

    <span class="mark">(4 marks)</span>

## 9\. General (30 marks)

1.  Tunnel outbound irc traffic over ssh to a machine outside the blocked port range.

    <pre>ssh -L 8000:irc.server.com:6667 machine.on.outside.com.</pre>

2.  /var/run/utmp, remove the bogus entry, or close the non-closed entry.
3.  A user resource limit has been exceeded. Check the users processes. Blow them away. Probably calling zsh from zsh.
4.  Give a brief description of the function of each of the following commands:
    1.  strace - trace system calls and signals
    2.  renice - alter priority of a running process
    3.  vmstat - report virtual memory statistics
    4.  ldd - print shared library dependencies
5.  No stupid gay locking required.
6.  To keep the UID to username translation exactly the same, otherwise the wrong people will have access to the wrong files.
7.  4

## 10\. Bonus Round! *ding ding*

1.  Solaris, I'm not wasting 100000000 marks
2.  atlas@redbrick
3.  Coffee
4.  Yes
5.  mark@redbrick
6.  Sadsoc (Corporation)
7.  [ CENSORED ]
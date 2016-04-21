---
title: 'Admin Test 2003 AGM Answers'
---

 <sub> - [Helpdesk](../) - [Joining](../joining) - [Tutorials](../tutorials) - [Exams](../exams) -</sub>
## 0\. Scripting (30 marks)

1.  <pre>#!/bin/sh

    LOGFILE=test.log

    tail -0 -f ${LOGFILE} | while read line; do
    	# Using egrep before the while loop above wasn't working - output to
    	# while loop was being delayed hence using it here inside the loop
    	# instead.
    	#
    	if echo ${line} | egrep -q '^[0-9]{4}-[0-9]{2}-[0-9]{2} WARNING! [0-9]+ monkies are eating our [a-z ]+!/pre>; then
    		number=`echo ${line} | sed 's/.*WARNING! \([0-9]*\) monkies.*/\1/'`
    		hardware=`echo ${line} | sed 's/.*eating our \([a-z ]*\)!.*/\1/'`

    		# mail requires input for message body so just feed a newline
    		# into it with echo.
    		#
    		echo | mail -s "Monkey alert! ${number} consuming ${hardware}" $*
    	fi
    done</pre>

2.  <pre>#!/bin/sh

    output="${2}/`date +%Y/%m/%d`"
    mkdir -p ${output}
    cd ${1}

    for file in *; do
    	if [ -f ${file} ]; then
    		mv ${file} ${output}
    		touch $file
    		gzip ${output}/${file}
    	fi
    done</pre>

3.  <pre>#!/bin/sh

    ps -ax -o pid,rss | (read header; while read pid rss; do
    	if [ ${pid} -ne $ -a ${pid} -ge ${1} -a ${pid} -le ${2} -a ${rss} -ge ${3} ]; then
    		kill ${pid}
    	fi
    done)</pre>

## 1\. Solaris (30 marks)

1.  You can kill all instances of a processes with Linux Killall, Solaris Killall just kills everything.

1.  *   shutdown -i0 -g0 -y
    *   Turn off.
    *   Insert new disk.
    *   Turn on.
    *   Stop-A/Break.
    *   probe-scsi-all
    *   This is Solaris, obviously that'll work just fine.
    *   boot -s
    *   Label and format the disk using format.
    *   newfs
    *   mount

1.  dumpadm, is the crash dump admin tool, and is used to specify what happens if the system panics or crashes, whether the core is saved or not, if so where, etc.

1.  Cos it calls /usr/bin/sparcv9/ps, which is setuid.

1.  /kernel/genunix

1.  pkgadd, pkgchk -l

1.  Access Control Lists, ability to specifically set a permission on a file for a particular user or set of users.

    <pre> setfacl -s user:dizer:rwx,user::rwx,group::rw-,mask:r--,other:--- filename</pre>

    Disallows write permission from a particular user on the tty.

1.  <pre>/usr/platform/`uname -i`/sbin/prtdiag -v
    </pre>

1.  sunsolve.sun.com

1.  The filesystem logs all changes to a special area on the disk which can be reread if the machine should crash or reboot, which dramatically increases reboot time and removes the need to fsck the filesystems.

1.  *   Shutdown gives warnings.
    *   Init just shuts down.
    *   Halt shuts down without running /sbin/rc0
    *   fsck, raw (block up to 2Gb)
    *   prtvtoc, raw
    *   mount, block

1.  UFS.

1.  Processes the systems accounting files and summarizes.

1.  *   /etc/system - Kernel modules and parameters
    *   /etc/default/ - Default configuration for system utilities.

1.  Stop + A

## 2\. FreeBSD (30 marks)

1.  *   da0: scsi disk (Direct Access)
    *   sa0: scsi tape (Sequential Access)
    *   ad0: atapi disk

1.  boot off cd, interrupt boot loader and boot with the -a switch to Ask for the root filesystem then type it in when asked for it (using kernel output to identify which disk it is if necessary)

1.  (latest production) 4.7 or (latest technology) 5.0

1.  *   shows what kernel modules are loaded
    *   editing and display of disklables (partitions within slices)
    *   show login.conf limits or run a command with given limits from a class
    *   Logical Volume Manager control program

1.  /etc/rc.shutdown

1.  <pre>[as root]
    cd /usr/ports//
    make install
    </pre>

1.  Disk slice refers to an 'fdisk' partition, advantages are that all paritioning (disklabels) can be contained within one overall slice, rather than using multiple fdisk partitions.

1.  /boot/loader.conf

1.  *   fdisk for partitioning
    *   newfs_msdos /dev/ad0s1
    *   mount -t msdos /dev/ad0s1 /dos

1.  CVSup

## 3\. Files & Filesystems (30 marks)

1.  Obviously, difference between character and block devices. One mark for knowing the words 'character' and 'block' the right way around, 2 for knowing what they mean.

1.  *   Directory and normal file, respectively. (1 if both)
    *   It has (or had) ACLs applied to it. getfacl gives more info. (1 for each of those facts)
    *   Anything you find plausible, e.g. he made the file while sued.
    *   It's a FIFO/named pipe (1 mark). mkfifo to make (1 mark).
    *   brief description of what a FIFO does (queue, IPC ,etc) (1 mark).

1.  *   mount, or /etc/mnttab (1 mark).
    *   mark each, nosuid = no setuid binaries, quota = enforce quotas on device, first item = mount point, second = device to mount.
    *   Metadevice. Practically any command beginning with meta. (metaclear metadb metadetach metahs metainit metaoffline metaonline metaparam metarename metareplace metaroot metaset metastat metasync metatool metatool-toolsmenu metattach metaclear metadb metadetach metahs metainit metaoffline metaonline metaparam metarename metareplace metaroot metaset metastat metasync metatool metatool-toolsmenu metattach)
    *   Set noexec (mount option, or via fstab) 1 mark.
    *   Remount rw, edit /etc/passwd. The mount bit is the important bit, though.

1.  fsck. That simple. 1 mark.

1.  Rerun newfs on the disk, using -N to not actually write anything. This will print the default superblock positions. 1 mark for parrot-like recitation of newfs command, 1 for knowing what it does and why it works.

1.  /proc = process information, + extras on Linux. /dev = device files for speaking directly to devices (disks, sound card, whatever).

1.  Depends what system they discuss, but they should have paritioning (fdisk, etc), formatting (newfs, etc). adding to fstab. 1 mark for sheer bravado to anybody who reboots in windows, formats it and reboots on the grounds their UNIX-a-like reads FAT32.

## 4\. Hardware (30 marks)

1.  *   Redundant Array of Independent Disks.
    *   Several disks forming one or more devices.
    *   Mirroring, duplicates data across disks.
    *   Striping, places strips of data across multiple disks.
    *   Different levels of redundancy and speed.

1.  *   Speed
    *   Redundancy
    *   Hot-swapability

1.  *   0
    *   1
    *   5

1.  1 because of data duplication and non-striping.

1.  10 = "stripped mirrors", 0+1 = "mirrored strips". 1+0 better redundancy and read speed.

1.  *   Speed
    *   More devices per channel
    *   Longer cables

1.  *   Termination on last device
    *   Power and data cables connected correctly

1.  Serial Console
2.  Jumpers, Cable Select

## 5\. Networking (30 marks)

1.  Nmap

1.  Start of Authority

1.  lsof | grep TCP

1.  dig redbrick.dcu.ie mx
2.  *   Hub bandwidth is maximum speed of connections.
    *   Switch does full duplex communication.
    *   Switch bandwidth is combined maximum speed of connections.

1.  *   ifconfig eth0
    *   netstat -rn
    *   *note values*
    *   ifconfig eth0 down
    *   ifconfig eth1 IP netmask NETMASK up
    *   Use "route" for each route.

1.  A router (or machine acting as such) translates addresses for outbound connections to have the address of the router. It receives all inboundpackets, retranslates back to appropriate local addresses, outputs.

1.  No direct inbound connections. Slower.

1.  *   Broadcast should be 136.206.15.255, ifconfig eth0 broadcast 136.206.15.255
    *   Netmask should be 255.255.255.0, ifconfig eth0 netmask 255.255.255.0
    *   Theres no default route to the gateway, route add default gw 136.206.15.254

1.  *   Inetd = The "Superserver", listens for connections and spawns off servers when and if they arrive.
    *   Standalone, servers listen for their own connections and are always running.
    *   Too much work for inetd to keep spawning off ftpd

1.  *   Port is already taken, use lsof
    *   You are trying to bind to a port less than 1024 and are not root

## 6\. Security (30 marks)

1.  Sends data via plaintext. Why this is bad - sniffing.

1.  cp /bin/sh /tmp; chmod 4755 /tmp/sh

1.  Computationally unfeasible to retrieve original value from signature, compute signatures if files and store on immutable media.

1.  Ask for student card, check against userdb. Politely refuse to do anything otherwise. Basically, show some basic cop-on.

1.  A basic firewall description. Filters based on ruleset which can base decisions on originating and destination IP, port, on protocol type, on flags (SYN, FIN, etc). Reference to stateful/stateless firewalls not *needed* but good.

1.  At the shortest and sweetest, no it's not. Damaged may be limited by user permissions, but worms could spread via vulnerable services running as privegleged users (c.f. lpd/statd/Ramen, etc).

1.  One all powerful user (root), limited configurability of access, difficulty of granting anything but all-or-nothing access. These are the basic points, it's largely based on demonstrating a good grasp of what's good and what's bad.

1.  RBAC - more finely-grained access control, e.g. allow a print-control role to kill, restart printer related services, run managment tools. Then allow a limited set of people to assume the print-control role.

1.  *cough* nmap, see what's their. Check arp cache. Check access points to redbrick subnet. When you find out, interview person. Try and get a look at machine before they have time to change anything. Make sure they are present when you examine it. Compile report. Check with CSD.

## 7\. General (30 marks)

1.  *   "ldd command" and see which libfoo it refers to

    *   set LD_LIBRARY_PATH="/usr/local/foo/lib" before running command

1.  signals (sigstop, sigcont)

1.  *   dump: backups entire filesystem, includes all data that tar may miss.
    *   tar: generally much more flexible in terms of list of files and exlusion patterns

1.  the 'file' command or try the test mode:
    *   gzip -t file
    *   bzip -t file(also accepted is just trying each possible decompressor on the file till one works, but above is neater!)

1.  From a dedicated daemon (atd) or from the system cron daemon every minute (atrun)

1.  *   System for receiving, storing and forwarding email across networks using protocols such as SMTP. Postfix used on prodigy.
    *   System for the local delivery of email. May include filtering and other processing capabilities. Procmail used on prodigy.

1.  Manipulation of magnetic tapes. any valid example of an mt command. tape device should be given on command line or mention that TAPE is used by default

1.  *   st0: block tape device
    *   rst0: raw tape device
    *   nrst0: no-rewind raw tape device

1.  *   reset
    *   stty sane
    *   local terminal emulator reset command

1.  /usr/include
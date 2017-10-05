---
title: 'Admin Test 2013 AGM'
---

<pre> _________________________________
/ Welcome to the 2013 admin test! \
\   By VadimCK, isaac702 and gw   /
 --------------------------------
--- Practical (40 Marks) ---

1\. (5 Marks)
Create a user 'ted' with a home directory of '/home/ted' 

adduser ted

2\. (5 Marks)
Make ted a member of 'harry' group and give that group write access to 
directory '/home/ted/shared' 

groupadd harry
chown ted:harry /home/ted/shared
chmod g+w /home/ted/shared

3\. (5 Marks)
Force the directory contents to be owned by the 'harry' group.

chmod g+s /home/ted/shared
chown -R ted:harry /home/ted/shared

4\. (10 Marks)
The VM you are using has a free unformated partition. Format this partion 
to be swap and make the VM mount the swap patition at startup.

mkswap /dev/sda3
swapon /dev/sda3

add the following to /etc/fstab:

/dev/sda3 none swap sw 0 0

5\. (15 Marks)
Create a cron job that will synchronise the contents of /etc/ every night 
to a remote server over ssh. (remote server details are provided on your 
handout)

crontab -e: 
add the following:
0 0 * * * rsync -avz -e ssh /etc user@backup:/home/user/backup

make ssh keys:
ssh-keygen -b 2048 -f /path/to/sshkeys
copy the public part to the backup server:
scp ./key.pub backup:/home/user/

ssh to backup server and add the public key into ~/.ssh/authorized_hosts
cat key.pub >> ~/.ssh/authorized_hosts

--- Scripting (40 Marks) ---

1\. (13 Marks)
We are replacing tcsh because it is shit. Find all users with tcsh, and 
change their shell to bash. Email the user to tell them of the change

#!/bin/bash

tcshusers=$(getent passwd | grep tcsh | cut -d: -f 1)
for user in $tcshusers
do
   chsh $user -s /bin/bash
   echo "We changed your shell" | mail -s "chsh" "$user@redbrick.dcu.ie"
done

2\. (13 Marks)
It has come to our attention that a number of users have been storing out 
of date lecture notes on their webspace.
We have been provided with a copy of each of the files.
Scan /webtree for any copies of these files and if they are world readable 
and not password protected email admins if one is found. (You can ignore 
users home directories for this question.)

#!/usr/bin/env python
import subprocess
import hashlib
import smtplib

from email.mime.text import MIMEText

#Many enhancements could be made to this, but It is at least correct. 
#This solution assumes that we cannot take into account the file extension.

#get a list of all the lecture files.
#This assumes they are in "./files"
findoutput = subprocess.check_output(
         ["find", "./files", "-type", "f"])
lecfiles = findoutput.split("\n")[:-1]

#md5 hashes the files and puts these hashes into a list
lecture_md5s = []
for f in lecfiles:
   lecture_md5s.append(hashlib.md5(open(f, "rb").read()).hexdigest())

#get a list of all world-readable files from /webtree
findoutput = subprocess.check_output(
         ["find", "/webtree", "-type", "f", "-perm", "/o+r"])
webtreefiles = findoutput.split("\n")[:-1]

#Make a dictionary of file paths to MD5 sums of the world-readable files 
#of /webtree
webtree_dict = {}
for f in webtreefiles:
   webtree_dict[f] = hashlib.md5(open(f, "rb").read()).hexdigest()

violations = []
for f, md5 in webtree_dict.iteritems():
   if md5 in lecture_md5s:
      violations.append(md5 + " " + f)

violations_string = "\n".join(violations)
msg = MIMEText(violations_string)
msg["subject"] = "world-readable lecture notes"
msg["from"] = "notesbot"
msg["to"] = "gw@redbrick.dcu.ie"

s = smtplib.SMTP("localhost")
s.sendmail("notesbot", "gw@redbrick.dcu.ie", msg)
s.quit()

3\. (13 Marks)
We believe that a number of users are abusing redbrick services.
Specifically they are running programs that are not allowed. Write a script 
that takes a list of usernames as an argument and will detect if they are 
running any of these programs. If you see the same user running banned 
programs more than 3 times automatically change their shell to disusered. 
Email admins to inform us of the users poor choices. (You may choose which 
programs are banned.)

#!/bin/bash

userlist=$1
bannedprocs="ssh|mutt|vim"
email="banned users were:\n\n"
for user in $userlist
do
   numprocs=$(pgrep -u $user -c $bannedprocs"")
   if [ $numprocs -gt 3 ] 
   then
      chsh $user -s /usr/local/shells/disusered
      email="$email $user"
   fi  
done
echo "$email" | mail -s "people got banned" admins@redbrick.dcu.ie

4\. Write a script to amuse me. (1 Mark)

figlet DONGS

--- General (30 Marks) ---

1\. What versions of ubuntu do we run on redbrick and why?
(2 Marks)
%"An LTS on a general server, because it is supported 5 years 
%from release" (1)
%1 "The Latest LTS on the development server, so the latest dev tools are
%available" (1)
%total: 2

2\. What does fail2ban do and why does redbrick use it? (2 marks)
%Fail2Ban scans logs and bans IPs that have frequent password failures.
%(1)
%Redbrick uses it to prevent people bruteforcing user logins. (1)
%total: 4

3\. What temperature should the server room be kept at? (1 Mark)
%16 Degrees Centigrade (1)
%Total: 5

4\. What does redbrick use the following for?
- Nagios (1 Mark)
- Lightweight Directory Access Protocol, or LDAP (1 Mark)
- Exim (1 Mark)
- Dirvish (1 Mark)
- Munin (1 Mark)
%Nagios: making sure services are running on our machines (1)
%LDAP: Authenticating users over various machines (1)
%Exim: Mail Transfer Agent (1)
%Dirvish: Backups(1)
%Munin: Graphing shit(1)
%Total: 10

5\. Why does catting a binary screw up your shell? How do you fix this?
(2 Marks)
%Catting a binary spits out control characters that change your shell 
%settings (1)
%the "reset" command (1)
%Total: 12

6\. How do you create a compressed tar archive? Give an example command. 
(1 Mark)
%"tar -cvzf balls.tar.gz /path/to/compress"(1)
%Total: 13

7\. What is strace for? (1 Mark)
%Allowing you to see what system calls a program is making(1)
%Total: 14

8\. What's a nice value. Tell me what the rules of changing them are for 
users and for root (3 Marks)
%process priority(1)
%users can only raise them(1)
%root can raise and lower them(1)
%Total: 17

9\. What does cron allow you to do? How do you edit it (2 Mark)
%Schedule processes to run at certain times(1)
%"crontab -e"(1)
%Total: 19 

10\. Tell me what command you would use to create a ssh tunnel from port 
1010 on your local host to port 2020 on morpheus, using azazel as your 
forwarder. Why might you need to use an ssh tunnel in general? (6 Marks)
%ssh -L 1010:morpheus.redbrick,dcu.ie:2020 user@azazel.redbrick.dcu.ie(5)
%to access a blocked port(1)
%Total: 25 

11\. How would you search for manpages? 2 ways please.(2 Marks)
%man -k(1)
%apropos(1)
%Total: 27

12\. What signal would you send a process to terminate it gracefully? How 
would you do this? (2 Marks)
%SIGTERM(1)
%"kill "(1)
%Total: 29

13\. What does DNS do?(1 Mark)
%Maps hostnames to IP addresses(1)
%Total: 30

--- Linux (30 Marks) ---)

1\. How do you check if a service is running? (1 Mark)
%"service  status"(1)
%Total: 31

2\. How would you search for a package on ubuntu? Give the command(1 Mark) 
%"apt-cache search "(1)
%Total: 32

3\. How do you determine what version of ubuntu is running?(1 Mark)
%lsb_release -a(1)
%Total: 33

4\. What effect does the sticky bit have when set on a directory? What 
2 directories are most commonly set with the sticky bit?(2 Marks)
%files created therein can only be deleted by their owners, the owners of 
%that directory, or root(1)
%/tmp and /var/tmp(1) (need both) 
%Total: 36

5\. What does setting the setuid bit of an executable do? name a file that 
has this set.(2 Marks)
%Causes that executable to be run as it's owner(1)
%/usr/bin/passwd(1)
%Total: 38

6\. What does Upstart (sometimes) do? What does it replace on some systems? 
(2 Marks)
%Starts processes on boot(1)
%init(1)
%Total: 40

7\. You're trying to back up mysql, but mysqldump fails because of broken 
tables or the moon not being in the correct phase or somesuch shite, How 
do you make a backup in spite of this?(2 Marks)
%tar /var/lib/mysql(2)
%Total: 42

8\. How do you check uptime? 2 ways please (2 Marks)
%the "uptime" command(1)
%"cat /proc/uptime"(1)
%Total: 44

9\. What are three advantages of installing packages from a package 
manager rather than building from source. What 2 commands do you use to 
keep packages up to date?(5 marks)
%Any three of:
%  Faster(1)
%  They are updated automatically(1)
%  They've been tested with ubuntu to some degree(1)
%  dependencies are managed(1)
%(3)
%"apt-get update"(1)
%"apt-get upgrade"(1)
%or whatever for some other packaging system(2)
%Total: 49

10\. What's a CVE database?(2 Marks)
%database of information security vulnerabilites?(2)
%Total: 51

11\. What would you use to check how much free space is on the system? Also, 
the command to check how much is used. What does the -h flag do for these 
commands?(3 Marks)
%df(1)
%du(1)
%makes it human-readable(1)
%Total: 54

12\. You've just written a python script and made it executable, but when 
you try to run it, this error comes up:
import: unable to open X server `' @ error/import.c/ImportImageCommand/366.
What is most likely causing this? How do you fix it(4 Marks)
%script is executing as a shell script and not a python script(2)
%add #!/usr/bin/env python as the first line of the script(2)
%Total: 58

13\. What command lets you list all running processes? (2 Marks)
%"ps aux"
%Total: 60

--- BSD (20 Marks) ---

01\. What is pf? What command would you use to add a new rule?(2 Marks)
%A firewall(1)
%pfctl -a (1)
%Total: 62

02\. The manpages on a freebsd box are broken. What command will help you 
fix this?(2 Marks)
%sysinstall(2)
%Total: 64

03\. What does a securelevel do?(2 Marks)
%When a securelevel is positive, the kernel disallows even root the ability
%to perform certain tasks(2)
%Total: 66

04\. What is the ports tree? How do you update it? How do you search it?
(6 Marks)
%A directory of makefiles and patches to make applications install and
%run on the BSDs(2)
%"portsnap fetch" then "portsnap update"(2)
%"cd /usr/ports" then "make search name="appname""(2)
%Total: 72

05\. Name a package management tool in freebsd other than ports.(2 Marks)
%pkg_add(2)
%Total: 74

06\. On OpenBSD, what partitions do the letters "a" and "b" refer to?
(2 Marks)
%a = / or root(1)
%b = swap(1)
%Total: 76

07\. Why does redbrick bother using the BSDs at all at all? (2 Marks)
%So some important boxes (pwsafe, firewalls) can have a different, 
%hopefully smaller set of vulnerabilites.(2)
%Total: 78

08\. How do you update the freebsd base system?(2 Marks)
%freebsd-update(2)
%Total: 80

--- Security (30 Marks) ---

01\. What is a buffer overflow and why are they bad? Where could they occur 
that is most harmful?(6 Marks)
%When a program doesn't check input length, it's possible to give it so 
%much data that it overwrites things on the stack. This is bad because 
%one can write arbitrary code into the return address of the stack, 
%which will execute when the function returns.(4)
%setuid executables(2)
%Total: 86

02\. What is a umask?(2 Marks)
%mask that sets the default permission of files and folders(2)
%Total: 88

03\. Why don't we use ftp and telnet?(1 mark)
%They're unencrypted(1)
%Total: 89

04\. What does /etc/hosts.allow specify?(2 Marks)
%which computers on your network can use services on your machine.
%Total: 91

05\. What is apparmor?(2 Marks)
%It restricts the installed software based on profiles.
%discresionary access control(2)
%Total: 93

06\. You find an unattended root terminal, give yourself a backdoor.(5 Marks)
%copy /bin/bash over the location of some binary that no one checks 
%use that when you wanna do root things.(5)
%Total: 98

07\. What utility allows you to encrypt and store login details? Give a 
command to display login details on cmdline for the entry "foo".(5 Marks)
%pwsafe(2)
%pwsafe -Eup foo
%Total: 103

08\. What do you do if an update that fixes a root exploit comes out?
(2 Marks)
%Schedule downtime and apply update(2)
%Total: 105

09\. How do you check for rootkits?(2 Marks)
%chkrootkit(2)
%Total: 107

10\. What is a chroot? Who can use a chroot?(3 Marks)
%operation that changes the apparent root directory for the current
%running process and it's children(2)
%root(1)
%Total: 110

--- Networking (30 Marks) ---

01\. Explain Subnetting. What's the subnet mask of a /23? How many hosts per 
subnet on it? (4 Marks)
%subnetting, allocating bits from the start of an IP address to act as the 
%network address and using the bits left to represent the subnet/hosts(2)
%255.255.254.0(1)
%510 or 2^9-2(1)
%Total: 114

02\. Difference between TCP and UDP please.(2 Marks)
%TCP - connection oriented, if connection is lost, server requests lost bit 
%(1)
%UDP - connectionless, no guarantee your data is gonna get there.(1)
%Total: 116

03\. What's a private IP address range? Give an example. 
What problem were these introduced to solve?(4 Marks)
%IP Address ranges that aren't routable over the global internet(1)
%192.168.0.0-192.168.255.255(1)
%IPv4 exhaustion(2)
%Total: 120

04\. What does NAT do?(2 Marks)
%It associates one or many (usually private) IPs with a single public IP(2)
%Total: 122

05\. Explain, in 5 points, how DNS works.(5 Marks)
%You need a domain name's IP.(1)
%You check the DNS cache(1)
%if no joy, you ask the root dns nameserver(1)
%if no joy, ask server for TLD of domain name e.g. ie nameserver(1)
%repeat this for each bit of the domain name e.g. dcu.ie, rb.dcu.ie(1)
%Total: 127

06\. What port do the following listen on?(5 Marks)
   -SSH
   -HTTP
   -HTTPS
   -DNS
   -SMTP
%22(1)
%80(1)
%443(1)
%53(1)
%25(1)
%Total: 132

07\. What is a Virtual Private Network? How does it offer security?(4 Marks)
%VPN - enables a remote computer to communicate with a network as if it
%were on that network.(2)
%It provides security through encryption(2)
%Total: 136

08\. What is port knocking?(4)
%Sending packets to a series of closed ports on a firewall that opens a 
%previously closed port(4)
%Total: 140

--- Filesystems (30 Marks) ---

01\. 192.168.0.24:/storage /storage  nfs     nosuid,nodev,soft,intr,rw,
rsize=65536,wsize=65536 0  0
What file is this from? Explain what it means.(7 Marks)
%/etc/fstab(1)
%file system (mount /storage located at that IP)(1)
%mount point (put it at /storage on this machine's file system)(1)
%filesystem type (it is a network file system)(1)
%Options (must explain at least one to get the mark)
%  nosuid=block operation of suid bits(1)
%  nodev=don't interpret block special devices(1)
%  soft=for nfs, return error if server doesn't respond(1)
%  intr=allows nfs requests to be interrupted(1)
%  rw=read/write(1)
%  rsize=max size of read(1)
%  wsize=max size of write(1)
%Dump freqency (never archive this partition)(1)
%pass number (don't fsck with this at boot)(1)
%Total: 147

02\. What are the following?:
i  ) ctime
ii ) atime
iii) mtime
(3 Marks)
%ctime: time of last change(1)
%atime: time of last access(1)
%mtime: time of last modification(1)
%Total: 150

03\. What is an inode?(1 Mark)
%An inode is a data structure that stores all information about a filesystem
%object except it's filename and content.(1)
%Total: 151

04\. What is /proc for? what's /etc for?(2 Marks)
%/proc -a virtual filesystem which is an interface to interact with the 
%running kernel (1)
%/etc - config files(1)
%Total: 153

05\. Name three different filesystems (not different versions of fat) and 
tell me a feature of each?(6 Marks)
%ext3/4 - journaling file system, default in ubuntu(2)
%nfs - network file system, works over network(2)
%reiserfs - kills your wife(2)
%ntfs - Windows primarily(2)
%Total: 159

06\. How would you check a disk for errors?(3 Marks)
%fsck(3)
%Total: 162

07\. What's the difference between hard and soft links?(4 Marks)
%hard link: a link to a file with the same inode as the linked file(2)
%soft link: a llink to another file path on the filesystem(2)
%Total: 166

08\. What is in /etc/mtab? What command would you use to display it?(2 Marks)
%all currently mounted filesystems(2)
%mount(2)
%Total: 170

--- Hardware (20 Marks) ---

01\. What's an IP-KVM? Why is is deadly?(2 Marks)
%Lets you have keyboard and mouse input for multiple machines at once 
%remotely.(1) 
%Deadly because it's very useful for remote maintainance.(1)
%Total: 172

02\. What is a UPS? How does one help in the event of a powercut?(2 Marks)
%Uninterruptable Power supply(1)
%It allows us to shut the servers off sensibly rather than everything 
%just powering down.(1)
%Total: 174

03\. Explain RAID 0, 1 and 5.(6 Marks)
%RAID0: improved performance but no redundancy. more disks=higher risk of 
%failure.(2)
%RAID1: data written identically to two drives, array can tolerate 1 drive 
%dying.(2)
%RAID5: Needs all drives but 1 to work to operate, can tolerate 1 drive 
%dying.(2)
%Total: 180

04\. Why is a management card in a server useful?(2 Marks)
%To be able to remotely manage just that server(2)
%Total: 182

05\. What does SAN stand for? Explain a bit.(2 Marks)
%Storage Attached Network(1)
%Attach storage devices to servers so they look like they're attached 
%directly(1)
%Total: 184

06\. What are 2 benefits of SAS over SATA?(6 Marks)
%Faster transfer speed(3)
%longer cables possible(3)
%Total: 190

--- Bonus ---

1\. Who is the best electronic dance music artist? 
%No answer, I just want music recommendations

2\. If you are elected, what nasty things will you do to dever's homedir?
(bonus points if he ends up in prison/dead because of it)

3\. Who loves orange soda?
%Kel loves orange soda

4\. Is it true?
%I do, I do, I do-oooo!!!

5\. Haus' Ma. Would ye?
%who can turn down that bargain?</pre>

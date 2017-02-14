---
title: 'Admin Test 2012 AGM'
---
252 marks total
__________________________________



-------------------------------
Scripting (40 marks)
-------------------------------

1 - gamma refuses to fulfill the scripture and run for admin to follow in his brother's footsteps.
The gods have been angered that they are being denied the second coming of atlas. They have given
you the task of killing all of gamma's processes every 5 minutes, however, you may not use pkill, 
pgrep or killall. Go! (9 marks)

2 - In a move to stamp out the LOLSORANDUM crew haus has asked you to write a script that will:
- Get a list of all users in CA1
- Find any files they own that contain the substring "lol" (case insensitive) 
- Delete the files
- Email the path of each file you delete to the member of "the crew" and make an insulting	
remark about their mother. (15 marks)

3 - Write a monitoring script that writes to syslog.
It should have a start & stop operation.
'start' begins monitoring of iostat and load_avg.
It should use variables $IO_INTERVAL & $LOAD_AVG_INTERVAL to determine when 
it writes each to syslog. 
'stop' should kill every instance of monitoring. (15 marks)


4 - Write a script to amuse me (1 mark)


-------------------
Practical (40 Marks)
-------------------

1. I want a /var/tmp partition, but forgot to create one. Motherfucker.
Resize /home for me so we have 1G free space. Create a partition in this
free space, and an ext4 filesystem. Make sure it mounts on boot. (30
marks)

2. The Vms are running linux-server. Install linux_generic and make it
the bootable kernel.(10 marks)


-------------------
General (31 marks)
-------------------

1 - What's UNSCD? What does it do? (2 marks)

2 - You've catted a binary and now your terminal has had a spa attack. What command will fix it? (1 mark)

3 - What's RCS? Why would it ever be used? If you're fun, what do you enjoy doing because you 
"can't be dealing with checking files in and out" to get around it? 
What do you hit him with when he does this? (3 marks)

4 - Give a situation in which you would use the following commands:
renice
swapon 
dig
telnet
(1 mark each)

5. What are the following;
- Exim
- NFS
- Dirvish
- Nagios
(1 mark each)

6. You have written a script which you want to execute at 5 minutes past midnight every thursday. 
What would you use for this? What command would you use to modify it? 
What would the configuration line be (Assume the script is /opt/lol.sh)? (3 marks)

7. Ideally what temperature should the server room be kept at? (1 mark)

8. Give me 2 different ways of searching for a specific man page? (1 mark)

9 - A user wants to upload an iso of damn vulnerable linux, but he isn't allowed own files that large
What file do you need to edit to change this? (1 mark)

11 - What is an IP KVM? Why are they awesballs? (2 marks)

12 - How would you view the current mail queue? (exim specific answer plx) (3 marks)

13 - How would you suspend a process? What signal would you send it? 
How would you resume it? What signal would you use? (2 marks)

14 - What is an LDIF? What tool would you use to generate an LDIF? (2 marks)

15 - Which is the shit one, useradd or adduser? What makes the other one shit? (2 marks)

---------------------
*NIX/Linux (25 marks)
---------------------

1 - Where are crontabs located? (1 mark)

2. We compress old log files to save space. You need to view one of these compressed log files. 
How do you go about this without uncompressing the file first. (1 mark)

3. apt-get install fails to complete sucessfully on a new server. What could be wrong? (2 marks)

4. You have a file which you want to add to every new users home directory when it is created. 
What directory should this file go in and what do you have to do when creating an account for it to take affect?
(2 marks)

5. How do you assign multiple ip addresses to a network interface? (1 mark)

6. You are trying to umount a filesystem (/storage) however it is currently busy. 
How can you find out what user/process is using it and kill it? How can you umount it without killing it?
(2 marks)

7. What linux utility can you use to see what library calls a process makes? (2 marks)

8. Carbon just shutdown unexpectedly. What can be done to identify what went wrong? (1 marks)

9 - What command can you use to view boot messages? (2 marks)

10 - What is /etc/nsswitch.conf used for? When would you need to edit this file? (3 marks)

11 - Explain briefly what an nrpe plugin is. (2 marks) 

12 - chroot. What be it? When might you find it useful? (2 marks)

13 - What command would you use to show the amount of free space on a parition?(1 mark)

14 - Why should you avoid using kill -9? (1 mark)

15 - What's /dev/kmem? What's /dev/mem? Explain the difference? (2 marks)

-------------------------------
Files & Filesystems (30 marks)
-------------------------------

1 - Briefly explain what ctime, mtime and atime are in regards to a file.
How would you retrieve each of these? (4 marks)

2 - What are these filesystems used for, on an average linux installation? (3 marks)
/proc
/bin
/etc

3 - Name 3 filesystems. different filesystem versions within the same family 
of filesystems will not be accepted (3 marks)

4 - Give at least one difference between each filesystem. (3 marks)

5 - Explain as verbosely as you can the difference between a hard link and a soft link. 
What command creates each of them? (3 marks)

6 - Why are hard links & incremental backups best buds? (2 marks)

7 - What command will give me the UUID of a partition? (The answer does not involve cat) (2 marks)

8 - What's an inode? (1 mark)

9 - How would you find the inode number of a file? How would you delete a file by its inode number?
Why would you want to? (4 marks)

10 - What goes in /etc/fstab? How about /etc/dfstab? and /etc/mtab? (3 marks)

11 - drwxrwxrwt 3 root root 4096 2012-03-26 15:27 /var/tmp

What does the t mean? (1 marks)

12 - What does fsck do? When would you use it? (2 marks)

-----------------------------
(Open|Free)BSD (20 marks)
-----------------------------

1 - What's a securelevel? Briefly explain how it works. (2 marks)

2 - What is a jail? When would you use one? (2 marks)

3 - OpenBSD's installer is seperating your disk into alphabetically numbered sections. 
What's a is root, b is swap, but what's c? (2 marks)

4 - You're running pf on OpenBSD. You've changed the config and restarted pf. Why aren't the new rules you've added
showing up? (2 marks)

5 - How do you update the ports tree on FreeBSD? (2 marks)

6 - FreeBSD doesn't have a /etc/init.d and no upstart either, where the jesus are its startup scripts? (2 marks)

7 - Okay, you've figured out where the startup scripts are on FreeBSD but it turns out you actually want to restart
ssh on OpenBSD. Give me the command to do it. (2 marks)

8 - What file do you have to edit to change the default route on FreeBSD? (2 marks)

9 - You're trying to install something using pkg_add but it's just hanging there.
Name 2 things you should do to try and fix it. (2 marks)

10 - How do you delete a user on OpenBSD? (2 marks)

---------------------
Networking (24 Marks)
---------------------

1. Yer auld wan needed help with her NAT, and I gave it to her. What is
NAT? Why is it useful? Where would you see it used? 2 marks

2. Redbrick have two switches. What OS are they running? Give me the
steps to see the port configuration on a switch running this OS. 4 marks

3. Speaking of switches, What is a switch? How does it work? On what OSI
layer? Compare to a router and a hub. 4 marks

4. WHO HAS any idea about ARP? What is it? How would I use it to give an
IP address to a device? How could I take advantage of ARP for a man in
the middle attack? 4 marks

5. Which has the highest propigation speed, fibre, coax, or cat6?
Highest bandwidth? 2 marks

6. Redbrick has a /23. We've broken this up into two /24s, how many
useable IPs do we have? 1 mark

7. What is a VLAN? How do redbrick use VLANS? Can VLANs talk to each
other? 2 marks

8. How many IP addresses can we have under IPv4? IPv6? 1 mark

9. What ports do SNMP, SMTP, LDAP and TFTP run on? 4 marks

-------------------
Hardware (31 marks)
-------------------

1. How would I find the UUID of a disk? 2 marks

2. What is a DAS? What do redbrick use one for? Compare and contrast to
a NAS and a SAN. 5 marks

3. Redbrick are getting a GPU for people to program on. What are the
advantages of GPGPU programming? Why? 3 marks

4. SATA, SAS and SCSI. What are they? Why would I use each? 4 marks

5. What is the svm flag in /proc/cpuinfo? What do we want it? 2 marks

6. What is an IP-KVM and why do we use one? 2 marks

7. What RAID configuration would you use for a cluster of 4 1TB disks
housing your warez? Why? 3 marks

-------------------
Security (31 marks)
-------------------
1. Why are running services such as FTP, Telnet & POP a bad idea? (2 marks)

2. You have just become the a system adminstrator and have been given root. What can you do to secure your account? (2 marks)

3. Name 3 files which should only be readable by root? (3 marks)

4. When scripts are executed by the webserver on redbrick they are run under suexec and suphp. Why is this and why is it a good thing? (3 marks)

5. What is a firewall? Name two firewalls that redbrick have on their systems. How do you list the current rules on them both? (5 marks)

6. What is wrong with the following path?
.:/home/user/bin:/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin:/usr/games
How would an attacker go about exploting this? (2 marks)

7. You left a root terminal unlocked and someone has used it to do something. The history files has been deleted. How do you go about finding out what they did? (5 marks)

8. You have just installed a new linux server. Name 3 things you should do to secure this system. (3 marks)

9. What are AppArmor and SELinux used for? (2 marks)

10. Name 2 security mailing lists that you should be subscribers to as a redbrick root holder. (2 marks)

11. What is wrong with setuid scripts and why should they be avoided? (1 mark)

--------------------
Bonus round 
--------------------
1. Which HTTP response code best describes dilligaf and why?

2. Cans during the test, is this win?

3. MDMA, LSD, Cannabis, Crystal meth. Which one of these best describes you and why?

4. WHAT DID THE 5 FINGERS SAY TO THE FACE?
The first one to give gw the correct answer gets a can.

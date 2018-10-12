---
title: 'Admin Test 2013 EGM'
---

<pre>Redbrick Admin Exam 2013
--------------------------------------------------

We have created an admintest2k13 folder in your homedir.
answer all questions in a text file in that directory.
(you will be judged on your choice of text editor)

----------------------------------
Scripting (40 marks)
----------------------------------
1)     Find and kill all running processes named hax0re.py (4 marks)

2)     Create an alphabetically sorted, unique list of all members currently active on your current machine(5 marks)

3)     A recent vulnerability has been discovered. Find all the symlink files in /home owned by root, named 'public_html'</pre>

<pre>and chmod them to the correct user:group(15 marks)</pre>

<pre>4)     Write a script that takes usernames and password hashes from /etc/shadow. The script should then try and crack </pre>

<pre>them using john the ripper. If the password is found in under 5 minutes email the user their password and tell them </pre>

<pre>it's shit (15 marks)

5)     Write a script to amuse me. (1 mark)

----------------------------------
General (30 marks)
----------------------------------

1) 	What's RCS? Why might you use it? (2 marks)

2)	How would you check what kernel you are running? (1 mark)

3)	What is LDAP? What is an LDIF and why would you use one? (3 marks)

4)	What's a package repository? What are they used for? (2 marks)

5)	What protocol might you use to allow a filesystem to be mounted over a 
            network? (1 mark)

6)	What temperature should the server room be kept at? (1 mark)

7)	A lot of the servers on Redbrick run Ubuntu 12.04\. How would you update an Ubuntu         
server and its packages? (1 mark)

8)	You need to quickly backup a file, How do you copy a file to a remote server via command line? (1 marks)

9)	What's a PDU and why does a server room need them? (2 marks)

10)	What is a UPS used for? (1 marks)

11)	What is a DRAC? (1 mark)	

12)	What is Dirvish?(1 mark)

14)	Why is Nagios important, where can you find it ?(2 marks)

15)	When racking a UPS where in the rack should it be mounted? (1 mark)

16) 	What are the DCU proxy details? Protocol, host and port required (1 mark)

17)	How would you view the current Mail Queue, Exim Specific answer please(2 marks)

18)	You accidentally messaged a  root password to someone in IRC, what do you do? (2 marks)

19)	What does strace do?(2 marks)

20)	What  does GRUB stand for?   (1 mark)

21)	What does lsof do?	(1 mark)

22)	What is Munin? (1 mark)

23)	How did koffee lock your answers and test when he went to pee? give a suitable solution (2 marks)
----------------------------------
Linux (25 marks)
----------------------------------

1)	What information may you find in /proc? (1 mark)

2) 	How would you list all of the currently loaded kernel modules (1 mark)

3) 	A user has somehow renamed a file to a name with strange unicode characters 
	and you cannot delete that file by name. How would you go about deleting
	that file? Give commands with parameters. (4 marks)

4)	How would you enable ipv4 forwarding in linux? (1 marks)

6.	What is logrotate? What does it do? Why is it used? (3 marks)

7.	What is wtmp? (2 marks)

8.	Give a command to set the default route? (2 marks)

9.	What is fail2ban? Is it a good idea to run it on your server, why? (2 marks)

10.	What command will show me the active iptables config? (2 marks)

11.	You are compiling hybrid-ircd from source. You should really make a package
	of this when installing it. Describe how you would do this. (2 marks)

12.	AppArmour. Explain. (2 marks)

13.	You want to create a system user to be used by a daemon. What do you set its
	shell to? (1 mark)

----------------------------------
BSD (23 marks)
----------------------------------

1) 	What is the command to list the currently loaded pf rules? (2 marks)
2) 	What would the following pf rule do?  (2 marks)

block in on $ext_if proto tcp from any os "Windows"

3) 	Paritions on OpenBSD are labeled using the characters 'a' through 'p'.
   	What are the characters 'a', 'b' and 'c' used for? (3 marks)
4) 	How do you update the ports tree on FreeBSD? (2 marks)
5) 	Where are the startup scripts on BSD? How do you add something to run on startup? (3 marks)
6) 	What is a Jail? What would you use one for? (3 marks)
7) 	What file would you modify to change the default router? (2 marks) 
8) 	Why does the admin box run FreeBSD? Can you name the admin box? (2 marks)
9) 	What is syctl? Why would you use it? (2 marks)
10) 	What does growfs do? (1 mark)

----------------------------------
Security (30 marks)
----------------------------------

1) 	A user has launched a new website for another society. They type ls -l and the following is outputed;
silly@azazel (~/public_html/) -> ls -l                                  [8:25]
total 12K
-rwxrwxrwx 1 silly member  116 2013-10-21 19:55 blah.php
-rwxrwxrwx 1 silly member    50 2013-10-21 19:25 database.php
-rwxrwxrwx 1 silly member 1593 2013-10-21 19:17 index.php
How would a regular user go about exploiting this? (3 marks)

2) 	What is port forwarding? Give an example where/why this would be used? (3 marks)
3) 	What are SSH keys? What command would you use to configure one? (3 marks)
4) 	Apache runs as the www-data user, yet users scripts run as themselves. How is this done? ( 2 marks)
5) 	Briefly Explain a buffer overflow? (2 marks)
6) 	What is chroot? What about fakeroot? (2 marks)
7) 	What is wrong with the following?(1 marks)
   mysql -u root -h mysql.internal -p=ThisIsTheRootPassword redbrickdb
8)	 What is a ulimit? Where do you change these values? (2 marks)
9) 	Briefly explain each of the following; (1 mark each)
   - /etc/passwd & /etc/shadow
   - Apache.s mod_rewrite
   - AppArmor
   - .htaccess
   - SSL
10) 	Our servers are being hammered by the chinese. What do you do?(2 marks)
11) 	What is SELinux? (1 marks)
12) 	Name 2 security mailing lists that you should be subscribers to as a redbrick root holder. (2 marks)
13) 	maK stupidly posted a very recent kernel privilege escalation exploit into #lobby, what do you do? (1 mark)

-------------------------------------------
Networking (30 marks)
-------------------------------------------

1) 	What is a privileged port? Name a service that uses one, and what port does it run on? (3 marks)
2) 	How would you go about diagnosing a DNS issue? How do you find the authoritative name server? </pre>

<pre>Name 2 useful DNS tools?(4 marks)
3) 	What program would you use to check for open ports on a system? Give an example of how you could list </pre>

<pre>pids/ports with this utility? (2 marks)
4) 	What is NAT? Why would you use it? (2 marks)
5) 	What is a virtual interface? What file would you modify to add one? (3 marks)
6) 	Briefly explain what a CIDR network is? (1 marks)
7) 	What is a VLAN, what are they used for? (2 marks)
8) 	What is OSPF? How does it relate to BGP? (2 marks)
9) 	What is port-knocking? What is it useful for? (2 marks)
10) 	What ports are the following on;  (5 marks)
   - ssh
   - imap
   - irc
   - ldap
   - dns

11) 	Explain the difference between Hubs and Switches. (2 marks)
12) 	HEAnet have given us a /56 IPV6 Address. How would you work out how many addresses we could possibly have? </pre>

<pre>(2 marks)

--------------------------------------------
Files & Filesystems (30 marks)
--------------------------------------------

1) List 3 (incompatible) filesystems. Give an advantage and disadvantage of each. (6 marks)
2) What is an inode? Why would you limit the number of them a single user can create? (3 marks)
3) How would you change the timestamp on a file to Jan/1/1970 00:00\. (1 mark)
4) Explain some of the options on the following two lines. What file would you find them in? (4 marks)
192.168.0.9:/backup  /backup  nfs   nosuid,nodev,soft,intr,ro,noquota   0  2
tmpfs                   /tmp                tmpfs   size=4G,nosuid        0 0

5) What command would you run to check a disk for errors? (1 mark)
6) You have added a new disk to your system. Describe the steps you would take to set it up as /var/log (3 marks)
7) Briefly state what ctime, mtime and atime represent? (3 marks)
8) What's the difference between a symbolic link and a hard link? What command would you use to create one? ( 3 marks)
9) The /var directory on your system appears completely full however as root you are still able to create files. 
   - Why is this?
   - What option can you change to solve the problem.
   - What can you do if the above doesn't solve the problem.
   (4 marks)

10) What is the effect of setting a sticky bit on a directory? (2 marks)

--------------------------------------------
Hardware (32 marks)
--------------------------------------------

1) Upon entering the server room you start hearing a clicking noise coming from one of the servers. What could it be?</pre>

<pre> What commands could you run to identify the issue? (3 marks)
2) What is a UPS? Why is it a good thing? (3 marks)
3) Briefly describe Hardware RAID and Software RAID? Which is better? Why? (4 marks)
5) What architecture is Murphy? What is it good at? (2 marks)
6) When you are buying a server, is a management card important? Why? (2 marks)
7) Redbrick is looking at buying a set of TCP/IP controlled PDU's. Why are they useful and why would we want them </pre>

<pre>over a non TCP/IP controlled PDU. (2 marks)
8) Explain what a server being 1U means? (2 marks)
9) What is an IP KVM? Why is it a good thing to have? (2 marks)
10) SATA, SAS and SCSI. What are they? Why would I use each? (4 marks)
11) When you first go into the server room, there are 3 CAT5e cables coming from the back of each server, Why? </pre>

<pre>Where are they going? (3 Marks)
12) What is DAS? Do we have one? If so where is it? (3 marks)
13) If I told you to connect something to a NIC what would be connecting? (2 marks)

--------------------------------------------
BONUS ROUND!
--------------------------------------------

1) User Privacy is of utmost importance, if it wasn.t, what would you do?
2) How do you shot web?
3)mak & koffee are great admins, How would you express your gratitude to them?

we.re feeling mean.
----------------------------------
Practical (40 marks)
----------------------------------
We have given you a VM.

to get at your VM ssh -L 5900:136.206.16.1:6006 zergless@login.redbrick.dcu.ie

once you have logged in connect your VNC Client of choice to 127.0.0.1:5900

1\.  Configure iptables so that only traffic from the 136.206.16.0/24 subnet comes through. then configure it so that only </pre>

<pre>ssh and http & https are allowed to get to the vm. (15 marks)

2.	Configure apache to also listen on port 81\. When a user vists the webserver on port 81 with the path /admin use </pre>

<pre>mod_rewrite to redirect them to http://google.ie. (15 marks)
</pre>

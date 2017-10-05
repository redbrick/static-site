---
title: 'Admin Test 2012 EGM'
---

----------------------------------  
Scripting (40 marks)  
----------------------------------  

1) It has come to our attention that a number of users are running services that are listening on network ports.  
You should write a script that will kill any proccesses that are listening on ports and running as users in the members of associate group. (9 marks)  

2) An attacker has hacked Redbrick and gained access to root account. You are preparing to reinstall the primary services and login box. Before that you want to ensure that users file have not been modified.  
Compare the files in /storage with the latest backup copy in /backup.  
Email a list of the files that differ to admins. Include the path to the file and the time it was modified. (15 marks)  

3) Write a script that takes usernames and password hashes from /etc/shadow. The script should then try and crack them using john the ripper. If the password is found in under 5 minutes email the user their password and tell them it's shit (15 marks)  

4) Write a script to amuse me. (1 mark)  

----------------------------------  
Practical (40 marks)  
----------------------------------  
We have given you a VM each.  

1. slapd (LDAP Server) is already installed and running on these VMs. Add a user to this ldap server. (15 marks)  

2. Configure apache to also listen on port 81\. When a user vists the webserver on port 81 with the path /admin use mod_rewrite to redirect them to http://google.ie. (15 marks)  

3. You will be given a backup tar of a user's home directory. Extract this tar, in the correct directory, to restore their files. http://www.redbrick.dcu.ie/~isaac702/homedir.tar.gz (10 marks)  

----------------------------------  
General (30 marks)  
----------------------------------  

1. What's RCS? Why might you use it? (2 marks)  

2. How would you check what kernel you are running? (1 mark)  

3. You are logged in remotely and you notice that the all of your servers are  
running very hot. What might be going on? Is it likely to be a server  
hardware fault? (2 marks)  

4. What's a package repository? What are they used for? (2 marks)  

5. What protocol might you use to allow a filesystem to be mounted over a  
network? (1 mark)  

6. What temperature should the server room be kept at? (1 mark)  

7. A badger has broken into the server room and managed to destroy the few  
blocks on the hdd that held find and ls. How do you, now, see what's in the  
current directory? (1 mark)  

8. What's OpenVZ? How is it different to KVM? Should you allow users login  
access on a OpenVZ container? (3 marks)  

9. What's a PDU and why does a server room need them? (2 marks)  

10. A red light starts flashing on your UPS, what could this mean? (1 marks)  

11. What do all of these have in common - ALOM, ILOM, DRAC? When might you use  
them (2 marks)  

12. What is RAID 10? Why is it a good idea to use RAID 10? (2 marks)  

13. What do these stand for? (4 x 1 marks)  
- LDAP  
- NIC  
- SAN  
- KVM  

14. What are ulimits? Why do we use them in redbrick? (2 marks)  

15. When racking a UPS where in the rack should it be mounted? (1 mark)  

16\. What are the DCU proxy details? Protocol, host and port required (1 mark)  

17. What is an ldif? Give a situation where you would create or use  
one. (2 marks)  

----------------------------------  
Linux (25 marks)  
----------------------------------  

1\. You need to check if a network interface is working and active on one of the  
servers. What keyword are looking for in ifconfig. (It isn't UP) (1 mark)  

2\. How would you list all of the currently loaded kernel modules (1 mark)  

3\. A user has somehow renamed a file to a name with strange unicode characters  
and you cannot delete that file by name. How would you go about deleting  
that file? Give commands with parameters. (4 marks)  

4. How would you find the UUID of the partition /dev/sdb1? (1 marks)  

5. How would you enable ipv4 forwarding in linux? (1 marks)  

6. What is logrotate? What does it do? Why is it used? (3 marks)  

7. What is wtmp? (2 marks)  

8. Give a command to set the default route? (2 marks)  

9. What is fail2ban? Is it a good idea to run it on your server, why? (2 marks)  

10. Munin is awesome! why? (2 marks)  

11. You are compiling hybrid-ircd from source. You should really make a package  
of this when installing it. Describe how you would do this. (2 marks)  

12. AppArmour. Explain. (2 marks)  

13. You want to create a system user to be used by a daemon. What do you set its  
shell to? (1 mark)  

----------------------------------  
BSD (23 marks)  
----------------------------------  

1) What is the command to list the currently loaded pf rules? (2 marks)  

2) How would you set a service to start on boot? (2 marks)  

3) Paritions on OpenBSD are labeled using the characters 'a' through 'p'.  
What are the characters 'a', 'b' and 'c' used for? (3 marks)  

4) You want to install irssi from ports. What command would you use to search for it? How would you install it? (3 marks)  

5) What command would you use to update ports? What about the base system? (3 marks)  

6) What is a Jail? What would you use one for? (3 marks)  

7) What file would you modify to change the default router? (2 marks)  

8) You have just been given root and created an account on our BSD boxes. However you are unable to 'su'. Why? (2 marks)  

9) What is syctl? Why would you use it? (3 marks)  

----------------------------------  
Security (29 marks)  
----------------------------------  

1) A user has launched a new website for another society. They type ls -l and the following is outputed;  

isaac702@azazel (..lic_html/wordpress) -> ls -al  
drwx--x--x 35 isaac702 committe 4096 2012-09-26 23:56 ..  
-rw-r--r-- 1 isaac702 committe 397 2008-05-25 21:33 index.php  
-rw-r--r-- 1 isaac702 committe 16899 2011-06-08 19:18 license.txt  
-rw-r--r-- 1 isaac702 committe 9202 2012-01-03 17:01 readme.html  
-rw-r--r-- 1 isaac702 committe 4268 2011-10-20 15:40 wp-activate.php  
drwxr-xr-x 9 isaac702 committe 4096 2012-01-03 20:53 wp-admin  
-rw-r--r-- 1 isaac702 committe 40272 2011-10-28 16:48 wp-app.php  
-rw-r--r-- 1 isaac702 committe 274 2010-11-20 21:44 wp-blog-header.php  
-rw-r--r-- 1 isaac702 committe 3982 2011-09-30 18:18 wp-comments-post.php  
-rw-r--r-- 1 isaac702 commitee 3200 2010-11-01 15:45 wp-config.php  
-rw-r--r-- 1 isaac702 committe 3177 2010-11-01 14:45 wp-config-sample.php  
drwxr-xr-x 4 isaac702 committe 49 2012-01-03 20:53 wp-content  
-rw-r--r-- 1 isaac702 committe 2684 2011-09-09 20:59 wp-cron.php  
drwxr-xr-x 8 isaac702 committe 4096 2012-01-03 20:53 wp-includes  
-rw-r--r-- 1 isaac702 committe 1997 2010-10-23 13:17 wp-links-opml.php  
-rw-r--r-- 1 isaac702 committe 2546 2011-11-15 15:47 wp-load.php  
-rw-r--r-- 1 isaac702 committe 27695 2011-11-23 07:03 wp-login.php  
-rw-r--r-- 1 isaac702 committe 7777 2011-08-05 17:57 wp-mail.php  
-rw-r--r-- 1 isaac702 committe 413 2011-09-19 05:17 wp-pass.php  
-rw-r--r-- 1 isaac702 committe 334 2010-12-09 18:02 wp-register.php  
-rw-r--r-- 1 isaac702 committe 9913 2011-10-18 20:37 wp-settings.php  
-rw-r--r-- 1 isaac702 committe 18545 2011-11-15 20:44 wp-signup.php  
-rw-r--r-- 1 isaac702 committe 3702 2010-02-24 20:13 wp-trackback.php  
-rw-r--r-- 1 isaac702 committe 3266 2011-04-17 09:35 xmlrpc.php  

How would a user go about exploiting this? (3 marks)  

2) What is a VPN? Give a example where one would be used. (2 marks)  

3) What are SSH keys? What command would you use to configure one? (3 marks)  

4) Apache runs on port 80 but it runs as the www-data user. Why is this unusal & how is it done?  
( 3 marks)  
5) Explain a buffer overflow? Explain how it can be used to comprise a system. (3 marks)  

6) What is chroot? What about fakeroot? (2 marks)  

7) What is wrong with the following?  
mysql -u root -h mysql.internal -p=ThisIsTheRootPassword redbrickdb  
(2 marks)  

8) What is a ulimit? How would you go about changing one? (2 marks)  

9) Briefly explain each of the following; (1 mark each)  
- /etc/passwd & /etc/shadow  
- suPHP  
- AppArmor  

10)  
isaac702@azazel (/usr/bin) -> ls -ld /usr/bin/passwd  
-rwsr-xr-x 1 root root 42856 2011-02-14 22:11 /usr/bin/passwd  
^  
What does the s mean? Why can this be considered insecure? (3 marks)  

11) You notice the IP address 136.206.15.150 is currently in use. This is a Redbrick IP address and usually isn't in use. What would you do to identify the machine and remove it from the network. (3 marks)  

-------------------------------------------  
Networking (31 marks)  
-------------------------------------------  

1) What is a privillaged port? Name a services that uses one, and what port does it run on? (3 marks)  
2) Briefly expalin the following in relation to DNS;  
- TTL  
- CNAME  
- MX  
- AAAA  
(4 marks)  
3) What program would you use to check for open ports on a system. (1 mark)  
4) Outline a few differences between TCP and UDP? Give a example of where each would be used. (3 marks)  
5) What is a virtual interface? What file would you modify to add one? (3 marks)  
6) Briefly explain what a CIDR network is? Why is it an improvement over Classful networks. (3 marks)  
7) Name 2 commands that could be used to query DNS? (2 marks)  
8) What is OSPF? How does it related to BGP? (2 marks)  
9) What program generates the following output? Explain what it means? Note that ssh has replaced the port number. How does it know this? (3 marks)  
Proto Recv-Q Send-Q Local Address Foreign Address State  
tcp 0 0 192.168.0.13:37403 azazel.redbrick.dcu:ssh ESTABLISHED  

10) What ports are the following on;  
- ssh  
- imap  
- irc  
- ldap  
(4 marks)  
11) Explain the difference between Hubs and Switches. (3 marks)  

--------------------------------------------  
Files & Filesystems (30 marks)  
--------------------------------------------  

1) List 3 (incompatible) filesystems. Give an advantage and disadvantage of each. (6 marks)  
2) What is an inode? Why would you limit the number of them a single user can create? (3 marks)  
3) How would you change the timestamp on a file to Jan/1/1970 00:00\. (1 mark)  
4) Explain some of the options on the following two lines. What file would you find them in? (4 marks)  
192.168.0.9:/backup /backup nfs nosuid,nodev,soft,intr,ro,noquota 0 2  
tmpfs /tmp tmpfs size=4G,nosuid 0 0  

5) What command would you run to check a disk for errors? (1 mark)  
6) You have added a new disk to your system. Describe the steps you would take to set it up as /var/log (3 marks)  
7) Briefly state what ctime, mtime and atime represent? (3 marks)  
8) What's the difference between a symbolic link and a hard link? How command would you use to create one? ( 3 marks)  
9) The /var directory on your system appears completely full however as root you are still abel to create files.  
- Why is this?  
- What option can you change to solve the problem.  
- What can you do if the above doesn't solve the problem.  
(4 marks)  

10) What is the effect of setting a sticky bit on a directory? (2 marks)  

--------------------------------------------  
Hardware (22 marks)  
--------------------------------------------  

1) Upon entering the server room you start hearing a clicking noise coming from one of the servers. What could it be? What commands could you run to identify the issue? (3 marks)  
2) What is a UPS? Why is it a good thing? (3 marks)  
3) Briefly describe Hardware RAID and Software RAID? Which is beeter? Why? (4 marks)  
5) What architecture is Murphy? What is it good at? (2 marks)  
6) When you are buying a server, is a management card important? Why? (2 marks)  
7) Redbrick is looking at buying a set of TCP/IP controlled PDU's. Why are they useful and why would we want them over a non TCP/IP controled PDU. (2 marks)  
8) Explain what a server being 1U means? (2 marks)  
9) What is an IP KVM? Why is it a good thing to have? (2 marks)  
10) SATA, SAS and SCSI. What are they? Why would I use each? 4 marks  

--------------------------------------------  
BONUS ROUND!  
--------------------------------------------  

1) If you were an admin, what would you do?  
2) You have a thumb tack, a plastic bottle and a piece of paper. Amuse us.  
3.14) MMMMMM  
4) Touch the floor?  
5) Who is the first person you would disuser upon becoming admin? Why?  
6) What is the airspeed velocity of an unladen swallow?

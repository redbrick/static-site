---
title: 'Admin Test AGM 2014'
---

-------------------- Scripting (40 marks) --------------------  
1) It has come to our attention that a number of associates are running some new dodgy services that are listening on network ports. You should write a script that will kill any processes that are listening on ports 1337 and anything over port 9000\. Make sure to only to kill those processes belong to that of the associate user group. (13 marks)  

2) There has been a new wordpress vulnerability, scan the webtree for the file "wp-fucked.php", delete it and then email and inform any member who has this file that it has been removed.(13 marks)  

3) Write a script to tell you how much space each user is using in their HOME directory and how many files they have greater than 150mb. Output should be: uid SpaceUsed Username NumFiles (13 marks)  

4) Write a script to amuse us! (1 mark)  

==== Practical (50 marks) ==== For this part you are allowed to use RedBrick wiki and Ubuntu manual. http://wiki.redbrick.dcu.ie/mw/Rbvm  

1\. You have been provided an empty Redbrick VM, install Ubuntu Server on it. Make the right choices when installing; network configuration is on the wiki. (15 marks)  

2\. Install a ssh server and make sure that root can't connect by ssh. Once your ssh server is running, use it and close vncviewer. (5 marks)  

3\. - Install a DNS Server (we suggest bind) - Add the zone exam.redbrick.dcu.ie as master  
HINT : the SOA is the nameserver of your zone, bind needs two of them  
HINT 2 : this hint will cost you 1 mark, if you are stucked ask an admin [1]  
- Add an entry that link <yourlogin>.exam.redbrick.dcu.ie to your VM  
- Configure your server to use it and test that it's working  
(20 marks)  
You can get marks even if it's not working  

4\. Using the best method, restrict the DNS server access to 136.206.16.0/24 and the ssh server access to 136.206.15.0/24. (10 marks)  

Don't forget to give the root password to your beloved admins (if you want to be marked).  

---------------------------------- General (35 marks) ----------------------------------  

1) What's RCS? Why might you use it? (2 marks)  

2) How would you check what kernel you are running? (2 mark)  

3) What is LDAP? What is an LDIF and why would you use one? (3 marks)  

4) What's a package repository? What are they used for? (2 marks)  

5) What protocol might you use to allow a filesystem to be mounted over a network? (1 mark)  

6) What versions of Ubuntu do we run on Redbrick and Why? (3 marks)  

7) How would you create a compressed tar archive? Give an example command. (1 Mark)  

8) You need to quickly backup a file, How do you copy a file to a remote server via command line? (1 marks)  

9) What's a PDU and why does a server room need them? (2 marks)  

10) Why does catting a binary screw up your shell? How do you fix this?(2 Marks)  

11) What is a DRAC/ILOM/ALOM? (1 mark)  

12) What is Dirvish?(1 mark)  

14) Why is Nagios important, where can you find it?(2 marks)  

15) What is strace? (1 Mark)  

16) What's a nice value? How would you change it? (2 marks)  

17) How would you view the current Mail Queue, Exim or Postfix answer please(2 marks)  

18) You accidentally messaged a root password to someone in IRC, what do you do? (2 marks)  

19) What does GRUB stand for? (1 mark)  

21) What does DNS do? (1 mark)  

22) What is Munin? (1 mark)  

23) How did koffee lock your answers and test when he went to pee? give a suitable solution (2 marks)  

---------------------------------- Linux (25 marks) ----------------------------------  

1) What information may you find in /proc? (1 mark)  

2) How would you list all of the currently loaded kernel modules (1 mark)  

3) A user has somehow renamed a file to a name with strange unicode characters and you cannot delete that file by name. How would you go about deleting that file? Give commands with parameters. (4 marks)  

4) How would you enable ipv4 forwarding in linux? (1 marks)  

6. What is logrotate? What does it do? Why is it used? (3 marks)  

7. What's /dev/kmem? What's /dev/mem? Explain the difference? (3 marks)  

8. Give a command to set the default route? (2 marks)  

9. What is fail2ban? Is it a good idea to run it on your server, why? (2 marks)  

10. What command will show me the active iptables config? (2 marks)  

11. What does upstart do? What does it replace? (2 marks)  

12. AppArmour. Explain. (2 marks)  

13. What's the apt command to remove already downloaded package files? (1 mark)  

---------------------------------- BSD (25 marks) ----------------------------------  

1) What is the command to list the currently loaded pf rules? (2 marks)  

2) What would the following pf rule do? (2 marks)  
block in on $ext_if proto tcp from any os "Windows"  

3) Paritions on OpenBSD are labeled using the characters 'a' through 'p'. What are the characters 'a', 'b' and 'c' used for? (3 marks)  

4) What is the equivalent of the root group in FreeBSD? (2 marks)  

5) Where are the startup scripts on BSD? How do you add something to run on startup? (3 marks)  

6) What is a Jail? What would you use one for? (3 marks)  

7) What file would you modify to change the default route? (2 marks)  

8) Why does the admin box run FreeBSD? Can you name the admin box? (2 marks)  

9) What is syctl? Why would you use it? (2 marks)  

10) What does growfs do? (1 mark)  

11) What command would set the first NIC on a FreeBSD install to have i.p. address of 192.168.1.119 with a /24 netmask. (3 marks)  

---------------------------------- Security (30 marks) ----------------------------------  

1) A user has launched a new website for another society. They type ls -l and the following is output;  
silly@azazel (~/public_html/) -> ls -l [8:25] total 12K  
-rwxrwxrwx 1 silly member 116 2013-10-21 19:55 blah.php  
-rwxrwxrwx 1 silly member 50 2013-10-21 19:25 database.php  
-rwxrwxrwx 1 silly member 1593 2013-10-21 19:17 index.php  
How would a regular user go about exploiting this? (3 marks)  

2) What is port forwarding? Give an example where/why this would be used? (3 marks)  

3) What are SSH keys? What command would you use to configure one? (3 marks)  

4) Apache runs as the www-data user, yet users scripts run as themselves. How is this done? (2 marks)  

5) Briefly Explain a buffer overflow? (2 marks)  

6) What is chroot? What about fakeroot? (2 marks)  

7) What is wrong with the following?(1 marks)  
mysql -u root -h mysql.internal -p=ThisIsTheRootPassword redbrickdb  

8) What is a ulimit? Where do you change these values? (2 marks)  

9) Briefly explain each of the following; (1 mark each)  
- /etc/passwd & /etc/shadow  
- Apache.s mod_rewrite  
- AppArmor  
- .htaccess  
- SSL  

10) Our servers are being hammered by the chinese. What do you do?(2 marks)  

11) What is SELinux? (1 marks)  

12) Name 2 security mailing lists that you should be subscribers to as a redbrick root holder. (2 marks)  

13) What is a CVE Database?(1 mark)  

------------------------------------------- Networking (30 marks) -------------------------------------------  

1) What Switches do Redbrick Use? What OS do they run? (2 marks)  

2) How would you go about diagnosing a DNS issue? How do you find the authoritative name server?  Name 2 useful DNS tools?(4 marks)  

3) What program would you use to check for open ports on a system? Give an example of how you could list  pids/ports with this utility? (2 marks)  

4) What is NAT? Why would you use it? (2 marks)  

5) What is a virtual interface? What file would you modify to add one? (3 marks)  

6) Briefly explain what a CIDR network is? (1 marks)  

7) What is a VLAN, what are they used for? (2 marks)  

8) What is OSPF? How does it relate to BGP? (2 marks)  

9) What is port-knocking? What is it useful for? (2 marks)  

10) What default ports are the following on; (5 marks)  
- ssh  
- imap  
- irc  
- ldap  
- dns  

11) Explain the difference between Hubs and Switches. (2 marks)  

12) HEAnet have given us a /56 IPV6 Address. How would you work out how many addresses we could possibly have?  (2 marks)  

13) On our switches; what commands would you use to get from login to a describe any port on the switch? (3 marks)  

14) Give the v4 netmask for the following subnets: (5 marks)  
- /24  
- /32  
- /29  
- /26  
- /8  

15) How many networks are in the Redbrick Environment? give the justification and use of each. (3 marks)  

-------------------------------------------- Files & Filesystems (30 marks) --------------------------------------------  

1) List 3 (incompatible) filesystems. Give an advantage and disadvantage of each. (6 marks)  

2) What is an inode? Why would you limit the number of them a single user can create? (3 marks)  

3) What file would you find the following lines in? (2 marks)  
192.168.0.9:/backup /backup nfs nosuid,nodev,soft,intr,ro,noquota 0 2  
tmpfs /tmp tmpfs size=4G,nosuid 0 0  

5) What command would you run to check a disk for errors? (1 mark)  

6) You have added a new disk to your system. Describe the steps you would take to set it up as /var/log (4 marks)  

7) Briefly state what ctime, mtime and atime represent? (3 marks)  

8) What's the difference between a symbolic link and a hard link? What command would you use to create both? (3 marks)  

9) What's an LVM? (2 marks)  

10) There are 8hrs to go until Lorcan and Laura sit this exam and I’m scrambling for questions to ask, What is the effect of setting a sticky bit on a directory? (2 marks)  

-------------------------------------------- Hardware (32 marks) --------------------------------------------  

1) You walk in to the server room and it feels like you’ve walked into a sauna, what’s gone wrong? (1 mark)  

2) Having just ascertained the problem you can’t do anything to fix it direcetly, what are your next courses of action? (2 marks)  

3) What is a UPS? Why is it a good thing? (3 marks)  

4) Briefly describe Hardware RAID and Software RAID? Which is better? Why? (4 marks)  

5) When you are buying a server, is a management card important? Why? (2 marks)  

6) Redbrick has bought a set of TCP/IP controlled PDU's. Why are they useful and why would we want them  over a non TCP/IP controlled PDU? (2 marks)  

7) List these Interface speeds in order of increasing data throughput rate: SAS,IDE,USB2.0,SATA1.0,SATA3(4 marks)  

8) What is an IP KVM? Why is it a good thing to have? (2 marks)  

9) What is DAS? Do we have one? If so where is it? (3 marks)  

10) Describe the following Storage Arrays: RAID 0, RAID 5, RAID 10\. (3 marks)  

11) If I told you to connect something to a NIC what would you be connecting? (2 marks)  

12) With regards to power supplies what are redundancy and diverse power supplies and why are they important? (3 marks)  

13) What kind of cable connects our DAS to Azazel? (1 mark)  

-------------------------------------------- BONUS ROUND! --------------------------------------------  

1) User Privacy is of utmost importance, if it wasn’t, what would you do?  

2) How do you shot web?  

3)mak & koffee & twister are great admins, How would you express your gratitude to them?  

4) Alliance Suck, this is not a question merely a statement of fact.  

5) SpaceGoats suck more.  

6) Lorcan, something you love also sucks (your girlfriend not included)</yourlogin>

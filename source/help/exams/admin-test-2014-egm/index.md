---
title: 'Admin Exam 2014 EGM'
---

We have created an admintest2k14 folder in your homedir. answer all questions in a text file in that directory.  
(you may use nano, vim or vi. you will be judged on your choice of text editor)  
Total marks 287

======================  
**General (30 marks)**  
======================  
1\. What is the default shell of new users on Redbrick (3 marks)  
2\. What is Redbrick's primary login server? Name two other servers (3 marks)  
3\. What temperature should the server room be kept at? (2 marks)  
4\. What does nagios do? Why do we use it? How does it work? (4 marks)  
5\. You type the command "ls" expecting a list of all non-hidden items in the current directory, instead you get an ascii dick printed to standard output, why would this happen? (4 marks)  
6\. What are ALOM,ILOM and DRAC and why do admins love them? (3 marks)  
7\. What is a ulimit, why do we impose them on servers other than the development server? (3 marks)  
8\. Why would you use a managed PDU instead of a PDU? What does PDU stand for? (3 marks)  
9\. What does SNMP stand for? (2 marks)  
10.What protocol allows us to mount /storage over multiple servers? (3 marks)  

======================  
**Linux (30 marks)**  
======================  
1\. What flavour of linux do we use on the majority of Redbrick Servers? And what version? (3 marks)  
2\. What is /proc? Why would you look there? (3 marks)  
3\. What does FHS stand for? (2 marks)  
4\. What is an inode? How would you show a file's inode? How would you delete this file using its inode (3marks)  
5\. How would you show what version of OS you're running (assume this is on a Redbrick server)? (2 marks)  
6\. What is LDAP? Why do we use it? (3 marks)  
7\. What is apt? Why do we use it? (3 marks)  
8\. What command would you use to find the process id running as a particular user? How would you kill just that process (4 marks)  
9\. chmod and chown, what do they do? and for each give the syntax they use (4 marks, 2 per command)  
10.What command would you run to update to the latest version of OS available on a Redbrick server? (3 marks)  

======================  
**BSD (30 marks)**  
======================  
1\. What does BSD Stand for? What version does Redbrick use? (3 marks)  
2\. What server do we use BSD on and why? (3 marks)  
3\. What is the BSD equivalent of root? (3 marks)  
4\. What is pf? How would you show the current ruleset? (3 marks)  
5\. How do you get a process to run at boot time? (3 marks)  
6\. What file would you modify to set the static IP of an interface in BSD? (3 marks)  
7\. Show me how to find the routing table in BSD (3 marks)  
8\. What is ports in BSD? How do I update them? (3 marks)  
9\. In FreeBSD; what is a jail? Why would one use it? (3 marks)  
10.You just got your root talk as an admin, and were added to the root group on a freebsd box, Why does this allow you to do jack all? (3 marks)  

======================  
**Security (30 marks)**  
======================  
1\. What is AppArmor? (2 marks)  
2\. What are: pf, fail2ban, iptables (3 marks)  
3\. What does VPN stand for? Why would one be used? (3 marks)  
4\. What are SSH keys? What command would you use to configure one? (3 marks)  
5\. You suspect maK has a rootkit on one of the machines. What command could you run to check for the rootkit? (3 marks)  
6\. You have just installed a new linux server. Name 3 things you should do to secure this system. (3 marks)  
7\. Why is ssh as root disabled on our machines? (2 marks)  
8\. Name 3 files that should only be readable by root and what they do. (4 marks)  
9\. Why would you set the sticky bit on a file? (3 marks)  
10\. You left a root terminal unlocked and someone has used it to do something. The history files has been deleted. How do you go about finding out what they did? (4 marks)  

======================  
**Files & Filesystems (30 marks)**  
======================  
1\. Name 3 different types of filesystems (3 marks)  
2\. What does it mean when a filesystem is described as being journalled? (2 marks)  
3\. How would you show what filesystems are currently mounted? (3 marks)  
4\. What is a symlink, how would you create one, how does it differ from a 'hard-link' (4 marks)  
5\. You've added a new disk to a machine mount /zergless/potato on it (2 marks)  
6\. drwxrw-rw- what is this permission in octal format? (3 marks)  
7\. What is NFS? Do we use it in Redbrick? If so where? (4 marks)  
8\. What are the following?  
i) ctime  
ii) atime  
iii) mtime  
(1 mark each)  
9\. What is the difference between /etc/mtab & /etc/fstab (3 marks)  
10.How would you force unmount a 'busy' directory? (3 marks)  

======================  
**Practical (37 marks)**  
======================  
For this practical we have setup a raspberyr pi for you with login details provided.  
1\. Create a user for yourself 'redbrick' with a home directory of '/home/redbrick' (4 marks)  
2\. It looks like ssh is enabled for root. disable it. (6 marks)  
3\. Ok now that we know no one can ssh in as root lets change the password. pwgen has been installed on these pis. use this to generate a password of 8 characters and change the root password. make sure this is included in answers so we can correct this section.(4 marks)  
4\. Change it so that only su can be used and not sudo.(6 marks)  
5\. Make sure that bash is up-to-date (2 marks)  
6\. You notice that 'sillyuser' account has been compromised. His home dir and files may have been compromised. Make a tar.gz of sillyusers home dir then make sure that he can't access it anymore (6 marks)  
7\. You have a copy of sillyuser's home dir and his files are secure now you need to take appropriate actions. List the actions you would take. Minimum of 3 (3 marks per action +1 extra mark if its really inventive)  

======================  
**Scripting (40 marks)**  
======================  
1\. Create an alphabetically sorted, unique list of all members currently active on your current machine Output this to a .txt file(4 marks)  
2\. With this txt file amend @redbrick.dcu.ie is at the end of each name. (5 marks)  
3\. Redbrick is running out of space quicker than the admins can delete files. Write a script that checks the size of users home directorys. if the directory is more that 90% full email the admins the user and the biggest 3 files. (15 marks)  
4\. There has been a new wordpress vulnerability, scan the webtree for the file "wp-fucked.php", delete it and then email and inform any member who has this file that it has been removed.(15 marks)  
5\. Write a script to amuse us! (1 mark)  

======================  
**Hardware (30 marks)**  
======================  
1\. What does NIC stand for? (1 mark)  
2\. If disks are in a RAID 10 array, what does this mean from a parity standpoint? Draw a diagram of a RAID 10 Array using the minimum number of disks required. (5 marks)  
3\. The air conditioning in the server room has broken. What do you do? (2 marks)  
4\. When building a new server, what are the minimum requirements you should have (3 marks)  
5\. Order these protocols in terms of data transfer speed (high -> low) : SATA,ATA,IDE,SAS,SCSI. (3 marks)  
6\. What is DAS? Does Redbrick have any DAS, if so where? (4 marks)  
7\. What is an IP-KVM? Why should we use one (3 marks)  
8\. Tell me how to get the UUiD of a disk (2 marks)  
9\. Why do our servers have two power supplies? What 2 pieces of hardware do we use in conjunction with them to ensure maximum redundancy and uptime? (5 marks)  
10.Where would you mount a UPS? Why? (2 marks)  

======================  
**Networking (30 marks)**  
======================  
1\. What are the 3 'private' IPv4 address spaces (3 marks)  
2\. What is the subnet mask of a  
i) /8  
ii) /24  
iii)/29  
IPv4 Subnet. (3 marks)  
3\. If 127.0.0.1 is the v4 local loopback address, what is the IPv6 one? (2 marks)  
4\. What protocol is used to distribute routes on the internet? (2 marks)  
5\. What do  
i) HTTPS  
ii)DNS  
iii) DHCP  
stand for and what ports & protocols do they use by default (6 marks)  
6\. We use Cisco switches; how do you show the running configuration on one of our switches? (2 marks)  
7\. What does NAT stand for? What does it do? (4 marks)  
8\. How many disparate networks are there in the Redbrick environment? Why? (3 marks)  
9\. What are privilieged ports? What port number is the priv/unpriv border? (2 marks)  
10.What does VPN stand for? What does it do? (3 marks)  

======================  
**Bonus Round**  
======================  
This round carries no marks but will affect our mood when correcting the exams.  
1\. So you want extra points? What you willing to do for them?  
2\. What addition would you make to the server room?  
3\. In a hypothecical situation there are no rules for having root. What would you do to Redbrick?  
4\. Tunes?

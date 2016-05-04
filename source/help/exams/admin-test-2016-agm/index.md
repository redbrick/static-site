---
title:
---

Assumptions that can be made:
When referring to VMs assume they’re running in a Native Hypervisor architecture. Unless otherwise specified give answers for a Ubuntu based OS.
(Exceptions are the BSD & CoreOS sections)
General:
1. Give 2 Primary differences between Docker Containers and VMs (2)
2. What do CI & CD stand for? Give one example of a tool used for each (4)
3. What is the default shell of new users on Redbrick (2)
4. What does nagios do? Why do we use it? How does it work? (4)
5. What does the initialism OOB stand for? When would you use something that was OOB? (4)
6. What is a ulimit, why do we impose them on servers other than the development server? (3)
7. What does UPS stand for when referring to infrastructure? (2)
8. What does SNMP stand for? (2)
9. What is a cronjob? How would you create one? (2)
10. What protocol allows us to mount /storage over multiple servers? (2)
11. What is LDAP? Why do we use it? (3)
12. What's a package repository? What are they used for? (3)
13. How would you create a BZIP compressed tar archive? Give an example command. (3)
14. You’ve just `cat /bin/lol_idiot`; What command do you run to fix the mess you’re now in? (2)
15. What's a nice value? How would you change it? (2)
16. How would you view the current Mail Queue[ state using exim /postfix /other] (3)
17. You accidentally messaged a root password to someone in IRC, what do you do? (2)
18. What does DNS stand for? What does DNS do? (3)

Total: /50

## Networking:
Assume IPv4 unless otherwise specified
Hardware Specific questions are denoted by HC (Cisco - IOS) and HJ(Juniper)
1. What does CIDR stand for? (1)
2. Give the subnet masks for the following: (4)
  a. /24
  b. /29
  c. /16
  d. /10
3. Write the DNS entry to bind the IP address 126.206.15.25 to azazel.redbrick.dcu.ie (2)
4. What service do we use to stop repeated DNS queries from overwhelming the
DNS service? (1)
5. What is NAT? Why is it used? Where do we use it in Redbrick? (4)
6. There are 6 Private Network Subnets defined by IANA/IETF. Give the CIDR
notation for 4 of them (4)
7. Set a default route using the ip 136.206.15.254 using interface em1 (3)
8. What technology does IEEE 802.1Q refer to? Do we use it in Redbrick? (3)
9. [HC] Show a brief report of all the ports currently running in a specific VLAN (2)
10. [HJ] Show a brief report of all the ports currently running in a specific VLAN (2)
11. What is OSPF? How does it differ from STP? (4)
12.Youtypew ww.google.com intoawebbrowser’ssearchbar;Whathappens? (5)
13. What Ports do these services usually run on? What Protocol do they use? (10)
  a. DNS
  b. SMTP
  c. IMAP(S)
  d. HTTPS
  e. VNC (Graphical Display)
14. What is SFP? What TCP/IP level would it be found on? (2)
15. What does BGP stand for? What numbers are used for identification in BGP? (3)

Total /40

## Hardware/Infrastructure
You will find a file called raid to assist you.
1. What does RAID stand for? Software or Hardware? Why? (3)
2. You have 4 Disks all with the same speed and capacity, using diagrams, give 4
possible RAID configurations. (5)
3. Which of the 4 configs gives the optimal RW speed;Capacity and Redundancy (3)
4. What is an SFP? Where would you expect to find one? (2)
5. What are the following and how do they differ? (4)
a. DAS b. SAN c. NAS
6. What is an IP­KVM, how does it differ from a regular KVM? (2)
7. What is a DRAC? Why is it useful? How does it differ from an IP­KVM? (2)
8. What does ECC used to describe? What does it mean? (2)
9. List in Order of D ECREASING d ata transfer speed (fastest ­> Slowest) (3)
a. IDE
b. PCI­E x16 v3.0
c. SATA­3
d. SAS
e. QSFP+
10. Why are PS/2 connectors still used on servers? (2)
11. As an admin you will have to buy a server spec up a basic server; what are the
Minimum requirements to run in the C URRENT  Redbrick infrastructure? (4)
12. What is a HBA? How does it differ from a Raid Controller? (2)
13. Where are UPSs usually placed in a rack and why? (2)
14. In a Rack, where should switches go? (1)
15. RS232 is common connector for what kind of connection? What would you connect
to using this connection? (3)

Total /40

## Security
1. What is the standard firewall bundled with Ubuntu? (1)
2. Show me all the files the www­data user currently has open (1)
3. What is fail2ban? How do you unban someone who has been fail2ban’d (3)
4. What is PAM? Where do we use it? What do we use it in conjunction with?(3)
5. Why don’t we use FTP,POP or Telnet? (2)
6. You’re root; you attempt to ssh to another Redbrick server; why doesn’t this work? (1)
7. What is a chroot? When would you use one? (3)
8. You have forgotten the passwordsafe password; how do you gain access? (2)
9. What is a sticky bit? Why would you enable it? (2)
10. What is a bastion host? Why would you use one? What considerations should be made when creating a bastion host? (5)
11. What is wrong with the below? (3)
­rw­r­­r­­ 1 subaqua club 418 Sep 25 2013 index.php
­rw­r­­r­­ 1 subaqua club 19930 Jan 27 09:37 license.txt
­rw­r­­r­­ 1 subaqua club 5035 Oct 6 22:56 wp­activate.php drwxr­xr­x 9 subaqua club 4096 Dec 8 23:45 wp­admin
­rw­r­­r­­ 1 subaqua club 271 Jan 8 2012 wp­blog­header.php ­rw­r­­r­­ 1 subaqua club 1369 Oct 3 15:47 wp­comments­post.php ­rwxrwxrwx 1 subaqua club 3052 Jan 3 21:22 wp­config.php ­rw­r­­r­­ 1 subaqua club 2853 Jan 27 09:37 wp­config­sample.php drwxr­xr­x 6 subaqua club 103 Jan 27 09:37 wp­content
­rw­r­­r­­ 1 subaqua club 3286 May 24 2015 wp­cron.php drwxr­xr­x 16 subaqua club 8192 Dec 8 23:45 wp­includes ­rw­r­­r­­ 1 subaqua club 2380 Oct 24 2013 wp­links­opml.php ­rw­r­­r­­ 1 subaqua club 3316 Nov 5 23:59 wp­load.php ­rw­r­­r­­ 1 subaqua club 33770 Jan 27 09:37 wp­login.php ­rw­r­­r­­ 1 subaqua club 7887 Oct 6 15:07 wp­mail.php ­rw­r­­r­­ 1 subaqua club 13021 Nov 20 07:24 wp­settings.php ­rw­r­­r­­ 1 subaqua club 28594 Oct 30 08:52 wp­signup.php ­rw­r­­r­­ 1 subaqua club 4035 Nov 30 2014 wp­trackback.php ­rw­r­­r­­ 1 subaqua club 3061 Oct 2 23:46 xmlrpc.php
12. `echo $PATH` returns the following:
/$HOME/bin/:/home/public_html/: /usr/local/bin:/usr/local/sbin:/usr/bin: /usr/sbin:/bin:/sbin:/usr/games
Why is this concerning? How could this be exploited? (5)

## BSD
1. Where do we use BSD? Why? (2)
2. You’re a new rootholder, you’ve added yourself to the root group on a BSD server
why do you still have the power of a lowly user? (2)
3. What is pf? How would you modify it’s parameters?
4. How do you install precompiled binaries on a BSD environment? (3)
5. What is a Jail and why would you use one? (3)
6. How would you configure a network interfaace on OpenBSD? (3)
7. What does dtrace do? (2)
8. How would you have the script lol.sh run on startup? (3)
9. What are securelevels? (2)

Total /20

## Containers
1. What is Docker? What does Redbrick use it for? (2)
2. What command do you use to download a docker image? Give an example usage of
this command. (3)
3. Write down the command you would use to launch an interactive shell in a Ubuntu
container. (4)
4. What is one way to keep data persistent across Docker container instances? Give an
example of how to launch a container this way. (4)
5. Write down the command you would use to network two containers together. (4)
6. If you wanted to bind port 80 on the host machine to port 22000 on a container, what
command would you type? (4)
7. What is Kubernetes? What does Redbrick use it for? (2)
8. What is the name of the application used to control a Kubernetes cluster? (2)
9. Describe the following terms in the context of Kubernetes:
  a. Node
  b. Pod
  c. Service
  d. Volume (8)
10. What happens to the workers if a Kubernetes master goes down? (2)
11. What happens if you have multiple masters in one cluster? (2)
12. You try to run a container and it doesn’t start. How would you go about debugging
the problem? (3)

Total /40


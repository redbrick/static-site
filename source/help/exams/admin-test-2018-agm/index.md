## Redbrick System Administrator Exam 2018

### GNU/Linux
1. What is 'systemd'? What would be considered an alternative?
2. You are trying to unmount your '/storage' volume, but 'umount' keeps compaining about it being busy.
how would you determine who/what is using it. and kill that process? How would you unmount it without ki
lling the process?
3. What is a chroot? Why would you use one?
4. Give 5 distinct advantages of using a package manager rather than building a program from source. Wha
t command would you run to fully update a typical Redbrick server?
5. Ubuntu 12.04 is a pile of shit and you need to upgrade to the latest LTS release of Ubuntu. What is y
our process for the upgrade, such that it inconveniences users of the system the least?
6. You have a list of hundreds of comressed logfiles in /var/log. Give 3 ways of searching through these
 logs. Manually extracting and searching them is not an option.
7. What does 'LVM' stand for, and what does that actually mean?
8. Give a situation where you would use each of the following commands:
  - dig
  - swapon
  - tcptraceroute
  - w
  - du
9. What is LDAP? What is it used for in Redbrick?
10. What does FHS stand for? What is it?


### FreeBSD
1. What does 'BSD' stand for? What version do Redbrick use? What do we use it for?
2. Illustrate one difference between a BSD system and a Linux system.
3. What is pf?
4. How would you get a script 'resign.sh' to run at boot time?
5. How would you bring up a network interface on a FreeBSD system?
6. What does 'ports' mean in the context of a FreeBSD system?
7. How would you install a new package on FreeBSD?
8. You've added yourself to the group 'root' on your shiny new FreeBSD server. Why have you not gained a
ny more priveliges than a normal user?
9. What is 'dtrace' and what does it do?
10. What tool would you use to modify users and groups on FreeBSD?

### Hardware
1. What does NIC stand for?
2. You have 5 2TB drives in a RAID 6 array. Give a short explanation of what this means, and calculate h
ow much storage you will have available for use in this situation.
3. What does UPS stand for? Where would you mount a UPS and why?
4. What is DAS? Does Redbrick have any DAS and if so, where?
5. The air conditioning in your server room has failed. What do you do?
6. Order these protocols in terms of transfer speed, high to low.
  - SATA
  - ATA
  - IDE
  - SAS
  - SCSI
  - QSFP+

7. What is the UUID of a disk, and why would it be useful?
8. What is an IP-KVM? Why should you use one?
9. What is a PERC? What sort of server would you find a PERC in?
10. ECC memory is used in all Redbrick servers as standard. What is an advantage of this?


### Networking
1. Write a DNS entry to bind the address 136.206.15.25 to azazel.redbrick.dcu.ie, assumining your $ORIGI
N is defined as redbrick.dcu.ie.
2. What does BGP stand for? What sitations would it typically be used in?
3. What ports do the following services typically use? What protocols do they use?
  - DNS
  - HTTPS
  - VNC
  - IRC
  - SMTP
4. What is SNMP? What could SNMP be used for?
5. Redbrick owns 2x /24 of IPv4. What does this mean?
6. What command would you run on one of our Ubuntu 14.04 machines to get rid of your current IP address,
 and request a new one?
7. You should always change the serial number when modifying DNS entries. What does this mean, and why s
hould you do it? What would happen if you didn't?
8. What file would you modify on a Ubuntu system to make changes to network interfaces persistent?
9. We use Cisco and Juniper switches in Redbrick. How would you view the currently running config on a C
isco switch? How would you ensure this config remains persistent after a restart of the switch?
10. How many disparate networks exist within Redbrick? What are they all used for?

### File Systems
1. What is an inode? How would you find one?
2. What are symlinks? Give two ways in which they differ from hardlinks.
3. Why does a user's public_html directory have the mode lrwxrwxrwx?
4. ext4 is a journaling file system. What is meant by this?
5. How would you determine which filesystems are currently mounted to a system?
6. Express the following in octal format: drwxrw-rw-
7. How would you mount the volume /dev/sda3 read-only to /redbrick/eggs?
8. Briefly explain the following:
  - RAID 10
  - RAID 5
  - ZFS
  - umask
  - Sticky Bit
9. What are /etc/mtab and /etc/fstab used for?
10. What is the difference between MBR and GPT?
11. What are fdisk and gdisk, and in what situations would you use each?
12. What does the 'sync' command do? When should it be used?


### Security
1. On a Linux system, how would you disable SSH access for the root user?
2. What is fail2ban? How would you help a user who has fallen foul of fail2ban?
3. Briefly explain the purpose of each of the following:
  - /etc/shadow
  - SElinux
  - dm-crypt
  - SSL
  - KPTI
4. What is wrong with the following command?
  - mysql -uroot -hmysql.internal -p=HelloIAmTheRootPassword
5. Our Apache servers run as the 'www-data' user, yet users' own scripts run as those users. How is this achieved?
6. You see a massive spike in traffic from a pile of Chinese IP addresses. What do you do?
7. What are Spectre and Meltdown? Briefly explain how ONE of them could be exploited.
8. Name 3 things you would do to secure a newly-installed Ubuntu 16.04 server.
9. You left a terminal unlocked where you were logged into a Redbrick server as root. Someone has done something nefarious, and deleted the history files. How could you go about finding out what they did?
10. What is the difference between 'sudo' and 'su'?
11. How would you view the currently enforced iptables rules on a system?
12. What is PAM? What do we use it in conjunction with?
13. Why do Redbrick NOT use POP, FTP or Telnet?
14. What is a CVE, and why should you care?
15. Tell us something interesting you know about computer security.


### Containers & Process Isolation
1. What is a container? How does one differ from a VM?
2. What is LXC? List 2 differences between LXC and Docker.
3. When running a Docker container, how would you bind port 22000 on the host to port 80 of the container?
4. What command would you use to download a Docker image from a registy? Give an example usage of this command.
5. Illustrate 3 differences between Docker Swarm and Kubernetes.
6. What is a container orchestrator?
7. What is the difference between 'docker attach' and 'docker exec'?
8. What is Rkt?
9. In the context of a container orchestrator, what is the significance of the term 'consensus'?
10. What command would you use to delete unused Docker images & volumes?


### Scripting
1. Write a short script to amuse us.
2. Given a list of Redbrick usernames, how would you send an email to all of those usernames, in the event our mailing lists were down?
3. Write a script to retrieve the logs of all currently running Docker containers on a system, and compress each one into a .tar file with the same name as the source container.

### Practical
password is adminexam

3. Install fail2ban
4. Install iptables
5. Ban ip 136.206.169.205
6. Disable SSH access as root
7. Enforce SSH key login
8. Create the 'haxor' user
9. Remove pi user
10. Create a new user called pi with no login shell



![got root?](./gotroot.png)
## Filesystems                                                                        [20 marks]
1. What is NFS? Do Redbrick use it? If so, where? If not, why not?                           [3]
2. What is the FHS? Name 3 Directories found under the primary hierarchy.                    [2]
3. What is an inode? How would you find one?                                                 [2]
4. What is the difference between /etc/mtab nd /etc/fstab ? Why is /etc/fstab important?     [3]
5. What does it mean if a filesystem is journaling? of ext2 and ext3 which is journaling     [3]
6. What is LVM? Why is it great?                                                             [2]
7. What are symlinks? How do they differ from hardlinks?                                     [3]
8. Why does public_html have the mode lrwxrwxrwx?                                           [2]

## (Free)BSD                                                                          [20 marks]
1. As root is to linux, ?????? is to BSD                                                      [2]
2. Why do Redbrick use BSD?                                                                   [2]
3. How do you configure a network interface on FreeBSD that persists through reboot?          [3]
4. What commands do you use to update and upgrade a freebsd server?                           [2]
5. What file do you manipulate to start a service on reboot?                                  [2]
6. What is ports? How would you get the latest snapshot of ports? Once you've got that
snapshot what do?                                                                            [5]
7. What is pf? How do you configure it?                                                       [2]
8. What is a jail? Why would you use one?                                                     [2]

## Networking                                                                         [35 Marks]
1. What does CIDR stand for?                                                                  [1]
2. Give the netmasks for these CIDR notations:                                                [4]
    - /24
    - /29
    - /32
    - /16
3. What is an ASN? What type of routing relies on it?                                         [2]
4. What is the IPv6 equivalent of 127.0.0.1? What is this address called?                     [2]
5. What is a privileged port? What port is the first unprivileged port?                       [2]
6. What are the default ports for the following services?                                     [4]
    - SSH
    - SMTP
    - SFTP
    - LDAP
7. How would you should what service was bound to port 80? What is usually bound here?        [3]
8. How would you verify if your ldap server was being queried by a server with the i.p        [5]
136.206.15.25, given you have an interface em1 which is in the 136.206.15.0/24 subnet?
9. What is a private network? Give the addresses for 2                                        [3]
10. What is STP? Why is it useful?                                                             [1]
11. In linux how would you show your routing table? Now update your default route.             [2]
12. When you type www.redbrick.dcu.ie into a browser's URL bar, what happens?                  [6]

## General                                                                            [35 marks]
1. What is the default shell of new users on Redbrick? 					                             [2]
2. What version of ubuntu do we run on Redbrick and why? what is the  exception to this?      [3]
3. Redbrick run primary and secondary service machines. What does this mean? Why do it?       [3]
4. give a situation in which you would use the following commands.                          [5x1]
	- dig
	- strace
	- swapon
	- traceroute
	- tcptraceroute

5. Which is the shit one, useradd or adduser? What makes the other one shit? 		        [2]
6. What is RCS? Give an example of when you use it. Name a better alternative                  	[3]
7. What does DHCP stand for? What does it do? why would Redbrick want a DHCP server?		[3]
8. Someone offers you free beer for root access. What do you do?				[2]
9. What is wrong with this command "chown welp:spas .\*"?					[1]
10. Associates are bitching at you for $reason. What do you do?                                 [1]
11. Ideally what temperature should server rooms be kept at?                                    [1]
12. What is CI and CD? why are they good? what tool would you use for each?                     [6]
13. Mosh is a super cool replacement for ssh which keep your connection alive when
 you change networks. But it requires lots of ports being open. Why is this a problem?        	[2]
14. You successfully pass the admin exam and need to write the next one.
How long in advance will you have it written?                                                 	[1]

## Linux											[40 marks]
1. What would you expect to find in /etc                                                       	[1]
2. You have a list of compressed files in /var/log. You need to search through the logs.
   Give 3 ways of doing this.                                                                   [4]
3. apt-get fails to install a program on a new server. What could be wrong?                    	[2]
4. What is LDAP? Why do we use it? Why is it different from an LDIF?                           	[4]
5. What are three advantages of installing packages from a package manager rather than building from source?
   What 2 commands would you use to keep packages up to date? 					[5]
6. You want to create a user to be used by a daemon. What do you set its shell to? 		[2]
7. What command would you use to list all running processes? 					[1]
8. What is logrotate? What does it do? Why is it used? 						[3]
9. fail2ban wtf is it? Why should you use it? 							[3]
10. Some dickhead has made uptime, top, etc point to /dev/null.
How am I supposed to be able to tell what the load average is now?				[2]
	- what did they do? undo it 								[2]
11. SSH keys. What are they? Where are they used(2 examples)? How do I make one? [4]
12. What is logrotate? What does it do? Why is it used? [3]
13. chmod and chown, what do they do? and for each give the syntax they use [4]

## Hardware											[20 Marks]
1. What is a PERC? What type do Redbrick go for? Why?						[3]
2. When Power Supplies are described as 'redundant' what does that mean?			[1]
3. If a server has 4 disks, what RAID architecture would you implement and why?			[3]
4. What is IPMI? Why is it useful? 								[2]
5. What is the key difference between an IP-KVM and a DRAC?					[1]
6. What is a UUID? Where would you find one? 							[1]
7. What is a UPS? Where would you mount one? Why is it important?				[2]
8. What is the maximum transmission speed of a CAT5e cable?					[1]
9. For the current design of the network what is the minimum number of NICs on our servers?	[1]
10. What is the minimum number of disks required for a RAID5 array? 				[1]
	- What is the miminimum RECOMMENDED number for a RAID5 array?				[1]
11. We have 2 switches and 3 networks. How do we manage this? what are the networks?		[3]

## Security											[35 Marks]
1. What does VPN stand for? What does it do? Give one situation where Redbrick might use it?	[2]
2. You left a root terminal unlocked and someone has used it to do something. The history files
   has been deleted. How do you go about finding out what they did?				[4]
3. Name three files that should only be readable by root and what they do.			[4]
4. You have just installed a new linux server. Name some things you would do to secure it.	[3]
5. Well done, you have just been elected and added to the root group. However, you've just
   become a security threat to the system.As a root group member, you have elevated privileges
   to that of a normal user. Name 2 steps you can take to ensure your account is secure.	[4]
6. ISS have called you at 3am saying they suspect that there is some malicious attacks
   eminating from the RedBrick network. What investigative steps would you take?		[4]
7. Why is ssh as root disabled on our machines?							[1]
8. While pissed at the slipper you decide its a FANTASTIC idea to change the root password for
   azazel. You wake up the next morning in some moths bed hungover as fuck and remember you
   never added the password to the passwordsafe. WHAT DO?!?!					[3]
9. Why is this a bad idea? mysql -u root -h mysql.internal -p=rootpasswordgoeshere mydatabase	[1]
10. All root passwords just got changed. How do you inform the other root holders of the new
     passwords securely? 									[2]
11. After attempting to login to Redbrick using an SSH key it keeps failing. Why could this be?
     (assume all config, setup an password for ssh key is correct)				[2]

## Practical										[30 marks]
### You have two Raspberry Pis. pi\_host and pi\_server.
### pi\_host (ph) has a user bob.
- Add bob to sudoers on ph. login as bob.  [3]
- Troubleshoot why you can't do this.  [3]
- try and connect to pi\_server (ps), figure out why you can't.  [3]
- ssh to ps and create the user bob there.  [3]
- You have an apache server installed on ps, setup it's logging so that it		[4]
 rotates to a custom directory /var/log/apache2/yyyy/mm/dd-$type.log
- setup a cron job to tarball those logs at midnight every day and scp them once the 	[5]
tarball is created.
- set up an ssh key from ph to ps for the user bob.  [3]
- set up a tcpdump on ps to identify incoming ssh connections from ph.  [3]
- set up fail2ban on ps									[3]

#### You have access to man pages for this. But don't spend too long at this.
#### If you don't know how to do, or due to a dependency on a previous step you are unable to do, a step writeup what you would do.

## Scripting											[40 marks]
1. Given a list of user names. Send an email to all of those users telling them they won some
   free swag. 											[5]
2. You uploaded a load of .GIF's but they are in uppercase. There's 200 of them and you want to
    convert them all to lowercase. Write the script.						[5]
3. There have been a lot of failed login attemps lately, write a script to search through
   /var/log/auth.log and print out a list of the most frequently failed logins in the format:
   Number of failed logins user name ip address ( should put some example data in /var/tmp or
   something)											[15]
4. Write a script to tell you how much space each user is using in their HOME directory and how
    many files they have greater than 150mb. Output should be: uid SpaceUsed Username NumFiles	[15]
5. Write a script to amuse us.									[1]

## Bonus Round.									[1 billion canadian roubles]
1. Why should you never check out something from RCS after 10 years and hit y without looking?
2. What is the Zaconey Curve?
3. go but?
4. Will you shave Lorcan for a pint?
5. First change you are going to make?
6. cans?

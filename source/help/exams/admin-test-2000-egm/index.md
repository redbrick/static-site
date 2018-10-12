---
title: 'Admin Test 2000 EGM'
---

<pre>Here goes,
All questions that are general (e.g. 3.1) use the UNIX variant OS of your choice, we don't 
expect you to be FreeBSD specific, except where specified as "on redbrick", or in the FreeBSD section. A right answer for your OS will do fine.

Negative marking will apply throughout, for answers that are very blatantly incorrect or demonstrate incompetence.

	- DoC, pixies, phil and bobb

 ]1[----  Users 
--------------------

.1] Name two ways to disable a users account.

.2] You want to change a person's username from 'joe' to 'skippy'. Describe how this process would
be done (Remember the user's home directory is /home/joe)

.3] How would you set a users' password?

 ]2[---- Files the FileSystem, Devices and Interfaces.
--------------------

.1] How would you remove a file starting with a "-"

.2] What is an inode? Why is there a quota on the number of a files a user can have as well as 
the space they take up.

.3] On redbrick give an advantage of using ~/.mailspool to collect mail, instead of the traditional
/var/mail/$USER normally used on systems.

.4] How do you setup multiple IP addresses on a single interface?

.5] Why is it a good idea to split up a filesystem instead of having one big root partition?
Give two partition schemes for a 10Gb drive in two different situations (e.g. a Shell account provider,
and a Home User. Give reasons for your partition choices and their sizes)

.6] You've just installed apache by hand and now you want it to startup by default every time you 
boot up. How is this achieved?

 ]4[---- Security
--------------------
.1] Some idiot just changed root's password and can't remember it How do you get root back?
(Background information: you can't read the shadow file, you're in front
of the machine and you want to get root back on the machine). 

.2] Why are telnet/ftp/POP sessions inherently insecure? What can be done to resolve this?

.]5[---- Misc.
--------------------
.1] Accounting.
How is accounting turned on?
What information can it supply (two points is sufficient) and how do you retrieve this information?
Give one disadvantage of accounting.

.2] Backup
/dev/backup_device is the Backup device on your system.
Your committee is getting annoyed and want the system backed up every week. 
What is the best way to do this (take into account efficieny) and give a reason.
Write the script that can be periodically run to backup /home onto /dev/backup_device.

.3] DNS
In zone files under BIND an address class is specified (e.g. PTR is a domain name pointer). Name 
two others and describe them to the best of your ability.

.4] E-mail
How do you display the mail queue?
User joe changed his username to skippy but he wants to have his mail to joe forwarded to his new
account. Provide the steps needed to do this.

.5] Jobs
You logout of bash and your background processes areterminating. How you would stop this?

You've just added a line to /etc/inetd.conf for a funky new pop3 daemon your friend Jimmy told you
about. How do you start the POP3 daemon.

You're running a distributed net client and you want to decrease it's process priority. How is this 
done?

.6] What is BUGTRAQ?

.7] Name 4 security resources a sysadmin should use (i.e. mailing lists, newsgroups etc.)

.]6[---- Scipts (Yes, we said SCIPTS!)
--------------------
Scripts can be done in shell, or a scripting language of your choice.

1.
You're on a system with grep but GNU grep is not installed. This means the "-r" option which is 
normally used to recursively search subdirectories it not available. You want to write a script to search for 
"sex" in a number of subdirectories.

2.
You uploaded a load of .GIF's but they are in uppercase. There's 200 of them and you want to convert them
all to lowercase. Write the script.

3.
User badass has processes running all over the place. You want to kill all of them. How would you do that?

.7] --- FreeBSD (Yes, it's FreeBSD specific)
--------------------

1.
How would you install a package from the ports collection?

2.
How would you update your ports skeleton directories?

3.
How would you update to the latest version of FreeBSD (without a CD!)

4.
How would you add a new disk to a FreeBSD machine, format it to DOS format, and mount it as /mp3z ?

5.
What version of FreeBSD does Enigma run?

6.
What is a disk slice ( apart from "a slice of a disk" )? What are the advantages of them over normal partitioning schemes?

7.
On Enigma, /dev/da2s1e is mounted on /var/tmp. Explain each part of that device name.

.8] ----- General
-----------------

1.
When was the last time you used telnet or FTP to login to redbrick? Why?

2.
If you were installing a new login server for redbrick, what OS would you install (specify a distro, if linux). Why? Apart from Windows, which OS would you NOT install. Why?

3.
How would you react if you discovered a Redbrick machine had had its root account compromised? Why? What would be the VERY first thing you would do? Why?

.9] ---- Networking
--------------------

1.
Redbrick Recently acquired a Fibre switch. Describe 2 advantages of using one of these instead of a normal hub (and no, it having more ports doesnt count).

2.
What would you use to prevent packet sniffing on the redbrick network? Is it long, and does it have a nail through it?

3.
You are configuring a new server on the redbrick network (136.206.15.0/24). You think you have it all fine and dandy. the output from 'ifconfig xl0' looks like this:

xl0: flags=8843 mtu 1500
	inet 136.206.15.9 netmask 0xffff0000 broadcast 136.206.15.255
	inet6 fe80::260:8ff:fe53:9a7c%xl0 prefixlen 64 scopeid 0x1 
	ether 00:60:08:53:9a:7c 
	media: autoselect (100baseTX ) status: active
	supported media: autoselect 100baseTX  100baseTX 10baseT/UTP  10baseT/UTP 100baseTX 

Why can't the machine communicate with the rest of the network?

4.
On the same machine, the routing table begins like this:
(Hint: Redbrick's router's address is 136.206.15.254)

Routing tables

Internet:
Destination        Gateway            Flags     Refs     Use     Netif Expire
localhost          localhost          UH         21 14909520      lo0
136.206            link#1             UC          0        0      xl0 =>
136.206.15/24      link#1             UC          0        0      xl0 =>
Enigma             0:60:8:53:9a:7c    UHLW       15        0      xl0
136.206.15.254     0:30:b6:34:bb:58   UHLW       37       10      xl0    956

NOW why can't the machine communicate with the rest of the network?
Spot the silly bits. Bonus marks for spotting them both^H^H^H^Hall.

.10] ---- Hardware

1.
Name 3 differences between IDE and SCSI. Which is better? Why?

2.
What are the advantages and disadvantages of of using Software RAID rather than hardware RAID?

3.
You assemble a machine from parts, connect it to mains, and power it on. Nothing happens. What would you check first? Why?

.11] ---- Obligatory Novelty Questions.

1.
Why do you have so much time left?

2.
Would you beat a confession out of a user suspected of tampering with the system? Would you enjoy it?

3.
What shell do you use?

4.
What editor do you use?

5.
Do you have a criminal record? Is it related to a user not reading the manual?

6.
How many prolog programmers does it take to change a lightbulb?

7\. 
Name 2 ways you would disable a user

8.
How late do you think I had to stay up to write this sodding thing, you ungrateful wankers?

</pre>

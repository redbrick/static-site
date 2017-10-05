---
title: 'Admin Test 2001 AGM'
---

<pre>Redbrick Admin Test : - written by Noel Fitzpatrick (noelfitz) proofed by Phil
Reynolds (phil).
                        contributions by Dave Murphy (drjolt) and Brian
Scanlan (singer).

The test is split up into 10 different areas these areas do not carry equal
marks,
they have no relevance to the marking scheme at all they are simply there to
give
candidates an idea of what is expected of them from each group of questions.

Things to note - the scripting section is worth 20% as our the OS specific
questions.
                 (ie 10% for each).

All questions bar the FreeBSD and Solaris questions can be answered in the
context of any
form of Unix you wish. You are not required to  specify the Unix in which
context you are
answering the questions but I would advice you do as to narrow the possible
margin of error.

Good luck to you all!

>>Solaris

1) How would you add a new hard disk to a Solaris system? (2 marks)

2) How would you add a new network card to a Solaris system? (2 marks)

3) How would you add a program to the startup scripts of a Solaris
   system?(2 marks)

4) Which of the following commands does NOT cause the shutdown scripts
   to be run before halting the system? (2 marks)
        A) init 0
        B) uadmin 2 0
        C) halt
        D) shutdown -i0 -g0 -y

5) You have obtained a Solaris patch, which you now wish to install
   on your system. What is the procedure?(2 marks)

6) Which of these features does Solaris 8 not include as standard?(2 marks)
        A) RAID
        B) Network Interface Failover
        C) C Compiler
        D) Filesystem Metadata Logging
        E) Web Server
        F) Perl

7) Which of the following partitioning schemes should NOT be used with
   Solaris?(2 marks)
        A) /, /home, /var
        B) /, /var
        C) /, /home, /opt
        D) /, /usr, /home, /var

8) How would you find out what Solaris patches are installed on the
   system?(2 marks)

9) How would you reduce the time needed to boot a Solaris system
   after a crash?(2 marks)

10)What does /etc/system used for?(2 marks)

11) Where do you find the BSD commands on Solaris?(2 marks)

12) The killall command - How does it differ on a Solaris system to a Linux
one?
        Bonus Question: Which former Redbrick admin learnt this the hard way?
:)
        (Wasn't me).(2 marks)

13) What's after happening if you see this error after running make?
    "/usr/ucb/cc: Language optional software package not installed"(2 marks)

14) On what Sun website do you find patches, infodocs, bug reports, etc.?(2
marks)

>> FreeBSD

1) What is a disk slice? Give another more common name used for it?
   (4 marks)

2) Describe how you would install an application from the ports system?
   (5 marks)

3) What script does init run when it receives a shutdown command?
   (5 marks)

4) What command would you use to change the limits set for a user in
   login.conf. Say for example you received this error when trying to tar
   a large group of files :-

   archives/private/chat-climbing/2000-November/000583.html
   archives/private/chat-climbing/2000-November/000609.html
   zsh: file size limit exceeded  tar cvf archives.tar archives/
   (5 marks)

5) What is a sysctl? Why would you use it?
   (6 marks)

>> Networking

1) Name 2 commands used to query DNS?
   (5 marks)

2) What command would you use to i)Give information regarding your current
network connection.
                                ii)Probe a host to enquire what services it is
running.
   (5 marks)

3) Give two differences between a hub and a switch and give 2 advantages of
using a switch over
   a hub?
4) If you had to change the IP of a host how would you go about doing it?
   (5 marks)

5) What is inetd? Why shouldn't some services be ran from inetd? Give an
example and a reason.
   (5 marks)

>>Security

1) What is a firewall?Name the two types of firewalls?
   (5 marks)

2) What is a wrapper? Give an example of a commonly userd wrapper or a service
which
   one could be applied to?
   (5 marks)

3) What is scp? Describe how to use it - giving an example?
   (5 marks)

4) What is identd? Describe briefly how it works?
   (5 marks)
5) What does it mean to chroot a process? What affect on the security of the
process
   does this have?
   (5 marks)

7) What resources would you use to keep uptodate on the security issues for
your system?
   Gives specifics.
   (5 marks)

>>Hardware

1) Describe the steps involved in adding a harddisk.
   (5 marks)

2) What is the difference between a DIMM and a SIMM?
   (2 marks)

3) How would you go about specifying what device is a master
   and which are slaves on an IDE chain?
   (5 marks)

4) Give two differences between IDE and SCSI?
   (5 marks)

5) What is RAID? What are the 3 most common RAID levels
   give a brief description of each one?
   What are the advantages of using RAID?
   Which is better, RAID 0+1 or 1+0, and why?
   (10 marks)

6) What does it mean to mirror a disk?
   (5 marks)

7) Name 2 things to check when configuring SCSI.
   (5 marks)

>>OS type questions

1) What are character and block files ? What are the differences between the
two?

2) What are major and minor numbers in relation to a device?
   (5 marks)

>>Software/General unix questions

1) Given a tarball prog.tar.gz describe how you would unpack it giving the
   exact switches for the commands?
   (5 marks)

2) Describe how you would start the apache webserver if it wasn't running?
   (5 marks)

3) What 2 programs need to run to provide the news system on RedBrick?
   Are both of them necessary?
   (5 marks)

4) What is a crontab? Describe how you would add one ?(This does not refer to
   editing /etc/crontab)
   (5 marks)

5) If you forgot the root password on enigma how would you recover/change it?
   (5 marks)

>>Backups

1) Name two commands which could be used to backup a file system or part of a
   file system?
   (5 marks)

2) What is the mt command used for?
   (5 marks)

>>Auditing/Accounting

1) Describe how you would turn process accounting on?
   (5 marks)

2) Name two programs which can are used for analysing logs?
   (editors and grep don't count)
   (5 marks)

>>Scripts

1)Kill a user and all his/her processes.
(10 marks)

2)Given that /home/member is over 12Gb now write a script which you could use
to
  tar half the /home/member then prompt an admin to enter another tape or
mails the
  admins that the first tape is done and remind him/her to enter another
  tape and to run a second script to tar the remaining files?
(10 marks)

3)Write a script to ping all the hosts in a/etc/hosts just once?
(10 marks)

4)Write a script to remove blank lines from a file.

5)Write a log rotate script : - to rotate /var/log/wtmp nightly to
  wtmp.1 where this is the previous days wtmp file and to keep these
  files for 7 days =>wtmp.2 is from two days ago and so on up to wtmp.7
(10 marks)

</pre>

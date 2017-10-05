---
title: 'Admin Test 2010 EGM'
---

1\. The first half hour is for scripting. During this time, man, info, apropos, perldoc, pydoc, etc (anything that's installed on redbrick) may be accessed. The internet may not.

2\. After the first half hour you may not access anything other than a text editor.

3\. We're watching you. Fun has a machete.

4\. All sections are not weighted equally.

GOOD LUCKS

## Scripting

### a=b;b=c;c=b;c=$((321 >> 3));echo $((a)) marks

1\. There have been a lot of failed login attemps lately, write a script to search through /var/log/auth.log and print out a list of the most frequently failed logins in the format: Number of failed logins user name ip address ( should put some example data in /var/tmp o r something) 13 marks

2\. Write me a script that scans /webtree for world readable wp-config.php files. When found you should email the user about the security risk and send an email to system-reports with a list of all files found. 13 marks

3\. There's been some problems with java processes crashing the system. Write a cron script (to run every 5 minutes) that will kill all java processes and alert the admins is the average load is above 5 13 marks

4\. Write a script to amuse me 1 mark

**No more use of man, info, apropos, perldoc, pydoc, etc (anything that's installed on redbrick) after this section. Fun _will_ cut you if you do not comply.**

## General

30 marks

1\. What are (5*1 mark each) -syslog-ng -nagios -munin -exim -postgres

2\. You just entered your password as your username when logging in via PuTTY. Is this bad? If so, explain how. 2 marks

3\. What are ulimits? Why do we have them? How do you set them? 2 marks

4\. You need to log in as root on a server, but no one remembers the password - what do you do? 3 marks

5\. What is the syntax of a cron job? How would you edit a specific users crontab? 2 marks

6\. What is init? What are runlevels? 4 marks

7\. How can you find out which user or process has a file open or is using a particular file system (so that you can unmount it)? How would you unmount it anyway? 3 marks

8\. What is a sticky bit? Explain how it works. 2 marks

9\. What are nice values? Who can change them? 2 marks

10\. Why is kill -9 bad? 1 mark

11\. What is RCS and why do we use it? 2 marks

12\. You want to see what system calls a program is making. How? 2 marks

## Linux

30 marks

1\. A user complains that they get an error message about too many clients already connected when trying to join some public irc network. What command would you run to find out who is connected to that network from redbrick? 2 marks

2\. Why might creating set[ug]id scripts be a bad idea? Why does it probably not really matter (on Linux at least)? 3 marks

3\. You're about to do some mad editing of config files, changing permissions and some other jazz. What should you run to record everything you do in case something goes wrong and you need to look over what you did? What other precautions could you take? 3 marks

4\. How would you list all running processes? How would you list only instances of apache? How would you only list their pids? 3 marks

5\. What commands would you issue to: Find the amount of free space on a disk 2 marks Find the UUID of a partition 2 marks Search for a package 2 marks Edit a users quota 2 marks

6\. How would you set a default route? 2 marks

7\. How would you check the load on a machine? 1 marks

8\. Lithium is transferring most of the radio transmissions from apollo 11 into his home dir. One of the files is 300M. How yould you change his filesize quota? 2 marks

9\. How would you bring up an interface? 2 marks

10\. What command would you use to delete downloaded package files. 1 mark11\. You can't run uptime to check load, and top is also not starting. How else would you check load averages? 3 marks

## BSD

20 marks

1\. How do you delete a user on OpenBSD? 2 marks

2\. What are jails for? How do they work? 3 marks

3\. What is pf? What could it be used for? 3 marks

4\. /dev/amrd2s1a Explain it plz. 3 marks

5\. BSD breaks up your drive into little letters. Why should you not mount anything on b? 3 marks

6\. How would you go about searching for nagios in ports? 3 marks

7\. OMG, there's no /etc/init.d in openBSD. How (generally) do I restart a program? 3 marks

## Networking

25 marks

1\. What is netstat? How is it useful? 2 marks

2\. What's the difference between TCP and UDP? 2 marks

3\. What is port knocking? What is it used for? 2 marks

4\. Redbrick has a /23\. What's that? How many IP addresses does that mean we have? 3 marks

5\. What are the differences between a switch, a hub and a router? What OSI layers do they work on? 4 marks

6\. Three commands to do a dns lookup please. 3 (1 mark each)

7\. What is a VLAN? Why are they awesome? Redbrick has three. What do we use them for? 4 marks

8\. What is a VPN? Why do we use one? 2 marks

9\. What is NAT? Why is it useful? 1 marks

10\. How would you go about opening a port on hadron? 2 marks

## Security

25 marks

1\. You've just been elected! What steps do you take to ensure your account is secure? 3 marks

2\. You have found an abandoned root shell, what steps would you take to give yourself a backdoor? 2 marks

3\. Explain how a buffer overflow works. 3 marks

4\. Why should you not run things like shadowmap? 2 marks

5\. You have just freshly installed a shiny new ubuntu server. What are the first steps you would take to secure it? 3 marks

6\. What are ssh keys? Why should you not use them to log in? 2 marks

7\. You attempt to log in one day and you see this: @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! @ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Should you panic? What could have happened? 2 marks

8\. Describes the steps that happen when a user runs passwd 2 marks

9\. What is a umask? What would a good umask be? 2 marks

10\. Why do we not use ftp? 1 mark

11\. What is apparmour? What is it used for? 3 marks

## Files and File systems

20 marks

1\. Name 3 different file systems and explain the differences between them (fat12, fat16 and fat32 do not count as 3 different file systems) 3 marks

2\. Explain what this means: UUID=c0837187-288f-4dbc-b9de-06d2403a5985 / ext4 errors=remount-ro 0 1 How would you find the name of the device that / is mounted on? 6 marks

3\. What command do you run to check file system consistency? 2 marks

4\. What are the differences between hard and soft links? What are soft links useful for? 3 marks

5\. What's an inode? 1 mark

6\. How would you find the inode number of a file? How would you delete a file by it's inode number? 5 marks.

## Hardware

25 marks

1\. What architecture is murphy? What is it good for? Whay does it fail hard at? 3 Marks

2\. What is RAID? What are the advantages and disadvantages of Hardware and software RAID? Explain RAID 0, 1, and 5\. How many disks are needed for each? 1+2+2+2+2=9 marks

3\. Why, when you're buying a server, is a management card important? 2 marks

4\. What is an IP-KVM and why do we need one? 2 marks

5\. What is a UPS? Why do we want them taking up our rack space? How could we use this to shut down the machines in a power failure? 4 marks

6\. DAS, how soes it differ from NAS? Advantages and disadvantages please. 2 marks

7\. What is SAS, how does it differ from scsi? 2 marks.

8\. What temperature should the server room be? What do you do if you ever turn the aircon off? 1 mark

## Bonus Round

+-"Your mother" marks  
1\. Tabs or spaces?  
2\. The python style guide states that you should murder your parents and all your extended family for best practices. Should you follow it?  
3\. vim or emacs?  
4\. What is your favourite OS (Insta fail for solaris)?  
5\. GPL or BSD licence?  
6\. SYN  
7\. Who is on for getting food after this? I am hungry. Who is up for paying?

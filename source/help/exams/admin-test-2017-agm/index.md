# Admin Exam 2017 AGM
Total Marks: 80

![Good Luck](https://pbs.twimg.com/profile_images/733673042845503489/A0mCyCC-.jpg)

## GNU/Linux [30 Marks]

1. What is systemd? (2 marks)
2. What does LVM stand for and what does that actually mean? (3 marks)
3. A user has somehow renamed a file to a name with strange unicode characters
   and you cannot delete that file by name. How would you go about deleting
   that file? Give commands with parameters. (4 marks)
4. You’ve just royally screwed your shell by running cat on a binary. How do you fix
   this? (2 Marks)
5. You’re trying to unmount /storage, but it keeps complaining about being busy.
   How do you find out what/who is using it, and kill the process/user? Also,
   how do you unmount without killing the user/process? (4 marks)
6. You have a list of compressed files in /var/log. You need to search through the logs.
   Give 3 ways of doing this. (3 marks)
7. Give 5 advantages of getting a package from a package manager rather than building
   it from source. What command would you run to update packages on a
   redbrick server? (5 marks)
8. You want to create a user to be used by a daemon. What do you set its shell
   to? (2 marks)
9. What is fail2ban? Is it a good idea to run it on your server, why? (2 marks)
10. What Is a chroot? Why might you use one? (3 marks)

## BSD the Os not the Licence [30 Marks]

1. Illustrate 3 differences between a GNU/Linux system and a FreeBSD system. (3)
2. You've been added to the root group on a FreeBSD system. This, however,
   doesn't enable you to do anything. Why is this the case? (3)
3. What is a Jail? Why might you want to use one? (3)
4. What does Redbrick use FreeBSD for? (3)
5. What utility would you use to manage users and groups on FreeBSD? (1)
6. How would you have a script 'resign.sh' run on startup? (2)
7. How would you configure a network interface on FreeBSD? (4)
8. What is the command to list the currently loaded pf rules? (2)
9. How would you install packages in FreeBSD? (2)
10. How would you show the routing table in FreeBSD(2)

## Networking [ Marks]

1. What is an SFP? Where would you expect to find one? (2)
2. Why do we only allow packets through our firewall on a select number of ports? (2)
3. No one can seem to connect to anything on Redbrick. Walk us through how you would go about trouble shooting this. [4]
4. People seem to be able to connect via IP but not via DNS. Name some tools you could use to trouble shoot this. [4]
5. How would you go about looking at a config on one our switches or SRX (juniper or cisco)
6. Give the syntax for adding an entry to DNS(bind9) with the following info
    graphs.redbrick.dcu.ie point to 136.206.15.69
    pretty.redbrick.dcu.ie point to graphs.redbrick.dcu.ie
    graphs.redbrick.dcu.ie also point to 2001:41d0:e:1232::1 
7. Explain briefy what happens when you type in redbrick.dcu.ie into a browser [4]
8. When would you use tcpdump. Give an example of its syntax [3]
9. What is a Vlan? what are they used for? [2]
10. What is a virtual interface? What file would you modify to create one?

## File Systems [ Marks]

1. ext4, used by most modern GNU/Linux systems, is a journaling filesystem.
   What is meant by this? (2)
2. What does RAID stand for? (2)
3. Describe the structure of 3 different RAID variations, giving advantages and
   disadvantages for each. You may describe the structure in words, or with a
   diagram on the provided paper. (2 + 2 + 2)
4. What is a sticky bit? How and why would you set it on a file? (2)
5. Name a non-RAID multi disk setup. Give an advantage and a disadvantage. (2)
6. What protocol(s) might you use to mount a filesystem over a network? What one
   does Redbrick use? (3)
7. What are fdisk and gdisk? What situation would you use each in? (2)
8. What file would you modify to mount a filesystem to the mountpoint `/webtree/` on boot? (2)
9. What does the command `sync` do? (1)
10. What are the pros and cons of Hardware RAID & Software RAID.
11. What is a UID and a GID? Why are they useful? (3)
12.

## Security [30 Marks]

1. How would you disable SSH login as root, on Linux? (3)
2. Why might you want to run SSH on a non-standard port? (2)
3. You have forgotten the passwordsafe password. How do you gain access? (2)
4. `chmod -R 777 ./*` Why is this literally the worst thing ever? (3)
5. A user has launched a new website for another society. They type ls -l and the following is output;
   `gobshite@azazel (~/public_html/) -> ls -l [8:25] total 12K
   -rwxrwxrwx 1 gobshite member 116 2013-10-21 19:55 blah.php
   -rwxrwxrwx 1 gobshite member 50 2013-10-21 19:25 database.php
   -rwxrwxrwx 1 gobshite member 1593 2013-10-21 19:17 index.php`
   How would a regular user go about exploiting this? (3)
6. Apache runs as the www-data user, yet users scripts run as themselves. How is this done? (3)
7. What is wrong with the following?
   `mysql -u root -h mysql.internal -p=ThisIsTheRootPassword redbrickdb`
	(2)
8. Our servers are being hammered by a load of Russian IPs. What do you do? (2)
9. Briefly explain the purpose of each of the following: (1 each)
	- /etc/shadow and /etc/group
	- SELinux
	- dm-crypt
	- SSL
	- Telnet
10. A major Linux security vulnerability has been announced. How do you go about
    patching your machines with minimal downtime? (5)

## Scripting [30 Marks]
This Section can be answered in a language of your choice.

1. Mailing lists are broken and we need to send the announce to all our users.
   Write a script to send the announce to our list of users, which is stored in
   a csv file, of `name,username,alt-mail` called `iShouldntHaveThis.csv`. (3 marks)
2. Write a script that takes usernames and password hashes from /etc/shadow.
   The script should then try and crack them using john the ripper. If the
   password is found in under 10 minutes email the user their password and tell
   them it's shit. (10 marks)
3. You've realised that we run a 10 year old version of php and update it. All
   the old php scripts break. Turns out users with old mysql password, with a
   hash of length 16 bit, need to reset their password. Write a script to find
   all users who need to change their with the old passwords, email them saying
   they need to change their password and that their php has been disabled.
   The script should also disable those users php if it access mysql. (10 marks)
4. Write a script to scan all users' web directories for world editable files.
   Change their permissions to the correct permissions and email the user
   telling them the file you changed and why this is important. (5 marks)
5. Write something to make us laugh. (2 marks)

## Docker [20 Marks]

1. What is Docker? What does Redbrick use it for? (2)
2. How do you make data persist across a container restart? Give an example of
   the command. (2)
3. What are 2 methods of getting logs out of a docker container? (2)
4. You try to run a container and it doesn’t start. How would you go about debugging
   the problem? (3)
5. What command do you use to update a docker image? (1)
6. What is the difference between docker attach and docker exec? Why would
   you use one over the other? (2)
7. What Is Docker-compose? What does Redbrick use it for? (2)
8. When should you use a docker-compose file vs a Dockerfile? (3)
9. What is a container orchestrator? And why does Redbrick not currently use
   one? (2)
10. Give the docker command to run a container with port 8000 on the container bound to port 80 on the host. (1)

## Practical [45  Marks]

2. Login with the details provided and install apache.
3. Serve some other page that isnt the default page.
4. setup fail2ban
5. add 2 users of your choice
6. enable one of these accounts to be able to use sudo


## BONUS ROUND [ALL THE INTERNET POINTS]

1. You've got root, what now?
2. How weird will zergless look without a beard?

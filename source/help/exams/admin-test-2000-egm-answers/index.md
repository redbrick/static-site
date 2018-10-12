---
title: 'Admin Test 2000 EGM Answers'
---

<pre>From: valen@RedBrick.DCU.IE (John Looney)
Newsgroups: redbrick.babble,redbrick.computing.unix
Subject: Re: Last Admin Test.
Date: 10 Apr 2001 09:29:52 GMT

doc@CONSORTIUM.RedBrick.DCU.IE broke a keyboard on:
>.1] Name two ways to disable a users account.

 Disable the user, or merely threaten them with violence if they touch a
machine.

>.2] You want to change a person's username from 'joe' to 'skippy'. 
>Describe how this process would be done (Remember the user's home 
>directory is /home/joe)

 Hmm. Bribe the nice people at the dept. of social welfare to change the
name in their computers. Fake a birth cert. Use this, and a faked driving
license to get their name changed in the DCU computers.

>.3] How would you set a users' password?

 Beat it into them with a leather awl, in morse code, on their arm, so they
don't forget. Then get one of the other admins to change it on the system.

>.1] How would you remove a file starting with a "-"

 find . -exec rm -rf {} \;

>.2] What is an inode? Why is there a quota on the number of a 
>files a user can have as well as the space they take up.

 File directory block. 'Cos we are fascist, and users shouldn't be allowed
to use system resources.

>.3] On redbrick give an advantage of using ~/.mailspool to 
>collect mail, instead of the traditional /var/mail/$USER normally 
>used on systems.

 Because users are stupid, and have stupid friends that mail them big
fuck-off attachments. This way, when this happens, people with most porn in
their accounts get their mails bounced first.

>.4] How do you setup multiple IP addresses on a single interface?

 Set the IP address of the interface to a network broadcast address >:+)

>.5] Why is it a good idea to split up a filesystem instead of 
>having one big root partition?

 In event of a disaster, it'll really piss of the admins that have to fix
it; http://www.redbrick.dcu.ie/~valen/epic.txt

>Give two partition schemes for a 10Gb drive in two different
>situations (e.g. a Shell account provider, and a Home User. Give
>reasons for your partition choices and their sizes)

 / - 8 GB
 /home - 80K
 /var 2GB

 Why ? If you let the lusers too much space, they'll use up your bandwidth
downloading stuff.

 For home use;

 /usr/local/games - 8GB
 / - 1GB
 /var - 1GB 

>.6] You've just installed apache by hand and now you want it to 
>startup by default every time you boot up. How is this achieved?

 echo "init=/sbin/httpd -X"  >> /etc/lilo.conf ; lilo

> ]4[---- Security --------------------
>.1] Some idiot just changed root's password and can't remember 
>it How do you get root back?
>(Background information: you can't read the shadow file, you're in
>front of the machine and you want to get root back on the machine).

 Start pulling teeth out with my leatherman, till he remembers. Then sow
the teeth in the ground and make a skeleton army that can be then told to
type random strings of passwords - eventually they'll get it right. Take
some skeletons aside, and get them to torture other people that don't know
the password. Sow their teeth. Keep going till we have an infinte number of
skeletons typeing at an infinite number of keyboards.

>.2] Why are telnet/ftp/POP sessions inherently insecure? What can 
>be done to resolve this?

 'cos little wankers snoop the network. We can crucify then. And set the
skeletons on them.

>How is accounting turned on? What information can it supply (two
>points is sufficient) and how do you retrieve this information?
>Give one disadvantage of accounting.

 An accountant can be turned on by bathing them in money. You can get
information out of accountants with sufficent skeletons. The disadvantage
is that the information is boring.

>.2] Backup
>/dev/backup_device is the Backup device on your system.  Your
>committee is getting annoyed and want the system backed up every
>week.  What is the best way to do this (take into account efficieny)
>and give a reason.  Write the script that can be periodically run
>to backup /home onto /dev/backup_device.

 rm /dev/backup_device
 ln -s /dev/null /dev/backup_device
 echo "0 0 * * * (for i in /dev/da* ; do dd if=$i of=/dev/backup_device 
; done)" | crontab

>.4] E-mail
>How do you display the mail queue? User joe changed his username
>to skippy but he wants to have his mail to joe forwarded to his
>new account. Provide the steps needed to do this.

 rm -rf /home/skippy

 Now mail going to joe, goes to the same places as to skippy.

>.5] Jobs
>You logout of bash and your background processes areterminating.
>How you would stop this?

 Phased-plasma rifle in the forty watt range.

>You've just added a line to /etc/inetd.conf for a funky new pop3
>daemon your friend Jimmy told you about. How do you start the POP3
>daemon.

 Go "RAAARRRR" at it.

>You're running a distributed net client and you want to decrease
>it's process priority. How is this done?

 PID=`ps aux| grep netrek | cut -f2`
 renice +10 $PID

>.6] What is BUGTRAQ?

 A porn list that script kiddies jack off to. 

>.7] Name 4 security resources a sysadmin should use (i.e. mailing 
>lists, newsgroups etc.)

 Skeletons.
 Leatherman.
 The appropriate application of brute force.
 Ka Chun.

>1\.  You're on a system with grep but GNU grep is not installed.
>This means the "-r" option which is normally used to recursively
>search subdirectories it not available. You want to write a script
>to search for "sex" in a number of subdirectories.

 cd /home/macbain
 grep sex * */*

>2\.  You uploaded a load of .GIF's but they are in uppercase. There's
>200 of them and you want to convert them all to lowercase. Write
>the script.

  mount /home -o check=relaxed,remount

>3\.  User badass has processes running all over the place. You want
>to kill all of them. How would you do that?

 Set the skeletons on badass.

 I'm bored now.

Kate

-- 
The words of the unwary are apt to cause needless pain and bloody violence.
                                                        - Zen Master Greg

</pre>

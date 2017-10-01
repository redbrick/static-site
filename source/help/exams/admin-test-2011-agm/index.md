---
title: 'Admin Test 2011'
---

## Scripting - (40 marks)

1. So, upstart is shit. You've noticed that it doesn't seem to start syslog-ng.  Write a script to check if it's running. If it isn't, start it. (13 marks)
2. Some cunts keep housing warez on their webspace and the IRMA or IMRO or whatever they're calling themselves this week are fed up sending us cease and desists. Once more strike and we're out. Write me a script that searches /webtree for files of the following types (mp3, avi, wma, wmv, aac, flac), chmods the files to 000, emails the user with a warning to take it down, and emails a list of files to admins (15 marks)
3. We're moving /storage from minerva to azazel. Some users (cough cough) have a bigger quota than the default 2G. This will mess everythig up for cunts like fun when we move. Write me a script to check all users quotas and email a list of all users with non-default quotas to admins@redbrick.dcu.ie in the following format: Username Quota (8 marks)
4. Some users also have a different filesize quota (default is 150M), email a list of users with a bigger filesize quota to admins in the form: Username Filesize_quota. Hint: limits.conf (5 marks)
5. Write a script that amuses me. (2 mark)

## General - (35 marks)

1.  Minerva has booted without any swap space because the line in fstab was commented out. What command would you use to activate the swap space and stop asplosions? (3 marks)
2.  What does DHCP stand for? What does it do? Why would redbrick want a DHCP server?(2 marks)
3.  MySQL has taken a spa attack, and you can't get the damn thing to start again. What steps would you take to figure out why it's behaving like this? (2 marks)
4.  You've noticed your server has been getting alot of brute force attacks of late. It's unlikely that any of these attempts will even be successful, but the jittery paranoid guy working the controls in there, feels you should do something about it. What tool could you use? How does it work? (3 marks)
5.  You stopped minerva from exploding earlier, but, what is swap space? Why would you want it? (2 marks)
6.  What signal is sent to a process when it's suspended? What signal is sent to it when it's resumed? (2 marks)
7.  Some spa has pissed you off, how would you kill all of their processes in one go? (1 mark)
8.  Tell me what the following are and give me a brief description of what they do:
  *   openntp
  *   nginx
  *   apparmor
  *   git
10.  You've updated LDAP, but the old information is still appearing. What the hell is causing this? (1 mark)
11.  What's utmp? (1 mark)
12.  How do you change the root password? Now that you've changed it, how do you inform the other rootholders securely? (1 mark)
13.  nsswitch.conf, what's this bollocks? (3 marks)
14.  How would you check what library calls a program is making? (2 marks)
15.  What is /proc? What is contained in /proc? How does /proc differ in linux and BSD? (4 marks)
16.  What is a umask? What is a suitable value for a umask and why? (3 marks)
17.  What is chkrootkit? (1 mark)

## Linux - 20 marks

1.  Give me 2 different ways of searching for a specific man page.(1 mark)
2.  How would I find out if a specific package is installed? (2 marks)
3.  Some dickhead has made uptime, top, etc point to /dev/null. How am I supposed to be able to tell what the load average is now? (2 mark)
4.  You find yourself at a shell, but you've no idea what distro the machine is. How would you find out what distro it's running? (1 mark)
5.  Imagine a scenario where redbrick needs to modify a package (Unimaginable, I know). You have the source and have made your mad hacks^W^W changes. How would you rebuild the package?( 3 marks)
6.  What command can you use to view boot messages?(2 marks)
7.  Why should you not use useradd? (What does it not do by default) (2 marks)
8.  5\. Grub 2 on 10.04 doesn't like giving you a grub menu on boot. Where do I change this? What option needs to be unset/set?(3 marks)
9.  What is selinux? What does it do? (4 marks)

## Networking - 20 marks

1.  What is NAT? How does it work?(2 marks)
2.  How would I go about activating a port on hadron?(5 marks)
3.  OMG! WE'RE OUT OF IPV4 ADDRESSES! Should I be worried?(1 mark)
4.  Redbrick has a /23\. What's that then? So how many usable addresses do we have? How much would it fetch on the IP black market? Supply and demand you know.( 2 marks)
5.  What is DNS? How does it work? What happens if our DNS server doesn't know what crack we're smoking?(Translation: If the DNS server we're querying doesn't know redbrick.dcu.ie)(3 marks)
6.  What is STP? How does it work?(4 marks)
7.  A command to show the routing table on your linux or BSD of choice plox.(1 marks)
8.  what is inetd? (2 marks)

## Security - 20 marks

1.  What is a buffer overfow, and how can it be used in an attack? ( 2 marks)
2.  So like, what could be possibly be wrong with this code? (2 marks)

```
#include <stdio.h>
#include <syscall.h>
#include <sys types.h="">
#include <unistd.h>
int main(void) {
  int uid;
  uid=getuid();
  setuid(0);
  system("useradm resetpw");
  setuid(uid);
  return(0);
}
 ```

4.  What does it mean to chroot a process? What effect does this have on security?(2 marks)
5.  What lists should a young elected admin subscribe to to keep abreast of security issues? (1 mark)
6.  What is the deal with these permissions? What bits are set? What user/group would it run as? -rws--s--x 1 fun committe 66 2011-02-07 23:36 waf.sh (3 marks)
7.  How does ssl help ensure secure data transmission? How do you know that the SSL cert is legit? (3 marks)
8.  What's a canary? (2 marks)
9.  What is a honeypot? How does it work? (2 marks)
10. `.:/bin:/sbin:local/bin:/bin::/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin` Why is this insecure? (3 marks)

## (Open|Free)BSD - 14 marks

1.  Why should you not mount anything on b? (1 mark)
2.  You're trying to install something on OpenBSD because it's not in the damn base system. You run: _pkg_add -v http://ftp.heanet.ie/pub/OpenBSD/4.7/packages/i386/wget-1.12p0.tgz_  
    But the damn thing is just hanging. Why? How do you fix it? (2 marks)
3.  What's pf? Where would you find it's config file? Y? (2 marks)
4.  YOu've edited the config file mentioned above, but nothing's changed. What's the command to fix this sorcery?(2 marks)
5.  What is a jail? How does it work? (2 marks)
6.  Give me the command to install screen from ports. (2 marks)
7.  What is a securelevel? Explain how they work. (3 marks)

## Filesystems - 25 marks

1.  What's an inode? How would you find out a file's inode number? (2 marks)
2.  Give me the command to delete a file by it's inode number. Why would I ever need to do that? (3 marks)
3.  What's a sticky bit? (Not the one that frequently ends up in gw's ma) (1 mark)
4.  Name 3 filesystems, name at least one difference between them. Which one would you choose over the other two? Why? (3 marks)
5.  Briefly describe (as in, don't write a ridiculous essay, but convey your understanding) the Filesystem Hierarchy. (3 marks)
6.  What is a journalling filesystem? Why would you use one? (2 marks)
7.  What's a hard link? What's a soft link? What's the difference between hard-links and soft-links? What are the commands to hard-link and soft-link files? (3 marks)
8.  What are ctime, atime and mtime? (3 marks)
9.  You have an ext2 filesystem. You cannot create a file on a partition. Permissions are fine. The partition is not mounted read-only. What else could be the culprit? (2 marks)
10.  UUID=0a57784e-0867-49be-995b-343a2e1a8682 /webmasterporn ext3 relatime 0 2 What the fuck is this shit? Where is it from? FOR THE LOVE OF GOD WHAT DOES IT MEAN? (3 marks)

## Hardware - 16 marks

1.  Why are ALOMs the sex? (1 mark)
2.  *Generic RAID question* Explain the following RAID levels, advantages and disadvantages and minimum number of disks: RAID 0 RAID 1 RAID 5 RAID 10 and for shits and giggles, RAID 6 (6 marks)
3.  So you're speccing up a new server for redbrick, but on a limited budget. You can either get a badass processor and a moderate amount of ram, or a mahoosive amount of ram, and a moderate processor. What do? More importantly, why? (3 marks)
4.  So like, I compiled something on murphy, but it doesn't run on minerva? What sorcery is this? (1 mark)
5.  What hardware is azazel rockin'? (1 mark)
6.  I need to know the UUID of a disk pronto. What command could I use to find this out? (2 marks)
7.  DDR2 and DDR3\. What's the difference? (2 marks)

## Bonus* - 1,000,000 marks

1.  Pet swans. Why can't redbrick have any?
2.  Obviously fun cannot be bought, but if he could, how many pints would you buy him?
3.  Why is port knocking on a server different from gw's ma?
4.  Which distro of (Li|U)NIX is most like mak's sister and why?
5.  What would you do to the people who wrote upstart if you ever met them?
6.  Nano or vim? (Note your life depends on this. If you use emacs you're already in hell)
7.  If elected, will you question my homedir size? I NEED THOSE 5 DIFFERENT VERSIONS OF GCC

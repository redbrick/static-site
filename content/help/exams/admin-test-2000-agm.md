---
title: Admin Test 2000 AGM
---

DCU Networking Society - System Administrator Test. Friday, February 11th 2000,
2pm.

This exam will take an arbitrary amount of time. No persons may leave before the
beginning of the exam or after security lock the building. You may not
communicate with any other person or spirit during the course of the exam, nor
may you read books which are written in a language which you understand. You may
not log into redbrick during this exam. Marks will be given for reasonable
attempts, marks may be deducted for stupidity, but no marks will be deducted for
humour. (Neither will marks be awarded for humour.) Where relevant you may
answer on any version of UNIX, or UNIX clone, provided, where relevant, you make
clear what version of UNIX you are answering on.

# Files ( 40 )

1. What does the 'sticky bit' mean for directories? ( 8 )
1. What does the 'set-gid bit' mean for directories? ( 8 )
1. What is the difference between hard and symbolic links? ( 8 )
1. Explain the purpose of this command: mkfifo. ( 8 )
1. Give an example of a use of each of the above. ( 2 x 4 )

# Scripting ( 40 )

1. Write a script or command, in the scripting language or shell of your choice,
   to: search every file in a users home directory for the string 'i hate
   <insert your username here>', and to delete that users account if the string
   is found. ( 31 )
1. Describe briefly each of the following: Perl, awk, grep ( 3 x 3 ) [ This was
   a typo - I meant to ask Perl, awk and sed ]

# Security ( 40 )

1. Explain what is meant by Real UID, Effective UID and Saved UID? Which is set
   for a setuid program. ( 5 )
1. Which of the following must be setuid root, which should not be setuid, and
   which are sometimes setuid? chsh, mount, ping, nice, passwd, init, write, ps
   ( 8 x 1 ) [ I meant to ask why - it would have been a fairer question. ]
1. Give five examples of things which would make a password 'weak'. ( 5 x 1 )
1. What is changes is a non-root user permitted to make using the chgrp command
   on Enigma. ( 6 )
1. What is wrong with this? Why? ( 5 )

   ```bash
   echo $PATH
   .:/bin:/sbin:/usr/sbin:/usr/bin:/usr/local/bin:/usr/local/sbin
   ```

1. Explain the purpose of /etc/master.passwd on Enigma. ( 6 )
1. Explain very briefly the principle of public key encryption. ( 5 )

# Devices ( 25 )

1. What does the first letter of the permissions on each of these devices mean?
   Explain clearly the difference between each type of device and give two
   examples of each. ( 15 ) crw-rw-rw- brw-r-----
1. What is the third type of device? ( 5 )
1. What is the difference between a real and pseudo terminal? (5)

# File systems ( 20 )

1. What happens to the contents of /example, if you mount a drive at that point.
   ( 5 )
1. What sequence of commands would you use to setup and mount a newly installed
   hard disk. ( 12 )
1. On enigma /dev/da2s1e is mounted on /var/tmp. Explain each part of the device
   name. ( 3 )

# Networking ( 50 )

1. What is a class B network? What is a netmask? ( 2 x 5 )
1. What command is used to configure an interface? ( 5 )
1. Name a command which can be used to tell packets which gateway they should
   use to reach another network. ( 5 )
1. What is an ethernet address? ( 5 )
1. What is TCP? ( 5 )
1. What is meant by full duplex? ( 5 )
1. Explain what each of the following are: MX, A, PTR, CNAME, SOA ( 5 x 2 )
1. What is the serial number of a zone file used for. ( 5 )

# Fuck Ups ( 10 )

1. Why should you not use pico to open a many, many megabyte Apache log file. (
   5 )
1. Distinguish between killall on Solaris and Linux. ( 5 )

# E-Mail and News ( 20 )

1. What is a Mail Transport Agent? What MTA is used on Enigma? ( 5 )
1. What is a Mail Delivery Agent? What MDA is used on Enigma? ( 5 )
1. Where are mail aliases typically stored? What command should be run after
   making changes to this file? ( 2 x 3 )
1. What program runs the newsgroups on Enigma? ( 4 )

# Miscellaneous Stuff ( 22 )

1. Name two commands which could be used to backup data to a tape. ( 2 x 3 )
1. What command would you use to split a file into a number of pieces? ( 2 )
1. What command would you use to check what ports have processes listening on
   them? ( 4 )
1. Explain each of the following commands: nice, domainname, sync, true,
   ldconfig, wget, dmesg, wall, su, cat. ( 10 x 1 )
1. Describe NIS? ( 8 )

# Suitability ( 0 )

1. Do you have long hair? ( 0 )
1. Do you have a beard? ( 0 )
1. Do you wear sandals? ( 0 )
1. Do you own an anorak? ( 0 )
1. Are you power hungry? ( 0 )
1. Did you own an 8-bit computer? ( 0 )
1. Are you sad? ( 0 )
1. Do you dislike sunlight? ( 0 )
1. Is your computer your best friend? ( 0 )
1. Do you flee from members of the opposite sex? ( 0 )

Adam.

---

"I didn't sell out, I sold in, and then the people I sold into sold out"

- Sares on his AOL career.

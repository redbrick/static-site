---
title: 'Admin Test 2000 AGM Answers'
---

<pre>Redbrick System Administrator Test
February 11th, 2000

Example Solution
----------------

1.
a)	When the sticky bit is set on a directory, only the file's owner
	may delete the file.
b)	When the set-gid bit is set on a directory, files created in that
	directory will be owned by the same group as the directory.
c)	A hard link is another reference to a file.  Both files refer to
	the same inode, and the file is only deleted when the number of
	links drops to zero.  The hard link is indistinguishable from the
	original.  Hard links may not cross filesystems.
	A symbolic link is merely a file which refers to the filename of
	another file.
d)	mkfifo creates a named piped or fifo.  A fifo allows interprocess
	communications, one process opens the file for reading while one
	or more other processes open the file for writing.
e)	Sticky Bit: /tmp
	Set-Gid Directory:  /var/postfix/maildrop
	ln -s /usr/local/really/long/and/complicated/path link
	ln .mailspool mbox

2.
a)	(A corrected version of pixies solution)  (For FreeBSD)
	#!/bin/sh

	for i in `find ~eviluser -type f`
	do
		if [ `grep -c "i hate pixies" $i` != 0 ] ; then
			echo "And you said you loved me..." | hey eviluser
			pw userdel -r eviluser	
		fi
	done
b)	Perl (Practical Extraction and Report Language) is a powerful
	interpreted scripting language, primarily useful for text
	manipulation and CGI.
	Awk is a pattern matching and text processing language useful
	for reformatting the output of other programs.
	Grep is a pattern matching program

3\.  
a)	Real UID identifies who we really are.  It is taken from the
	password file and not normally changed.  It may only be changed
	if our Effective User ID is zero.
	Effective UID determines a users file access permissions.  It may
	be set to either the processes real or saved UID.
	The Saved UID is set equal to a processes Effective UID at exec.
	For a setuid program, both Effective and Saved IDs are set.
b)	chsh	-	yes
	mount	-	sometimes (if users must mount floppy/cdrom)
	ping 	-	sometimes (if we want to give users ping)
	nice	-	no
	passwd	-	yes
	init	-	no  (only ever executed by root)
	write	-	no	(setgid tty)
	ps		-	no
c)	Shorter than 8 characters.
	All lower case
	All alphabetic
	Dictionary word
	Username, Real Name, Tasty (thanks Karl) Pet's Name
d)	You may change the group ownership of a file from one group you
	are a member of to another which you are also a member of, if you
	own the file.
e)	Having . in your path is a major security hole, as attempting
	to run ls in a users directory may lead to you running a nasty
	program they have written.  It is especially bad if . is at the
	front of your path.
f)	/etc/master.passwd on FreeBSD is equivalent to /etc/shadow on some
	other systems.  It contains encrypted passwords.
g)	In public key encryption, data is encrypted for a user using a
	public key which can be distributed freely.  Once encrypted the
	data may only be decrypted using that users private key.  Keys are
	created in pairs.

4.
a)	c = character device.  A character device is written to and read
	from like a file.
	Examples:	/dev/tty, /dev/null, /dev/psaux
	b = block device.	A device which is designed to be mounted via
	the mount command.
	Examples:	/dev/hda, /dev/fd0, /dev/cdrom
b)	A network device.
c)	A real terminal device is related to an actual physical terminal
	such as the console or a serial port, while pseudo terminals are
	allocated to processes wishing to emulate a physical terminal such
	as telnetd.

5.
a)	All files in /example are hidden while the drive is mounted, and
	cannot be accessed again until the drive is unmounted.
b)	Open machine, connect disk, power on.
	disklabel (on FreeBSD)
	fdisk
	mkfs
	mount
	(make appropriate changes to /etc/fstab)
c)	da2s1e
	a - first scsi controller (of this type)
	2 - scsi device
	1 - disk label
	e - partition

6.
a)	In a class B network the first two bytes of the IP address are
	the network address, and the second two bytes are the host
	address.
	A netmask is used to determine which part is the network address
	and which is the host address.
	Eg:		Class A:	255.0.0.0
			Class B:	255.255.0.0
			Class C:	255.255.255.0
b)	ifconfig
c)	route
d)	The physical address of a network card (assigned to the card on
	manafacture) and used to route data on an ethernet segment.
e)	TCP is Transmission Control Protocol and is responsible for
	checking data for missing packets, keeping packets in order, 
	connection handshakes, and directing packets to the processes
	waiting for them (via port numbers).
f)	A network connection over which data may be simultaneously
	transmitted and recieved.
g)	Types of records in a DNS zone file:
	MX	- Mail Exchange, where mail for the host should be delivered to.
	A	- Address, the ip address of the name.
	PTR - Pointer, the name for an ip address.
	CNAME - Canonical Name, a DNS alias.
	SOA	- Source of Authority, information about the Zone file.
h)	The Serial Number is used to detect when a zone file changes.  It
	must be updated every time a zone file is changed and is usually of
	the form:  YYYYMMDDnn, (nn number of the change today).

7.
a)	Pico will attempt to load the entire file into memory.  Users will
	get very annoyed and you won't get to do very much editing. (Vim
	does not do this.)
b)	On Solaris it kills all processes.
	On Linux it kills all processes of a given name.

8.
a)	A Mail Transport Agent is responsible from transporting e-mail from
	it origin to destrination over the network, and for directing mail
	to the appropriate Mail Delivery Agent.
	Postfix is used on Enigma.
b)	A Mail Delivery Agent is used to deliver mail to a users mailbox.
	Procmail is used on Enigma.
c)	/etc/aliases
	newaliases -v
	(Restarting the mailserver will work but is hardly the ideal 
	solution)
d)	innd

9.
a)	tar, dump
b)	split  (I only learnt about this when everyone answered it, I
	have always used dd.)
c)	netstat | grep LISTEN  ( I didn't require the grep. )
d)	nice - sets a processes priority
	domainname - sets a servers NIS domainname.  (Not DNS domainname)
	sync - Flushes disk buffers.
	true - Do nothing, successfully.  (To quote the manpage)
	ldconfig - Prepares information about dynamically loadable libraries
	for use by the run-time linker. 
	wget - Command line tool for fetching files via http.
	dmesg - Displays boot messages
	wall - Writes a message to the terminal of every user.
	su - Changes your uid.  It queries for the users password if you
	are not root.
	cat - Writes either its standard in, or files given as arguements
	to its standard output.  (I did not accept concatenates files)
e)	NIS - Network Information Service.
	Allows central management of a number of configuration files over
	a network.  May be used to manage /etc/passwd, /etc/hosts and 
	others.

10.
a)	Yes
b)	No
c)	No
d)	Yes
e)	Yes
f)	Yes
g)	Yes
h)	No
i)	No
j)	No	

Adam.

-- 
"I didn't sell out, I sold in, and then the people
 I sold into sold out"
   - Sares on his AOL career.

</pre>
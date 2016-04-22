---
title: 'Webmaster test 2004 AGM Answers'
---

 <sub> - [Helpdesk](../../) - [Joining](../../joining) - [Tutorials](../../tutorials) - [Exams](../../exams) -</sub>
## Note:

There are various ways to answer most questions. If the candidate explained the key points with a suitable amount of information they got the question right.

## A: So you wanna be head of webgroup? (25)

## (General Web Knowledge)

1.  CSS stands for Cascading Style Sheets. They are used to give a coherent style to a website.  
    The css information can be built into the page or included from an external .css file. The advantage of this layout is that the style of an entire site can be altered just by editing the sites css file.  

    xhtml stands for eXtensible HyperText Markup Language. Is is one of the new web markup languages combining HTML4 document types and XML.  
    It is designed to be xml conforming and operate in HTML4 agents. The advantage of this is to allow for your site to be future compatible aswell as backward compatible(5)
2.  SSI stands for Server Side Includes. SSI's trigger further actions whose output can be embedded into the page that it was called from.  
    Common uses are including other pages in the current page or executing inline CGI scripts.  

    The RedBrick website uses SSI both to execute inline CGI's and to include the templates for the outline of all pages i.e the header and leftside links,the footer and right side links. (5)
3.  Internet Explorer, Opera, (Firefox,Netscape,Mozilla) (5)
4.  Tasks of webgroup are to redesign the RedBrick website periodically. To maintain the RedBrick website and perform day to day updates in the form of front page announcements. To give help on web issues to members who ask for it.  

    Current member are : p colmmacc skyhawk emperor trevj kpodesta (5)
5.  ASP stands for Active Server Pages. They are Microsofts answer to dynamic web content. They make use of inline VBScript.  

    They are not supported on RedBrick as they are essentially designed to work on microsoft IIS webservers. (5)

## B: Ahoy there Lone Ranger, where's Tonto? (30)

## (Apache)

1.  `tar xvzf apache1_3_9.tar.gz` and cd to the directory it creates.  
    `./configure`  
    `make`  
    `make install`  

    Webservers default port is 80
2.  SSL stands for Secure Socket Layer.SSL is a security protocol allowing for traffic to be encrypted and decrypted.. The default port for an SSL'd webserver is 443\.  

    RedBrick makes use of it to secure the webmail service. SSL can be built into Apache2 by adding the --enable-ssl switch to the configure script.(5)
3.  **PHP as CGI:**  
    **Pro:** More secure than running mod_php. Allows for all scripts to be handled by suExec and thus ran as the user who owns them.  
    **Con:** It's slower than mod_php as before a script can run it must be passed on to suExec, suExec performs it's own internal checkes and THEN calls php to run the script  

    **PHP as module:**  
    **Pro:** Faster than php as a CGI as the php can be run by the server using the php module.  
    **Con:** The lack of the handoff to suExec allowes for the script to be executed as the web server user. The webserver has a higher security access than a normal user as such exploited scripts could cause more harm.(4)
4.  Virtual Hosts are a way for a single apache server to host websites for multiple different domains. Each site can have its own access controls ,error pages, etc.  

    RedBrick allows its members to host the websites belonging to their domains on the RedBrick server giving those domains all the availability of RedBricks services. The document root for vhosts on RedBrick is /webtree/vhosts (4)
5.  The function of suExec is to intercept web scripts, perform some checks, and execute the script as the user who owns it. Doing this makes certain that an exploited script only has the permission of the user who owns it and is less of a danger to the server.  

    Yes suExec will complain. Part of the checks done is to make sure that both the user and group match. In this case the user in now in the associat group yet the scripts permissions are set to the member group. This will cause a mismatch and will throw an internal server error (4)
6.  SSL certs work in combination with browsers to verify that a site claiming to be secure is. Most would be used to seeing a small lock in the corner of your browser. This will only be shown when the browser has verified that the website claiming to be secure is. The SSL cert holds the information required for this fact to be verified.  

    RedBrick creates their own SSL certs but these are not fully recognised as they are not signed by an offical cert authority.(4)
7.  The script is call apachectl. `apachectl startssl` will start the webserver with ssl support.(4)

## C: What do you wish of me Satan? (25)

## (Tomcat)

1.  Tomcat is a webserver that can serve java servlets, jsp and also normal html.  
    The minimum requirement to use tomcat is a context line in tomcats server.xml file (5)
2.  It runs on port 8080\. Users are oblivious as attempts to access urls containing *.jsp or /servlet are redirected to 127.0.0.1:8080 by apache rewrite rules (5)
3.  The problem is that tomcat runs as the jakarta user. PostgreSQL authenticates using ident as such the servlet is attempting to access their database using the jakarta username.  
    The same issue is the reason the servlet cant write to the file. The jakarta user needs write access.  
    The fixes are to ask an admin to give you a postgres password which you can hardcode into your servlet. Also either set the file you need to write to to 777 (not a good idea) or use an ACL to give jakarta write permission.(5)
4.  Java servlets are standalone java class files where as jsp is java code thats embedded into a web page.(5)
5.  Command is `/etc/init.d/tomcat`  
    Bad Gateway errors usually occur when tomcat has stalled or generally behaving like the spawn of satan that it is. It can be fixed by restarting tomcat.(5)

## D: Help me I'm a CA3\. (25)

## (Scripting and other requests, a lesson in anger management)

1.  The reply should be: Hello, I think you may be confused, javascript is run by your web browser, you can just include the javascript in your html code and it will work providing the browser supports it. However I think you may have been asking for java servlet access as such I have enabled it for you. If this is incorrect mail me back. Regards.
2.  CGI stands for Common Gateway Interface. They are used to add dynamic content to a website.  
    PHP stands for PHP: Hypertext Processor.  
    Web script permission should be 700.  
    3 scripting languages we support are PHP, PERL and Shell (5)
3.  The errors that stop it running are:  
    A missing ! in line 1  
    A missing ; after `date`  
    The error that stops it running in a browser is that its missing a content type solved by adding the line  
    `print "Content-Type:text/html\n\n";`before the $date line.
4.  The rules are that the user must ask for committee approval as it falls under the reprovision of services standing order and if permission is granted it is usually requested that it be restricted to dcu users only.  
    Your reply to the user should include the above rules and thus tell them to mail committee@redbrick.dcu.ie for approval(5)
5.  <pre>      #!/usr/bin/perl

          print "Content-type: text/html\n\n";

          open (FILE,";
          close FILE;

          ++$count;
          print "$count";

          open (FILE,">hits");
          print FILE "$count\n";
          close FILE;

         </pre>

    (5)

## E: I have the powerrrrrrrr!!!! (25)

## (Root Skillz)

1.  Enigma = FreeBSD  
    Prodigy = Solaris  
    Carbon/Deathray = Linux.  
    The priviliged port range are ports from 0 to 1024.  
    Webmaster requires root to be able to start the webserver which binds to port 80 (5)
2.  NFS stands for Network File System. It is used to spread data over multiple machines. Redbrick makes use of it to mount /home and /webtree on all primary machines.  
    LDAP stands for LightWeight Directory Access Protocol. It is used for storing member information and login authentication Redbrick uses it to authenticate logins on all primary servers. (5)
3.  Run `top` to get a full process list. Spot the process with the high cpu usage.  
    Verify its not a valid high process by your own common sense or asking the user running it.  
    If it's killing the server rapidly get it's PID number and type `kill -9 PID` to kill it.  
    Inform the user involved they may have a dodgy program. (5)
4.  The problem is that your friend is not a member of the root group a requirement to su. Yes they should try it from a console in the RedBrick server room :)
5.  You would use the `edquota` command.  
    To edit someones /webtree quota run `edquota username` on deathray.  
    To edit someones /home quota run `edquota username` on carbon.  
    Update the soft and hard limits accordingly(5)

## F: Cast your mind back to leaving cert english. (25)

## (The infamous essay)

**Do either 1 OR 2.**

1.  First thing you should do is deny access to the files. Thats the most important step make them unavailable immediately.  
    Then respond to IRMA immediately apologising for the distribution of illegal material and that as much as we try we can't monitor all users pages constantly.Say they are no longer available and the user has been dealt with.  
    Then contact the user tell them you recieved the complaint and in accordance with the Heanet AUP,our own codes of conduct and CSD regulations you have denied access to the files. Tell them they are not to distribute copyrighted material again. If they complain delete the files. If they continue, disuser.(25)
2.  You need to install the apache server first and then add the php module.  

    <pre>tar xvzf apache.tar.gz
              cd apache
              ./configure --prefix=/home/apache
              make
              make install
        </pre>

    then

    <pre>tar xvzf php.tar.gz
              cd php
              ./configure --with-apxs2=/home/apache/bin/apxs
              make
              make install
       </pre>

    Mod_php is generally needed if you have a large php application which is secure and not prone to exploitation, and you wish to harness the speed of doing the php processing at server level. Very useful for web boards or webmail systems.  

    Redbrick uses both php as cgi and php as a module :) Used as cgi on the primary webserver which the users can use and mod_php on the webmail server which has mod_userdir disabled. (25)

## G: It cant be that easy? (5)

## (Easy marks)

1.  2.0.49(1)
2.  5.0 (1)
3.  4.3.3 (1)
4.  1.4.2 (1)
5.  /local/web  
    /local/webmail  
    /local/tomcat  
    Hostname is deathray (1)
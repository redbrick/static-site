---
title: 'Webmaster test 2003 AGM'
---

1 hour long. Attempt all sections. Keep your answers concise - there is no point in writing an essay for a question that's worth 3 marks.

## Section A - General Web Knowledge

1.  Name **4** modern browsers that enjoy popular use. **(4 marks)**
2.  Explain **2** advantages of XHTML over HTML. **(2 marks)**
3.  List the main differences between .jpg and .gif files, include an example of when you would use them. **(3 marks)**
4.  Briefly, what does anti-aliasing do with an image to improve its appearance on a website? **(3 marks)**
5.  What are SSIs? Give **2** advantages of using them. **(3 marks)**

## Section B - Regular Expressions and Sadness Test

1.  Expand these: **(1 mark each)**
    *   LDAP
    *   CSS
    *   PERL
    *   PHP
    *   XML
    *   MIME
    *   SQL
    *   MPEG
    *   HEA
    *   BOFH
2.  Write a regular expression that will match any subdomain of DCU, i.e. under the .dcu.ie domain. **(5 marks)**

## Section C - Web Serving/Apache

1.  Name the script used by apache to start, stop, restart and gracefully restart Apache, used as a frontend to httpd. **(1 mark)**
2.  Name **3** non-Apache webservers. **(3 marks)**
3.  Give the HTTP response code corresponding to any **3** of these official response-type names (as per RFC 2616). **(3 marks)**
    *   Not Found
    *   HTTP OK
    *   Forbidden
    *   Internal Server Error (for instance premature end of script headers)
    *   Unauthorized
4.  RedBrick's webserver is now built without mod_php. Why was this done? **(2 marks)**
5.  Users can still run PHP on the system. Give **2** additional things you need to run PHP as a binary. **(2 marks)**
6.  How many different versions of HTTP are there? Name them.**(3 marks)**
7.  What is Tomcat? **(1 mark)**

## Section D - CGI Is GR8

1.  What does CGI stand for? **(1 mark)**
2.  Write a program in a (mentioned) language of your choice that prints the current date and time. **(2 marks)**
3.  What is suexec and what does it do? **(2 marks)**
4.  Write a program in a (mentioned) language of your choice that prints the IP address of the machine visiting the page (NOTE: Must work on Redbrick :)) **(3 marks)**
5.  The following PHP script does not work on RedBrick. Assuming the permissions and locations are correct, give two reasons why not. **(2 marks)**

    <pre>        <?php

    	var=`cat /etc/motd`;
    	echo $var	

            ?>
    	</pre>

6.  What are the two main different methods of giving a CGI input from a html form? Give advantages and disadvantages of each. **(5 marks)**

## Section E - I thought root was part of a plant...

1.  Show how you would extract a file called cantopenme.tar.bz2 **(2 marks)**
2.  What is meant by the 'privileged port range' on a UNIX system? **(2 marks)**
3.  This madman heys you saying he can't send mails because he can't save the file. Name **2** things that might have caused this. **(2 marks)**
4.  What is the difference between `su` and `su -`? **(2 marks)**
5.  If you were given the root password for prodigy now, what mechanism prevents you from successfully running su? **(2 marks)**
6.  You receive a cease and desist order from an Irish record label informing you that a user is publicly distributing copyrighted mp3s from his account. In reasonable detail and in order, explain the steps you would take should such an incident occur. **(5 marks)**

## Section F - The Essay

Answer either A OR B.

1.  Apache has an alternative to being compiled as large static binary called DSO support (using mod_so). What is this? Give some of its advantages. Bonus marks if you can describe briefly its use on RedBrick. **(20 marks)**
2.  Using **3** key points, explain how best you would make your default installation of Apache more secure.**(20 marks)**

## Section G - Giveaway Points!

1.  Give the current version of Apache running on Redbrick **(1 mark)**
2.  Give the current version of Tomcat running on Redbrick **(1 mark)**
3.  What is the DocumentRoot for RedBrick's webserver? **(1 mark)**
4.  The threat of what sort of exploit prompted the latest Apache upgrade? **(1 mark)**
5.  What version of evil is Dave running in his head? **(1 mark)**

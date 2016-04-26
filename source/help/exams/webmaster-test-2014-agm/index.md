---
title: '2014 AGM Webmaster Exam'
---

# [WEBMASTER EXAM 2014]

Note on the root section: This section does not specifically test your ability as webmaster, but tests your root competency. As such, if you fail this section, the score will not count towards the overall test score, and all other questions will be marked out of 90 - you just won't be given root access. If you pass this section, however, it will positively affect your ability to carry out webmaster duties, and as such the entire test will be marked out of 130.

**TIP:** There will be attempt marks, don't get caught up if you're not sure about the specifics of something, make sure to write down what you think is right, if even just what your interpretation of the question is.

<u>HTML and Other Basics (30 marks)</u>  
1.Create a simple menu with 3 div buttons that change colour when you hover over them. (5 marks)  

2.Make them more stylish with a shadow or border or padding or something else cool. (3 marks)  

3.Create a simple html form, with the following inputs: username, hoodie colour(grey or black), size, amount (5 marks)  

4.What is the DOM? What does it do? (2 marks)  

5.Name 3 javascript attributes any html entity can have, other than "onload".  
For example `<iframe onload="prompt(1)"></iframe>` would produce a javascript popup with 1 in it once the browser loads the iframe. (3 marks)  

6.What is Ajax? Why use it? (2 marks)  

7.Create a bullet point list, listing 3 reasons why you want to be webmaster.(3 marks)  

8.What is xhtml? what is xml? (2 marks)  

9.What are css3 transitions? (1 mark)  

10.What css would you use to round the corners of a div? explain it if you can't remember the exact syntax (1 mark)  

11.What are some of the benefits of using a PNG image over a BMP? (2 marks)  

12.Write jquery to slowly fade out a div of your liking (1 mark)  

<u>Server side scripting (30 marks)</u>

1\. In a language of your choice, write a web script that receives the values from the form in Q3 above.  
Store them to a file and also print the values to the screen safely. (marks 11)  

2\. Create an SQL table called "hoodies" using appropriately named tables to store the data from the above form. (Q1 this section) (3 marks) 3\. Write the sql query to insert a row into this table. (marks 2)  

4\. Write an sql query to return all rows where the hoody colour is grey. (marks 2)  

5\. Perform any of these queries in a language of your choice and print all the data returned to the screen(2 marks)  

6\. What does the `$_SESSION` object do in php? (1 mark)  

7\. How would you dump or print the object of Environment variables in php? (1 mark)  

8\. What is the risk of using eval($_POST['some']) or system_exec($_POST['blah']) (1 mark)  

9\. How do you set headers in PHP? give an example of one and where you'd use it (2 marks)  

10\. What is a CMS? What are the benefits of having one? (2 marks)  

11\. What is Sql injection? (1 mark)  

12\. `phpinfo();` , name 2 different sections of information you might find here? (2 marks)  

<u>Apache & servers (30 marks)</u>

1\. What sort of information would you find in a vhost file, located in /etc/apache2/sites-enabled/ (2 marks)  

2\. Where are the apache logs usually stored? How do you find the errors log? (2 mark)  

3\. How would you reload the apache config without a restart? (2 marks)  

4\. A site has been hacked, someone uploaded a web shell, what do you do? (3 marks)  

5\. What information can you find in the log files normally? (2 marks)  

6\. What is SSL? What does SSL stand for? What is the default port for SSL requests? What apache module provides SSL support? (4 marks)  

7\. What is SuExec? (3 marks)  

8\. What does "rndc reload" do? (1 mark)  

9\. Where can you normally find the dns zone files? What is bind? (2 mark)  

10\. What is a .htaccess file and name some related htaccess directives it can use? (3 marks)  

11\. What is mod_rewrite? (2 marks)  

12\. Give a description of how you think redbricks /webtree/ works (2 marks)  

13\. What is LAMP and have you ever installed it before? Why does redbrick love LAMP? (2 marks)  

![](http://www.redbrick.dcu.ie/~mak/lamp.png)

<u>Root section (40 marks)</u>

1.Where on Debian/Ubuntu would you find the network interface config file? (2 marks)  

2.What is NFS? What are the potential limitations if a webservers docroot is hosted over NFS? (2 marks)  

3.What is nagios, what does it do? (2 marks)  

4.A user complains that whenever they visit their php script a 500 error is returned.  
Upon further inspection you notice the script in question has the following file permissions -  
**(-rwxrw---- 1 vadimck committe 0 2014-03-25 17:25 test.php)**  
What is wrong with these file permissions? Why does this result in a 500 error when loaded and  
explain why such a system is important in a multiuser environment.(4 marks)  

5.What is a VLAN? Redbrick's setup makes use of three physical networks one of which is spanned across  
two phyical locations. How might VLANs help in this situation? (2 marks)  

6.What is a DRAC? (1 mark)  

7\. What's RCS? Why is it useful? (2 marks)  

8\. What do these stand for and what are they used for? (8 marks)  

1.  KVM
2.  LDAP
3.  IPPDU
4.  UPS

9\. You have to reboot the primary login server (azazel) to apply kernel security updates.  
What command would you type to print a warning message to all currently logged in user's terminals? (2 marks)  

10.What command would you use to view ports in use and the processes using them? (1 mark)  

11."You have just changed your shell's profile file. You want to test that all changes load and take effect successfully,  
to do this you need to launch a new login shell. What command would you issue to do this? (1 mark)  

12.What is munin? what does it do? (2 marks)  

13.What does fail2ban do? (1 mark)  

14.What information will you find in /proc/ and /etc/ (2 marks)  

15\. What are 2 benefits of SAS over SATA? (2 mark)  

16\. What does DNS do? What port does it work on? Name a tool to query DNS?  
What must you update when you make a change to zone file? (4 marks)  

17\. You decide to visit "The Girls" in the server room. The airconditioning unit has failed,  
things start to get hot and sweaty. What do you do? (2 marks)  

18\. What does logrotate do? what is the major benefit of it? (1 mark)  

19\. You are a webmaster, you have root, what do you plan to bring to the table, what will you not do (1 mark)

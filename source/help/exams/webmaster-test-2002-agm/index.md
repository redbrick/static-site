---
title: 'Webmaster test 2002 AGM'
---

1 hour long. Attempt all sections; there are no trick questions. For optional questions, you may answer more than one option, the marks from the highest scored options will be awarded.  

You may refer to the reference sheet on regular expressions(these were lost to the winds of time)

Section A - General Web "Stuff" (spot the question that's been on the last 3 tests)

1.  Name the **3** browsers that one should consider "market leaders" that a site should definitely work in. **(3 marks)**
2.  Using HTML, how should you produce the "&" character in a browser. **(2 marks)**
3.  List the main differences between .jpg and .gif files, include an example of when you would use them. **(3 marks)**
4.  What is the "web safe palette"? Is it worth bothering with these days? **(3 marks)**
5.  Name some ways in which you could have your site indexed better by search engines such as google. **(4 marks)**

Section B - Regular Expressions  

No smart (.*) answers! All regular expressions should match only the expected input specified.

1.  Write a regular expression that will match:  

    `/xxx/yy /xxxx/y /xxxxxxx/yyy` .. etc (you get the idea)  

    **(3 marks)**
2.  Write a regular expression that will match all /~[username]/ requests for files with the ".jsp" extension. You can consider the jsp the end of the string. **(5 marks)**
3.  Given the expression "\.*" give 2 strings you would expect to match. **(2 marks)**
4.  We.ve decided to reverse proxy an IIS machine through apache, write a regular expression that would catch all URL's with "cmd.exe" in them anywhere. **(5 marks)**

Section C - Web serving

1.  Give the official (as per RFC 2616) response-type name **OR** write a brief sentence on what any **3** of the following HTTP response codes indicate. **(3 marks)**  

    200, 404, 403, 400, 302, 500  

2.  Name 3 non-apache web-servers. **(3 marks)**
3.  What does APACI stand for ? **(1 mark)**
4.  List some differences in using php as cgi (e.g. #!/usr/local/bin/php) and mod_php. RedBrick uses both, but users cannot use the module, why? **(3 marks)**
5.  What is suexec? **(2 marks)**
6.  What is TomCat? **(1 mark)**
7.  What are http cookies? How are they useful? Give an example of their use. **(2 marks)**

Section D - CGI is fun

1.  Give 3 environment variables a CGI can make use of. Describe what each one indicates.**(3 marks)**
2.  What are the two main different methods of giving a CGI input from a html form? Give advantages and disadvantages of each. **(5 marks)**
3.  Write a CGI, in the language of your choice (indicate), to output the /etc/motd file. **(2 marks)**
4.  The following shell script, named "query_test.cgi", does not work and generates a "premature end of script headers" error document. Assuming the permissions and locations are correct, give two reasons. **(2 marks)**

    <pre>#!/bin/sh

    echo "Content-type=text/html"

    eval echo "<pre>"
    eval echo "query string is:" $QUERY_STRING 
    eval echo "</pre>"
    		</pre>

5.  For the same shell script (after the two errors are fixed), describe how it is insecure, indicate an exploit. **(3 marks)**

Section E - "Sorry, wrong password"

1.  Some muppet asks you install weirdsh because they want to write scripts in it. You download a file called weirdsh.tar.gz, how do you extract it ? **(2 marks)**
2.  Without knowing anything specific about the weirdsh project, what two commands would you expect to have to run to build it from source? **(2 marks)**
3.  And the third command to install it? **(1 mark)**
4.  What is the difference between `"su"` and `"su -"`? **(2 marks)**
5.  How would you disuser a user? **(2 marks)**
6.  How would you disable a users website permanently? **(2 marks)**
7.  What command would you run to find out how many sockets are active to port 80? **(2 marks)**

Section F - "The hard one"

<center>Answer either A or B</center>

1.  What is reverse proxying? Give some benefits and drawbacks and an example of its use. Bonus marks if you can describe briefly its use on RedBrick. **(20 marks)**  

2.  Apache has an alternative to being compiled as large static binary called DSO support (using mod_so). What is this? Give some of its advantages. Bonus marks if you can describe briefly its use on RedBrick. **(20 marks)**

Section G - Brownie Points!

1.  What version of apache is currently running on RedBrick?
2.  Name a non-standard apache module in use on RedBrick.
3.  Where was ApacheCon Europe 2001 supposed to be?  
    Did you cry when it was cancelled?  
    Why not? !!!
4.  Name a good source of (hint) weekly news on Apache.
5.  Name 3 former RedBrick webmasters (a.k.a. people you can bother with questions ;p~)

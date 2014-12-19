---
title: OOMMPPAA - directed synthesis and data analysis tool
author: anthony
layout: post
excerpt: OOMMPPAA is a novel computational tool designed to inform compound design by combining structural and activity data, created by Anthony Bradley who has kindly agreed to feature on our blog.
---

###Motivation
The ambition of this work is to help chemists to decide which compound to make next. Currently a chemist will use the available protein structures and activity data, find trends in this data and use this to inform future compound design. When I started my project it became clear there were two ways this is currently done.

<img src="/assets/img/oommppaa.png" style="width:100%" alt="Screenshot of Anthony Bradley's OOMMPPAA tool">
<div><p class="text-center"><em>Screenshot of Anthony Bradley's OOMMPPAA tool</em></p></div>

###Subjective visualisation
On one side scientists would look at bound ligands and activity data seperately and manually. They would then juggle the two sides in their mind and use their experience to generate hypotheses and suggestions on which compounds to make next. Clearly this mode of working is highly subjective and reliant on decades of experience.

###Black boxes
On the other side computational tools would take in all this data and spit out, using complex algorithms, an answer of what compound to make next. Largely these would be seen as black boxes. If they worked great - if they didn't what have you learned? 

###A third way?
It struck me that tools could be applied to work with the chemist. They could run through ever enlarging datasets and condense and visualise this data to allow for easier and more objective analysis. They could highlight conflicting aspects of the data and features the chemist may have missed. In this way experienced chemists could work faster and inexperienced ones could work at all.

###What does OOMMPPAA do?
OOMMPPAA uses 3D matched molecular pairs to contextualise both activity and inactivity data in its relevant protein environment. It then identifies pharmacophoric transformations between pairs of compounds and associates them with their relevant activity changes. OOMMPPAA presents this data in an interactive application providing the user with a visual summary of important interactions in the context of the binding site. 

###What doesn't it do?
It is important to note - OOMMPPAA does not predict anything. It doesn't itself extrapolate from the data. It doesn't train a model. It doesn't do any machine learning. It simply shows the data, as it stands, and highlights the key features within it. We have tips as to how to get the most out of it - but the most important thing is that you use it

<iframe height="500" src="//www.youtube.com/embed/eUm9c_Dlw5o" style="width:100%;" allowfullscreen></iframe>

###How can I use it?
Integral to all of this was making the tools user friendly and easy to install.

- Firstly you can trial the <a href="http://oommppaa.sgc.ox.ac.uk/OOMMPPAA/" onclick='return !window.open(this.href);'>tool online</a> - we even made a demo!
- Secondly windows users can download the tool using our <a href="https://bitbucket.org/abradley/oommppaa/downloads/" onclick='return !window.open(this.href);'>three click windows installer</a>. This has full functionality and allows the user to process their own datasets
- Thirdly you can get the <a href="https://bitbucket.org/abradley/oommppaa/src" onclick='return !window.open(this.href);'>full source code</a>. Licensed under Apache. Pull it  from bitbucket. Branch it. Merge it. Use it. We'd love anyone to get involved.

More details about all of these options are <a href="https://bitbucket.org/abradley/oommppaa/wiki/Home" onclick='return !window.open(this.href);'>available here</a>

###How can I learn more?
If you want to know more about the tool. How we've used it. How it works in more detail <a href="http://pubs.acs.org/doi/pdfplus/10.1021/ci500245d" onclick='return !window.open(this.href);'>go here</a>. If that's still not enough, email me at oommppaa.help@gmail.com. 

_Anthony is a DPhil student at the University of Oxford. He works between the Structural Genomics Consortium, Statistics and industrial collaborators GlaxoSmithKline. Anthony develops computational tools to aid drug discovery. <a href="http://www.dtc.ox.ac.uk/people/11/bradley/">Learn more here</a>_.
---
title: UX in Scientific Software
author: paul
layout: post
---

On Tuesday 30th September 2014 Karen, Andrew and I attended a <a href="http://www.meetup.com/UX-Oxford/" onclick='return !window.open(this.href);'>UX Oxford</a> talk by Roman Pichler <a href="https://twitter.com/romanpichler" onclick='return !window.open(this.href);'>(@romanpichler)</a> entitled "UX and Scrum".<!-- more --> The slides have been made available <a href="http://www.slideshare.net/romanpichler/ux-and-scrum" onclick='return !window.open(this.href);'>here</a>.  In the talk there were a number of interesting ideas put forward relating to UX (User Experience) in terms of project planning - when to start thinking about UX planning, ideas on how UX can fit an agile/scrum workflow and how to reliably keep track of and advance UX plans and ideas.

###Concepts from the talk

One interesting idea was that of the **persona**, complementary to a user story. This describes a target user type in more detail, outlining what they hope to get out of the system and how they may use the system, rather than describing one specific linear process. Roman has constructed a template for building personas which can be found <a href="http://www.romanpichler.com/tools/persona-template/" onclick='return !window.open(this.href);'>here</a>. More information on personas in project planning can be found <a href="http://guide.agilealliance.org/guide/personas.html" onclick='return !window.open(this.href);'>here</a>.

Another concept was that of the **Product Canvas**. This image is taken directly from the slideshare presentation linked above.

<iframe src="//www.slideshare.net/slideshow/embed_code/35561129?startSlide=19" height="500" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px; text-align: center"> <strong> <a href="https://www.slideshare.net/romanpichler/ux-and-scrum" title="UX and Scrum" target="_blank">UX and Scrum</a> </strong> from <strong><a href="http://www.slideshare.net/romanpichler" target="_blank">Roman Pichler</a></strong> </div>

The idea is to list personas next to high level ideas and functionality, epics and any other "regular" aspect of project or sprint planning, as well as work to be done in the next sprint or fully visualised UX designs. This canvas layout is intended for the early stages of planning but is useful for keeping track of initial good ideas which can be lost due to early difficulty in implementing or lying slightly outside the scope of the project at the start.

Attending this talk was useful in forcing us to think about how UX was important in the work we do. For myself in particular, it made me think about UX applied to scientific software in general.

###What makes bad UX for scientific web based software?

Simply saying that command line software, like a lot of bioinformatics tools, does not have good UX and should be put into a web page is not correct. The fact that such software continues to be used and preferred by many scientific researchers speaks volumes - they find the user experience good enough to provide them with the data they need. Command line interfaces also provide an easy way for communicating help and usage information quickly - an instant message to someone with a 30 character command can get someone up and running (or out of an awkward situation) easily. In summary there is a danger in confusing user interface with user experience.

A lot of problems for web based scientific software come from trying to directly replicate the command line experience and options in a web form - dropdowns and checklists everywhere. The functionality is the same but the user experience is not.

An assumption that users of the software are experienced in using scientific software is also a pitfall. Web based scientific software should enable non-technical users to use the tool and obtain consistent reproducible results comparable with more experienced or technical users.

Lastly, an assumption that users have a computer or other system capable of displaying recent technologies is also a recipe for poor UX. This is becoming less of a problem with tools like Modernizr and developers are adding more fallbacks to their code but it is still a potential problem.

###What makes good UX for scientific web based software?

Firstly, good UX is not simply about adding eye candy or new technology - this can help but is not the be all and end all. There has to be a good reason for adding something like this.

There are some things that can enhance UX of scientific software.

- **Clear instructions** - Having a monolithic help page lifted from a Unix _man_ page or an entire wiki dedicated to your software application does not mean it is clear how to perform simple tasks, leading to frustrated users. Contextual help, simple paragraphs at the start of sections, small help snippets for individual form fields can all help explain how to use your software and minimise frustration.
- **Example datasets** - Having your users know exactly what the system will and will not handle in terms of data formats and files can also contribute towards a good user experience. A good way to do this is to have example dummy data
- **Better charting engines** - lots of options here such as D3.js that can create interactive charts, narrow down data and display datasets in different ways. You can often also write your own plugins and charts for these if the functionality or chart formats do not exist.
- **Helpful erroring** - at some point a user will try and enter terrible or corrupted data or put files in the wrong field. Mysterious 404 error pages or stack traces are not the correct way to handle this of course. Having the system helpfully suggest the action to take to correct this, with an explanation why the data is bad may help the user experience.
- **Presets and profiles** - scientific software often has a lot of different options for data parameters, which can take a while for the user to tweak and configure. Having a system which has sets of sensible defaults for commonly used settings for the tool can speed up the process for the user and enhance the user experience.

Do you have any thoughts on UX in scientific software? Get in touch with us, we would love to hear your thoughts and how they could be applied to software we write.

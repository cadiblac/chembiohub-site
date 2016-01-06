---
published: true
layout: post
title: "UXOxford - consider your network and prepare for failure"
author: paul
excerpt: "One of our web developers, Paul, attended a UXOxford talk about slow networks and preparing for failures."
---

On Thursday 26 November I attended another talk in the UXOxford series at the Old Fire Station in central Oxford. The talk, presented by <a href="https://twitter.com/patrickhamann" target="_blank">Patrick Hamann</a> of the Financial Times, was entitled "Embracing the Network" and was addressed reducing users frustration when they encounter reduced or non-existent internet connection.

The main take home messages which are relevant to the sort of software we are writing as part of ChemBio Hub were:

<strong>Using WebPageTest to generate video of Single Point Of Failure restrictions</strong>. <a href="http://www.webpagetest.org/" target="_blank">WebPageTest</a> is a great, free resource to replicate real world usage and conditions of websites and webapps. It can help identify Single Point Of Failure problems, which are very often exposed by restrictive internet connections. Ironically, the UX for this tool isn't as good as it could be, with a lot of great functionaliity hidden away.

<strong>Open device labs available to let you test on different devices</strong>. It is expensive to have a wide variety of devices to replicate the different setups used to access your website or app. <a href="https://opendevicelab.com/" target="_blank">Open Device Labs</a> is a fantastic resource which makes mobile devices available for people to test on. There are a number of these dotted around the UK (and the rest of the world - 34 countries at time of writing) maintained by web development agencies as part of their efforts to engage with the web development community.

<strong>Use errors to provide a give up/try again option in context of your site</strong>. A frustration that many users experience when something goes wrong with a site or app they are using, is there is no alternative offered or advice given. An easy way around this is to add a "Try Again" button to repeat the process in case of a temporary error such as where a process hasn't quite finished. Informing the user that the service is down or offline temporarily is also helpful, making them more likely to try again later if they have been told it will be possible later.

<strong>rel=preconnect (crossorigin) and other resource hints are really powerful and useful</strong>. Very often within websites and apps, the order in which resources are loaded, both local and from external sources, can affect performance. Indicating at an early stage that JavaScript files, images and CSS files will need to be loaded in order to render a page can improve load times and by extension user experience. This can be acheived using <a href="https://w3c.github.io/resource-hints/" target="_blank">resource hints</a>. These are part of the W3C spec and allow the server delivering pages or app content to see where content will need to be served from before any page rendering takes place. This takes a performance limiting step out of the normal page rendering flow.

<strong>Images can be loaded out of order if there is a placeholder</strong>. This is a technique used by well-known sites whereby known images locations within the page contain a placeholder until the image can be fetched. It is often used where there are large numbers of images to be loaded or high quality images which may take longer to download. There are two useful approaches - either using the dominant colour for the image (this usually can be calculated on the server side or in advance) or with a simple generic image or loading spinner. This allows the main page content and navigation to be loaded first, with items that the user may be used to waiting for (such as images or more dynamic content) left until later.

We will be investigating whether some of these techniques would improve the experience of ChemBio Hub users. If you are a developer, then hopefully these tips have given you food for thought and something you can promote within your own applications.

Please comment at the bottom of this article if you have any feedback!

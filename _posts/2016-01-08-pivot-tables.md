---
published: true
layout: post
title: Excel Pivot tables - a quick introduction
author: adam
excerpt: The Excel pivot table is a powerful tool for getting the most out of large data sets. In this post we explain the basics how how you can harness this.
---

The Excel pivot table is a powerful tool for getting the most out of large data sets. Tabulating your data is the best way to collate large amounts of information in a concise and meaningful way. However data in this format is difficult to interrogate, hiding the really interesting results you’re after. Using Excel’s pivot table function, you can rearrange your data according to any parameter you specify. This allows you to ask very complex questions with an instant answer.

###How do they work?

Let’s say you have a table containing all your cell line assay data: 

<figure class="white-bg">
    <img src="/assets/img/pivot-table-1.png" alt="Example of some cell line assay data" class="img-responsive center-block">
<figcaption class="text-center">
    <p><em>Figure 1: Example of some cell line assay data</em></p>
</figcaption>
</figure>

The data includes information about where the cell lines came from, what mutations they have and what assays they have been run in. Using the data above, we want to know which cell lines featuring the gene 9 mutation have been run in an IC50 assay, and we want only male cell line samples. 

First we click <strong>Insert -> Pivot table</strong> (your table will be selected automatically):

<figure class="white-bg">
    <img src="/assets/img/pivot-table-2.png" alt="Pivot table menu within Excel" class="img-responsive center-block">
<figcaption class="text-center">
    <p><em>Figure 2: Pivot table menu within Excel</em></p>
</figcaption>
</figure>

Then we choose which parameters we wish to be displayed (based on the question we were asking):

<figure class="white-bg">
    <img src="/assets/img/pivot-table-3.png" alt="Select pivot table fields in a semantic way" class="img-responsive center-block">
<figcaption class="text-center">
    <p><em>Figure 3: Select pivot table fields in a semantic way</em></p>
</figcaption>
</figure>

Now we have a table showing only male cell line samples that feature the gene 9 mutation that have also been run in an IC50 assay. Of course you can modify the table to include any parameters you wish, allowing you to very quickly interrogate what was previously an intimidating data set.

###Further reading – Advanced tips and tricks

Pivot tables are a criminally underused feature in Excel that can save a lot of time and effort. They may seem intimidating at first but once you start using them you’ll never look back. 

If you’re interested in learning more, there’re plenty of <a href="https://www.youtube.com/watch?v=Vx-Fuw46VbY" target="_blank"><strong>online help resources</strong></a>. For Oxford university staff and students I recommend the IT services <a href="https://courses.it.ox.ac.uk/detail/TMSE5" target="_blank"><strong>course on pivot tables</strong></a>. 
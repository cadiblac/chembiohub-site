---
title: ChemBio Crunch - A simple tool to analyse and manipulate ChemBio assay data
author: andy
layout: post
---

The eventual goals of the ChemBio Hub project include enabling bench scientists to **submit their biological activity data to public databases** and to share it  with specific people.<!-- more --> When faced with this challenge an obvious research informatics solution would be to create a data repository and to then address the processes required to get data in there.

###We decided the needs of the bench scientist had to come first in order to build a community around ChemBio Hub

Data is copied and pasted between different tools and Excel templates, calculated results may then be stored in a shared drive, database etc.
Advantages of this approach include:
- Familiarity and good documentation for the tools used
- Low learning curve compared to programming
- Flexibility, easy to adapt to changes in experimental setup

Issues that arise from this approach include:
- **Copy and paste** errors leading to incorrect data
- Management of **template files** in the group can be difficult
- No consistent **output data** format
-**Duplication of effort** between scientists and groups
- Mixing of data and processing logic makes **output hard to use**

###As we believe that there must be a better way - ChemBio Crunch was born
There are 4 simple steps to use ChemBio Crunch
1. Upload raw data files
2. Validate plate signals and remove outlier wells
3. Calculate IC50, hill slope and relevant errors
4. Export as XLSX, png or PPT

Results can then be compared using the publication-ready charting features of ChemBio Crunch

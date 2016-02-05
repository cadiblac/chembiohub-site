---
published: false
layout: post
title: Good data management practice in academia - What are your options?
author: adam
excerpt: Most labs don't realize they are lacking an effective process until it's too late. Here is a simple question - if your senior postdoc left today, how much would you lose?
---

Big business takes data management seriously, funnelling millions of pounds into its efficient curation and mining.  Geoffrey Moore (author of ‘Crossing the Chasm’ & ‘Inside the Tornado’) has tweeted that ‘without big data analytics, companies are blind and deaf, wandering out onto the Web like deer on a freeway.' But how does good data management apply to academia and science in general? Scientists work with data o daily, but is it managed in a way that maximizes its potential? That depends on what you mean by 'good' data management.

A good data management system has several advantages (<em>Figure 1</em>). Most labs don't realize they are lacking an effective process until it's too late. Here's a simple question: If your senior postdoc left today, how much would you lose? You may have their results and protocols, but could you piece it all together? What about the experiments that didn't work?  And where are the reagents, compounds, plasmids and antibodies they used? <a href="businessdictionary.com" target="_blank">businessdictionary.com</a> defines good data management as the 'administrative process by which the required data is acquired, validated, stored, protected, and processed, and by which its accessibility, reliability, and timeliness is ensured to satisfy the needs of the data users.' Academic data management practices rarely fit within this definition. More commonly, academic data management is a combination of hand-written lab books combined with files stored on a server. What's more the format of data entry varies from  individual to individual. It's a system that is likely to fail. 

<!-- Image here -->

Assuming you want to set up a data management system in your lab  what do you use? There are many options available (Table 1). The humble Excel sheet is a simple way to manage data, and most scientists are familiar with its features. However it lacks the robustness of more specialized software and access is limited to certain computers.  A Google Docs based system has some clear advantages in its similarity to Excel and it being cloud-based (allowing a far greater degree of access). However like Excel, its simple and flat nature mean that comparing multiple projects is difficult and prone to human error. There is also no formalised standardizsation of the data.

Commercial software allows for searching across many projects whilst enforcing data standards. This in turn makes it extremely accessible to multiple users. It is also likely to provide additional tools to analyse the data. The obvious drawback is the  ongoing subscription cost, which can be prohibitive for many labs. The  final option is using free data management software. A good freely available package will provide most of the functionality of commercial software, but with less of the polish. For most academic labs, this is usually enough.

<!-- Table here -->
<div class="table-responsive">

    <table>
        <thead><tr>
                    <th></th>
                    <th>Excel</th>
                    <th>Google Docs</th>
                    <th>Commerical Software</th>
                    <th>Free Software</th>
                </tr></thead>
        <tbody><tr>
                    <td>Easy to implement</td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                    <td><span class="glyphicon glyphicon-remove"></span></td>
                    <td><span class="glyphicon glyphicon-remove"></td>
                </tr><tr>
                    <td>Requires time to learn</td>
                    <td><span class="glyphicon glyphicon-remove"></td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                </tr><tr>
                    <td>Data standardised</td>
                    <td><span class="glyphicon glyphicon-remove"></td>
                    <td><span class="glyphicon glyphicon-remove"></td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                </tr><tr>
                    <td>Data easily accessible</td>
                    <td><span class="glyphicon glyphicon-remove"></td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                </tr><tr>
                    <td>Inexpensive</td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                    <td><span class="glyphicon glyphicon-remove"></td>
                    <td><span class="glyphicon glyphicon-remove"></td>
                </tr><tr>
                    <td>Dedicated Tech Support</td>
                    <td><span class="glyphicon glyphicon-remove"></td>
                    <td><span class="glyphicon glyphicon-remove"></td>
                    <td><span class="glyphicon glyphicon-ok"></span></td>
                    <td><span class="glyphicon glyphicon-remove"></td>
                </tr>
            </tbody>
    </table>

</div>






















On 2nd-4th September 2015, Paul and Andy from ChemBio Hub attended the 4th <a href="http://rdkit.org/" target="_blank">RDKit</a> User Group Meeting at <a href="https://www.ethz.ch/en/campus/locations/zurich-region/hoenggerberg.html" target="_blank">ETH Honggerberg</a> in Zurich, Switzerland.

The meeting was attended by around 50 RDKit users from across Europe and farther afield.

<a href="https://github.com/greglandrum" target="_blank">Greg Landrum</a>  provided the opening keynote talk, discussing how we can create better compound identifiers that accurately represent tautomers. Inchi based methods for registereing compound uniqueness do have problems, so a mechanism needs to be provided at all times for chemists to be able to specify that their susbstance is new. Specifying stereochem and tautomer information as metadata before providing a unique key was another useful tip. This was all pertinent to us as it mirrors debates we have had when deciding how the compound identifier system for ChemiReg should work.

Another useful tool discussed on the first day was <a href="https://bitbucket.org/dalke/propbox" target="_blank">propbox</a>  presented by <a href="http://www.dalkescientific.com/" target="_blank">Andrew Dalke</a>. Propbox is a python table builder which allows dynamic calculation of chemical properties based on data in the table, it can also use the results of other dynamic property calculations to perform others.

<a href="http://peter-ertl.com/" target="_blank">Peter Ertl</a> gave a very interesting talk about natural product likeness calculations. Natural products are substances such as antibiotics and alkaloids and are an excellent source of substructures for bioactive molecules. Peter has developed natural product likeness calculators trained on a set of 45000 natural products from open source with 1 million compounds from Zinc as non-np-like background for training.

Paul and Andy also gave talks at the end of the day - Paul presented an overview of the ChemBio Hub project to demonstrate how RDKit is being used and to introduce RDKit users to the ChemBio Hub codebase. Andrew showed how a plugin architecture can be built with the ChemBio Hub ChemiReg tool to provide automatic property calculation within results tables.

<!-- Pic of Paul's slide here -->

The post-talks dinner was hosted in central Zurich, a beautiful city and fantastic place to host debate around the topics of the day.

The second day of talks included a demo of some work done towards RDKit.js by <a href="http://www.researchgate.net/profile/Guillaume_Godin" target="_blank">Guillaume Godin</a>, which looks to be a useful project, a talk by <a href="https://github.com/rvianello" target="_blank">Riccardo Vianello</a> about django.RDKit, which is a fantastic integration of RDKit functionality as directly-available Django models, and a talk by <a href="https://github.com/samoturk" target="_blank">Samo Turk</a> about hinge binder extraction from structures in the PDB for use as obtaining compound scaffolds to reveal compounds which would act on kinase hinge binder regions.

To close the day there was a round table discussion centred around communication within the RDKit community and how best to maintain contact, a request for RDKit to natively support Chemaxon chemical formats, and a friendly reminder that the PDB format is being deprecated - <a href="http://mmcif.wwpdb.org/" target="_blank">mmCIF</a> format, which is xml based, is now preferred.

The final day of the UGM involved a "hack day" where a number of key improvements or enhancements to RDKit were identified and worked on. Andy got involved with helping to document the deployment process for RDKit involving packer and docker, following discussions with others who were interested in the process. Paul got involved with helping to convert the introductory documentation and RDKit cookbook from plain text to interactive iPython notebooks, to help novice users get to grips with using RDKit.

The UGM was a great opportunity to talk to a wide range of cheminformaticians from academia and industry and make useful contacts. We learned a great deal about how we can optimise the ways in which we can use RDKit within our own tools and spread the word about the projects we are working on.

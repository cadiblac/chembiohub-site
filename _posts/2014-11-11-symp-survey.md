---
title: ChemBio Hub 2014 Symposium walk-up survey results
author: paul
layout: post
excerpt: At our recent Chemical Biology in Oxford symposium, we conducted a lightning survey to find out more about what people wanted from ChemBio Hub.
---

The recent ChemBio Hub symposium - entitled **Chemical Biology across the University of Oxford** - was a great multidisciplinary event bringing together PIs and researchers with an interest in chemical biology. They represented at least 15 departments. The presentations throughout the day sparked a number of conversations and ideas in the breaks and beyond. You can find out more about how the day progressed in [this blog post](/blog/2014/11/13/oxcbh-symposium.html) and you can also find the posters from the day [here](https://chembiohub.ox.ac.uk/symposium).

ChemBio Hub set up a survey to capture interest in aspects of chemical biology research. We used a Yes/No question system on a touchscreen to make it appealing and easy for people to take part. A lot of people were very willing participants - thank you again if you took part! 

The results from respondents on the day were as follows:

{% for result in site.walkupsurvey %}

<div class="row" style="width:100%;">
	<div class="col-xs-12 col-sm-6 no-padding-right" style="overflow:hidden; height:250px; vertical-align:bottom;">
		<img src="{{ result.photopath }}" style="width:100%;">
	</div>
	<div class="col-xs-12 col-sm-6" style="background-color:#444; height:250px; color:#fff;">
		<h3 class="centered subheading">{{ result.title }}</h3>
		<svg class="bar-graph" data-graph-values='[ { "label": "Yes", "number": {{ result.yesses }} } , { "label": "No", "number": {{ result.nos }} } ]'>

		</svg>
	</div>
</div>

{% endfor %}

_What do these results mean for ChemBio Hub?_ - It's clear that **visualisation of assay results** is a key requirement of a great many chemical biology researchers - and that **image processing** is less of a priority for Oxford's ChemBio community. We will use the survey results, along with other feedback, to determine the order of priorities that we work on in future.

Did you attend and not have chance to take our survey? Or do you otherwise have a strong wish to see one of these areas prioritised? Let us know in the thread comments below.

<script type="text/javascript">

var labelFn = function(d) { return d.label }
var numberFn = function(d) { return d.number }

$(document).ready(function() {

	d3.selectAll(".bar-graph").each( function(d, i){

		var data = JSON.parse(d3.select(this).attr("data-graph-values"));

		var width = 320,
		    barHeight = 40;

		var x = d3.scale.linear()
		    .domain([0, 40])
		    .range([0, width]);

		var chart = d3.select(this)
		    .attr("width", width)
		    .attr("height", 150);

		var gradient = chart.append("linearGradient")
		    .attr("y1", "0")
		    .attr("y2", "0")
		    .attr("x1", "40")
		    .attr("x2", "200")
		    .attr("id", "gradient")
		    .attr("gradientUnits", "userSpaceOnUse");

		gradient
		    .append("stop")
		    .attr("offset", "0")
		    .attr("stop-color", "#444");

		gradient
		    .append("stop")
		    .attr("offset", "0.5")
		    .attr("stop-color", "#eee");

		var bar = chart.selectAll("g")
		    .data(data)
		  .enter().append("g")
		    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

		bar.append("text")
		    .attr("x", "0")
		    .attr("y", barHeight / 2)
		    .attr("class", "white")
		    .text(function(d) { return labelFn(d); });

		bar.append("rect")
		    .attr("width",function(d) { var num = numberFn(d); return x(num) })
		    .attr("height", barHeight - 10)
		    .attr("x", "50")
		    .attr("fill", "url(#gradient)");

		bar.append("text")
		    .attr("x", "300px")
		    .attr("y", barHeight / 2)
		    .attr("class", "white")
		    .text(function(d) { return numberFn(d); });

	    

	});
	
});
</script>
---
title: Beginning developing in Rails
author: paul
layout: post
excerpt: As part of our comitment to stay up to date with technology, our recent touchscreen surver app was built in Rails - which I had never developed in before.
---

ChemBio Hub is committed to building a wide variety of tools and applications for scientists across the spectrum of chemical biology in Oxford. In order to do this we need to keep up to date in terms of programming techniques and languages.

An opportunity to do this came up recently when we needed an application to allow a brief walk-up survey at the recent ChemBio Hub symposium. It was decided that a simple yes/no system should be used to ask people about a small number of concepts which ChemBio Hub could provide applications or information for, which we could then narrow down based on the results of the survey.

Since it was a small application, it fitted well as a tutorial application for Ruby on Rails, additionally, it was similar to one of the existing official Rails tutorials at [link].

The spec for the application was as follows:
- users should be able to walk up without entering any personal information to take the survey;
- the survey should be a linear app, displaying a new question when an answer is given;
- the survey should have a set number of questions (interests), each with a title, descriptive photo and help text;
- each question should have multiple true or false (_boolean_) answers (preferences) associated with it, which make up the results of the survey;
- on reaching the end of the survey, the user should be informed they have completed and the next person should use the same screen to start the survey.

I began by creating a new Rails app via the command line
{% highlight ruby %}
rails new questionapp
{% endhighlight %}
I created objects called interest (the question) and preference (the answer). Each preference belonged to a single interest. An interest could have many preferences. I created these from the command line as directed by the Rails tutorial.
{% highlight ruby %}
rails g model Interest title:string img_path:string help_string:text

rails g model Preference is_preferred:boolean interest:references date:timestamp
{% endhighlight %}
I created controllers for interests and preferences to handle the flow of input into the application. Again this was done via the command line.
{% highlight ruby %}
rails g controller interests

rails generate controller Preferences
{% endhighlight %}
The key functionality of the app is located in `preferences_controller.rb`. When an answer is given, a preference must be created representing that answer and cause a redirect to the next question - or if this is the last question, direct to the completion page (which is also the start page!):

{% highlight ruby %}
def create
  @interest = Interest.find(params[:interest_id])
  pref = false
  if params[:submit] == "yes"
	  pref = true
  end

  @preference = @interest.preferences.create(is_preferred: pref)
  if @interest.next
    redirect_to @interest.next
  else
    redirect_to completed_path
  end
end
{% endhighlight %}

All of the code for this application is available at <a href="https://github.com/thesgc/chembiohub-qanda" onclick="return !window.open(this.href);"></a>. You may fork this code as you wish and use it in your own applications or for learning purposes.
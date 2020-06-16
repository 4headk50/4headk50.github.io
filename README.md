# WEB TECH Practicals

## Git Notes

Some git commands that I use frequently

```html
git pull origin master      //pulls files from the origin
git push origin master      // sends files to origin

git add .                   // Adds all changes
git status                  //
git commit -m "Comments"    //
```

## Week 1

This week I learned how to create a basic HTML 5 page along with some tags
Most tags will need a closing tag for example <h1> </h1>

```html
<h1> </h1> 
    Header 1 - There are 6 headers you can use in HTML h1 to h6
<p> </p> 
    Paragraph - These are used to put in text
<ul> </ul> 
    Unordered list - grouping a collection of items that do not have a numerical ordering (Bullet Points)
<li> </li> 
    list item - An item to be in a list
<a> </a> 
    hyperlink - Can be used to link to other sites, email, telephone numbers ect
<br> 
    Break - Inserts a blank row (This does not need a closing tag)
<hr> 
    Thematic break - horizontal rule that is used to separate content (Inserts a line in the page)
<img src="" alt=""> 
    Image - Inserts an image the alt is a description of the image (This will be displayed if the image 
                      cannot be loaded by the browser - it can also be used to read out what the image is)
```

## Week 2

This week I learned how use more tags and started using CSS to style a website.
I do need to make more frequent commits for my code and update the readme.md file as I go.

```html
More HTML Tags
Any content can be put inside a <div> tag
div#NAME|c  
    This creates a div tag with an id of what ever the name is and with creates a closing comment with the name 
    i.e div#content|c will create a Div with an id of content and a closing comment of content (The |c creates the closing comment)
<article> </article> 
    tag specifies independent, self-contained content. This is like a Div and any content can be put inside

CSS - Cascading Style Sheets
box-shadow: 10px 10px 30px rgba(0,0,0, .5)
    This is useful to put a shoadow around content. The px can change depending on size, the colour can also be changed
float 
    Used for positioning contant there are 4 values (left, right, none and inherit
padding
    Spacing inside the container/element
margin  
    Spacing outside the container/element
text-align
    There a a few values to format content
```

## Week 3

This week I been learning about forms (Imputs, Validation and layout)

```html
Inputs
<form> </form>
    Container for form controls
<form action="" method=""></form>
    action - form being sent to 
    method - how the form is sent
        get: data is appended to the URL
        post: data is included in body of the form
<input> 
    element handles most form controls
<input type="radio">
    One allowed one choice
<input type="checkbox">
    Allowed multiple choices
<select id="cars" name="car">
  <option value="">  Select Car </option>
  <option value="volvo">Audi</option>
  <option value="saab">BMW</option>
</select>
    This is a drop down list using the <select></select> tag
<textarea name="Comments" rows="4" cols="8">
Please leave comments:
</textarea>
    The <textarea></textarea> tag allows multiple line inputs, the attributes sets the size

Validation
<input type="text" name="Name" required>
    This makes it so the user as to enter some text
There are other validation attribute that I will need to read up on

```

## Week 4

This week is an introduction to Javascript

```html
Javascript is Dynamically typed this means it will determine the type depending on the value you give to the variable
    var  age = 39;          // is a number
    var  name = "Kevin";    // is a string
    var  home = true;       // is a boolean

You can also use variables to do some basic maths
    var x = 5;  
    var y = 20;  
    var result = x + y; // result will equal 25
    var result = x * y; // result will equal 100 
    var result = y/x;  //  result will equal 5

/* 
    This is a block comment
*/
    
// This is a inline comment



```


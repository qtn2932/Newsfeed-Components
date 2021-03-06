// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    var btn = document.createElement("button");
    var t = document.createTextNode("Read");
    btn.appendChild(t);
    this.domElement=domElement;
    this.domElement.appendChild(btn);
    // assign this.domElement to the passed in domElement
    this.domElement=domElement;
    btn.addEventListener('click',(event)=>{
      this.domElement.classList.toggle('change');
    })
    // create a reference to the ".expandButton" class. 
    this.expandButton=domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText='Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click',(event)=>{
      this.expandArticle(event);
      this.domElement.style.color='blue';
      if(this.expandButton.innerText=="Expand"){
        this.expandButton.innerText='Minimize';
      }else if(this.expandButton.innerText=="Minimize"){
        this.expandButton.innerText='Expand';
        this.domElement.style.color='black';
      }
    });
  }

  expandArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    event.stopPropagation();
}
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
articles= document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map( domElement => {
  return new Article(domElement);
});


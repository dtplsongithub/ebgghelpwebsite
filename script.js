let d=document,Q=a=>d.querySelectorAll(a),q=a=>Q(a)[0];
// example: q("body") returns the body element
// Q("div") returns every instance of divs in the html code

Q(".chapter").forEach(chapterElem=>{
  let subchap=chapterElem.querySelector("button.subchapter");
  let subtext=chapterElem.querySelector("div.chapter-contents");
  subchap.classList.add("closed");
  subchap.addEventListener("click",()=>{
    subchap.classList.toggle("open");
    subchap.classList.toggle("closed");
    subtext.classList.toggle("open");
    subtext.classList.toggle("closed");
  });
  subtext.classList.add("closed");
})
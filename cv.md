# Dzmitry Tarasiuk


## Contacts info:
Phone number: +375 (29) 204-27-42
E-mail address: dimatarasiuk91@gmail.com


## About me:

I am a purposeful beginner frontend-developer. I have been doing site layout for 1.5 years on a freelance basis. I made both single-page and multi-page sites using the Wordpress CMS and without. I try to learn something new every day. The goal for the future is to become part of a team of like-minded people and bring benefits.


## Skills:

1. HTML, ,
2. CSS (SCSS), Bootstrap
3. JS (JQuery)
4. CMS Wordpress
5. Git
6. Figma, Photoshop


### Example my code:

> Simple function for converting numbers from decimal to binary:
```javascript
function decToBin(d) {
  let str = d;
  let arr = [];
  if (d === 0 || d === 1) return ''+d+'';
  while (str > 0) {
    arr.push(str % 2 ? 1 : 0);
    str = ~~(str / 2);
  }
   return arr.reverse().join('');
}
```


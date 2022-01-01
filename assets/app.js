const selector = (o) => document.querySelector(o),
  selectors = (o) => document.querySelectorAll(o);
const preloader = selector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
const nav = `<a href="https://pushkaryadav.netlify.app" data-page="home" class="logo">PY</a>
<button class="mobile-toggle">
  <div class="line l1"></div>
  <div class="line l2"></div>
</button>
<ul class="nav-links flex">
  <li class="page-target" data-page="home">Home</li>
  <li class="page-target" data-page="about">About</li>
  <li class="page-target" data-page="projects">Projects</li>
  <li class="page-target" data-page="contact">Contact</li>
</ul>`;
const home = `<img src="./assets/IMG20211011160623-min.jpg" class="intro-img" alt="" /><div class="top-text x2 mt1">Pushkar Yadav <br /><span class="text-small">Eat sleep repeat ✌</span></div><div class="break"></div><a href="https://colpic.netlify.app/" target="_blank" class="intro-link">COLPIC</a><a href="https://devurl.netlify.app/" target="_blank" class="intro-link">DEVURL</a><a href="https://www.pexels.com/@pushkaryadav"target="_blank"class="intro-link">Pexels</a><a href="https://beta-colpic.netlify.app/" target="_blank" class="intro-link">COLPIC - beta</a><a href="https://github.com/pushkarydv" target="_blank" class="intro-link">Github</a><a href="https://www.instagram.com/pushkaryadav_"target="_blank"class="intro-link">Instagram</a><a href="https://twitter.com/pushkaryadav_"target="_blank"class="intro-link">Twitter</a>`;
const about = `<span class="x2 mb1 u">About</span><p class="mt1">Hey, I'm Pushkar Yadav.<br /><p>My Skills -</p><ul class="skills mb1"><li>HTML5</li><li>CSS3</li><li>Javascript ES6</li><li>MySQL</li><li>PHP</li><li>Python</li><li>Bootstrap 4</li><li>UI design</li><li>React Js</li><li>JSX</li><li>and others coming up</li></ul><p class="mt1"><a href="https://www.instagram.com/pushkaryadav_" class="page-link">Instagram</a><a href="https://twitter.com/pushkaryadav_" class="page-link">Twitter</a></p></div>`;
const projects = `<span class="x2 mb1 u">Projects</span><div><h2 class="mt2">COPIC</h2><p>colpic is a free to use color picker. It's motive is to have a set ofall the best colors which are used everywhere, all colors are seratedinto their specific group. Currently it has total of 99 colors. Exloreit<a href="https://colpic.netlify.app" class="page-link" target="_blank">https://colpic.netlify.app</a></p><h2 class="mt2">Web Templates</h2><p>I also built some free web templates to use any where, you can justdownload them and they are ready to use<br />One of these is this Coffee Shop Web <br />Preview-<a href="https://pushkarydv.github.io/materialize"class="page-link"target="_blank">Cafe King</a><br />Code-<a href="https://github.com/pushkarydv/materialize"class="page-link"target="_blank">Code</a></p>There are many more I will update them when i will get time👍<h2 class="mt2">UI design</h2><p>This one i have started now, You can have a look at my designs<br /><a href="https://dribbble.com/pushkaryadav"class="page-link"target="_blank">My Dribble</a></p></div>`;
const contact = `<span class="x2 mb1 u">Contact</span><div class="mt1">{contactForm} <br /> Consider my Socials <p class="mt1"><a href="https://www.instagram.com/pushkaryadav_" class="page-link">Instagram</a><a href="https://twitter.com/pushkaryadav_" class="page-link">Twitter</a></p><div>`;
selector("nav").innerHTML = nav;
selector(".mobile-toggle").addEventListener("click", () => {
  selector(".l1").classList.toggle("l1-click");
  selector(".l2").classList.toggle("l2-click");
  selector(".nav-links").classList.toggle("show-nav");
});
selector(".home").innerHTML = home;
selectors(".page-target").forEach((target) => {
  toContent(target);
});
function toContent(target) {
  target.addEventListener("click", () => {
    selector(".home").style.display = `none`;
    selector(".pages").style.display = `none`;
    let toTarget = target.dataset.page;
    console.log(toTarget);
    if (selector(".l1").classList.contains("l1-click")) {
      selector(".l1").classList.remove("l1-click");
    }
    if (selector(".l2").classList.contains("l2-click")) {
      selector(".l2").classList.remove("l2-click");
    }
    if (selector(".nav-links").classList.contains("show-nav")) {
      selector(".nav-links").classList.remove("show-nav");
    }
    switch (toTarget) {
      case "home":
        selector(".home").style.display = `flex`;
        selector(".home").innerHTML = home;
        break;
      case "about":
        selector(".pages").style.display = `block`;
        selector(".pages").innerHTML = about;
        break;
      case "contact":
        selector(".pages").style.display = `block`;
        selector(".pages").innerHTML = contact;
        break;
      case "projects":
        selector(".pages").style.display = `block`;
        selector(".pages").innerHTML = projects;
        break;
      default:
        selector(".home").style.display = `flex`;
        selector(".home").innerHTML = home;
        break;
    }
  });
}

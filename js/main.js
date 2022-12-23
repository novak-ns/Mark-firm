const nav = document.getElementById('site-header');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 50) {
                nav.classList.add('active_site-header');
            } else {
                nav.classList.remove('active_site-header');
            }
        });

const hamburger = document.getElementById('hamburger');
const hamburgerspan = document.getElementsByClassName("hamburger_span")
const navLinks = document.getElementById('nav');
const body = document.getElementById('body');

        
        document.onclick = function(e){
            if(e.target.id !== 'nav' && e.target.id !=='hamburger' && e.target.className !=="hamburger_span")
            {
                hamburger.classList.remove('open')
                navLinks.classList.remove('active')
                body.classList.remove("fixed-class")
            }
        }
        
        hamburger.onclick = function(){
            hamburger.classList.toggle('open')
            navLinks.classList.toggle('active')
            body.classList.toggle("fixed-class")
        }
        
        
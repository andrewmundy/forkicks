<template>
<div class="section">

    <div class="projects">
        <div class="project hidden hidden-up" v-infocus="'showElement'">
            <a target="_blank" href="../assets/projects/bella1.jpg">
            <img src="../assets/projects/bella1.jpg">
            <div class="text">
                <h1>Project1</h1>
                <h2>Project1-Subtext</h2>
            </div>
            </a>
        </div>
        <div class="project hidden hidden-up" v-infocus="'showElement-fast'">
            <a target="_blank" href="../assets/projects/bella2.jpg">
            <img src="../assets/projects/bella2.jpg">
            <div class="text">
                <h1>Project2</h1>
                <h2>Project2-Subtext</h2>
            </div>
            </a>
        </div>
        <div class="project itsalive hidden hidden-up-fast" v-infocus="'showElement'">
            <a target="_blank" href="../assets/projects/marin1.jpg">
            <img src="../assets/projects/marin1.jpg">
            <div class="text">
                <h1>Project3</h1>
                <h2>Project3-subtext</h2>
            </div>
            </a>
        </div>
        <div class="project hidden hidden-up" v-infocus="'showElement-fast'">
            <a target="_blank" href="../assets/projects/marin2.jpg">
            <img src="../assets/projects/marin2.jpg">
            <div class="text">
                <h1>Project4</h1>
                <h2>Project4-subtext</h2>
            </div>
            </a>
        </div>
        <div class="project hidden hidden-up-fast" v-infocus="'showElement'">
            <a target="_blank" href="../assets/projects/nikki.jpg">
            <img src="../assets/projects/nikki.jpg">
            <div class="text">
                <h1>Project5</h1>
                <h2>Project5-subtext</h2>
            </div>
            </a>
        </div>
    </div>

    <div class="spacer"></div>

    <img class="hidden hidden-left squiggle" v-infocus="'showElement-slow'" src="../assets/squiggle.svg">

    <!-- <div class="spacer"></div> -->

    <h1 class="genre-titles">Title2</h1>
    <h2 class="genre-quote hidden hidden-right" v-infocus="'showElement'">
        "Quote2"
    </h2>
    <div class="projects">
        <div class="project hidden hidden-up-fast" v-infocus="'showElement'">
            <a target="_blank" href="../assets/projects/bella1.jpg">
            <img src="../assets/projects/bella1.jpg">
            <div class="text">
                <h1>Project6</h1>
                <h2>Project6-subtext</h2>
            </div>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      msg: 'hi'
    }
  },
  directives: {
    infocus: {
      isLiteral: true,
      inserted: (el, binding, vnode) => {
        let f = () => {
          let rect = el.getBoundingClientRect()
          let inView = (
            rect.width > 0 &&
            rect.height > 0 &&
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight + 350 || document.documentElement.clientHeight)
          )
          if (inView) {
            el.classList.add(binding.value)
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
        f()
      }
    }
  }
}
</script>

<style lang="scss">
    @import '../assets/main.scss';
    .badges{
        display: none;
        justify-content: space-around;
        align-content: center;
        padding:1rem 2rem;
    }
    .section{
        background:white;
        position: relative;
        z-index: 2;
    }
    .projects{
        min-height: 500px;
        width:100vw;
        padding: 1rem 0;
        // margin: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .project{
        position: relative;
        height:25vw;
        width:25vw;
        // margin-bottom:1rem;
        overflow: hidden;
        img{
            width: 100%;
            height:100%;
            object-fit: cover;
            transition: filter 0.3s ease-in-out;
        }
    }
    .project img:hover, .project-am img:hover{
    }

    .badges *{
        max-width: 20px;
        max-height: 20px;
        filter:opacity(0.4) !important;
    }
    .text{
        text-align: left;
        padding: 0 0.5rem;
        i{
            font-size:0.8rem;
            color:rgba(255, 255, 255, 0.5);
        }
        h2{
            font-size:0.8rem;
            color:rgba(255, 255, 255, 0.8);
        }
    }
    .text h1, .text h2{
        color:rgba(255, 255, 255, 0.514);
        margin:0.2rem;
        font-size:1rem;
    }
    .genre-titles{
        text-align: left;
        font-size: 2rem;
        color:$text-main;
        padding: 1rem 0 0 5rem;
    }
    .genre-quote{
        padding: 2rem;
        color:$text-main;
        font-weight: 500;
        font-style: normal;
        font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
        font-size: 32px;
        width: 50vw;
        margin: auto;
    }    

@media screen and (max-device-width: 1024px){
    .project{
        width: 50vw;
        height: 50vw;
    }
    .genre-titles{
        padding:1rem;
    }
    .genre-quote{
        padding:0;
        font-size: 22px;
        width: 90vw;    
    }
    .projects{
        flex-wrap: wrap;
        padding:0px;
        // margin: 2rem 0;
    }
    .genre-titles{
        text-align: left;
        font-size: 2rem;
    }
    .text{
        font-size: 0.1rem;
        width: 90%;
        padding: 0 0.5rem;
    }
    .text h1, .text h2{
        font-size: 1rem;
        margin:0.2rem;
        /* background:$text-main; */
    }
    .text h2{
        font-size:0.8rem;
    }
    .quote{
        font-size:25px;
        padding:1rem;
    }
    .badges{
        padding:20px 10px;
    }
    .badges *{
        width: 20px;
    }
    .project-am{
        position: relative;
        width:45vw;
        margin:0.3rem;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.171);
        .text{
            background:$text-main;
        }
        .empty{
            width: 45vw;
            height: 45vw;
        }
    }
}
</style>
<template>
  <div class="wrap-header">
      <nav class="navbar navbar-expand-md">
        <div class="logo-holder">
            <a href="/">
                <img src="https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/logo-text.svg" alt="Escape Portal" width="100%">
            </a>
        </div>
        <div id="navbarNavDropdown" class="collapse navbar-collapse">
            <ul id="main-menu" class="navbar-nav">
                <li class="about">
                    <span class="bg"></span>
                    <router-link to="/chinese"> 中华菜系 </router-link>
                </li>
                <li class="about">
                    <span class="bg"></span>
                    <router-link to="/chinese"> 外国菜谱 </router-link>
                </li>
                <li class="about">
                    <span class="bg"></span>
                    <router-link to="/chinese"> 点心 </router-link>
                </li>
                <li class="about">
                    <span class="bg"></span>
                    <router-link to="/chinese"> 汤 </router-link>
                </li>
                <li class="about">
                    <span class="bg"></span>
                    <router-link to="/chinese"> 食疗食补 </router-link>
                </li>
            </ul>
            
        </div>
      </nav>
      
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    border-top: 6px solid #e35f00;
    box-shadow: 0 0 30px 0 rgb(0, 0, 0 / 33%);
    padding: 0 0 0 30px;
    -webkit-box-align: initial;
    -ms-flex-align: initial;
    align-items: initial;
    height: 100px;
    background: #fff;
    position: relative;
    z-index: 300;
}

.navbar .logo-holder {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 10px;
    position: relative;
    z-index: 100;
}

.navbar #navbarNavDropdown {
    padding-left: 30px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-align: initial;
    -ms-flex-align: initial;
    align-items: initial;
}

.navbar #navbarNavDropdown>ul {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}

.navbar-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}

.navbar #navbarNavDropdown li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    margin-top: -6px;
    border-top: 6px solid transparent;
}

*, ::after, ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.navbar #navbarNavDropdown li a {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    border-left: 1px solid #ccc;
    padding: 15px;
    font-size: 24px;
    color: #000;
    text-transform: uppercase;
    position: relative;
    z-index: 200;
    text-decoration: none;
    background-color: transparent;
}

.navbar #navbarNavDropdown li:hover {
    border-top: 6px solid #000;
}

/* bg */
.navbar #navbarNavDropdown li:hover .bg:before {
    opacity: .4;
    -webkit-transition: ease .5s opacity;
    transition: ease .5s opacity;
}

.navbar #navbarNavDropdown li .bg:before {
    background-size: cover;
    background-position: top center;
    -webkit-transition: ease 0s opacity;
    transition: ease 0s opacity;
    opacity: 0;
    background-image: url('https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/pc.jpg');
}

.navbar #navbarNavDropdown li .bg:after, .navbar #navbarNavDropdown li .bg:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.navbar #navbarNavDropdown li:hover .bg:after {
    opacity: 1;
}

.navbar #navbarNavDropdown li .bg:after {
    background: -webkit-gradient(linear,right top,left bottom,from(rgba(255,255,255,0)),color-stop(rgba(255,255,255,.5)),to(white));
    background: linear-gradient(to bottom left,rgba(255,255,255,0),rgba(255,255,255,.5),#fff);
    opacity: 0;
}

.navbar #navbarNavDropdown li .bg:after, .navbar #navbarNavDropdown li .bg:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
</style>
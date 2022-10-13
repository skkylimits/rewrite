<script setup>
import Logo from './components/Logo.vue'
import FireshipSVG from './components/svg/SVGFireship.vue'
import AtomSVG from './components/svg/SVGAtom.vue'
import MoleculeSVG from './components/svg/SVGMolecule.vue'
import OrganismSVG from './components/svg/SVGOrganism.vue'
import IconGear from '~icons/ei/gear'
import IconDocs from '~icons/mdi/file-document-multiple-outline'
import IconLab from '~icons/ooui/lab-flask'
import IconNight from '~icons/material-symbols/mode-night-outline'
import IconIphone from '~icons/clarity/mobile-solid'
import IconIpad from '~icons/mdi/tablet-ipad'
import IconMacbook from '~icons/material-symbols/laptop-mac-outline'
import IconImac from '~icons/heroicons-solid/computer-desktop'
</script>

<template>
    <nav class="menu">
        <div class="menu-item">
            <div class="logo">
                <RouterLink href="#" class="nav-link logo-hover" to="/">
                    <span class="link-text logo-text">Rewrite</span>
                    <Logo class="mt-h">
                        <!-- find a flexbox alternative -->
                        <template #icon>
                            <FireshipSVG class="logo-rotate" />
                        </template>
                    </Logo>
                </RouterLink>
                <div class="search-box">
                    <input type="text" placeholder="Search">
                </div>
            </div>
        </div>
        <div class="menu-item">
            <ul class="navbar">
                <li class="nav-item">
                    <RouterLink href="#" class="nav-link pl-1" to="/lab">
                        <Logo>
                            <template #icon>
                                <AtomSVG />
                            </template>
                        </Logo>
                        <span class="link-text">Atoms</span>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink href="#" class="nav-link pl-1" to="/">
                        <Logo>
                            <template #icon>
                                <MoleculeSVG />
                            </template>
                        </Logo>
                        <span class="link-text">Molecules</span>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink href="#" class="nav-link pl-1" to="/">
                        <Logo>
                            <template #icon>
                                <OrganismSVG />
                            </template>
                        </Logo>
                        <span class="link-text">Organisms</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="menu-item">
            <div class="settings">
                <p class="width-calculator">64px / 32rem</p>
                <div class="viewport-sizes">
                    <div class="icon pr-h">
                        <IconIphone class="icon-item mr-h" style="font-size: 1.2rem;" />
                        <IconIpad class="icon-item mr-h" style="font-size: 1.2rem;" />
                        <IconMacbook class="icon-item mr-h" style="font-size: 1.2rem;" />
                        <IconImac class="icon-item mr-h" style="font-size: 1.2rem;" />
                        <!-- <ion-gear-a style="font-size: 1.2rem;"></ion-gear-a> -->
                    </div>
                </div>
                <ul class="settings-nav">
                    <li class="settings-item">
                        <RouterLink href="#" class="settings-link pl-1" to="/docs">
                            <IconNight style="font-size: 1.2rem;" />
                            <span class="link-text">Themify</span>
                        </RouterLink>
                    </li>
                    <li class="settings-item">
                        <RouterLink href="#" class="settings-link pl-1" to="/lab">
                            <IconLab style="font-size: 1.2rem;" />
                            <span class="link-text">Lab</span>
                        </RouterLink>
                    </li>
                    <li class="settings-item">
                        <RouterLink href="#" class="settings-link pl-1" to="/docs">
                            <IconDocs style="font-size: 1.2rem;" />
                            <span class="link-text">Docs</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>

    <!-- Router Content Injected ☝🏽 -->
</template>

<style>
.menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-primary);
    width: 15rem;
    height: 100vh;
    transition: width 600ms ease;
    border-right: 1px solid hsl(160, 86%, 26%);
}

.logo {
    height: 100%;
    min-width: 15rem;
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    margin-left: -0.5rem;
    /* background: black; */

    font-family: 'Open Sans';
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    /* text-align: center; */
    letter-spacing: 0.3ch;

    /* color: var(--text-secondary); */
    /* background: var(--bg-secondary); */
}

.logo-rotate {
    transform: rotate(0deg);
    transition: transform(300ms);
}

.menu:hover .logo-rotate {
    transform: rotate(-540deg);
}

.logo:hover,
.logo-hover:hover {
    background: var(--vt-c-black);
}

.search-box {
    padding-left: 0.5rem;
    font-size: 1.11rem;
    /* what is going on here ;(( */
    font-weight: normal;
}

.navbar {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 100%; */
    /* outline: 1px solid hsl(160, 86%, 26%); */
}

.nav-item {
    width: 100%;
}

.nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    /* color: pink; */
    filter: grayscale(100%) opacity(0.7);
    transition: 600ms;
}

.nav-link:hover {
    color: var(--bg-primary);
    filter: grayscale(0%) opacity(1);
}

.link-text {
    /* display: none; */
    margin-left: 1rem;
    color: var(--color-text);
}

.settings {
    border-top: 1px solid hsl(160, 86%, 26%);
}

.settings-link {
    display: flex;
    align-items: center;
    height: 3rem;
    color: var(--color-text);
}

.settings-link:hover {
    
    color: var(--primary-accent);
}

.menu-item:last-of-type {
    margin-top: auto;
}

.viewport-sizes {
    display: flex;
    justify-content: center;
    /* outline: 1px solid hsl(160, 86%, 26%); */
}

.icon {
    display: flex;
    align-items: center;
    padding: 1rem;

    /* outline: 1px solid hsl(160, 86%, 26%); */
}


.width-calculator {
    padding-top: 0.25rem;
    font-size: 1rem;
}
</style>

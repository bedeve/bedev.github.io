(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{962:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n(12),n(4),n(5),n(3),n(7),n(6),n(9),n(1);var o=n(77),a=n(955);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/linux/install/cubic.md"}});var l={_frontmatter:r},u=a.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(u,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",i({parentName:"p"},{href:"https://www.techrepublic.com/article/how-to-create-a-custom-ubuntu-iso-with-cubic/"}),"original")),Object(o.b)("p",null,"Cubic is a custom Ubuntu ISO creator. With it you can take a standard Ubuntu ISO image, install all the third-party software you need, and then create a custom, bootable (and installable) image from that. In the end, you'll have a Ubuntu platform that includes all the software you need, without having to add everything post-install."),Object(o.b)("p",null,"I'm going to walk you through the process of installing and using Cubic. Once you know this tool, you won't want to work without it."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-sh"}),"sudo apt-add-repository ppa:cubic-wizard/release\nsudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 6494C6D6997C215E\nsudo apt update\nsudo apt install cubic\n")),Object(o.b)("p",null,"That's all there is to the installation. You should find an entry for Cubic in your desktop menu. Click to start it and you'll be prompted for your sudo password."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The first screen requires you select a project directory . You can have only one project per directory, so make sure you are using a new directory for each custom ISO (or delete all project files when the task is complete)."),Object(o.b)("p",null,"Create a new project directory for the ISO."),Object(o.b)("p",null,"In the next window, you must select the original ISO image to be used for the creation of the custom image . I'm going to use Ubuntu 16.04 and add Kubernetes to that image. Once you select the image, the rest of the information will automatically fill in. Do not change anything in the Original ISO section. You can, however, change information in the Custom ISO section."),Object(o.b)("p",null,"All the information regarding your images is automatically filled out."),Object(o.b)("p",null,"Click Next and you will eventually find yourself in a terminal window indicating you are in a chroot environment ."),Object(o.b)("p",null,"Our chroot environment, ready for application installation."),Object(o.b)("p",null,"From this terminal window, install all the applications you need in the standard fashion (via apt or apt-get). Once you've completed this task, click Next. You will then see the kernel image being used for the ISO. You can't change this, so click Next again. At this point Cubic will begin building your custom ISO . When it completes, click the Finish and your new disk image is ready and can be found in your project directory."),Object(o.b)("p",null,"Cubic doing its thing."),Object(o.b)("p",null,"The final screen does allow you to delete all project files (minus the generated disk image). Unless you have a need for the files, I'd recommend you do this. Burn your ISO image onto a CD/DVD or USB drive (or use it for a VirtualBox VM) and you're ready to install your custom platform."))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/linux/install/cubic.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-linux-install-cubic-md-1f3b420099adbcbc5c64.js.map
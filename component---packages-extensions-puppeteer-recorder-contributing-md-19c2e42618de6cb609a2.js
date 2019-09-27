(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{962:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return b}));n(12),n(4),n(5),n(3),n(7),n(6),n(8),n(1);var a=n(77),i=n(955);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/extensions/puppeteer-recorder/CONTRIBUTING.md"}});var s={_frontmatter:r},o=i.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(o,l({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"contributing"},"Contributing"),Object(a.b)("p",null,"HI! Thanks you for your interest in Puppeteer Recorder! We'd love to accept your patches and contributions, but please remember that this project was started first and foremost to serve the users of the Checkly API and Site transaction monitoring service."),Object(a.b)("h2",{id:"new-feature-guidelines"},"New feature guidelines"),Object(a.b)("p",null,"When authoring new features or extending existing ones, consider the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All new features should be accompanied first with a Github issues describing the feature and its necessity."),Object(a.b)("li",{parentName:"ul"},"We aim for simplicity. Too many options, buttons, panels etc. detract from that."),Object(a.b)("li",{parentName:"ul"},"Features should serve the general public. Very specific things for your use case are frowned upon.")),Object(a.b)("h2",{id:"getting-set-up"},"Getting set up"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Clone this repository")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/checkly/puppeteer-recorder\ncd puppeteer-recorder\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Install dependencies")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(a.b)("h2",{id:"code-reviews"},"Code reviews"),Object(a.b)("p",null,"All submissions, including submissions by project members, require review. We\nuse GitHub pull requests for this purpose. Consult\n",Object(a.b)("a",l({parentName:"p"},{href:"https://help.github.com/articles/about-pull-requests/"}),"GitHub Help")," for more\ninformation on using pull requests."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: one pull request should cover one, atomic feature and/or bug fix. Do not submit pull requests with a plethora of updates, tweaks, fixes and new features.")),Object(a.b)("h2",{id:"code-style"},"Code Style"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Coding style is fully defined in ",Object(a.b)("a",l({parentName:"li"},{href:"https://github.com/checkly/puppeteer-recorder/blob/master/.eslintrc.js"}),".eslintrc")),Object(a.b)("li",{parentName:"ul"},"Comments should be generally avoided. If the code would not be understood without comments, consider re-writing the code to make it self-explanatory.")),Object(a.b)("p",null,"To run code linter, use:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm run lint\n")),Object(a.b)("h2",{id:"commit-messages"},"Commit Messages"),Object(a.b)("p",null,"Commit messages should follow the Semantic Commit Messages format:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"label(namespace): title\n\ndescription\n\nfooter\n")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"label")," is one of the following:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fix")," - puppeteer bug fixes."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"feat")," - puppeteer features."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"docs")," - changes to docs, e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"docs(api.md): ..")," to change documentation."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"test")," - changes to puppeteer tests infrastructure."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"style")," - puppeteer code style: spaces/alignment/wrapping etc."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"chore")," - build-related work, e.g. doclint changes / travis / appveyor."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"namespace")," is put in parenthesis after label and is optional."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"title")," is a brief summary of changes."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"description")," is ",Object(a.b)("strong",{parentName:"li"},"optional"),", new-line separated from title and is in present tense.")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"fix(code-generator): fix page.pizza method\n\nThis patch fixes page.pizza so that it works with iframes.\n\nFixes #123, Fixes #234\n")),Object(a.b)("h2",{id:"adding-new-dependencies"},"Adding New Dependencies"),Object(a.b)("p",null,"For all dependencies (both installation and development):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Do not add")," a dependency if the desired functionality is easily implementable."),Object(a.b)("li",{parentName:"ul"},"If adding a dependency, it should be well-maintained and trustworthy.")),Object(a.b)("p",null,"A barrier for introducing new installation dependencies is especially high:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Do not add")," installation dependency unless it's critical to project success.")),Object(a.b)("h2",{id:"writing-tests"},"Writing Tests"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Every feature should be accompanied by a test."),Object(a.b)("li",{parentName:"ul"},"Every public api event/method should be accompanied by a test."),Object(a.b)("li",{parentName:"ul"},"Tests should be ",Object(a.b)("em",{parentName:"li"},"hermetic"),". Tests should not depend on external services.")),Object(a.b)("p",null,"We use Jest for testing. Tests are located in the various ",Object(a.b)("inlineCode",{parentName:"p"},"__test__")," folders."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To run all tests:")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm run test\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/extensions/puppeteer-recorder/CONTRIBUTING.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-extensions-puppeteer-recorder-contributing-md-19c2e42618de6cb609a2.js.map
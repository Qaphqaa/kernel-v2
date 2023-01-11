(self.webpackChunkkernel_community=self.webpackChunkkernel_community||[]).push([[8186],{81769:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return L}});var a=n(19756),l=(n(67294),n(63497)),o=n(28360),r=["components"],i={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},p=s("Callout"),m=s("Accordion"),k=s("Aligner"),h=s("Image"),u=s("Authors"),c=s("Box"),d=s("Button"),f=s("Checklist"),N=s("Chocolate"),g=s("Icon"),b=s("Code"),y=s("Column"),x=s("Flash"),C=s("Card"),w=s("InfoBlock"),T=s("List"),B=s("Link"),v=s("Process"),A=s("StatusBanner"),I=s("Tout"),S=s("Video"),H=s("Text"),j={_frontmatter:i},E=o.Z;function L(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)(E,Object.assign({},j,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"component-palette",style:{position:"relative"}},"Component Palette",(0,l.kt)("a",{parentName:"h1",href:"#component-palette","aria-label":"component palette permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"This page serves as a palette for all the components this project has to offer."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"definitions",style:{position:"relative"}},"Definitions",(0,l.kt)("a",{parentName:"h4",href:"#definitions","aria-label":"definitions permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"WYSIWYG"),": What you see is what you get.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Component"),": A lego block like code element you can use for more advanced content like buttons.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"MD"),": Shorthand for Markdown")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"MDX"),": Shorthand for MarkdownExtended (i.e. MDX is the name of the rendering engine we use.)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Child/Children"),": Content that is wrapped by a Component. New lines between content will be recognized as a new child.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Child Rule"),": A pattern introduced for more complex components that recognized each individual child as a repeatable element of a component. (i.e. List, InfoBlock, etc.)"))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"disclaimers",style:{position:"relative"}},"Disclaimers",(0,l.kt)("a",{parentName:"h4",href:"#disclaimers","aria-label":"disclaimers permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"To see dark/light mode variants click the moon/sun in the header")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This palette is primarily to showcase component usage in a vacuum.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For an in-depth chart on props available for these components please see the ",(0,l.kt)("a",{parentName:"p",href:"/fork-me/guides/cheatsheet"},"Cheatsheet"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Any component that's not listed here, but exists in the project")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Always remember. What you see is what you get (WYSIWYG)."))),(0,l.kt)("hr",null),(0,l.kt)(p,{variant:"warning",icon:"warning",mdxType:"Callout"},(0,l.kt)("h4",{id:"child-rule-in-effect",style:{position:"relative"}},"Child Rule in Effect",(0,l.kt)("a",{parentName:"h4",href:"#child-rule-in-effect","aria-label":"child rule in effect permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,'This means that each new line in your Markdown file is treated as its own "child", which is really important in terms of what gets rendered where.')),(0,l.kt)("h2",{id:"accordion",style:{position:"relative"}},"Accordion",(0,l.kt)("a",{parentName:"h2",href:"#accordion","aria-label":"accordion permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"Click the Accordion header to show and hide the content it offers."),(0,l.kt)("p",null,"The first element is always the header. Every other element will be hidden away."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\n<Accordion>\n    \nChild 1 \n\nChild 2\n\n</Accordion>\n")),(0,l.kt)("hr",null),(0,l.kt)(m,{mdxType:"Accordion"},(0,l.kt)("p",null,"Child 1 "),(0,l.kt)("p",null,"Child 2")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"aligner",style:{position:"relative"}},"Aligner",(0,l.kt)("a",{parentName:"h2",href:"#aligner","aria-label":"aligner permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"This is a utility component built to work with the ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," component."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This component exists because remark-images wraps our elements automatically with styles that make it difficult to align an image. It only really works well if the container of the image is large enough to facilitate it.**")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<Aligner center sx={{height: '400px', width: '100%'}}>\n\n<Image src=\"/images/starfox.png\" />\n\n</Aligner>\n\n<Aligner bottom right sx={{height: '400px', width: '100%'}}>\n\n![starfox](/images/starfox.png)\n\n</Aligner>\n")),(0,l.kt)("hr",null),(0,l.kt)(k,{center:!0,sx:{height:"400px",width:"100%"},mdxType:"Aligner"},(0,l.kt)(h,{src:"/images/starfox.png",mdxType:"Image"})),(0,l.kt)(k,{bottom:!0,right:!0,sx:{height:"400px",width:"100%"},mdxType:"Aligner"},(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"/images/starfox.png",alt:"starfox"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"authors",style:{position:"relative"}},"Authors",(0,l.kt)("a",{parentName:"h2",href:"#authors","aria-label":"authors permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"This is a utility component originally built to display the AllContributors grid.\nYet, it also serves as good way for folks to set an author at the end of a page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\n<Authors all/>\n\n<Authors list author="@MaximumCrash"/>\n')),(0,l.kt)("hr",null),(0,l.kt)(u,{all:!0,mdxType:"Authors"}),(0,l.kt)(u,{list:!0,author:"@MaximumCrash",mdxType:"Authors"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"It's also possible to render a custom author by filling out the correct information like so:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You MUST fill out the information EXACTLY how it's written below to get a custom author to render with the correct information.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\n<Authors list>\n    <Box>\n        ![Réjon](/images/starfox.png) [Réjon\n        Taylor-Foster](https://rejontaylor.com) [Another\n        Test](https://github.com) [Twitter](https://twitter.com)\n        [Medium](https://medium.com) # Réjon Taylor-Foster ## Lorem ipsum dolor\n        sit amet, consectetur adipiscing elit. Donec pharetra quam augue. Nulla\n        facilisi. Ut sed volutpat nisl. Cras eget nunc sed erat malesuada\n        faucibus. Donec non vehicula elit. Interdum et malesuada fames ac ante\n        ipsum primis in faucibus. Sed blandit imperdiet maximus. In hac\n        habitasse platea dictumst. Sed id luctus justo. Morbi in tortor et quam\n        lacinia finibus ac in quam. Suspendisse mollis efficitur dui eu laoreet.\n        ### MaximumCrash - ideas - audio - doc - 👀 - 💦\n    </Box>\n</Authors>\n")),(0,l.kt)(u,{list:!0,mdxType:"Authors"},(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"/images/starfox.png",alt:"Réjon"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://rejontaylor.com"},"Réjon Taylor-Foster")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com"},"Another Test")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://twitter.com"},"Twitter")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://medium.com"},"Medium")),(0,l.kt)("p",null,"Réjon Taylor-Foster"),(0,l.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra quam augue. Nulla facilisi. Ut sed volutpat nisl. Cras eget nunc sed erat malesuada faucibus. Donec non vehicula elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit imperdiet maximus. In hac habitasse platea dictumst. Sed id luctus justo. Morbi in tortor et quam lacinia finibus ac in quam. Suspendisse mollis efficitur dui eu laoreet."),(0,l.kt)("p",null,"MaximumCrash"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ideas"),(0,l.kt)("li",{parentName:"ul"},"audio"),(0,l.kt)("li",{parentName:"ul"},"doc"),(0,l.kt)("li",{parentName:"ul"},"👀"),(0,l.kt)("li",{parentName:"ul"},"💦")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"button",style:{position:"relative"}},"Button",(0,l.kt)("a",{parentName:"h2",href:"#button","aria-label":"button permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"It's a button. Not much more to it."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Because this site doesn't provide any stateful functionality (besides light/dark modes), Buttons are built to serve as a unique visual display of links.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\n<Button to="/"> ET phone Home </Button>\n\n<Button secondary inline to="/resources/recipes/palette"> Inlined Secondary </Button>\n\n<Button outline to="/resources/recipes/palette"> Click Here </Button>\n\n<Button small to="/resources/recipes/palette"> Small Button </Button>\n\n<Button to="https://rejontaylor.com"> External Link Button </Button>\n')),(0,l.kt)("hr",null),(0,l.kt)(d,{to:"/",mdxType:"Button"}," ET phone Home "),(0,l.kt)(d,{disabled:!0,inline:!0,to:"/resources/recipes/palette",mdxType:"Button"},"Disabled Inline"),(0,l.kt)(d,{secondary:!0,inline:!0,to:"/resources/recipes/palette",mdxType:"Button"},"Inlined Secondary"),(0,l.kt)(d,{outline:!0,to:"/resources/recipes/palette",mdxType:"Button"},"Click Here"),(0,l.kt)(d,{small:!0,to:"/resources/recipes/palette",mdxType:"Button"},"Small Button"),(0,l.kt)(d,{to:"https://makerdao.com",mdxType:"Button"}," External Link Button "),(0,l.kt)(d,{text:!0,to:"/",mdxType:"Button"},"Text Button"),(0,l.kt)(d,{text:!0,disabled:!0,to:"/",mdxType:"Button"},"Disabled Text Button"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"callout",style:{position:"relative"}},"Callout",(0,l.kt)("a",{parentName:"h2",href:"#callout","aria-label":"callout permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"This component is for callouts. It can also be written as a blockquote ",(0,l.kt)("inlineCode",{parentName:"p"},">")," markdown style."),(0,l.kt)("p",null,"To have icons show up you have to provide an icon name from our icon palette. See the ",(0,l.kt)("a",{parentName:"p",href:"/guiding/writing/recipes/icons"},"Icon Palette")," for those."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\n<Callout>\n\nHowdy\n\n</Callout>\n\n<Callout icon="lightbulb">\n\nKernel callout\n\n</Callout>\n\n> blockquote Callout Markdown Style\n')),(0,l.kt)("hr",null),(0,l.kt)(p,{mdxType:"Callout"},(0,l.kt)("p",null,"Howdy")),(0,l.kt)(p,{icon:"lightbulb",mdxType:"Callout"},(0,l.kt)("p",null,"Kernel callout")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"blockquote Callout Markdown Style")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"checklist",style:{position:"relative"}},"Checklist",(0,l.kt)("a",{parentName:"h2",href:"#checklist","aria-label":"checklist permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"This is a non-functioning checklist component. It is simply styled to look like one."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\n<Checklist>\n    Child A Child B\n    <Box>\n        Child C<Checklist>Child C - A Child C - B</Checklist>\n    </Box>\n</Checklist>\n")),(0,l.kt)("hr",null),(0,l.kt)(f,{mdxType:"Checklist"},(0,l.kt)("p",null,"Child A"),(0,l.kt)("p",null,"Child B"),(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)("p",null,"Child C"),(0,l.kt)(f,{mdxType:"Checklist"},(0,l.kt)("p",null,"Child C - A"),(0,l.kt)("p",null,"Child C - B")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"chocolate-box",style:{position:"relative"}},"Chocolate (Box)",(0,l.kt)("a",{parentName:"h2",href:"#chocolate-box","aria-label":"chocolate box permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,'Originally named "Chocolate Box" components, this component takes into consideration the child rule.\nEach child is recognized as a new element. Thus it\'s recommended for more diverse content to be contained\nby a ',(0,l.kt)("inlineCode",{parentName:"p"},"Box")," component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\n<Chocolate>\n    <Box>\n        <Icon size={\"40px\"} name='maker' />\n        Child A Some content about something\n    </Box>\n\n    <Box>\n        <Icon size={\"40px\"} name='globe' />\n        Child B Some content about something\n    </Box>\n\n    <Box>\n        <Icon size={\"40px\"} name='wrench' />\n        Child C Some content about something\n    </Box>\n</Chocolate>\n")),(0,l.kt)("hr",null),(0,l.kt)(N,{mdxType:"Chocolate"},(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)(g,{size:"40px",name:"maker",mdxType:"Icon"}),(0,l.kt)("p",null,"Child A"),(0,l.kt)("p",null,"Some content about something")),(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)(g,{size:"40px",name:"globe",mdxType:"Icon"}),(0,l.kt)("p",null,"Child B"),(0,l.kt)("p",null,"Some content about something")),(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)(g,{size:"40px",name:"wrench",mdxType:"Icon"}),(0,l.kt)("p",null,"Child C"),(0,l.kt)("p",null,"Some content about something"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"code",style:{position:"relative"}},"Code",(0,l.kt)("a",{parentName:"h3",href:"#code","aria-label":"code permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"There are 2 types of code elements."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The code blocks you've been seeing so far that leverage 3 back ticks ",(0,l.kt)("inlineCode",{parentName:"li"},"(```)")),(0,l.kt)("li",{parentName:"ol"},"Inline code that leverage 1 back tick ",(0,l.kt)("inlineCode",{parentName:"li"},"like this"))),(0,l.kt)("p",null,"#2 makes use of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Code")," component like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<Code>\n\nconst var = "variable";\n\n</Code>\n')),(0,l.kt)(b,{mdxType:"Code"},'const var = "variable";'),(0,l.kt)("p",null,"However ",(0,l.kt)("strong",{parentName:"p"},"inline code doesn't support language highlighting"),"."),(0,l.kt)("p",null,"#1 makes use of the PrismJS library in conjunction with ThemeUI to render code blocks like so."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"We only support so many languages (JS, Text, HTML, CSS, and Markdown). If you want more, check out the ",(0,l.kt)("a",{parentName:"p",href:"https://prismjs.com/#supported-languages"},"PrismJS documentation")," about it.")),(0,l.kt)("p",null,"You can provide a language to show it's tab."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const variable = "string";\n')),(0,l.kt)("p",null,"If you want to show a file name just provide ",(0,l.kt)("inlineCode",{parentName:"p"},"title=file-name.js")," (or whatever the name is)"),(0,l.kt)("div",{className:"gatsby-code-title prism-code-title"},"palette.mdx"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const example = "This is an example with a title tab";\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"column",style:{position:"relative"}},"Column",(0,l.kt)("a",{parentName:"h3",href:"#column","aria-label":"column permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"This component follows a similar pattern to that of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Chocolate Box")," component.\nTo get a header though, there needs to be a child that has children. It is recommended\nto use a ",(0,l.kt)("inlineCode",{parentName:"p"},"Box"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\n<Column>\n\nChild A - Full Width\n\n</Column>\n\n<Column>\n\nChild A - with Sibling\n\nChild B - with Sibling\n\n</Column>\n\n<Column>\n\n<Box>\n\n#### Child A\n\nFull Width with a Header\n\n</Box>\n\n</Column>\n\n\n<Column>\n\n<Box>\n\n#### Child A\n\nWith a sibling and a Header\n\n</Box>\n\n<Box>\n\n#### Child B\n\nWith a sibling and a Header\n\n</Box>\n\n</Column>\n")),(0,l.kt)("hr",null),(0,l.kt)(y,{mdxType:"Column"},(0,l.kt)("p",null,"Child A - Full Width")),(0,l.kt)("hr",null),(0,l.kt)(y,{mdxType:"Column"},(0,l.kt)("p",null,"Child A - with Sibling"),(0,l.kt)("p",null,"Child B - with Sibling")),(0,l.kt)("hr",null),(0,l.kt)(y,{mdxType:"Column"},(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)("h4",{id:"child-a",style:{position:"relative"}},"Child A",(0,l.kt)("a",{parentName:"h4",href:"#child-a","aria-label":"child a permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"Full Width with a Header"))),(0,l.kt)("hr",null),(0,l.kt)(y,{mdxType:"Column"},(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)("h4",{id:"child-a-1",style:{position:"relative"}},"Child A",(0,l.kt)("a",{parentName:"h4",href:"#child-a-1","aria-label":"child a 1 permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"With a sibling and a Header")),(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)("h4",{id:"child-b",style:{position:"relative"}},"Child B",(0,l.kt)("a",{parentName:"h4",href:"#child-b","aria-label":"child b permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"With a sibling and a Header"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"flash-cards",style:{position:"relative"}},"Flash Cards",(0,l.kt)("a",{parentName:"h2",href:"#flash-cards","aria-label":"flash cards permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"These series of components (Flash) and (Card) are the (Hammer) and (Nail) equivalents\nthat come together to establish a Flashcard game session. "),(0,l.kt)("p",null,"To establish a session you simply place ",(0,l.kt)("inlineCode",{parentName:"p"},"Flash")," component with a ",(0,l.kt)("inlineCode",{parentName:"p"},"Card")," component inside of it. "),(0,l.kt)("p",null,"Each child of Flash must be a Card component, ",(0,l.kt)("strong",{parentName:"p"},"all other components will be ignored and not rendered.")),(0,l.kt)("p",null,"Each Card component recognizes it's children, following the child rule, where the first child is the question, the second child is the answer, and any other children are treated\nas sub answer copy text. If you want a more complex question, or answer, it is recommended you use a Box component, and then render out your structured question to meet your needs. "),(0,l.kt)("p",null,'Once all the Flash cards have been revealed and answered, the session is marked as complete, and you\'ll see the "Review completed" dialogue. '),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"NOTE:")," Flashcard session state is currently tied to the Flash component itself, there is no global state storing answers at the time of this writing. ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"NOTE:")," The ",(0,l.kt)("inlineCode",{parentName:"p"},"Card")," component here is not the theme-ui Card component, but a custom one within our own modules. ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\n<Flash>\n\n<Card>\n\nWhat kinds of conversations do we build together in Kernel?\n\nHorizontal\n\n</Card>\n\n<Card>\n\nWho's the coolest?\n\nYou're the coolest\n\n</Card>\n\n<Card>\n\nFor whom does the Taco Bell toll? \n\nUs All\n\n</Card>\n\n</Flash>\n")),(0,l.kt)(x,{mdxType:"Flash"},(0,l.kt)(C,{mdxType:"Card"},(0,l.kt)("p",null,"What kinds of conversations do we build together in Kernel?"),(0,l.kt)("p",null,"Horizontal")),(0,l.kt)(C,{mdxType:"Card"},(0,l.kt)("p",null,"Who's the coolest?"),(0,l.kt)("p",null,"You're the coolest")),(0,l.kt)(C,{mdxType:"Card"},(0,l.kt)("p",null,"For whom does the Taco Bell toll? "),(0,l.kt)("p",null,"Us All"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"info-block",style:{position:"relative"}},"Info Block",(0,l.kt)("a",{parentName:"h2",href:"#info-block","aria-label":"info block permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"This component is similar to that of a Hero image content section.\nDepending on when you put the image is the side it will show up on. If there's no image first or last in content, the content will be centered."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"It is highly recommend you use a box component here. Each child is recognized and will render as so.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\n<InfoBlock>\n\n![starfox](/images/starfox.png)\n\n<Box>\n\n### Hello World\n\nSome more content\n\n</Box>\n\n</InfoBlock>\n\n<InfoBlock>\n\n<Box>\n\n### Hello World\n\nSome more content\n\n</Box>\n\n<Image src="/images/starfox.png" />\n\n</InfoBlock>\n\n<InfoBlock>\n\n<Box>\n\n### I am centered\n\n<Image src="/images/starfox.png" />\n\nSome more content\n\n</Box>\n\n</InfoBlock>\n')),(0,l.kt)("hr",null),(0,l.kt)(w,{mdxType:"InfoBlock"},(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"/images/starfox.png",alt:"starfox"})),(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)("h3",{id:"hello-world",style:{position:"relative"}},"Hello World",(0,l.kt)("a",{parentName:"h3",href:"#hello-world","aria-label":"hello world permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"Some more content"))),(0,l.kt)(w,{mdxType:"InfoBlock"},(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)("h3",{id:"hello-world-1",style:{position:"relative"}},"Hello World",(0,l.kt)("a",{parentName:"h3",href:"#hello-world-1","aria-label":"hello world 1 permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"Some more content")),(0,l.kt)(h,{src:"/images/starfox.png",mdxType:"Image"})),(0,l.kt)(w,{mdxType:"InfoBlock"},(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)("h3",{id:"i-am-centered",style:{position:"relative"}},"I am centered",(0,l.kt)("a",{parentName:"h3",href:"#i-am-centered","aria-label":"i am centered permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)(h,{src:"/images/starfox.png",mdxType:"Image"}),(0,l.kt)("p",null,"Some more content"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"list",style:{position:"relative"}},"List",(0,l.kt)("a",{parentName:"h2",href:"#list","aria-label":"list permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"To get the most out of lists (i.e. headers, subcontent, links) you MUST use a ",(0,l.kt)("inlineCode",{parentName:"p"},"Box")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Link")," component based on your specific needs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\n<List>\n\nElement A\n\nElement B\n\n</List>\n\n<List>\n\n<Box>\n\nElement A Header\n\nSome content below the header\n\n</Box>\n\nElement B with no subcontent\n\n<Box>\n\nElement C Header\n\nSome content below the header\n\n</Box>\n\n</List>\n\n<List>\n\n<Link to="/">\n\nLink Element A Header\n\nSome content below the header\n\n</Link>\n\n<Link to="https://makerdao.com/">\n\nExternal Link Element B Header\n\nSome content below the header\n\n</Link>\n\n</List>\n')),(0,l.kt)("hr",null),(0,l.kt)(T,{mdxType:"List"},(0,l.kt)("p",null,"Element A"),(0,l.kt)("p",null,"Element B")),(0,l.kt)("hr",null),(0,l.kt)(T,{mdxType:"List"},(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)("p",null,"Element A Header"),(0,l.kt)("p",null,"Some content below the header")),(0,l.kt)("p",null,"Element B with no subcontent"),(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)("p",null,"Element C Header"),(0,l.kt)("p",null,"Some content below the header"))),(0,l.kt)("hr",null),(0,l.kt)(T,{mdxType:"List"},(0,l.kt)(B,{to:"/",mdxType:"Link"},(0,l.kt)("p",null,"Link Element A Header"),(0,l.kt)("p",null,"Some content below the header")),(0,l.kt)(B,{to:"https://makerdao.com/",mdxType:"Link"},(0,l.kt)("p",null,"External Link Element B Header"),(0,l.kt)("p",null,"Some content below the header"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"process",style:{position:"relative"}},"Process",(0,l.kt)("a",{parentName:"h2",href:"#process","aria-label":"process permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"This components great for stepping folks through a numbered process."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\n<Process>\n    ### Process Information 1 ### Process Information 2\n    <Box>\n        ### Process Information 3 Some more content here. The usual suspects and\n        whatever you'd want to put.\n    </Box>\n</Process>\n")),(0,l.kt)("hr",null),(0,l.kt)(v,{mdxType:"Process"},(0,l.kt)("h3",{id:"process-information-1",style:{position:"relative"}},"Process Information 1",(0,l.kt)("a",{parentName:"h3",href:"#process-information-1","aria-label":"process information 1 permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("h3",{id:"process-information-2",style:{position:"relative"}},"Process Information 2",(0,l.kt)("a",{parentName:"h3",href:"#process-information-2","aria-label":"process information 2 permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)(c,{mdxType:"Box"},(0,l.kt)("h3",{id:"process-information-3",style:{position:"relative"}},"Process Information 3",(0,l.kt)("a",{parentName:"h3",href:"#process-information-3","aria-label":"process information 3 permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"Some more content here. The usual suspects and whatever you'd want to put."))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"status-banner",style:{position:"relative"}},"Status Banner",(0,l.kt)("a",{parentName:"h3",href:"#status-banner","aria-label":"status banner permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"This is your run of the mill status banner. It's also capable of being sticky."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\n<StatusBanner>\n\nRegular old status banner\n\n</StatusBanner>\n\n<StatusBanner warning>\n\nWarning status!\n\n</StatusBanner>\n\n<StatusBanner sticky>\n\nI will stick to the top of the screen.\n\n</StatusBanner>\n")),(0,l.kt)("hr",null),(0,l.kt)(A,{mdxType:"StatusBanner"},(0,l.kt)("p",null,"Regular old status banner")),(0,l.kt)("hr",null),(0,l.kt)(A,{warning:!0,mdxType:"StatusBanner"},(0,l.kt)("p",null,"Warning status!")),(0,l.kt)("hr",null),(0,l.kt)(A,{sticky:!0,mdxType:"StatusBanner"},(0,l.kt)("p",null,"I will stick to the top of the screen.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"tables",style:{position:"relative"}},"Tables",(0,l.kt)("a",{parentName:"h2",href:"#tables","aria-label":"tables permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"We support the lowest spec for tables in MD. None of that Github alignment stuff here."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"| Header A       | Header B                    |\n| --------------- | ------------------------- |\n| Content A        | Content A              |\n| Content B          | Content B              |\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Header A"),(0,l.kt)("th",{parentName:"tr",align:null},"Header B"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content A"),(0,l.kt)("td",{parentName:"tr",align:null},"Content A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content B"),(0,l.kt)("td",{parentName:"tr",align:null},"Content B")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"tout",style:{position:"relative"}},"Tout",(0,l.kt)("a",{parentName:"h2",href:"#tout","aria-label":"tout permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"Tout components are meant to be like ultra fancy links, but you can put anything inside of them.\n",(0,l.kt)("strong",{parentName:"p"},"If there's only one child it will be full width.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\n<Tout>\n\nElement A - Full Width\n\n</Tout>\n\n\n<Tout>\n\n### Element A\n\n### Element B\n\n</Tout>\n")),(0,l.kt)("hr",null),(0,l.kt)(I,{mdxType:"Tout"},(0,l.kt)("p",null,"Element A - Full Width")),(0,l.kt)("hr",null),(0,l.kt)(I,{mdxType:"Tout"},(0,l.kt)("h3",{id:"element-a",style:{position:"relative"}},"Element A",(0,l.kt)("a",{parentName:"h3",href:"#element-a","aria-label":"element a permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("h3",{id:"element-b",style:{position:"relative"}},"Element B",(0,l.kt)("a",{parentName:"h3",href:"#element-b","aria-label":"element b permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"video",style:{position:"relative"}},"Video",(0,l.kt)("a",{parentName:"h2",href:"#video","aria-label":"video permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"It's possible to show videos here. They'll always be full width with no styles."),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\n`youtube: [Your love!](mzDVaKRApcg)`\n\n<Video src="https://www.youtube-nocookie.com/embed/kpk2tdsPh0A"/>\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("div",{parentName:"p",className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"50%",position:"relative",height:"0",overflow:"hidden"}}," ",(0,l.kt)("div",{parentName:"div",className:"embedVideo-container"}," ",(0,l.kt)("iframe",{parentName:"div",title:"Your love!",src:"https://www.youtube.com/embed/mzDVaKRApcg?rel=0",className:"embedVideo-iframe",style:{border:"0",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},loading:"eager",allowFullScreen:!0,sandbox:"allow-same-origin allow-scripts allow-popups"})," ")," ")),(0,l.kt)("hr",null),(0,l.kt)(S,{src:"https://www.youtube-nocookie.com/embed/kpk2tdsPh0A",mdxType:"Video"}),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"text",style:{position:"relative"}},"Text",(0,l.kt)("a",{parentName:"h3",href:"#text","aria-label":"text permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("h1",{id:"header-1",style:{position:"relative"}},"Header 1",(0,l.kt)("a",{parentName:"h1",href:"#header-1","aria-label":"header 1 permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("h2",{id:"header-2",style:{position:"relative"}},"Header 2",(0,l.kt)("a",{parentName:"h2",href:"#header-2","aria-label":"header 2 permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("h3",{id:"header-3",style:{position:"relative"}},"Header 3",(0,l.kt)("a",{parentName:"h3",href:"#header-3","aria-label":"header 3 permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("h4",{id:"header-4",style:{position:"relative"}},"Header 4",(0,l.kt)("a",{parentName:"h4",href:"#header-4","aria-label":"header 4 permalink",className:"anchor-link after"},(0,l.kt)("span",{parentName:"a"},"¶"))),(0,l.kt)("p",null,"Large Text"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Bold text")),(0,l.kt)("p",null,"Regular text"),(0,l.kt)(H,{variant:"smallText",mdxType:"Text"}," Small text "),(0,l.kt)(H,{variant:"microText",mdxType:"Text"}," Micro text "),(0,l.kt)(H,{variant:"caps",mdxType:"Text"},"Caps"),(0,l.kt)(B,{to:"/",mdxType:"Link"},"Link "),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"This is a living document. Add or remove components as you change things. And always remember to have fun.")))}L.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-guiding-writers-recipes-components-mdx-ddcf4677b432209a2583.js.map
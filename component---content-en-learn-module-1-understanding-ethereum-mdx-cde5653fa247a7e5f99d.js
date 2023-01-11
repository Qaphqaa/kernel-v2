(self.webpackChunkkernel_community=self.webpackChunkkernel_community||[]).push([[9128],{38587:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return y}});var n=a(19756),i=(a(67294),a(63497)),o=a(28360),s=["components"],r={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},h=l("Video"),c=l("Process"),p=l("Flash"),u=l("Card"),m=l("List"),d=l("Link"),k={_frontmatter:r},g=o.Z;function y(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)(g,Object.assign({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-the-idea",style:{position:"relative"}},"💡 The idea",(0,i.kt)("a",{parentName:"h1",href:"#-the-idea","aria-label":" the idea permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"We now have some context for what verifiability is, where it comes from and the unique role it plays in securing our trade, and therefore trust, relationships. Critically, Szabo has made it clear how this self-same verifiability is the means by which we can understand the network within which trade (and trust) operate. Knowing this, we can turn to the founder of Ethereum - Vitalik Buterin - without making the mistake of thinking that he is talking about something new."),(0,i.kt)("p",null,"Ethereum is a very old idea, dressed up in new clothes and a network that operates by virtue of encoded light, rather than clay seals."),(0,i.kt)(h,{src:"https://www.youtube-nocookie.com/embed/gjwr-7PgpN8",mdxType:"Video"}),(0,i.kt)("h2",{id:"how-does-this-fit-into-kernel",style:{position:"relative"}},"How does this fit into Kernel?",(0,i.kt)("a",{parentName:"h2",href:"#how-does-this-fit-into-kernel","aria-label":"how does this fit into kernel permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"This early video from Devcon 1 contains many gems of insight into the ideas behind Ethereum; why it might be interesting and important to have one, shared, Turing-complete environment which anyone can access and program; and what the vision was (and is). It's especially useful to look back and ask what of the original ideas we have succeeded in implementing, and where there are still opportunities for improvement. This video has been selected to assist you deepen your (more technical) understanding of:"),(0,i.kt)(c,{mdxType:"Process"},(0,i.kt)("p",null,"Value"),(0,i.kt)("p",null,"Trust"),(0,i.kt)("p",null,"Incentives"),(0,i.kt)("p",null,"Censorship resistance"),(0,i.kt)("p",null,"(Not just!) money and speech")),(0,i.kt)("h2",{id:"brief",style:{position:"relative"}},"Brief",(0,i.kt)("a",{parentName:"h2",href:"#brief","aria-label":"brief permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"This video is the genesis of the calculator (Bitcoin) vs smartphone (Ethereum) analogy and a\ndemonstration of the power of generality..."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"Instead of having a protocol that is designed around one very small set of use cases, you\njust create a ',(0,i.kt)("strong",{parentName:"p"},"general-purpose operating system"),' and you let people build whatever they want\nas applications on top of it."')),(0,i.kt)("p",null,"Ethereum is a blockchain with a few unique features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Built-in Turing-complete scripting language - essentially a hybrid between standard VM\narchitectures, Bitcoin script and a "few other things".'),(0,i.kt)("li",{parentName:"ul"},"People can write programs in this script, or high level languages that compile down to this\nscript, take these compiled scripts, put them into transactions and send them to the blockchain.\nThe transaction gets confirmed and you get a special account at that address."),(0,i.kt)("li",{parentName:"ul"},"Contractual accounts and Externally Owned Accounts have the ",(0,i.kt)("strong",{parentName:"li"},"same privileges"),"."),(0,i.kt)("li",{parentName:"ul"},"Anyone can create an application, with any rules. Anyone can then interact with that\napplication, i.e. you can do NameCoin in 10 lines of code...")),(0,i.kt)("p",null,"State is defined as a key value mapping addresses to account objects. Every account object has a\nnonce and balance. Contract accounts also include a code hash and storage trie root. Vitalik\nthen discusses how transactions work - important low-level details for us to build a full\nconceptual picture in the weeks ahead."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"You can actually think of it as being a fairly simple system. You can think of the state as\nbeing a database, and you can think of each of these contracts as being programs that are\nsitting on one computer, ',(0,i.kt)("strong",{parentName:"p"},"except the computer is massively globally distributed. It's actually\na highly secure network backed by tens of thousands computers around the world.")," It's bold\nbecause it's important.\"")),(0,i.kt)("p",null,'However, this raises the spectre of "The Halting Problem". If you have a general scripting language, then what is to stop someone writing a program which does not terminate (or halt), taking up all the computer\'s resources and preventing anyone else from using it? Vitalik explains how this is solved by "gas": a fee charged for every computational step the computer must take, where there is a limit to computational steps possible per block.'),(0,i.kt)(p,{mdxType:"Flash"},(0,i.kt)(u,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: Ethereum's state is defined as a...?"),(0,i.kt)("p",null,"key value mapping addresses to account objects."))),(0,i.kt)("h3",{id:"virtual-economy",style:{position:"relative"}},"Virtual Economy",(0,i.kt)("a",{parentName:"h3",href:"#virtual-economy","aria-label":"virtual economy permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"This means there is no ",(0,i.kt)("em",{parentName:"p"},"technical")," limit on what can be put in the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," field of a\ntransaction, but there is an ",(0,i.kt)("em",{parentName:"p"},"economic")," one, as the more data you include, the more expensive\nit becomes. It was an extra 68 gas for every byte of data you include at that time, though it\nmay have changed now. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"💡 Exercise for the reader: how would you tell what the gas price per byte currently is?")),(0,i.kt)("p",null,"Vitalik then discusses some of the intricacies around ",(0,i.kt)("inlineCode",{parentName:"p"},"v"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"r"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," from elliptic curve\ncryptography, and how ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," is an extra field used for public key recovery. He also provides\nfurther information on receipts and logs and why logs are cheaper and allow for efficient\nlight-client access. Although it may sound boring, this is the heart of how we build\ncensorship-resistant tools."),(0,i.kt)(p,{mdxType:"Flash"},(0,i.kt)(u,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: How do we prevent a blockchain with a Turing-complete script from halting?"),(0,i.kt)("p",null,'By charging "gas" for every computational step and limiting the amount of gas consumed per block.'))),(0,i.kt)("p",null,"This is followed by a description of the ",(0,i.kt)("strong",{parentName:"p"},"Ethereum Virtual Machine"),". To understand what ",(0,i.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=948908"},"virtualization")," is, let's take a few steps back before looking at the EVM's specific architecture. "),(0,i.kt)("p",null,"The word “computer” simply means a calculating machine (and the very ",(0,i.kt)("a",{parentName:"p",href:"https://mjosefweber.medium.com/the-first-computers-were-human-and-mostly-women-b0d9bbff5a98"},"first computers")," were ",(0,i.kt)("a",{parentName:"p",href:"https://www.sciencemuseum.org.uk/objects-and-stories/women-computing"},"women"),", mostly working for the military or NASA). Modern computers are what Alan Turing called “automatic machines”, which we now know simply as Turing machines. A Turing machine is an abstract computational device devised to investigate the limits of what can be calculated. Practically, a Turing machine is an infinite length tape divided into squares with one symbol per square which tells the reader whether to go forward, backwards, or to stay put. Don't bother too much about the tape: Turing machines are an idea, a mental construct, which ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-7/perfection/"},"allow us to investigate what it is possible, in principle, to calculate")," (given that we also know maths itself is incomplete)."),(0,i.kt)("p",null,"The truly fantastic thing is that Turing actually built a physical version of his abstract idea, and he did so to crack Enigma during World War II (interestingly, the reason he was able to is because ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-7/no-paradigm/#the-inertia-of-language"},"fascist language always contains the seeds of its own destruction"),": in this case, the phrase ",(0,i.kt)("em",{parentName:"p"},"Heil Hitler")," was a major contributing factor to Germany's defeat). Apart from the fascinating history, this is a fantastical fact because – due to the simplicity of the actual idea of a Turing machine – for any computable algorithm, a Turing machine capable of implementing that algorithm's logic can be constructed."),(0,i.kt)("p",null,"This means computers can be used to build computers, which gets us very close to the sort of self-replicating pattern we perceive in RNA. We can write an algorithm which specifies a computer, and then implement that as software in another computer. The first people to do this were IBM researchers in the 1970's who were looking to investigate resource consumption and needed to partition their machines to do so properly. That led to the birth of virtual machines, which are software that emulate a computer, running on other computers. "),(0,i.kt)("p",null,"The Ethereum Virtual Machine is one such instance. What is fascinating about it in the context of all this history is that it is a “singleton” (sometimes called “monolithic”). That is, it is one, single virtual machine, running on thousands of different, distributed computers. This is interesting because, not only does it allow us to investigate the limits of what it is possible to calculate, it does so in a way which keeps us always in agreement about the current state of affairs. It achieves this by virtue of the following architecture, described more succinctly by Vitalik:"),(0,i.kt)(c,{mdxType:"Process"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stack"),": up to 1024 32-byte fields.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Memory"),": just an infinitely expanding byte array, but the more you expand the byte array, the more gas you have to pay. ",(0,i.kt)("em",{parentName:"p"},"Most of the limits aren't static, they're economic and you'll see this idea again and again."),"  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Storage"),": permanent for contracts. You can read and write to it.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Environment variables"),": the VM can access block number, time, mining difficulty, previous block hash etc.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Logs"),": append-only storage in a specific block, not in state. Vitalik has since acknowledged that including logs was a mistake and that he values simplicity now, having experienced first-hand ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/vitalikbuterin/status/1477402770231676929"},"the problems of complexity in production"),".  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sub-calling"),": opcodes by which VM can itself call other contracts.  ")),(0,i.kt)("h3",{id:"strong-roots",style:{position:"relative"}},"Strong ",(0,i.kt)("a",{parentName:"h3",href:"https://www.youtube.com/watch?v=FPAih_MD-aU"},"Roots"),(0,i.kt)("a",{parentName:"h3",href:"#strong-roots","aria-label":"strong roots permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,'Vitalik then discusses ABIs (application binary interface) and RLP (recursive length prefix) encoding "for people who are set theory geeks". It may seem boring, but it is a demonstration of the early culture and how the people who built all this stuff really think. He follows this with an explanation of memory-hard algorithms for mining and why they were an innovation; emphasises the fast block time (17s); and discusses "uncles", which solve the stale rates of blocks that arise due to network latency. It\'s worth listening to for cultural context, but 23:50 - 28:57 is now a bit outdated.'),(0,i.kt)("p",null,"Vitalik makes the critical point that merkle tries are \"a construction that allows for compact, efficiently-verifiable proofs that a particular transaction was included in a particular block.\" It's not just transactions in the Merkle trie though; it's the state too: i.e. that storage trie root we talked about in the account object earlier."),(0,i.kt)("p",null,"This particular choice of data structure allows us to succinctly express shared state, because we can have all sorts of transactional data (represented in the bottom row below) “rolled up” into a single hash, called the “merkle root”, as demonstrated here:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"/images/mod1-img/merkle-trie.png",alt:"Merkle Trie - Level Up Coding"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Source: ",(0,i.kt)("a",{parentName:"li",href:"https://levelup.gitconnected.com/merkle-trees-e4fdaeaa3094"},"Level Up Coding"))),(0,i.kt)("p",null,"This image reveals why intimacy with low-level technical details allows one to build a comprehensive conceptual picture of how it all ties together, and what meanings any technology can be used to build."),(0,i.kt)("p",null,"What kinds of meaning exactly? Well, ",(0,i.kt)("a",{parentName:"p",href:"https://www.goodreads.com/book/show/5755.The_Language_Instinct"},"language itself is composed out of tree-like deep structures"),". It is these basic, but extraordinarily powerful, combinatorial patterns which allow very young human beings to learn and use an almost infinitely complex phenomenon with such ease, even as their brains are still developing. "),(0,i.kt)("p",null,"More prosaically, every word is a tree, with its roots tracing through endless other words and languages and people, and its branches reaching into any number of unique interpretations in times and contexts yet to be discovered. Language is the only ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274"},"logically decentralized")," system we have, so it makes sense that the data structures which inform the next logically decentralized systems we co-create mirror that at the heart of how we currently communicate value."),(0,i.kt)("h3",{id:"generalised-compute",style:{position:"relative"}},"Generalised Compute",(0,i.kt)("a",{parentName:"h3",href:"#generalised-compute","aria-label":"generalised compute permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"So, you're less technical than Vitalik (i.e. all of us) and are wondering what this all really means? Well, the critical point is this notion of a ",(0,i.kt)("strong",{parentName:"p"},"general purpose operating system")," - one, monolithic virtual machine distributed across the world which is shared by everyone, owned by no-one and which can't be turned off without also turning off the internet. With Bitcoin, you can carry 12 magical words in your head across any border in the world, incant them into an internet-connected machine and have immediate access to value. "),(0,i.kt)("p",null,"Now, there is the possibility that you could pull down not just monetary value, but ",(0,i.kt)("em",{parentName:"p"},"generalised computation"),". That is, your 12 or 24-word mnemonic could be your entire personal OS, which would be accessible from anywhere. Stop thinking of computers as a screen into which you type things from a keyboard. Start seeing the world itself as an ",(0,i.kt)("a",{parentName:"p",href:"https://dyeing.thebluebook.co.za/?stackedPages=%2Fsigned"},"infinitely programmable playground"),", access to which only requires a few magical words anyone, anywhere can create when they learn the basics of a new order of language."),(0,i.kt)(p,{mdxType:"Flash"},(0,i.kt)(u,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: The 12 or 24 words used to generate your private key and grant you access to a blockchain is called a ","_","_","_","_","_","_","_","_","?"),(0,i.kt)("p",null,"Mnemonic."))),(0,i.kt)("h3",{id:"kaizen-and-the-principle-of-subtraction",style:{position:"relative"}},"Kaizen and The Principle of Subtraction",(0,i.kt)("a",{parentName:"h3",href:"#kaizen-and-the-principle-of-subtraction","aria-label":"kaizen and the principle of subtraction permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"It's also worth understanding the ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.foundation/philosophy/"},"Ethereum Foundation's philosophy"),", as it works with two fascinating complementary opposites. "),(0,i.kt)(m,{mdxType:"List"},(0,i.kt)(d,{to:"https://youtu.be/R7FjX0GEiAM?t=110",mdxType:"Link"},"The Quintessential DevCon IV Talk")),(0,i.kt)("p",null,'The term 改善 (pronounced "kaizen", meaning "continuous improvement") was first used in Japan after World War II, mostly promoted by American business and quality-management teachers, and found its apogee in "The Toyota Way". So it\'s not a term with a great history, but it is one we can reclaim by pairing it with its opposite, what Aya Miyaguchi calls "The Principle of Subtraction".'),(0,i.kt)("p",null,"Rooted in Zen philosophy, the Ethereum Foundation aims to \"grow small\"; to do by not doing; and to try and matter less. When consistently subtracting from your own importance and influence, then the continuous improvement we all wish to see happens in the community's capacity and capability. It's elegant and ]",(0,i.kt)("a",{parentName:"p",href:"https://subconscious.substack.com/p/simple-seeds"},"simple"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We seek to continuously improve the people around us by humbling ourselves and handing over power at every chance, without shirking responsibility.")),(0,i.kt)("p",null,"Delighted, we gradually find ourselves doing nothing, being happy."))}y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-learn-module-1-understanding-ethereum-mdx-cde5653fa247a7e5f99d.js.map
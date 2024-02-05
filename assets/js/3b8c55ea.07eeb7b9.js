"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[217],{5799:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var s=n(1527),l=n(6225);const a={sidebar_position:1,description:"How to install Yazi on various operating systems."},r="Installation",t={id:"installation",title:"Installation",description:"How to install Yazi on various operating systems.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"How to install Yazi on various operating systems."},sidebar:"docsSidebar",next:{title:"Quick Start",permalink:"/docs/quick-start"}},o={},c=[{value:"Packaging status",id:"packaging-status",level:2},{value:"Arch Linux",id:"arch-linux",level:2},{value:"macOS",id:"macos",level:2},{value:"Nix",id:"nix",level:2},{value:"NetBSD",id:"netbsd",level:2},{value:"Windows",id:"windows",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation-1",level:3},{value:"Image previews",id:"image-previews",level:3},{value:"AOSC OS",id:"aosc-os",level:2},{value:"Official binaries",id:"official-binaries",level:2},{value:"Cargo",id:"cargo",level:2},{value:"Build from source",id:"build-from-source",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(i.p,{children:"To use Yazi, you must have the following prerequisites installed:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/file/file",children:(0,s.jsx)(i.code,{children:"file"})})," (for file type detection)"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Yazi can be ",(0,s.jsx)(i.em,{children:"optionally"})," extended with other command line tools to enable additional features."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://www.nerdfonts.com/",children:"nerd-fonts"})," (",(0,s.jsx)(i.a,{href:"/docs/faq#i-dont-like-nerdfonts",children:(0,s.jsx)(i.em,{children:"recommended"})}),")"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/dirkvdb/ffmpegthumbnailer",children:(0,s.jsx)(i.code,{children:"ffmpegthumbnailer"})})," (for video thumbnails)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://theunarchiver.com/command-line",children:(0,s.jsx)(i.code,{children:"unar"})})," (for archive preview)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://jqlang.github.io/jq/",children:(0,s.jsx)(i.code,{children:"jq"})})," (for JSON preview)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://poppler.freedesktop.org/",children:(0,s.jsx)(i.code,{children:"poppler"})})," (for PDF preview)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/sharkdp/fd",children:(0,s.jsx)(i.code,{children:"fd"})})," (for file searching)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/BurntSushi/ripgrep",children:(0,s.jsx)(i.code,{children:"rg"})})," (for file content searching)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/junegunn/fzf",children:(0,s.jsx)(i.code,{children:"fzf"})})," (for quick file subtree navigation)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/ajeetdsouza/zoxide",children:(0,s.jsx)(i.code,{children:"zoxide"})})," (for historical directories navigation)"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"packaging-status",children:"Packaging status"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://repology.org/project/yazi/versions",children:(0,s.jsx)(i.img,{src:"https://repology.org/badge/vertical-allrepos/yazi.svg",alt:"Packaging status"})})}),"\n",(0,s.jsx)(i.h2,{id:"arch-linux",children:"Arch Linux"}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["We recommend using ",(0,s.jsx)(i.a,{href:"https://aur.archlinux.org/packages/yazi-git",children:(0,s.jsx)(i.code,{children:"yazi-git"})})," to install the latest main branch from AUR at the moment,\nsince the official package of ",(0,s.jsx)(i.a,{href:"https://archlinux.org/packages/extra/x86_64/yazi/",children:(0,s.jsx)(i.code,{children:"yazi"})})," is quite outdated."]})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"sudo pacman -S yazi ffmpegthumbnailer unarchiver jq poppler fd ripgrep fzf zoxide\n"})}),"\n",(0,s.jsxs)(i.p,{children:["If you want to use the latest Git version, you can install it from ",(0,s.jsx)(i.a,{href:"https://aur.archlinux.org/packages/yazi-git/",children:"AUR"})," or ",(0,s.jsx)(i.a,{href:"https://github.com/archlinuxcn/repo/",children:"Arch Linux CN"}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"paru -S yazi-git ffmpegthumbnailer unarchiver jq poppler fd ripgrep fzf zoxide\n"})}),"\n",(0,s.jsx)(i.h2,{id:"macos",children:"macOS"}),"\n",(0,s.jsxs)(i.p,{children:["First, make sure that Homebrew is fully up-to-date with ",(0,s.jsx)(i.code,{children:"brew update"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"Then you can install Yazi (and the optional dependencies):"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"brew install yazi ffmpegthumbnailer unar jq poppler fd ripgrep fzf zoxide\nbrew tap homebrew/cask-fonts && brew install --cask font-symbols-only-nerd-font\n"})}),"\n",(0,s.jsxs)(i.p,{children:["If you prefer to use the most recent code, use the ",(0,s.jsx)(i.code,{children:"--HEAD"})," flag when installing Yazi."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"brew install yazi --HEAD\n"})}),"\n",(0,s.jsx)(i.h2,{id:"nix",children:"Nix"}),"\n",(0,s.jsxs)(i.p,{children:["A ",(0,s.jsx)(i.a,{href:"https://search.nixos.org/packages?channel=unstable&show=yazi",children:"Nix package"})," for Yazi is available."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"# NixOS:\nnix-env -iA nixos.yazi\n\n# Not NixOS:\nnix-env -iA nixpkgs.yazi\n"})}),"\n",(0,s.jsx)(i.p,{children:"Or add the following to your configuration:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-nix",children:"# configuration.nix\nenvironment.systemPackages = with pkgs; [\n\tyazi\n];\n"})}),"\n",(0,s.jsxs)(i.p,{children:["You can also manage Yazi's configuration using ",(0,s.jsx)(i.a,{href:"https://nix-community.github.io/home-manager/options.html#opt-programs.yazi.enable",children:"home-manager"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"netbsd",children:"NetBSD"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"pkgin install yazi\n"})}),"\n",(0,s.jsx)(i.h2,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(i.p,{children:"Windows has been supported since Yazi v0.1.4, but it's still in the early stage, so please file an issue if you encounter any bugs."}),"\n",(0,s.jsx)(i.h3,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(i.p,{children:["Yazi relies on ",(0,s.jsx)(i.code,{children:"file(1)"})," to detect the ",(0,s.jsx)(i.code,{children:"mime-type"})," of the file, and the easiest and most reliable way to get it on Windows is to install Git for Windows and use the ",(0,s.jsx)(i.code,{children:"file(1)"})," that comes with it."]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Install Git for Windows by running ",(0,s.jsx)(i.a,{href:"https://git-scm.com/download/win",children:"the official installer"}),", or through your package manager of choice."]}),"\n",(0,s.jsxs)(i.li,{children:["To allow Yazi to find ",(0,s.jsx)(i.code,{children:"file(1)"}),", add ",(0,s.jsx)(i.code,{children:"C:\\Git_Installed_Directory\\usr\\bin\\"})," to your ",(0,s.jsx)(i.code,{children:"%PATH%"})," environment variable, which differs depending on how you installed Git:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["If you installed Git with the installer, it would be ",(0,s.jsx)(i.code,{children:"C:\\Program Files\\Git\\usr\\bin"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["If you installed Git with scoop, it would be ",(0,s.jsx)(i.code,{children:"C:\\Users\\USERNAME\\scoop\\apps\\git\\current\\usr\\bin"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"Restart your terminal."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["To check if you've done this properly, enter ",(0,s.jsx)(i.code,{children:"file -v"}),", you should see output similar to the following:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-powershell",children:"C:\\Users\\yazi> file -v\nfile-5.45\n"})}),"\n",(0,s.jsxs)(i.p,{children:["This is currently the only method we recommend. ",(0,s.jsxs)(i.strong,{children:["We do NOT recommend ",(0,s.jsx)(i.code,{children:"scoop install file"})]}),", since Scoop's ",(0,s.jsx)(i.code,{children:"file"})," cannot handle Unicode file names (such as ",(0,s.jsx)(i.code,{children:"pexels-oliver-sjo\u0308stro\u0308m-1433052.jpg"}),") properly."]}),"\n",(0,s.jsx)(i.h3,{id:"installation-1",children:"Installation"}),"\n",(0,s.jsxs)(i.p,{children:["You can download the latest official binaries from ",(0,s.jsx)(i.a,{href:"https://github.com/sxyazi/yazi/releases",children:"GitHub Releases"}),", or install Yazi with ",(0,s.jsx)(i.a,{href:"https://scoop.sh/",children:"Scoop"}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"scoop install yazi\n# Install the optional dependencies (recommended):\nscoop install unar jq poppler fd ripgrep fzf zoxide\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Yazi on Scoop is maintained by community contributors, and may not always have the latest version available. You may need to check our ",(0,s.jsx)(i.a,{href:"https://github.com/sxyazi/yazi/releases",children:"GitHub Releases"})," page for the latest version."]}),"\n",(0,s.jsx)(i.h3,{id:"image-previews",children:"Image previews"}),"\n",(0,s.jsx)(i.p,{children:"Currently, only the following two terminals support displaying images on Windows:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"WezTerm"}),"\n",(0,s.jsx)(i.li,{children:"Mintty (Git Bash, which comes with Git for Windows)"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["and ",(0,s.jsx)(i.a,{href:"https://github.com/sxyazi/yazi#image-preview",children:"Yazi has adapted them"})," to work right out of the box!"]}),"\n",(0,s.jsx)(i.h2,{id:"aosc-os",children:"AOSC OS"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"sudo oma install yazi\n"})}),"\n",(0,s.jsx)(i.h2,{id:"official-binaries",children:"Official binaries"}),"\n",(0,s.jsxs)(i.p,{children:["You can download the latest official binaries from ",(0,s.jsx)(i.a,{href:"https://github.com/sxyazi/yazi/releases",children:"GitHub Releases"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"cargo",children:"Cargo"}),"\n",(0,s.jsx)(i.p,{children:"Setup the latest stable Rust toolchain:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Now you can install ",(0,s.jsx)(i.code,{children:"yazi-fm"})," from ",(0,s.jsx)(i.a,{href:"https://crates.io/crates/yazi-fm",children:"crates.io"}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"cargo install --locked yazi-fm\n"})}),"\n",(0,s.jsx)(i.p,{children:"Or install the latest git version:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"cargo install --locked --git https://github.com/sxyazi/yazi.git\n"})}),"\n",(0,s.jsxs)(i.p,{children:["If it fails to build, please check if ",(0,s.jsx)(i.code,{children:"make"})," and ",(0,s.jsx)(i.code,{children:"gcc"})," is installed on your system."]}),"\n",(0,s.jsx)(i.h2,{id:"build-from-source",children:"Build from source"}),"\n",(0,s.jsx)(i.p,{children:"Setup the latest stable Rust toolchain:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})}),"\n",(0,s.jsx)(i.p,{children:"Clone the repository and build Yazi:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"git clone https://github.com/sxyazi/yazi.git\ncd yazi\ncargo build --release\n"})}),"\n",(0,s.jsx)(i.p,{children:"Then, you can run:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"./target/release/yazi\n"})}),"\n",(0,s.jsxs)(i.p,{children:["If it fails to build, please check if ",(0,s.jsx)(i.code,{children:"make"})," and ",(0,s.jsx)(i.code,{children:"gcc"})," is installed on your system."]})]})}function h(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6225:(e,i,n)=>{n.d(i,{Z:()=>t,a:()=>r});var s=n(959);const l={},a=s.createContext(l);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[882],{3696:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>t});var s=n(1527),l=n(6225);const d={sidebar_position:4,description:"Learn how to use Yazi's Lua API."},c="Utils",r={id:"plugins/utils",title:"Utils",description:"Learn how to use Yazi's Lua API.",source:"@site/docs/plugins/utils.md",sourceDirName:"plugins",slug:"/plugins/utils",permalink:"/docs/plugins/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/plugins/utils.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn how to use Yazi's Lua API."},sidebar:"docsSidebar",previous:{title:"Config",permalink:"/docs/plugins/config"},next:{title:"Tips",permalink:"/docs/tips"}},h={},t=[{value:"ya",id:"ya",level:2},{value:"<code>file_cache(opts)</code>",id:"file_cacheopts",level:3},{value:"<code>manager_emit(cmd, args, data)</code>",id:"manager_emitcmd-args-data",level:3},{value:"<code>image_show(url, rect)</code>",id:"image_showurl-rect",level:3},{value:"<code>image_precache(src, dist)</code>",id:"image_precachesrc-dist",level:3},{value:"<code>dbg(msg)</code>",id:"dbgmsg",level:3},{value:"<code>err(msg)</code>",id:"errmsg",level:3},{value:"<code>plugin_retrieve</code>",id:"plugin_retrieve",level:3},{value:"<code>preview_code(opts)</code>",id:"preview_codeopts",level:3},{value:"<code>preview_archive(opts)</code>",id:"preview_archiveopts",level:3},{value:"<code>preview_widgets(opts, widgets)</code>",id:"preview_widgetsopts-widgets",level:3},{value:"<code>target_family()</code>",id:"target_family",level:3},{value:"<code>truncate(text, max)</code>",id:"truncatetext-max",level:3},{value:"<code>mime_valid(mime)</code>",id:"mime_validmime",level:3},{value:"<code>time()</code>",id:"time",level:3},{value:"<code>uid()</code>",id:"uid",level:3},{value:"<code>gid()</code>",id:"gid",level:3},{value:"<code>user_name()</code>",id:"user_name",level:3},{value:"<code>group_name()</code>",id:"group_name",level:3},{value:"<code>host_name()</code>",id:"host_name",level:3},{value:"fs",id:"fs",level:2},{value:"<code>write(url, data)</code>",id:"writeurl-data",level:3},{value:"<code>cha(url)</code>",id:"chaurl",level:3},{value:"<code>cha_follow(url)</code>",id:"cha_followurl",level:3},{value:"Command",id:"command",level:2},{value:"<code>arg(arg)</code>",id:"argarg",level:3},{value:"<code>args(args)</code>",id:"argsargs",level:3},{value:"<code>env(key, value)</code>",id:"envkey-value",level:3},{value:"<code>stdin(cfg)</code>",id:"stdincfg",level:3},{value:"<code>stdout(cfg)</code>",id:"stdoutcfg",level:3},{value:"<code>stderr(cfg)</code>",id:"stderrcfg",level:3},{value:"<code>spawn()</code>",id:"spawn",level:3},{value:"<code>output()</code>",id:"output",level:3},{value:"Child",id:"child",level:2},{value:"<code>read(len)</code>",id:"readlen",level:3},{value:"<code>read_line()</code>",id:"read_line",level:3},{value:"<code>read_line_with(opts)</code>",id:"read_line_withopts",level:3},{value:"<code>wait()</code>",id:"wait",level:3},{value:"<code>start_kill()</code>",id:"start_kill",level:3},{value:"Output",id:"output-1",level:2},{value:"Status",id:"status",level:2},{value:"<code>success()</code>",id:"success",level:3},{value:"<code>code()</code>",id:"code",level:3}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"utils",children:"Utils"}),"\n",(0,s.jsx)(i.h2,{id:"ya",children:"ya"}),"\n",(0,s.jsx)(i.h3,{id:"file_cacheopts",children:(0,s.jsx)(i.code,{children:"file_cache(opts)"})}),"\n",(0,s.jsxs)(i.p,{children:["Calculate the cached ",(0,s.jsx)(i.a,{href:"#url",children:"Url"})," corresponding to the given file:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"opts"})," - Required, the options of the cache, which is a table:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"file"})," - The ",(0,s.jsx)(i.a,{href:"#file",children:"File"})," to be cached"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"skip"})," - The number of units to skip. It's units largely depend on your previewer, such as lines for code, and percentages for videos"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If the file is not allowed to be cached, such as it's ignored in the user config, or the file itself is a cache, returns ",(0,s.jsx)(i.code,{children:"nil"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"manager_emitcmd-args-data",children:(0,s.jsx)(i.code,{children:"manager_emit(cmd, args, data)"})}),"\n",(0,s.jsx)(i.p,{children:"Send a command to the manager without waiting for the executor to execute:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cmd"})," - Required, the command name, which is a string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"args"})," - Required, the arguments of the command, which is a table of strings"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"data"})," - Optional, additional data passed to the command"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'ya.manager_emit("my-cmd", { "hello", foo = "", bar_baz = "world" })\n\n-- Equivalent to:\n-- my-cmd "hello" --foo --bar-baz="world"\n'})}),"\n",(0,s.jsx)(i.h3,{id:"image_showurl-rect",children:(0,s.jsx)(i.code,{children:"image_show(url, rect)"})}),"\n",(0,s.jsx)(i.p,{children:"Display the given image within the specified area, and the image will downscale to fit that area automatically:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"url"})," - Required, the ",(0,s.jsx)(i.a,{href:"#url",children:"Url"})," of the image"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"rect"})," - Required, the ",(0,s.jsx)(i.a,{href:"#uirect",children:"Rect"})," of the area"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(i.h3,{id:"image_precachesrc-dist",children:(0,s.jsx)(i.code,{children:"image_precache(src, dist)"})}),"\n",(0,s.jsxs)(i.p,{children:["Pre-cache the image to a specified url based on user-configured ",(0,s.jsxs)(i.a,{href:"../configuration/yazi#preview",children:[(0,s.jsx)(i.code,{children:"max_width"})," and ",(0,s.jsx)(i.code,{children:"max_height"})]}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"src"})," - Required, the source ",(0,s.jsx)(i.a,{href:"#url",children:"Url"})," of the image"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"dist"})," - Required, the destination ",(0,s.jsx)(i.a,{href:"#url",children:"Url"})," of the image"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(i.h3,{id:"dbgmsg",children:(0,s.jsx)(i.code,{children:"dbg(msg)"})}),"\n",(0,s.jsxs)(i.p,{children:["Append messages to ",(0,s.jsx)(i.a,{href:"/docs/plugins/overview#logging",children:"the log file"})," at the debug level:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"msg"})," - Required, the message to be logged, which is a string"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:['Note that if you use a release build of Yazi, the log level is "error" instead of "debug", so you\'ll need to use ',(0,s.jsx)(i.a,{href:"#errmsg",children:(0,s.jsx)(i.code,{children:"ya.err"})}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"errmsg",children:(0,s.jsx)(i.code,{children:"err(msg)"})}),"\n",(0,s.jsxs)(i.p,{children:["Append messages to ",(0,s.jsx)(i.a,{href:"/docs/plugins/overview#logging",children:"the log file"})," at the error level:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"msg"})," - Required, the message to be logged, which is a string"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"plugin_retrieve",children:(0,s.jsx)(i.code,{children:"plugin_retrieve"})}),"\n",(0,s.jsx)(i.p,{children:"TODO"}),"\n",(0,s.jsx)(i.h3,{id:"preview_codeopts",children:(0,s.jsx)(i.code,{children:"preview_code(opts)"})}),"\n",(0,s.jsx)(i.p,{children:"Preview the file as code into the specified area:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"opts"})," - Required, the options of the preview, which is a table:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"file"})," - The previewed ",(0,s.jsx)(i.a,{href:"#file",children:"File"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"area"})," - The area of the preview, which is a ",(0,s.jsx)(i.a,{href:"#uirect",children:"Rect"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"skip"})," - The number of units to skip. It's units largely depend on your previewer, such as lines for code, and percentages for videos"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"window"})," - The ",(0,s.jsx)(i.a,{href:"#window",children:"Window"})," of the preview"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(i.h3,{id:"preview_archiveopts",children:(0,s.jsx)(i.code,{children:"preview_archive(opts)"})}),"\n",(0,s.jsx)(i.p,{children:"Preview the file as an archive into the specified area:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"opts"})," - Required, the options of the preview. It's the same as ",(0,s.jsx)(i.a,{href:"#previewcodeopts",children:(0,s.jsx)(i.code,{children:"preview_code"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(i.h3,{id:"preview_widgetsopts-widgets",children:(0,s.jsx)(i.code,{children:"preview_widgets(opts, widgets)"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"opts"})," - Required, the options of the preview, which is a table:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"file"})," - The previewed ",(0,s.jsx)(i.a,{href:"#file",children:"File"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"skip"})," - The number of units to skip. It's units largely depend on your previewer, such as lines for code, and percentages for videos"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"window"})," - The ",(0,s.jsx)(i.a,{href:"#window",children:"Window"})," of the preview"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"widgets"})," - List of renderable widgets, such as ",(0,s.jsx)(i.code,{children:"{ ui.Paragraph {...}, ui.List {...}, ... }"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(i.h3,{id:"target_family",children:(0,s.jsx)(i.code,{children:"target_family()"})}),"\n",(0,s.jsxs)(i.p,{children:["Returns the target family of the current platform, ",(0,s.jsx)(i.code,{children:'"windows"'}),", ",(0,s.jsx)(i.code,{children:'"unix"'}),", or ",(0,s.jsx)(i.code,{children:'"wasm"'}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"truncatetext-max",children:(0,s.jsx)(i.code,{children:"truncate(text, max)"})}),"\n",(0,s.jsx)(i.p,{children:"Truncate the text to the specified length and return it:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"text"})," - Required, the text to be truncated, which is a string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"max"})," - Required, the maximum length of the text, which is an integer"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"mime_validmime",children:(0,s.jsx)(i.code,{children:"mime_valid(mime)"})}),"\n",(0,s.jsx)(i.p,{children:"Check whether the mime-type is valid:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"mime"})," - Required, the mime-type to be checked, which is a string"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"time",children:(0,s.jsx)(i.code,{children:"time()"})}),"\n",(0,s.jsx)(i.p,{children:"Returns the current timestamp, which is a float, the integer part represents the seconds, and the decimal part represents the milliseconds."}),"\n",(0,s.jsx)(i.h3,{id:"uid",children:(0,s.jsx)(i.code,{children:"uid()"})}),"\n",(0,s.jsx)(i.p,{children:"Only available on Unix-like systems. Returns the user id of the current user, which is an integer."}),"\n",(0,s.jsx)(i.h3,{id:"gid",children:(0,s.jsx)(i.code,{children:"gid()"})}),"\n",(0,s.jsx)(i.p,{children:"Only available on Unix-like systems. Returns the group id of the current user, which is an integer."}),"\n",(0,s.jsx)(i.h3,{id:"user_name",children:(0,s.jsx)(i.code,{children:"user_name()"})}),"\n",(0,s.jsxs)(i.p,{children:["Only available on Unix-like systems. Returns the name of the current user, which is a string if successful; otherwise, ",(0,s.jsx)(i.code,{children:"nil"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"group_name",children:(0,s.jsx)(i.code,{children:"group_name()"})}),"\n",(0,s.jsxs)(i.p,{children:["Only available on Unix-like systems. Returns the name of the current group, which is a string if successful; otherwise, ",(0,s.jsx)(i.code,{children:"nil"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"host_name",children:(0,s.jsx)(i.code,{children:"host_name()"})}),"\n",(0,s.jsxs)(i.p,{children:["Only available on Unix-like systems. Returns the hostname of the current machine, which is a string if successful; otherwise, ",(0,s.jsx)(i.code,{children:"nil"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"fs",children:"fs"}),"\n",(0,s.jsx)(i.p,{children:"The following functions can only be used within an async context."}),"\n",(0,s.jsx)(i.h3,{id:"writeurl-data",children:(0,s.jsx)(i.code,{children:"write(url, data)"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'local ok, err = fs.write(url, "hello world")\n'})}),"\n",(0,s.jsx)(i.p,{children:"Write data to the specified file:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"url"})," - Required, the ",(0,s.jsx)(i.a,{href:"/docs/plugins/common#url",children:"Url"})," of the file"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"data"})," - Required, the data to be written, which is a string"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Returns ",(0,s.jsx)(i.code,{children:"(ok, err)"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ok"})," - Whether the operation is successful, which is a boolean"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"chaurl",children:(0,s.jsx)(i.code,{children:"cha(url)"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:"local cha, err = fs.cha(url)\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Get the ",(0,s.jsx)(i.a,{href:"/docs/plugins/common#cha",children:"Cha"})," of the specified file, which is faster than ",(0,s.jsx)(i.a,{href:"#chafollowurl",children:(0,s.jsx)(i.code,{children:"cha_follow"})})," since it never follows the symbolic link:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"url"})," - Required, the ",(0,s.jsx)(i.a,{href:"/docs/plugins/common#url",children:"Url"})," of the file"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Returns ",(0,s.jsx)(i.code,{children:"(cha, err)"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cha"})," - The ",(0,s.jsx)(i.a,{href:"/docs/plugins/common#cha",children:"Cha"})," of the file if successful; otherwise, ",(0,s.jsx)(i.code,{children:"nil"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"cha_followurl",children:(0,s.jsx)(i.code,{children:"cha_follow(url)"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:"local cha, err = fs.cha_follow(url)\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Get the ",(0,s.jsx)(i.a,{href:"/docs/plugins/common#cha",children:"Cha"})," of the specified file, and follow the symbolic link:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"url"})," - Required, the ",(0,s.jsx)(i.a,{href:"/docs/plugins/common#url",children:"Url"})," of the file"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Returns ",(0,s.jsx)(i.code,{children:"(cha, err)"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cha"})," - The ",(0,s.jsx)(i.a,{href:"/docs/plugins/common#cha",children:"Cha"})," of the file if successful; otherwise, ",(0,s.jsx)(i.code,{children:"nil"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"command",children:"Command"}),"\n",(0,s.jsx)(i.p,{children:"You can invoke external programs through:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'local child = Command("ls")\n\t:args({ "-a", "-l" })\n\t:stdout(Command.PIPED)\n\t:spawn()\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Compared to Lua's ",(0,s.jsx)(i.code,{children:"os.execute"}),", it provides many comprehensive and convenient methods, and the entire process is async."]}),"\n",(0,s.jsx)(i.p,{children:"It takes better advantage of the benefits of concurrent scheduling. However, it can only be used in async contexts, such as preloaders, previewers, and async functional plugins."}),"\n",(0,s.jsx)(i.h3,{id:"argarg",children:(0,s.jsx)(i.code,{children:"arg(arg)"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'local cmd = Command("ls"):arg("-a"):arg("-l")\n'})}),"\n",(0,s.jsx)(i.p,{children:"Append an argument to the command:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"arg"})," - Required, the argument to be appended, which is a string"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Returns ",(0,s.jsx)(i.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"argsargs",children:(0,s.jsx)(i.code,{children:"args(args)"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'local cmd = Command("ls"):args({ "-a", "-l" }):args({ "-h" })\n'})}),"\n",(0,s.jsx)(i.p,{children:"Append multiple arguments to the command:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"args"})," - Required, the arguments to be appended, which is a table of strings"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Returns ",(0,s.jsx)(i.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"envkey-value",children:(0,s.jsx)(i.code,{children:"env(key, value)"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'local cmd = Command("ls"):env("PATH", "/bin"):env("HOME", "/home")\n'})}),"\n",(0,s.jsx)(i.p,{children:"Append an environment variable to the command:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"key"})," - Required, the key of the environment variable, which is a string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"value"})," - Required, the value of the environment variable, which is a string"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Returns ",(0,s.jsx)(i.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"stdincfg",children:(0,s.jsx)(i.code,{children:"stdin(cfg)"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'local cmd = Command("ls"):stdin(Command.PIPED)\n'})}),"\n",(0,s.jsx)(i.p,{children:"Set the stdin of the command:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cfg"})," - Required, the configuration of the stdin, accepts the following values:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Command.PIPED"})," - Pipe the stdin"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Command.NULL"})," - Discard the stdin"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Command.INHERIT"})," - Inherit the stdin"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If not set, the stdin will be null. Returns ",(0,s.jsx)(i.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"stdoutcfg",children:(0,s.jsx)(i.code,{children:"stdout(cfg)"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'local cmd = Command("ls"):stdout(Command.PIPED)\n'})}),"\n",(0,s.jsx)(i.p,{children:"Set the stdout of the command:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cfg"})," - Required, the configuration of the stdout, accepts the following values:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Command.PIPED"})," - Pipe the stdout"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Command.NULL"})," - Discard the stdout"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Command.INHERIT"})," - Inherit the stdout"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If not set, the stdout will be null. Returns ",(0,s.jsx)(i.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"stderrcfg",children:(0,s.jsx)(i.code,{children:"stderr(cfg)"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'local cmd = Command("ls"):stderr(Command.PIPED)\n'})}),"\n",(0,s.jsx)(i.p,{children:"Set the stderr of the command:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cfg"})," - Required, the configuration of the stderr, accepts the following values:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Command.PIPED"})," - Pipe the stderr"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Command.NULL"})," - Discard the stderr"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Command.INHERIT"})," - Inherit the stderr"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If not set, the stderr will be null. Returns ",(0,s.jsx)(i.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"spawn",children:(0,s.jsx)(i.code,{children:"spawn()"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'local child, err = Command("ls"):spawn()\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Spawn the command, returns ",(0,s.jsx)(i.code,{children:"(child, err)"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"child"})," - The ",(0,s.jsx)(i.a,{href:"#child",children:"Child"})," of the command if successful; otherwise, ",(0,s.jsx)(i.code,{children:"nil"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"output",children:(0,s.jsx)(i.code,{children:"output()"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'local output, err = Command("ls"):output()\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Spawn the command and wait for it to finish, returns ",(0,s.jsx)(i.code,{children:"(output, err)"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"output"})," - The ",(0,s.jsx)(i.a,{href:"#output-1",children:"Output"})," of the command if successful; otherwise, ",(0,s.jsx)(i.code,{children:"nil"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"child",children:"Child"}),"\n",(0,s.jsxs)(i.p,{children:["This object is created by ",(0,s.jsx)(i.a,{href:"#spawn",children:(0,s.jsx)(i.code,{children:"Command:spawn"})})," and represents a running child process."]}),"\n",(0,s.jsx)(i.p,{children:"You can access the runtime data of this process through its proprietary methods."}),"\n",(0,s.jsx)(i.h3,{id:"readlen",children:(0,s.jsx)(i.code,{children:"read(len)"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:"local data, event = child:read(1024)\n"})}),"\n",(0,s.jsxs)(i.p,{children:['Let\'s say "available data source" refers to ',(0,s.jsx)(i.code,{children:"stdout"})," or ",(0,s.jsx)(i.code,{children:"stderr"})," that has been set with ",(0,s.jsx)(i.code,{children:"Command.PIPED"}),", or them both."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"read()"})," reads data from the available data source alternately, and the ",(0,s.jsx)(i.code,{children:"event"})," indicates the source of the data:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The data comes from stdout if event is 0"}),"\n",(0,s.jsx)(i.li,{children:"The data comes from stderr if event is 1"}),"\n",(0,s.jsx)(i.li,{children:"There's no data to read from both stdout and stderr, if event is 2"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"read_line",children:(0,s.jsx)(i.code,{children:"read_line()"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:"local line, event = child:read_line()\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Similar to ",(0,s.jsx)(i.a,{href:"#readlen",children:(0,s.jsx)(i.code,{children:"read()"})}),", but it reads data line by line."]}),"\n",(0,s.jsx)(i.h3,{id:"read_line_withopts",children:(0,s.jsx)(i.code,{children:"read_line_with(opts)"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:"local line, event = child:wait_line_with { timeout = 500 }\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Similar to ",(0,s.jsx)(i.a,{href:"#read_line",children:(0,s.jsx)(i.code,{children:"read_line()"})}),", but it accepts a table of options:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"timeout"})," - Required, timeout in milliseconds, which is an integer"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"And includes the following additional events:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Timeout if event is 3"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"wait",children:(0,s.jsx)(i.code,{children:"wait()"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:"local status, err = child:wait()\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Wait for the child process to finish, returns ",(0,s.jsx)(i.code,{children:"(status, err)"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"status"})," - The ",(0,s.jsx)(i.a,{href:"#status",children:"Status"})," of the child process if successful; otherwise, ",(0,s.jsx)(i.code,{children:"nil"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"start_kill",children:(0,s.jsx)(i.code,{children:"start_kill()"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:"local ok, err = child:start_kill()\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Send a SIGTERM signal to the child process, returns ",(0,s.jsx)(i.code,{children:"(ok, err)"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ok"})," - Whether the operation is successful, which is a boolean"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"output-1",children:"Output"}),"\n",(0,s.jsx)(i.p,{children:"Properties:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"status"}),": The ",(0,s.jsx)(i.a,{href:"#status",children:"Status"})," of the child process"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"stdout"}),": The stdout of the child process, which is a string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"stderr"}),": The stderr of the child process, which is a string"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"status",children:"Status"}),"\n",(0,s.jsxs)(i.p,{children:["This object represents the exit status of a child process, and it is created by ",(0,s.jsx)(i.a,{href:"#wait",children:(0,s.jsx)(i.code,{children:"wait()"})}),", or ",(0,s.jsx)(i.a,{href:"#output-1",children:(0,s.jsx)(i.code,{children:"output()"})}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"success",children:(0,s.jsx)(i.code,{children:"success()"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:"local ok = status:success()\n"})}),"\n",(0,s.jsx)(i.p,{children:"Returns whether the child process exited successfully, which is a boolean."}),"\n",(0,s.jsx)(i.h3,{id:"code",children:(0,s.jsx)(i.code,{children:"code()"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:"local code = status:code()\n"})}),"\n",(0,s.jsx)(i.p,{children:"Returns the exit code of the child process, which is an integer if any."})]})}function o(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},6225:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>c});var s=n(959);const l={},d=s.createContext(l);function c(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);
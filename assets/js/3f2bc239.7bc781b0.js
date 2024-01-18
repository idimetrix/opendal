"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[4263],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||i;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(8126),r=(a(9496),a(9613));const i={title:"Create a release",sidebar_position:3},l=void 0,o={unversionedId:"committers/release",id:"committers/release",title:"Create a release",description:"This document mainly introduces how the release manager",source:"@site/community/committers/release.md",sourceDirName:"committers",slug:"/committers/release",permalink:"/community/committers/release",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/community/committers/release.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Create a release",sidebar_position:3},sidebar:"docs",previous:{title:"Onboarding",permalink:"/community/committers/onboarding"},next:{title:"Verify a release candidate",permalink:"/community/committers/verify"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Some Terminology of release",id:"some-terminology-of-release",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Start discussion about the next release",id:"start-discussion-about-the-next-release",level:2},{value:"Start a tracking issue about the next release",id:"start-a-tracking-issue-about-the-next-release",level:2},{value:"GitHub Side",id:"github-side",level:2},{value:"Bump version in project",id:"bump-version-in-project",level:3},{value:"Update docs",id:"update-docs",level:3},{value:"Generate dependencies list",id:"generate-dependencies-list",level:3},{value:"Push release candidate tag",id:"push-release-candidate-tag",level:3},{value:"ASF Side",id:"asf-side",level:2},{value:"Create an ASF Release",id:"create-an-asf-release",level:3},{value:"Upload artifacts to the SVN dist repo",id:"upload-artifacts-to-the-svn-dist-repo",level:3},{value:"Close the Nexus staging repo",id:"close-the-nexus-staging-repo",level:3},{value:"Rescue",id:"rescue",level:3},{value:"Voting",id:"voting",level:2},{value:"Official Release",id:"official-release",level:2},{value:"Push the release git tag",id:"push-the-release-git-tag",level:3},{value:"Publish artifacts to SVN RELEASE branch",id:"publish-artifacts-to-svn-release-branch",level:3},{value:"Change OpenDAL Website download link",id:"change-opendal-website-download-link",level:3},{value:"Release Maven artifacts",id:"release-maven-artifacts",level:3},{value:"Create a GitHub Release",id:"create-a-github-release",level:3},{value:"Send the announcement",id:"send-the-announcement",level:3},{value:"Post release",id:"post-release",level:2},{value:"Remove the old releases",id:"remove-the-old-releases",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document mainly introduces how the release manager\nreleases a new version of Apache OpenDAL\u2122 in accordance with the Apache requirements."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Source Release")," is the key point which Apache values, and is also necessary for an ASF release."),(0,r.kt)("p",null,"Please remember that publishing software has legal consequences."),(0,r.kt)("p",null,"This guide complements the foundation-wide policies and guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/legal/release-policy.html"},"Release Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-distribution"},"Release Distribution Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-publishing.html"},"Release Creation Process"))),(0,r.kt)("h2",{id:"some-terminology-of-release"},"Some Terminology of release"),(0,r.kt)("p",null,"In the context of our release, we use several terms to describe different stages of the release process."),(0,r.kt)("p",null,"Here's an explanation of these terms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opendal_version"),": the version of OpenDAL to be released, like ",(0,r.kt)("inlineCode",{parentName:"li"},"0.36.0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"release_version"),": the version of release candidate, like ",(0,r.kt)("inlineCode",{parentName:"li"},"0.36.0-rc.1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rc_version"),": the minor version for voting round, like ",(0,r.kt)("inlineCode",{parentName:"li"},"rc.1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maven_artifact_number"),": the number for Maven staging artifacts, like ",(0,r.kt)("inlineCode",{parentName:"li"},"1010"),'. The number can be found by searching "opendal" on ',(0,r.kt)("a",{parentName:"li",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories"),". And the Maven staging artifacts will be created automatically when we push a git tag to GitHub for now.")),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This section is the requirements for individuals who are new to the role of release manager.")),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/community/committers/reference/setup_gpg"},"Setup GPG Key")," to make sure the GPG key has been set up."),(0,r.kt)("h2",{id:"start-discussion-about-the-next-release"},"Start discussion about the next release"),(0,r.kt)("p",null,"Start a discussion about the next release via sending email to: ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@opendal.apache.org"},"dev@opendal.apache.org"),":"),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[DISCUSS] Release Apache OpenDAL ${release_version}\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello, Apache OpenDAL Community,\n\nThis is a call for a discussion to release Apache OpenDAL version ${opendal_version}.\n\nThe change lists about this release:\n\nhttps://github.com/apache/opendal/compare/v${opendal_last_version}...main\n\nPlease leave your comments here about this release plan. We will bump the version in the repo and start the release process after the discussion.\n\nThanks\n\n${name}\n")),(0,r.kt)("h2",{id:"start-a-tracking-issue-about-the-next-release"},"Start a tracking issue about the next release"),(0,r.kt)("p",null,"Start a tracking issue on GitHub for the upcoming release to track all tasks that need to be completed."),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Tracking issues of OpenDAL ${opendal_version} Release\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"This issue is used to track tasks of the opendal ${opendal_version} release.\n\n## Tasks\n\n### Blockers\n\n> Blockers are the tasks that must be completed before the release.\n\n### Build Release\n\n#### GitHub Side\n\n- [ ] Bump version in project\n  - [ ] rust\n  - [ ] cpp\n  - [ ] haskell\n  - [ ] java\n  - [ ] nodejs\n- [ ] Update docs\n- [ ] Generate dependencies list\n- [ ] Push release candidate tag to GitHub\n\n#### ASF Side\n\n- [ ] Create an ASF Release\n- [ ] Upload artifacts to the SVN dist repo\n- [ ] Close the Nexus staging repo\n\n### Voting\n\n- [ ] Start VOTE at opendal community\n\n### Official Release\n\n- [ ] Push the release git tag\n- [ ] Publish artifacts to SVN RELEASE branch\n- [ ] Change OpenDAL Website download link\n- [ ] Release Maven artifacts\n- [ ] Send the announcement\n\nFor details of each step, please refer to: https://opendal.apache.org/community/committers/release\n")),(0,r.kt)("h2",{id:"github-side"},"GitHub Side"),(0,r.kt)("h3",{id:"bump-version-in-project"},"Bump version in project"),(0,r.kt)("p",null,"Bump all components' version in the project to the new opendal version.\nPlease note that this version is the exact version of the release, not the release candidate version."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rust core: bump version in ",(0,r.kt)("inlineCode",{parentName:"li"},"Cargo.toml")),(0,r.kt)("li",{parentName:"ul"},"cpp binding: bump version in ",(0,r.kt)("inlineCode",{parentName:"li"},"bindings/cpp/CMakeLists.txt")),(0,r.kt)("li",{parentName:"ul"},"haskell binding: bump version and update the ",(0,r.kt)("inlineCode",{parentName:"li"},"tag")," field of ",(0,r.kt)("inlineCode",{parentName:"li"},"source-repository this")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"bindings/haskell/opendal.cabal")),(0,r.kt)("li",{parentName:"ul"},"java binding: bump version in ",(0,r.kt)("inlineCode",{parentName:"li"},"bindings/java/pom.xml")),(0,r.kt)("li",{parentName:"ul"},"node.js binding: bump version in ",(0,r.kt)("inlineCode",{parentName:"li"},"bindings/nodejs/package.json")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"bindings/nodejs/npm/*/package.json"))),(0,r.kt)("h3",{id:"update-docs"},"Update docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md"),", refer to ",(0,r.kt)("a",{parentName:"li",href:"/community/committers/reference/generate_release_note"},"Generate Release Note")," for more information."),(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"core/src/docs/upgrade.md")," if there are breaking changes in ",(0,r.kt)("inlineCode",{parentName:"li"},"core")),(0,r.kt)("li",{parentName:"ul"},"Make sure every released bindings' ",(0,r.kt)("inlineCode",{parentName:"li"},"upgrade.md")," has been updated.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"java: ",(0,r.kt)("inlineCode",{parentName:"li"},"bindings/java/upgrade.md")),(0,r.kt)("li",{parentName:"ul"},"node.js: ",(0,r.kt)("inlineCode",{parentName:"li"},"bindings/nodejs/upgrade.md")),(0,r.kt)("li",{parentName:"ul"},"python: ",(0,r.kt)("inlineCode",{parentName:"li"},"bindings/python/upgrade.md"))))),(0,r.kt)("h3",{id:"generate-dependencies-list"},"Generate dependencies list"),(0,r.kt)("p",null,"Download and setup ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-deny"),". You can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://embarkstudios.github.io/cargo-deny/cli/index.html"},"cargo-deny"),". "),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"python3 ./scripts/dependencies.py generate")," to update the dependencies list of every package."),(0,r.kt)("h3",{id:"push-release-candidate-tag"},"Push release candidate tag"),(0,r.kt)("p",null,"After bump version PR gets merged, we can create a GitHub release for the release candidate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a tag at ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," branch on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Bump Version")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"Patch up version")," commit: ",(0,r.kt)("inlineCode",{parentName:"li"},'git tag -s "v0.36.0-rc.1"'),", please correctly check out the corresponding commit instead of directly tagging on the main branch."),(0,r.kt)("li",{parentName:"ul"},"Push tags to GitHub: ",(0,r.kt)("inlineCode",{parentName:"li"},"git push --tags"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Pushing a Git tag to GitHub repo will trigger a GitHub Actions workflow that creates a staging Maven release on ",(0,r.kt)("a",{parentName:"p",href:"https://repository.apache.org"},"https://repository.apache.org")," which can be verified on voting.")),(0,r.kt)("h2",{id:"asf-side"},"ASF Side"),(0,r.kt)("p",null,"If any step in the ASF Release process fails and requires code changes,\nwe will abandon that version and prepare for the next one.\nOur release page will only display ASF releases instead of GitHub Releases."),(0,r.kt)("p",null,"Additionally, we should also drop the staging Maven artifacts on ",(0,r.kt)("a",{parentName:"p",href:"https://repository.apache.org"},"https://repository.apache.org"),"."),(0,r.kt)("h3",{id:"create-an-asf-release"},"Create an ASF Release"),(0,r.kt)("p",null,"After GitHub Release has been created, we can start to create ASF Release."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Checkout to released tag. (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"git checkout v0.36.0-rc.1"),", tag is created in the previous step)"),(0,r.kt)("li",{parentName:"ul"},"Use the release script to create a new release: ",(0,r.kt)("inlineCode",{parentName:"li"},"OPENDAL_VERSION=<opendal_version> OPENDAL_VERSION_RC=<rc_version> ./scripts/release.sh"),"(e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"OPENDAL_VERSION=0.36.0 OPENDAL_VERSION_RC=rc.1 ./scripts/release.sh"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This script will do the following things:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a new branch named by ",(0,r.kt)("inlineCode",{parentName:"li"},"release-${release_version}")," from the tag"),(0,r.kt)("li",{parentName:"ul"},"Generate the release candidate artifacts under ",(0,r.kt)("inlineCode",{parentName:"li"},"dist"),", including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apache-opendal-${release_version}-src.tar.gz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apache-opendal-${release_version}-src.tar.gz.asc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apache-opendal-${release_version}-src.tar.gz.sha512")))),(0,r.kt)("li",{parentName:"ul"},"Check the header of the source code. This step needs docker to run."))))),(0,r.kt)("li",{parentName:"ul"},"Push the newly created branch to GitHub")),(0,r.kt)("p",null,"This script will create a new release under ",(0,r.kt)("inlineCode",{parentName:"p"},"dist"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> tree dist\ndist\n\u251c\u2500\u2500 apache-opendal-0.36.0-src.tar.gz\n\u251c\u2500\u2500 apache-opendal-0.36.0-src.tar.gz.asc\n\u2514\u2500\u2500 apache-opendal-0.36.0-src.tar.gz.sha512\n")),(0,r.kt)("h3",{id:"upload-artifacts-to-the-svn-dist-repo"},"Upload artifacts to the SVN dist repo"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"SVN is required for this step.")),(0,r.kt)("p",null,"The svn repository of the dev branch is: ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/opendal"},"https://dist.apache.org/repos/dist/dev/opendal")),(0,r.kt)("p",null,"First, checkout OpenDAL to local directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\nsvn co https://dist.apache.org/repos/dist/dev/opendal opendal-dist-dev\n")),(0,r.kt)("p",null,"Then, upload the artifacts:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"${release_version}")," here should be like ",(0,r.kt)("inlineCode",{parentName:"p"},"0.36.0-rc.1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd opendal-dist-dev\n# create a directory named by version\nmkdir ${release_version}\n# copy source code and signature package to the versioned directory\ncp ${repo_dir}/dist/* ${release_version}/\n# check svn status\nsvn status\n# add to svn\nsvn add ${release_version}\n# check svn status\nsvn status\n# commit to SVN remote server\nsvn commit -m "Prepare for ${release_version}"\n')),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/opendal/"},"https://dist.apache.org/repos/dist/dev/opendal/")," to make sure the artifacts are uploaded correctly."),(0,r.kt)("h3",{id:"close-the-nexus-staging-repo"},"Close the Nexus staging repo"),(0,r.kt)("p",null,"To verify the Maven staging artifacts in the next step, close the Nexus staging repo as below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("a",{parentName:"li",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories")," with your Apache ID login."),(0,r.kt)("li",{parentName:"ol"},"Find the artifact ",(0,r.kt)("inlineCode",{parentName:"li"},"orgapacheopendal-${maven_artifact_number}"),', click the "Close" button.')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," operation means that the artifacts are ready for voting."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If the vote failed, click "Drop" to drop the staging Maven artifacts.')),(0,r.kt)("h3",{id:"rescue"},"Rescue"),(0,r.kt)("p",null,"If you accidentally published wrong or unexpected artifacts, like wrong signature files, wrong sha256 files,\nplease cancel the release for the current ",(0,r.kt)("inlineCode",{parentName:"p"},"release_version"),",\n",(0,r.kt)("em",{parentName:"p"},"increase th RC counting")," and re-initiate a release with the new ",(0,r.kt)("inlineCode",{parentName:"p"},"release_version"),".\nAnd remember to delete the wrong artifacts from the SVN dist repo.\nAdditionally, you should also drop the staging Maven artifacts on ",(0,r.kt)("a",{parentName:"p",href:"https://repository.apache.org"},"https://repository.apache.org"),"."),(0,r.kt)("h2",{id:"voting"},"Voting"),(0,r.kt)("p",null,"OpenDAL requires votes from both the OpenDAL Community."),(0,r.kt)("p",null,"Vote should send email to: ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@opendal.apache.org"},"dev@opendal.apache.org"),":"),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[VOTE] Release Apache OpenDAL ${release_version} - Vote Round 1\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello, Apache OpenDAL Community,\n\nThis is a call for a vote to release Apache OpenDAL version ${opendal_version}.\n\nThe tag to be voted on is ${opendal_version}.\n\nThe release candidate:\n\nhttps://dist.apache.org/repos/dist/dev/opendal/${release_version}/\n\nKeys to verify the release candidate:\n\nhttps://downloads.apache.org/opendal/KEYS\n\nGit tag for the release:\n\nhttps://github.com/apache/opendal/releases/tag/${release_version}\n\nMaven staging repo:\n\nhttps://repository.apache.org/content/repositories/orgapacheopendal-${maven_artifact_number}/\n\nPlease download, verify, and test.\n\nThe VOTE will be open for at least 72 hours and until the necessary\nnumber of votes are reached.\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nTo learn more about apache opendal, please see https://opendal.apache.org/\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and signatures.\n[ ] LICENSE/NOTICE files exist\n[ ] No unexpected binary files\n[ ] All source files have ASF headers\n[ ] Can compile from source\n\nMore detailed checklist please refer to:\nhttps://github.com/apache/opendal/tree/main/scripts\n\nTo compile from source, please refer to:\nhttps://github.com/apache/opendal/blob/main/CONTRIBUTING.md\n\nHere is a Python script in release to help you verify the release candidate:\n\n./scripts/verify.py\n\nThanks\n\n${name}\n")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/c211gqq2yl15jbxqk4rcnq1bdqltjm5l"},"https://lists.apache.org/thread/c211gqq2yl15jbxqk4rcnq1bdqltjm5l")),(0,r.kt)("p",null,"After at least 3 ",(0,r.kt)("inlineCode",{parentName:"p"},"+1")," binding vote (",(0,r.kt)("a",{parentName:"p",href:"https://opendal.apache.org/community/#committers"},"from OpenDAL Podling PMC member"),") and no veto, claim the vote result:"),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[RESULT][VOTE] Release Apache OpenDAL ${release_version} - Vote Round 1\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello, Apache OpenDAL Community,\n\nThe vote to release Apache OpenDAL ${release_version} has passed.\n\nThe vote PASSED with 3 +1 binding and 1 +1 non-binding votes, no +0 or -1 votes:\n\nBinding votes:\n\n- xxx\n- yyy\n- zzz\n\nNon-Binding votes:\n\n- aaa\n\nVote thread: ${vote_thread_url}\n\nThanks\n\n${name}\n")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/xk5myl10mztcfotn59oo59s4ckvojds6"},"https://lists.apache.org/thread/xk5myl10mztcfotn59oo59s4ckvojds6")),(0,r.kt)("h2",{id:"official-release"},"Official Release"),(0,r.kt)("h3",{id:"push-the-release-git-tag"},"Push the release git tag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Checkout the tags that passed VOTE\ngit checkout ${release_version}\n# Tag with the opendal version\ngit tag -s ${opendal_version}\n# Push tags to github to trigger releases\ngit push origin ${opendal_version}\n")),(0,r.kt)("h3",{id:"publish-artifacts-to-svn-release-branch"},"Publish artifacts to SVN RELEASE branch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'svn mv https://dist.apache.org/repos/dist/dev/opendal/${release_version} https://dist.apache.org/repos/dist/release/opendal/${opendal_version} -m "Release ${opendal_version}"\n')),(0,r.kt)("h3",{id:"change-opendal-website-download-link"},"Change OpenDAL Website download link"),(0,r.kt)("p",null,"Change the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/opendal/blob/main/website/src/pages/download.md"},"download")," link in the website to the new release version."),(0,r.kt)("p",null,"Update the latest release link and add the new release link to the version list."),(0,r.kt)("p",null,"Take ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/opendal/pull/2882"},"Add 0.39.0 release link to download.md")," as an example."),(0,r.kt)("h3",{id:"release-maven-artifacts"},"Release Maven artifacts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("a",{parentName:"li",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories"),"."),(0,r.kt)("li",{parentName:"ol"},"Find the artifact ",(0,r.kt)("inlineCode",{parentName:"li"},"orgapacheopendal-${maven_artifact_number}"),', click the "Release" button.')),(0,r.kt)("p",null,"It will take some time to sync the Maven artifacts to the Maven Central."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If the vote failed, click "Drop" to drop the staging Maven artifacts.')),(0,r.kt)("h3",{id:"create-a-github-release"},"Create a GitHub Release"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/opendal/releases/new"},"here")," to create a new release."),(0,r.kt)("li",{parentName:"ul"},"Pick the git tag of this release version from the dropdown menu."),(0,r.kt)("li",{parentName:"ul"},"Make sure the branch target is ",(0,r.kt)("inlineCode",{parentName:"li"},"main"),"."),(0,r.kt)("li",{parentName:"ul"},"Generate the release note by clicking the ",(0,r.kt)("inlineCode",{parentName:"li"},"Generate release notes")," button."),(0,r.kt)("li",{parentName:"ul"},"Add the release note from every component's ",(0,r.kt)("inlineCode",{parentName:"li"},"upgrade.md")," if there are breaking changes before the content generated by GitHub. Check them carefully."),(0,r.kt)("li",{parentName:"ul"},"Publish the release.")),(0,r.kt)("h3",{id:"send-the-announcement"},"Send the announcement"),(0,r.kt)("p",null,"Send the release announcement to ",(0,r.kt)("inlineCode",{parentName:"p"},"dev@opendal.apache.org")," and CC ",(0,r.kt)("inlineCode",{parentName:"p"},"announce@apache.org"),"."),(0,r.kt)("p",null,'Instead of adding breaking changes, let\'s include the new features as "notable changes" in the announcement.'),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ANNOUNCE] Release Apache OpenDAL ${opendal_version}\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hi all,\n\nThe Apache OpenDAL community is pleased to announce\nthat Apache OpenDAL ${opendal_version} has been released!\n\nOpenDAL is a data access layer that allows users to easily and efficiently\nretrieve data from various storage services in a unified way.\n\nThe notable changes since ${opendal_version} include:\n1. xxxxx\n2. yyyyyy\n3. zzzzzz\n\nPlease refer to the change log for the complete list of changes:\nhttps://github.com/apache/opendal/releases/tag/v${opendal_version}\n\nApache OpenDAL website: https://opendal.apache.org/\n\nDownload Links: https://opendal.apache.org/download\n\nOpenDAL Resources:\n- Issue: https://github.com/apache/opendal/issues\n- Mailing list: dev@opendal.apache.org\n\nThanks\nOn behalf of Apache OpenDAL community\n")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/oy77n55brvk72tnlb2bjzfs9nz3cfd0s"},"https://lists.apache.org/thread/oy77n55brvk72tnlb2bjzfs9nz3cfd0s")),(0,r.kt)("h2",{id:"post-release"},"Post release"),(0,r.kt)("p",null,"After the official release out, you may perform a few post actions."),(0,r.kt)("h3",{id:"remove-the-old-releases"},"Remove the old releases"),(0,r.kt)("p",null,"Remove the old releases if any. You only need the latest release there, and older releases are available through the Apache archive."),(0,r.kt)("p",null,"To clean up old releases, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# 1. Get the list of releases\nsvn ls https://dist.apache.org/repos/dist/release/opendal\n# 2. Delete each release (except for the last one)\nsvn del -m "Archiving OpenDAL release X.Y.Z" https://dist.apache.org/repos/dist/release/opendal/X.Y.Z\n')))}h.isMDXComponent=!0}}]);
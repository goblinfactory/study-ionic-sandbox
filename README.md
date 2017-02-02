# study-ionic-sandbox

sandbox playground for various ionic experiments - not meant as a public reference. I'm taking more manual notes in my A5 notebook, so don't expect this to be kept as up to date as often as my study-angular project.

Some of the code will be code I've written myself, and other code will most likely be copies of code from `@smichelotti` 's [Ionic2Course](https://github.com/smichelotti/Ionic2Course) as Ive decided to go once through copying his app, before starting my own throw away app based around the learning from the course. [Here is Steve Michelotti's course, `building Mobile Apps with Ionic 2, Angular 2, and Typescript` on pluralsight.](https://github.com/smichelotti/Ionic2Course)

### Installing Ionic

`> npm install -g ionic cordova` 

### fixing node 'EACCES' error

- If the node command (when installing node, or any other npm command) results in `Error: EACCES: permission denied, symlink '../lib/node_modules/cordova/bin/cordova'` then the fix is ***not*** to run as sudo, but rather might be as follows, to fix folder permissions by starting fresh; 
- see https://docs.npmjs.com/getting-started/fixing-npm-permissions
- fix

```
 mkdir ~/npm-global
 npm config set prefix "~/npm-global"
```

  - then add the new path above to your bash shell:
   - `>open ~/npm-global`
   - add `export PATH=~/.npm-global/bin:$PATH` to the bottom of the file and save.
   - close and re-open the terminal (bash) for the path to become active.
  - then re-run the install.
  - it's important to include the quotes above, otherwise it will not be set.
  - to check the npm path has been set correctly, run `npm config get prefix` (this should return the correct path.)

### 100 mile an hour 'android' end to end (tbd)

1. `npm install -g ionic cordova` : skip if you've already installed ionic
1. `ionic start myapp tabs --v2 --ts` : create scaffolded start project
1. `cd myapp`
1. `ionic serve` : manually run and test it
1. `ionic platform add android` : install android native support to your project
1. `ionic build android` : compile the android resources and create a apk file.
1. `ionic emulate android` 
 1. test on a real emulator. 
 1. first build of the emulator will be slow, subsequent will be faster
  1. 1st time took me about 4-5 minutes
  1. 2nd time took 30 seconds after pressing enter in the shell
   1. for the build to run completely
   1. create apk
   1. launch emulator
   1. android emulated device to start
   1. copy and install the apk
   1. the app is running
1. connect your mobile : make sure running in debug mode 
 1. http://android.stackexchange.com/questions/61641/why-is-my-galaxy-s4-still-not-appearing-as-a-device-in-mac-os-x
 1. http://stackoverflow.com/questions/16707137/how-to-find-and-turn-on-usb-debugging-mode-on-nexus-4
1. `ionic run android` : test 

### 8 simple 1 line commands to gaurantee a super interesting dev meetup ` ¯\_(ツ)_/¯ `

```
  npm install -g ionic cordova 
  ionic start myapp tabs --v2 --ts
  cd myapp
  ionic serve
  ionic platform add android
  ionic build android
  ionic emulate android
  ionic run android
```
***result***

![very impressed with the quickstsart, genuinely get up and running](docs/2017-01-ionic-quickstart.png)

### Likes and dislikes

#### Likes

NB! These are just thoughts at the moment, and not yet proven with facts or even real observations beyond my own limited experience. They're ideas that I will try to get more clarity on over the coming weeks, and will discuss with collegues further.

- my main like, is I get to keep all the skills I use for mobile development. i.e. I don't have to learn a propriatary language or api, .. the surface area is easily manageable.
- team size realistically can be much smaller. Xamarin android development requires tester + xamarin android + xamarin IOS (or swift) + backend API developer. That's 4 people. Compared to Ionic where it's realistically possible to have a full stack ionic and angular developer do everything, and less overhead adapting to all the constant changes. Scaling up the team doesnt mean hiring different skills, you add more full stack devs, which means you derisk the project, instead increase the risk, and communicate and efficiency improves! (imho) of course YMMV. 
- tbd, this is a long list.
- speed, speed, speed. (er, of development, not app, cof cof! blush!)
- I was up and running and way past where I was with Xamarin studio and Xamarin Forms in only a few hours.
- everything (touch wood) so far, `just works!`. In a wonderful way that stuff just so often did NOT work with Xamarin.
- Even when things did not work, it was really easy to find a fix.
- error messages so far have been out of this world awesome. (nb, need reference, see if I can remember specific examples?)
- Typescript means I can slowly get into `Javascript the good parts`.
- I love how Angular2 protects me from `CSS hell`. CSS does not bleed out from parent into child.
- I have not got into testing yet, but I have a strong sense that this will all be a whole lot more automatable, and components and libs can be independantly unit tested at high speed.
- small likes (again, I guess this might be available in other frameworks, but hey, I like this stuff)
 - automatic back button (that works propertly) in navigation
  - (if you navigate to a child, the back button is enabled and dissapears when you're back in root or )
- tight integration with angular2 allows for some nifty use of `Yo` 
 - i.e. there's essentially three elements to any new page, assuming a 1-1 correlation between pages and features for the sake of this explanation
 - the three pages are `xx.html` - `xx.scss` - `xx.ts` : Your html, styling and code.
 - this lays the groundwork for consulting firms to build up libraries of re-usable patterns they can share with their teams to rapidly roll out fully functioning prototypes and in many cases feature rich production ready applications.
 - groundwork for RAD development in mobile applications. (Something I thought was really long overdue.)
- support for agile workflow processes 
 - 1 line push to ionic view for customer review with `ionic upload` (poof! this is wonderfully productive, cut all the red tape bullshit.) Lets get stuff in customers hands for rapid feedback
 - more to follow. (liking this)

#### dislikes

I appreciate that many of my `dislikes` might simply be due to my personal context, or my lack of understanding, so I'll try to keep this updated as I talk to collegues and work through the material.

- dislike that this is undermining my zealous support for [`Aurelia`](http://aurelia.io/) : will need to investigate further to see what alternatives exist in `less is more Arelia javascript land`! sob sob!
- this is a very short list, , ***load time!***  and reliance on `apps.ionic.io` and few minor issues
 - *Load Time*
  - Around 10 seconds for a vanilla out of the box scafolded app in debug mode (i.e. without `--prod` set. )
  - I believe (I might be wrong) but, this is still faster than using Xamarin Forms for cross platform dev. Comparing to my Xamarin Forms hello world app. (also in debug) on my phone.
  - here's some skinny on load times, ...scroll all the way to the bottom 
  - https://forum.ionicframework.com/t/ionic-2-speed-up-boot-time/46372/135
 - reliance on apps.ionic.io to create the publishable app?
  - is this scalable and profitable, will it survive
  - will it be around in 1 or 2 years.
  - what's the alternative to this? 
  - what to do when the site is down? (it was down, is still down right now at the time of writing. Ok, only for a few minutes)
   - Will need to consider how this impacts development processes and whether this could ultimately be brought inhouse somehow? (or if that's just defeating the whole purpose, then you might as well be using Xamarin or other frameworks and `bite the bullet` so to speak.)
  

#### pausing

https://app.pluralsight.com/player?course=ionic2-angular2-typescript-mobile-apps&author=steve-michelotti&name=ionic2-angular2-typescript-mobile-apps-m2&clip=6&mode=live
 
 run apps with ionic view
 
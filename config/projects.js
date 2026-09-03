function generateDescription(heading, functionalHighlights = [], projectHighlights = [], links = []) {
 let description = "";
 if (heading) {
 description+= "<hr/>";
 heading = heading.replaceAll("\n", "<br/>");
 description+= heading;
 }
 if (functionalHighlights.length > 0) {
 description+= "<br/><hr/>Things it does<br/><br/>";
 description+=
 "<ul> "+
 functionalHighlights.map(item=>`<li>${item}</li>`).join('')+
 "</ul>";
 }
 if (projectHighlights.length > 0) {
 description+= "<br/><hr/>Things I learnt<br/><br/>";
 description+=
 "<ul>"+
 projectHighlights.map(item=>`<li>${item}</li>`).join('')+
 "</ul>"
 }
 if (links.length > 0) {
 description+= "<br/><hr/>Links<br/>";
 description+=
 "<ul> "+
 links.map(item=>`<li><a href="${item.url}" target="_blank">${item.title}</a></li>`).join('')+
 "</ul>";
 }
 return description;
}
const projectConfig = [
 {
  title: "Cannybots",
  subTitle: "3D Printable & Programmable Robot Toys for STEM",
  description: generateDescription(
      "",
      [
      ],
      [
      ],
      [
       {title: "KickStarter", url: "https://www.kickstarter.com/projects/1397692060/toys-20-interactive-programmable-smart-cannybots"},
       {title: "Micro:bit", url: "https://microbit.org"},
      ]
  ),
  type: "carousel",
  slides: [
   {type: 'image', url: './projects/cannybots/1.webp'},
   {type: 'image', url: './projects/cannybots/2.webp'},
   {type: 'image', url: './projects/cannybots/3.webp'},
   {type: 'image', url: './projects/cannybots/4.webp'},
   {type: 'image', url: './projects/cannybots/5.webp'},
   {type: 'image', url: './projects/cannybots/6.webp'},
   {type: 'image', url: './projects/cannybots/7.webp'},
   {type: 'image', url: './projects/cannybots/8.webp'},
   {type: 'image', url: './projects/cannybots/9.webp'},
   {type: 'image', url: './projects/cannybots/10.webp'},
   {type: 'video', url: './projects/cannybots/11.mp4', poster: './projects/cannybots/1.webp'},
   {type: 'video', url: './projects/cannybots/12.mp4', poster: './projects/cannybots/1.webp'},
   {type: 'video', url: './projects/cannybots/13.mp4', poster: './projects/cannybots/1.webp'},
  ]
 },
 {
 title: "VanLights",
 subTitle: "Home Automation for VanLife",
 description: generateDescription(
 "No hassle and low energy footprint Home Automation for VanLife. "+
 " No rewiring."+
 "Just a simple USB dongle and phone app for your lights, switches & sensors.",
 [
 "Home Automation with only a USB dongle and mobile app",
 "Internet free Home Automation",
 "Controls Zigbee lights",
 "Pairs switches to lights",
 "Pairs proximity sensors to lights",
 ],
 [
 "BluetoothLE",
 "ZigBee",
 "Zephyr",
 "React Native",
 "React Native Custom Controls",
 "TypeScript"
 ],
 [
 ]
 ),
 type: "carousel",
 slides: [
 {type: 'video', url: './projects/vanlights/1.mp4', poster: './projects/vanlights/1.webp'},
 {type: 'image', url: './projects/vanlights/2.webp'},
 ]
 },
 {
 title: "RhythmSID",
 subTitle: "Programming the C64 SID synth chip in Python.",
 description: generateDescription(
 "I built a small hardware interface that lets you play a SID synth chip from modern MIDI sources and programming languages.  "
+"A Pi Pico handles chip timing and register writes and exposes MIDI over DIN, USB, and BLE, so it works with both "
+"classic gear and wireless MIDI controllers, like mobile devices and tablets.",
 [
 "Programmable in C/C++, CircuitPython and MicroPython",
 "Supports MIDI via: UART, USB & BLE",
 "Works with mobile Midi software on Android and iOS (e.g. GarageBand on iPad)"
 ],
 [
 "Midi via: UART, USB & BLE",
 "FFT Audio analysis",
 "Pi Pico SDK",
 "Pi Pico PIO for SID chip clock and register read/write timing",
 "USB Isochronous audio data transfers",
 "SID (MOS 6581) Register programming",
 "CircuitPython & MicroPython APIs (C Modules)",
 "KiCad & PCB Production"
 ],
 [
 ]
 ),
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/rhythmsid/1.webp'},
 {type: 'image', url: './projects/rhythmsid/2.webp'},
 {type: 'image', url: './projects/rhythmsid/3.webp'},
 {type: 'image', url: './projects/rhythmsid/4.webp'},
 ]
 },
 {
 title: "CREW Browser Extension",
 subTitle: "Consumer Rights Wiki browser extension",
 description: generateDescription(
 " Browser Extension for automatically searching "+
 "Rossmann's <a href=' https://consumerrights.wiki'>Consumer Action Taskforce (CAT)</a>"+
 "articles for the current site being visited.",
 [
 "Supports: Safari, Chrome & Firefox",
 ],
 [
 "Typescript",
 "Webpack, Jest, Husky",
 "WikiMedia platform install & setup",
 "WikiMedia Cargo Extension setup and usage"
 ],
 [
 {title: "Open sourced on GitHub", url: "https://github.com/WayneKeenan/ClintonCAT/"},
 ]
 ),
 type: "card",
 },
 {
 title: "Wordle Board",
 subTitle: "Show the world your Wordle",
 description: generateDescription(
 "Built a small ESP32 (M5-Stack) device for myself that pulls Wordle score posts from Twitter and shows the results on its LCD in real time.",
 [
 "Polls Twitter feed for Wordle score shares",
 "Runs on M5-Stack",
 "Runs on ESP32 based watch"
 ],
 [
 "Twitter API",
 "M5GFX API",
 "Nobody cares about your Wordle score.",
 ],
 ),
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/wordleboard/1.webp'},
 {type: 'image', url: './projects/wordleboard/2.webp'},
 {type: 'image', url: './projects/wordleboard/3.webp'},
 {type: 'image', url: './projects/wordleboard/4.webp'},
 ]
 },
 // {
 // title: "Bleson",
 // subTitle: "Cross-platform Bluetooth LE Python API",
 // descriptionO:
 // "<ul> "+
 // "<li>Linux, macOS & Windows</li>"+
 // "</ul>"+
 // "https://github.com/TheCellule/python-bleson",
 // type: "card"
 // },
 {
 title: "BubblePy",
 subTitle: "Cross-platform Bluetooth LE Python API",
 descriptionO:
 "<ul> "+
 "<li>Initially for micro:bit v1</li>"+
 "<li>Based on MyNewt<li>"+
 "</ul>",
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/bubblepy/1.webp'},
 {type: 'image', url: './projects/bubblepy/2.webp'},
 {type: 'image', url: './projects/bubblepy/3.webp'},
 {type: 'image', url: './projects/bubblepy/4.webp'},
 ]
 },
 {
 title: "Neutrino",
 subTitle: "Retro Shoot'em'up in Swift and Rust",
 descriptionO: "<ul>"+
 "<li>https://www.youtube.com/watch?v=CAkmKlocur0</li>"+
 "<li>https://bsky.app/profile/wkdlabs.com/post/3lfdlnrerpk2s</li>"+
 "</ul>",
 type: "carousel",
 slides: [
 {type: 'video', url: './projects/neutrino/1.mp4', poster: './projects/neutrino/1.webp'},
 {type: 'video', url: './projects/neutrino/2.mp4', poster: './projects/neutrino/1.webp'},
 ]
 },
 {
 title: "Alexa PubGuide",
 subTitle: "Pub finder and crawl generator Alexa Skill",
 description: generateDescription(
 null,
 [
 "Find pubs by features, e.g. pubs with food",
 "Creates pub crawls",
 "Specify crawls location by: city, postcode, train or tube station",
 "Plots the crawl on a map with pubs as waypoints",
 "Doesn't cure hangovers"
 ],
 [
 "Alexa Skill building and deployment",
 "AWS Lambda",
 "DynamoDB",
 "Using local backend servers for testing with Alexa devices",
 "Docker, for cross-compilation of Lambdas",
 "The BeerInThe Evening API",
 ],
 [
 {title: "Beer in the Evening", url: "https://www.beerintheevening.com/"},
 ]
 ),
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/pubguide/1.webp'},
 {type: 'image', url: './projects/pubguide/2.webp'},
 ]
 },
 {
 title: "Alexa SIDPlay",
 subTitle: "Stream C64 SID music Alexa Skill",
 description: generateDescription(
 null,
 [
 "Play Commodore 64 tunes on your Alexa",
 "Huge collection of tunes streamed from remix.kwed.org",
 "Find tracks by title, game or author",
 ],
 [
 "Alexa Skill building and deployment",
 "AWS Lambda",
 "DynamoDB",
 "Using local backend servers for testing with Alexa devices",
 "Docker, for cross-compilation of Lambdas",
 "The Lemon SID collection API",
 ],
 [
 {title: "kwed.org", url: "https://remix.kwed.org"},
 ]
 ),
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/sidplay/1.webp'},
 ]
 },
 {
 title: "O-BLE-1",
 subTitle: "The droids you are looking for. Hardware-in-the-Loop testing of Bluetooth LE microcontrollers.",
 descriptionO: "https://groups.google.com/g/python-bleson/c/qbcZVslLmU8",
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/oble1/1.webp'},
 {type: 'image', url: './projects/oble1/2.webp'},
 ]
 },
 {
 title: "Adapter Bits",
 subTitle: "Pi Pico, ESP32 and Feather adapters for micro:bit accessories and prototyping.",
 description: generateDescription(
 "The micro:bit has been around for a number of years, a large number of accessories have been produced, many of which I have purchased and made projects with.\n"+
 "\n"+
 "I wanted to make those accessories easily connectable to other microcontrollers such as the Pi Pico, Arduino Nano and the Adafruit Feather form factor. \n"+
 "\n"+
 "The ProtoBit allows you to prototype your projects using the micro:bit form factor letting you connect your custom projects to the hundreds of existing micro:bit accessories.\n"+
 "\n"+
 "It was also fun learning KiCad to create these boards and have them manufactured by JLCPCB. \n"+
 "\n"+
 "The boards can be bought on Tindie, see links below\n",
 [],
 [
 "KiCad 6.0 (Again :) )",
 "Low tolerance PCB layout constraints for manufacturing"
 ],
 [
 {title: "ProtoBit on Tindie", url: "https://www.tindie.com/products/wkdlabs/protobit/"},
 {title: "PicoBit on Tindie", url: "https://www.tindie.com/products/wkdlabs/picobit/"},
 {title: "NanoBit on Tindie", url: "https://www.tindie.com/products/wkdlabs/nanobit/"},
 ]
 ),
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/adapterbits/1.webp'},
 {type: 'image', url: './projects/adapterbits/2.webp'},
 {type: 'image', url: './projects/adapterbits/3.webp'},
 {type: 'image', url: './projects/adapterbits/4.webp'},
 {type: 'image', url: './projects/adapterbits/5.webp'},
 {type: 'image', url: './projects/adapterbits/6.webp'},
 {type: 'image', url: './projects/adapterbits/7.webp'},
 {type: 'image', url: './projects/adapterbits/8.webp'},
 {type: 'video', url: './projects/adapterbits/9.mp4', poster: './projects/adapterbits/1.webp'},
 ]
 },
 {
 title: "Nanocast",
 subTitle: "ChromeCasting for embedded devices",
 description: generateDescription(
 "",
 [
 ],
 [],
 [
 ]
 ),
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/nanocast/1.webp'},
 {type: 'video', url: './projects/nanocast/2.mp4', poster: './projects/nanocast/1.webp'},
 {type: 'video', url: './projects/nanocast/3.mp4', poster: './projects/nanocast/1.webp'},
 {type: 'video', url: './projects/nanocast/4.mp4', poster: './projects/nanocast/1.webp'},
 {type: 'video', url: './projects/nanocast/5.mp4', poster: './projects/nanocast/1.webp'},
 {type: 'video', url: './projects/nanocast/6.mp4', poster: './projects/nanocast/1.webp'},
 ]
 },
 {
 title: "VR Zero",
 subTitle: "VR Development on the Raspberry Pi, in Python",
 descriptionO: "https://www.youtube.com/watch?v=e6jcBTLeOB0",
 type: "carousel",
 slides: [
 {type: 'video', url: './projects/vrzero/1.mp4', poster: './projects/vrzero/1.webp'},
 ]
 },
 {
 title: "Astral Pi",
 subTitle: "Telepresence with VR HMD / FPV",
 description: generateDescription(
 null,
 [
 ],
 [],
 [
 {title: "HacksterIO project", url: "https://www.hackster.io/WKDLabs/astralpi-ecaeef",},
 ]
 ),
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/astralpi/1.webp'},
 {type: 'video', url: './projects/astralpi/2.mp4', poster: './projects/astralpi/1.webp'},
 {type: 'video', url: './projects/astralpi/3.mp4', poster: './projects/astralpi/1.webp'},
 ]
 },
 {
 title: "PiCraftZero",
 subTitle: "Universal remote control supporting virtual (web) and physical (handheld) controllers.",
 description: generateDescription(
 null,
 [
 "Universal remote control supporting virtual (web) and physical (handheld) controllers.",
 "Camera streaming server and web client for single or dual cameras",
 "HTML5 Gamepad API support for gamepads on desktop and mobile devices",
 "gpiozero components for receiving joystick updates",
 "gpiozero components for discovering and controlling i2c based motor & servo hats",
 "gpiozero components for 'steering mixers' for converting joystick axis values to motor speeds",
 "gpiozero components for websocket messaging",
 ],
 [
 "gpiozero usage and internals",
 "HTML5 Gamepad API"
 ],
 [
 {title: "Tablets & Laptop demos (YouTube)", url: "https://www.youtube.com/watch?v=DPYABspXSOo"},
 {title: "Gamepads & phones demos (YouTube)", url: "https://www.youtube.com/watch?v=pUz_y9WAkc8"},
 {title: "gpiozero project", url: "https://github.com/gpiozero/gpiozero"}
 ]
 ),
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/picraftzero/1.webp'},
 {type: 'image', url: './projects/picraftzero/2.webp'},
 {type: 'image', url: './projects/picraftzero/3.webp'},
 {type: 'image', url: './projects/picraftzero/4.webp'},
 {type: 'video', url: './projects/picraftzero/5.mp4', poster: './projects/picraftzero/5.webp'},
 {type: 'video', url: './projects/picraftzero/6.mp4', poster: './projects/picraftzero/6.webp'},
 {type: 'video', url: './projects/picraftzero/7.mp4', poster: './projects/picraftzero/7.webp'},
 ]
 },
 {
 title: "Pi AR Drivin",
 subTitle: "Mixed Reality Robot Remote Control",
 description: "", // Mario Kart Live
 type: "carousel",
 slides: [
 {type: 'video', url: './projects/pi_ar_drivin/1.mp4', poster: './projects/pi_ar_drivin/1.webp'},
 ]
 },
 {
 title: "PuppetXR",
 subTitle: "Meta Quest based Robotic Telepresence",
 description: generateDescription(
 "",
 [
 "Quest Controller integration with Linux Gamepad",
 ],
 [
 "Unity VR",
 "Linux USB User land drivers",
 ],
 ),
 type: "carousel",
 slides: [
 {type: 'video', url: './projects/puppetxr/1.mp4', poster: './projects/puppetxr/1.webp'},
 ]
 },
 {
 title: "PicoPilot",
 subTitle: "WebXR based FPV self-hosted on tiny WiFi enabled robots",
 description: generateDescription(
 "",
 [
 ],
 [
 "WebXR",
 "ESP32 Self-signed HTTPS server"
 ],
 ),
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/picopilot/1.webp'},
 {type: 'image', url: './projects/picopilot/2.webp'},
 {type: 'image', url: './projects/picopilot/3.webp'},
 {type: 'image', url: './projects/picopilot/4.webp'},
 {type: 'image', url: './projects/picopilot/5.webp'},
 {type: 'image', url: './projects/picopilot/6.webp'},
 {type: 'image', url: './projects/picopilot/7.webp'},
 ]
 },
 {
 title: "Snow Globe",
 subTitle: "Santa in a snow globe streaming live on YouTube .",
 description: generateDescription(
 "",
 [
 "Live streams Santa from inside a snow sphere to YouTube",
 ],
 [
 "YouTube live streaming from a Raspberry Pi",
 "Polystyrene balls get everywhere!"
 ],
 [
 {title: "Live Stream (Recording)", url: "https://www.youtube.com/watch?v=SUc_JAuK9Zs"},
 ]
 ),
 descriptionO: "",
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/snowglobe/1.webp'},
 {type: 'image', url: './projects/snowglobe/2.webp'},
 {type: 'image', url: './projects/snowglobe/3.webp'},
 {type: 'image', url: './projects/snowglobe/4.webp'},
 {type: 'video', url: './projects/snowglobe/5.mp4', poster: './projects/snowglobe/5.webp'},
 {type: 'video', url: './projects/snowglobe/6.mp4', poster: './projects/snowglobe/6.webp'},
 ]
 },
 {
 title: "PiCorder",
 subTitle: "RaspberryPi based camcorder",
 descriptionO: "https://www.hackster.io/WKDLabs/picorder-0eb94d",
 type: "carousel",
 slides: [
 {type: 'video', url: './projects/picorder/1.mp4', poster: './projects/picorder/1.webp'},
 ]
 },
 {
 title: "SonicHero",
 subTitle: "Controlling Sonic Pi with a BluetoothLE Guitar Hero controller",
 descriptionO: "https://github.com/WayneKeenan/SonicHero",
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/sonichero/1.webp'},
 ]
 },
 {
 title: "MagicEyeVNC",
 subTitle: "Secure VNC Client using autostereogram for visual proximity security",
 type: "carousel",
 slides: [
 ]
 },
 {
 title: "WKD Vanlife",
 subTitle: "Fun Vanlife clothing",
 type: "carousel",
 slides: [
 {type: 'image', url: './projects/vanlife/1.webp'},
 {type: 'image', url: './projects/vanlife/2.webp'},
 {type: 'image', url: './projects/vanlife/3.webp'},
 ]
 },
];

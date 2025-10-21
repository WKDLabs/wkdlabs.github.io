// TODO:    video thumbs
// TODO:    overlaid video titles
// TODO:    image and video sizing

function generateDescription(heading, functionalHighlights = [], projectHighlights = [], links = []) {

    let description = "";

    description += "<hr/><br/>";
    heading = heading.replaceAll("\n", "<br/>");
    description += heading;


    if (functionalHighlights.length > 0) {

        description += "<br/><br/><hr/><br/>";

        description +=
            "<ul> " +
            functionalHighlights.map(item => `<li>${item}</li>`).join('') +
            "</ul>";
    }

    if (projectHighlights.length > 0) {
        description += "<br/><hr/><br/>";
        description +=
            "<ul>" +
            projectHighlights.map(item => `<li>${item}</li>`).join('') +
            "</ul>"
    }

    if (links.length > 0) {
        description += "<br/><hr/><br/>";
        // description += "Links";
        description +=
            "<ul> " +
            links.map(item => `<li><a href="${item.url}" target="_blank">${item.title}</a></li>`).join('') +
            "</ul>";
    }

    return description;
}


const projectConfig = [


    {
        title: "VanLights",
        subTitle: "Home Automation for VanLife",
        description: generateDescription(
            "No hassle and low energy footprint Home Automation for VanLife. " +
            " No rewiring." +
            "Just a simple USB dongle and phone app for your lights, switches & sensors.",
            [
                "No wifi", "No Internet"
            ],
            [
                "Zephyr",
                "BluetoothLE & ZigBee"
            ],
            [
            ]
        ),
        type: "carousel",
        slides: [
            {type: 'video', url: './projects/vanlights/1.mp4'},
            {type: 'image', url: './projects/vanlights/2.jpg'},
        ]
    },

    {
        title: "RhythmSID",
        subTitle: "Programming the C64 SID synth chip in Python.",
        description: generateDescription(
            "I built a small hardware interface that lets you play a SID synth chip from modern MIDI sources. "
            + "A Pi Pico handles timing and register writes and exposes MIDI over DIN, USB, and BLE, so it works with both "
            + "classic gear and wireless MIDI controllers, like mobile devices and tablets. ",
            [
                // "ONE",
                // "TWO"
            ],
            [
                // "ONE",
                // "TWO"
            ],
            [
                // {title: "TITLE", url: "https://URL/"},
            ]
        ),
        descriptionO: "Play with the Retro SID synth.\n" +
            "\n" +
            "<ul> " +
            "<li>using high level langueses, midi, instruments & sensors</li>" +
            "<li><Based on the Pi Pico/li>" +
            "<li></li>" +
            "<li></li>" +
            "<li></li>" +
            "</ul>" +
            "Coding SID music in Python and C/C++",
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/rhythmsid/1.jpg'},
            {type: 'image', url: './projects/rhythmsid/2.jpg'},
            {type: 'image', url: './projects/rhythmsid/3.jpg'},
            {type: 'image', url: './projects/rhythmsid/4.jpg'},
        ]
    },

    {
        title: "CREW Browser Extension",
        subTitle: "Consumer Rights Wiki browser extension",
        description: generateDescription(
            " Browser Extension for automatically searching " +
            "Rossmann's <a href=' https://consumerrights.wiki'>Consumer Action Taskforce (CAT)</a>" +
            "articles for the current site being visited.",
            [
                "Supports: Safari, Chrome & Firefox",
            ],
            [
                "Typescript",
                "Webpack, Jest, Husky"
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
        description: generateDescription("Built a small ESP32 (M5-Stack) device for myself that pulls Wordle score posts from Twitter and shows the results on its LCD in real time.",
            [
                "Polls Twitter feed for Wordle score shares",],
            [
                "Built for M5-Stack",
                "Built for ESP32 based watch"
            ],
            [
                // {title: "title1", url: "https://www.example.com/"},
                // {title: "title2", url: "https://www.example.com/"},
            ]
        ),
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/wordleboard/1.jpg'},
            {type: 'image', url: './projects/wordleboard/2.jpg'},
            {type: 'image', url: './projects/wordleboard/3.jpg'},
            {type: 'image', url: './projects/wordleboard/4.jpg'},
        ]
    },

    {
        title: "Cannybots",
        subTitle: "3D Printable & Programmable Robot Toys for STEAM",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        descriptionORG: "https://www.kickstarter.com/projects/1397692060/toys-20-interactive-programmable-smart-cannybots",
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/cannybots/1.jpg'},
            {type: 'image', url: './projects/cannybots/2.jpg'},
            {type: 'image', url: './projects/cannybots/3.jpg'},
            {type: 'image', url: './projects/cannybots/4.jpg'},
            {type: 'image', url: './projects/cannybots/5.jpg'},
            {type: 'image', url: './projects/cannybots/6.jpg'},
            {type: 'image', url: './projects/cannybots/7.jpg'},
            {type: 'image', url: './projects/cannybots/8.jpg'},
            {type: 'image', url: './projects/cannybots/9.jpg'},
            {type: 'image', url: './projects/cannybots/10.jpg'},
            {type: 'video', url: './projects/cannybots/11.mp4', poster: './projects/cannybots/1.jpg'},
            {type: 'video', url: './projects/cannybots/12.mp4', poster: './projects/cannybots/1.jpg'},
            {type: 'video', url: './projects/cannybots/13.mp4', poster: './projects/cannybots/1.jpg'},
        ]
    },

    {
        title: "Bleson",
        subTitle: "Cross-platform Bluetooth LE Python API",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        descriptionO:
            "<ul> " +
            "<li>Linux, macOS & Windows</li>" +
            "</ul>" +
            "https://github.com/TheCellule/python-bleson",
        type: "card"
    },
    {
        title: "BubblePy",

        subTitle: "Cross-platform Bluetooth LE Python API",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        descriptionO:
            "<ul> " +
            "<li>Initially for micro:bit v1</li>" +
            "<li>Based on MyNewt<li>" +
            "</ul>",
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/bubblepy/1.jpg'},
            {type: 'image', url: './projects/bubblepy/2.jpg'},
            {type: 'image', url: './projects/bubblepy/3.jpg'},
            {type: 'image', url: './projects/bubblepy/4.jpg'},
        ]
    },

    {
        title: "Neutrino",
        subTitle: "Retro Shoot'em'up in Swift and Rust",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        descriptionO: "<ul>" +
            "<li>https://www.youtube.com/watch?v=CAkmKlocur0</li>" +
            "<li>https://bsky.app/profile/wkdlabs.com/post/3lfdlnrerpk2s</li>" +
            "</ul>",
        type: "carousel",
        slides: [
            {type: 'video', url: './projects/neutrino/1.mp4', poster: './projects/neutrino/1.jpg'},
            {type: 'video', url: './projects/neutrino/2.mp4', poster: './projects/neutrino/1.jpg'},
        ]
    },

    {
        title: "Alexa PubGuide",
        subTitle: "Pub crawl generator Alexa Skill",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/pubguide/1.jpg'},
            {type: 'image', url: './projects/pubguide/2.jpg'},
        ]
    },
    {
        title: "Alexa SIDPlay",
        subTitle: "Stream C64 SID music Alexa Skill",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/sidplay/1.png'},
        ]
    },

    {
        title: "O-BLE-1",
        subTitle: "The droids you are looking for. Hardware-in-the-Loop testing of Bluetooth LE microcontrollers.",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        descriptionO: "https://groups.google.com/g/python-bleson/c/qbcZVslLmU8",
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/oble1/1.jpg'},
            {type: 'image', url: './projects/oble1/2.jpg'},
        ]
    },

    {
        title: "Adapter Bits",
        subTitle: "Pi Pico, ESP32 and Feather adapters for micro:bit accessories and prototyping.",
        description: generateDescription(
            "The micro:bit has been around for a number of years, a large number of accessories have been produced, many of which I have purchased and made projects with.\n" +
            "\n" +
            "I wanted to make those accessories easily connectable to other microcontrollers such as the Pi Pico, Arduino Nano and the Adafruit Feather form factor. \n" +
            "\n" +
            "The ProtoBit allows you to prototype your projects using the micro:bit form factor letting you connect your custom projects to the hundreds of existing micro:bit accessories.\n" +
            "\n" +
            "It was also fun learning KiCad to create these boards and have them manufactured by JLCPCB. \n" +
            "\n" +
            "The boards can be bought on Tindie, see links below\n",
            [],
            [
                "Learning KiCad",
                "PCB layout constraints for manufacturing"
            ],
            [
                {title: "ProtoBit", url: "https://www.tindie.com/products/wkdlabs/protobit/"},
                {title: "PicoBit", url: "https://www.tindie.com/products/wkdlabs/picobit/"},
                {title: "NanoBit", url: "https://www.tindie.com/products/wkdlabs/nanobit/"},
            ]
        ),
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/adapterbits/1.jpg'},
            {type: 'image', url: './projects/adapterbits/2.jpg'},
            {type: 'image', url: './projects/adapterbits/3.jpg'},
            {type: 'image', url: './projects/adapterbits/4.jpg'},
            {type: 'image', url: './projects/adapterbits/5.jpg'},
            {type: 'image', url: './projects/adapterbits/6.jpg'},
            {type: 'image', url: './projects/adapterbits/7.jpg'},
            {type: 'image', url: './projects/adapterbits/8.jpg'},
            {type: 'video', url: './projects/adapterbits/9.mp4', poster: './projects/adapterbits/1.jpg'},
        ]
    },
    {
        title: "Nanocast",
        subTitle: "ChromeCasting for embedded devices",
        description: generateDescription(
            "BLAH",
            [
                // "ONE",
                // "TWO"
            ],
            [],
            [
                // {title: "TITLE", url: "https://URL/"},
            ]
        ),
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/nanocast/1.jpg'},
            {type: 'video', url: './projects/nanocast/2.mp4', poster: './projects/nanocast/1.jpg'},
            {type: 'video', url: './projects/nanocast/3.mp4', poster: './projects/nanocast/1.jpg'},
            {type: 'video', url: './projects/nanocast/4.mp4', poster: './projects/nanocast/1.jpg'},
            {type: 'video', url: './projects/nanocast/5.mp4', poster: './projects/nanocast/1.jpg'},
            {type: 'video', url: './projects/nanocast/6.mp4', poster: './projects/nanocast/1.jpg'},
            // {type: 'video', url: './projects/nanocast/7.mp4', poster: './projects/nanocast/1.jpg'},
        ]
    },

    {
        title: "VR Zero",
        subTitle: "VR Development on the Raspberry Pi, in Python",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         // "ONE",
        //         // "TWO"
        //     ],
        //     [
        //         // "ONE",
        //         // "TWO"
        //     ],
        //     [
        //         // {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        descriptionO: "https://www.youtube.com/watch?v=e6jcBTLeOB0",
        type: "carousel",
        slides: [
            {type: 'video', url: './projects/vrzero/1.mp4', poster: './projects/vrzero/1.jpg'},
        ]
    },
    {
        title: "Astral Pi",
        subTitle: "Telepresence with VR HMD / FPV",
        description: "https://www.hackster.io/WKDLabs/astralpi-ecaeef",
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/astralpi/1.jpg'},
            {type: 'video', url: './projects/astralpi/2.mp4', poster: './projects/astralpi/1.jpg'},
            {type: 'video', url: './projects/astralpi/3.mp4', poster: './projects/astralpi/1.jpg'},
        ]
    },
    {
        title: "PiCraftZero",
        subTitle: "Universal remote control supporting virtual (web) and physical (handheld) controllers.",
        description: "",
        // description: generateDescription(
        //     // "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        // descriptionO: "https://www.youtube.com/watch?v=DPYABspXSOo" +
        //     "https://www.youtube.com/watch?v=pUz_y9WAkc8",
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/picraftzero/1.jpg'},
            {type: 'image', url: './projects/picraftzero/2.jpg'},
            {type: 'image', url: './projects/picraftzero/3.jpg'},
            {type: 'image', url: './projects/picraftzero/4.jpg'},
            {type: 'video', url: './projects/picraftzero/5.mp4', poster: './projects/picraftzero/5.jpg'},
            {type: 'video', url: './projects/picraftzero/6.mp4', poster: './projects/picraftzero/6.jpg'},
            {type: 'video', url: './projects/picraftzero/7.mp4', poster: './projects/picraftzero/7.jpg'},
        ]
    },
    {
        title: "Pi AR Drivin",
        subTitle: "Mixed Reality Robot Remote Control",
        description: "", // Mario Kart Live
        type: "carousel",
        slides: [
            {type: 'video', url: './projects/pi_ar_drivin/1.mp4', poster: './projects/pi_ar_drivin/1.jpg'},
        ]
    },
    {
        title: "PuppetXR",
        subTitle: "Meta Quest based Robotic Telepresence",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        type: "carousel",
        slides: [
            {type: 'video', url: './projects/puppetxr/1.mp4', poster: './projects/puppetxr/1.jpg'},
        ]
    },
    {
        title: "PicoPilot",
        subTitle: "WebXR based FPV self-hosted on tiny WiFi enabled robots",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/picopilot/1.jpg'},
            {type: 'image', url: './projects/picopilot/2.jpg'},
            {type: 'image', url: './projects/picopilot/3.jpg'},
            {type: 'image', url: './projects/picopilot/4.jpg'},
            {type: 'image', url: './projects/picopilot/5.jpg'},
            {type: 'image', url: './projects/picopilot/6.jpg'},
            {type: 'image', url: './projects/picopilot/7.jpg'},
        ]
    },

    {
        title: "Snow Globe",
        subTitle: "Santa in a snow globe streaming live on YouTube .",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        descriptionO: "https://www.youtube.com/watch?v=SUc_JAuK9Zs",
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/snowglobe/1.jpg'},
            {type: 'image', url: './projects/snowglobe/2.jpg'},
            {type: 'image', url: './projects/snowglobe/3.jpg'},
            {type: 'image', url: './projects/snowglobe/4.jpg'},
            {type: 'video', url: './projects/snowglobe/5.mp4', poster: './projects/snowglobe/5.jpg'},
            {type: 'video', url: './projects/snowglobe/6.mp4', poster: './projects/snowglobe/6.jpg'},
        ]
    },
    {
        title: "PiCorder",
        subTitle: "RaspberryPi based camcorder",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        descriptionO: "https://www.hackster.io/WKDLabs/picorder-0eb94d",
        type: "carousel",
        slides: [
            {type: 'video', url: './projects/picorder/1.mp4', poster: './projects/picorder/1.jpg'},
        ]
    },
    {
        title: "SonicHero",
        subTitle: "Controlling Sonic Pi with a BluetoothLE Guitar Hero controller",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        descriptionO: "https://github.com/WayneKeenan/SonicHero",
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/sonichero/1.jpg'},
        ]
    },

    {
        title: "MagicEyeVNC",
        subTitle: "Secure VNC Client using autostereogram for visual proximity security",
        // description: generateDescription(
        //     "BLAH",
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         "ONE",
        //         "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/magiceyevnc/1.jpg'},
        ]
    },

    {
        title: "WKD Vanlife",
        subTitle: "Fun Vanlife clothing",
        // description: generateDescription(
        //     "",
        //     [
        //         // "ONE",
        //         // "TWO"
        //     ],
        //     [
        //         // "ONE",
        //         // "TWO"
        //     ],
        //     [
        //         {title: "TITLE", url: "https://URL/"},
        //     ]
        // ),
        type: "carousel",
        slides: [
            {type: 'image', url: './projects/vanlife/1.jpg'},
            {type: 'image', url: './projects/vanlife/2.jpg'},
            {type: 'image', url: './projects/vanlife/3.jpg'},
        ]
    },

];
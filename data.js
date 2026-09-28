/*
  Portfolio content. Edit this file only — index.html just renders it.

  identities  who made the work. A work has one or more.
  roots       what the works grew out of: schools, courses, skills, stages, past
              projects that are not in the gallery. Defined once, referenced by id.
              category  education | course | work | stage | project | skill
              by        who taught or issued it (courses)
              A root may have its own grew_from, same shape as works.
  works       the gallery tiles.

  grew_from[]   { ref, kind, why }   (on works and roots)
    ref   id of a root OR of another work
    kind  foundation | experience | passion | motivation
    why   one short line, shown on the map (optional)

  Link only the step directly before — never jump back to a foundation that
  an earlier step already carries. The chain then reads in time order:
  Ježek Conservatory → K4 → Nevěr mi! → BA → Boreal Flow → JINGI.
  No dead ends: every node must lead somewhere, except the ones marked
  current: true (what is going on now). The page warns in the console otherwise.
  Only store where a node came FROM. "Led to" is computed from these links.
  Every ref and identity is checked on load; mismatches go to the console.

  image  path or URL, 16:9. Leave out and the tile shows plain glass.
  logo   an institution's logo, shown centred on the tile instead of a photo.
  lineup [[instrument, name], …] — who played what, shown in the detail.
  credit what I did, in a few words — shown on the tile under the title.
  shelf  which tab the tile sits under: adaptive | music | recording | worked-with
*/
window.PORTFOLIO = {
  identities: [
    { id: 'musician',   label: 'Musician' },
    { id: 'programmer', label: 'Programmer' },
    { id: 'multimedia', label: 'Multimedia creator' },
    { id: 'technician', label: 'Technician' },
  ],

  roots: [
    { id: 'conservatory', category: 'education', label: 'Jaroslav Ježek Conservatory', years: '2004–2011',
      identities: ['musician'],
      note: 'Jazz / music, major in bass guitar. DiS. Harmony, arrangement, and listening to the whole band rather than the own part.' },
    { id: 'interactive-media', category: 'education', label: 'BA, Theory of Interactive Media', years: '2021–2024',
      identities: ['multimedia'],
      note: 'Masaryk University. Thesis on visual programming in education.',
      links: [{ label: 'Thesis', url: 'https://theses.cz/id/erk1vi/?lang=en' }],
      grew_from: [{ ref: 'nevermi', kind: 'experience' }] },
    { id: 'master', category: 'education', current: true,
      label: 'Master of Sound Design & Multimedia', years: '',
      identities: ['musician', 'multimedia', 'technician'],
      note: 'Master’s studies, in progress.',
      grew_from: [
        { ref: 'robinmood',   kind: 'experience' },
        { ref: 'jingi',       kind: 'experience' },
        { ref: 'zus',         kind: 'experience' },
        { ref: 'hellichovka', kind: 'experience' },
        { ref: 'drums',       kind: 'experience' },
      ] },

    /* courses */
    { id: 'game-badges', category: 'course', label: 'Game badges', years: '',
      by: 'Antti Veräjänkorva — Technical Art Director, Ubisoft Annecy',
      identities: ['programmer', 'multimedia'],
      grew_from: [{ ref: 'csharp-microsoft', kind: 'experience' }],
      note: 'Game engines, coding and technical art.' },
    { id: 'csharp-microsoft', category: 'course', label: 'Foundational C# with Microsoft', years: '2025',
      by: 'Microsoft × freeCodeCamp',
      identities: ['programmer'],
      grew_from: [{ ref: 'unity-creative-core', kind: 'experience' }],
      note: 'Developer certification, completed 3 January 2025.' },
    { id: 'unity-creative-core', category: 'course', label: 'Unity Creative Core', years: '2025',
      by: 'Unity Technologies',
      identities: ['multimedia', 'programmer'],
      grew_from: [{ ref: 'interactive-media', kind: 'passion' }],
      note: 'Badge issued 21 July 2025. Validates the core skills for building immersive worlds in Unity: shaders, materials, lighting, animation, VFX, cameras, post-processing, audio, UI and prototyping.',
      links: [{ label: 'Unity Learn profile', url: 'https://learn.unity.com/u/6505611fedbc2a2d1bdc856d?tab=profile' }] },
  ],

  /* The player under the wall. Put audio files into portfolio/audio/ and list them here.
     description  one or two sentences shown under the tab
     tracks[]  { title, src, year?, note?, link? }
       src   path to the file, e.g. 'audio/in-the-loop/01.mp3'
       link  where the full piece lives (SoundCloud, YouTube…), shown next to the track
     A playlist without tracks is not shown. */
  playlists: [
    { id: 'sound-design', title: 'JINGI — FMOD events',
      description: 'Custom synthesised sound in Ableton Live and parametric, adaptive audio in FMOD events.',
      tracks: [
      { title: 'Start game', src: 'audio/jingi/start_game.mp3', year: 2026, note: 'FMOD event start_game — Cinematic hit as the match opens' },
      { title: 'Turn begin', src: 'audio/jingi/turn_begin.mp3', year: 2026, note: 'FMOD event turn_begin — Cue for the next player’s turn' },
      { title: 'Gripper wake', src: 'audio/jingi/wake.mp3', year: 2026, note: 'FMOD event wake — 4 layers: air, mechanical, sub, electric (+0.5 s)' },
      { title: 'Servo', src: 'audio/jingi/servo.mp3', year: 2026, note: 'FMOD event servo — Gripper movement' },
      { title: 'Drop start', src: 'audio/jingi/drop_start.mp3', year: 2026, note: 'FMOD event drop_start — The die appears' },
      { title: 'Dice hum', src: 'audio/jingi/hum.mp3', year: 2026, note: 'FMOD event hum — Electric hum of the die' },
      { title: 'Dice pickup', src: 'audio/jingi/pickup.mp3', year: 2026, note: 'FMOD event pickup — 5 layers: sub, energy, mechanical, impact, crystal' },
      { title: 'Armed charge', src: 'audio/jingi/armed_charge.mp3', year: 2026, note: 'FMOD event armed_charge — Energy building up' },
      { title: 'Charged', src: 'audio/jingi/on_charged.mp3', year: 2026, note: 'FMOD event on_charged — Throw ready' },
      { title: 'Throw whoosh', src: 'audio/jingi/throw_whoosh.mp3', year: 2026, note: 'FMOD event throw_whoosh — 3 layers: sub, noise, sign' },
      { title: 'Arc flight', src: 'audio/jingi/arc_flight.mp3', year: 2026, note: 'FMOD event arc_flight — The die flying across the arena' },
      { title: 'Travel whoosh', src: 'audio/jingi/travel_whoosh.mp3', year: 2026, note: 'FMOD event travel_whoosh — Long pass' },
      { title: 'Impact', src: 'audio/jingi/impact.mp3', year: 2026, note: 'FMOD event impact — Die hits the loudspeaker arena' },
      { title: 'Drop thud', src: 'audio/jingi/drop_thud.mp3', year: 2026, note: 'FMOD event drop_thud — Die lands' },
      { title: 'Cell place', src: 'audio/jingi/cell_place.mp3', year: 2026, note: 'FMOD event cell_place — Die snaps into the grid' },
      { title: 'Electric chop', src: 'audio/jingi/electric_chop.mp3', year: 2026, note: 'FMOD event electric_chop — Die removed by the opponent' },
      { title: 'Release', src: 'audio/jingi/release_soft.mp3', year: 2026, note: 'FMOD event release_soft — Gripper lets go' },
      { title: 'Toggle swoosh', src: 'audio/jingi/toggle_swoosh.mp3', year: 2026, note: 'FMOD event toggle_swoosh — UI switch' },
      { title: 'Arena loop', src: 'audio/jingi/arena_loop.mp3', year: 2026, note: 'FMOD event arena_loop — Metal room tone of the arena' },
    ] },
    { id: 'jazz', title: 'Jazz',
      description: 'Jazz bands I played bass in — including Bob Cat with the wonderful singer Eliška Macháčová, Jiří Chvojka on piano and Jan Konrad on drums. I ran the sound at every show and recorded the sessions on my own gear.',
      tracks: [
      { title: 'Alice keys', src: 'audio/jazz/alice-keys.mp3', year: 2011, note: 'Demo' },
      { title: 'One', src: 'audio/jazz/one.mp3', year: 2011, note: 'Demo' },
      { title: 'So What', src: 'audio/jazz/so-what.mp3', year: 2014, note: 'Bob Cat — Eliška Macháčová (vocals), Jiří Chvojka (piano), Jan Konrad (drums), Pavel Konrad (bass)' },
      { title: 'Georgia', src: 'audio/jazz/georgia.mp3', year: 2014, note: 'Bob Cat — Eliška Macháčová (vocals), Jiří Chvojka (piano), Jan Konrad (drums), Pavel Konrad (bass)' },
      { title: 'Don’t Know Why', src: 'audio/jazz/dont-know-why.mp3', year: 2014, note: 'Bob Cat — Eliška Macháčová (vocals), Jiří Chvojka (piano), Jan Konrad (drums), Pavel Konrad (bass)' },
      { title: 'Klobouk ve křoví', src: 'audio/jazz/klobouk-ve-krovi.mp3', year: 2014, note: 'Bob Cat — Eliška Macháčová (vocals), Jiří Chvojka (piano), Jan Konrad (drums), Pavel Konrad (bass)' },
    ] },
    { id: 'music',        title: 'Music',        tracks: [] },
    { id: 'recording',    title: 'Recording',    tracks: [] },
    { id: 'drawer',       title: 'From the drawer', tracks: [] },
  ],

  works: [
    {
      id: 'jingi',
      shelf: 'adaptive',
      title: 'JINGI',
      year: 2026,
      identities: ['musician', 'programmer', 'multimedia'],
      image: 'https://i.ytimg.com/vi/seyel3vAcRI/hqdefault.jpg',
      credit: 'Sound & Code',
      role: 'Co-author — code architecture and the complete sound',
      summary: 'A playable Unity prototype of a Knucklebones-style dice game, made with the artist Nx-LabRat. The architecture let the artist work in the editor while code and audio moved in parallel; FMOD events are driven by a C# state machine and every sound is made from scratch.',
      links: [
        { label: 'Case study', url: 'jingi/' },
        { label: 'Gameplay', url: 'https://youtu.be/seyel3vAcRI' },
      ],
      grew_from: [
        { ref: 'boreal',       kind: 'experience', why: 'Unity + FMOD again, bigger' },
        { ref: 'hellichovka',  kind: 'experience' },
        { ref: 'csharp-microsoft', kind: 'foundation', why: 'C# behind the state machine' },
        { ref: 'game-badges',  kind: 'foundation', why: 'engine, code and tech-art thinking' },
      ],
    },
    {
      id: 'nevermi',
      shelf: 'worked-with',
      title: 'Nevěr mi! — credits song',
      year: 2019,
      identities: ['musician', 'technician'],
      image: 'img/nevermi.jpg',
      credit: 'Producer',
      role: 'Producer',
      summary: 'The song over the end credits of the film “Nevěr mi!”.',
      links: [
        { label: 'Listen', url: 'https://soundcloud.com/pavel-konrad-617232716/never-mi' },
        { label: 'nevermi.cz', url: 'https://www.nevermi.cz' },
      ],
      grew_from: [
        { ref: 'k4', kind: 'experience' },
      ],
    },
    {
      id: 'boreal',
      shelf: 'adaptive',
      title: 'Boreal Flow',
      year: 2025,
      identities: ['multimedia', 'programmer', 'musician'],
      image: 'https://i.ytimg.com/vi/Qq6WqQtcyCg/hqdefault.jpg',
      credit: 'Multimedia creator',
      role: 'Sound design and programming',
      summary: 'An interactive audio-photographic exhibition you walk through; photographs and sound respond to the visitor. Built in Unity and FMOD.',
      links: [
        { label: 'Video', url: 'https://youtu.be/Qq6WqQtcyCg' },
        { label: 'Play on itch.io', url: 'https://pavelkonrad.itch.io/artic-journey-boreal-flow' },
      ],
      grew_from: [
        { ref: 'interactive-media', kind: 'foundation', why: 'the theory, put to work' },
        { ref: 'unity-creative-core', kind: 'foundation', why: 'the engine, properly' },
      ],
    },
    {
      id: 'robinmood',
      shelf: 'worked-with',
      title: 'Robin Mood — “Hotel”',
      year: '2021–2023',
      identities: ['musician'],
      image: 'https://i.ytimg.com/vi/_VywZK2KFOQ/hqdefault.jpg',
      credit: 'Sideman — bass guitar',
      role: 'Bass in the touring band',
      summary: 'The last two years of my professional-music period as a member of Robin Mood’s touring band — live shows and the studio recording of the single “Hotel”.',
      links: [
        { label: 'Video', url: 'https://youtu.be/_VywZK2KFOQ' },
        { label: 'Article (novinky.cz)', url: 'https://www.novinky.cz/clanek/kultura-robin-mood-vydava-pisnicku-hotel-sazi-na-emoce-a-pribeh-40421215' },
      ],
      grew_from: [
        { ref: 'conservatory', kind: 'foundation', why: 'jazz bass in a pop band' },
      ],
    },
    {
      id: 'k4',
      shelf: 'music',
      title: 'K4 — jazz band',
      year: '2011–2019',
      identities: ['musician'],
      image: 'img/k4band.jpeg',
      credit: 'Bass guitar',
      role: 'Bass — regular engagement in Germany',
      summary: 'Regular engagement with the jazz band K4, playing in Germany from 2011 to 2019.',
      links: [],
      grew_from: [
        { ref: 'conservatory', kind: 'foundation', why: 'jazz bass, put to work' },
      ],
    },
    {
      id: 'giving-my-life',
      shelf: 'music',
      title: 'I’m giving my life to you',
      year: 2022,
      identities: ['musician'],
      image: 'img/giving.jpg',
      credit: 'Author | Producer',
      role: 'Author and producer',
      summary: 'One of my own favourite pieces. Recorded at Re-sound studio in Liberec.',
      lineup: [
        ['Bass guitar', 'Pavel Konrad'],
        ['Electric guitar', 'Pavel Konrad'],
        ['Lead guitar', 'Václav Moldan'],
        ['Drums', 'Jan Konrad'],
        ['Vocals', 'Robin Puškáš'],
      ],
      links: [
        { label: 'Listen on SoundCloud', url: 'https://soundcloud.com/pavelkonrad/i-m-giving-my-life-to-you' },
      ],
      grew_from: [
        { ref: 'conservatory', kind: 'foundation' },
      ],
    },
    {
      id: 'in-the-loop',
      shelf: 'music',
      title: 'In The Loop — EP',
      year: 2020,
      identities: ['musician', 'technician'],
      image: 'img/in-the-loop.jpg',
      credit: 'Author — mix & master',
      role: 'Author — composition, mix and master',
      summary: 'My own instrumental EP: raw, live-recorded guitars and bass. Written, mixed and mastered by me.',
      links: [
        { label: 'Listen on SoundCloud', url: 'https://soundcloud.com/pavelkonrad/sets/27853a06-6d6d-4724-942c-296b2c8c8ae6' },
      ],
      grew_from: [
        { ref: 'conservatory', kind: 'foundation' },
      ],
    },
    {
      id: 'drums',
      shelf: 'recording',
      title: 'Drums — live session',
      year: 2021,
      identities: ['technician', 'musician'],
      image: 'img/drums.jpg',
      credit: 'Drum recording & mix',
      role: 'AV technician at ZUŠ Milovice',
      summary: 'Live drum session with Vít Blažek, part of ZUŠ Milovice’s series presenting its teachers. Recorded and mixed by me.',
      links: [
        { label: 'Video', url: 'https://youtu.be/QFlFuG0iaBY?t=36' },
      ],
      grew_from: [
        { ref: 'in-the-loop', kind: 'experience', why: 'mixed and mastered my own EP first' },
        { ref: 'interactive-media', kind: 'foundation' },
      ],
    },
    {
      id: 'zus',
      shelf: 'recording',
      title: 'Violin & piano — concert recording',
      year: 2021,
      identities: ['technician'],
      image: 'img/violin-piano.jpg',
      credit: 'Acoustic recording & mix',
      role: 'AV technician at ZUŠ Milovice',
      summary: 'Live chamber concert with Arnold Smrtka and Kristián Badarovský, part of ZUŠ Milovice’s series presenting its teachers. Recorded and mixed by me.',
      links: [
        { label: 'Video', url: 'https://youtu.be/NDpozhLI_ZU' },
      ],
      grew_from: [
        { ref: 'interactive-media', kind: 'foundation' },
      ],
    },
    {
      id: 'hellichovka',
      shelf: 'worked-with',
      title: 'Hellichovka',
      year: '2023–',
      current: true,
      identities: ['multimedia', 'programmer'],
      image: 'img/hellichovka.jpg',
      credit: 'Teacher — visual programming',
      role: 'Secondary Technical School of Graphics, Prague',
      summary: 'Teaching visual programming at the Secondary Technical School of Graphics in Prague.',
      links: [],
      grew_from: [
        { ref: 'interactive-media', kind: 'foundation' },
        { ref: 'prague-conservatory', kind: 'experience' },
      ],
    },
    {
      id: 'marika-singers',
      shelf: 'worked-with',
      title: 'Marika Singers',
      year: '2011–2012',
      identities: ['musician'],
      image: 'img/marika-singers.jpg',
      credit: 'Hired player — bass guitar',
      role: 'Bass in the backing band',
      summary: 'Bass in the backing band of Marika Singers, a vocal ensemble with nearly twenty years on stages in Czechia and across Europe, including the Czech Television Advent concert.',
      links: [
        { label: 'marikasingers.cz', url: 'https://marikasingers.cz/' },
      ],
      grew_from: [
        { ref: 'conservatory', kind: 'foundation' },
      ],
    },
    {
      id: 'prague-conservatory',
      shelf: 'worked-with',
      title: 'Prague Conservatory',
      year: 2022,
      identities: ['programmer'],
      image: 'img/konzervator.webp',
      credit: 'Teacher — computer science',
      role: 'Computer science teacher',
      summary: 'Taught computer science at the Prague Conservatory, the year after the ZUŠ Milovice recordings.',
      links: [],
      grew_from: [
        { ref: 'zus', kind: 'experience' },
      ],
    },
  ],
};

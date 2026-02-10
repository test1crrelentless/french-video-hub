// Seed script for Amouranth videos
import { dbPromise, initDb } from './db.ts';

const amouranthVideos = [
    { "title": "Amouranth Naughty Casting Couch Exposed  Porn Video Leaks Borntobefuck", "thumbnail": "https://content.zavastream.com/019ab6e5-0b71-73ab-aa8f-57a3a1cf8451/375a4b71-6629-4aef-bd7b-75f53555b969/thumbnail.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/375a4b71-6629-4aef-bd7b-75f53555b969/preview.webp" },
    { "title": "Amouranth Performs The Cowgirl Bg Position In This Brand New Exclusive Scene Porn Video Leaks Borntobefuck", "thumbnail": "https://content.zavastream.com/019a9666-c929-72d1-bea1-3d0f8073c2b0/9d071108-d281-401f-8e38-d7b8ed223ac1/thumbnail.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/9d071108-d281-401f-8e38-d7b8ed223ac1/preview.webp" },
    { "title": "Amouranth  Guy To Explosive Cumshot In Leaked VIP Poolside  Porn Video Leaks Borntobefuck", "thumbnail": "https://content.zavastream.com/019ab6e5-0b71-73ab-aa8f-57a3a1cf8451/43e905b3-cb1e-4e21-bdc1-af2a067e648f/thumbnail.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/43e905b3-cb1e-4e21-bdc1-af2a067e648f/preview.webp" },
    { "title": "Amouranth Fantasy Girl BG Is The Leading Lady In This Romantic And Dreamy Story Porn Video Leaks Borntobefuck", "thumbnail": "https://content.zavastream.com/019a9666-c929-72d1-bea1-3d0f8073c2b0/7d02f9cf-c46e-4f38-9f45-82db4f50f6fa/thumbnail.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/7d02f9cf-c46e-4f38-9f45-82db4f50f6fa/preview.webp" },
    { "title": "Amouranth Nude Pussy Fingering Scene Filmed During Private Session Tonight Porn Video Leaks Borntobefuck", "thumbnail": "https://content.zavastream.com/019a9666-c929-72d1-bea1-3d0f8073c2b0/b7c39597-e6d8-4dea-a26b-e933b79a9063/thumbnail.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/b7c39597-e6d8-4dea-a26b-e933b79a9063/preview.webp" },
    { "title": "Amouranth Nude Rubs Her Body Against A Man Until He Reaches An Orgasm Porn Video Leaks Borntobefuck", "thumbnail": "https://content.zavastream.com/019a8714-c701-7067-a40e-cee9c4dcee1b/ffda0309-035d-4325-ba4a-6b107cbca69d/thumbnail.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/ffda0309-035d-4325-ba4a-6b107cbca69d/preview.webp" },
    { "title": "Amouranth Nude Teases As Her Guy Bangs Her From Behind In This Must Watch  Porn Video Leaks Borntobefuck", "thumbnail": "https://content.zavastream.com/019ab6e5-0b71-73ab-aa8f-57a3a1cf8451/4a1e4e7c-227e-47d7-9b72-4f7eee5053b5/thumbnail.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/4a1e4e7c-227e-47d7-9b72-4f7eee5053b5/preview.webp" },
    { "title": "Amouranth Sextape During Dating Tape Sexy Redhead Porn Video Leaks Borntobefuck", "thumbnail": "https://content.zavastream.com/019ab6e5-0b71-73ab-aa8f-57a3a1cf8451/dd541a7f-ddde-4c59-ac97-29ea7e9c429e/thumbnail.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/dd541a7f-ddde-4c59-ac97-29ea7e9c429e/preview.webp" },
    { "title": "Amouranth Masturbating With A Vibrator Porn Video Leaks Borntobefuck", "thumbnail": "https://content.zavastream.com/019ab6e5-0b71-73ab-aa8f-57a3a1cf8451/1a3fdc9b-364e-45c0-84d8-81e713518665/thumbnail.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/1a3fdc9b-364e-45c0-84d8-81e713518665/preview.webp" },
    { "title": "Amouranth Gamer Girlfriend Blowjob Roleplay POV Porn Video Leaks Borntobefuck", "thumbnail": "https://vz-0c578c5b-997.b-cdn.net/519cf0c6-a094-45e5-8c62-e7a82cdf2ed6/thumbnail_c3293a39.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/519cf0c6-a094-45e5-8c62-e7a82cdf2ed6/preview.webp" },
    { "title": "Amouranth Teases In Steamy Oil Shower Porn Video Leaks Borntobefuck", "thumbnail": "https://vz-0c578c5b-997.b-cdn.net/1ab76fef-eefd-4f2f-a85f-ad065b67e13f/thumbnail_eb70c366.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/1ab76fef-eefd-4f2f-a85f-ad065b67e13f/preview.webp" },
    { "title": "Amouranth Nude Sexy Danse Twerk Porn Video Leaks Borntobefuck", "thumbnail": "https://zavastream.com/thumbnails/019ae225-3416-7104-b3ec-17c9ecf21ee2_1764730731.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/4c512713-4637-4b56-b9ec-163ce827f693/preview.webp" },
    { "title": "Amouranth AmoDemonMaster really Wants a Big Cock Porn Video Leaks Borntobefuck", "thumbnail": "https://vz-0c578c5b-997.b-cdn.net/80efeaab-4081-4c3e-af58-d537c287803d/thumbnail.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/80efeaab-4081-4c3e-af58-d537c287803d/preview.webp" },
    { "title": "Amouranth  Blowjob  Cum on Tits Porn Video Leaks Borntobefuck", "thumbnail": "https://vz-0c578c5b-997.b-cdn.net/18bbde0b-0b79-4412-aadc-aa77ea21ad47/thumbnail.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/18bbde0b-0b79-4412-aadc-aa77ea21ad47/preview.webp" },
    { "title": "Amouranth Sextape Halloween Night Porn Video Leaks Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-sextape-halloween-night-porn-video-leaks.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/4c84cd92-71d4-4f72-acd2-bb2b8d876e32/preview.webp" },
    { "title": "Amouranth Porn Big Tit Redhead Fucked in POV by Her Discord Moderator Video Leaks Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-porn-big-tit-redhead-fucked-in-pov-by-her-discord-moderator-video-leaks.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/8017a3e6-237e-4293-a4b1-dab667320767/preview.webp" },
    { "title": "Amouranth BG After Date Porn Video Leaks Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-bg-after-date-porn-video-leaks.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/b3d75935-e326-4035-971a-c20d54bfccef/preview.webp" },
    { "title": "Amouranth Blue Lingerie Striptease Nude Video Leaks Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-blue-lingerie-striptease-nude-video-porn-leaks.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/f86fc4ea-3c30-4086-b2db-1d0f20e7cf84/preview.webp" },
    { "title": "Amouranth Blowjob in the car Porn Video Leaks Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-blowjob-in-the-car-porn-video-leaks.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/e717b0d6-1a6d-4b52-a7b9-f121e0a33843/preview.webp" },
    { "title": "Amouranth Mary Jane Sextape Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-mary-jane-sextape-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/a4b3d256-21cd-4a81-baef-5a895df878d7/preview.webp" },
    { "title": "Amouranth Secretary Sextape VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-secretary-sextape-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/8fb5f7f7-06fe-46f3-85ff-69c3cf758cde/preview.webp" },
    { "title": "Amouranth 1st August Jerkmate Livestream Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-1st-august-jerkmate-livestream-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/45524b05-4bc1-47cd-9ea4-430616a7e6fa/preview.webp" },
    { "title": "Amouranth Casting Couch BG Porn Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-casting-couch-bg-porn-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/20a470f9-5bd5-44cc-8f37-8b0564283439/preview.webp" },
    { "title": "Amouranth Hitachi VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-hitachi-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/56d0620a-c70a-4026-aeb2-d852e60d9cf9/preview.webp" },
    { "title": "Amouranth Pussy Molding Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-pussy-molding-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/86f393c0-7148-4e2f-8420-b25ada3f961e/preview.webp" },
    { "title": "Amouranth Nude Devil PPV Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-nude-devil-ppv-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/68d46d7a-900d-4e53-8010-1f9ecbcf34a9/preview.webp" },
    { "title": "Amouranth Getting Pounded BG Porn Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-getting-pounded-bg-porn-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/adced059-6f7d-420b-9d82-5a3147a1e645/preview.webp" },
    { "title": "Amouranth OF Livestream Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-of-livestream-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/31c6ba1e-f0a9-4bd6-b4b9-7fb5e1f35b7a/preview.webp" },
    { "title": "Amouranth Pussy Rub Porn Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-pussy-rub-porn-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/b346b741-77a7-4a3d-a633-05446dfe152b/preview.webp" },
    { "title": "Amouranth Succubus Porn Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-succubus-porn-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/168d2d5d-33a7-410a-a3df-31ca77aa38b0/preview.webp" },
    { "title": "Amouranth 22nd June Livestream Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-22nd-june-livestream-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/901cb3e3-e858-4364-85b6-8b182aaf6065/preview.webp" },
    { "title": "Amouranth 14th June Livestream Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-14th-june-livestream-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/1819e513-f445-48ca-8910-d53dc341e9ec/preview.webp" },
    { "title": "Amouranth 12th August Red Lingerie VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-12th-august-red-lingerie-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/83b86865-3d46-4d96-bb48-287de1560629/preview.webp" },
    { "title": "Amouranth June JOI Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-june-joi-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/372604d8-cdef-47d8-a7f9-5674ed72b520/preview.webp" },
    { "title": "Amouranth Sims Porn Game Livestream Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-sims-porn-game-livestream-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/ba49cce8-a113-4ebb-a3fe-1e64e7c1e731/preview.webp" },
    { "title": "Amouranth June Sextape VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-june-sextape-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/62d7e4e5-23b9-4dc3-ac7e-e9099e26ba40/preview.webp" },
    { "title": "Amouranth 3 Man Glory Hole VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-3-man-glory-hole-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/04263a20-19eb-481f-b454-13564b9b5c41/preview.webp" },
    { "title": "Amouranth BG Sextape VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-bg-sextape-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/9ae886d8-45aa-4b5a-9f61-f23cfc72ab0a/preview.webp" },
    { "title": "Amouranth See Through Black Top Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-see-through-black-top-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/128eb524-b165-4847-a303-8815d5243353/preview.webp" },
    { "title": "Amouranth Seductive Tease Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-seductive-tease-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/073f2b0a-2db5-47df-865f-0fa50dcfbff9/preview.webp" },
    { "title": "Amouranth Poison Ivy Penetration VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-poison-ivy-penetration-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/352d2a71-9002-4281-afc1-8b22adf97ba9/preview.webp" },
    { "title": "Amouranth 27th April Livestream Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-27th-april-livestream-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/8a93a6e1-60c4-44c1-8869-35cb6d5d05d6/preview.webp" },
    { "title": "Amouranth After Stream Masturbation Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-after-stream-masturbation-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/cc0ca1a4-2147-4abd-a81e-f166741a776f/preview.webp" },
    { "title": "Amouranth JOI Porn Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-joi-porn-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/11a2f00f-1fc5-4381-9773-62353290f4a8/preview.webp" },
    { "title": "Amouranth Pussy Rubbing Tease Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-pussy-rubbing-tease-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/b975c280-3140-486f-b097-aa9639c28f3b/preview.webp" },
    { "title": "Amouranth BG Wet Blowjob Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-bg-wet-blowjob-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/ddd2b39f-6d88-489b-a578-b854cc194ae3/preview.webp" },
    { "title": "Amouranth Harley Quinn JOI Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-harley-quinn-joi-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/5cccfb70-901c-4e13-862b-3149401f66fd/preview.webp" },
    { "title": "Amouranth Full Face Nude Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-full-face-nude-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/d8bcf326-e1d4-4173-bf7b-e91d5d430325/preview.webp" },
    { "title": "Amouranth Hot Tease Onlyfans Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-hot-tease-onlyfans-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/215acb86-6b47-4f60-8aee-579a793e7bb7/preview.webp" },
    { "title": "Amouranth 30th March Livestream Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-30th-march-livestream-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/bdd33b01-f315-4f63-a47e-4a63a5b55a0f/preview.webp" },
    { "title": "Amouranth 10th March Livestream Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-10th-march-livestream-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/81530523-e44b-46a3-87e8-5e05b43d7166/preview.webp" },
    { "title": "Amouranth Jerkmate Hot Tub Livestream Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-jerkmate-hot-tub-livestream-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/7c856b40-6311-4e2a-a66e-904caba59acd/preview.webp" },
    { "title": "Amouranth 24th February Livestream Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-24th-february-livestream-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/0bb5ca6c-2666-4fdf-b41f-32f10a9881c9/preview.webp" },
    { "title": "Amouranth Watching Porn February Live Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-watching-porn-february-live-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/a2f7e02a-ffb7-416c-b84a-fffddb51a9f9/preview.webp" },
    { "title": "Amouranth Touching Myself Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-touching-myself-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/916666c3-23fc-4a9f-9fcb-48b05a35f867/preview.webp" },
    { "title": "Amouranth 11th February Livestream Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-11th-february-livestream-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/23763c5b-51a2-4ce1-b799-a0f518b8b13b/preview.webp" },
    { "title": "Amouranth Sucking Dick Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-sucking-dick-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/1d3808f1-fc3e-4e70-8a2f-0d1a75468059/preview.webp" },
    { "title": "Amouranth 22nd January Jerkmate Live Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-22nd-january-jerkmate-live-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/f19a9a51-26d9-4228-8f13-e220d1bf5641/preview.webp" },
    { "title": "Amouranth 8th January Jerkmate Live Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-8th-january-jerkmate-live-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/5f3f6f0d-1b95-443a-9a64-3b5a3316b9cc/preview.webp" },
    { "title": "Amouranth 26th December Jerkmate Live Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-26th-december-jerkmate-live-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/f9c61c58-11cb-443a-9456-d0d4da3f6818/preview.webp" },
    { "title": "Amouranth Ass Worship VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-ass-worship-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/043a046d-88fe-4a71-8334-7c1aa65c4d46/preview.webp" },
    { "title": "Amouranth New Years Sextape Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-new-years-sextape-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/966a784a-5ef9-4889-8e83-afe8da37f1f3/preview.webp" },
    { "title": "Amouranth Maid Masturbation VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/lena-the-plug-and-mia-malkova-porn-video-leaked-1.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/3248bc8c-a161-49d7-9495-5663e66279d7/preview.webp" },
    { "title": "Amouranth School Girl VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-school-girl-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/ba046b5c-0381-44ee-a955-8082c8203e2f/preview.webp" },
    { "title": "Amouranth Wet Shirt Masturbation VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-wet-shirt-masturbation-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/7950caf6-abee-4f11-9b33-f5facdbaa62b/preview.webp" },
    { "title": "Amouranth 11th September Jerkmate Live Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-11th-september-jerkmate-live-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/556511c2-db3d-4ead-a393-6ba1c5bc7947/preview.webp" },
    { "title": "Amouranth Cosplay VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-cosplay-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/0bb42eeb-01d3-4947-9065-d35b2d55c1fb/preview.webp" },
    { "title": "Amouranth Ass Worship Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-ass-worship-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/aa97ba74-d6d0-4eb0-9a24-4917d2768c79/preview.webp" },
    { "title": "Amouranth Hot Lingerie Tease Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-hot-lingerie-tease-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/411fa132-9884-464e-86a8-f7551aa26907/preview.webp" },
    { "title": "Amouranth Metal Vibrator Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-metal-vibrator-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/7f8efdea-ccb6-447b-9de7-b8fab7096a70/preview.webp" },
    { "title": "Amouranth 9th December Jerkmate Live Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-9th-december-jerkmate-live-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/7acc2e26-d769-441c-99a0-a9ad7f009a17/preview.webp" },
    { "title": "Amouranth Oily Masturbation Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-oily-masturbation-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/c294c830-d07d-4cac-ad37-f4d084d2b673/preview.webp" },
    { "title": "Amouranth 28th November Jerkmate Live Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-28th-november-jerkmate-live-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/2817a93b-e963-4301-9789-e148e03c6885/preview.webp" },
    { "title": "Amouranth Cleopatra JOI Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-cleopatra-joi-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/82b4cb2f-6a16-4a54-816c-42450fa573a8/preview.webp" },
    { "title": "Amouranth 25th September Jerkmate Live Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-25th-september-jerkmate-live-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/7cdf6e88-03d2-48af-9a44-808a55fd1334/preview.webp" },
    { "title": "Amouranth Fuck Machine BG Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-fuck-machine-bg-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/91e8eecd-8177-4f61-bdcc-7d1ec1d74355/preview.webp" },
    { "title": "Amouranth 9th October Jerkmate Live Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-9th-october-jerkmate-live-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/c30a3892-3dfb-47e4-8849-6d6ddf9b8e31/preview.webp" },
    { "title": "Amouranth 13th November Jerkmate Live Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-13th-november-jerkmate-live-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/3ddbdb5f-3e5e-4eed-b2f6-e973acb2d4fb/preview.webp" },
    { "title": "Amouranth BG Shower Sextape Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-bg-shower-sextape-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/99fac6c4-d740-47fd-9080-d89344ba60c1/preview.webp" },
    { "title": "Amouranth Neon Room Sextape Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-neon-room-sextape-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/007120f2-d83a-48cb-94ed-b5949d7de122/preview.webp" },
    { "title": "Amouranth Halloween Orgy Sextape Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-halloween-orgy-sextape-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/b41caaa1-5665-4ed8-9d4f-dddca76d79ee/preview.webp" },
    { "title": "Amouranth 24th October Jerkmate Live Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-24th-october-jerkmate-live-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/283be137-437b-4a92-bc15-5b487f6d92f2/preview.webp" },
    { "title": "Amouranth Gym Sextape Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-gym-sextape-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/d4ef3524-a993-43af-bc7c-4971782023c8/preview.webp" },
    { "title": "Amouranth Sex Therapist Porn Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-sex-therapist-porn-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/8eb655d8-dc8b-4166-a31c-87773b5ebe8c/preview.webp" },
    { "title": "Amouranth Scream Sextape VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-scream-sextape-vip-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/fec273a6-d4fc-458e-978b-c983afd63356/preview.webp" },
    { "title": "Amouranth Orange Lingerie Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-orange-lingerie-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/cc540e72-aa38-460d-9271-c9ef92ebfeca/preview.webp" },
    { "title": "Amouranth Green Vibrator Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-green-vibrator-video-leaked.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/f12a6c5a-1281-4c3c-9fe6-0d7f523c922c/preview.webp" },
    { "title": "Amouranth Pizza Delivery 2023 VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amr-3.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/88f10825-54b8-4b37-879a-29b99b25fd50/preview.webp" },
    { "title": "Amouranth Jerk Off Instructions VIP Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amr-2.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/01e78a8f-967b-41f4-a727-871878358ebc/preview.webp" },
    { "title": "Amouranth Netflix BG Sextape Video Leaked Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amr-1.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/b95f1786-a0cc-4c39-96ed-cb8dbb76b923/preview.webp" },
    { "title": "Amouranth Nude Onlyfans Livestream Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-nude-onlyfans-livestream-video-onlyfans-leaks-born-to-be-fuck.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/674be054-0278-4d52-9a55-87f4ba9365fa/preview.webp" },
    { "title": "Amouranth Hardcore BG Sextape Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-hardcore-bg-sextape-video-onlyfans-leaks-born-to-be-fuck-4.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/2d3cf119-4ac9-4fd5-9614-8eedb39590d3/preview.webp" },
    { "title": "Amouranth BDSM Sextape Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-bdsm-sextape-video-onlyfans-leaks-born-to-be-fuck-btbf.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/fa69fe54-f869-46fd-adcd-3d335bd51624/preview.webp" },
    { "title": "Amouranth Pool Guy BG Sextape Borntobefuck", "thumbnail": "https://cdn.zavastream.com/thumbnails/amouranth-pool-guy-bg-sextape-video-onlyfans-leaks-born-to-be-fuck-btbf.jpg", "preview": "https://vz-0c578c5b-997.b-cdn.net/26ccb12e-a04d-4a18-8a68-94d18bb7ed40/preview.webp" }
];

// Generate random date between 2024-02-08 and 2026-02-08
function randomDate(index: number, total: number): string {
    const startDate = new Date('2024-02-08');
    const endDate = new Date('2026-02-08');
    const range = endDate.getTime() - startDate.getTime();
    // Distribute dates evenly with some randomness
    const offset = (range / total) * index + Math.random() * (range / total / 2);
    const date = new Date(startDate.getTime() + offset);
    return date.toISOString().split('T')[0];
}

// Generate realistic view count
function randomViews(): number {
    // More videos have lower views, fewer have very high views (power law)
    const base = Math.random();
    if (base < 0.6) return Math.floor(Math.random() * 50000) + 5000;      // 5K-55K (60%)
    if (base < 0.85) return Math.floor(Math.random() * 150000) + 50000;  // 50K-200K (25%)
    if (base < 0.95) return Math.floor(Math.random() * 500000) + 200000; // 200K-700K (10%)
    return Math.floor(Math.random() * 2000000) + 500000;                  // 500K-2.5M (5%)
}

// Generate slug from title
function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 60);
}

// Generate random duration (most videos 5-30 min)
function randomDuration(): string {
    const mins = Math.floor(Math.random() * 25) + 5;
    const secs = Math.floor(Math.random() * 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

async function seedAmouranth() {
    // Initialize DB tables first
    await initDb();

    const db = await dbPromise;
    const total = amouranthVideos.length;

    console.log(`Seeding ${total} Amouranth videos...`);

    for (let i = 0; i < amouranthVideos.length; i++) {
        const v = amouranthVideos[i];
        const id = `amo-${Date.now()}-${i}`;
        const slug = generateSlug(v.title);
        const views = randomViews();
        const uploadedAt = randomDate(i, total);
        const duration = randomDuration();
        const cleanTitle = v.title.replace(' Borntobefuck', '').replace(' Porn Video Leaks', '').replace(' Video Leaked', '');

        await db.run(
            `INSERT INTO videos (id, slug, title, description, thumbnail, preview, author, duration, views, uploadedAt, category, hlsUrl)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            id,
            slug,
            cleanTitle,
            `Exclusive Amouranth content`,
            v.thumbnail,
            v.preview,
            'Amouranth',
            duration,
            views,
            uploadedAt,
            'Webcam',
            ''
        );

        // Insert tags
        await db.run('INSERT INTO tags (video_id, tag) VALUES (?, ?)', id, 'Amouranth');
        await db.run('INSERT INTO tags (video_id, tag) VALUES (?, ?)', id, 'Webcam');
        await db.run('INSERT INTO tags (video_id, tag) VALUES (?, ?)', id, 'Redhead');

        console.log(`[${i + 1}/${total}] Added: ${cleanTitle.substring(0, 50)}...`);
    }

    console.log('Done! All Amouranth videos seeded.');
}

seedAmouranth().catch(console.error);


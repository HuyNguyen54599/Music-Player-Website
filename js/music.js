const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    isPlaying: false,
    audio: $('audio'),
    playerBar: $('#music__progress'),
    volumeBar: $('#music__volume'),
    currentIndex: 0,
    repeatStatus: {
        repeat: false,
        loop: false,
        nothing: true
    },
    isRandom: false,
    songsPlayed: [],
    listSong: [
        {
            listSongId: 0,
            songs: [
                {
                    songId: 0,
                    name: 'Колыбельная',
                    singer: 'Rauf & Faik',
                    path: 'music/Lyric Колыбельная Lullaby  Rauf  Faik.mp3',
                    image: 'image/Nga.jpg',
                    duration: '3:41'
                },
                {
                    songId: 1,
                    name: 'Lovely',
                    singer: 'Gawr Gura',
                    path: 'music/Lovely Cover - Gawr Gura .mp3',
                    image: 'image/gura.jpg',
                    duration: '3:21'
                },
                {
                    songId: 2,
                    name: 'Đánh Mất Em',
                    singer: 'Tỉnh Lung',
                    path: 'music/Đánh Mất Em  Tỉnh Lung  丢了你  井胧  Nhạc Hoa tâm trạng  Nhạc Tiktok.mp3',
                    image: 'image/chill01.jpg',
                    duration: '4:37'
                },
                {
                    songId: 3,
                    name: 'Đông Miên',
                    singer: 'Tư Nam',
                    path: 'music/Đông miên Ngủ đông  Tư Nam 冬眠  司南 Nhạc Hoa tâm trạng Nhạc hot Tik tok.mp3',
                    image: 'image/chill02.jpg',
                    duration: '4:29'
                },
                {
                    songId: 4,
                    name: 'HarehareYa',
                    singer: 'Tiểu Mao',
                    path: 'music/HarehareYa - Tiểu Mao.mp3',
                    image: 'image/chill03.jpg',
                    duration: '3:28'
                },
                {
                    songId: 5,
                    name: 'Death Bed',
                    singer: 'Powfu ft beabadoobee',
                    path: 'music/Death Bed  Powfu ft beabadoobee.mp3',
                    image: 'image/deathbed.jpg',
                    duration: '2:54'
                },
                {
                    songId: 6,
                    name: 'Heart Stereo',
                    singer: 'Gym Class Heroes ft Adam Levine',
                    path: 'music/Heart Stereo - Gym Class Heroes  ft Adam Levine.mp3',
                    image: 'image/heartstereo.jpg',
                    duration: '3:35'
                },
                {
                    songId: 7,
                    name: 'Hotaru',
                    singer: 'Fujita Maiko',
                    path: 'music/Hotaru - Fujita Maiko.mp3',
                    image: 'image/hotaru.jpg',
                    duration: '4:54'
                },
                {
                    songId: 8,
                    name: 'Kẻ Điên Tin Vào Tình Yêu Lofi',
                    singer: 'Lil Z Poet x Freak D',
                    path: 'music/Kẻ Điên Tin Vào Tình Yêu Lofi Ver - Lil Z Poet x Freak D.mp3',
                    image: 'image/kẻdd.jpg',
                    duration: '3:45'
                },
                {
                    songId: 9,
                    name: 'Amanojaku',
                    singer: 'Akie秋絵',
                    path: 'music/Kẻ hèn nhát  天ノ弱 Amanojaku by Akie秋絵.mp3',
                    image: 'image/amanojaku.jpg',
                    duration: '4:34'
                }
            ],
        },
        {
            listSongId: 1,
            songs: [
                {
                    songId: 0,
                    name: 'Kokoronashi',
                    singer: '心做し',
                    path: 'music/Kokoronashi - 心做し.mp3',
                    image: 'image/kokoro.jpg',
                    duration: '4:28'
                },
                {
                    songId: 1,
                    name: 'Letter Song',
                    singer: '10 year after',
                    path: 'music/Letter Song - 10 year after.mp3',
                    image: 'image/10year.jpg',
                    duration: '5:38'
                },
                {
                    songId: 2,
                    name: 'Lovely',
                    singer: 'Gawr Gura',
                    path: 'music/Lovely Cover - Gawr Gura .mp3',
                    image: 'image/gura.jpg',
                    duration: '3:21'
                },
                {
                    songId: 3,
                    name: 'Колыбельная',
                    singer: 'Rauf & Faik',
                    path: 'music/Lyric Колыбельная Lullaby  Rauf  Faik.mp3',
                    image: 'image/Nga.jpg',
                    duration: '3:41'
                },
                {
                    songId: 4,
                    name: 'Monsters',
                    singer: 'Katie Sky',
                    path: 'music/Monsters - Katie Sky Lyrics  Vietsub .mp3',
                    image: 'image/monster.jpg',
                    duration: '3:36'
                },
                {
                    songId: 5,
                    name: 'Một Bước Xa Xôi',
                    singer: 'Nhậm Nhiên',
                    path: 'music/Một Bước Xa Xôi 一步之遥 Nhậm NhiênTik Tok.mp3',
                    image: 'image/1buo.png',
                    duration: '5:14'
                },
                {
                    songId: 6,
                    name: 'Nandemonai Ya',
                    singer: 'Lefty Hand Cream',
                    path: 'music/Nandemonai - Lefty Hand Cream.mp3',
                    image: 'image/nandemo.jpg',
                    duration: '6:00'
                },
                {
                    songId: 7,
                    name: 'NUMB',
                    singer: 'Xxxtentacion',
                    path: 'music/NUMB  Xxxtentacion (1).mp3',
                    image: 'image/numb.jpg',
                    duration: '3:05'
                },
                {
                    songId: 8,
                    name: 'Người có thương',
                    singer: 'Hieuz Datkaa ft QT BEATZ FAKE',
                    path: 'music/NGƯỜI CÓ THƯƠNG    LOFI MIX VER BY HIEUZ  DATKAA ft QT BEATZ  FAKE MUSIC VIDEO.mp3',
                    image: 'image/ngcothuong.jpg',
                    duration: '4:34'
                },
            ],
        },
        {
            listSongId: 2,
            songs: [
                {
                    songId: 0,
                    name: 'Past Live',
                    singer: 'Sapientdream',
                    path: 'music/Past Live - sapientdream .mp3',
                    image: 'image/pastlive.jpg',
                    duration: '2:33'
                },
                {
                    songId: 1,
                    name: 'Phận Duyên Lỡ LàngL',
                    singer: 'KProx Phát Huy T4 x Truzg x KProx',
                    path: 'music/Phận Duyên Lỡ LàngLofi Ver by KProx Phát Huy T4 x Truzg x KProx.mp3',
                    image: 'image/Phận.png',
                    duration: '3:45'
                },
                {
                    songId: 2,
                    name: 'Phi Điểu Và Ve Sầu',
                    singer: 'Nhậm Nhiên',
                    path: 'music/Phi Điểu Và Ve Sầu  Nhậm Nhiên  Nhạc Hoa tâm trạng.mp3',
                    image: 'image/phidieu.jpg',
                    duration: '4:53'
                },
                {
                    songId: 3,
                    name: 'The One That Got Away',
                    singer: 'Brielle Von Hugel Katy Perry',
                    path: 'music/The One That Got Away - Brielle Von Hugel Katy Perry Cover.mp3',
                    image: 'image/theonethat.jpg',
                    duration: '4:07'
                },
                {
                    songId: 4,
                    name: 'Vây Giữ',
                    singer: '沦陷 & 王靖雯不胖',
                    path: 'music/Vây Giữ  Vương Tĩnh Văn Không Mập  沦陷  王靖雯不胖.mp3',
                    image: 'image/vây.jpg',
                    duration: '3:58'
                },
                {
                    songId: 5,
                    name: 'Ai Wo Komete',
                    singer: 'Umi Aoi Teshima',
                    path: 'music/Ai Wo Komete - Umi Aoi Teshima.mp3',
                    image: 'image/aiwokomete.jpg',
                    duration: '4:14'
                },
                {
                    songId: 6,
                    name: 'Đông Miên',
                    singer: 'Tư Nam',
                    path: 'music/Đông miên Ngủ đông  Tư Nam 冬眠  司南 Nhạc Hoa tâm trạng Nhạc hot Tik tok.mp3',
                    image: 'image/chill02.jpg',
                    duration: '4:29'
                },
                {
                    songId: 7,
                    name: 'Heart Stereo',
                    singer: 'Gym Class Heroes ft Adam Levine',
                    path: 'music/Heart Stereo - Gym Class Heroes  ft Adam Levine.mp3',
                    image: 'image/heartstereo.jpg',
                    duration: '3:35'
                },
            ],
        },
        {
            listSongId: 3,
            songs: [
                {
                    songId: 0,
                    name: 'Hotaru',
                    singer: 'Fujita Maiko',
                    path: 'music/Hotaru - Fujita Maiko.mp3',
                    image: 'image/hotaru.jpg',
                    duration: '4:54'
                },
                {
                    songId: 1,
                    name: 'Hazy moon',
                    singer: 'Hatsune Miku',
                    path: 'music/Hazy moon - Hatsune Miku.mp3',
                    image: 'image/hazymoon.jpg',
                    duration: '4:15'
                },
                {
                    songId: 2,
                    name: 'Heart Stereo',
                    singer: 'Gym Class Heroes ft Adam Levine',
                    path: 'music/Heart Stereo - Gym Class Heroes  ft Adam Levine.mp3',
                    image: 'image/heartstereo.jpg',
                    duration: '3:35'
                },
                {
                    songId: 3,
                    name: 'Hazy moon',
                    singer: 'Hatsune Miku',
                    path: 'music/Hazy moon - Hatsune Miku.mp3',
                    image: 'image/hazymoon.jpg',
                    duration: '4:15'
                },
                {
                    songId: 4,
                    name: 'Đánh Mất Em',
                    singer: 'Tỉnh Lung',
                    path: 'music/Đánh Mất Em  Tỉnh Lung  丢了你  井胧  Nhạc Hoa tâm trạng  Nhạc Tiktok.mp3',
                    image: 'image/chill01.jpg',
                    duration: '4:37'
                },
                {
                    songId: 5,
                    name: 'Death Bed',
                    singer: 'Powfu ft beabadoobee',
                    path: 'music/Death Bed  Powfu ft beabadoobee.mp3',
                    image: 'image/deathbed.jpg',
                    duration: '2:54'
                },
                {
                    songId: 6,
                    name: 'Amanojaku',
                    singer: 'Akie秋絵',
                    path: 'music/Kẻ hèn nhát  天ノ弱 Amanojaku by Akie秋絵.mp3',
                    image: 'image/amanojaku.jpg',
                    duration: '4:34'
                },
                {
                    songId: 7,
                    name: 'Monsters',
                    singer: 'Katie Sky',
                    path: 'music/Monsters - Katie Sky Lyrics  Vietsub .mp3',
                    image: 'image/monster.jpg',
                    duration: '3:36'
                },
                {
                    songId: 8,
                    name: 'Một Bước Xa Xôi',
                    singer: 'Nhậm Nhiên',
                    path: 'music/Một Bước Xa Xôi 一步之遥 Nhậm NhiênTik Tok.mp3',
                    image: 'image/1buo.png',
                    duration: '5:14'
                },
                {
                    songId: 9,
                    name: 'Колыбельная',
                    singer: 'Rauf & Faik',
                    path: 'music/Lyric Колыбельная Lullaby  Rauf  Faik.mp3',
                    image: 'image/Nga.jpg',
                    duration: '3:41'
                },
                {
                    songId: 10,
                    name: 'Lovely',
                    singer: 'Gawr Gura',
                    path: 'music/Lovely Cover - Gawr Gura .mp3',
                    image: 'image/gura.jpg',
                    duration: '3:21'
                }
            ],
        },
        {
            listSongId: 4,
            songs: [
                {
                    songId: 0,
                    name: 'Lovely',
                    singer: 'Gawr Gura',
                    path: 'music/Lovely Cover - Gawr Gura .mp3',
                    image: 'image/gura.jpg',
                    duration: '3:21'
                },
                {
                    songId: 1,
                    name: 'Колыбельная',
                    singer: 'Rauf & Faik',
                    path: 'music/Lyric Колыбельная Lullaby  Rauf  Faik.mp3',
                    image: 'image/Nga.jpg',
                    duration: '3:41'
                },
                {
                    songId: 2,
                    name: 'Một Bước Xa Xôi',
                    singer: 'Nhậm Nhiên',
                    path: 'music/Một Bước Xa Xôi 一步之遥 Nhậm NhiênTik Tok.mp3',
                    image: 'image/1buo.png',
                    duration: '5:14'
                },
                {
                    songId: 3,
                    name: 'Monsters',
                    singer: 'Katie Sky',
                    path: 'music/Monsters - Katie Sky Lyrics  Vietsub .mp3',
                    image: 'image/monster.jpg',
                    duration: '3:36'
                },
                {
                    songId: 4,
                    name: 'Amanojaku',
                    singer: 'Akie秋絵',
                    path: 'music/Kẻ hèn nhát  天ノ弱 Amanojaku by Akie秋絵.mp3',
                    image: 'image/amanojaku.jpg',
                    duration: '4:34'
                },
                {
                    songId: 5,
                    name: 'Death Bed',
                    singer: 'Powfu ft beabadoobee',
                    path: 'music/Death Bed  Powfu ft beabadoobee.mp3',
                    image: 'image/deathbed.jpg',
                    duration: '2:54'
                },
                {
                    songId: 6,
                    name: 'Đánh Mất Em',
                    singer: 'Tỉnh Lung',
                    path: 'music/Đánh Mất Em  Tỉnh Lung  丢了你  井胧  Nhạc Hoa tâm trạng  Nhạc Tiktok.mp3',
                    image: 'image/chill01.jpg',
                    duration: '4:37'
                },
                {
                    songId: 7,
                    name: 'Đông Miên',
                    singer: 'Tư Nam',
                    path: 'music/Đông miên Ngủ đông  Tư Nam 冬眠  司南 Nhạc Hoa tâm trạng Nhạc hot Tik tok.mp3',
                    image: 'image/chill02.jpg',
                    duration: '4:29'
                },
                {
                    songId: 8,
                    name: 'Heart Stereo',
                    singer: 'Gym Class Heroes ft Adam Levine',
                    path: 'music/Heart Stereo - Gym Class Heroes  ft Adam Levine.mp3',
                    image: 'image/heartstereo.jpg',
                    duration: '3:35'
                },
                {
                    songId: 9,
                    name: 'Hazy moon',
                    singer: 'Hatsune Miku',
                    path: 'music/Hazy moon - Hatsune Miku.mp3',
                    image: 'image/hazymoon.jpg',
                    duration: '4:15'
                },
                {
                    songId: 10,
                    name: 'Hotaru',
                    singer: 'Fujita Maiko',
                    path: 'music/Hotaru - Fujita Maiko.mp3',
                    image: 'image/hotaru.jpg',
                    duration: '4:54'
                }
            ],
        },
        {
            listSongId: 5,
            songs: [
                {
                    songId: 0,
                    name: 'Hotaru',
                    singer: 'Fujita Maiko',
                    path: 'music/Hotaru - Fujita Maiko.mp3',
                    image: 'image/hotaru.jpg',
                    duration: '4:54'
                },
                {
                    songId: 1,
                    name: 'Hazy moon',
                    singer: 'Hatsune Miku',
                    path: 'music/Hazy moon - Hatsune Miku.mp3',
                    image: 'image/hazymoon.jpg',
                    duration: '4:15'
                },
                {
                    songId: 2,
                    name: 'Hazy moon',
                    singer: 'Hatsune Miku',
                    path: 'music/Hazy moon - Hatsune Miku.mp3',
                    image: 'image/hazymoon.jpg',
                    duration: '4:15'
                },
                {
                    songId: 3,
                    name: 'Đánh Mất Em',
                    singer: 'Tỉnh Lung',
                    path: 'music/Đánh Mất Em  Tỉnh Lung  丢了你  井胧  Nhạc Hoa tâm trạng  Nhạc Tiktok.mp3',
                    image: 'image/chill01.jpg',
                    duration: '4:37'
                },
            ],
        },
        {
            listSongId: 6,
            songs: [
                {
                    songId: 0,
                    name: 'Lovely',
                    singer: 'Gawr Gura',
                    path: 'music/Lovely Cover - Gawr Gura .mp3',
                    image: 'image/gura.jpg',
                    duration: '3:21'
                },
                {
                    songId: 1,
                    name: 'Колыбельная',
                    singer: 'Rauf & Faik',
                    path: 'music/Lyric Колыбельная Lullaby  Rauf  Faik.mp3',
                    image: 'image/Nga.jpg',
                    duration: '3:41'
                },
                {
                    songId: 2,
                    name: 'Một Bước Xa Xôi',
                    singer: 'Nhậm Nhiên',
                    path: 'music/Một Bước Xa Xôi 一步之遥 Nhậm NhiênTik Tok.mp3',
                    image: 'image/1buo.png',
                    duration: '5:14'
                },
                {
                    songId: 3,
                    name: 'Death Bed',
                    singer: 'Powfu ft beabadoobee',
                    path: 'music/Death Bed  Powfu ft beabadoobee.mp3',
                    image: 'image/deathbed.jpg',
                    duration: '2:54'
                },
                {
                    songId: 4,
                    name: 'Hazy moon',
                    singer: 'Hatsune Miku',
                    path: 'music/Hazy moon - Hatsune Miku.mp3',
                    image: 'image/hazymoon.jpg',
                    duration: '4:15'
                },
                {
                    songId: 5,
                    name: 'Hazy moon',
                    singer: 'Hatsune Miku',
                    path: 'music/Hazy moon - Hatsune Miku.mp3',
                    image: 'image/hazymoon.jpg',
                    duration: '4:15'
                },
                {
                    songId: 6,
                    name: 'Hotaru',
                    singer: 'Fujita Maiko',
                    path: 'music/Hotaru - Fujita Maiko.mp3',
                    image: 'image/hotaru.jpg',
                    duration: '4:54'
                },
            ],
        },
        {
            listSongId: 7,
            songs: [
                {
                    songId: 0,
                    name: 'Phi Điểu Và Ve Sầu',
                    singer: 'Nhậm Nhiên',
                    path: 'music/Phi Điểu Và Ve Sầu  Nhậm Nhiên  Nhạc Hoa tâm trạng.mp3',
                    image: 'image/phidieu.jpg',
                    duration: '4:53'
                },
                {
                    songId: 1,
                    name: 'The One That Got Away',
                    singer: 'Brielle Von Hugel Katy Perry',
                    path: 'music/The One That Got Away - Brielle Von Hugel Katy Perry Cover.mp3',
                    image: 'image/theonethat.jpg',
                    duration: '4:07'
                },
                {
                    songId: 2,
                    name: 'Vây Giữ',
                    singer: '沦陷 & 王靖雯不胖',
                    path: 'music/Vây Giữ  Vương Tĩnh Văn Không Mập  沦陷  王靖雯不胖.mp3',
                    image: 'image/vây.jpg',
                    duration: '3:58'
                },
                {
                    songId: 3,
                    name: 'Ai Wo Komete',
                    singer: 'Umi Aoi Teshima',
                    path: 'music/Ai Wo Komete - Umi Aoi Teshima.mp3',
                    image: 'image/aiwokomete.jpg',
                    duration: '4:14'
                },
                {
                    songId: 4,
                    name: 'Đông Miên',
                    singer: 'Tư Nam',
                    path: 'music/Đông miên Ngủ đông  Tư Nam 冬眠  司南 Nhạc Hoa tâm trạng Nhạc hot Tik tok.mp3',
                    image: 'image/chill02.jpg',
                    duration: '4:29'
                },
                {
                    songId: 5,
                    name: 'Heart Stereo',
                    singer: 'Gym Class Heroes ft Adam Levine',
                    path: 'music/Heart Stereo - Gym Class Heroes  ft Adam Levine.mp3',
                    image: 'image/heartstereo.jpg',
                    duration: '3:35'
                },
                {
                    songId: 6,
                    name: 'Past Live',
                    singer: 'Sapientdream',
                    path: 'music/Past Live - sapientdream .mp3',
                    image: 'image/pastlive.jpg',
                    duration: '2:33'
                }
            ],
        },
        {
            listSongId: 8,
            songs: [
                {
                    songId: 0,
                    name: 'Death Bed',
                    singer: 'Powfu ft beabadoobee',
                    path: 'music/Death Bed  Powfu ft beabadoobee.mp3',
                    image: 'image/deathbed.jpg',
                    duration: '2:54'
                },
                {
                    songId: 1,
                    name: 'Ai Wo Komete',
                    singer: 'Umi Aoi Teshima',
                    path: 'music/Ai Wo Komete - Umi Aoi Teshima.mp3',
                    image: 'image/aiwokomete.jpg',
                    duration: '4:14'
                },
                {
                    songId: 2,
                    name: 'Đánh Mất Em',
                    singer: 'Tỉnh Lung',
                    path: 'music/Đánh Mất Em  Tỉnh Lung  丢了你  井胧  Nhạc Hoa tâm trạng  Nhạc Tiktok.mp3',
                    image: 'image/chill01.jpg',
                    duration: '4:37'
                },
                {
                    songId: 3,
                    name: 'Đông Miên',
                    singer: 'Tư Nam',
                    path: 'music/Đông miên Ngủ đông  Tư Nam 冬眠  司南 Nhạc Hoa tâm trạng Nhạc hot Tik tok.mp3',
                    image: 'image/chill02.jpg',
                    duration: '4:29'
                },
                {
                    songId: 4,
                    name: 'HarehareYa',
                    singer: 'Tiểu Mao',
                    path: 'music/HarehareYa - Tiểu Mao.mp3',
                    image: 'image/chill03.jpg',
                    duration: '3:28'
                },
                {
                    songId: 5,
                    name: 'Hazy moon',
                    singer: 'Hatsune Miku',
                    path: 'music/Hazy moon - Hatsune Miku.mp3',
                    image: 'image/hazymoon.jpg',
                    duration: '4:15'
                },
                {
                    songId: 6,
                    name: 'Heart Stereo',
                    singer: 'Gym Class Heroes ft Adam Levine',
                    path: 'music/Heart Stereo - Gym Class Heroes  ft Adam Levine.mp3',
                    image: 'image/heartstereo.jpg',
                    duration: '3:35'
                },
                {
                    songId: 7,
                    name: 'Hotaru',
                    singer: 'Fujita Maiko',
                    path: 'music/Hotaru - Fujita Maiko.mp3',
                    image: 'image/hotaru.jpg',
                    duration: '4:54'
                },
                {
                    songId: 8,
                    name: 'Kẻ Điên Tin Vào Tình Yêu Lofi',
                    singer: 'Lil Z Poet x Freak D',
                    path: 'music/Kẻ Điên Tin Vào Tình Yêu Lofi Ver - Lil Z Poet x Freak D.mp3',
                    image: 'image/kẻdd.jpg',
                    duration: '3:45'
                },
            ],
        },
        {
            listSongId: 9,
            songs: [
                {
                    songId: 0,
                    name: 'Amanojaku',
                    singer: 'Akie秋絵',
                    path: 'music/Kẻ hèn nhát  天ノ弱 Amanojaku by Akie秋絵.mp3',
                    image: 'image/amanojaku.jpg',
                    duration: '4:34'
                },
                {
                    songId: 1,
                    name: 'Kokoronashi',
                    singer: '心做し',
                    path: 'music/Kokoronashi - 心做し.mp3',
                    image: 'image/kokoro.jpg',
                    duration: '4:28'
                },
                {
                    songId: 2,
                    name: 'Letter Song',
                    singer: '10 year after',
                    path: 'music/Letter Song - 10 year after.mp3',
                    image: 'image/10year.jpg',
                    duration: '5:38'
                },
                {
                    songId: 3,
                    name: 'Lovely',
                    singer: 'Gawr Gura',
                    path: 'music/Lovely Cover - Gawr Gura .mp3',
                    image: 'image/gura.jpg',
                    duration: '3:21'
                },
                {
                    songId: 4,
                    name: 'Колыбельная',
                    singer: 'Rauf & Faik',
                    path: 'music/Lyric Колыбельная Lullaby  Rauf  Faik.mp3',
                    image: 'image/Nga.jpg',
                    duration: '3:41'
                },
                {
                    songId: 5,
                    name: 'Monsters',
                    singer: 'Katie Sky',
                    path: 'music/Monsters - Katie Sky Lyrics  Vietsub .mp3',
                    image: 'image/monster.jpg',
                    duration: '3:36'
                },
                {
                    songId: 6,
                    name: 'Một Bước Xa Xôi',
                    singer: 'Nhậm Nhiên',
                    path: 'music/Một Bước Xa Xôi 一步之遥 Nhậm NhiênTik Tok.mp3',
                    image: 'image/1buo.png',
                    duration: '5:14'
                },
                {
                    songId: 7,
                    name: 'Nandemonai Ya',
                    singer: 'Lefty Hand Cream',
                    path: 'music/Nandemonai - Lefty Hand Cream.mp3',
                    image: 'image/nandemo.jpg',
                    duration: '6:00'
                },
                {
                    songId: 8,
                    name: 'NUMB',
                    singer: 'Xxxtentacion',
                    path: 'music/NUMB  Xxxtentacion (1).mp3',
                    image: 'image/numb.jpg',
                    duration: '3:05'
                },
                {
                    songId: 9,
                    name: 'Người có thương',
                    singer: 'Hieuz Datkaa ft QT BEATZ FAKE',
                    path: 'music/NGƯỜI CÓ THƯƠNG    LOFI MIX VER BY HIEUZ  DATKAA ft QT BEATZ  FAKE MUSIC VIDEO.mp3',
                    image: 'image/ngcothuong.jpg',
                    duration: '4:34'
                },
            ],
        },
    ],

    songs: [
        {
            songId: 0,
            name: 'Lovely',
            singer: 'Gawr Gura',
            path: 'music/Lovely Cover - Gawr Gura .mp3',
            image: 'image/gura.jpg',
            duration: '3:21'
        },
        {
            songId: 1,
            name: 'Колыбельная',
            singer: 'Rauf & Faik',
            path: 'music/Lyric Колыбельная Lullaby  Rauf  Faik.mp3',
            image: 'image/Nga.jpg',
            duration: '3:41'
        },
        {
            songId: 2,
            name: 'Một Bước Xa Xôi',
            singer: 'Nhậm Nhiên',
            path: 'music/Một Bước Xa Xôi 一步之遥 Nhậm NhiênTik Tok.mp3',
            image: 'image/1buo.png',
            duration: '5:14'
        },
        {
            songId: 3,
            name: 'Monsters',
            singer: 'Katie Sky',
            path: 'music/Monsters - Katie Sky Lyrics  Vietsub .mp3',
            image: 'image/monster.jpg',
            duration: '3:36'
        },
        {
            songId: 4,
            name: 'Amanojaku',
            singer: 'Akie秋絵',
            path: 'music/Kẻ hèn nhát  天ノ弱 Amanojaku by Akie秋絵.mp3',
            image: 'image/amanojaku.jpg',
            duration: '4:34'
        },
        {
            songId: 5,
            name: 'Death Bed',
            singer: 'Powfu ft beabadoobee',
            path: 'music/Death Bed  Powfu ft beabadoobee.mp3',
            image: 'image/deathbed.jpg',
            duration: '2:54'
        },
        {
            songId: 6,
            name: 'Hazy moon',
            singer: 'Hatsune Miku',
            path: 'music/Hazy moon - Hatsune Miku.mp3',
            image: 'image/hazymoon.jpg',
            duration: '4:15'
        },
    ],

    albums: [
        {
            albumId: 0,
            listSongId: 0,
            avatar: 'image/gura.jpg',
            title: 'HololiveEN Myth',
            author: "Ninomae Ina'nis",
            comments: '15K',
            hearts: '565',
            view: '88',
        },
        {
            albumId: 1,
            listSongId: 1,
            avatar: 'image/deathbed.jpg',
            title: 'HololiveEN Myth',
            author: "Ninomae Ina'nis",
            comments: '15K',
            hearts: '565',
            view: '88',
        },
        {
            albumId: 2,
            listSongId: 2,
            avatar: 'image/amanojaku.jpg',
            title: 'HololiveEN Myth',
            author: "Ninomae Ina'nis",
            comments: '15K',
            hearts: '565',
            view: '88',
        },
        {
            albumId: 3,
            listSongId: 3,
            avatar: 'image/chill01.jpg',
            title: 'HololiveEN Myth',
            author: "Ninomae Ina'nis",
            comments: '15K',
            hearts: '565',
            view: '88',
        },
        {
            albumId: 4,
            listSongId: 4,
            avatar: 'image/chill02.jpg',
            title: 'HololiveEN Myth',
            author: "Ninomae Ina'nis",
            comments: '15K',
            hearts: '565',
            view: '88',
        },
        {
            albumId: 5,
            listSongId: 5,
            avatar: 'image/hazymoon.jpg',
            title: 'HololiveEN Myth',
            author: "Ninomae Ina'nis",
            comments: '15K',
            hearts: '565',
            view: '88',
        },
        {
            albumId: 6,
            listSongId: 6,
            avatar: 'image/hotaru.jpg',
            title: 'HololiveEN Myth',
            author: "Ninomae Ina'nis",
            comments: '15K',
            hearts: '565',
            view: '88',
        },
        {
            albumId: 7,
            listSongId: 7,
            avatar: 'image/pastlive.jpg',
            title: 'HololiveEN Myth',
            author: "Ninomae Ina'nis",
            comments: '15K',
            hearts: '565',
            view: '88',
        },
        {
            albumId: 8,
            listSongId: 8,
            avatar: 'image/heartstereo.jpg',
            title: 'HololiveEN Myth',
            author: "Ninomae Ina'nis",
            comments: '15K',
            hearts: '565',
            view: '88',
        },
        {
            albumId: 9,
            listSongId: 9,
            avatar: 'image/Phận.png',
            title: 'HololiveEN Myth',
            author: "Ninomae Ina'nis",
            comments: '15K',
            hearts: '565',
            view: '88',
        },
    ],

    //Load list song and albumactive after click album
    getListSongAndAlbum: function (albumId) {
        const listSongActive = [...this.listSong].find(list => {
            return list.listSongId == albumId;
        });

        const albumActive = [...this.albums].find(album => {
            return album.albumId == albumId;
        });
        return { listSongActive, albumActive };
    },

    //Add Info for Album active after click
    renderAlbumActive: function (album) {
        $('.author__album .album__img').setAttribute('src', album.avatar);
        $('.author__album .album__title').innerHTML = album.title;
        $('.author__album .album__author').innerHTML = album.author;
        $('.author__album .views__reviews').innerHTML = album.comments;
        $('.author__album .like__reviews').innerHTML = album.hearts;
        $('.author__album .list__reviews').innerHTML = album.view;
    },

    // Setup-Handle the "process overlay" for "custom input range"
    handleProcessBar: function (input) {
        const barProcess = input.parentElement.querySelector('.bar__process')
        const inputMax = input.getAttribute('max');
        const inputValue = input.value;
        barProcess.style.width = (inputValue / inputMax) * 100 + '%';
    },

    // Find song by their id or currentIndex
    findSongAppByEqual: function (value) {
        const songActive = app.songs.find(song => {
            return song.songId == value;
        });
        return songActive;
    },

    // Find and update song src for audio by id/currentIndex
    updateAudioSrc: function (elementId = this.currentIndex) {
        songActive = this.findSongAppByEqual(elementId)
        this.audio.setAttribute('src', songActive.path);
    },

    // Update currentIndex by song id
    resetCurrentSong: function (elementId) {
        songActive = this.findSongAppByEqual(elementId)
        this.currentIndex = app.songs.indexOf(songActive);
    },

    //Change title song and some info
    renderCurrentSongInfo: function () {
        const songTitle = $('.player__name');
        const songAuthor = $('.player__author');
        const songTime = $('.music__time');
        const songImg = $('.player__title img');

        songTitle.innerHTML = this.songs[this.currentIndex].name;
        songAuthor.innerHTML = this.songs[this.currentIndex].singer;
        songTime.innerHTML = this.songs[this.currentIndex].duration;
        songImg.setAttribute('src', this.songs[this.currentIndex].image);
    },

    //Just Spin Music Image
    handleSpinMusicImage: function () {
        const songImage = $('.player__title img');
        songImage.classList.add('spin__time');
        songImage.style.animationPlayState = '';
    },

    handlePauseMusicImage: function () {
        const songImage = $('.player__title img');
        songImage.style.animationPlayState = 'paused';
    },

    handleResetSpinMusicImage: function () {
        const songImage = $('.player__title img');
        if (songImage.classList.contains('another__spin__time')) {
            songImage.classList.remove('another__spin__time');
            songImage.classList.add('spin__time');
        } else if (songImage.classList.contains('spin__time')) {
            songImage.classList.remove('spin__time');
            songImage.classList.add('another__spin__time');
        }
    },

    // Get and Set time playing
    handleSongTime: function () {
        const time = $('.music__time');
        var toMinute = (Math.floor(this.audio.currentTime / 60));
        var secondLeft = `0${Math.floor(this.audio.currentTime % 60)}`;
        time.innerHTML = `-${toMinute}:${secondLeft.toString().slice(-2)}`;
    },

    // Change button to play and update isPlaying properties
    changeToButtonPlay: function () {
        const BoxTogglePlay = $('.control__toggle');
        BoxTogglePlay.classList.remove('is__pause');
        BoxTogglePlay.classList.remove('is__play');
        BoxTogglePlay.classList.add('is__play');
        this.isPlaying = true;
    },

    // Change button to pause and update isPlaying properties
    changeToButtonPause: function () {
        const BoxTogglePlay = $('.control__toggle');
        BoxTogglePlay.classList.remove('is__play');
        BoxTogglePlay.classList.remove('is__pause');
        BoxTogglePlay.classList.add('is__pause');
        this.isPlaying = false;
    },

    // random Index 
    randomIndex: function () {
        const min = 0
        const max = this.songs.length;
        var random;
        do {
            random = Math.floor(Math.random() * (max - min) + min);
        } while (random === this.currentIndex);
        this.currentIndex = random;
    },

    /* Player Bar when: 
        - Timeupdate Song
        - Time changing
        - After end song(random/repeat/loop/base)
    */
    handlePlayerBarRun: function () {
        this.audio.ontimeupdate = () => {
            this.playerBar.value = Math.floor((this.audio.currentTime / this.audio.duration) * 100);
            this.handleProcessBar(this.playerBar);
            this.handleSongTime();

            //Change to pause when end song if nothing happened and reset spin
            if (this.playerBar.value == this.playerBar.getAttribute('max')) {
                this.handleResetSpinMusicImage();
                this.playerBar.value = this.playerBar.getAttribute('min');
                this.changeToButtonPause();
                this.handleProcessBar(this.playerBar);
            }

            //End song -> checking all case -> navigation to another song
            if (this.audio.currentTime === this.audio.duration) {
                //Case: random? - random and repeat?
                if (this.isRandom) {
                    if (this.repeatStatus.repeat) {
                        this.playerBar.value = this.playerBar.getAttribute('min');
                        this.handleProcessBar(this.playerBar);
                        this.startPlayMusic();
                    } else {
                        this.randomIndex();
                        this.updateAudioSrc();
                        this.startPlayMusic();
                    }
                }
                //Case: repeat?
                if (this.repeatStatus.repeat) {
                    this.playerBar.value = this.playerBar.getAttribute('min');
                    this.handleProcessBar(this.playerBar);
                    this.startPlayMusic();
                }

                //Case: loop?
                if (this.repeatStatus.loop) {
                    if (this.currentIndex === this.songs.length - 1) {
                        this.currentIndex = 0;
                        console.log(this.currentIndex)
                        this.playerBar.value = this.playerBar.getAttribute('min');
                        this.handleProcessBar(this.playerBar);
                        this.updateAudioSrc(this.currentIndex);
                        this.startPlayMusic();
                    } else {
                        this.currentIndex = this.currentIndex + 1;
                        this.playerBar.value = this.playerBar.getAttribute('min');
                        this.handleProcessBar(this.playerBar);
                        this.updateAudioSrc();
                        this.startPlayMusic();
                    }
                }

                //Case: nothing?
                if (this.repeatStatus.nothing) {
                    if (this.currentIndex === this.songs.length - 1) {
                        this.currentIndex = 0;
                        this.playerBar.value = this.playerBar.getAttribute('min');
                        this.handleProcessBar(this.playerBar);
                        this.updateAudioSrc();
                    } else {
                        this.currentIndex = this.currentIndex + 1;
                        this.playerBar.value = this.playerBar.getAttribute('min');
                        this.handleProcessBar(this.playerBar);
                        this.updateAudioSrc();
                        this.startPlayMusic();
                    }

                }

                this.saveListSongHaveBeenPlaying();
            }
        }
    },

    //Play Song -> Change title song -> Spin music img -> handle player bar include event -> change button to play
    startPlayMusic: function () {
        this.audio.play();
        this.isPlaying = true;
        this.renderCurrentSongInfo();
        this.handleSpinMusicImage();
        this.handlePlayerBarRun();
        this.changeToButtonPlay();
    },

    // set volume bar handler
    setVolumeFull: function (volumeValue = 100) {
        volumeBox.classList.remove('volume__state--full');
        volumeBox.classList.remove('volume__state--low');
        volumeBox.classList.remove('volume__state--none');
        volumeBox.classList.add('volume__state--full');
        this.audio.volume = volumeValue / 100;
        this.volumeBar.value = volumeValue;
        this.handleProcessBar(this.volumeBar);
    },

    // set volume bar handler
    setVolumeLow: function (volumeValue = 49) {
        volumeBox.classList.remove('volume__state--full');
        volumeBox.classList.remove('volume__state--low');
        volumeBox.classList.remove('volume__state--none');
        volumeBox.classList.add('volume__state--low');
        this.audio.volume = volumeValue / 100;
        this.volumeBar.value = volumeValue;
        this.handleProcessBar(this.volumeBar);
    },

    // set volume bar handler
    setVolumeNone: function (volumeValue = 0) {
        volumeBox.classList.remove('volume__state--full');
        volumeBox.classList.remove('volume__state--low');
        volumeBox.classList.remove('volume__state--none');
        volumeBox.classList.add('volume__state--none');
        this.audio.volume = volumeValue / 100;
        this.volumeBar.value = volumeValue;
        this.handleProcessBar(this.volumeBar);
    },

    // Media tool handler
    stopPlayMusic: function () {
        this.audio.pause();
        this.isPlaying = false;
        this.handlePauseMusicImage();
    },

    pauseController: function () {
        this.isPlaying = false;
        this.stopPlayMusic();
    },

    playController: function () {
        const this__app = this;
        const BoxTogglePlay = $('.control__toggle');
        BoxTogglePlay.onclick = () => {
            if (!this__app.isPlaying) {
                this__app.changeToButtonPlay();
                this__app.startPlayMusic();
            } else {
                this__app.changeToButtonPause();
                this.pauseController();
            }

        }
    },

    nextController: function () {
        const this__app = this;
        const nextButton = $('.control__nav .bx-skip-next');

        nextButton.onclick = () => {
            this.handleResetSpinMusicImage();
            //End of list?
            if (this__app.currentIndex === (this__app.songs.length - 1)) {
                this__app.currentIndex = 0;
                this__app.updateAudioSrc();
                this__app.startPlayMusic();
            } else {
                this__app.currentIndex = this__app.currentIndex + 1;
                this__app.updateAudioSrc();
                this__app.startPlayMusic();
            }

            //Is random?
            if (this__app.randomController()) {
                this__app.randomIndex();
                this__app.updateAudioSrc();
                this__app.startPlayMusic();
            }

            this.saveListSongHaveBeenPlaying();
        };
    },

    // Change and set random status on app
    randomController: function () {
        const this__app = this;
        const randomButton = $('.control__nav .bx-shuffle');
        randomButton.onclick = () => {
            randomButton.classList.toggle('active__random');
            randomButton.classList.contains('active__random') ? this__app.isRandom = true : this__app.isRandom = false;
        }
        return this.isRandom;
    },

    // Change and set repeat status on app
    repeatController: function () {
        const this__app = this;
        const repeatButton = $('.control__nav .bx-repeat');
        repeatButton.onclick = () => {
            switch (true) {
                case repeatButton.classList.contains('active__repeat'):
                    repeatButton.classList.remove('active__repeat');
                    this__app.repeatStatus.nothing = true;
                    this__app.repeatStatus.repeat = false;
                    this__app.repeatStatus.loop = false;
                    break;
                case repeatButton.classList.contains('active__loop'):
                    repeatButton.classList.remove('active__loop');
                    repeatButton.classList.add('active__repeat');
                    this__app.repeatStatus.nothing = false;
                    this__app.repeatStatus.repeat = true;
                    this__app.repeatStatus.loop = false;
                    break;
                default:
                    repeatButton.classList.add('active__loop');
                    this__app.repeatStatus.nothing = false;
                    this__app.repeatStatus.repeat = false;
                    this__app.repeatStatus.loop = true;
                    break;
            }
        }
    },

    previousController: function () {
        const this__app = this;
        const previousButton = $('.control__nav .bx-skip-previous');

        previousButton.onclick = () => {
            //current != 0?
            if (this__app.songsPlayed.length > 0) {
                this__app.songsPlayed.pop();
                this__app.currentIndex = this__app.songsPlayed[this__app.songsPlayed.length - 1] || 0;
                this__app.updateAudioSrc();
                this__app.startPlayMusic();
            } else {
                this__app.currentIndex = 0;
                this__app.updateAudioSrc();
                this__app.startPlayMusic();
            }

        }
    },
    //End  Media tool handler

    /*Save when:
        - Choose another song
        - Next song
        - End song
    */
    saveListSongHaveBeenPlaying: function () {
        if (this.songsPlayed[this.songsPlayed.length - 1] != this.currentIndex) {
            this.songsPlayed.push(this.currentIndex);
        }
    },

    //Main Methods - 00: Render album list and add event listener - rerender and change song list - reset chooes song play - keep start play music
    renderAlbumList: function () {
        const listElement = this.albums.map(album => {
            return `<li class="album__item" album-id = '${album.albumId}'>
                        <div class="album__package">
                            <div class="overlay__package"></div>
                            <img src="${album.avatar}" class="album__img">
                            <img src="image/Vinyl record.png" alt="album disk" class="album__cd">
                        </div>
                        <div class="album__content">
                            <p class="album__title">${album.title}</p>
                            <p class="album__author">${album.author}</p>
                            <ul class="reviews__list">
                                <li class="reviews__element">
                                    <i class='bx bxs-spa'></i>
                                    <p class="views__reviews">${album.comments}</p>
                                </li>
                                <li class="reviews__element">
                                    <i class='bx bxs-heart'></i>
                                    <p class="like__reviews">${album.hearts}</p>
                                </li>
                                <li class="reviews__element">
                                    <i class='bx bxs-analyse'></i>
                                    <p class="list__reviews">${album.view}</p>
                                </li>
                            </ul>
                        </div>
                    </li>`
        });

        $('.albums__list').innerHTML = listElement.join('\n');

        [...$$('.album__item')].forEach(album => {
            album.onclick = () => {
                const { listSongActive, albumActive } = this.getListSongAndAlbum(album.getAttribute('album-id'));
                this.renderAlbumActive(albumActive);
                this.renderMusicList(listSongActive.songs);
                this.chooseSongPlay(listSongActive);
                console.log(listSongActive, albumActive)
            }
        });
    },

    //Main Methods - 01: Render music list and set up player bar + volume bar
    renderMusicList: function (anyList = null) {
        if (anyList) {
            const listElement = anyList.map(song => {
                return `<li class="song__item" song-id = ${song.songId}>
                            <i class='bx bxs-caret-right-circle song__play'></i>
                            <p class="song__name">${song.name} - ${song.singer}</p>
                            <span class="song__time">${song.duration}</span>
                        </li>`;
            })
            $('.song__list').innerHTML = listElement.join('\n');
        } else {
            const listElement = this.songs.map(song => {
                return `<li class="song__item" song-id = ${song.songId}>
                            <i class='bx bxs-caret-right-circle song__play'></i>
                            <p class="song__name">${song.name} - ${song.singer}</p>
                            <span class="song__time">${song.duration}</span>
                        </li>`;
            })
            $('.song__list').innerHTML = listElement.join('\n');
        }

        this.handleProcessBar(this.playerBar);
        this.handleProcessBar(this.volumeBar);
    },

    //Main Methods - 02: Handle choose song on list(update audio -> reset current -> play)
    chooseSongPlay: function (onDifferentAlbums = false) {
        this__app = this;
        const songListElementArr = [...$$('.song__item')];

        songListElementArr.forEach(song => {
            song.onclick = () => {
                if (onDifferentAlbums) {
                    this.songs = onDifferentAlbums.songs;
                    this.songsPlayed.splice(0);
                }
                this.handleResetSpinMusicImage();
                this__app.updateAudioSrc(song.getAttribute('song-id'));
                this__app.resetCurrentSong(song.getAttribute('song-id'));
                this__app.startPlayMusic();
                this.saveListSongHaveBeenPlaying();

            }
        })
    },

    //Main Methods - 03: Handle event change time player bar
    changeCurrentTimePlayerBar: function () {
        this__app = this;
        this.playerBar.oninput = (e) => {
            //None song
            if (!this__app.audio.currentTime) return;

            //change currentTime
            this__app.audio.currentTime = this__app.audio.duration * e.target.value / 100;

            //keep playing after change currentTime
            if (this__app.isPlaying) {
                this__app.startPlayMusic();
            }
            this__app.handleProcessBar(this.playerBar);
        }

        this.playerBar.onclick = () => {
            this__app.handleProcessBar(this.playerBar);
        }
    },

    //Main Methods - 04: Handle event change value volume bar
    handleVolume: function () {
        this__app = this;
        volumeBox = $('.volume__status');

        /*Set volume:
            0 : none volume
            [0, 50] : low volume 
            (50, 100]: full volume
        */
        this.volumeBar.oninput = (e) => {
            if (this__app.volumeBar.value > 50) {
                this__app.setVolumeFull(e.target.value);
            } else if (this__app.volumeBar.value > 0 && this__app.volumeBar.value < 50) {
                this__app.setVolumeLow(e.target.value);
            } else {
                this__app.setVolumeNone(e.target.value);
            }
        }

        //handle on volume icon from 0 to 100
        volumeBox.onclick = () => {
            if (volumeBox.classList.contains('volume__state--full') || volumeBox.classList.contains('volume__state--low')) {
                this__app.setVolumeNone();

            } else {
                this__app.setVolumeFull();
            }
        }
    },

    //Main Methods - 05: Handle tool music media controller
    musicMediaControl: function () {
        this.playController();
        this.pauseController();
        this.nextController();
        this.previousController();
        this.randomController();
        this.repeatController();
    },


    start() {
        this.renderAlbumList();
        this.renderMusicList();
        this.chooseSongPlay();
        this.changeCurrentTimePlayerBar();
        this.handleVolume();
        this.musicMediaControl();
    }
}

app.start();

//New obj contains albums{id, avatar, title, author, comment, heart, view, countSong}
//click -> load song from this to this -> active thats/ innerHTML to list song 
//change albums active
// click and run function renderMusicList()<-> can we paste count or id inside it, to render correct 
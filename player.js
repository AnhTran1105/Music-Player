const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const aTags = $$('a');
const player = $('.player');
const playlist = $('.playlist');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const thumbIP = $('.thumb-IP');
const audio = $('#audio');
const footer = $('.footer');
const cd = $('.cd');
const dashboardProgress = $('.dashboard-progress-bar');
const dashboardProgressed = $('.dashboard-progressed');
const progressed = $('.progressed');
const audioProgress = $('.audio-progress');
const title = $('.title');
const author = $('.author');
const logOutOfMore = $('.more .log-out');
const AudioInProgress = $('.AudioInProgress');
const PLAYER_STORAGE_KEY = 'F8-player';
const homePlaylists = $('.content-playlists.home');
const personSocial = $('.person-social');
const contentPlaylists = $('.content-playlists')
const songHistory = $('.song-history');
const currentSong = $('.current-song');

// list of buttons
const profileBtn = $('.btn-profile');
const dashboardBtn = $('.btn-dashboard');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const genresBtn = $('.btn-genres');
const playBtns = $$('.btn-toggle-play');
const footerBtns = $$('.footer-btn');
const playlistsBtn = $('.option-playlists');
const socialBtn = $('.option-social');
const gearBtns = $$('.btn-gear');
const backBtns = $$('.btn-back');
const homeBtn = $('.btn-home');
const createAccountOfIntroBtn = $('.intro-screen .first-btn');
const welcomeBackBtns = $$('.welcome-back-btn');
const logInOfIntroBtn = $('.intro-screen .log-in');
const logInOfLogInBtn = $('.login-screen .first-btn');
const searchBtn = $('.btn-search');
const followingOptionBtn = $('.following-option');
const albumsOptionBtn = $('.albums-option');
const albumsBtn = $('.albums-btn');
const likedTracksOptionBtn = $('.liked-tracks-option');
const yourInsightsOptionBtn = $('.your-insights-option');
const filterTimeOverViewBtn = $('.filter-time');
const songHistoryBtn = $('.listening-history h5');
const mainWindowSelectors = $$('.main-window');
const subWindowSelectors = $$('.sub-window');

// list of screen variables
const introScreen = $('.intro-screen');
const registerScreen = $('.register-screen');
const loginScreen = $('.login-screen');
const profileScreen = $('.profile');
const libraryMainScreen = $('.library-main-screen');
const moreScreen = $('.more');
const homeScreen = $('.home');
const mainScreen = $('.main');
const searchScreen = $('.search');
const followingScreen = $('.following');
const albumsScreen = $('.albums');
const likedTracksScreen = $('.liked-tracks');
const yourInsightsScreen = $('.your-insights');
const songSelectionsScreen = $('.song-selections');
var songList;

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isPlayed: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    songs: [
        {
        name: "Nàng Thơ",
        singer: "Hoàng Dũng",
        path: "./assets/music/song1.mp3",
        image: "./assets/img/img1.jfif"
        },
        {
        name: "Có khi",
        singer: "Hoài Lâm",
        path: "./assets/music/song2.mp3",
        image:"./assets/img/img2.jfif"
        },
        {
        name: "Như những phút ban đầu",
        singer: "Hoài Lâm",
        path: "./assets/music/song3.mp3",
        image: "./assets/img/img3.jfif"
        },
        {
        name: "Hẹn một mai",
        singer: "Bùi Anh Tuấn",
        path: "./assets/music/song4.mp3",
        image: "./assets/img/img4.jfif"
        },
        {
        name: "Tháng tư là lời nói dối của em",
        singer: "Hà Anh Tuấn",
        path: "./assets/music/song5.mp3",
        image: "./assets/img/img5.jfif"
        },
        {
        name: "Vài câu nói có khiến người thay đổi",
        singer: "GreyD ft Tlinh",
        path: "./assets/music/song6.mp3",
        image: "./assets/img/img6.jfif"
        },
        {
        name: "Lời tạm biệt chưa nói",
        singer: "GreyD",
        path: "./assets/music/song8.mp3",
        image: "./assets/img/img8.jfif"
        },
        {
        name: "Từng là của nhau",
        singer: "Bảo Anh ft Táo",
        path: "./assets/music/song9.mp3",
        image: "./assets/img/img9.jfif"
    },
    {
        name: "Có ai thương em như anh",
        singer: "Tóc Tiên",
        path: "./assets/music/song10.mp3",
        image: "./assets/img/img10.jfif"
    },
    
    ],
    
    render: function() {
        let htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? "active" : ""}" data-index = "${index}">
                    <div class="thumb"
                        style="background-image: url('${song.image}');">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                ` 
        })
        if (playlist.querySelector('.song') === null) 
            playlist.insertAdjacentHTML('beforeend', htmls.join(''));
        else 
            playlist.innerHTML = htmls.join('');

        songList = $$('.playlist .option');
        songControl(songList);
    },

    renderProfilePlaylists: function() {
        let htmls = this.songs.map(song => {
            return `
                <div class="song fix-margin-error" >
                    <div class="thumb"
                    style="background-image: url('${song.image}');">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                        </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                        </div>
                        </div>
                        `          
                    })
                    $('.content-playlists').innerHTML = htmls.join('');
                },
    
    renderHomePlaylists: function() {
        let htmls = this.songs.map(song => {
            return `
                <div class="song fix-margin-error" >
                    <div class="thumb"
                    style="background-image: url('${song.image}');">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                        </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                        </div>
                        </div>
                        `          
                    })
                    $('.content-playlists.home').innerHTML = htmls.join('');
                },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },


    handleEvents: function() {
        const _this = this;
        const cdWidth = cd.offsetWidth;
        
        // Xu li dia quay / dung
        
        const cdThumbAnimate = cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }],
            {
                duration: 10000,
                iterations: Infinity
            }
            );
        cdThumbAnimate.pause();    
        


        getParent = function(element, selector) {
            while (element.parentElement) {
                if (element.parentElement.getAttribute('id'))
                    return element.parentElement;
                element = element.parentElement;
            }
        }

        goToPage = function(hrefAtt, classAtt) {
            if (hrefAtt && hrefAtt.charAt(0) === '#' && hrefAtt.length > 1) {
                screenStorage.push(hrefAtt);

                if (classAtt && classAtt.includes('footer-btn')) {

                    mainWindowSelectors.forEach(selector => {
                        selector.classList.add('not-active-screen');
                    })
                    
                    mainWindowSelectors.forEach(selector => {
                        if ("#" + selector.getAttribute('id') === hrefAtt) {
                            selector.classList.remove('not-active-screen');
                            if (selector.getAttribute('id') === 'main') 
                                AudioInProgress.classList.add('not-active-screen');
                            else 
                                AudioInProgress.classList.remove('not-active-screen');
                        }
                    })
                    // Activate footer btn
                    footerBtns.forEach(btn => {
                        btn.classList.remove('active');
                            swapFooterImg(btn);
                    })
                    footerBtns.forEach(btn =>{
                        if (btn.getAttribute('href') === hrefAtt) {
                            btn.classList.add('active');
                            swapFooterImg(btn);
                        }
                    })
                } else {

                    subWindowSelectors.forEach(selector => {
                        selector.classList.add('not-active-screen');
                    })

                    subWindowSelectors.forEach(selector => {
                        if ("#" + selector.getAttribute('id') === hrefAtt) {
                            var getHomeScreen = getParent(selector, hrefAtt).querySelector('.home-screen');
                            getHomeScreen.classList.add('not-active-screen');
                            selector.classList.remove('not-active-screen');
                        }
                    })
                }
            }
        }

        swapFooterImg = function(aSelector) {
            var imgs = aSelector.querySelectorAll('img');
            if (aSelector.classList.contains('active')) {
                imgs[0].classList.add('not-active-screen');
                imgs[1].classList.remove('not-active-screen');
            } else {
                imgs[0].classList.remove('not-active-screen');
                imgs[1].classList.add('not-active-screen');
            }
        }


        goBackPage = function(hrefAtt) {
            mainWindowSelectors.forEach(selector => {
                if ('#' + selector.getAttribute('id') === hrefAtt) {
                    var homeScreen = selector.querySelector('.home-screen');
                    var subScreens = selector.querySelectorAll('.sub-window');

                    subScreens.forEach(screen => {
                        screen.classList.add('not-active-screen');
                    })
                    
                    homeScreen.classList.remove('not-active-screen');
                }
            })
        }

        var screenStorage = [];

        aTags.forEach(function(tag) {
            tag.onclick = function() {
                var hrefAtt = tag.getAttribute('href');
                var classAtt = tag.getAttribute('class');
                goToPage(hrefAtt, classAtt);
            }
        })

        backBtns.forEach(backBtn => {
            backBtn.onclick = function() {
                var hrefAtt = screenStorage[screenStorage.length - 2];
                screenStorage.pop();
                goBackPage(hrefAtt);
            }
        })
        
        // Xu li khi click play
        for (var playBtn of playBtns) {
            playBtn.onclick = function() {
                if (_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                }
                if (songHistory.childElementCount === 0) {
                    const node = document.createElement('div')
                    songHistory.appendChild(node);
                    _this.loadSongHistory();
                }
            }
        }

        const favouriteBtn = $('.favourite-btn');
        var imgSelectors = favouriteBtn.querySelectorAll('img');


        //Fix loi an tim bai hat thi mat bai hat o playlist
        favouriteBtn.onclick = function() {
            imgSelectors[0].classList.toggle('not-active-screen');
            imgSelectors[1].classList.toggle('not-active-screen');
            $$('.playlist .song').forEach(song => {
                if (song.getAttribute('data-index') == _this.currentIndex) {
                    if (!song.classList.contains('liked')) {
                        song.classList.add('liked'); 
                        if (song.classList.contains('active')) {
                            song.classList.remove('active');
                        }
                        $('.liked-songs').insertAdjacentElement('beforeend', song); 
                    }
                } 
            })
        }

        
        

        songControl = function(songOptions) {
            if (_this.isPlayed) {

                songOptions.forEach(option => {
                    option.onclick = function(e) {
                        e.stopPropagation();
                        songSelectionsScreen.classList.remove('not-active-screen');
                        footerBtns.forEach(btn => {
                            if (btn.classList.contains('active')) {
                                swapFooterImg(btn);
                                var href = btn.getAttribute('href');
                                mainWindowSelectors.forEach(selector => {
                                    if ('#' + selector.getAttribute('id') === href) {
                                        selector.classList.add('not-active-screen');
                                    }
                                })
                            }
                        })
                        footer.classList.add('not-active-screen');
                        AudioInProgress.classList.add('not-active-screen');

                        var songSelector = option.parentElement;
                        var img = songSelector.querySelector('.thumb').getAttribute('style');
                        var title = songSelector.querySelector('.body .title').textContent;
                        var singer = songSelector.querySelector('.body .author').textContent;
                    
                        var html =
                            `<div class="song fix-margin-error" >
                                <div class="thumb"
                                style="${img}">
                                </div>
                                <div class="body">
                                    <h3 class="title">${title}</h3>
                                    <p class="author">${singer}</p>
                                </div>
                                <div class="option">
                                    <i class="fas fa-ellipsis-h"></i>
                                </div>
                            </div>`
                        if (currentSong.childElementCount === 0) {
                            currentSong.insertAdjacentHTML('beforeend', html);
                        } else {
                            currentSong.innerHTML = html;
                        }
                    }
                })

                const cancelBtn = $('.cancel-btn');
                cancelBtn.onclick = function() {
                
                    songSelectionsScreen.classList.add('not-active-screen');
                    footerBtns.forEach(btn => {
                        if (btn.classList.contains('active')) {
                            swapFooterImg(btn);
                            var href = btn.getAttribute('href');
                            mainWindowSelectors.forEach(selector => {
                                if ('#' + selector.getAttribute('id') === href) {
                                    selector.classList.remove('not-active-screen');
                                }
                            })
                        }
                    })
                    footer.classList.remove('not-active-screen');
                }
            }
        }
        
        // Khi bai hat duoc play
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play();
            // cdThumbIPAnimate.play();
        }

        // Khi pause bai hat
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
            // cdThumbIPAnimate.pause();
        }

        // Khi tien do bai hat thay doi

        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                dashboardProgress.value = progressPercent;
                audioProgress.value = progressPercent;
                progressed.style.width = progressPercent + '%';
                dashboardProgressed.style.width = progressPercent + '%';
            }
            let ct = audio.currentTime;
            $('.current-time').innerHTML = timeFormat(ct);
            if (!isNaN(audio.duration)) 
                $('.total-time').innerText = timeFormat(audio.duration);
        }

        function timeFormat(ct) {
            minutes = Math.floor(ct / 60);
            seconds = Math.floor(ct % 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            return minutes + ":" + seconds;
        }

        // Xu li khi tua bai hat
        dashboardProgress.ondrag = function(e) {
            audio.currentTime = ((e.offsetX/dashboardProgress.offsetWidth) * audio.duration);
        }

        dashboardProgress.onclick = function(e) {
            audio.currentTime = ((e.offsetX/dashboardProgress.offsetWidth) * audio.duration);
        }


        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig('isRandom', _this.isRandom);
            randomBtn.classList.toggle('active', _this.isRandom);

        }

        // Xu li lap lai mot bai hat 
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        // Khi bam next
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
            _this.loadSongHistory();
        }


        // Khi bam prev
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
            _this.loadSongHistory();
        }

        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }

        // Xu li next song khi audio ended 
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
            _this.loadSongHistory();
        }

        // Lang nghe hanh vi click vao playlist 
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)');
            // Xu li khi click vao bai hat thi chuyen den bai do 
            if (songNode || e.target.closest('.option')) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }

                if (e.target.closest('.option')) {

                }

                if (songHistory.childElementCount === 0) {
                    const node = document.createElement('div')
                    songHistory.appendChild(node);
                    _this.loadSongHistory();
                }
            }
        }
    },

    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }, 200)
    },
    
    loadSongIP: function() {
        const favouriteBtn = $('.favourite-btn');
        var imgSelectors = favouriteBtn.querySelectorAll('img');

        $$('.playlist .song').forEach(song => {
            if (song.getAttribute('data-index') == this.currentIndex) {
                if (song.classList.contains('liked')) {
                    imgSelectors[0].classList.add('not-active-screen');
                    imgSelectors[1].classList.remove('not-active-screen');
                    $('.song-IP').classList.add('liked');                    
                } else {
                    imgSelectors[0].classList.remove('not-active-screen');
                    imgSelectors[1].classList.add('not-active-screen');  
                }
            } 
        })

        title.textContent = this.currentSong.name;
        author.textContent = this.currentSong.singer;
        thumbIP.style.backgroundImage = `url('${this.currentSong.image}')`;
    },
  
    loadCurrentSong: function() {
        this.isPlayed = true;
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
        
        this.loadSongIP();
        this.loadSongHistory();
    },

    loadSongHistory: function() {
        var html =
        `<div class="song fix-margin-error active" >
            <div class="thumb"
            style="background-image: url('${this.currentSong.image}');">
            </div>
            <div class="body">
                <h3 class="title">${this.currentSong.name}</h3>
                <p class="author">${this.currentSong.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>`
        var songNodes = $$('.song-history .song');
        //Handle song history
        if (songHistory.childElementCount === 0) 
            songHistory.innerHTML = "";
        else {
            songHistory.insertAdjacentHTML('afterbegin', html);
            if (songNodes.length > 0) {
                songNodes[0].classList.remove('active');
                songNodes[songNodes.length-1].classList.add('margin-bottom');
            }
            if (songNodes.length > 4) {
                songNodes[3].classList.add('margin-bottom');
                songNodes[4].classList.add('hidden-song');
                songNodes[4].classList.remove('margin-bottom');
            }
        }

        songHistoryBtn.onclick = function () {
            songNodes.forEach(function (node) {
                if (node.classList.contains('hidden-song') || node.classList.contains('margin-bottom')) {
                    node.classList.remove('hidden-song');
                    node.classList.remove('margin-bottom');
                }
            })
            songNodes[songNodes.length-1].classList.add('margin-bottom');
        }
    },

    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },

    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex > this.songs.length - 1) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    prevSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    playRandomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    start: function() {
        // this.loadConfig();
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();
        this.render();
        this.renderHomePlaylists();
        // Hien thi trang thai ban dau cua button repeat va random
        // repeatBtn.classList.toggle('active', this.isRepeat);
        // randomBtn.classList.toggle('active', this.isRandom);
    }
}
app.start();
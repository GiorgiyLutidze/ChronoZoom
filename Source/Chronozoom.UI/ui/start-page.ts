/// <reference path='../scripts/cz.ts'/> 
/// <reference path='../scripts/typings/jquery/jquery.d.ts'/>

module CZ {
    export module StartPage {
        /* Dummy data in an approximate format that might be returned from a service ... */
        export var tileData = [
            {
                "Idx": 0,
                "Title": "Big History",
                "Thumbnail": "../images/dummy/tile_bighistory.jpg",
                "Author": "Some Author",
                "URL": "http://www.chronozoom.com/#/t00000000-0000-0000-0000-000000000000@x=0.4999999998954347&y=-0.46459331778482354&w=3.841695822797034e-12&h=3.7430627449314544e-12"
            },
            {
                "Idx": 1,
                "Title": "CERN",
                "Thumbnail": "../images/dummy/tile_cern.jpg",
                "Author": "Some Author",
                "URL": "http://www.chronozoom.com/#/t00000000-0000-0000-0000-000000000000@x=0.49999999192440875&y=-0.4645933209201501&w=3.729306137185042e-11&h=3.633558592459924e-11"
            },
            {
                "Idx": 2,
                "Title": "Earth Science",
                "Thumbnail": "../images/dummy/tile_earthscience.jpg",
                "Author": "Some Author",
                "URL": "http://www.chronozoom.com/#/t00000000-0000-0000-0000-000000000000@x=0.49999999988061194&y=-0.46459331795948755&w=4.546120315559252e-12&h=4.4294015903520115e-12"
            },
            {
                "Idx": 3,
                "Title": "King Tut",
                "Thumbnail": "../images/dummy/tile_kingtut.jpg",
                "Author": "Some Author",
                "URL": "http://www.chronozoom.com/#/t00000000-0000-0000-0000-000000000000@x=0.49999967062717304&y=-0.4645931999741229&w=3.5221148563086766e-10&h=3.4316868149181225e-10"
            },
            {
                "Idx": 4,
                "Title": "Napoleon",
                "Thumbnail": "../images/dummy/tile_napoleon.jpg",
                "Author": "Some Author",
                "URL": "http://www.chronozoom.com/#/t00000000-0000-0000-0000-000000000000@x=0.4999999840411981&y=-0.46459346560505227&w=5.935054278147061e-10&h=5.782675563705605e-10"
            },
            {
                "Idx": 5,
                "Title": "World War I",
                "Thumbnail": "../images/dummy/tile_ww1.jpg",
                "Author": "Some Author",
                "URL": "http://www.chronozoom.com/#/t00000000-0000-0000-0000-000000000000@x=0.49999999485392826&y=-0.4645933221621095&w=3.314938789411939e-12&h=3.229829860746773e-12"
            },
            {
                "Idx": 6,
                "Title": "Coluseum",
                "Thumbnail": "../images/dummy/tile_colosseum.jpg",
                "Author": "Some Author",
                "URL": "http://www.chronozoom.com/#/t00000000-0000-0000-0000-000000000000@x=0.49999988732590944&y=-0.4645934478931077&w=1.0069124184819225e-9&h=9.810605875309654e-10"
            },
            {
                "Idx": 7,
                "Title": "Justin Morrill",
                "Thumbnail": "../images/dummy/tile_justin_morrill.jpg",
                "Author": "Some Author",
                "URL": "http://www.chronozoom.com/#/t00000000-0000-0000-0000-000000000000@x=0.4999999897945675&y=-0.46459338150077905&w=1.9362194151655837e-10&h=1.8865082227261387e-10"
            },
            {
                "Idx": 8,
                "Title": "Big History 2",
                "Thumbnail": "../images/dummy/tile_bighistory.jpg",
                "Author": "Some Author",
                "URL": "http://www.chronozoom.com/#/t00000000-0000-0000-0000-000000000000@x=0.4996898109169686&y=-0.46442779133805834&w=0.0007080832576286593&h=0.0006899036738441856"
            }
        ];


        /* ---------------- Tile Layout -------------------
         * Depending on how the tiles need to may layed out on reformat, these classnames in this list below will change.
         * From smallest to largest:
         * - Three rows of tiles 1 and 2
         * - Three rows of tiles 1 through 3
         * - One top row of tiles 1-4, and two columns of tiles 1-4
         * - Three columns of tiles 1-6
         *
         * With a different layout where uneven numbers of tiles is used there will be differences between the three sections 
         */
        export var tileLayout = [
            {
                "Name": "#combo0-icons",
                "Visibility": [
                    "box",
                    "box",
                    "box ex3",
                    "box ex3 ex4",
                    "box ex3 ex4 ex6",
                    "box ex3 ex4 ex6"
                ],
            },
            {
                "Name": "#FeaturedTimelinesBlock-tiles",
                "Visibility": [
                    "box",
                    "box",
                    "box ex3",
                    "box ex3 ex4",
                    "box ex3 ex4 ex6",
                    "box ex3 ex4 ex6"
                ],
            },
            {
                "Name": "#TwitterBlock",
                "Visibility": [
                    "box",
                    "box",
                    "box ex3",
                    "box ex3 ex4",
                    "box ex3 ex4 ex6",
                    "box ex3 ex4 ex6"
                ],
            },
        ];


        export function cloneTileTemplate(template, target, idx) {
            for (var i = 0; i < target[idx].Visibility.length; i++) {
                var o = $(template).clone(true, true).appendTo(target[idx].Name);
                o.attr("class", target[idx].Visibility[i]);
                o.attr("id", "t" + idx + "i" + i);
                $("#t" + idx + "i" + i + " .boxInner .tile-photo img").attr("src", tileData[i].Thumbnail).attr("alt", tileData[i].Title);
                $("#t" + idx + "i" + i + " .boxInner .tile-meta .tile-meta-title").text(tileData[i].Title);
                $("#t" + idx + "i" + i + " .boxInner .tile-meta .tile-meta-author").text(tileData[i].Author);
            }
        }

       export function cloneListTemplate(template,target,idx){
            for( var i = 0; i < tileData.length; i++){
                var o=$(template).clone( true, true).appendTo(target);

                o.attr("id","l"+idx+"i"+i);
                $("#l" + idx + "i" + i + " .li-title a").attr("href",tileData[i].URL);
                $("#l" + idx + "i" + i + " .li-title a").text(tileData[i].Title);
                $("#l" + idx + "i" + i + " .li-author").text(tileData[i].Author);
                $("#l" + idx + "i" + i + " .li-icon").text(tileData[i].Thumbnail);
            }
        }
        
        export function cloneTweetTemplate(template, target, idx){
            for( var i=0;i<target[idx].Visibility.length;i++){
                var o=$(template).clone( true, true).appendTo(target[idx].Name);
                o.attr("class","tweet-"+target[idx].Visibility[i]);
                o.attr("id","m"+idx+"i"+i);
                /*
                $("#m"+idx+"i"+i+" .boxInner .tile-photo img").attr("src",tileData[i].Thumbnail).attr("alt",tileData[i].Title);
                $("#m"+idx+"i"+i+" .boxInner .tile-meta .tile-meta-title").text(tileData[i].Title);
                $("#m"+idx+"i"+i+" .boxInner .tile-meta .tile-meta-author").text(tileData[i].Author);
                */
            }
        }

        export function TwitterLayout( target, idx) {

              CZ.Service.getRecentTweets().done(response => {
                 for (var i = 0, len = response.d.length; i < len; ++i) {
                var  text =  response.d[i].Text;
                var  author = response.d[i].User.Name;
                var  time = response.d[i].User.CreatedDate;
                $("#m"+idx+"i"+i+" .boxInner .tile-meta .tile-meta-text").text(text);
                $("#m"+idx+"i"+i+" .boxInner .tile-meta .tile-meta-author").text(author);

                 }
        
            });

              
        }

       export function listFlip(name){
                if( 'block' != document.getElementById(name+'-list').style.display){
                    document.getElementById(name+'-list').style.display = 'block';
                    document.getElementById(name+'-tiles').style.display = 'none';
                }
                else{
                    document.getElementById(name+'-list').style.display = 'none';
                    document.getElementById(name+'-tiles').style.display = 'block';
                }
        }
        /*     var elem = document.createElement('iframe');
             elem.setAttribute("id", id);
             if (videoSrc.indexOf('?') == -1)
                 videoSrc += '?wmode=opaque';
             else
                 videoSrc += '&wmode=opaque';
             elem.setAttribute("src", videoSrc);
             elem.setAttribute("visible", 'true');
             elem.setAttribute("controls", 'true');*/

        export function InitializeStartVideo() {
            var id = "StartVideoId";
            var videoSrc = 'http://video-js.zencoder.com/oceans-clip.mp4';
            var elem = document.createElement('iframe');
            elem.setAttribute("id", id);
            elem.setAttribute("src", videoSrc);
            elem.setAttribute("visible", 'true');
            elem.setAttribute("controls", 'true');
            //          elem.setAttribute("class",'WelcomeVideo');
            $("#StartVideoHolder").append(elem);
        }
    }
}